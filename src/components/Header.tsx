import React, { useState } from 'react';
import { Menu, X, Phone, User, Sparkles } from 'lucide-react';

interface HeaderProps {
  onNavigateToQuiz: () => void;
  onNavigateToForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateToQuiz, onNavigateToForm }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#0066cc]/10 shadow-[0_1px_8px_rgba(0,102,204,0.06)]">
      <div className="h-20 max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('hero-section')} 
          className="flex items-center gap-3 shrink-0 cursor-pointer"
          id="nav-logo"
        >
          <img
            src="https://lh3.googleusercontent.com/aida/AEtjO1VSQMRX_Rql7BecbhFhC2Uxz8vbv_LmQnBR3K7725TZfMxtQUUofPTDhQxQ8MfbFmn7ESJfPjG5p3E4-Y9CpsLX3oUWzmF-AFmFuJnhU93ewCqgbV9L0eGjh0cVAfsGDk-rnGS48OSZRfcyo3-_xN1Y2xpTUSEVfpBaFAmqy_P51KiXZOzd3d69Sh93Ifmr07SgD5MEdTBQ1TRFahqi_IaqNHGOg_NiFTXAlMwlRnze5ri8gH6d3u2tKw"
            alt="VinaPhone VNPT Logo"
            className="h-8 md:h-9 w-auto object-contain"
          />
          <span className="font-extrabold text-xl tracking-tight text-[#004e9f] hidden sm:inline-block">
            VinaPhone
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6" id="desktop-nav-menu">
          <button 
            onClick={() => scrollToSection('hero-section')} 
            className="text-sm font-semibold text-[#414753] hover:text-[#004e9f] transition-colors"
          >
            Trang chủ
          </button>
          <button 
            onClick={() => scrollToSection('nhu-cau-cua-ban')} 
            className="text-sm font-semibold text-[#414753] hover:text-[#004e9f] transition-colors"
          >
            Nhu cầu của bạn
          </button>
          <button 
            onClick={() => scrollToSection('danh-sach-goi')} 
            className="text-sm font-semibold text-[#414753] hover:text-[#004e9f] transition-colors"
          >
            Gói cước Hot
          </button>
          <button 
            onClick={() => scrollToSection('so-sanh-section')} 
            className="text-sm font-semibold text-[#414753] hover:text-[#004e9f] transition-colors"
          >
            So sánh gói
          </button>
          <button 
            onClick={() => {
              onNavigateToQuiz();
              scrollToSection('quick-quiz');
            }} 
            className="text-sm font-semibold text-[#414753] hover:text-[#004e9f] transition-colors flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#004e9f]" />
            Quiz tư vấn
          </button>
          <button 
            onClick={() => scrollToSection('hoi-dap')} 
            className="text-sm font-semibold text-[#414753] hover:text-[#004e9f] transition-colors"
          >
            Hỏi đáp
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-xs text-[#414753]">Hotline miễn phí 24/7</span>
            <a 
              href="tel:18001091" 
              className="text-sm font-bold text-[#004e9f] hover:text-[#00677f] transition-colors flex items-center justify-end gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#004e9f]" />
              1800 1091
            </a>
          </div>

          <button
            onClick={() => {
              onNavigateToForm();
              scrollToSection('dang-ky-tu-van');
            }}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#004e9f] text-white text-sm font-semibold shadow-[0_4px_16px_rgba(0,78,159,0.24)] hover:bg-[#0066cc] transition-all"
            id="header-cta-btn"
          >
            Tư vấn ngay
          </button>

          <div 
            className="w-9 h-9 rounded-full bg-[#004e9f]/10 text-[#004e9f] flex items-center justify-center shrink-0 cursor-pointer hover:bg-[#004e9f]/20 transition-colors"
            title="Tài khoản cá nhân"
          >
            <User className="w-4 h-4" />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#131b2e] hover:bg-[#f2f3ff] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#e2e7ff] px-4 py-4 space-y-3 shadow-lg">
          <button
            onClick={() => scrollToSection('hero-section')}
            className="block w-full text-left py-2 text-sm font-semibold text-[#131b2e] hover:text-[#004e9f]"
          >
            Trang chủ
          </button>
          <button
            onClick={() => scrollToSection('nhu-cau-cua-ban')}
            className="block w-full text-left py-2 text-sm font-semibold text-[#131b2e] hover:text-[#004e9f]"
          >
            Nhu cầu của bạn
          </button>
          <button
            onClick={() => scrollToSection('danh-sach-goi')}
            className="block w-full text-left py-2 text-sm font-semibold text-[#131b2e] hover:text-[#004e9f]"
          >
            Gói cước Hot
          </button>
          <button
            onClick={() => scrollToSection('so-sanh-section')}
            className="block w-full text-left py-2 text-sm font-semibold text-[#131b2e] hover:text-[#004e9f]"
          >
            So sánh gói
          </button>
          <button
            onClick={() => {
              onNavigateToQuiz();
              scrollToSection('quick-quiz');
            }}
            className="block w-full text-left py-2 text-sm font-semibold text-[#131b2e] hover:text-[#004e9f]"
          >
            Quiz tư vấn 30 giây
          </button>
          <button
            onClick={() => scrollToSection('hoi-dap')}
            className="block w-full text-left py-2 text-sm font-semibold text-[#131b2e] hover:text-[#004e9f]"
          >
            Hỏi đáp
          </button>
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500">Tổng đài 24/7:</span>
            <a href="tel:18001091" className="text-sm font-bold text-[#004e9f]">
              1800 1091 (Miễn phí)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
