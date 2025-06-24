"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Clock, Users, Star, BookOpen, Award, TrendingUp } from 'lucide-react';

interface CourseSectionProps {
  onClose: () => void;
}

export function CourseSection({ onClose }: CourseSectionProps) {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web development with React, Node.js, and MongoDB",
      duration: "12 weeks",
      students: "2,847",
      rating: 4.9,
      price: "$299",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      skills: ["React", "Node.js", "MongoDB", "JavaScript", "HTML/CSS"]
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      description: "Learn Python, machine learning, and data visualization techniques",
      duration: "16 weeks",
      students: "1,923",
      rating: 4.8,
      price: "$399",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      skills: ["Python", "Machine Learning", "SQL", "Pandas", "Visualization"]
    },
    {
      id: 3,
      title: "UI/UX Design Mastery",
      description: "Create stunning user interfaces and exceptional user experiences",
      duration: "10 weeks",
      students: "3,156",
      rating: 4.9,
      price: "$249",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=250&fit=crop",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"]
    },
    {
      id: 4,
      title: "Digital Marketing Pro",
      description: "Master SEO, social media marketing, and digital advertising",
      duration: "8 weeks",
      students: "4,291",
      rating: 4.7,
      price: "$199",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Marketing"]
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Build native iOS and Android apps with React Native",
      duration: "14 weeks",
      students: "1,687",
      rating: 4.8,
      price: "$349",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      skills: ["React Native", "iOS", "Android", "API Integration", "App Store"]
    },
    {
      id: 6,
      title: "Cloud Computing AWS",
      description: "Master cloud architecture and deployment on Amazon Web Services",
      duration: "12 weeks",
      students: "2,034",
      rating: 4.9,
      price: "$429",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      skills: ["AWS", "Docker", "Kubernetes", "DevOps", "Cloud Security"]
    }
  ];

  const handleEnroll = (courseTitle: string) => {
    console.log('Enrolling in course:', courseTitle);
    // Handle enrollment logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 15, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-blue-500 to-deep-violet-500 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Explore Our Courses</h2>
              <p className="text-white/90">Choose from our comprehensive selection of professional courses</p>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-white/80">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-white/80">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge 
                        variant="secondary" 
                        className={`${
                          course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        {course.level}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-semibold text-gray-800">
                      {course.price}
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-sky-blue-600 transition-colors">
                      {course.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {course.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                        {course.rating}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Key Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {course.skills.slice(0, 3).map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {course.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{course.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-sky-blue-500 to-deep-violet-500 hover:from-sky-blue-600 hover:to-deep-violet-600 transition-all duration-200"
                      onClick={() => handleEnroll(course.title)}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-8 text-center">
            <Button
              onClick={onClose}
              variant="outline"
              className="px-8 py-3 text-lg border-2 border-sky-blue-500 text-sky-blue-600 hover:bg-sky-blue-50"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}