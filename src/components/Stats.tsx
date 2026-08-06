// import { useEffect, useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import { stats } from "../data/content";

// interface AnimatedCounterProps {
//   value: number;
//   suffix: string;
//   duration?: number;
// }

// function AnimatedCounter({ value, suffix, duration = 2 }: AnimatedCounterProps) {
//   const [count, setCount] = useState(0);
//   const ref = useRef<HTMLSpanElement>(null);
//   const isInView = useInView(ref, { once: true, margin: "-50px" });

//   useEffect(() => {
//     if (!isInView) return;

//     let start = 0;
//     const end = value;
//     const increment = end / (duration * 60);

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 1000 / 60);

//     return () => clearInterval(timer);
//   }, [isInView, value, duration]);

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// }

// export default function Stats() {
//   return (
//     <section className="py-16 md:py-20 bg-dark-900 relative overflow-hidden">
//       <div
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34,197,94,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(22,163,74,0.2) 0%, transparent 50%)`,
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="text-center"
//             >
//               <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
//                 <AnimatedCounter value={stat.value} suffix={stat.suffix} />
//               </div>
//               <p className="text-dark-300 text-sm sm:text-base font-medium">
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "../data/content";

interface AnimatedCounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix, duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    // Easing Function: EaseOutExpo pour une décélération naturelle et élégante
    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progress);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28 bg-[#090D16] text-white overflow-hidden border-y border-slate-800/60">
      {/* Background Lighting & Neon Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label || index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-3xl bg-[#0F172A]/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0F172A]/80 transition-all duration-300 shadow-xl text-center"
            >
              {/* Ligne spéculaire de survol */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/0 group-hover:via-cyan-400/60 to-transparent transition-all duration-500" />

              {/* Valeur Chiffrée Lumineuse */}
              <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 font-sans text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 group-hover:scale-105 transition-transform duration-300">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Libellé */}
              <p className="text-slate-300 text-xs sm:text-sm font-semibold tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}