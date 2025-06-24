"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { CourseEnrollmentForm } from "./course-enrollment-form";
import { CourseSection } from "./course-section";

export function HiddenToggle() {
  const [isDark, setIsDark] = useState(false);
  const [activeView, setActiveView] = useState<'none' | 'enrollment' | 'courses'>('none');

  console.log("HiddenToggle component rendered, isDark:", isDark, "activeView:", activeView);

  const handleIconClick = () => {
    console.log("Hidden icon clicked, current state:", isDark);
    
    if (isDark) {
      // Moon clicked - show courses section
      console.log("Moon clicked - showing courses");
      setActiveView('courses');
    } else {
      // Sun clicked - show enrollment form
      console.log("Sun clicked - showing enrollment form");
      setActiveView('enrollment');
    }
    
    setIsDark(!isDark);
  };

  const handleCloseView = () => {
    console.log("Closing view");
    setActiveView('none');
  };

  return (
    <>
      {/* Hidden Trigger Icon */}
      <motion.div
        className="fixed top-24 right-6 z-40 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleIconClick}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: activeView !== 'none' ? 0 : 0.8 }}
      >
        <motion.div
          className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-blue-400 to-deep-violet-500 
                     flex items-center justify-center shadow-lg hover:shadow-neon 
                     transition-all duration-200 animate-glow border-2 border-white/20"
          animate={{ 
            rotate: isDark ? 180 : 0,
            scale: activeView !== 'none' ? 0 : 1 
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {isDark ? (
            <Moon className="w-7 h-7 text-white drop-shadow-sm" />
          ) : (
            <Sun className="w-7 h-7 text-white drop-shadow-sm" />
          )}
        </motion.div>
        
        {/* Subtle pulsing ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-sky-blue-400/30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Views */}
      <AnimatePresence mode="wait">
        {activeView === 'enrollment' && (
          <CourseEnrollmentForm onClose={handleCloseView} />
        )}
        {activeView === 'courses' && (
          <CourseSection onClose={handleCloseView} />
        )}
      </AnimatePresence>
    </>
  );
}