import React, { useEffect } from 'react';

export function BeforeAfterMockup() {
  useEffect(() => {
    // --- JS Logic ---
    (function(){
      const query = "jordan lee";
      const typedEl = document.getElementById('typed');
      let i = 0;
      function typeNext(){
        if(i <= query.length && typedEl){
          typedEl.textContent = query.slice(0, i);
          i++;
          setTimeout(typeNext, 65);
        }
      }
      setTimeout(typeNext, 400);

      const sigPath = document.getElementById('sigPath') as unknown as SVGPathElement;
      if (!sigPath) return;
      const len = sigPath.getTotalLength();
      sigPath.style.strokeDasharray = len.toString();
      sigPath.style.strokeDashoffset = len.toString();
      sigPath.style.transition = 'stroke-dashoffset 1s cubic-bezier(.3,0,.15,1), stroke .6s';

      const toggleBtn = document.getElementById('toggleBtn');
      const track = document.getElementById('track');
      const mockup = document.getElementById('mockup');
      const lblBefore = document.getElementById('lblBefore');
      const lblAfter = document.getElementById('lblAfter');
      const hint = document.getElementById('hint');
      const statEls = document.querySelectorAll('.stat');

      const data = {
        before: {
          rankflag: 'Ranks #31 · page 3',
          favicon: 'in', siteName: 'LinkedIn', siteUrl: 'linkedin.com › in › jordan-lee-8841203',
          title: 'Jordan Lee - Marketing - LinkedIn',
          desc: 'Marketing professional based in the Greater Boston Area. 500+ connections.',
          idsub: 'No verified profile found',
          views: 12, accurate: 20, rank: 'Pg 3', rankSub: 'easy to miss',
          consistentNum: 1
        },
        after: {
          rankflag: 'Ranks #1 · page 1',
          favicon: 'JL', siteName: 'Jordan Lee', siteUrl: 'jordanlee.com',
          title: 'Jordan Lee — Brand Strategist & Advisor',
          desc: 'Helping consumer startups find their voice. Speaker, writer, advisor to founders.',
          idsub: 'Brand Strategist & Advisor',
          views: 340, accurate: 95, rank: '#1', rankSub: 'exactly where you belong',
          consistentNum: 4
        }
      };

      function animateNumber(el: HTMLElement | null, from: number, to: number, duration: number, suffix: string = ''){
        if (!el) return;
        const start = performance.now();
        function step(now: number){
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = Math.round(from + (to - from) * eased);
          el!.textContent = val + suffix;
          if(p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }

      let isAfter = false;
      const handleToggle = function(){
        isAfter = !isAfter;
        const state = isAfter ? data.after : data.before;
        const prev = isAfter ? data.before : data.after;

        toggleBtn?.setAttribute('aria-pressed', isAfter.toString());
        track?.classList.toggle('on', isAfter);
        mockup?.classList.toggle('after', isAfter);
        lblBefore?.classList.toggle('active', !isAfter);
        lblAfter?.classList.toggle('active', isAfter);
        statEls.forEach(el => el.classList.toggle('on', isAfter));

        if (document.getElementById('rankflag')) document.getElementById('rankflag')!.textContent = state.rankflag;
        if (document.getElementById('favicon')) document.getElementById('favicon')!.textContent = state.favicon;
        if (document.getElementById('siteName')) document.getElementById('siteName')!.textContent = state.siteName;
        if (document.getElementById('siteUrl')) document.getElementById('siteUrl')!.textContent = state.siteUrl;
        if (document.getElementById('resultTitle')) document.getElementById('resultTitle')!.textContent = state.title;
        if (document.getElementById('resultDesc')) document.getElementById('resultDesc')!.textContent = state.desc;
        if (document.getElementById('idsub')) document.getElementById('idsub')!.textContent = state.idsub;
        if (document.getElementById('statRankSub')) document.getElementById('statRankSub')!.textContent = state.rankSub;

        sigPath.style.strokeDashoffset = isAfter ? '0' : len.toString();

        animateNumber(document.getElementById('statViews'), prev.views, state.views, 700);
        animateNumber(document.getElementById('statAccurate'), prev.accurate, state.accurate, 700, '%');
        if (document.getElementById('statConsistent')) document.getElementById('statConsistent')!.textContent = state.consistentNum + ' of 4';
        if (document.getElementById('statRank')) document.getElementById('statRank')!.textContent = state.rank;

        if (hint) hint.textContent = isAfter
          ? 'This is what being found looks like.'
          : 'Tap the switch to see your identity, built.';
      };
      
      toggleBtn?.addEventListener('click', handleToggle);
      
      return () => toggleBtn?.removeEventListener('click', handleToggle);
    })();
  }, []);

  return (
    <div className="before-after-mockup">
      <style>{`
        :root{
          --dim:#454a57;
          --accent:#c9a227;
          --accent-soft:#3a3120;
          --muted:#8b8fa3;
          --ink:#f2efe9;
          --g-blue:#1a73e8;
          --g-linktext:#1a0dab;
          --g-text:#202124;
          --g-gray:#4d5156;
          --g-tabgray:#5f6368;
          --g-border:#ebebeb;
          --g-card:#f8f9fa;
        }
        .before-after-mockup {
          background:transparent;
          color:var(--ink);
          font-family:'Inter',-apple-system,sans-serif;
          -webkit-font-smoothing:antialiased;
          padding:20px 0px 36px;
          width:100%;
        }
        .before-after-mockup .page{max-width:520px;width:100%;margin:0 auto;}
        .before-after-mockup .toggle-row{display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:22px;}
        .before-after-mockup .toggle{display:flex;align-items:center;gap:10px;background:none;border:none;cursor:pointer;padding:6px;}
        .before-after-mockup .toggle-label{font-size:14px;font-weight:600;color:var(--muted);transition:color .25s;}
        .before-after-mockup .toggle-label.active{color:var(--ink);}
        .before-after-mockup .toggle-label.after.active{color:var(--accent);}
        .before-after-mockup .track{width:52px;height:30px;border-radius:16px;background:#454a57;position:relative;transition:background .35s;flex:none;}
        .before-after-mockup .track.on{background:var(--accent-soft);}
        .before-after-mockup .thumb{position:absolute;top:3px;left:3px;width:24px;height:24px;border-radius:50%;background:var(--ink);transition:left .35s cubic-bezier(.65,0,.35,1), background .35s;}
        .before-after-mockup .track.on .thumb{left:25px;background:var(--accent);}
        .before-after-mockup .gwrap{background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.35);font-family:arial,sans-serif;margin-bottom:22px;width:100%;}
        .before-after-mockup .gtop{padding:14px 16px 10px;border-bottom:1px solid var(--g-border);}
        .before-after-mockup .glogo{font-size:20px;font-weight:700;letter-spacing:-.5px;margin-bottom:10px;font-family:arial,sans-serif;}
        .before-after-mockup .glogo span:nth-child(1){color:#4285F4;}
        .before-after-mockup .glogo span:nth-child(2){color:#EA4335;}
        .before-after-mockup .glogo span:nth-child(3){color:#FBBC05;}
        .before-after-mockup .glogo span:nth-child(4){color:#4285F4;}
        .before-after-mockup .glogo span:nth-child(5){color:#34A853;}
        .before-after-mockup .glogo span:nth-child(6){color:#EA4335;}
        .before-after-mockup .gsearchbar{display:flex;align-items:center;gap:8px;border:1px solid var(--g-border);border-radius:24px;padding:8px 12px;box-shadow:0 1px 3px rgba(0,0,0,.08);min-width:0;}
        .before-after-mockup .gsearchbar svg{flex:none;width:16px;height:16px;}
        .before-after-mockup .gsearchbar .qtext{flex:1;font-size:13px;color:var(--g-text);white-space:nowrap;overflow:hidden;min-width:0;text-overflow:ellipsis;}
        .before-after-mockup .caret{display:inline-block;width:1px;background:var(--g-text);animation:blink 1s step-end infinite;margin-left:1px;height:14px;vertical-align:middle;}
        @keyframes blink{50%{opacity:0;}}
        .before-after-mockup .gtabs{display:flex;gap:14px;padding:0 14px;border-bottom:1px solid var(--g-border);overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;}
        .before-after-mockup .gtabs::-webkit-scrollbar{display:none;}
        .before-after-mockup .gtab{font-size:12px;color:var(--g-tabgray);padding:8px 0 6px;white-space:nowrap;position:relative;}
        .before-after-mockup .gtab.active{color:var(--g-blue);font-weight:600;}
        .before-after-mockup .gtab.active::after{content:"";position:absolute;left:0;right:0;bottom:0;height:3px;background:var(--g-blue);border-radius:2px 2px 0 0;}
        .before-after-mockup .gstats{font-size:11px;color:var(--g-gray);padding:8px 14px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
        .before-after-mockup .gbody{padding:6px 14px 16px;}
        .before-after-mockup .gcard{background:var(--g-card);border:1px solid var(--g-border);border-radius:12px;padding:12px;margin:8px 0 12px;display:flex;gap:10px;align-items:flex-start;}
        .before-after-mockup .avatar{flex:none;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;font-family:arial,sans-serif;background:#e2e4e8;color:#9aa0a6;transition:background .5s, color .5s;}
        .before-after-mockup .gwrap.after .avatar{background:var(--accent);color:#20180a;}
        .before-after-mockup .idmeta{flex:1;min-width:0;}
        .before-after-mockup .idname{font-size:14px;font-weight:700;color:var(--g-text);display:flex;align-items:center;gap:6px;}
        .before-after-mockup .badge{display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border-radius:50%;background:var(--g-blue);color:#fff;font-size:9px;font-weight:700;opacity:0;transform:scale(.4);transition:opacity .35s .5s, transform .35s .5s;}
        .before-after-mockup .gwrap.after .badge{opacity:1;transform:scale(1);}
        .before-after-mockup .idsub{font-size:12px;color:var(--g-gray);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
        .before-after-mockup .sigbox{width:100px;max-width:100%;height:18px;display:block;margin-top:4px;}
        .before-after-mockup #sigLine{stroke:#dadce0;stroke-width:1.5;transition:opacity .3s;}
        .before-after-mockup .gwrap.after #sigLine{opacity:0;}
        .before-after-mockup #sigPath{stroke:#c6c9ce;stroke-width:2;fill:none;stroke-linecap:round;transition:stroke .6s;}
        .before-after-mockup .gwrap.after #sigPath{stroke:var(--accent);}
        .before-after-mockup .rankflag{display:inline-flex;align-items:center;gap:5px;font-size:10px;font-weight:700;color:#9aa0a6;background:#f1f3f4;border-radius:5px;padding:3px 8px;margin-bottom:8px;transition:background .4s, color .4s;}
        .before-after-mockup .gwrap.after .rankflag{background:var(--accent-soft);color:var(--accent);}
        .before-after-mockup .breadcrumb{display:flex;align-items:center;gap:6px;margin-bottom:2px;min-width:0;}
        .before-after-mockup .favicon{flex:none;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:8.5px;font-weight:700;color:#fff;background:#454a57;transition:background .4s;}
        .before-after-mockup .gwrap.after .favicon{background:var(--accent);color:#20180a;}
        .before-after-mockup .site-line{font-size:12px;color:var(--g-text);line-height:1.2;min-width:0;overflow:hidden;}
        .before-after-mockup .site-name{display:block;}
        .before-after-mockup .site-url{display:block;font-size:11px;color:var(--g-gray);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
        .before-after-mockup .result-title{font-size:16px;color:var(--g-linktext);margin:3px 0;line-height:1.3;word-break:break-word;}
        .before-after-mockup .result-desc{font-size:12.5px;color:var(--g-text);line-height:1.45;}
        .before-after-mockup .sitelinks{display:grid;grid-template-columns:1fr 1fr;gap:8px 12px;margin-top:12px;padding-top:10px;border-top:1px solid var(--g-border);max-height:0;opacity:0;overflow:hidden;transition:max-height .5s ease, opacity .4s ease;}
        .before-after-mockup .gwrap.after .sitelinks{max-height:220px;opacity:1;}
        .before-after-mockup .sitelink-title{font-size:13px;color:var(--g-linktext);margin-bottom:1px;}
        .before-after-mockup .sitelink-desc{font-size:11px;color:var(--g-gray);line-height:1.3;}
        .before-after-mockup .stats{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
        .before-after-mockup .stat{background:#181b22;border:1px solid #272b34;border-radius:12px;padding:12px;}
        .before-after-mockup .stat-label{font-size:10.5px;color:var(--muted);margin-bottom:4px;line-height:1.3;}
        .before-after-mockup .stat-value{font-family:Georgia,serif;font-size:20px;font-weight:600;color:var(--dim);transition:color .4s;}
        .before-after-mockup .stat.on .stat-value{color:var(--accent);}
        .before-after-mockup .stat-sub{font-size:10px;color:var(--muted);margin-top:1px;}
        .before-after-mockup .hint{text-align:center;font-size:12px;color:var(--muted);margin-top:16px;padding:0 8px;}
        @media (max-width: 400px) {
          .before-after-mockup .stats { grid-template-columns: 1fr; }
          .before-after-mockup .sitelinks { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="page">
        <div className="toggle-row">
          <span className="toggle-label before active" id="lblBefore">Before</span>
          <button className="toggle" id="toggleBtn" aria-pressed="false" aria-label="Toggle before and after">
            <span className="track" id="track"><span className="thumb"></span></span>
          </button>
          <span className="toggle-label after" id="lblAfter">After</span>
        </div>

        <div className="gwrap" id="mockup">
          <div className="gtop">
            <div className="glogo"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div>
            <div className="gsearchbar">
              <svg viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span className="qtext"><span id="typed"></span><span className="caret"></span></span>
              <svg viewBox="0 0 24 24" fill="#4285F4"><path d="M12 14a3 3 0 003-3V6a3 3 0 10-6 0v5a3 3 0 003 3z"/><path d="M19 11a7 7 0 01-14 0M12 18v3" stroke="#4285F4" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
            </div>
          </div>

          <div className="gtabs">
            <span className="gtab active">All</span>
            <span className="gtab">Images</span>
            <span className="gtab">News</span>
            <span className="gtab">Maps</span>
            <span className="gtab">More</span>
          </div>

          <div className="gstats">About 48,200 results (0.42 seconds)</div>

          <div className="gbody">
            <div className="gcard">
              <div className="avatar" id="avatar">JL</div>
              <div className="idmeta">
                <div className="idname">Jordan Lee <span className="badge" id="badge">✓</span></div>
                <div className="idsub" id="idsub">No verified profile found</div>
                <svg className="sigbox" viewBox="0 0 160 30">
                  <line id="sigLine" x1="4" y1="22" x2="156" y2="22"/>
                  <path id="sigPath" d="M4 20 C 18 4, 32 4, 42 16 S 66 28, 80 10 S 104 4, 118 18 S 142 6, 156 14"/>
                </svg>
              </div>
            </div>

            <span className="rankflag" id="rankflag">Ranks #31 · page 3</span>

            <div className="result">
              <div className="breadcrumb">
                <span className="favicon" id="favicon">in</span>
                <span className="site-line">
                  <span className="site-name" id="siteName">LinkedIn</span>
                  <span className="site-url" id="siteUrl">linkedin.com › in › jordan-lee-8841203</span>
                </span>
              </div>
              <div className="result-title" id="resultTitle">Jordan Lee - Marketing - LinkedIn</div>
              <div className="result-desc" id="resultDesc">Marketing professional based in the Greater Boston Area. 500+ connections.</div>

              <div className="sitelinks">
                <div><div className="sitelink-title">About</div><div className="sitelink-desc">Brand strategist &amp; advisor</div></div>
                <div><div className="sitelink-title">Work</div><div className="sitelink-desc">Selected client projects</div></div>
                <div><div className="sitelink-title">Speaking</div><div className="sitelink-desc">Talks &amp; workshops</div></div>
                <div><div className="sitelink-title">Press</div><div className="sitelink-desc">Interviews &amp; features</div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="stats" id="stats">
          <div className="stat">
            <div className="stat-label">Profile views this month</div>
            <div className="stat-value" id="statViews">12</div>
          </div>
          <div className="stat">
            <div className="stat-label">Results on page one that are you</div>
            <div className="stat-value" id="statAccurate">20%</div>
          </div>
          <div className="stat">
            <div className="stat-label">Consistent name, photo &amp; bio</div>
            <div className="stat-value" id="statConsistent">1 of 4</div>
            <div className="stat-sub">platforms</div>
          </div>
          <div className="stat">
            <div className="stat-label">Search ranking for your name</div>
            <div className="stat-value" id="statRank">Pg 3</div>
            <div className="stat-sub" id="statRankSub">easy to miss</div>
          </div>
        </div>

        <p className="hint" id="hint">Tap the switch to see your identity, built.</p>
      </div>
    </div>
  );
}
