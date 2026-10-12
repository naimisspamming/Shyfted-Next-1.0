import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingWidgetProps {
  onOpenInquiry?: (service?: string, projectTitle?: string, flowType?: any) => void;
}

export const FloatingWidget: React.FC<FloatingWidgetProps> = ({ onOpenInquiry }) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') {
        setShouldShow(false);
        return;
      }

      const servicesEl = document.getElementById('services');
      if (servicesEl) {
        const rect = servicesEl.getBoundingClientRect();
        // Show only when the services (solutions) section is actively in view
        const inView = rect.top <= window.innerHeight * 0.75 && rect.bottom >= window.innerHeight * 0.25;
        if (inView) {
          setShouldShow(true);
        } else {
          setShouldShow(false);
          if (rect.top > window.innerHeight || rect.bottom < 0) {
            setIsDismissed(false);
          }
        }
      } else {
        setShouldShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  if (!shouldShow || isDismissed || location.pathname !== '/') return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="fixed left-0 top-[68%] -translate-y-1/2 z-50 flex items-center cursor-pointer group"
        onClick={() => navigate('/shyfted-next')}
      >
        <div className="relative flex items-center">
          {/* Slim side tab with two lines */}
          <div
            className="flex items-center gap-2.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-fuchsia-600 text-white px-3.5 py-3 rounded-r-xl backdrop-blur-md shadow-2xl shadow-purple-950/85 transition-all duration-300 text-left max-w-[170px] border border-white/20"
            title="Need more services? Explore Shyfted Next 2.0"
          >
            <div className="flex flex-col text-[11px] leading-tight font-medium">
              <span className="text-purple-100 font-medium whitespace-nowrap">Need more services?</span>
              <span className="text-white font-extrabold whitespace-nowrap mt-0.5">Explore Shyfted Next 2.0</span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDismissed(true);
            }}
            className="absolute -top-2.5 right-0 bg-[#0f0728] border border-purple-500/30 text-purple-400 hover:text-white p-0.5 rounded-full shadow-md transition-colors"
            title="Close"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

