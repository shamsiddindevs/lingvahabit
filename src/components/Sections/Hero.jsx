

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
      {/* Background Decor - Tailwind v4 gradient va blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-100/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-orange-50/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Sarlavha - "screencapture-lingvohabit-2026-05-05-18_11_24.jpg" dagi kabi */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#2D3142] leading-[1.1] mb-8">
          Samouchitel angliyskogo <br /> 
          yazika onlayn: <span className="text-indigo-600 relative inline-block">
            ot osnov
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-orange-400/60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span> <br />
          do uverennogo urovnya
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Online kurslarimiz yordamida ingliz tilini tizimli va samarali o'rganing. 
          Darslarimiz har qanday darajadagi o'quvchilar uchun mos keladi.
        </p>

        {/* CTA Form */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-full max-w-md relative">
            <input 
              type="email" 
              placeholder="Email"
              className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white transition-all text-center"
            />
          </div>
          
          <button className="w-full max-w-md bg-[#FF7D52] hover:bg-[#ff6b3d] text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-orange-200 transition-all transform active:scale-95 text-lg">
            Nachat za 2 minuti
          </button>
          
          {/* Social Icons / Trusted By */}
          <div className="mt-6 flex items-center gap-4 grayscale opacity-40">
            <div className="p-2 border border-slate-200 rounded-full w-10 h-10 flex items-center justify-center font-bold">G</div>
            <div className="p-2 border border-slate-200 rounded-full w-10 h-10 flex items-center justify-center font-bold">f</div>
            <div className="p-2 border border-slate-200 rounded-full w-10 h-10 flex items-center justify-center font-bold">in</div>
          </div>
          
          <p className="mt-4 text-sm text-slate-400">
            Pri registratsii vi prinimaete <a href="#" className="underline decoration-indigo-200">usloviya</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;