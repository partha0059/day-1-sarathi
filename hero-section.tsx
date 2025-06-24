"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, BookOpen } from "lucide-react";

export function HeroSection() {
  console.log("HeroSection component rendered");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-blue-50 via-white to-deep-violet-50 pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-sky-blue-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-deep-violet-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.05, 1, 1.05] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-cyan-400/8 rounded-full blur-2xl"
          animate={{ 
            x: [-30, 30, -30],
            y: [-15, 15, -15] 
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-sky-blue-100 text-sky-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>India's #1 Educational Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-gradient hero-text-glow">
                Transform Your
              </span>
              <br />
              <span className="text-dark-navy">
                Future with
              </span>
              <br />
              <span className="text-gradient hero-text-glow">
                Learning
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Discover world-class courses, expert faculty, and personalized learning paths 
              designed to help you achieve your academic and career goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button
                size="lg"
                className="neon-button group"
                onClick={() => console.log("Explore Courses clicked")}
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-sky-blue-500 text-sky-blue-600 hover:bg-sky-blue-50 group"
                onClick={() => console.log("Watch Demo clicked")}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 max-w-md"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sky-blue-600">50K+</div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <Users className="w-4 h-4" />
                  Students
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-deep-violet-600">200+</div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  Courses
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-neon-cyan-600">98%</div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <Star className="w-4 h-4" />
                  Success
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative group">
              {/* Glass Card Background */}
              <div className="glass-card rounded-3xl p-8 floating-element">
                {/* Student Image Placeholder */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-blue-100 to-deep-violet-100 aspect-[4/5]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-sky-blue-500 to-deep-violet-500 rounded-full flex items-center justify-center">
                        <Users className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        Join 50,000+ Students
                      </h3>
                      <p className="text-gray-600">
                        Learning and growing together
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating Achievement Cards */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 glass-card p-3 rounded-xl"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white fill-current" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-700">Course Completed</div>
                        <div className="text-xs text-gray-600">Machine Learning</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-4 left-4 glass-card p-3 rounded-xl"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-sky-blue-500 rounded-full flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-700">Next Class</div>
                        <div className="text-xs text-gray-600">Data Science</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-neon-cyan-400 to-sky-blue-500 rounded-full opacity-80"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-deep-violet-400 to-sky-blue-500 rounded-full opacity-70"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}