"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users, TrendingUp, BookOpen, Code, Palette, BarChart3 } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "Technology",
    icon: Code,
    price: "₹12,999",
    originalPrice: "₹19,999",
    rating: 4.8,
    students: 15420,
    duration: "16 weeks",
    level: "Beginner",
    trending: true,
    description: "Master React, Node.js, MongoDB and build real-world projects",
    gradient: "from-sky-blue-500 to-neon-cyan-500"
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    category: "Analytics",
    icon: BarChart3,
    price: "₹15,999",
    originalPrice: "₹24,999",
    rating: 4.9,
    students: 12350,
    duration: "20 weeks",
    level: "Intermediate",
    trending: true,
    description: "Python, Pandas, Scikit-learn, Deep Learning with TensorFlow",
    gradient: "from-deep-violet-500 to-sky-blue-500"
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    category: "Design",
    icon: Palette,
    price: "₹8,999",
    originalPrice: "₹14,999",
    rating: 4.7,
    students: 8920,
    duration: "12 weeks",
    level: "Beginner",
    trending: true,
    description: "Figma, Adobe XD, Design Systems, User Research & Prototyping",
    gradient: "from-neon-cyan-500 to-deep-violet-500"
  },
  {
    id: 4,
    title: "Digital Marketing",
    category: "Marketing",
    icon: TrendingUp,
    price: "₹6,999",
    originalPrice: "₹11,999",
    rating: 4.6,
    students: 11240,
    duration: "10 weeks",
    level: "Beginner",
    trending: false,
    description: "SEO, Social Media, Google Ads, Content Marketing Strategy",
    gradient: "from-sky-blue-500 to-deep-violet-500"
  }
];

export function TrendingCourses() {
  console.log("TrendingCourses component rendered");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-blue-500 to-deep-violet-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            <span>Trending Now</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-dark-navy mb-4">
            Most Popular <span className="text-gradient">Courses</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of students in our most sought-after programs designed by industry experts
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            
            return (
              <motion.div
                key={course.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${course.gradient} text-white`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {course.trending && (
                        <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                          Trending
                        </Badge>
                      )}
                    </div>
                    
                    <CardTitle className="text-lg font-semibold text-dark-navy group-hover:text-sky-blue-600 transition-colors">
                      {course.title}
                    </CardTitle>
                    
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {course.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Course Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      
                      {/* Level Badge */}
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-gray-500" />
                        <Badge variant="secondary" className="text-xs">
                          {course.level}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {course.category}
                        </Badge>
                      </div>
                      
                      {/* Pricing */}
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-sky-blue-600">
                          {course.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {course.originalPrice}
                        </span>
                      </div>
                      
                      {/* Enroll Button */}
                      <Button 
                        className="w-full neon-button group"
                        onClick={() => console.log(`Enrolling in course: ${course.title}`)}
                      >
                        Enroll Now
                        <BookOpen className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-sky-blue-500 text-sky-blue-600 hover:bg-sky-blue-50 px-8"
            onClick={() => console.log("View all courses clicked")}
          >
            View All Courses
            <TrendingUp className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}