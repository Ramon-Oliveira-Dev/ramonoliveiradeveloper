import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { isNavyTheme, toggleTheme } = useTheme();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const menuItems = isAdmin 
    ? [
        { name: 'Dashboard', path: '/admin/dashboard', icon: 'dashboard' },
        { name: 'Produtos', path: '/admin/products', icon: 'shopping_bag' },
        { name: 'Clientes', path: '/admin/clients', icon: 'group' },
        { name: 'Estoque', path: '/admin/inventory', icon: 'inventory_2' },
        { name: 'Finanças', path: '/admin/finances', icon: 'payments' },
      ]
    : [
        { name: 'Início', path: '/home', icon: 'home' },
        { name: 'Catálogo', path: '/catalog', icon: 'grid_view' },
        { name: 'Kits Premium', path: '/menu', icon: 'package_2' },
        { name: 'Contato', path: '/contact', icon: 'chat' },
        { name: 'Sacola', path: '/checkout', icon: 'shopping_cart' },
      ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[280px] bg-[var(--theme-primary)]/70 backdrop-blur-2xl z-[70] border-r border-secondary/10 flex flex-col"
          >
            <div className="p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-12">
                <h2 className="font-headline text-2xl font-bold text-surface flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  <span className="uppercase italic">VC</span>
                </h2>
                <button onClick={onClose} className="text-surface/60 hover:text-secondary transition-colors active:scale-90">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <nav className="flex-1 space-y-3">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                        location.pathname === item.path
                          ? 'bg-secondary text-primary font-bold shadow-lg shadow-secondary/20'
                          : 'text-surface/70 hover:bg-white/5 hover:text-surface'
                      }`}
                    >
                      <span className={`material-symbols-outlined transition-transform duration-300 group-hover:scale-110 ${location.pathname === item.path ? '' : 'text-secondary/60'}`}>
                        {item.icon}
                      </span>
                      <span className="tracking-widest uppercase text-[10px] font-bold">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}

                <div className="h-px bg-white/5 my-6" />

                <motion.div
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={isAdmin ? '/home' : '/admin'}
                    onClick={onClose}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl text-surface/70 hover:bg-white/5 hover:text-surface transition-all duration-300 group"
                  >
                    <span className="material-symbols-outlined text-secondary/60 group-hover:scale-110 transition-transform duration-300">
                      {isAdmin ? 'person' : 'admin_panel_settings'}
                    </span>
                    <span className="tracking-widest uppercase text-[10px] font-bold">
                      {isAdmin ? 'Modo Visitante' : 'Modo Admin'}
                    </span>
                  </Link>
                </motion.div>
              </nav>

              <div className="mt-auto pt-8">
                <div className="flex items-center justify-between p-2 glass-card rounded-xl border border-white/5 max-w-[140px] mx-auto">
                  <div className="flex flex-col ml-1">
                    <span className="text-[6px] uppercase tracking-[0.2em] text-surface/40 font-bold mb-0.5">Tema</span>
                    <span className={`text-[8px] font-bold tracking-wider uppercase ${isNavyTheme ? 'text-blue-400' : 'text-amber-500'}`}>
                      {isNavyTheme ? 'Navy' : 'Brown'}
                    </span>
                  </div>
                  <button 
                    onClick={toggleTheme}
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 active:scale-90 shadow-lg ${
                      isNavyTheme 
                        ? 'bg-blue-500/20 text-blue-400 shadow-blue-500/20' 
                        : 'bg-amber-500/20 text-amber-500 shadow-amber-500/20'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {isNavyTheme ? 'dark_mode' : 'light_mode'}
                    </span>
                  </button>
                </div>
                
                <p className="text-[8px] text-surface/20 uppercase tracking-[0.5em] font-medium text-center mt-8">
                  © 2026 VALLECHIC
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
