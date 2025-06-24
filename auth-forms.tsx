"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Phone, 
  ArrowRight,
  Sparkles,
  Shield,
  Zap
} from "lucide-react";

export function AuthForms() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  console.log("AuthForms component rendered, isLogin:", isLogin);

  const toggleMode = () => {
    console.log("Toggling auth mode from", isLogin ? "login" : "signup", "to", isLogin ? "signup" : "login");
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    console.log(`Form input changed - ${field}:`, value);
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { mode: isLogin ? 'login' : 'signup', data: formData });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-blue-900 via-deep-violet-900 to-dark-navy overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-sky-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-deep-violet-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.05, 1, 1.05],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-cyan-500/8 rounded-full blur-2xl"
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

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-8, 8, -8],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 3 + Math.random() * 1,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-4"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan-400 to-sky-blue-500 rounded-2xl flex items-center justify-center shadow-neon">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-neon-cyan-400 to-sky-blue-400 bg-clip-text text-transparent">
                EduFuture
              </span>
            </h1>
            
            <p className="text-white/70">
              {isLogin ? "Sign in to your account" : "Create your account"}
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card-dark rounded-3xl p-8 shadow-2xl border border-white/10"
          >
            {/* Toggle Buttons */}
            <div className="flex bg-white/5 rounded-2xl p-1 mb-8">
              <button
                onClick={() => !isLogin && toggleMode()}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  isLogin 
                    ? 'bg-gradient-to-r from-sky-blue-500 to-neon-cyan-500 text-white shadow-neon' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  Login
                </div>
              </button>
              <button
                onClick={() => isLogin && toggleMode()}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  !isLogin 
                    ? 'bg-gradient-to-r from-deep-violet-500 to-sky-blue-500 text-white shadow-neon' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4" />
                  Sign Up
                </div>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isLogin ? 'login' : 'signup'}
                  initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Name Field - Only for Signup */}
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="name" className="text-white/90 font-medium">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="glass-input pl-11 h-12 text-white placeholder:text-white/60 font-medium"
                          required={!isLogin}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/90 font-medium">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="glass-input pl-11 h-12 text-white placeholder:text-white/60 font-medium"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Field - Only for Signup */}
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="phone" className="text-white/90 font-medium">
                        Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="glass-input pl-11 h-12 text-white placeholder:text-white/60 font-medium"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Password Field */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white/90 font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="glass-input pl-11 pr-11 h-12 text-white placeholder:text-white/60 font-medium"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/80"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password - Only for Signup */}
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="confirmPassword" className="text-white/90 font-medium">
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          className="glass-input pl-11 h-12 text-white placeholder:text-white/60 font-medium"
                          required={!isLogin}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Terms Checkbox - Only for Signup */}
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                        className="border-white/30 data-[state=checked]:bg-sky-blue-500"
                      />
                      <Label htmlFor="terms" className="text-sm text-white/80">
                        I agree to the{" "}
                        <a href="#" className="text-neon-cyan-400 hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-neon-cyan-400 hover:underline">
                          Privacy Policy
                        </a>
                      </Label>
                    </motion.div>
                  )}

                  {/* Forgot Password - Only for Login */}
                  {isLogin && (
                    <div className="text-right">
                      <a href="#" className="text-sm text-neon-cyan-400 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full neon-button h-12 text-white font-semibold text-lg group"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </form>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-sky-blue-900 text-white/60">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                  onClick={() => console.log("Google login clicked")}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/30 text-white hover:bg-blue-600/80 hover:border-blue-500 transition-all duration-300"
                  onClick={() => console.log("Facebook login clicked")}
                >
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}