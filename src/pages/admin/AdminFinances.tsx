import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import BottomNavigation from '../../components/BottomNavigation';
import { motion } from 'motion/react';

const MOCK_FINANCES = {
  revenue: 342500,
  itemsSold: 30,
  invested: 150000,
  profit: 192500,
  workingCapital: 250000,
};

export default function AdminFinances() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('Março 2026');

  return (
    <div className="min-h-screen global-bg text-surface font-body flex flex-col">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="flex-1 min-w-0 p-0 pb-28 overflow-y-auto">
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bar-fume mb-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="w-10 h-10 rounded-full border border-secondary/20 overflow-hidden flex items-center justify-center bg-primary active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined text-secondary text-xl">menu</span>
            </button>
            <div>
              <h2 className="font-headline text-2xl italic">Finanças <span className="text-secondary">VC</span></h2>
            </div>
          </div>
          <div className="relative">
            <select 
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-secondary text-primary px-4 py-2 rounded-lg font-bold uppercase tracking-widest text-[10px] hover:bg-secondary/90 transition-colors appearance-none pr-8 cursor-pointer"
            >
              <option value="Janeiro 2026">Janeiro 2026</option>
              <option value="Fevereiro 2026">Fevereiro 2026</option>
              <option value="Março 2026">Março 2026</option>
            </select>
            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-primary text-sm pointer-events-none">calendar_month</span>
          </div>
        </header>

        <div className="px-5 md:px-10">
          <div className="mb-8">
            <h2 className="font-headline text-3xl italic">Relatório Financeiro</h2>
            <p className="text-surface/60 text-sm mt-1">Análise detalhada de performance para {selectedMonth}.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="glass-card p-6 rounded-2xl border-t-4 border-t-emerald-400">
              <h3 className="text-surface/60 text-[10px] uppercase tracking-widest mb-2">Faturamento Mensal</h3>
              <p className="font-headline text-4xl text-surface mb-1">R$ {MOCK_FINANCES.revenue.toLocaleString('pt-BR')}</p>
              <p className="text-emerald-400 text-xs flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                +18% vs mês anterior
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border-t-4 border-t-blue-400">
              <h3 className="text-surface/60 text-[10px] uppercase tracking-widest mb-2">Itens Vendidos</h3>
              <p className="font-headline text-4xl text-surface mb-1">{MOCK_FINANCES.itemsSold}</p>
              <p className="text-emerald-400 text-xs flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">shopping_bag</span>
                Recorde de vendas
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border-t-4 border-t-amber-400">
              <h3 className="text-surface/60 text-[10px] uppercase tracking-widest mb-2">Valor Investido</h3>
              <p className="font-headline text-4xl text-surface mb-1">R$ {MOCK_FINANCES.invested.toLocaleString('pt-BR')}</p>
              <p className="text-surface/40 text-xs">Aquisição de novas peças</p>
            </div>

            <div className="glass-card p-6 rounded-2xl border-t-4 border-t-purple-400">
              <h3 className="text-surface/60 text-[10px] uppercase tracking-widest mb-2">Lucro Obtido</h3>
              <p className="font-headline text-4xl text-surface mb-1">R$ {MOCK_FINANCES.profit.toLocaleString('pt-BR')}</p>
              <p className="text-emerald-400 text-xs flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">payments</span>
                Margem de 56%
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border-t-4 border-t-indigo-400">
              <h3 className="text-surface/60 text-[10px] uppercase tracking-widest mb-2">Capital de Giro</h3>
              <p className="font-headline text-4xl text-surface mb-1">R$ {MOCK_FINANCES.workingCapital.toLocaleString('pt-BR')}</p>
              <p className="text-surface/40 text-xs">Disponibilidade imediata</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-headline text-xl italic mb-6">Detalhamento de Fluxo</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                <div>
                  <p className="text-sm font-medium">Entradas (Vendas)</p>
                  <p className="text-[10px] text-surface/40 uppercase tracking-widest">Total acumulado</p>
                </div>
                <p className="text-emerald-400 font-bold">R$ 342.500</p>
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                <div>
                  <p className="text-sm font-medium">Saídas (Investimentos)</p>
                  <p className="text-[10px] text-surface/40 uppercase tracking-widest">Reposição de estoque</p>
                </div>
                <p className="text-rose-400 font-bold">- R$ 150.000</p>
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                <div>
                  <p className="text-sm font-medium">Despesas Operacionais</p>
                  <p className="text-[10px] text-surface/40 uppercase tracking-widest">Logística e taxas</p>
                </div>
                <p className="text-rose-400 font-bold">- R$ 12.400</p>
              </div>
              <div className="h-px bg-white/10 my-4" />
              <div className="flex justify-between items-center p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                <div>
                  <p className="text-sm font-bold text-secondary">Saldo Final</p>
                  <p className="text-[10px] text-secondary/60 uppercase tracking-widest">Líquido disponível</p>
                </div>
                <p className="text-secondary font-bold text-xl">R$ 180.100</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
