import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import BottomNavigation from '../../components/BottomNavigation';
import { motion } from 'motion/react';

const MOCK_PRODUCTS = [
  { id: '1', name: 'Classic Flap Bag Jumbo', brand: 'Chanel', category: 'Bolsas', stock: 5, price: 45000, img: 'https://picsum.photos/seed/chanel/100/100' },
  { id: '2', name: 'Birkin 30 Gold', brand: 'Hermès', category: 'Bolsas', stock: 2, price: 120000, img: 'https://picsum.photos/seed/hermes/100/100' },
  { id: '3', name: 'Neverfull MM', brand: 'Louis Vuitton', category: 'Bolsas', stock: 12, price: 12500, img: 'https://picsum.photos/seed/lv/100/100' },
  { id: '4', name: 'Lady Dior Medium', brand: 'Dior', category: 'Bolsas', stock: 3, price: 38000, img: 'https://picsum.photos/seed/dior/100/100' },
  { id: '5', name: 'Marmont Shoulder Bag', brand: 'Gucci', category: 'Bolsas', stock: 8, price: 15900, img: 'https://picsum.photos/seed/gucci/100/100' },
];

export default function AdminProducts() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState(MOCK_PRODUCTS);

  const handleStockExit = (id: string) => {
    setProducts(prev => prev.map(p => {
      if (p.id === id && p.stock > 0) {
        return { ...p, stock: p.stock - 1 };
      }
      return p;
    }));
  };

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
              <h2 className="font-headline text-2xl italic">Produtos <span className="text-secondary">VC</span></h2>
            </div>
          </div>
          <Link 
            to="/admin/products/new" 
            className="bg-secondary text-primary px-4 py-2 rounded-lg font-bold uppercase tracking-widest text-[10px] hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            Novo Produto
          </Link>
        </header>

        <div className="px-5 md:px-10">
          <div className="mb-8">
            <h2 className="font-headline text-3xl italic">Gestão de Produtos</h2>
            <p className="text-surface/60 text-sm mt-1">Visualize e gerencie o catálogo de peças.</p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-secondary/10 text-surface/40 text-[10px] uppercase tracking-widest">
                    <th className="pb-3 font-normal w-12"></th>
                    <th className="pb-3 font-normal">Produto</th>
                    <th className="pb-3 font-normal">Marca</th>
                    <th className="pb-3 font-normal">Categoria</th>
                    <th className="pb-3 font-normal">Preço</th>
                    <th className="pb-3 font-normal text-center">Estoque</th>
                    <th className="pb-3 font-normal text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {products.map((product) => (
                    <tr key={product.id} className="border-b border-secondary/5 hover:bg-white/5 transition-colors">
                      <td className="py-4">
                        <img src={product.img} alt={product.name} className="w-10 h-10 rounded-lg object-cover" referrerPolicy="no-referrer" />
                      </td>
                      <td className="py-4">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-[10px] text-surface/40 uppercase tracking-widest">ID: {product.id}</p>
                      </td>
                      <td className="py-4 text-surface/60">{product.brand}</td>
                      <td className="py-4 text-surface/60">{product.category}</td>
                      <td className="py-4 font-medium">R$ {product.price.toLocaleString('pt-BR')}</td>
                      <td className="py-4 text-center">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${product.stock <= 2 ? 'bg-rose-500/20 text-rose-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                          {product.stock} un
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <button 
                          onClick={() => handleStockExit(product.id)}
                          disabled={product.stock === 0}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                            product.stock > 0 
                              ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20' 
                              : 'bg-surface/5 text-surface/20 border border-surface/10 cursor-not-allowed'
                          }`}
                        >
                          Saída
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
