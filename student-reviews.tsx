"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, ThumbsUp, Award } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    course: "Full Stack Development",
    rating: 5,
    review: "The curriculum was comprehensive and the instructors were incredibly knowledgeable. I landed my dream job at Google within 3 months of completing the course!",
    avatar: "/api/placeholder/40/40",
    initials: "PS",
    completion: "2024",
    achievement: "₹45 LPA Package"
  },
  {
    id: 2,
    name: "Rahul Kumar",
    role: "Data Scientist at Microsoft",
    course: "Data Science & ML",
    rating: 5,
    review: "Amazing experience! The hands-on projects and real-world case studies helped me transition from a non-tech background to becoming a data scientist.",
    avatar: "/api/placeholder/40/40",
    initials: "RK",
    completion: "2024",
    achievement: "Career Switch"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "UX Designer at Adobe",
    course: "UI/UX Design",
    rating: 5,
    review: "The design thinking approach and portfolio guidance were exceptional. I now work at Adobe and love what I do every day!",
    avatar: "/api/placeholder/40/40",
    initials: "SJ",
    completion: "2023",
    achievement: "Top Design Award"
  },
  {
    id: 4,
    name: "Amit Patel",
    role: "Digital Marketing Manager",
    course: "Digital Marketing",
    rating: 5,
    review: "Practical strategies that I could implement immediately. My client acquisition increased by 300% after applying what I learned.",
    avatar: "/api/placeholder/40/40",
    initials: "AP",
    completion: "2024",
    achievement: "300% Growth"
  },
  {
    id: 5,
    name: "Lisa Chen",
    role: "Full Stack Developer",
    course: "Web Development",
    rating: 5,
    review: "The mentorship program was incredible. Having experienced developers guide me through complex projects made all the difference.",
    avatar: "/api/placeholder/40/40",
    initials: "LC",
    completion: "2023",
    achievement: "Freelance Success"
  },
  {
    id: 6,
    name: "Vikram Singh",
    role: "ML Engineer at Uber",
    course: "Machine Learning",
    rating: 5,
    review: "Deep dive into algorithms and practical implementation. The course prepared me for technical interviews at top tech companies.",
    avatar: "/api/placeholder/40/40",
    initials: "VS",
    completion: "2024",
    achievement: "FAANG Placement"
  }
];

export function StudentReviews() {
  console.log("StudentReviews component rendered");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="py-20 bg-gradient-to-br from-white to-sky-blue-50/50">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-deep-violet-500 to-sky-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <ThumbsUp className="w-4 h-4" />
            <span>Student Success Stories</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-dark-navy mb-4">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real students who transformed their careers with our programs
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-sky-blue-500 opacity-50" />
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-6 line-clamp-4 leading-relaxed">
                    "{review.review}"
                  </p>

                  {/* Achievement Badge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-blue-100 to-deep-violet-100 text-sky-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      <Award className="w-3 h-3" />
                      <span>{review.achievement}</span>
                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 ring-2 ring-sky-blue-200">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback className="bg-gradient-to-br from-sky-blue-500 to-deep-violet-500 text-white font-semibold">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-dark-navy group-hover:text-sky-blue-600 transition-colors">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-600">{review.role}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-sky-blue-600 font-medium">
                          {review.course}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">
                          Class of {review.completion}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sky-blue-600 mb-2">4.9</div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-deep-violet-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Job Placement</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-cyan-600 mb-2">12k+</div>
              <div className="text-sm text-gray-600">Happy Students</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sky-blue-600 mb-2">₹8L</div>
              <div className="text-sm text-gray-600">Avg. Package</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}