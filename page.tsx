"use client";

import { HeroSection } from "@/components/hero-section";
import { TrendingCourses } from "@/components/trending-courses";
import { StudentReviews } from "@/components/student-reviews";
import { FacultyProfiles } from "@/components/faculty-profiles";
import { ContactForm } from "@/components/contact-form";
import { HiddenToggle } from "@/components/hidden-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

export default function Home() {
  console.log("Homepage component rendered");

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/30 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gradient">
              EduFuture
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth">
                <Button variant="outline" size="sm" className="border-sky-blue-200 text-sky-blue-600 hover:bg-sky-blue-50 transition-all duration-300">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link href="/auth">
                <Button size="sm" className="neon-button">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>

      {/* Page Sections */}
      <HeroSection />
      <TrendingCourses />
      <StudentReviews />
      <FacultyProfiles />
      <ContactForm />
      
      {/* Hidden Toggle Component */}
      <HiddenToggle />

      {/* Footer */}
      <footer className="bg-dark-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-4">
              EduFuture
            </div>
            <p className="text-white/70 mb-6">
              Transforming careers through world-class education
            </p>
            <div className="flex justify-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Courses</a>
              <a href="#" className="hover:text-white transition-colors">Faculty</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-white/60">
              © 2024 EduFuture. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
