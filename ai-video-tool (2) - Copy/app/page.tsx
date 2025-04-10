"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronRight,
  Play,
  FileText,
  Settings,
  Video,
  CheckCircle,
  Zap,
  Layers,
  Globe,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Presentation,
  Users,
  MousePointer,
  Cpu,
  Brain,
  Shield,
  Star,
  ThumbsUp,
  Headphones,
  PieChart,
  Bookmark,
  RefreshCw,
  Briefcase,
  Maximize,
  Minimize,
  Lock,
  AlertCircle,
  ChevronLeft,
} from "lucide-react"

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeComparison, setActiveComparison] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [statsVisible, setStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    videos: 0,
    hours: 0,
    satisfaction: 0
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const features = [
    {
      title: "AI-Powered Video Creation",
      description: "Transform text into engaging educational videos with just a few clicks. Our advanced AI analyzes your content to create perfectly structured videos.",
      icon: Brain,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Smart Content Analysis",
      description: "Our AI analyzes your content to identify key points, create chapter markers, and generate visuals that enhance understanding and retention.",
      icon: Cpu,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Educational Templates",
      description: "Choose from dozens of professionally designed templates optimized for learning, including lecture formats, explainer videos, and interactive tutorials.",
      icon: BookOpen,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Voiceover Generation",
      description: "Natural-sounding AI voices in multiple languages and accents. Customize tone, pace, and emphasis to match your teaching style.",
      icon: Presentation,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Interactive Elements",
      description: "Add quizzes, polls, and interactive elements to boost engagement and measure comprehension. Perfect for flipped classroom approaches.",
      icon: MousePointer,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "University Professor",
      institution: "Stanford University",
      image: "/placeholder.svg?height=80&width=80",
      content: "Collegites AI has revolutionized how I create lecture videos. What used to take hours now takes minutes, and the quality is outstanding. My students are more engaged than ever, with a 42% increase in content retention rates!",
      rating: 5
    },
    {
      name: "Mark Williams",
      role: "Corporate Trainer",
      institution: "Global Learning Solutions",
      image: "/placeholder.svg?height=80&width=80",
      content: "Our training department has seen a 300% increase in completion rates since switching to videos created with Collegites AI. The interactive elements and professional quality make all the difference. We've saved over 20 hours per week in video production time.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Online Course Creator",
      institution: "SkillShare Master",
      image: "/placeholder.svg?height=80&width=80",
      content: "As someone who creates educational content full-time, Collegites AI has been a game-changer. The time I save on video production lets me focus on creating better course content. My enrollment rates have increased by 78% since using these videos.",
      rating: 5
    },
    {
      name: "Prof. James Rodriguez",
      role: "Department Chair",
      institution: "MIT Education",
      image: "/placeholder.svg?height=80&width=80",
      content: "We've implemented Collegites AI across our entire department. The consistency in quality and the ability to quickly update content has transformed our distance learning program. Student satisfaction scores have increased by 67%.",
      rating: 5
    }
  ];

  const comparisonItems = [
    {
      title: "Traditional Video Creation",
      before: {
        time: "8-10 hours",
        cost: "₹15,000-₹30,000 per video",
        equipment: "Professional camera, lighting, editing software",
        expertise: "Video editing skills required",
        flexibility: "Difficult to update content",
        scalability: "Limited by time and resources"
      },
      after: {
        time: "15-30 minutes",
        cost: "Starting at ₹600/month for unlimited videos",
        equipment: "Just your computer",
        expertise: "No technical skills needed",
        flexibility: "Easy content updates anytime",
        scalability: "Create unlimited videos"
      },
      image: "/placeholder.svg?height=400&width=700"
    },
    {
      title: "Student Engagement",
      before: {
        attention: "60% drop-off rate in traditional lectures",
        interaction: "Limited to passive watching",
        retention: "22% information retention",
        accessibility: "Limited by time and location",
        personalization: "One-size-fits-all approach",
        feedback: "Delayed feedback loop"
      },
      after: {
        attention: "85% completion rate with AI videos",
        interaction: "Interactive elements throughout",
        retention: "68% information retention",
        accessibility: "Available anytime, anywhere",
        personalization: "Customized learning paths",
        feedback: "Immediate assessment options"
      },
      image: "/placeholder.svg?height=400&width=700"
    }
  ];

  const subjects = [
    { name: "Mathematics", icon: PieChart, color: "bg-blue-100 text-blue-600" },
    { name: "Science", icon: Cpu, color: "bg-green-100 text-green-600" },
    { name: "History", icon: Bookmark, color: "bg-amber-100 text-amber-600" },
    { name: "Literature", icon: BookOpen, color: "bg-purple-100 text-purple-600" },
    { name: "Computer Science", icon: Layers, color: "bg-indigo-100 text-indigo-600" },
    { name: "Business", icon: Briefcase, color: "bg-slate-100 text-slate-600" },
    { name: "Languages", icon: Globe, color: "bg-pink-100 text-pink-600" },
    { name: "Arts", icon: Presentation, color: "bg-rose-100 text-rose-600" }
  ];

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target === statsRef.current) {
        setStatsVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (statsVisible) {
      const duration = 2000; // 2 seconds
      const interval = 20; // Update every 20ms
      const steps = duration / interval;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setAnimatedStats({
          users: Math.floor(progress * 10000),
          videos: Math.floor(progress * 250000),
          hours: Math.floor(progress * 45000),
          satisfaction: Math.floor(progress * 98)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [statsVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(testimonialInterval);
  }, []);

  useEffect(() => {
    const comparisonInterval = setInterval(() => {
      setActiveComparison((prev) => (prev + 1) % comparisonItems.length);
    }, 10000);

    return () => clearInterval(comparisonInterval);
  }, []);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const position = ((e.clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, position)));
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Navigation */}
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-orange-100">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2">
                <Video className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Collegites AI</span>
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/" className="text-sm font-medium text-orange-600 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-500">Home</Link>
                <Link href="/v-blogs" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">V-Blogs</Link>
                <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">Pricing</Link>
                <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">Our Products</Link>
                <Link href="/services" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">Our Services</Link>
                <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">Contact Us</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="border-orange-200 text-orange-700 hover:bg-orange-100 hover:text-orange-800">Dashboard</Button>
              </Link>
              <Button size="sm" className="hidden md:flex bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                <span className="mr-2">Try Free</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-white z-0"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-orange-500/10"
                  style={{
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 100 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, Math.random() * 100 - 50],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>

            <motion.div
              className="container relative z-10"
              style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            >
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <motion.div
                  className="flex flex-col justify-center space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="space-y-4">
                    <motion.div
                      className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Revolutionary AI Video Creation
                    </motion.div>
                    <motion.h1
                      className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Transform Your Content into Engaging Educational Videos
                    </motion.h1>
                    <motion.p
                      className="max-w-[600px] text-gray-600 md:text-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Our AI-powered tool converts your text content into professional videos effortlessly. Save time, enhance your content, and captivate your audience like never before.
                    </motion.p>
                  </div>
                  <motion.div
                    className="flex flex-col gap-3 sm:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button size="lg" className="gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg shadow-orange-500/20 transition-all hover:shadow-xl hover:shadow-orange-500/30">
                      Try Free for 14 Days
                      <Zap className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2 border-orange-200 text-orange-700 hover:bg-orange-100 hover:text-orange-800">
                      Watch Demo
                      <Play className="h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center text-orange-800 text-xs font-medium">
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <span>Join 10,000+ educators & content creators</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-medium text-gray-700">4.9/5 rating</span>
                    <span className="text-gray-400">|</span>
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-medium">Secure & Trusted</span>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="relative mx-auto lg:mx-0"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-red-600/20 z-10"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <Button
                        variant="default"
                        size="icon"
                        className={`rounded-full w-16 h-16 bg-white/80 text-orange-600 hover:bg-white hover:text-orange-700 backdrop-blur-sm ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}
                        onClick={handleVideoPlay}
                      >
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                    <video
                      ref={videoRef}
                      className="w-full aspect-video object-cover"
                      poster="/placeholder.svg?height=550&width=750"
                      onClick={handleVideoPlay}
                      onEnded={() => setIsVideoPlaying(false)}
                    >
                      <source src="#" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <motion.div
                    className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 flex items-center gap-3 border border-orange-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <div className="bg-orange-100 rounded-full p-2 text-orange-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Super Fast</div>
                      <div className="text-xs text-gray-500">Videos in minutes</div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute -top-6 -left-6 bg-white rounded-lg shadow-xl p-4 flex items-center gap-3 border border-orange-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    <div className="bg-green-100 rounded-full p-2 text-green-600">
                      <ThumbsUp className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">No Experience Needed</div>
                      <div className="text-xs text-gray-500">Easy to use</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            />
          </section>

          {/* Trust Badges */}
          <section className="py-8 bg-white border-y border-orange-100">
            <div className="container">
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">100% Secure Payment</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <RefreshCw className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">14-Day Money Back</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Headphones className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">24/7 Customer Support</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Lock className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium">GDPR Compliant</span>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Trusted By */}
          <section className="py-12 bg-white">
            <div className="container">
              <div className="text-center mb-8">
                <h2 className="text-xl font-medium text-gray-500">Trusted by leading educational institutions</h2>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.6, y: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={`/placeholder.svg?height=40&width=${80 + i * 10}`}
                      alt={`Partner ${i}`}
                      className="h-10 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section ref={statsRef} className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <div className="container">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{animatedStats.users.toLocaleString()}+</div>
                  <div className="text-white/80">Active Users</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{animatedStats.videos.toLocaleString()}+</div>
                  <div className="text-white/80">Videos Created</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{animatedStats.hours.toLocaleString()}+</div>
                  <div className="text-white/80">Hours Saved</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{animatedStats.satisfaction}%</div>
                  <div className="text-white/80">Satisfaction Rate</div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
            <div className="container relative">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Simple Process
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Create your video in 3 easy steps</h2>
                <p className="max-w-2xl mx-auto text-gray-600">Our intuitive platform makes video creation effortless, even if you have no prior experience.</p>
              </motion.div>

              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-red-400 transform -translate-y-1/2 hidden md:block"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                  {[
                    {
                      title: "Add Content & Prompt",
                      description: "Upload your notes, descriptions, or any relevant content. Drag and drop files or paste the text directly. Our AI will analyze your content for optimal video structure.",
                      icon: FileText,
                      image: "/placeholder.svg?height=300&width=400"
                    },
                    {
                      title: "Review Content",
                      description: "Preview the content and prompt to ensure everything is aligned with your vision. Make any necessary edits to the script, visuals, or voiceover before final generation.",
                      icon: Settings,
                      image: "/placeholder.svg?height=300&width=400"
                    },
                    {
                      title: "Generate Video",
                      description: "Click on the 'Generate' button. In just a few minutes, our AI will create a polished video ready to share with your students, colleagues, or audience.",
                      icon: Video,
                      image: "/placeholder.svg?height=300&width=400"
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="relative z-10"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-orange-100 h-full flex flex-col transform transition-transform hover:scale-105 hover:shadow-2xl">
                        <div className="p-6 flex-1">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-lg mb-4">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                        <div className="relative h-48 bg-orange-50">
                          <img
                            src={step.image || "/placeholder.svg"}
                            alt={`Step ${index + 1}`}
                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          <div className="absolute bottom-4 right-4">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                              <step.icon className="h-5 w-5 text-orange-600" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg shadow-orange-500/20 transition-all hover:shadow-xl hover:shadow-orange-500/30"
                  size="lg"
                >
                  Start Creating Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Before & After Comparison */}
          <section className="py-20 bg-white overflow-hidden">
            <div className="container">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  See The Difference
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Before & After Collegites AI</h2>
                <p className="max-w-2xl mx-auto text-gray-600">Experience the transformation in your educational content creation process.</p>
              </motion.div>

              <div className="max-w-5xl mx-auto">
                <Tabs defaultValue="comparison-0" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    {comparisonItems.map((item, index) => (
                      <TabsTrigger
                        key={index}
                        value={`comparison-${index}`}
                        className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800"
                        onClick={() => setActiveComparison(index)}
                      >
                        {item.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {comparisonItems.map((item, index) => (
                    <TabsContent key={index} value={`comparison-${index}`} className="mt-0">
                      <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl overflow-hidden shadow-lg border border-orange-100">
                        <div className="p-6 md:p-8">
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-red-200">
                                <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center">
                                  <Minimize className="h-5 w-5 mr-2" />
                                  Before
                                </h3>
                                <ul className="space-y-3">
                                  {Object.entries(item.before).map(([key, value]) => (
                                    <li key={key} className="flex items-start gap-2">
                                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                                      <div>
                                        <span className="font-medium capitalize">{key}:</span> {value}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-green-200">
                                <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center">
                                  <Maximize className="h-5 w-5 mr-2" />
                                  After
                                </h3>
                                <ul className="space-y-3">
                                  {Object.entries(item.after).map(([key, value]) => (
                                    <li key={key} className="flex items-start gap-2">
                                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                      <div>
                                        <span className="font-medium capitalize">{key}:</span> {value}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="relative">
                              <div
                                ref={sliderRef}
                                className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden cursor-pointer border border-orange-200"
                                onClick={handleSliderChange}
                              >
                                <div className="absolute inset-0 z-10 flex items-center justify-center">
                                  <div className="absolute left-0 top-0 bottom-0 w-full bg-red-100/20 backdrop-blur-[1px] flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg max-w-[80%]">
                                        <h4 className="font-bold text-red-600 mb-1">Before</h4>
                                        <p className="text-sm">Traditional video creation is time-consuming and expensive</p>
                                      </div>
                                    </div>
                                    <img
                                      src={item.image || "/placeholder.svg"}
                                      alt="Before"
                                      className="w-full h-full object-cover opacity-80 grayscale"
                                    />
                                  </div>
                                  <div
                                    className="absolute left-0 top-0 bottom-0 overflow-hidden bg-green-100/20 backdrop-blur-[1px] flex items-center justify-center"
                                    style={{ width: `${sliderPosition}%` }}
                                  >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg max-w-[80%]">
                                        <h4 className="font-bold text-green-600 mb-1">After</h4>
                                        <p className="text-sm">Collegites AI makes it fast, affordable, and professional</p>
                                      </div>
                                    </div>
                                    <img
                                      src={item.image || "/placeholder.svg"}
                                      alt="After"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div
                                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 cursor-ew-resize"
                                    style={{ left: `${sliderPosition}%` }}
                                  >
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                                      <ChevronRight className="h-4 w-4 text-orange-600" />
                                      <ChevronLeft className="h-4 w-4 text-orange-600" />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-4 text-center text-sm text-gray-500">
                                Drag the slider to compare before and after
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </section>

          {/* Features Showcase */}
          <section ref={featuresRef} className="py-20 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
            <div className="container">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Powerful Features
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Cutting-edge AI technology</h2>
                <p className="max-w-2xl mx-auto text-gray-600">Our platform combines advanced AI with intuitive design to make video creation effortless.</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="space-y-8">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className={`p-6 rounded-xl transition-all duration-300 ${activeFeature === index ? 'bg-white shadow-xl border border-orange-100 scale-105' : 'bg-gray-50 hover:bg-white hover:shadow-lg cursor-pointer'}`}
                        onClick={() => setActiveFeature(index)}
                        whileHover={{ scale: activeFeature === index ? 1.05 : 1.02 }}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`rounded-lg p-3 bg-gradient-to-br ${feature.color} text-white`}>
                            <feature.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="order-1 lg:order-2 relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
                  <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                    <img
                      src="/placeholder.svg?height=600&width=800"
                      alt="Feature showcase"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 to-red-600/10"></div>

                    <motion.div
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 flex items-center gap-2"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="bg-green-100 rounded-full p-1 text-green-600">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div className="text-sm font-medium">AI-Powered</div>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 flex items-center gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="bg-blue-100 rounded-full p-1 text-blue-600">
                        <Zap className="h-4 w-4" />
                      </div>
                      <div className="text-sm font-medium">Lightning Fast</div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 flex items-center gap-3 border border-orange-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="bg-orange-100 rounded-full p-2 text-orange-600">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Educational Focus</div>
                      <div className="text-xs text-gray-500">Optimized for learning</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Subject Areas */}
          <section className="py-20 bg-white overflow-hidden">
            <div className="container">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  For Every Subject
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Create Videos for Any Subject</h2>
                <p className="max-w-2xl mx-auto text-gray-600">Our AI is trained to understand and visualize content across all educational disciplines.</p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {subjects.map((subject, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-xl hover:border-orange-100 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className={`w-12 h-12 rounded-full ${subject.color} flex items-center justify-center mb-4`}>
                      <subject.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-gray-800">{subject.name}</h3>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  variant="outline"
                  className="border-orange-200 text-orange-700 hover:bg-orange-100 hover:text-orange-800"
                >
                  View All Subject Areas
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-20 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
            <div className="container">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Versatile Applications
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Unlock the Potential of Your Content</h2>
                <p className="max-w-2xl mx-auto text-gray-600">From classroom lectures to corporate training, our AI video tool adapts to your specific needs.</p>
              </motion.div>

              <Tabs defaultValue="education" className="mt-12">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-orange-100/50 p-1 rounded-lg">
                  {[
                    { value: "education", label: "Education", icon: BookOpen },
                    { value: "hr", label: "HR Training", icon: Users },
                    { value: "books", label: "Video Books", icon: BookOpen },
                    { value: "courses", label: "Courses", icon: GraduationCap },
                    { value: "marketing", label: "Marketing", icon: Presentation }
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm flex items-center gap-2"
                    >
                      <tab.icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="mt-8">
                  <TabsContent value="education" className="mt-0">
                    <motion.div
                      className="grid md:grid-cols-2 gap-8 items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="space-y-6">
                        <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                          For Teachers & Educators
                        </div>
                        <h3 className="text-2xl font-bold">Educational Videos for Teachers</h3>
                        <p className="text-gray-600">Transform your teaching materials into engaging video content that captivates students and improves learning outcomes.</p>

                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Convert lesson notes into video lectures</h4>
                              <p className="text-sm text-gray-500">Turn your existing materials into dynamic videos</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Use relevant images and AI voiceover</h4>
                              <p className="text-sm text-gray-500">Simplify explanations with visual aids</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Personalize teaching style</h4>
                              <p className="text-sm text-gray-500">Customize narration and imagery to match your style</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Improve student engagement</h4>
                              <p className="text-sm text-gray-500">Boost student interest through dynamic visuals</p>
                            </div>
                          </div>
                        </div>

                        <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg">
                          Create Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-20"></div>
                        <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                          <img
                            src="/placeholder.svg?height=500&width=600"
                            alt="Educational video example"
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 to-red-600/10"></div>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>

                  {/* Other tab contents follow the same pattern */}
                  {/* HR Training tab */}
                  <TabsContent value="hr" className="mt-0">
                    <motion.div
                      className="grid md:grid-cols-2 gap-8 items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="space-y-6">
                        <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                          For HR Professionals
                        </div>
                        <h3 className="text-2xl font-bold">HR Onboarding and Training Videos</h3>
                        <p className="text-gray-600">Streamline your employee training process with engaging, consistent video content.</p>

                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Convert onboarding documents into videos</h4>
                              <p className="text-sm text-gray-500">Make onboarding more engaging and effective</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Use images and AI voiceover</h4>
                              <p className="text-sm text-gray-500">Create clear explanations of processes</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Streamline employee training</h4>
                              <p className="text-sm text-gray-500">Deliver consistent training through video formats</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Personalize by department</h4>
                              <p className="text-sm text-gray-500">Customize content for specific roles</p>
                            </div>
                          </div>
                        </div>

                        <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg">
                          Create Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-20"></div>
                        <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                          <img
                            src="/placeholder.svg?height=500&width=600"
                            alt="HR training video example"
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 to-red-600/10"></div>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>

                  {/* Video Books tab */}
                  <TabsContent value="books" className="mt-0">
                    <motion.div
                      className="grid md:grid-cols-2 gap-8 items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="space-y-6">
                        <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                          For Authors & Storytellers
                        </div>
                        <h3 className="text-2xl font-bold">Video Books for Authors</h3>
                        <p className="text-gray-600">Transform written stories into immersive video experiences that captivate your audience.</p>

                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Turn written stories into video format</h4>
                              <p className="text-sm text-gray-500">Bring your stories to life visually</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Enhance storytelling with visuals</h4>
                              <p className="text-sm text-gray-500">Add imagery that complements your narrative</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">AI voiceover narration</h4>
                              <p className="text-sm text-gray-500">Create an immersive listening experience</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Publish on multiple platforms</h4>
                              <p className="text-sm text-gray-500">Reach wider audiences on YouTube and beyond</p>
                            </div>
                          </div>
                        </div>

                        <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg">
                          Create Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-20"></div>
                        <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                          <img
                            src="/placeholder.svg?height=500&width=600"
                            alt="Video book example"
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 to-red-600/10"></div>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>

                  {/* Courses tab */}
                  <TabsContent value="courses" className="mt-0">
                    <motion.div
                      className="grid md:grid-cols-2 gap-8 items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="space-y-6">
                        <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                          For Course Creators
                        </div>
                        <h3 className="text-2xl font-bold">Course Generation for Educators</h3>
                        <p className="text-gray-600">Create comprehensive video courses from your materials quickly and efficiently.</p>

                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Convert course material into video lectures</h4>
                              <p className="text-sm text-gray-500">Transform written content into engaging videos</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Add diagrams and images</h4>
                              <p className="text-sm text-gray-500">Improve comprehension with visual aids</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Consistent teaching experience</h4>
                              <p className="text-sm text-gray-500">AI voiceover ensures quality narration</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Generate entire courses quickly</h4>
                              <p className="text-sm text-gray-500">Save time with batch video creation</p>
                            </div>
                          </div>
                        </div>

                        <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg">
                          Create Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-20"></div>
                        <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                          <img
                            src="/placeholder.svg?height=500&width=600"
                            alt="Course video example"
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 to-red-600/10"></div>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>

                  {/* Marketing tab */}
                  <TabsContent value="marketing" className="mt-0">
                    <motion.div
                      className="grid md:grid-cols-2 gap-8 items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="space-y-6">
                        <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                          For Marketers
                        </div>
                        <h3 className="text-2xl font-bold">Marketing and Product Demos</h3>
                        <p className="text-gray-600">Create compelling product videos and marketing content that drives conversions.</p>

                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Convert product descriptions into video ads</h4>
                              <p className="text-sm text-gray-500">Transform text into compelling visual content</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Highlight product features</h4>
                              <p className="text-sm text-gray-500">Showcase benefits with related images</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Professional AI voiceovers</h4>
                              <p className="text-sm text-gray-500">Enhance demos with quality narration</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Increase conversion rates</h4>
                              <p className="text-sm text-gray-500">Boost engagement through video content</p>
                            </div>
                          </div>
                        </div>

                        <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg">
                          Create Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-20"></div>
                        <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                          <img
                            src="/placeholder.svg?height=500&width=600"
                            alt="Marketing video example"
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 to-red-600/10"></div>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </section>

          {/* ROI Calculator */}
          <section className="py-20 bg-white overflow-hidden">
            <div className="container">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Calculate Your Savings
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">See How Much You Can Save</h2>
                <p className="max-w-2xl mx-auto text-gray-600">Our AI video creation tool saves you time and money compared to traditional video production.</p>
              </motion.div>

              <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-xl border border-orange-100 overflow-hidden">
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Traditional Video Production</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Average cost per video:</span>
                          <span className="font-bold text-red-600">₹20,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Time to create:</span>
                          <span className="font-bold text-red-600">8-10 hours</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Equipment needed:</span>
                          <span className="font-bold text-red-600">Extensive</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Technical skills:</span>
                          <span className="font-bold text-red-600">Advanced</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Monthly videos (5):</span>
                          <span className="font-bold text-red-600">₹100,000</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">With Collegites AI</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Cost per video:</span>
                          <span className="font-bold text-green-600">₹120</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Time to create:</span>
                          <span className="font-bold text-green-600">15-30 minutes</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Equipment needed:</span>
                          <span className="font-bold text-green-600">None</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Technical skills:</span>
                          <span className="font-bold text-green-600">None</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Monthly videos (5):</span>
                          <span className="font-bold text-green-600">₹600</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-orange-100">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">Your Monthly Savings:</span>
                      <span className="text-2xl font-bold text-green-600">₹99,400</span>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-lg font-bold">Time Saved Per Month:</span>
                      <span className="text-2xl font-bold text-green-600">~48 hours</span>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg">
                      Start Saving Today
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}