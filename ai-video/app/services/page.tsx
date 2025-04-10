"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronRight,
  Play,
  CheckCircle,
  Zap,
  ArrowRight,
  Video,
  User,
  Mic,
  Image,
  Camera,
  Film,
  MousePointer,
  MessageSquare,
  Award,
  Sparkles,
  PenTool,
  Menu,
  Mail,
  Phone,
  Clock,
  Calendar,
  Star,
  BookOpen,
  Presentation,
  Cpu,
  PieChart,
  Bookmark,
  Briefcase,
  Globe,
  Layers,
} from "lucide-react"

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)
  const [activeExample, setActiveExample] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [backgroundElements, setBackgroundElements] = useState<
    { width: number; height: number; left: string; top: string }[]
  >([])

  const videoRef = useRef<HTMLVideoElement>(null)

  const services = [
    {
      title: "AI Avatar Videos",
      description:
        "Professional avatar-based videos with realistic movements and expressions. Perfect for creating a consistent brand presence.",
      longDescription:
        "Our AI avatars bring a human touch to your educational content. With realistic facial expressions, natural movements, and customizable appearances, these digital presenters create a consistent and engaging learning experience. Choose from a variety of professional avatars or create a custom one that matches your brand identity.",
      icon: User,
      color: "from-blue-500 to-indigo-600",
      features: [
        "Realistic facial expressions and movements",
        "Multiple avatar styles and customization options",
        "Consistent presenter appearance across all videos",
        "Professional attire and backgrounds",
        "Seamless integration with your content",
        "Multiple language support",
      ],
      examples: [
        {
          title: "Professor Avatar",
          image: "/placeholder.svg?height=200&width=350",
          description: "Professional academic presenter for university lectures",
        },
        {
          title: "Corporate Trainer",
          image: "/placeholder.svg?height=200&width=350",
          description: "Business-oriented avatar for corporate training videos",
        },
        {
          title: "Friendly Tutor",
          image: "/placeholder.svg?height=200&width=350",
          description: "Approachable avatar designed for K-12 educational content",
        },
        {
          title: "Technical Instructor",
          image: "/placeholder.svg?height=200&width=350",
          description: "Specialized avatar for technical and scientific explanations",
        },
      ],
    },
    {
      title: "AI Voice Generation",
      description:
        "Natural-sounding voices in multiple languages, accents, and styles. Customize tone, pace, and emphasis to match your needs.",
      longDescription:
        "Our AI voice technology creates natural, human-like narration for your educational videos. With support for multiple languages, accents, and speaking styles, you can find the perfect voice for your content. Adjust tone, pace, emphasis, and emotion to create the ideal narration experience for your audience.",
      icon: Mic,
      color: "from-purple-500 to-pink-600",
      features: [
        "Natural, human-like speech patterns",
        "Over 50 languages and regional accents",
        "Customizable tone, pace, and emphasis",
        "Emotional delivery options",
        "Technical terminology pronunciation",
        "Voice cloning capabilities",
      ],
      examples: [
        {
          title: "Multilingual Narration",
          image: "/placeholder.svg?height=200&width=350",
          description: "Content narrated in multiple languages with native accents",
        },
        {
          title: "Emotional Delivery",
          image: "/placeholder.svg?height=200&width=350",
          description: "Engaging narration with appropriate emotional tone",
        },
        {
          title: "Technical Pronunciation",
          image: "/placeholder.svg?height=200&width=350",
          description: "Accurate pronunciation of complex technical terminology",
        },
        {
          title: "Custom Voice Creation",
          image: "/placeholder.svg?height=200&width=350",
          description: "Branded voice created specifically for your organization",
        },
      ],
    },
    {
      title: "AI Media Generation",
      description:
        "Create custom images, diagrams, charts, and animations that perfectly illustrate your educational concepts.",
      longDescription:
        "Our AI media generation service creates visually stunning images, diagrams, charts, and animations that bring your educational concepts to life. From scientific illustrations to historical recreations, our AI can generate custom visuals that perfectly match your content. Enhance understanding and retention with compelling visual elements.",
      icon: Image,
      color: "from-green-500 to-emerald-600",
      features: [
        "Custom illustrations for complex concepts",
        "Data visualization and interactive charts",
        "Scientific diagrams and models",
        "Historical scene recreations",
        "Animated processes and workflows",
        "Consistent visual style across content",
      ],
      examples: [
        {
          title: "Scientific Diagrams",
          image: "/placeholder.svg?height=200&width=350",
          description: "Detailed illustrations of scientific processes and structures",
        },
        {
          title: "Historical Recreations",
          image: "/placeholder.svg?height=200&width=350",
          description: "Visual representations of historical events and settings",
        },
        {
          title: "Data Visualizations",
          image: "/placeholder.svg?height=200&width=350",
          description: "Interactive charts and graphs that explain complex data",
        },
        {
          title: "Process Animations",
          image: "/placeholder.svg?height=200&width=350",
          description: "Step-by-step animated explanations of processes",
        },
      ],
    },
    {
      title: "Thumbnail Creation",
      description:
        "Eye-catching thumbnails that increase click-through rates and engagement for your educational videos.",
      longDescription:
        "Our thumbnail creation service designs compelling, eye-catching images that drive clicks and engagement. Using AI-powered design principles, we create thumbnails that stand out in search results and social feeds. Each thumbnail is optimized for your target audience and platform, ensuring maximum visibility and interest.",
      icon: Camera,
      color: "from-yellow-500 to-amber-600",
      features: [
        "Eye-catching designs optimized for each platform",
        "Consistent branding across video series",
        "Text overlay with readable typography",
        "A/B testing options for maximum performance",
        "Custom templates for your brand",
        "Automatic generation from video content",
      ],
      examples: [
        {
          title: "Course Thumbnails",
          image: "/placeholder.svg?height=200&width=350",
          description: "Branded thumbnails for complete educational courses",
        },
        {
          title: "Lecture Series",
          image: "/placeholder.svg?height=200&width=350",
          description: "Consistent thumbnail designs across related videos",
        },
        {
          title: "Topic Highlights",
          image: "/placeholder.svg?height=200&width=350",
          description: "Thumbnails that emphasize key concepts with visual cues",
        },
        {
          title: "Platform-Optimized",
          image: "/placeholder.svg?height=200&width=350",
          description: "Designs tailored for specific platforms like YouTube or Udemy",
        },
      ],
    },
    {
      title: "Complete Training Videos",
      description:
        "End-to-end production of comprehensive training videos for educational institutions and corporate training.",
      longDescription:
        "Our complete training video service handles every aspect of video creation from script to final delivery. We transform your content into comprehensive, engaging training videos that achieve your learning objectives. Perfect for educational institutions, corporate training departments, and online course creators who need professional-quality videos without the production hassle.",
      icon: Film,
      color: "from-red-500 to-rose-600",
      features: [
        "End-to-end video production",
        "Scriptwriting and content structuring",
        "Professional editing and post-production",
        "Custom intro and outro sequences",
        "Interactive elements and assessments",
        "Multiple format delivery for any platform",
      ],
      examples: [
        {
          title: "Corporate Onboarding",
          image: "/placeholder.svg?height=200&width=350",
          description: "Comprehensive employee onboarding video series",
        },
        {
          title: "University Course",
          image: "/placeholder.svg?height=200&width=350",
          description: "Complete academic course with multiple modules",
        },
        {
          title: "Technical Training",
          image: "/placeholder.svg?height=200&width=350",
          description: "Detailed software or equipment training videos",
        },
        {
          title: "Compliance Training",
          image: "/placeholder.svg?height=200&width=350",
          description: "Required training videos with assessment integration",
        },
      ],
    },
    {
      title: "Interactive Learning Elements",
      description:
        "Enhance videos with quizzes, polls, and interactive elements that boost engagement and measure comprehension.",
      longDescription:
        "Our interactive learning elements transform passive viewing into active learning experiences. We integrate quizzes, polls, clickable hotspots, branching scenarios, and other interactive features directly into your videos. These elements increase engagement, improve knowledge retention, and provide valuable assessment data on learner progress.",
      icon: MousePointer,
      color: "from-orange-500 to-red-600",
      features: [
        "In-video quizzes and knowledge checks",
        "Interactive decision points and branching scenarios",
        "Clickable hotspots for additional information",
        "Polls and feedback collection",
        "Progress tracking and assessment",
        "Gamification elements for increased engagement",
      ],
      examples: [
        {
          title: "Quiz Integration",
          image: "/placeholder.svg?height=200&width=350",
          description: "Knowledge check questions integrated throughout videos",
        },
        {
          title: "Interactive Scenarios",
          image: "/placeholder.svg?height=200&width=350",
          description: "Branching decision points that personalize learning paths",
        },
        {
          title: "Clickable Elements",
          image: "/placeholder.svg?height=200&width=350",
          description: "Hotspots that reveal additional information when clicked",
        },
        {
          title: "Assessment Tools",
          image: "/placeholder.svg?height=200&width=350",
          description: "Comprehensive evaluation tools built into video content",
        },
      ],
    },
  ]

  const subjects = [
    { name: "Mathematics", icon: PieChart, color: "bg-blue-100 text-blue-600" },
    { name: "Science", icon: Cpu, color: "bg-green-100 text-green-600" },
    { name: "History", icon: Bookmark, color: "bg-amber-100 text-amber-600" },
    { name: "Literature", icon: BookOpen, color: "bg-purple-100 text-purple-600" },
    { name: "Computer Science", icon: Layers, color: "bg-indigo-100 text-indigo-600" },
    { name: "Business", icon: Briefcase, color: "bg-slate-100 text-slate-600" },
    { name: "Languages", icon: Globe, color: "bg-pink-100 text-pink-600" },
    { name: "Arts", icon: Presentation, color: "bg-rose-100 text-rose-600" },
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "University Professor",
      institution: "Stanford University",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The AI avatar service has transformed how I deliver my online lectures. The professional appearance and consistent delivery have significantly improved student engagement. The technical support team was incredibly helpful in creating a custom avatar that matches my teaching style.",
      rating: 5,
      service: "AI Avatar Videos",
    },
    {
      name: "Mark Williams",
      role: "Corporate Trainer",
      institution: "Global Learning Solutions",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "We've been using the complete training video service for our corporate clients, and the results have been outstanding. The production quality is professional, and the turnaround time is impressive. Our clients love the interactive elements that keep their employees engaged throughout the training.",
      rating: 5,
      service: "Complete Training Videos",
    },
    {
      name: "Lisa Chen",
      role: "Online Course Creator",
      institution: "SkillShare Master",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The thumbnail creation service has dramatically improved my course click-through rates. Before using Collegites AI, my thumbnails were inconsistent and didn't attract attention. Now, each thumbnail is eye-catching and perfectly represents the content. My enrollment rates have increased by 78%!",
      rating: 5,
      service: "Thumbnail Creation",
    },
    {
      name: "Prof. James Rodriguez",
      role: "Department Chair",
      institution: "MIT Education",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The AI media generation service has been a game-changer for our science department. The ability to create custom diagrams and animations that perfectly illustrate complex concepts has significantly improved student comprehension. The quality and accuracy of the visuals are impressive.",
      rating: 5,
      service: "AI Media Generation",
    },
  ]

  const clients = [
    { name: "University of Excellence", logo: "/placeholder.svg?height=60&width=180", type: "Education" },
    { name: "Global Learning Corp", logo: "/placeholder.svg?height=60&width=180", type: "Corporate" },
    { name: "Tech Training Institute", logo: "/placeholder.svg?height=60&width=180", type: "Education" },
    { name: "Knowledge Builders Inc", logo: "/placeholder.svg?height=60&width=180", type: "Corporate" },
    { name: "Future Skills Academy", logo: "/placeholder.svg?height=60&width=180", type: "Education" },
    { name: "Innovative Learning Solutions", logo: "/placeholder.svg?height=60&width=180", type: "Corporate" },
  ]

  const caseStudies = [
    {
      title: "University Course Transformation",
      client: "Stanford University",
      challenge:
        "Convert traditional lecture materials into engaging online videos for remote learning during the pandemic.",
      solution:
        "Implemented AI avatar videos with custom voice generation and interactive elements to create a comprehensive online learning experience.",
      results: "42% increase in student engagement, 35% improvement in test scores, and 98% student satisfaction rate.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Corporate Training Overhaul",
      client: "Global Tech Corporation",
      challenge:
        "Update outdated training materials for global employees while maintaining consistency across multiple languages.",
      solution:
        "Created complete training videos with multilingual AI voice generation and interactive assessments tailored to different regional offices.",
      results:
        "Reduced training time by 60%, increased knowledge retention by 45%, and saved $250,000 in localization costs.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "K-12 Science Curriculum",
      client: "National School District",
      challenge:
        "Develop engaging science videos that explain complex concepts for middle school students with varying learning styles.",
      solution:
        "Utilized AI media generation to create detailed scientific diagrams and animations with friendly avatar presenters and interactive quizzes.",
      results:
        "Science test scores improved by 28%, teacher preparation time reduced by 75%, and student interest in STEM subjects increased by 40%.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 8000)

    return () => clearInterval(serviceInterval)
  }, [services.length])

  useEffect(() => {
    const exampleInterval = setInterval(() => {
      setActiveExample((prev) => (prev + 1) % (services[activeService]?.examples.length || 1))
    }, 5000)

    return () => clearInterval(exampleInterval)
  }, [activeService])

  // Generate background elements on the client side
  useEffect(() => {
    const elements = [...Array(20)].map(() => ({
      width: Math.random() * 100 + 50,
      height: Math.random() * 100 + 50,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
    setBackgroundElements(elements)
  }, [])

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-orange-100">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Video className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Collegites AI
              </span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">
                Home
              </Link>
              <Link
                href="/#features"
                className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-orange-600 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-500"
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button
                variant="outline"
                size="sm"
                className="border-orange-200 text-orange-700 hover:bg-orange-100 hover:text-orange-800"
              >
                Dashboard
              </Button>
            </Link>
            <Button
              size="sm"
              className="hidden md:flex bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
            >
              <span className="mr-2">Try Free</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <button
              className="md:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-orange-100 py-4">
            <div className="container flex flex-col space-y-3">
              <Link
                href="/"
                className="text-sm font-medium p-2 rounded-md text-gray-600 hover:bg-orange-50 hover:text-orange-600"
              >
                Home
              </Link>
              <Link
                href="/#features"
                className="text-sm font-medium p-2 rounded-md text-gray-600 hover:bg-orange-50 hover:text-orange-600"
              >
                Features
              </Link>
              <Link href="/services" className="text-sm font-medium p-2 rounded-md bg-orange-50 text-orange-600">
                Services
              </Link>
              <Link
                href="/#about"
                className="text-sm font-medium p-2 rounded-md text-gray-600 hover:bg-orange-50 hover:text-orange-600"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-medium p-2 rounded-md text-gray-600 hover:bg-orange-50 hover:text-orange-600"
              >
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white mt-2">
                <span className="mr-2">Try Free</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-white z-0"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {backgroundElements.map((style, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-orange-500/10"
                style={style}
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

          <div className="container relative z-10">
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
                    Professional Video Services
                  </motion.div>
                  <motion.h1
                    className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    AI-Powered Educational Video Services
                  </motion.h1>
                  <motion.p
                    className="max-w-[600px] text-gray-600 md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Beyond our self-service platform, we offer professional video creation services tailored to your
                    specific educational needs. From AI avatars to interactive elements, we bring your content to life.
                  </motion.p>
                </div>
                <motion.div
                  className="flex flex-col gap-3 sm:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg shadow-orange-500/20 transition-all hover:shadow-xl hover:shadow-orange-500/30"
                  >
                    Request Custom Service
                    <Zap className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 border-orange-200 text-orange-700 hover:bg-orange-100 hover:text-orange-800"
                  >
                    Watch Demo
                    <Play className="h-4 w-4" />
                  </Button>
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
                      className={`rounded-full w-16 h-16 bg-white/80 text-orange-600 hover:bg-white hover:text-orange-700 backdrop-blur-sm ${isVideoPlaying ? "opacity-0" : "opacity-100"}`}
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
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
                Our Services
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                Comprehensive Video Creation Services
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                We offer a full range of AI-powered video services to meet your educational content needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-xl transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setActiveService(index)}
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`rounded-lg p-3 bg-gradient-to-br ${service.color} text-white`}>
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button
                      variant="outline"
                      className="w-full border-orange-200 text-orange-700 hover:bg-orange-100 hover:text-orange-800"
                      onClick={() => setActiveService(index)}
                    >
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="container">
            <Tabs defaultValue={`service-${activeService}`} value={`service-${activeService}`} className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8 bg-orange-100/50 p-1 rounded-lg">
                {services.map((service, index) => (
                  <TabsTrigger
                    key={index}
                    value={`service-${index}`}
                    className="data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm"
                    onClick={() => setActiveService(index)}
                  >
                    <service.icon className="h-4 w-4 mr-2 md:mr-0 md:hidden lg:block lg:mr-2" />
                    <span className="hidden md:inline">{service.title.split(" ")[0]}</span>
                    <span className="hidden lg:inline"> {service.title.split(" ").slice(1).join(" ")}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {services.map((service, index) => (
                <TabsContent key={index} value={`service-${index}`} className="mt-0">
                  <div className="bg-white rounded-xl shadow-lg border border-orange-100 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                    <div className="p-6 md:p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`rounded-lg p-3 bg-gradient-to-br ${service.color} text-white`}>
                              <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold">{service.title}</h3>
                          </div>

                          <p className="text-gray-600 mb-6">{service.longDescription}</p>

                          <h4 className="text-lg font-bold mb-4">Key Features</h4>
                          <ul className="space-y-3 mb-6">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg">
                            Request This Service
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold mb-4">Examples</h4>
                          <div className="relative rounded-lg overflow-hidden border border-orange-100 mb-4">
                            <img
                              src={service.examples[activeExample].image || "/placeholder.svg"}
                              alt={service.examples[activeExample].title}
                              className="w-full aspect-video object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                              <div className="p-4 text-white">
                                <h5 className="font-bold">{service.examples[activeExample].title}</h5>
                                <p className="text-sm text-white/80">{service.examples[activeExample].description}</p>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-4 gap-2">
                            {service.examples.map((example, i) => (
                              <div
                                key={i}
                                className={`relative rounded-md overflow-hidden cursor-pointer border-2 ${activeExample === i ? "border-orange-500" : "border-transparent"}`}
                                onClick={() => setActiveExample(i)}
                              >
                                <img
                                  src={example.image || "/placeholder.svg"}
                                  alt={example.title}
                                  className="w-full aspect-video object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Subject Areas */}
        <section className="py-20 bg-white">
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
                Specialized Expertise
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                Services for Every Subject Area
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Our team has expertise across all educational disciplines, ensuring accurate and engaging content.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
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
                    {(() => {
                      const Icon = subject.icon
                      return <Icon className="h-6 w-6" />
                    })()}
                  </div>
                  <h3 className="font-bold text-gray-800">{subject.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
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
                Success Stories
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                Case Studies
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                See how our services have transformed educational content for organizations worldwide.
              </p>
            </motion.div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-orange-100 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="order-2 md:order-1 p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                      <p className="text-orange-600 font-medium mb-4">{study.client}</p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-bold text-gray-800">Challenge</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Solution</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Results</h4>
                          <p className="text-gray-600">{study.results}</p>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="self-start border-orange-200 text-orange-700 hover:bg-orange-100 hover:text-orange-800"
                      >
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="order-1 md:order-2 relative">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:bg-gradient-to-l"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
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
                Client Feedback
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                What Our Clients Say
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Hear from educators and organizations who have transformed their content with our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg border border-orange-100 p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.institution}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-1 text-amber-500 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <div className="text-gray-700 italic">"{testimonial.content}"</div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-orange-600">
                    <span className="font-medium">Service:</span>
                    <span>{testimonial.service}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-xl font-bold mb-8 text-center">Trusted by Leading Organizations</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-orange-100 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      className="h-12 object-contain mb-2"
                    />
                    <div className="text-sm font-medium text-gray-800">{client.name}</div>
                    <div className="text-xs text-gray-500">{client.type}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
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
                How We Work
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                Our Service Process
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                We follow a structured approach to deliver high-quality video content that meets your specific needs.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-red-400 transform -translate-y-1/2 hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {[
                  {
                    title: "Consultation",
                    description:
                      "We begin with a detailed consultation to understand your goals, target audience, content requirements, and timeline.",
                    icon: MessageSquare,
                    color: "from-blue-500 to-indigo-600",
                  },
                  {
                    title: "Content Planning",
                    description:
                      "Our team develops a comprehensive content plan, including scripts, storyboards, and visual elements tailored to your needs.",
                    icon: PenTool,
                    color: "from-green-500 to-emerald-600",
                  },
                  {
                    title: "Production",
                    description:
                      "We create your video content using our AI-powered tools, with regular check-ins to ensure alignment with your vision.",
                    icon: Film,
                    color: "from-orange-500 to-red-600",
                  },
                  {
                    title: "Delivery & Support",
                    description:
                      "We deliver the final content in your preferred format and provide ongoing support for any adjustments or future needs.",
                    icon: Award,
                    color: "from-purple-500 to-pink-600",
                  },
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
                      <div className="relative h-12 bg-gradient-to-r from-orange-100 to-orange-200">
                        <div className="absolute bottom-4 right-4">
                          <div className={`bg-gradient-to-br ${step.color} rounded-full p-2 shadow-lg text-white`}>
                            <step.icon className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
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
                Get Started
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                Request a Custom Service
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Tell us about your project, and our team will create a tailored solution for your educational content
                needs.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-white rounded-xl shadow-lg p-8 border border-orange-100"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6">Service Request Form</h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                        <option>Select a service</option>
                        {services.map((service, index) => (
                          <option key={index}>{service.title}</option>
                        ))}
                        <option>Multiple Services</option>
                        <option>Not Sure (Need Consultation)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      ></textarea>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                      Submit Request
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-8 border border-orange-100"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 rounded-full p-3 text-orange-600">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Email</h4>
                        <p className="text-gray-600">services@collegites.ai</p>
                        <p className="text-gray-600">support@collegites.ai</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 rounded-full p-3 text-orange-600">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Phone</h4>
                        <p className="text-gray-600">+91 9876543210</p>
                        <p className="text-gray-600">+91 9876543211</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 rounded-full p-3 text-orange-600">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Service Hours</h4>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 rounded-full p-3 text-orange-600">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Typical Timeline</h4>
                        <p className="text-gray-600">Initial Response: Within 24 hours</p>
                        <p className="text-gray-600">Project Completion: 1-3 weeks (depending on scope)</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-orange-50 rounded-lg p-4 border border-orange-100">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-orange-500 mt-0.5" />
                      <div>
                        <h4 className="font-bold">Custom Solutions</h4>
                        <p className="text-sm text-gray-600">
                          Need something unique? Our team specializes in creating custom solutions for complex
                          educational content needs. Schedule a consultation to discuss your specific requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
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
                Common Questions
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Find answers to common questions about our professional video services.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {[
                  {
                    question: "What is the typical turnaround time for a custom video project?",
                    answer:
                      "Turnaround time varies based on project complexity and scope. Simple projects can be completed in 3-5 business days, while more complex projects may take 2-3 weeks. We'll provide a specific timeline during our initial consultation.",
                  },
                  {
                    question: "Do you offer revisions for custom video projects?",
                    answer:
                      "Yes, all our service packages include at least two rounds of revisions to ensure the final product meets your expectations. Additional revision rounds can be arranged if needed.",
                  },
                  {
                    question: "Can I combine multiple services for my project?",
                    answer:
                      "Many of our clients combine services like AI avatars, voice generation, and interactive elements to create comprehensive educational experiences. We offer package discounts for multiple services.",
                  },
                  {
                    question: "Do you work with specific learning management systems (LMS)?",
                    answer:
                      "Yes, our videos are compatible with all major LMS platforms including Canvas, Blackboard, Moodle, and others. We can provide the content in formats optimized for your specific platform.",
                  },
                  {
                    question: "Who owns the rights to the videos you create?",
                    answer:
                      "You retain full ownership rights to all content we create for you. We may request permission to showcase the work in our portfolio, but this is always with your explicit approval.",
                  },
                  {
                    question: "Can you handle large-scale projects for educational institutions?",
                    answer:
                      "Yes, we specialize in large-scale projects for universities, school districts, and corporate training departments. We have dedicated project managers for enterprise clients to ensure smooth execution.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-md border border-orange-100 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Don't see your question here?</p>
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                  Contact Our Support Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Educational Content?
              </motion.h2>
              <motion.p
                className="text-xl text-white/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Let our team of experts create professional, engaging videos that elevate your educational content to
                the next level.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                  Request a Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Schedule a Consultation
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-orange-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Video className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Collegites AI
                </span>
              </Link>
              <p className="text-gray-600 text-sm mb-4 max-w-md">
                Transforming education through AI-powered video creation. Our professional services team creates custom
                educational content that engages, informs, and inspires.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-orange-100 p-2 rounded-full text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-orange-100 p-2 rounded-full text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-orange-100 p-2 rounded-full text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-orange-100 p-2 rounded-full text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-orange-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-gray-600 hover:text-orange-600 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-orange-600 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-gray-600 hover:text-orange-600 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Collegites AI. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-orange-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-orange-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-orange-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

