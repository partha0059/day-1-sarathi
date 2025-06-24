"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  GraduationCap,
  Star,
  CheckCircle
} from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log("ContactForm component rendered");

  const handleInputChange = (field: string, value: string) => {
    console.log(`Contact form input changed - ${field}:`, value);
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@edufuture.com",
      description: "Send us an email anytime!"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9876543210",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Bangalore, Karnataka",
      description: "Come say hello at our HQ"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "9:00 AM - 6:00 PM",
      description: "Monday to Friday"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-blue-50 to-white">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-cyan-500 to-sky-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Get in Touch</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-dark-navy mb-4">
            Ready to Start Your <span className="text-gradient">Learning Journey?</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses? Want personalized guidance? Our education counselors are here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-dark-navy mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-8">
                Whether you're just starting your career or looking to upskill, we're here to guide you every step of the way.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-sky-blue-500 to-neon-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-dark-navy">
                              {info.title}
                            </h4>
                            <p className="text-sky-blue-600 font-medium">
                              {info.content}
                            </p>
                            <p className="text-xs text-gray-600">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Success Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="glass-card rounded-2xl p-6"
            >
              <h4 className="font-semibold text-dark-navy mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Why Choose EduFuture?
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-sky-blue-600">24hrs</div>
                  <div className="text-xs text-gray-600">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-deep-violet-600">100%</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-dark-navy flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-sky-blue-500" />
                  Get Free Career Counseling
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="pl-10 border-gray-200 focus:border-sky-blue-500 focus:ring-sky-blue-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address *
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="pl-10 border-gray-200 focus:border-sky-blue-500 focus:ring-sky-blue-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number *
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="pl-10 border-gray-200 focus:border-sky-blue-500 focus:ring-sky-blue-500"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Course Interest */}
                    <div className="space-y-2">
                      <Label htmlFor="course" className="text-sm font-medium text-gray-700">
                        Course of Interest
                      </Label>
                      <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)}>
                        <SelectTrigger className="border-gray-200 focus:border-sky-blue-500 focus:ring-sky-blue-500">
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fullstack">Full Stack Development</SelectItem>
                          <SelectItem value="datascience">Data Science & ML</SelectItem>
                          <SelectItem value="uiux">UI/UX Design</SelectItem>
                          <SelectItem value="marketing">Digital Marketing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Budget and Timeline */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-sm font-medium text-gray-700">
                          Budget Range
                        </Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="border-gray-200 focus:border-sky-blue-500 focus:ring-sky-blue-500">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5k-10k">₹5,000 - ₹10,000</SelectItem>
                            <SelectItem value="10k-20k">₹10,000 - ₹20,000</SelectItem>
                            <SelectItem value="20k-50k">₹20,000 - ₹50,000</SelectItem>
                            <SelectItem value="50k+">₹50,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeline" className="text-sm font-medium text-gray-700">
                          When to Start?
                        </Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger className="border-gray-200 focus:border-sky-blue-500 focus:ring-sky-blue-500">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediately">Immediately</SelectItem>
                            <SelectItem value="1month">Within 1 month</SelectItem>
                            <SelectItem value="3months">Within 3 months</SelectItem>
                            <SelectItem value="6months">Within 6 months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                      </Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Textarea
                          id="message"
                          placeholder="Tell us about your career goals and any specific questions..."
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="pl-10 min-h-[100px] border-gray-200 focus:border-sky-blue-500 focus:ring-sky-blue-500 resize-none"
                          rows={4}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full neon-button text-white font-semibold h-12 group"
                      >
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-dark-navy mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for your interest. Our counselor will contact you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}