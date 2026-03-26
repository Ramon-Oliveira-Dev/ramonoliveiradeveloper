import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import BottomNavigation from '../../components/BottomNavigation';

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen global-bg text-surface font-body flex flex-col">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Main Content */}
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
              <h2 className="font-headline text-2xl italic">Admin <span className="text-secondary">VC</span></h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-primary/40 backdrop-blur-sm border border-secondary/20 flex items-center justify-center text-surface/60 hover:text-secondary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/50 flex items-center justify-center text-secondary font-headline italic">
              A
            </div>
          </div>
        </header>

        <div className="px-5 md:px-10">
          <div className="mb-8">
            <h2 className="font-headline text-3xl italic">Dashboard</h2>
            <p className="text-surface/60 text-sm mt-1">Bem-vindo ao painel de controle Vallechic.</p>
          </div>

          {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="glass-card p-6 rounded-2xl border-t-4 border-t-secondary">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-surface/60 text-xs uppercase tracking-widest text-wrap">Total em Estoque</h3>
              <span className="material-symbols-outlined text-secondary">inventory_2</span>
            </div>
            <p className="font-headline text-3xl text-surface mb-1">1.245</p>
            <p className="text-surface/40 text-[10px] uppercase tracking-wider">Peças cadastradas</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl border-t-4 border-t-blue-400">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-surface/60 text-xs uppercase tracking-widest">Valor do Estoque</h3>
              <span className="material-symbols-outlined text-blue-400">account_balance_wallet</span>
            </div>
            <p className="font-headline text-3xl text-surface mb-1">R$ 842.500</p>
            <p className="text-surface/40 text-[10px] uppercase tracking-wider">Investimento total</p>
          </div>

          <div className="glass-card p-6 rounded-2xl border-t-4 border-t-purple-400">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-surface/60 text-xs uppercase tracking-widest">A Receber</h3>
              <span className="material-symbols-outlined text-purple-400">payments</span>
            </div>
            <p className="font-headline text-3xl text-surface mb-1">R$ 124.900</p>
            <p className="text-surface/40 text-[10px] uppercase tracking-wider">Total de clientes</p>
          </div>

          <div className="glass-card p-6 rounded-2xl border-t-4 border-t-rose-400">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-surface/60 text-xs uppercase tracking-widest">Clientes Ativos</h3>
              <span className="material-symbols-outlined text-rose-400">group</span>
            </div>
            <p className="font-headline text-3xl text-surface mb-1">84</p>
            <p className="text-emerald-400 text-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              +3 novos este mês
            </p>
          </div>
        </div>

        {/* Recent Orders & Low Stock */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-card rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline text-xl italic">Pedidos Recentes</h3>
              <Link to="/admin/finances" className="text-secondary text-xs uppercase tracking-widest hover:underline">Ver Todos</Link>
            </div>
            <div className="overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-secondary/10 text-surface/40 text-[10px] uppercase tracking-widest">
                    <th className="pb-3 font-normal">Pedido</th>
                    <th className="pb-3 font-normal">Cliente</th>
                    <th className="pb-3 font-normal">Data</th>
                    <th className="pb-3 font-normal">Status</th>
                    <th className="pb-3 font-normal text-right">Valor</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-secondary/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 font-mono text-secondary">#1042</td>
                    <td className="py-4">Maria Silva</td>
                    <td className="py-4 text-surface/60">Hoje, 14:30</td>
                    <td className="py-4"><span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs">Aprovado</span></td>
                    <td className="py-4 text-right font-medium">R$ 14.900</td>
                  </tr>
                  <tr className="border-b border-secondary/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 font-mono text-secondary">#1041</td>
                    <td className="py-4">Ana Costa</td>
                    <td className="py-4 text-surface/60">Hoje, 11:15</td>
                    <td className="py-4"><span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded text-xs">Pendente</span></td>
                    <td className="py-4 text-right font-medium">R$ 8.900</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 font-mono text-secondary">#1040</td>
                    <td className="py-4">Juliana Santos</td>
                    <td className="py-4 text-surface/60">Ontem, 16:45</td>
                    <td className="py-4"><span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Enviado</span></td>
                    <td className="py-4 text-right font-medium">R$ 12.400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-headline text-xl italic mb-6">Estoque Baixo</h3>
            <div className="space-y-4">
              {[
                { name: 'Birkin 30 Gold', brand: 'Hermès', stock: 1, img: 'https://picsum.photos/seed/hermes/100/100' },
                { name: 'Classic Flap', brand: 'Chanel', stock: 0, img: 'https://picsum.photos/seed/chanel/100/100' },
                { name: 'Neverfull MM', brand: 'Louis Vuitton', stock: 2, img: 'https://picsum.photos/seed/lv/100/100' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                  <img src={item.img} alt={item.name} className="w-12 h-12 rounded-lg object-cover" referrerPolicy="no-referrer" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-[10px] text-surface/40 uppercase tracking-widest">{item.brand}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold ${item.stock === 0 ? 'text-rose-400' : 'text-amber-400'}`}>
                      {item.stock} un
                    </p>
                    <p className="text-[10px] text-surface/40 uppercase">Restante</p>
                  </div>
                </div>
              ))}
              <Link to="/admin/inventory" className="block text-center py-3 rounded-xl border border-secondary/20 text-secondary text-[10px] uppercase tracking-widest font-bold hover:bg-secondary/10 transition-colors mt-4">
                Ver Estoque Completo
              </Link>
            </div>
          </div>
        </div>
      </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
}
