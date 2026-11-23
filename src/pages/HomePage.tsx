import React from 'react';
import { Link } from 'react-router-dom';
import { SOLUTIONS, AGENCY_STATS } from '../data/portfolioData';
import { SITE_CONFIG } from '../config/siteConfig';
import { SolutionCard } from '../components/SolutionCard';
import { WhatsAppButton, EmailButton } from '../components/ContactButtons';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export function HomePage() {
  const featured = SOLUTIONS.slice(0, 3);
  return (
    <div>
      <section id="hero" className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-indigo-100 text-xs font-semibold text-purple-300 mb-6">
              <Sparkles className="h-3.5 w-3.5" /> Personal Website Studio
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-5">
              Professional Personal Websites Built for You.
            </h1>
            <p className="text-base sm:text-lg text-purple-300/70 mb-8 max-w-xl mx-auto lg:mx-0">
              Showcase your profile, portfolio, and achievements with a modern personal website tailored to your identity.
            </p>
            <div className="flex flex-col gap-3 items-center lg:items-start max-w-xs mx-auto lg:mx-0">
<Link to="/solutions/personal-website" className="inline-flex w-full items-center justify-center lg:justify-start gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-purple-500 transition-colors">
                Explore Personal Website <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/custom-development" className="inline-flex w-full items-center justify-center lg:justify-start gap-2 rounded-xl border border-purple-500/15 bg-white px-5 py-3 text-sm font-bold text-purple-950 hover:border-purple-400 hover:text-purple-400 transition-colors">
                Request Custom Personal Website <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto lg:max-w-none h-[340px] sm:h-[400px] lg:h-[460px] overflow-hidden">
            <div className="absolute -inset-10 bg-purple-600/20 blur-3xl rounded-full" />
            <div className="absolute top-4 left-0 w-40 sm:w-48 h-28 sm:h-32 rounded-xl border border-purple-500/20 bg-[#0f041e]/70 backdrop-blur-sm shadow-2xl shadow-purple-950/60 rotate-[-8deg] opacity-70 hidden sm:block">
              <div className="p-3 space-y-2">
                <div className="h-2.5 w-2/3 rounded bg-purple-300/40" />
                <div className="h-2 w-1/2 rounded bg-purple-300/25" />
                <div className="grid grid-cols-3 gap-1.5 mt-2">
                  <div className="h-8 rounded bg-purple-500/20" />
                  <div className="h-8 rounded bg-purple-500/20" />
                  <div className="h-8 rounded bg-purple-500/20" />
                </div>
              </div>
            </div>
            <div className="absolute top-8 right-0 w-36 sm:w-44 h-24 sm:h-28 rounded-xl border border-purple-500/20 bg-[#0f041e]/70 backdrop-blur-sm shadow-2xl shadow-purple-950/60 rotate-[6deg] opacity-60 hidden sm:block float-anim-slow">
              <div className="p-3 space-y-2">
                <div className="h-2.5 w-3/4 rounded bg-purple-300/40" />
                <div className="h-2 w-1/2 rounded bg-purple-300/25" />
                <div className="h-10 rounded bg-purple-500/15 mt-2" />
              </div>
            </div>
            <div className="absolute left-1/2 top-6 -translate-x-1/2 w-[88%] sm:w-[82%] lg:w-[90%]">
              <div className="rounded-2xl border border-purple-500/30 bg-[#0a0414] shadow-[0_0_60px_-15px_rgba(168,85,247,0.5)] overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-purple-500/15 bg-[#0f041e]/80">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="ml-2 h-3 flex-1 rounded bg-purple-500/10" />
                </div>
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500" />
                    <div className="space-y-1.5">
                      <div className="h-3 w-32 rounded bg-purple-200/80" />
                      <div className="h-2 w-20 rounded bg-purple-300/50" />
                    </div>
                  </div>
                  <div className="h-2 w-full rounded bg-purple-300/30" />
                  <div className="h-2 w-4/5 rounded bg-purple-300/20" />
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="h-16 rounded-lg bg-purple-500/15 border border-purple-500/20" />
                    <div className="h-16 rounded-lg bg-purple-500/15 border border-purple-500/20" />
                    <div className="h-16 rounded-lg bg-purple-500/15 border border-purple-500/20" />
                  </div>
                  <div className="mt-3 flex gap-2">
                    <div className="h-7 w-24 rounded-lg bg-purple-600" />
                    <div className="h-7 w-24 rounded-lg border border-purple-500/30" />
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-1 h-2 w-[60%] rounded-b-xl bg-[#0a0414] border-x border-b border-purple-500/20" />
            </div>
            <div className="absolute bottom-2 right-2 sm:right-4 w-20 sm:w-24 float-anim">
              <div className="rounded-[1.6rem] border border-purple-500/30 bg-[#0a0414] shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] overflow-hidden">
                <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-purple-500/40" />
                <div className="p-2.5 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500" />
                    <div className="space-y-1">
                      <div className="h-2 w-12 rounded bg-purple-200/80" />
                      <div className="h-1.5 w-8 rounded bg-purple-300/50" />
                    </div>
                  </div>
                  <div className="h-1.5 w-full rounded bg-purple-300/30" />
                  <div className="h-1.5 w-3/4 rounded bg-purple-300/20" />
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="h-10 rounded-md bg-purple-500/15 border border-purple-500/20" />
                    <div className="h-10 rounded-md bg-purple-500/15 border border-purple-500/20" />
                  </div>
                  <div className="h-6 rounded-md bg-purple-600" />
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-8 h-3 w-3 rounded-full bg-purple-400/60 blur-[1px] hidden sm:block" />
            <div className="absolute bottom-16 left-4 h-2 w-2 rounded-full bg-indigo-400/60 blur-[1px] hidden sm:block" />
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 border-y border-purple-500/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">What We Do</h2>
          <p className="text-purple-300/70 max-w-2xl mx-auto">We build professional personal websites that help you stand out online, with ready-made solutions and fully custom designs.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {AGENCY_STATS.map((s) => (
              <div key={s.label} className="rounded-xl border border-purple-500/15 p-4">
                <div className="text-2xl font-black text-purple-400">{s.value}</div>
                <div className="text-xs font-semibold text-white mt-1">{s.label}</div>
                <div className="text-[10px] text-purple-300/70">{s.subtext}</div>
              </div>
            ))}
            <div className="rounded-xl border border-purple-500/15 p-4">
              <div className="text-2xl font-black text-purple-400">8</div>
              <div className="text-xs font-semibold text-white mt-1">Solution Categories</div>
              <div className="text-[10px] text-purple-300/70">Ready to explore</div>
            </div>
            <div className="rounded-xl border border-purple-500/15 p-4">
              <div className="text-2xl font-black text-purple-400">24/7</div>
              <div className="text-xs font-semibold text-white mt-1">Support</div>
              <div className="text-[10px] text-purple-300/70">WhatsApp & Email</div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-8 gap-2">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Solutions</h2>
              <p className="text-purple-300/70 mt-1">A personal website solution you can explore today.</p>
            </div>
            <Link to="/solutions" className="text-sm font-semibold text-purple-400 hover:underline hidden sm:inline">View all</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((s) => (<SolutionCard key={s.id} solution={s} />))}
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 border-y border-purple-500/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">Two Ways to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-purple-500/15 p-6">
              <h3 className="text-xl font-bold text-white mb-2">Ready-Made Personal Website</h3>
              <p className="text-sm text-purple-300/70 mb-4">Browse our ready-made personal website, explore features, and try the live demo. Request customization to fit your needs.</p>
              <ul className="space-y-2 text-sm text-purple-200/80">
                {['Faster time to market', 'Proven functionality', 'Live demos available', 'Fully Customizable on request'].map((t) => (
                  <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-purple-400" /> {t}</li>
                ))}
              </ul>
              <Link to="/solutions" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-purple-400 hover:underline">Explore Personal Website <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="rounded-2xl border border-purple-500/15 p-6 bg-purple-500/10">
              <h3 className="text-xl font-bold text-white mb-2">Custom Personal Website</h3>
              <p className="text-sm text-purple-300/70 mb-4">Have a unique vision? We build custom personal websites from scratch based on your exact requirements.</p>
              <ul className="space-y-2 text-sm text-purple-200/80">
                {['Tailored to your business', 'Full control over features', 'Scalable architecture', 'Ongoing support'].map((t) => (
                  <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-purple-400" /> {t}</li>
                ))}
              </ul>
              <Link to="/custom-development" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-purple-400 hover:underline">Request Custom Personal Website <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">Why Choose Shyfted Next</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Personal-Brand Focused', desc: 'Websites designed around your personal brand.' },
              { title: 'Fully Customizable', desc: 'Adapt the design to your unique identity.' },
              { title: 'Modern Design', desc: 'Clean, modern, professional aesthetics.' },
              { title: 'Responsive on All Devices', desc: 'Looks perfect on desktop, tablet, and mobile.' },
              { title: 'Dedicated Support', desc: 'WhatsApp and email support when you need it.' },
              { title: 'Easy to Update', desc: 'Easily update your content anytime.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-purple-500/15 bg-[#0f041e]/90 p-5 shadow-sm border border-purple-500/15">
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-purple-300/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="process" className="py-12 sm:py-16 border-y border-purple-500/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">How We Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Discover Requirements', desc: 'We understand your business needs and goals.' },
              { step: '02', title: 'Plan & Design', desc: 'We plan the architecture and design the UI.' },
              { step: '03', title: 'Develop & Test', desc: 'We build and thoroughly test the application.' },
              { step: '04', title: 'Deliver & Support', desc: 'We deploy and provide ongoing support.' },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-purple-500/15 p-5">
                <div className="text-sm font-black text-purple-400 mb-2">{s.step}</div>
                <h3 className="font-bold text-white mb-1">{s.title}</h3>
                <p className="text-sm text-purple-300/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Customer Reviews</h2>
          <p className="text-purple-300/70 mb-6">Feedback from clients we have worked with.</p>
          <p className="text-xs text-[#9CA3AF]">Have you worked with us? Share your experience via our contact page.</p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#111827] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black mb-4">Ready to build your personal website?</h2>
          <p className="text-gray-300 mb-8">Let's discuss your vision and build your personal website.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <WhatsAppButton message={SITE_CONFIG.whatsappMessages.general} label="Chat on WhatsApp" />
            <EmailButton subject={SITE_CONFIG.mailto.generalSubject} body={SITE_CONFIG.whatsappMessages.general} label="Email Us" />
          </div>
        </div>
      </section>
    </div>
  );
}
