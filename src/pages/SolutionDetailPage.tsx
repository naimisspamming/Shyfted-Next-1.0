import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SOLUTIONS } from '../data/portfolioData';
import { SITE_CONFIG, whatsappUrl } from '../config/siteConfig';
import { WhatsAppButton, EmailButton } from '../components/ContactButtons';
import { CheckCircle2, ArrowLeft, ExternalLink } from 'lucide-react';

const ICONS: Record<string, any> = {};

export function SolutionDetailPage({ handleOpenInquiry }: { handleOpenInquiry: (s?: string, t?: string) => void }) {
  const { slug } = useParams();
  const solution = SOLUTIONS.find((s) => s.slug === slug);

  if (!solution) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-white mb-3">Solution not found</h1>
        <Link to="/solutions" className="text-purple-400 font-semibold">Back to solutions</Link>
      </div>
    );
  }

  const related = (solution.related || [])
    .map((id) => SOLUTIONS.find((s) => s.id === id))
    .filter(Boolean) as typeof SOLUTIONS;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <Link to="/solutions" className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-300/70 hover:text-purple-400 mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to solutions
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        <div>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3"
            style={{ backgroundColor: solution.accentColor }}
          >
            {solution.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">{solution.name}</h1>
          <p className="text-purple-300/70 mb-6">{solution.overview}</p>
          <div className="flex flex-wrap gap-3">
            {solution.demoUrl ? (
              <a
                href={solution.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-bold text-white hover:bg-purple-500 transition-colors"
              >
                Explore Live Demo <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <span className="inline-flex items-center rounded-xl border border-purple-500/15 px-5 py-3 text-sm font-medium text-[#9CA3AF]">
                Demo Coming Soon
              </span>
            )}
            <WhatsAppButton
              message={SITE_CONFIG.whatsappMessages.solution(solution.name)}
              label="Request Customization"
            />
          </div>
        </div>
        <div className="rounded-2xl border border-purple-500/15 bg-[#0f041e]/90 aspect-video flex items-center justify-center text-purple-300/70 text-sm">
          Dashboard Preview
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
          <ul className="space-y-2">
            {solution.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-purple-200/80">
                <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 shrink-0" /> {f}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Main Functionalities</h2>
          <ul className="space-y-2">
            {solution.functionalities.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-purple-200/80">
                <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 shrink-0" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold text-white mb-3">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {solution.techStack.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-semibold border border-indigo-100">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold text-white mb-3">Customization</h2>
        <p className="text-sm text-purple-300/70">
          This solution can be customized to match your branding, workflows, and additional requirements. Contact us to discuss.
        </p>
      </div>

      {related.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4">Related Applications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.id}
                to={`/solutions/${r.slug}`}
                className="rounded-xl border border-purple-500/15 p-4 hover:border-purple-400 transition-colors"
              >
                <div className="font-bold text-white">{r.name}</div>
                <div className="text-xs text-purple-300/70 mt-1">{r.shortDescription}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-2xl bg-[#111827] text-white p-6 sm:p-8 text-center">
        <h2 className="text-xl sm:text-2xl font-black mb-2">Interested in this solution?</h2>
        <p className="text-gray-300 text-sm mb-5">Let's discuss customization and pricing.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <WhatsAppButton message={SITE_CONFIG.whatsappMessages.solution(solution.name)} label="Chat on WhatsApp" />
          <EmailButton subject={`Inquiry: ${solution.name}`} body={SITE_CONFIG.whatsappMessages.solution(solution.name)} label="Email Us" />
        </div>
      </div>
    </div>
  );
}
