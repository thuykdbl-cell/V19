import React from 'react';
import { TelecomPackage } from '../types';
import { 
  CreditCard, 
  Wifi, 
  Phone, 
  PhoneForwarded, 
  MessageSquare, 
  Layers, 
  X 
} from 'lucide-react';

interface PackageComparatorProps {
  allPackages: TelecomPackage[];
  comparedPkgIds: string[];
  onRemoveFromCompare: (pkgId: string) => void;
  onQuickRegister: (pkg: TelecomPackage) => void;
}

export const PackageComparator: React.FC<PackageComparatorProps> = ({
  allPackages,
  comparedPkgIds,
  onRemoveFromCompare,
  onQuickRegister,
}) => {
  // Find package objects for comparison slots (up to 3)
  const comparedPackages = comparedPkgIds
    .map((id) => allPackages.find((p) => p.id === id))
    .filter(Boolean) as TelecomPackage[];

  return (
    <section id="so-sanh-section" className="w-full py-16 bg-[#f2f3ff] border-t border-[#e2e7ff]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#004e9f] font-bold px-3 py-1 bg-[#004e9f]/10 rounded-full">
              Bảng So Sánh Chi Tiết
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#131b2e] tracking-tight mt-2">
              SO SÁNH CÁC GÓI CƯỚC NỔI BẬT
            </h2>
            <p className="text-xs sm:text-sm text-[#414753] mt-1">
              Chọn tối đa 3 gói từ danh mục trên hoặc đối chiếu trực quan bên dưới
            </p>
          </div>

          <div className="text-xs text-[#414753] bg-white px-3 py-1.5 rounded-lg border border-[#e2e7ff] self-start md:self-auto">
            Đang so sánh:{' '}
            <span className="font-bold text-[#004e9f]">
              {comparedPackages.map((p) => p.name).join(', ') || 'Chưa chọn gói'}
            </span>
          </div>
        </div>

        {/* Matrix Comparison Table */}
        <div className="overflow-x-auto rounded-2xl bg-white shadow-md border border-[#e2e7ff]">
          <table className="w-full min-w-[720px] text-left">
            <thead>
              <tr className="bg-[#e2e7ff]/70 text-[#131b2e] border-b border-[#c1c6d5]">
                <th className="p-4 text-sm font-bold w-1/4">Chỉ Số So Sánh</th>
                {[0, 1, 2].map((idx) => {
                  const pkg = comparedPackages[idx];
                  return (
                    <th key={idx} className="p-4 text-base font-extrabold text-[#004e9f] w-1/4">
                      {pkg ? (
                        <div className="flex items-center justify-between">
                          <span>{pkg.name}</span>
                          {comparedPackages.length > 1 && (
                            <button
                              onClick={() => onRemoveFromCompare(pkg.id)}
                              className="text-gray-400 hover:text-red-500 p-1 rounded transition-colors"
                              title="Bỏ so sánh"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400 font-normal italic">Trống</span>
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-[#131b2e]">
              
              {/* Row 1: Price */}
              <tr className="hover:bg-[#f2f3ff]/50">
                <td className="p-4 font-semibold text-[#414753] flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#004e9f]" />
                  <span>Giá cước / Chu kỳ</span>
                </td>
                {[0, 1, 2].map((idx) => {
                  const pkg = comparedPackages[idx];
                  return (
                    <td key={idx} className="p-4 font-bold text-[#131b2e]">
                      {pkg ? `${pkg.price.toLocaleString('vi-VN')} ${pkg.periodText}` : '-'}
                    </td>
                  );
                })}
              </tr>

              {/* Row 2: Data Quota */}
              <tr className="hover:bg-[#f2f3ff]/50 bg-[#f2f3ff]/30">
                <td className="p-4 font-semibold text-[#414753] flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-[#004e9f]" />
                  <span>Dung lượng Data tốc độ cao</span>
                </td>
                {[0, 1, 2].map((idx) => {
                  const pkg = comparedPackages[idx];
                  return (
                    <td key={idx} className="p-4 font-extrabold text-[#004e9f]">
                      {pkg ? `${pkg.dailyDataText} (${pkg.totalDataText})` : '-'}
                    </td>
                  );
                })}
              </tr>

              {/* Row 3: Internal Calls */}
              <tr className="hover:bg-[#f2f3ff]/50">
                <td className="p-4 font-semibold text-[#414753] flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#004e9f]" />
                  <span>Gọi nội mạng VinaPhone</span>
                </td>
                {[0, 1, 2].map((idx) => {
                  const pkg = comparedPackages[idx];
                  return (
                    <td key={idx} className="p-4">
                      {pkg ? pkg.voiceInternal : '-'}
                    </td>
                  );
                })}
              </tr>

              {/* Row 4: External Calls */}
              <tr className="hover:bg-[#f2f3ff]/50 bg-[#f2f3ff]/30">
                <td className="p-4 font-semibold text-[#414753] flex items-center gap-2">
                  <PhoneForwarded className="w-4 h-4 text-[#004e9f]" />
                  <span>Gọi ngoại mạng</span>
                </td>
                {[0, 1, 2].map((idx) => {
                  const pkg = comparedPackages[idx];
                  return (
                    <td key={idx} className="p-4">
                      {pkg ? pkg.voiceExternal : '-'}
                    </td>
                  );
                })}
              </tr>

              {/* Row 5: SMS */}
              <tr className="hover:bg-[#f2f3ff]/50">
                <td className="p-4 font-semibold text-[#414753] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#004e9f]" />
                  <span>Tin nhắn SMS</span>
                </td>
                {[0, 1, 2].map((idx) => {
                  const pkg = comparedPackages[idx];
                  return (
                    <td key={idx} className="p-4">
                      {pkg ? (pkg.sms || 'Cước tiêu chuẩn') : '-'}
                    </td>
                  );
                })}
              </tr>

              {/* Row 6: App Bundle */}
              <tr className="hover:bg-[#f2f3ff]/50 bg-[#f2f3ff]/30">
                <td className="p-4 font-semibold text-[#414753] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#004e9f]" />
                  <span>Ứng dụng & Giải trí tặng kèm</span>
                </td>
                {[0, 1, 2].map((idx) => {
                  const pkg = comparedPackages[idx];
                  return (
                    <td key={idx} className="p-4 font-semibold text-[#3a3ac8]">
                      {pkg ? (
                        pkg.apps.includes('mytv') ? 'Miễn phí MyTV Gói Chuẩn' :
                        pkg.apps.includes('genai') ? 'Bản quyền vnGenAI + TikTok' :
                        pkg.apps.includes('gaming') ? 'Data Game Liên Quân, Free Fire' :
                        pkg.apps.includes('tiktok_yt') ? 'Free YouTube & TikTok' :
                        'Không bao gồm'
                      ) : '-'}
                    </td>
                  );
                })}
              </tr>

              {/* Row 7: Action Buttons */}
              <tr className="bg-[#f2f3ff]/80">
                <td className="p-4 font-bold text-[#131b2e]">Thao tác</td>
                {[0, 1, 2].map((idx) => {
                  const pkg = comparedPackages[idx];
                  return (
                    <td key={idx} className="p-4">
                      {pkg ? (
                        <button
                          onClick={() => onQuickRegister(pkg)}
                          className="px-4 py-2 rounded-xl bg-[#f97316] text-white text-xs font-bold hover:bg-[#ea580c] shadow-sm transition-all whitespace-nowrap"
                        >
                          Đăng ký {pkg.name}
                        </button>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                  );
                })}
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
