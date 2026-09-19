import React from 'react';
import { TelecomPackage, CategoryType } from '../types';
import { 
  Search, 
  RotateCcw, 
  CheckCircle2, 
  Flame, 
  Crown, 
  Signal, 
  Building2, 
  Cpu, 
  Wifi, 
  Zap, 
  Tv, 
  Sparkles, 
  Gamepad2, 
  Calendar 
} from 'lucide-react';

interface PackageCatalogProps {
  packages: TelecomPackage[];
  currentCategory: CategoryType;
  onSelectCategory: (cat: CategoryType) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  priceFilter: string;
  onPriceFilterChange: (p: string) => void;
  dataFilter: string;
  onDataFilterChange: (d: string) => void;
  voiceFilter: string;
  onVoiceFilterChange: (v: string) => void;
  appFilter: string;
  onAppFilterChange: (a: string) => void;
  subscriberFilter: string;
  onSubscriberFilterChange: (s: string) => void;
  onResetFilters: () => void;
  onOpenModal: (pkg: TelecomPackage) => void;
  onQuickRegister: (pkg: TelecomPackage) => void;
  comparedPkgIds: string[];
  onToggleCompare: (pkgId: string) => void;
}

export const PackageCatalog: React.FC<PackageCatalogProps> = ({
  packages,
  currentCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  priceFilter,
  onPriceFilterChange,
  dataFilter,
  onDataFilterChange,
  voiceFilter,
  onVoiceFilterChange,
  appFilter,
  onAppFilterChange,
  subscriberFilter,
  onSubscriberFilterChange,
  onResetFilters,
  onOpenModal,
  onQuickRegister,
  comparedPkgIds,
  onToggleCompare,
}) => {
  const getBadgeStyle = (type?: string) => {
    switch (type) {
      case 'orange':
        return 'bg-[#f97316] text-white';
      case 'vip':
        return 'bg-[#004e9f] text-white';
      case 'secondary':
        return 'bg-[#b6ebff] text-[#001f28]';
      case 'primary':
        return 'bg-[#d7e3ff] text-[#001b3e]';
      default:
        return 'bg-[#eaedff] text-[#414753]';
    }
  };

  const getDataIcon = (iconName: string) => {
    switch (iconName) {
      case 'bolt':
        return <Zap className="w-8 h-8 text-[#004e9f]" />;
      case 'auto_awesome':
        return <Sparkles className="w-8 h-8 text-[#00677f]" />;
      case 'sports_esports':
        return <Gamepad2 className="w-8 h-8 text-[#3a3ac8]" />;
      case 'workspace_premium':
      case 'diamond':
        return <Crown className="w-8 h-8 text-[#004e9f]" />;
      case 'calendar_month':
      case 'event_repeat':
        return <Calendar className="w-8 h-8 text-[#00677f]" />;
      default:
        return <Wifi className="w-8 h-8 text-[#004e9f]" />;
    }
  };

  return (
    <section id="danh-sach-goi" className="w-full pt-16 pb-12 bg-[#faf8ff]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#004e9f] font-bold px-3 py-1 bg-[#004e9f]/10 rounded-full">
              Danh Mục Gói Cước Toàn Diện
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#131b2e] tracking-tight mt-2">
              TÌM GÓI CƯỚC HOÀN HẢO CHO BẠN
            </h2>
            <p className="text-sm text-[#414753] mt-1">
              Bộ lọc đa tầng chuẩn xác - Kích hoạt trực tuyến siêu tốc
            </p>
          </div>

          {/* Quick Keyword Search */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Tìm tên gói (VD130, VIP, 5G...)"
              className="w-full h-12 pl-11 pr-4 rounded-xl bg-white border border-[#c1c6d5] shadow-sm focus:border-[#004e9f] focus:ring-2 focus:ring-[#0066cc]/20 outline-none text-sm text-[#131b2e]"
              id="package-search-input"
            />
            <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-[#727784]" />
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-1" id="category-tabs">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
              currentCategory === 'all'
                ? 'bg-[#004e9f] text-white'
                : 'bg-[#eaedff] text-[#414753] hover:bg-[#e2e7ff]'
            }`}
          >
            Tất cả gói
          </button>
          
          <button
            onClick={() => onSelectCategory('integrated')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 shadow-sm ${
              currentCategory === 'integrated'
                ? 'bg-[#004e9f] text-white'
                : 'bg-[#eaedff] text-[#414753] hover:bg-[#e2e7ff]'
            }`}
          >
            <Flame className="w-4 h-4 text-[#f97316]" /> Gói Tích Hợp
          </button>

          <button
            onClick={() => onSelectCategory('vip')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 shadow-sm ${
              currentCategory === 'vip'
                ? 'bg-[#004e9f] text-white'
                : 'bg-[#eaedff] text-[#414753] hover:bg-[#e2e7ff]'
            }`}
          >
            <Crown className="w-4 h-4 text-[#004e9f]" /> Gói VIP Thượng Lưu
          </button>

          <button
            onClick={() => onSelectCategory('data')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 shadow-sm ${
              currentCategory === 'data'
                ? 'bg-[#004e9f] text-white'
                : 'bg-[#eaedff] text-[#414753] hover:bg-[#e2e7ff]'
            }`}
          >
            <Signal className="w-4 h-4 text-[#00677f]" /> Gói Data Chuyên Dụng
          </button>

          <button
            onClick={() => onSelectCategory('enterprise')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 shadow-sm ${
              currentCategory === 'enterprise'
                ? 'bg-[#004e9f] text-white'
                : 'bg-[#eaedff] text-[#414753] hover:bg-[#e2e7ff]'
            }`}
          >
            <Building2 className="w-4 h-4 text-[#3a3ac8]" /> Doanh Nghiệp (SME/Corp)
          </button>

          <button
            onClick={() => onSelectCategory('iot')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 shadow-sm ${
              currentCategory === 'iot'
                ? 'bg-[#004e9f] text-white'
                : 'bg-[#eaedff] text-[#414753] hover:bg-[#e2e7ff]'
            }`}
          >
            <Cpu className="w-4 h-4 text-[#414753]" /> M2M / IoT
          </button>
        </div>

        {/* Advanced Filters Panel */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#e2e7ff] mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Price Filter */}
            <div>
              <label className="block text-xs uppercase font-bold text-[#414753] mb-1.5">
                Mức giá cước
              </label>
              <select
                value={priceFilter}
                onChange={(e) => onPriceFilterChange(e.target.value)}
                className="w-full h-11 px-3 rounded-lg bg-[#f2f3ff] text-[#131b2e] text-xs sm:text-sm outline-none border border-transparent focus:border-[#004e9f]"
              >
                <option value="all">Tất cả mức giá</option>
                <option value="under100">Dưới 100.000đ</option>
                <option value="100-150">100.000đ – 150.000đ</option>
                <option value="150-250">150.000đ – 250.000đ</option>
                <option value="250-500">250.000đ – 500.000đ</option>
                <option value="above500">Trên 500.000đ (Chu kỳ dài)</option>
              </select>
            </div>

            {/* Data Quota Filter */}
            <div>
              <label className="block text-xs uppercase font-bold text-[#414753] mb-1.5">
                Dung lượng Data
              </label>
              <select
                value={dataFilter}
                onChange={(e) => onDataFilterChange(e.target.value)}
                className="w-full h-11 px-3 rounded-lg bg-[#f2f3ff] text-[#131b2e] text-xs sm:text-sm outline-none border border-transparent focus:border-[#004e9f]"
              >
                <option value="all">Tất cả mức Data</option>
                <option value="1gb">1 GB / ngày</option>
                <option value="2gb">2 GB / ngày</option>
                <option value="3gb">3 GB / ngày</option>
                <option value="6gb_plus">6 GB / ngày trở lên</option>
                <option value="monthly">Data chu kỳ khủng</option>
              </select>
            </div>

            {/* Voice Calls Filter */}
            <div>
              <label className="block text-xs uppercase font-bold text-[#414753] mb-1.5">
                Gọi thoại
              </label>
              <select
                value={voiceFilter}
                onChange={(e) => onVoiceFilterChange(e.target.value)}
                className="w-full h-11 px-3 rounded-lg bg-[#f2f3ff] text-[#131b2e] text-xs sm:text-sm outline-none border border-transparent focus:border-[#004e9f]"
              >
                <option value="all">Tất cả thoại</option>
                <option value="internal">Miễn phí nội mạng</option>
                <option value="external">Có phút ngoại mạng</option>
                <option value="both">Thoại khủng cả 2 mạng</option>
              </select>
            </div>

            {/* Bundled Apps Filter */}
            <div>
              <label className="block text-xs uppercase font-bold text-[#414753] mb-1.5">
                Ứng dụng tặng kèm
              </label>
              <select
                value={appFilter}
                onChange={(e) => onAppFilterChange(e.target.value)}
                className="w-full h-11 px-3 rounded-lg bg-[#f2f3ff] text-[#131b2e] text-xs sm:text-sm outline-none border border-transparent focus:border-[#004e9f]"
              >
                <option value="all">Tất cả ứng dụng</option>
                <option value="mytv">Truyền hình MyTV</option>
                <option value="tiktok_yt">YouTube & TikTok</option>
                <option value="gaming">Gaming tối ưu</option>
                <option value="genai">vnGenAI Trí tuệ nhân tạo</option>
              </select>
            </div>

            {/* Subscriber Type */}
            <div>
              <label className="block text-xs uppercase font-bold text-[#414753] mb-1.5">
                Đối tượng áp dụng
              </label>
              <select
                value={subscriberFilter}
                onChange={(e) => onSubscriberFilterChange(e.target.value)}
                className="w-full h-11 px-3 rounded-lg bg-[#f2f3ff] text-[#131b2e] text-xs sm:text-sm outline-none border border-transparent focus:border-[#004e9f]"
              >
                <option value="all">Tất cả đối tượng</option>
                <option value="prepaid">Thuê bao trả trước</option>
                <option value="postpaid">Thuê bao trả sau</option>
                <option value="enterprise">Doanh nghiệp / SME</option>
              </select>
            </div>

          </div>

          {/* Filter Status Bar */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs text-[#414753]">
            <div className="flex items-center gap-2">
              <span>Đang hiển thị:</span>
              <span className="font-bold text-[#004e9f] text-sm" id="package-count-badge">
                {packages.length} gói cước khả dụng
              </span>
            </div>

            <button
              onClick={onResetFilters}
              className="text-[#004e9f] hover:text-[#0066cc] font-bold flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Đặt lại bộ lọc
            </button>
          </div>
        </div>

        {/* Packages Cards Grid */}
        {packages.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#e2e7ff]">
            <p className="text-lg font-bold text-gray-700">Không tìm thấy gói cước phù hợp</p>
            <p className="text-sm text-gray-500 mt-1 mb-4">Vui lòng điều chỉnh lại điều kiện lọc hoặc từ khóa tìm kiếm</p>
            <button
              onClick={onResetFilters}
              className="px-6 py-2.5 rounded-full bg-[#004e9f] text-white text-xs font-bold"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="packages-container">
            {packages.map((pkg) => {
              const isCompared = comparedPkgIds.includes(pkg.id);
              return (
                <div
                  key={pkg.id}
                  className={`bg-white rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between border ${
                    pkg.isBestSeller
                      ? 'border-[#004e9f] shadow-lg ring-1 ring-[#004e9f]/20'
                      : 'border-[#e2e7ff] shadow-sm hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {/* Top Badge */}
                  {pkg.badge && (
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeStyle(pkg.badgeType)}`}>
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Name */}
                    <div className="text-[#004e9f] text-2xl font-black tracking-tight mb-1">
                      {pkg.name}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-3xl font-extrabold text-[#131b2e]">
                        {pkg.price.toLocaleString('vi-VN')}
                      </span>
                      <span className="text-xs text-[#414753] font-semibold">
                        {pkg.periodText}
                      </span>
                    </div>

                    {/* Data Highlight Box */}
                    <div className="p-3.5 rounded-xl bg-[#f2f3ff] mb-4 flex items-center justify-between border border-[#e2e7ff]/60">
                      <div>
                        <span className="text-xs text-[#414753] block font-medium">Data Tốc Độ Cao</span>
                        <span className="text-lg font-black text-[#004e9f]">
                          {pkg.dailyDataText}
                        </span>
                      </div>
                      {getDataIcon(pkg.dataIcon)}
                    </div>

                    {/* Benefits List */}
                    <ul className="space-y-2 text-xs sm:text-sm text-[#131b2e] mb-6">
                      {pkg.benefits.slice(0, 3).map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#00677f] shrink-0 mt-0.5" />
                          <span className="leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                    <div className="flex items-center justify-between pb-1">
                      <label className="inline-flex items-center gap-1.5 cursor-pointer text-xs font-semibold text-[#414753]">
                        <input
                          type="checkbox"
                          checked={isCompared}
                          onChange={() => onToggleCompare(pkg.id)}
                          className="w-4 h-4 rounded text-[#004e9f] accent-[#004e9f]"
                        />
                        <span>+ So sánh gói</span>
                      </label>

                      <button
                        onClick={() => onOpenModal(pkg)}
                        className="text-xs font-bold text-[#004e9f] hover:underline"
                      >
                        Xem chi tiết
                      </button>
                    </div>

                    <button
                      onClick={() => onQuickRegister(pkg)}
                      className="w-full py-3 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold shadow-[0_4px_16px_rgba(249,115,22,0.25)] transition-all active:scale-[0.99]"
                    >
                      Đăng ký ngay
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
