import svgPaths from "./svg-3nkygchrhc";

function Frame() {
  return (
    <div className="absolute inset-[35.46%_18.84%_35.52%_19.36%]">
      <div className="absolute h-[272.4px] left-[522.83px] top-[20.8px] w-[129.2px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 273">
          <path d={svgPaths.p3a0c6880} fill="var(--fill-0, #FAFBFF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[220.8px] left-[316.54px] top-[76.4px] w-[184.8px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185 221">
          <path d={svgPaths.p1c735db0} fill="var(--fill-0, #FAFBFF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[293.2px] left-[225.36px] top-0 w-[54px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 294">
          <path d={svgPaths.p32d08a70} fill="var(--fill-0, #FAFBFF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[291.6px] left-0 top-[1.6px] w-[184.8px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185 292">
          <path d={svgPaths.p30679900} fill="var(--fill-0, #FAFBFF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[220px] left-[683.13px] top-[77.2px] w-[206.824px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 220">
          <path d={svgPaths.p37356f70} fill="var(--fill-0, #FAFBFF)" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

export default function Logo() {
  return (
    <div className="bg-[#1d2fff] relative size-full" data-name="Logo">
      <Frame />
    </div>
  );
}