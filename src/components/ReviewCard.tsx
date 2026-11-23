import React from 'react';
import { Review } from '../types';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="rounded-2xl border border-purple-500/15 bg-[#0f041e]/90 p-6 shadow-sm border border-purple-500/15">
      <div className="flex items-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={n}
            className={`h-4 w-4 ${n <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-[#D1D5DB]'}`}
          />
        ))}
      </div>
      <p className="text-sm text-purple-200/80 leading-relaxed mb-4">"{review.text}"</p>
      <div>
        <div className="text-sm font-bold text-white">{review.customerName}</div>
        {review.businessName && (
          <div className="text-xs text-purple-300/70">{review.businessName}</div>
        )}
        <div className="text-xs text-purple-300/70 mt-0.5">{review.serviceReceived}</div>
      </div>
    </div>
  );
};
