import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import BottomNavigation from '../../components/BottomNavigation';

export default function AdminAddProduct() {
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
                <Link to="/admin/inventory" className="text-surface/40 hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h2 className="font-headline text-2xl italic">Novo Produto <span className="text-secondary">VC</span></h2>
              </div>
            </div>
          </div>
        </header>

        <div className="px-5 md:px-10">
          <div className="mb-8">
            <h2 className="font-headline text-3xl italic">Cadastrar Produto</h2>
            <p className="text-surface/60 text-sm mt-1">Adicione uma nova peça ao catálogo da loja.</p>
          </div>

        <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Column */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-5 sm:p-8">
            <form className="space-y-8">
              <section>
                <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-6 border-b border-secondary/20 pb-2">Detalhes da Peça</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Nome do Produto</label>
                    <input type="text" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors font-headline text-lg" placeholder="Ex: Classic Flap Bag Jumbo" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Marca / Designer</label>
                      <select className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors appearance-none">
                        <option value="">Selecione...</option>
                        <option value="chanel">Chanel</option>
                        <option value="hermes">Hermès</option>
                        <option value="louis-vuitton">Louis Vuitton</option>
                        <option value="dior">Dior</option>
                        <option value="gucci">Gucci</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Categoria</label>
                      <select className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors appearance-none">
                        <option value="">Selecione...</option>
                        <option value="bolsas">Bolsas</option>
                        <option value="sapatos">Sapatos</option>
                        <option value="acessorios">Acessórios</option>
                        <option value="joias">Joias</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Descrição Detalhada</label>
                    <textarea className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors min-h-[120px]" placeholder="Descreva o material, ano, condições, etc."></textarea>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-6 border-b border-secondary/20 pb-2">Precificação & Estoque</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Preço de Venda (R$)</label>
                    <input type="text" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="0,00" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Quantidade em Estoque</label>
                    <input type="number" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="1" min="0" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Condição</label>
                    <select className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors appearance-none">
                      <option value="novo">Novo / Never Worn</option>
                      <option value="excelente">Excelente</option>
                      <option value="muito-bom">Muito Bom</option>
                      <option value="bom">Bom</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-surface/60">Acompanha</label>
                    <input type="text" className="w-full bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg py-3 px-4 text-surface focus:outline-none focus:border-secondary transition-colors" placeholder="Caixa, Dust bag, Cartão..." />
                  </div>
                </div>
              </section>
            </form>
          </div>

          {/* Image Upload Column */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-4 border-b border-secondary/20 pb-2">Imagens</h3>
              
              <div className="aspect-[3/4] border-2 border-dashed border-secondary/30 rounded-xl flex flex-col items-center justify-center text-surface/40 hover:text-secondary hover:border-secondary/60 transition-colors cursor-pointer bg-primary/30 mb-4">
                <span className="material-symbols-outlined text-4xl mb-2">add_photo_alternate</span>
                <span className="text-xs font-medium">Adicionar Foto Principal</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square border border-dashed border-secondary/30 rounded-lg flex items-center justify-center text-surface/40 hover:text-secondary hover:border-secondary/60 transition-colors cursor-pointer bg-primary/30">
                  <span className="material-symbols-outlined">add</span>
                </div>
                <div className="aspect-square border border-dashed border-secondary/30 rounded-lg flex items-center justify-center text-surface/40 hover:text-secondary hover:border-secondary/60 transition-colors cursor-pointer bg-primary/30">
                  <span className="material-symbols-outlined">add</span>
                </div>
                <div className="aspect-square border border-dashed border-secondary/30 rounded-lg flex items-center justify-center text-surface/40 hover:text-secondary hover:border-secondary/60 transition-colors cursor-pointer bg-primary/30">
                  <span className="material-symbols-outlined">add</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-4">
               <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-2 border-b border-secondary/20 pb-2">Status</h3>
               <div className="flex items-center justify-between">
                  <span className="text-sm text-surface">Publicar no catálogo?</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-primary border border-secondary/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-secondary after:border-secondary after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary/20"></div>
                  </label>
               </div>
               <div className="flex items-center justify-between">
                  <span className="text-sm text-surface">Destaque na Home?</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-primary border border-secondary/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-secondary after:border-secondary after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary/20"></div>
                  </label>
               </div>
            </div>

            <button type="button" className="w-full py-4 rounded-xl bg-secondary text-primary hover:bg-secondary/90 transition-colors text-sm font-bold uppercase tracking-widest shadow-lg shadow-secondary/20">
              Salvar Produto
            </button>
          </div>
        </div>
      </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
