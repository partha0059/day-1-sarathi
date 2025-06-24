"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Users, 
  BookOpen, 
  Award, 
  Linkedin, 
  Github, 
  Globe,
  MessageCircle,
  Code,
  Database,
  Palette,
  TrendingUp
} from "lucide-react";

const faculty = [
  {
    id: 1,
    name: "Dr. Arjun Mehta",
    role: "Senior Full Stack Instructor",
    company: "Ex-Google, Ex-Microsoft",
    avatar: "/api/placeholder/120/120",
    initials: "AM",
    expertise: ["React", "Node.js", "Python", "AWS"],
    experience: "12+ years",
    students: 8500,
    courses: 15,
    rating: 4.9,
    icon: Code,
    gradient: "from-sky-blue-500 to-neon-cyan-500",
    bio: "Former Google Senior Engineer with expertise in building scalable web applications. Passionate about teaching modern development practices.",
    achievements: [
      "Tech Lead at Google Search",
      "Microsoft Azure Certified",
      "Published 3 research papers"
    ],
    social: {
      linkedin: "#",
      github: "#",
      website: "#"
    }
  },
  {
    id: 2,
    name: "Dr. Priya Nakamura",
    role: "Data Science Lead",
    company: "Ex-Meta, Ex-Netflix",
    avatar: "/api/placeholder/120/120",
    initials: "PN",
    expertise: ["Machine Learning", "Python", "TensorFlow", "Statistics"],
    experience: "10+ years",
    students: 6200,
    courses: 12,
    rating: 4.8,
    icon: Database,
    gradient: "from-deep-violet-500 to-sky-blue-500",
    bio: "Data Science expert who led ML initiatives at Meta and Netflix. Specializes in making complex concepts accessible.",
    achievements: [
      "ML Lead at Meta",
      "Netflix Recommendation Systems",
      "PhD in Computer Science"
    ],
    social: {
      linkedin: "#",
      github: "#",
      website: "#"
    }
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Design Director",
    company: "Ex-Apple, Ex-Airbnb",
    avatar: "/api/placeholder/120/120",
    initials: "SW",
    expertise: ["UI/UX Design", "Figma", "Design Systems", "Research"],
    experience: "15+ years",
    students: 4800,
    courses: 8,
    rating: 4.9,
    icon: Palette,
    gradient: "from-neon-cyan-500 to-deep-violet-500",
    bio: "Award-winning designer who shaped product experiences at Apple and Airbnb. Advocates for user-centered design.",
    achievements: [
      "Design Director at Apple",
      "Airbnb Design Systems Lead",
      "UX Design Award Winner"
    ],
    social: {
      linkedin: "#",
      github: "#",
      website: "#"
    }
  },
  {
    id: 4,
    name: "Raj Patel",
    role: "Marketing Strategist",
    company: "Ex-HubSpot, Ex-Salesforce",
    avatar: "/api/placeholder/120/120",
    initials: "RP",
    expertise: ["Digital Marketing", "SEO", "Analytics", "Strategy"],
    experience: "8+ years",
    students: 3200,
    courses: 6,
    rating: 4.7,
    icon: TrendingUp,
    gradient: "from-sky-blue-500 to-deep-violet-500",
    bio: "Growth marketing expert who scaled user acquisition at HubSpot and Salesforce. Focuses on data-driven strategies.",
    achievements: [
      "Growth Lead at HubSpot",
      "Salesforce Marketing Cloud Expert",
      "Digital Marketing Certification"
    ],
    social: {
      linkedin: "#",
      github: "#",
      website: "#"
    }
  }
];

export function FacultyProfiles() {
  console.log("FacultyProfiles component rendered");

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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            <Award className="w-4 h-4" />
            <span>World-Class Faculty</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-dark-navy mb-4">
            Learn from <span className="text-gradient">Industry Experts</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our instructors are seasoned professionals from top tech companies, bringing real-world experience to the classroom
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {faculty.map((instructor, index) => {
            const IconComponent = instructor.icon;
            
            return (
              <motion.div
                key={instructor.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    {/* Avatar and Basic Info */}
                    <div className="text-center mb-6">
                      <div className="relative inline-block mb-4">
                        <Avatar className="w-20 h-20 mx-auto ring-4 ring-white shadow-lg">
                          <AvatarImage src={instructor.avatar} alt={instructor.name} />
                          <AvatarFallback className={`bg-gradient-to-br ${instructor.gradient} text-white font-bold text-lg`}>
                            {instructor.initials}
                          </AvatarFallback>
                        </Avatar>
                        
                        {/* Icon Badge */}
                        <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${instructor.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-dark-navy group-hover:text-sky-blue-600 transition-colors mb-1">
                        {instructor.name}
                      </h3>
                      
                      <p className="text-sm font-medium text-sky-blue-600 mb-1">
                        {instructor.role}
                      </p>
                      
                      <p className="text-xs text-gray-600 mb-3">
                        {instructor.company}
                      </p>
                      
                      {/* Rating */}
                      <div className="flex items-center justify-center gap-1 mb-4">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-700">
                          {instructor.rating}
                        </span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-xs text-gray-600 mb-4 line-clamp-3">
                      {instructor.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {instructor.expertise.slice(0, 3).map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs px-2 py-1">
                          {skill}
                        </Badge>
                      ))}
                      {instructor.expertise.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{instructor.expertise.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          Students
                        </span>
                        <span className="font-semibold text-gray-800">
                          {instructor.students.toLocaleString()}+
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          Courses
                        </span>
                        <span className="font-semibold text-gray-800">
                          {instructor.courses}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Experience
                        </span>
                        <span className="font-semibold text-gray-800">
                          {instructor.experience}
                        </span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 mb-4">
                      <a 
                        href={instructor.social.linkedin}
                        className="text-gray-400 hover:text-sky-blue-500 transition-colors"
                        onClick={() => console.log(`LinkedIn clicked for ${instructor.name}`)}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href={instructor.social.github}
                        className="text-gray-400 hover:text-gray-700 transition-colors"
                        onClick={() => console.log(`GitHub clicked for ${instructor.name}`)}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={instructor.social.website}
                        className="text-gray-400 hover:text-deep-violet-500 transition-colors"
                        onClick={() => console.log(`Website clicked for ${instructor.name}`)}
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Contact Button */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-sky-blue-200 text-sky-blue-600 hover:bg-sky-blue-50 group"
                      onClick={() => console.log(`Contact clicked for ${instructor.name}`)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Ask a Question
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Join Faculty CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-navy mb-4">
              Want to Teach with Us?
            </h3>
            <p className="text-gray-600 mb-6">
              Share your expertise with thousands of students and make a real impact in their careers.
            </p>
            <Button 
              className="neon-button"
              onClick={() => console.log("Become Instructor clicked")}
            >
              Become an Instructor
              <Award className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}