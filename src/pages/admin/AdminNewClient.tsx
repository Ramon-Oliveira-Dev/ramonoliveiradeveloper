import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import BottomNavigation from '../../components/BottomNavigation';

export default function AdminNewClient() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
              <div className="flex items-center gap-4">
                <Link to="/admin/dashboard" className="text-surface/40 hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h2 className="font-headline text-2xl italic">Novo Cliente <span className="text-secondary">VC</span></h2>
              </div>
            </div>
          </div>
        </header>

        <div className="px-5 md:px-10">
          <div className="mb-8">
            <h2 className="font-headline text-3xl italic">Cadastrar Cliente VIP</h2>
            <p className="text-surface/60 text-sm mt-1">Adicione um novo perfil à base de clientes exclusivos.</p>
          </div>

        <div className="max-w-3xl glass-card rounded-2xl p-5 sm:p-8">
          <form className="space-y-8">
            {/* Informações Pessoais */}
            <section>
              <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-6 border-b border-secondary/20 pb-2">Informações Pessoais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Nome Completo</label>
                  <input type="text" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="Ex: Maria Eduarda Silva" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">CPF</label>
                  <input type="text" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="000.000.000-00" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">E-mail</label>
                  <input type="email" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="maria@exemplo.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Telefone / WhatsApp</label>
                  <input type="tel" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="(11) 99999-9999" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Data de Nascimento</label>
                  <input type="date" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" />
                </div>
              </div>
            </section>

            {/* Endereço */}
            <section>
              <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-6 border-b border-secondary/20 pb-2">Endereço Principal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">CEP</label>
                  <input type="text" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="00000-000" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Logradouro</label>
                  <input type="text" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="Rua, Avenida, etc." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Número</label>
                  <input type="text" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="123" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Complemento</label>
                  <input type="text" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="Apto 45" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Bairro</label>
                  <input type="text" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="Jardins" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Cidade / Estado</label>
                  <div className="flex gap-2">
                    <input type="text" className="w-2/3 bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="São Paulo" />
                    <input type="text" className="w-1/3 bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="SP" />
                  </div>
                </div>
              </div>
            </section>

            {/* Preferências */}
            <section>
              <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-6 border-b border-secondary/20 pb-2">Preferências & Perfil</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Marcas Favoritas</label>
                  <input type="text" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="Ex: Chanel, Hermès, Dior (separado por vírgula)" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Observações da Consultora</label>
                  <textarea className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors min-h-[100px]" placeholder="Preferências de estilo, histórico de compras, etc."></textarea>
                </div>
                <div className="flex items-center gap-3">
                   <input type="checkbox" id="vip" className="w-5 h-5 accent-secondary bg-primary border-secondary/20 rounded" />
                   <label htmlFor="vip" className="text-sm text-surface">Marcar como Cliente VIP (Prioridade em Lançamentos)</label>
                </div>
              </div>
            </section>

            <div className="pt-6 flex justify-end gap-4">
              <button type="button" className="px-6 py-3 rounded-lg border border-surface/20 text-surface/60 hover:text-surface hover:border-surface/40 transition-colors text-xs font-bold uppercase tracking-widest">
                Cancelar
              </button>
              <button type="submit" className="px-8 py-3 rounded-lg bg-secondary text-primary hover:bg-secondary/90 transition-colors text-xs font-bold uppercase tracking-widest">
                Salvar Cliente
              </button>
            </div>
          </form>
        </div>
      </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
