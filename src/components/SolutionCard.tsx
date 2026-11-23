import React from 'react';
import { Link } from 'react-router-dom';
import { Solution } from '../types';
import { SITE_CONFIG, whatsappUrl } from '../config/siteConfig';
import {
  ShoppingCart, Package, CreditCard, GraduationCap, Stethoscope,
  UtensilsCrossed, CalendarCheck, Briefcase, Cloud, User, ArrowRight, ExternalLink,
} from 'lucide-react';

const ICONS: Record<string, React.FC<{ className?: string }>> = {
  ShoppingCart, Package, CreditCard, GraduationCap, Stethoscope,
  UtensilsCrossed, CalendarCheck, Briefcase, Cloud, User,
};

interface SolutionCardProps {
  solution: Solution;
  onViewDetails?: (solution: Solution) => void;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const Icon = ICONS[solution.icon] || Briefcase;
  const demoAvailable = !!solution.demoUrl;

  return (
    <div className="group flex flex-col rounded-2xl border border-purple-500/15 bg-[#0f041e]/90 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: solution.accentColor }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-bold text-white">{solution.name}</h3>
      </div>
      <p className="text-sm text-purple-300/70 mb-4 line-clamp-2">{solution.shortDescription}</p>
      <ul className="mb-5 space-y-1.5 text-sm text-purple-200/80">
        {solution.features.slice(0, 4).map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-2">
        <Link
          to={`/solutions/${solution.slug}`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-purple-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-purple-500 transition-colors"
        >
          View Details <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        {demoAvailable ? (
          <a
            href={solution.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-purple-400 px-3.5 py-2 text-xs font-semibold text-purple-400 hover:bg-purple-600 hover:text-white transition-colors"
          >
            Live Demo <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span className="inline-flex items-center rounded-lg border border-purple-500/15 px-3.5 py-2 text-xs font-medium text-[#9CA3AF]">
            Demo Coming Soon
          </span>
        )}
        <a
          href={whatsappUrl(SITE_CONFIG.whatsappMessages.solution(solution.name))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-purple-500/15 px-3.5 py-2 text-xs font-semibold text-purple-200/80 hover:border-[#25D366] hover:text-[#25D366] transition-colors"
        >
          Request Customization
        </a>
      </div>
    </div>
  );
};
