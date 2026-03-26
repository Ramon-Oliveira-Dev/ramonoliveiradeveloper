import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import BottomNavigation from '../components/BottomNavigation';
import Sidebar from '../components/Sidebar';

const categories = ['Todas as bolsas', 'Borboleta Azul', 'La Celicia', 'Lace Lore', 'LC Winni', 'Safira Sol'];
const products = [
  {
    id: 'bolsa-1',
    name: 'Birkin 30 Gold',
    brand: 'Borboleta Azul',
    price: 14900,
    originalPrice: 18625,
    discount: 20,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWri3NFScn3lZvHcgKmcL0GVpXFsR-KYGkeRB45heaoDJfrK-sV1ocU87A4iEEDdYxc_uivoposomPaKj5WP-gMvBlsojMy6roXGBZHaIhuEG6SPpt52ozamlMldoApu_1EwcbWNDVxOz39zgOw0C3fz788RokDIq32GBVwdwFwZO_Lvhn4s1QUSqZot5FDChxNHIArDgJhRxdyInzUHJ52xGiEk0jbJrYBiRGAD_CTugLZQ6ukhFBRCAj7dms0z5nwccSeZ1PsuM',
    isNew: true,
  },
  {
    id: 'bolsa-2',
    name: 'Kelly Epsom',
    brand: 'La Celicia',
    price: 12400,
    originalPrice: 14588,
    discount: 15,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCw55pEK9hiFDX2V2GV9j2Rxxs8uD-lLUeyvKXhy9weXc-7FoIGDfeDrIhm7bnAr7hb_x2S7XulYOTKP-EZU1wL0aS5M4J6292Gb5Hs1rYJ3vaEgDBn1dUNkFLJ4HwNIekm7fJqpEXSasoTH50bE2d-Pec_-OR1xEcADo4Rw2VoHmAKLN6HhDvZ3gof4NbBLTeUtG0yG0T_x47XHI6T75oeq4KlP5wMt7fEx7XwMRBhFUczzqTPoBhB5IPs1WY5to1euvC0EadT8AU',
    isNew: false,
  },
  {
    id: 'bolsa-3',
    name: 'Neverfull MM',
    brand: 'Lace Lore',
    price: 8900,
    originalPrice: 12714,
    discount: 30,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiF85Iy3Gfv7f_kxwz7x5O-WAzGtfUTxaK5Ojt2Csp2KCVxvmnziRwOv6sQFeCTsjV0Zm5jZcuwVllazi8NeY1AYuSfXrzLhvItp1IDOEx4ap3NmXHPncok0WhkZpP7a2BP5sMaGLRNrls4EOGw_3y0tfNtxxL5-TwilSqblr5tLAEv7EmyIlcpPuHWVkx8ZeIk-ANeTC0Bz2O_j0pdtqJJy9LyEDZOhadT-nXpPuagcPtFVmySQ9Uzp-MFR0AQRcPoua1tmINQqo',
    isNew: false,
  },
  {
    id: 'bolsa-4',
    name: 'Twist Epi',
    brand: 'LC Winni',
    price: 10200,
    originalPrice: 11333,
    discount: 10,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIaoP_jun10BLK2Z-Sj3ikExqNBN_jORg8QyVQ7BsWsqhAZzRfhePMttHIo7dNCjzLHEqYG56bE-zQXaIcq96RBvQcf3po4YZhRuawfeEuBjGeB7q6ISKGh9a8heDoSLSA_d9Mqa62KcEx5mWdrFSpR5Vs44SO1OJy2hEQnwQuKJGWPfqRcTgS3s8F9a4vU6CC5x2JPMfdAkWGN0sD9I-eYgD1JdsUJhS0UPfsvk2yChLrsYQvTuIlOQM89mBha8zfwO4O63e-i3o',
    isNew: false,
  },
  {
    id: 'bolsa-5',
    name: 'Classic Flap',
    brand: 'Safira Sol',
    price: 15500,
    originalPrice: 19375,
    discount: 20,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp7ZAM9Xl2SArYuMCmGVVBuuBD_2zjqmHJEKLIN0LxHrQnFS0RcENLvUrCL_Zxu9IrVZWRuw0Ac4pP9qA2rAwMeEmi5m28hVb2Xv8MFgX6MnJFTKeJMYhKbROlkKUUwCAmCHg-lcdMxs5FsQrtJijFvbX2i-Bc9YOAOD5xZZ-GxNMAr3CEQ4Mdbonq-IhNtbJtcrsNC7nEJQtCNRikbmsPLItkI94d5ybJ0IiHX3CAR02euN_FJ51uSU12u8oUGk7v6VAgB25Sn3U',
    isNew: true,
  }
];
export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('Todas as bolsas');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const totalItems = useCartStore((state) => state.getTotalItems());

  const filteredProducts = selectedCategory === 'Todas as bolsas' 
    ? products 
    : products.filter(p => p.brand === selectedCategory);

  return (
    <div className="global-bg text-surface font-body selection:bg-secondary/30 min-h-screen flex flex-col">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bar-fume">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="w-10 h-10 rounded-full border border-secondary/20 overflow-hidden flex items-center justify-center bg-primary active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-secondary text-xl">menu</span>
        </button>
        <Link to="/home" className="font-headline text-2xl font-bold tracking-tighter text-surface flex items-center gap-0.5">
          <span className="material-symbols-outlined text-xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          <span className="uppercase">vc</span>
        </Link>
        <Link to="/checkout" className="text-surface hover:opacity-80 transition-opacity active:scale-95 duration-150 ease-in-out relative">
          <div className="relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-secondary text-primary text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </div>
        </Link>
      </header>

      <main className="flex-grow pt-24 pb-32 px-4 md:px-6 w-full min-w-0">
        <div className="max-w-7xl mx-auto w-full min-w-0">
          <header className="mb-8 text-center space-y-3">
            <h1 className="font-headline text-4xl md:text-5xl text-surface italic">Catálogo</h1>
            <p className="font-label text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary/80">A coleção completa Vallechic</p>
          </header>

          <div className="flex gap-3 mb-8 overflow-x-auto no-scrollbar pb-2 px-2 snap-x w-full">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 snap-start px-5 py-2 text-[10px] tracking-[0.15em] uppercase whitespace-nowrap font-bold rounded-full transition-all border glass-button ${
                  selectedCategory === category 
                    ? 'active' 
                    : 'text-surface/60 hover:text-surface'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <div className="aspect-[3/4] bg-primary/40 overflow-hidden luxury-border relative rounded-xl mb-4 glass-card">
                  <img alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={product.image} />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {product.isNew && (
                      <span className="bg-secondary text-primary px-2 py-1 text-[8px] tracking-widest uppercase font-bold rounded-sm w-fit">Novidade</span>
                    )}
                    {product.discount > 0 && (
                      <span className="bg-red-800/90 text-white px-2 py-1 text-[8px] tracking-widest uppercase font-bold rounded-sm w-fit">-{product.discount}% OFF</span>
                    )}
                  </div>
                  <button 
                    onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
                    className="absolute bottom-3 right-3 w-10 h-10 bg-primary/80 backdrop-blur-md rounded-full flex items-center justify-center text-surface opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-secondary hover:text-primary active:scale-90"
                  >
                    <span className="material-symbols-outlined text-xl">shopping_cart</span>
                  </button>
                </div>
                <div className="flex flex-col flex-grow">
                  <p className="text-[10px] tracking-[0.2em] text-surface/40 uppercase mb-1">{product.brand}</p>
                  <h3 className="font-headline text-lg text-surface leading-tight mb-2 flex-grow">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <p className="text-sm font-medium text-secondary">R$ {product.price.toLocaleString('pt-BR')}</p>
                    {product.discount > 0 && (
                      <p className="text-xs text-surface/40 line-through">R$ {product.originalPrice.toLocaleString('pt-BR')}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12 text-surface/60">
              <p>Nenhuma bolsa encontrada nesta categoria.</p>
            </div>
          )}

          <div className="mt-16 flex justify-center">
            <button className="border border-secondary/30 text-secondary px-8 py-3 rounded-full font-label text-[10px] uppercase tracking-[0.2em] hover:bg-secondary hover:text-primary transition-colors duration-300">Carregar Mais</button>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
