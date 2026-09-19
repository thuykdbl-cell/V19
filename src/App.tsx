import React, { useState, useMemo } from 'react';
import { PACKAGES_DATA } from './data/packages';
import { CategoryType, TelecomPackage } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickTicker } from './components/QuickTicker';
import { FeatureAdvantages } from './components/FeatureAdvantages';
import { QuickNeedHubs } from './components/QuickNeedHubs';
import { PackageCatalog } from './components/PackageCatalog';
import { M2MIoTSection } from './components/M2MIoTSection';
import { PackageComparator } from './components/PackageComparator';
import { CredibilityMetrics } from './components/CredibilityMetrics';
import { SmartQuiz } from './components/SmartQuiz';
import { FaqAccordion } from './components/FaqAccordion';
import { FastRegistrationForm } from './components/FastRegistrationForm';
import { PackageDetailModal } from './components/PackageDetailModal';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export default function App() {
  // Filter States
  const [currentCategory, setCurrentCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [dataFilter, setDataFilter] = useState('all');
  const [voiceFilter, setVoiceFilter] = useState('all');
  const [appFilter, setAppFilter] = useState('all');
  const [subscriberFilter, setSubscriberFilter] = useState('all');
  const [activeNeed, setActiveNeed] = useState('data');

  // Comparison State (Defaults to VD130, D159V, VIP199)
  const [comparedPkgIds, setComparedPkgIds] = useState<string[]>([
    'VD130',
    'D159V',
    'VIP199',
  ]);

  // Modal State
  const [selectedModalPkg, setSelectedModalPkg] = useState<TelecomPackage | null>(null);

  // Registration Form State
  const [selectedFormPackageId, setSelectedFormPackageId] = useState('D159V');
  const [formCustomNote, setFormCustomNote] = useState('');

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Quick Need Selector
  const handleSelectQuickNeed = (needKey: string) => {
    setActiveNeed(needKey);
    handleResetFilters();

    if (needKey === 'data') {
      setDataFilter('6gb_plus');
    } else if (needKey === 'call') {
      setVoiceFilter('both');
    } else if (needKey === 'entertainment') {
      setAppFilter('mytv');
    } else if (needKey === 'gaming') {
      setAppFilter('gaming');
    } else if (needKey === 'ai') {
      setAppFilter('genai');
    } else if (needKey === 'family') {
      setCurrentCategory('integrated');
    } else if (needKey === 'enterprise') {
      setCurrentCategory('enterprise');
    }

    scrollTo('danh-sach-goi');
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setPriceFilter('all');
    setDataFilter('all');
    setVoiceFilter('all');
    setAppFilter('all');
    setSubscriberFilter('all');
    setCurrentCategory('all');
  };

  // Filter packages computation
  const filteredPackages = useMemo(() => {
    return PACKAGES_DATA.filter((pkg) => {
      // Category match
      if (currentCategory === 'iot') {
        // Special case: IoT shown in special section, but keep filter responsive
        return false;
      }
      if (currentCategory !== 'all' && pkg.category !== currentCategory) {
        return false;
      }

      // Keyword match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = pkg.name.toLowerCase().includes(q);
        const matchesBenefits = pkg.benefits.some((b) => b.toLowerCase().includes(q));
        const matchesPrice = pkg.price.toString().includes(q);
        if (!matchesName && !matchesBenefits && !matchesPrice) {
          return false;
        }
      }

      // Price filter
      if (priceFilter === 'under100' && pkg.price >= 100000) return false;
      if (priceFilter === '100-150' && (pkg.price < 100000 || pkg.price > 150000)) return false;
      if (priceFilter === '150-250' && (pkg.price <= 150000 || pkg.price > 250000)) return false;
      if (priceFilter === '250-500' && (pkg.price <= 250000 || pkg.price > 500000)) return false;
      if (priceFilter === 'above500' && pkg.price <= 500000) return false;

      // Data filter
      if (dataFilter !== 'all' && pkg.dataCategory !== dataFilter) {
        return false;
      }

      // Voice filter
      if (voiceFilter === 'internal' && pkg.voiceType !== 'internal' && pkg.voiceType !== 'both') {
        return false;
      }
      if (voiceFilter === 'external' && pkg.voiceType !== 'external' && pkg.voiceType !== 'both') {
        return false;
      }
      if (voiceFilter === 'both' && pkg.voiceType !== 'both') {
        return false;
      }

      // App bundle filter
      if (appFilter !== 'all' && !pkg.apps.includes(appFilter as any)) {
        return false;
      }

      // Subscriber type filter
      if (subscriberFilter !== 'all' && !pkg.subscriberType.includes(subscriberFilter as any)) {
        return false;
      }

      return true;
    });
  }, [
    currentCategory,
    searchQuery,
    priceFilter,
    dataFilter,
    voiceFilter,
    appFilter,
    subscriberFilter,
  ]);

  // Comparison toggle
  const handleToggleCompare = (pkgId: string) => {
    setComparedPkgIds((prev) => {
      if (prev.includes(pkgId)) {
        if (prev.length <= 1) {
          return prev;
        }
        return prev.filter((id) => id !== pkgId);
      } else {
        if (prev.length >= 3) {
          // Keep maximum 3, remove oldest
          return [...prev.slice(1), pkgId];
        }
        return [...prev, pkgId];
      }
    });
  };

  const handleRemoveFromCompare = (pkgId: string) => {
    setComparedPkgIds((prev) => {
      if (prev.length <= 1) return prev;
      return prev.filter((id) => id !== pkgId);
    });
  };

  // Quick register from card or recommendation
  const handleQuickRegister = (pkg: TelecomPackage) => {
    setSelectedFormPackageId(pkg.id);
    scrollTo('dang-ky-tu-van');
  };

  const handleSelectRecommendedFromQuiz = (pkgId: string) => {
    setSelectedFormPackageId(pkgId);
    scrollTo('dang-ky-tu-van');
  };

  const handleContactIoT = () => {
    setSelectedFormPackageId('IOT_SIM');
    setFormCustomNote('Tư vấn giải pháp SIM IoT/M2M Doanh Nghiệp & Smart City');
    scrollTo('dang-ky-tu-van');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff] text-[#131b2e] selection:bg-[#004e9f] selection:text-white">
      {/* 1. Header */}
      <Header
        onNavigateToQuiz={() => scrollTo('quick-quiz')}
        onNavigateToForm={() => scrollTo('dang-ky-tu-van')}
      />

      <main className="w-full relative min-h-screen">
        {/* 2. Hero Section */}
        <Hero
          onExploreClick={() => scrollTo('danh-sach-goi')}
          onQuizClick={() => scrollTo('quick-quiz')}
        />

        {/* 3. Quick Ticker Bar */}
        <QuickTicker onQuickSelect={handleSelectQuickNeed} />

        {/* 4. 6 Lợi thế vượt trội */}
        <FeatureAdvantages onFeatureClick={handleSelectQuickNeed} />

        {/* 5. Bạn đang cần gì cho chiếc điện thoại */}
        <QuickNeedHubs
          activeNeed={activeNeed}
          onSelectNeed={handleSelectQuickNeed}
        />

        {/* 6. Danh mục gói cước & Bộ lọc thông minh */}
        <PackageCatalog
          packages={filteredPackages}
          currentCategory={currentCategory}
          onSelectCategory={(cat) => {
            setCurrentCategory(cat);
            if (cat === 'iot') {
              scrollTo('m2m-iot-section');
            }
          }}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          priceFilter={priceFilter}
          onPriceFilterChange={setPriceFilter}
          dataFilter={dataFilter}
          onDataFilterChange={setDataFilter}
          voiceFilter={voiceFilter}
          onVoiceFilterChange={setVoiceFilter}
          appFilter={appFilter}
          onAppFilterChange={setAppFilter}
          subscriberFilter={subscriberFilter}
          onSubscriberFilterChange={setSubscriberFilter}
          onResetFilters={handleResetFilters}
          onOpenModal={(pkg) => setSelectedModalPkg(pkg)}
          onQuickRegister={handleQuickRegister}
          comparedPkgIds={comparedPkgIds}
          onToggleCompare={handleToggleCompare}
        />

        {/* 7. Giải pháp M2M / IoT */}
        <M2MIoTSection onContactIoT={handleContactIoT} />

        {/* 8. So sánh gói cước tương tác */}
        <PackageComparator
          allPackages={PACKAGES_DATA}
          comparedPkgIds={comparedPkgIds}
          onRemoveFromCompare={handleRemoveFromCompare}
          onQuickRegister={handleQuickRegister}
        />

        {/* 9. Bộ chỉ số uy tín */}
        <CredibilityMetrics />

        {/* 10. Quiz thông minh 30 giây */}
        <SmartQuiz
          allPackages={PACKAGES_DATA}
          onSelectRecommended={handleSelectRecommendedFromQuiz}
        />

        {/* 11. Câu hỏi thường gặp */}
        <FaqAccordion />

        {/* 12. Form đăng ký kích hoạt trực tuyến */}
        <FastRegistrationForm
          allPackages={PACKAGES_DATA}
          selectedPackageId={selectedFormPackageId}
          onPackageChange={setSelectedFormPackageId}
          customNote={formCustomNote}
        />
      </main>

      {/* 13. Modal chi tiết gói cước */}
      <PackageDetailModal
        pkg={selectedModalPkg}
        onClose={() => setSelectedModalPkg(null)}
        onApplyPackage={handleQuickRegister}
      />

      {/* 14. Floating Action Dock & Mobile Nav */}
      <FloatingActions
        onNavigateHome={() => scrollTo('hero-section')}
        onNavigateHot={() => scrollTo('danh-sach-goi')}
        onNavigateQuiz={() => scrollTo('quick-quiz')}
      />

      {/* 15. Footer */}
      <Footer onScrollTo={scrollTo} />
    </div>
  );
}
