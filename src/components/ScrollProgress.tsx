import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [percentage, setPercentage] = useState(0);


  const { scrollYProgress } = useScroll();


  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });


  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setPercentage(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>



      <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-slate-900/40 backdrop-blur-xs">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 origin-left shadow-[0_0_12px_rgba(6,182,212,0.8)]"
          style={{ scaleX }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: percentage > 1 ? 1 : 0,
          scale: percentage > 1 ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-6 left-4 sm:left-6 z-40 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F172A]/80 border border-slate-800 backdrop-blur-md shadow-xl text-xs font-mono font-bold text-slate-200"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 tabular-nums">
          {percentage}%
        </span>
      </motion.div>
    </>
  );
}