import React from 'react';

export const SolarSystem: React.FC = () => {
  const items = [
    { title: ["Personal", "Website"], angle: "0deg", delay: "0s" },
    { title: ["Online", "Profiles"], angle: "60deg", delay: "-4s" },
    { title: ["Search", "Presence"], angle: "120deg", delay: "-8s" },
    { title: ["Press &", "Media"], angle: "180deg", delay: "-12s" },
    { title: ["Online", "Reputation"], angle: "240deg", delay: "-16s" },
    { title: ["Ongoing", "Growth"], angle: "300deg", delay: "-20s" },
  ];

  return (
    <div className="relative w-[380px] max-w-full mx-auto p-4" id="siWrap">
      <div className="relative w-[280px] h-[280px] mx-auto">
        {/* Orbit Ring */}
        <div className="absolute left-1/2 top-1/2 w-[280px] h-[280px] -ml-[140px] -mt-[140px] rounded-full border-[0.5px] border-dashed border-[#C9973D]"></div>

        {/* Orbiting Items */}
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute left-1/2 top-1/2 w-0 h-0 si-pivot-anim"
            style={{ '--a': item.angle, '--d': item.delay, transform: `rotate(${item.angle})` } as React.CSSProperties}
          >
            <div className="absolute left-0 top-0 w-[96px] h-[96px] -ml-[48px] -mt-[48px] translate-y-[-140px]">
              <div className="w-full h-full rounded-full bg-white border-[0.5px] border-[#141414] flex flex-col items-center justify-center text-center si-spin-anim" style={{ '--d': item.delay } as React.CSSProperties}>
                <span className="text-[12px] text-[#141414] leading-[1.3]">{item.title[0]}</span>
                <span className="text-[12px] text-[#141414] leading-[1.3]">{item.title[1]}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Center */}
        <div className="absolute left-1/2 top-1/2 w-[124px] h-[124px] -ml-[62px] -mt-[62px] rounded-full bg-[#C9973D] border-[0.5px] border-[#8A6A1F] flex items-center justify-center">
          <img src="https://i.ibb.co.com/cK2F88HX/output-onlinepngtools.png" alt="Logo" className="w-24 h-24 object-contain brightness-0 invert" />
        </div>
      </div>
    </div>
  );
};
