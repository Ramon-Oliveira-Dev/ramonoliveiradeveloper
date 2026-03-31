import React, { useState, useRef } from 'react';
import { Download, Trash2, Upload, AlertTriangle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';

export default function SettingsData() {
  const { user } = useAuth();
  const [isExporting, setIsExporting] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetConfirmation, setResetConfirmation] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Ordem de deleção: tabelas filhas primeiro, depois as pais.
  const tables = [
    'sale_items',
    'installments',
    'inventory_movements',
    'sales',
    'products',
    'clients',
    'notifications',
    'business_settings'
  ];

  const handleExport = async () => {
    try {
      setIsExporting(true);
      const backupData: Record<string, any> = {};

      for (const table of tables) {
        const { data, error } = await supabase.from(table).select('*');
        if (error) throw error;
        backupData[table] = data;
      }

      const jsonString = JSON.stringify(backupData, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      const date = new Date().toISOString().split('T')[0];
      link.download = `backup_vallechic_${date}.json`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      await supabase.from('system_logs').insert({
        action: 'EXPORT',
        message: 'Backup do sistema exportado com sucesso.',
        user_email: user?.email || 'Desconhecido'
      });

      toast.success('Backup exportado com sucesso!');
    } catch (error: any) {
      console.error('Erro ao exportar backup:', error);
      toast.error('Erro ao exportar backup: ' + error.message);
    } finally {
      setIsExporting(false);
    }
  };

  const handleHardReset = async () => {
    if (resetConfirmation !== 'EXCLUIR') {
      toast.error('Digite EXCLUIR para confirmar.');
      return;
    }

    try {
      setIsResetting(true);
      
      // Deleta respeitando a ordem das Foreign Keys
      for (const table of tables) {
        const { error: delError } = await supabase.from(table).delete().not('id', 'is', null);
        if (delError) {
           console.warn(`Erro ao deletar ${table}:`, delError);
        }
      }

      await supabase.from('system_logs').insert({
        action: 'RESET',
        message: 'Sistema zerado (Hard Reset) com sucesso.',
        user_email: user?.email || 'Desconhecido'
      });

      toast.success('Sistema zerado com sucesso!');
      setShowResetModal(false);
      setResetConfirmation('');
    } catch (error: any) {
      console.error('Erro ao zerar sistema:', error);
      toast.error('Erro ao zerar sistema: ' + error.message);
    } finally {
      setIsResetting(false);
    }
  };

  const handleRestore = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsRestoring(true);
      const text = await file.text();
      const backupData = JSON.parse(text);

      // 1. Limpa o banco atual (ordem de deleção)
      for (const table of tables) {
        await supabase.from(table).delete().not('id', 'is', null);
      }

      // 2. Insere os novos dados na ordem inversa (pais primeiro)
      const insertOrder = [...tables].reverse();
      
      for (const table of insertOrder) {
        if (backupData[table] && backupData[table].length > 0) {
          // Usando upsert em vez de insert para evitar erros de duplicidade (Primary Key)
          // Caso a deleção falhe parcialmente, o upsert sobrescreve os dados existentes.
          const { error } = await supabase.from(table).upsert(backupData[table]);
          if (error) {
            console.error(`Erro ao inserir na tabela ${table}:`, error);
            throw new Error(`Erro ao restaurar tabela ${table}: ${error.message}`);
          }
        }
      }

      await supabase.from('system_logs').insert({
        action: 'RESTORE',
        message: 'Backup do sistema restaurado com sucesso.',
        user_email: user?.email || 'Desconhecido'
      });

      toast.success('Backup restaurado com sucesso!');
    } catch (error: any) {
      console.error('Erro ao restaurar backup:', error);
      toast.error('Erro ao restaurar backup: ' + error.message);
    } finally {
      setIsRestoring(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="glass-card p-6 rounded-2xl border border-secondary/20 bg-[#0B1221]">
      <h2 className="font-headline text-2xl italic text-surface mb-6">Configurações de Dados</h2>
      
      <div className="space-y-6">
        {/* Export Backup */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
          <div>
            <h3 className="font-headline text-lg text-surface">Exportar Backup</h3>
            <p className="text-surface/60 text-sm font-body">Baixe um arquivo JSON com todos os dados do sistema.</p>
          </div>
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-secondary text-primary font-bold hover:bg-secondary/90 transition-all disabled:opacity-50"
          >
            <Download size={20} />
            {isExporting ? 'Exportando...' : 'Exportar JSON'}
          </button>
        </div>

        {/* Restore Backup */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
          <div>
            <h3 className="font-headline text-lg text-surface">Restaurar Backup</h3>
            <p className="text-surface/60 text-sm font-body">Importe um arquivo JSON para substituir os dados atuais.</p>
          </div>
          <div>
            <input
              type="file"
              accept=".json"
              ref={fileInputRef}
              onChange={handleRestore}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isRestoring}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-secondary text-secondary font-bold hover:bg-secondary/10 transition-all disabled:opacity-50 w-full md:w-auto"
            >
              <Upload size={20} />
              {isRestoring ? 'Restaurando...' : 'Importar JSON'}
            </button>
          </div>
        </div>

        {/* Hard Reset */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
          <div>
            <h3 className="font-headline text-lg text-rose-500">Zerar Sistema</h3>
            <p className="text-surface/60 text-sm font-body">Apaga permanentemente todos os dados do banco de dados.</p>
          </div>
          <button
            onClick={() => setShowResetModal(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-rose-500 text-white font-bold hover:bg-rose-600 transition-all"
          >
            <Trash2 size={20} />
            Hard Reset
          </button>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      <AnimatePresence>
        {showResetModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card w-full max-w-md p-8 rounded-3xl border border-rose-500/30 bg-[#0B1221]"
            >
              <div className="flex items-center gap-3 text-rose-500 mb-6">
                <AlertTriangle size={32} />
                <h3 className="font-headline text-2xl italic">Atenção!</h3>
              </div>
              
              <p className="text-surface/80 mb-6 font-body">
                Esta ação é irreversível. Todos os clientes, produtos, vendas e configurações serão apagados permanentemente.
              </p>

              <div className="space-y-2 mb-8">
                <label className="text-[10px] uppercase tracking-widest text-surface/60">
                  Digite <span className="text-rose-500 font-bold">EXCLUIR</span> para confirmar
                </label>
                <input
                  type="text"
                  value={resetConfirmation}
                  onChange={(e) => setResetConfirmation(e.target.value)}
                  className="w-full bg-black/50 border border-rose-500/30 rounded-xl py-3 px-4 text-surface focus:outline-none focus:border-rose-500 transition-colors"
                  placeholder="EXCLUIR"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowResetModal(false);
                    setResetConfirmation('');
                  }}
                  className="flex-1 py-3 rounded-2xl border border-transparent text-surface/60 font-bold uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleHardReset}
                  disabled={resetConfirmation !== 'EXCLUIR' || isResetting}
                  className="flex-1 py-3 rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all bg-rose-500 text-white hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isResetting ? 'Apagando...' : 'Confirmar Exclusão'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
