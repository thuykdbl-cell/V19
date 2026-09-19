import React, { useState } from 'react';
import { TelecomPackage } from '../types';
import { X, Copy, Check, ShieldCheck, Zap } from 'lucide-react';

interface PackageDetailModalProps {
  pkg: TelecomPackage | null;
  onClose: () => void;
  onApplyPackage: (pkg: TelecomPackage) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  onClose,
  onApplyPackage,
}) => {
  const [copied, setCopied] = useState(false);

  if (!pkg) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(pkg.smsSyntax);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#131b2e]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-[#e2e7ff]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f2f3ff] text-[#414753] flex items-center justify-center hover:bg-[#e2e7ff] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge & Title */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-[#d7e3ff] text-[#001b3e] text-xs font-bold flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-[#004e9f]" />
            {pkg.badge || 'Gói cước VinaPhone'}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-[#131b2e]">
          GÓI CƯỚC {pkg.name}
        </h3>

        <div className="text-xl font-extrabold text-[#004e9f] mb-4">
          {pkg.price.toLocaleString('vi-VN')} {pkg.periodText}
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#131b2e] mb-6">
          
          {/* SMS Syntax Card */}
          <div className="p-3.5 bg-[#f2f3ff] rounded-xl border border-[#e2e7ff]">
            <div className="font-bold text-[#414753] mb-1 text-xs">
              Cú pháp tự đăng ký nhanh qua SMS:
            </div>
            <div className="font-mono bg-white p-2.5 rounded-lg text-[#004e9f] font-black flex items-center justify-between border border-[#c1c6d5]">
              <span>{pkg.smsSyntax}</span>
              <button
                onClick={handleCopy}
                className="text-xs bg-[#004e9f] text-white px-3 py-1.5 rounded-md hover:bg-[#0066cc] transition-all flex items-center gap-1 shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Đã sao chép' : 'Sao chép'}</span>
              </button>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="font-bold text-sm text-[#131b2e] mb-2">Quyền lợi chi tiết:</h4>
            <ul className="space-y-1.5 list-disc pl-5 text-[#414753]">
              {pkg.benefits.map((benefit, idx) => (
                <li key={idx} className="leading-relaxed">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h4 className="font-bold text-sm text-[#131b2e] mb-1">
              Điều kiện áp dụng & Gia hạn:
            </h4>
            <p className="text-[#414753] text-xs leading-relaxed">
              {pkg.terms}
            </p>
          </div>

        </div>

        {/* Modal Buttons */}
        <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
          <button
            onClick={() => {
              onClose();
              onApplyPackage(pkg);
            }}
            className="flex-1 py-3 rounded-xl bg-[#f97316] text-white text-xs sm:text-sm font-bold hover:bg-[#ea580c] transition-all text-center shadow-md"
          >
            Điền Đăng Ký Ngay
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-[#f2f3ff] text-[#414753] text-xs sm:text-sm font-bold hover:bg-[#e2e7ff] transition-all"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
