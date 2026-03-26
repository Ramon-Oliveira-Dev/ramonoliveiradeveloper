import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import BottomNavigation from '../../components/BottomNavigation';
import { motion } from 'motion/react';

const MOCK_CLIENTS = [
  { id: '1', name: 'Maria Eduarda Silva', status: 'Ativo', isVip: true, paymentStatus: 'Adimplente', email: 'maria@exemplo.com' },
  { id: '2', name: 'Ana Carolina Costa', status: 'Ativo', isVip: false, paymentStatus: 'Inadimplente', email: 'ana@exemplo.com' },
  { id: '3', name: 'Juliana Santos', status: 'Inativo', isVip: true, paymentStatus: 'Adimplente', email: 'juliana@exemplo.com' },
  { id: '4', name: 'Carla Mendes', status: 'Ativo', isVip: false, paymentStatus: 'Adimplente', email: 'carla@exemplo.com' },
  { id: '5', name: 'Beatriz Oliveira', status: 'Ativo', isVip: true, paymentStatus: 'Adimplente', email: 'beatriz@exemplo.com' },
];

export default function AdminClients() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [clients, setClients] = useState(MOCK_CLIENTS);

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
              <h2 className="font-headline text-2xl italic">Clientes <span className="text-secondary">VC</span></h2>
            </div>
          </div>
          <Link 
            to="/admin/clients/new" 
            className="bg-secondary text-primary px-4 py-2 rounded-lg font-bold uppercase tracking-widest text-[10px] hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">person_add</span>
            Novo Cliente
          </Link>
        </header>

        <div className="px-5 md:px-10">
          <div className="mb-8">
            <h2 className="font-headline text-3xl italic">Gestão de Clientes</h2>
            <p className="text-surface/60 text-sm mt-1">Visualize e gerencie a base de clientes VIP.</p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-secondary/10 text-surface/40 text-[10px] uppercase tracking-widest">
                    <th className="pb-3 font-normal">Nome</th>
                    <th className="pb-3 font-normal">Status</th>
                    <th className="pb-3 font-normal">VIP</th>
                    <th className="pb-3 font-normal">Pagamento</th>
                    <th className="pb-3 font-normal">E-mail</th>
                    <th className="pb-3 font-normal text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {clients.map((client) => (
                    <tr key={client.id} className="border-b border-secondary/5 hover:bg-white/5 transition-colors">
                      <td className="py-4">
                        <p className="font-medium">{client.name}</p>
                        <p className="text-[10px] text-surface/40 uppercase tracking-widest">ID: {client.id}</p>
                      </td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${client.status === 'Ativo' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                          {client.status}
                        </span>
                      </td>
                      <td className="py-4">
                        {client.isVip ? (
                          <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        ) : (
                          <span className="material-symbols-outlined text-surface/20 text-xl">star</span>
                        )}
                      </td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${client.paymentStatus === 'Adimplente' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                          {client.paymentStatus}
                        </span>
                      </td>
                      <td className="py-4 text-surface/60">{client.email}</td>
                      <td className="py-4 text-right">
                        <button className="text-secondary hover:text-secondary/80 transition-colors">
                          <span className="material-symbols-outlined">edit</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
