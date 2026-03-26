import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import BottomNavigation from '../components/BottomNavigation';
import Sidebar from '../components/Sidebar';

export default function Menu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const kits = [
    {
      id: 'kit-heritage',
      name: 'Kit Heritage Sand',
      price: 5150,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp7ZAM9Xl2SArYuMCmGVVBuuBD_2zjqmHJEKLIN0LxHrQnFS0RcENLvUrCL_Zxu9IrVZWRuw0Ac4pP9qA2rAwMeEmi5m28hVb2Xv8MFgX6MnJFTKeJMYhKbROlkKUUwCAmCHg-lcdMxs5FsQrtJijFvbX2i-Bc9YOAOD5xZZ-GxNMAr3CEQ4Mdbonq-IhNtbJtcrsNC7nEJQtCNRikbmsPLItkI94d5ybJ0IiHX3CAR02euN_FJ51uSU12u8oUGk7v6VAgB25Sn3U',
      description: 'Conjunto Premium com acabamento em areia e detalhes dourados.'
    },
    {
      id: 'kit-midnight',
      name: 'Kit Midnight Noir',
      price: 4720,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmgycPsUyZoduorOf0lH8RinowJaT131ncEaWOiKxj_vNSaHIIDKgAPbm2BqkCyuVf9DwG5Mky-r3n1va8WGoCqfH_uMyCqEOpnVpmq1HYBoOuZiONhj1HOeYPxlJfLqXunzJ-hk0yKp-a4LHnemqPyiajTgeHaYt7S32slxUWQXBFxMcIXUDEuIcefWGcdVbduDR7ufKxb_6sqGjkGUUyGTQRpziqWuQTNR25laCmUclwiboAMMoHiPVUv_DjqfPVxLVFuJBt-QQ',
      description: 'Elegância noturna em couro preto de alta qualidade.'
    },
    {
      id: 'kit-elegance-gold',
      name: 'Kit Elegance Gold',
      price: 6200,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWri3NFScn3lZvHcgKmcL0GVpXFsR-KYGkeRB45heaoDJfrK-sV1ocU87A4iEEDdYxc_uivoposomPaKj5WP-gMvBlsojMy6roXGBZHaIhuEG6SPpt52ozamlMldoApu_1EwcbWNDVxOz39zgOw0C3fz788RokDIq32GBVwdwFwZO_Lvhn4s1QUSqZot5FDChxNHIArDgJhRxdyInzUHJ52xGiEk0jbJrYBiRGAD_CTugLZQ6ukhFBRCAj7dms0z5nwccSeZ1PsuM',
      description: 'O brilho do ouro em um conjunto exclusivo de acessórios.'
    }
  ];
  return (
    <div className="global-bg text-surface font-body min-h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* TopAppBar */}
      <header className="sticky top-0 w-full z-50 flex items-center justify-between px-6 py-4 bar-fume">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="w-10 h-10 rounded-full border border-secondary/20 overflow-hidden flex items-center justify-center bg-primary active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-secondary text-xl">menu</span>
        </button>
        <h1 className="font-headline text-2xl font-bold tracking-tighter text-stone-100 flex items-center gap-0.5">
          <span className="material-symbols-outlined text-xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          <span className="uppercase">vc</span>
        </h1>
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

      <main className="pb-32 editorial-gradient min-h-screen max-w-5xl mx-auto px-6 pt-8">
        <div className="mb-10">
          <h2 className="font-headline text-4xl text-surface mb-2">Kits Disponíveis</h2>
          <p className="text-surface/60 text-sm">Explore nossas combinações exclusivas preparadas para você.</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {kits.map((kit) => (
            <div key={kit.id} className="glass-card rounded-3xl overflow-hidden group shadow-2xl">
              <div className="relative aspect-[16/10]">
                <img 
                  src={kit.image} 
                  alt={kit.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary/90 text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">Premium</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline text-2xl text-surface">{kit.name}</h3>
                  <p className="text-secondary font-bold text-xl">R$ {kit.price.toLocaleString('pt-BR')}</p>
                </div>
                <p className="text-surface/60 text-sm mb-6 leading-relaxed">{kit.description}</p>
                <button 
                  onClick={() => addItem({ id: kit.id, name: kit.name, price: kit.price, image: kit.image })}
                  className="w-full glass-button py-4 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-lg shadow-secondary/20 font-bold"
                >
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                  Adicionar Kit à Sacola
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
