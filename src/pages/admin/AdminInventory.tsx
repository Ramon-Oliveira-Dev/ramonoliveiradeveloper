import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import BottomNavigation from '../../components/BottomNavigation';

export default function AdminInventory() {
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
                <h2 className="font-headline text-2xl italic">Estoque <span className="text-secondary">VC</span></h2>
              </div>
            </div>
          </div>
          <Link to="/admin/products/new" className="bg-secondary text-primary px-4 py-2 rounded-lg font-bold uppercase tracking-widest text-[10px] hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">add</span>
            Nova Peça
          </Link>
        </header>

        <div className="px-5 md:px-10">
          <div className="mb-8">
            <h2 className="font-headline text-3xl italic">Gerenciar Estoque</h2>
            <p className="text-surface/60 text-sm mt-1">Controle de peças, disponibilidade e catálogo.</p>
          </div>

        <div className="glass-card rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4 border-b border-secondary/10 pb-6">
            <div className="relative w-full md:w-96">
              <input type="text" placeholder="Buscar por nome, marca ou SKU..." className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-2.5 pl-10 pr-4 text-surface focus:outline-none focus:border-secondary transition-colors text-sm" />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-surface/40 text-lg">search</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <select className="bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-2.5 px-4 text-surface text-sm focus:outline-none focus:border-secondary transition-colors appearance-none w-full sm:w-auto">
                <option>Todas as Marcas</option>
                <option>Chanel</option>
                <option>Hermès</option>
                <option>Louis Vuitton</option>
              </select>
              <select className="bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-2.5 px-4 text-surface text-sm focus:outline-none focus:border-secondary transition-colors appearance-none w-full sm:w-auto">
                <option>Status</option>
                <option>Disponível</option>
                <option>Esgotado</option>
                <option>Reservado</option>
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-secondary/10 text-surface/40 text-[10px] uppercase tracking-widest">
                  <th className="pb-3 font-normal w-12"></th>
                  <th className="pb-3 font-normal">Produto</th>
                  <th className="pb-3 font-normal">Marca</th>
                  <th className="pb-3 font-normal">SKU</th>
                  <th className="pb-3 font-normal">Preço</th>
                  <th className="pb-3 font-normal text-center">Qtd</th>
                  <th className="pb-3 font-normal">Status</th>
                  <th className="pb-3 font-normal text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* Item 1 */}
                <tr className="border-b border-secondary/5 hover:bg-white/5 transition-colors group">
                  <td className="py-3">
                    <div className="w-10 h-10 rounded bg-primary/50 border border-secondary/20 overflow-hidden">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWri3NFScn3lZvHcgKmcL0GVpXFsR-KYGkeRB45heaoDJfrK-sV1ocU87A4iEEDdYxc_uivoposomPaKj5WP-gMvBlsojMy6roXGBZHaIhuEG6SPpt52ozamlMldoApu_1EwcbWNDVxOz39zgOw0C3fz788RokDIq32GBVwdwFwZO_Lvhn4s1QUSqZot5FDChxNHIArDgJhRxdyInzUHJ52xGiEk0jbJrYBiRGAD_CTugLZQ6ukhFBRCAj7dms0z5nwccSeZ1PsuM" alt="Bolsa" className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="py-3 font-medium">Birkin 30 Gold</td>
                  <td className="py-3 text-surface/60">Hermès</td>
                  <td className="py-3 font-mono text-xs text-secondary/60">VC-H01</td>
                  <td className="py-3">R$ 14.900</td>
                  <td className="py-3 text-center">1</td>
                  <td className="py-3"><span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs">Disponível</span></td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-surface/40 hover:text-secondary rounded bg-primary/50 border border-secondary/10"><span className="material-symbols-outlined text-sm">edit</span></button>
                      <button className="p-1.5 text-surface/40 hover:text-rose-400 rounded bg-primary/50 border border-secondary/10"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </div>
                  </td>
                </tr>
                
                {/* Item 2 */}
                <tr className="border-b border-secondary/5 hover:bg-white/5 transition-colors group">
                  <td className="py-3">
                    <div className="w-10 h-10 rounded bg-primary/50 border border-secondary/20 overflow-hidden">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw55pEK9hiFDX2V2GV9j2Rxxs8uD-lLUeyvKXhy9weXc-7FoIGDfeDrIhm7bnAr7hb_x2S7XulYOTKP-EZU1wL0aS5M4J6292Gb5Hs1rYJ3vaEgDBn1dUNkFLJ4HwNIekm7fJqpEXSasoTH50bE2d-Pec_-OR1xEcADo4Rw2VoHmAKLN6HhDvZ3gof4NbBLTeUtG0yG0T_x47XHI6T75oeq4KlP5wMt7fEx7XwMRBhFUczzqTPoBhB5IPs1WY5to1euvC0EadT8AU" alt="Bolsa" className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="py-3 font-medium">Kelly Epsom</td>
                  <td className="py-3 text-surface/60">Hermès</td>
                  <td className="py-3 font-mono text-xs text-secondary/60">VC-H02</td>
                  <td className="py-3">R$ 12.400</td>
                  <td className="py-3 text-center text-rose-400 font-bold">0</td>
                  <td className="py-3"><span className="px-2 py-1 bg-rose-500/20 text-rose-400 rounded text-xs">Esgotado</span></td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-surface/40 hover:text-secondary rounded bg-primary/50 border border-secondary/10"><span className="material-symbols-outlined text-sm">edit</span></button>
                      <button className="p-1.5 text-surface/40 hover:text-rose-400 rounded bg-primary/50 border border-secondary/10"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </div>
                  </td>
                </tr>

                {/* Item 3 */}
                <tr className="border-b border-secondary/5 hover:bg-white/5 transition-colors group">
                  <td className="py-3">
                    <div className="w-10 h-10 rounded bg-primary/50 border border-secondary/20 overflow-hidden">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiF85Iy3Gfv7f_kxwz7x5O-WAzGtfUTxaK5Ojt2Csp2KCVxvmnziRwOv6sQFeCTsjV0Zm5jZcuwVllazi8NeY1AYuSfXrzLhvItp1IDOEx4ap3NmXHPncok0WhkZpP7a2BP5sMaGLRNrls4EOGw_3y0tfNtxxL5-TwilSqblr5tLAEv7EmyIlcpPuHWVkx8ZeIk-ANeTC0Bz2O_j0pdtqJJy9LyEDZOhadT-nXpPuagcPtFVmySQ9Uzp-MFR0AQRcPoua1tmINQqo" alt="Bolsa" className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="py-3 font-medium">Neverfull MM</td>
                  <td className="py-3 text-surface/60">Louis Vuitton</td>
                  <td className="py-3 font-mono text-xs text-secondary/60">VC-LV01</td>
                  <td className="py-3">R$ 8.900</td>
                  <td className="py-3 text-center">2</td>
                  <td className="py-3"><span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs">Disponível</span></td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-surface/40 hover:text-secondary rounded bg-primary/50 border border-secondary/10"><span className="material-symbols-outlined text-sm">edit</span></button>
                      <button className="p-1.5 text-surface/40 hover:text-rose-400 rounded bg-primary/50 border border-secondary/10"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex justify-between items-center text-xs text-surface/40">
            <span>Mostrando 3 de 45 produtos</span>
            <div className="flex gap-1">
              <button className="w-8 h-8 rounded border border-secondary/20 flex items-center justify-center hover:bg-secondary/10 hover:text-secondary transition-colors"><span className="material-symbols-outlined text-[16px]">chevron_left</span></button>
              <button className="w-8 h-8 rounded border border-secondary/50 bg-secondary/10 text-secondary flex items-center justify-center">1</button>
              <button className="w-8 h-8 rounded border border-secondary/20 flex items-center justify-center hover:bg-secondary/10 hover:text-secondary transition-colors">2</button>
              <button className="w-8 h-8 rounded border border-secondary/20 flex items-center justify-center hover:bg-secondary/10 hover:text-secondary transition-colors">3</button>
              <button className="w-8 h-8 rounded border border-secondary/20 flex items-center justify-center hover:bg-secondary/10 hover:text-secondary transition-colors"><span className="material-symbols-outlined text-[16px]">chevron_right</span></button>
            </div>
          </div>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
