import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  Camera, 
  Calendar, 
  TrendingUp,
  Leaf,
  Brain,
  Clock,
  Users,
  Heart,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Play,
  CheckCircle,
  Award,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    patients: 0,
    accuracy: 0,
    centers: 0,
    satisfaction: 0
  });

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Animate counters
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      const targets = {
        patients: 2500,
        accuracy: 99,
        centers: 150,
        satisfaction: 98
      };

      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          patients: Math.floor(targets.patients * progress),
          accuracy: Math.floor(targets.accuracy * progress),
          centers: Math.floor(targets.centers * progress),
          satisfaction: Math.floor(targets.satisfaction * progress)
        });

        if (step >= steps) {
          clearInterval(interval);
          setCounters(targets);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "1. Arogya → AI Pathway Builder",
      description: "AI interprets handwritten notes and auto-builds a personalized, rule-compliant therapy plan.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "2. Samay → Smart Scheduling", 
      description: "Optimizes sessions based on therapist availability, room occupancy, and Ayurveda's body clock.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "3. Setu → Multi-Role Ecosystem",
      description: "Seamless, connected dashboards for doctors, therapists, and patients.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "4. Pragati → Tracking & Feedback",
      description: "Visualize patient progress with real-time logs, feedback, and optional smartwatch integration.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "5. Suchna → Guided Engagement",
      description: "Automated pre/post-therapy guidance and a multilingual doubt-resolution assistant.",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const steps = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Digitize & Understand",
      description: "Scan handwritten prescriptions and let AI interpret treatment plans",
      delay: "0ms"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Schedule & Optimize", 
      description: "Auto-schedule therapy sessions based on Ayurvedic principles and availability",
      delay: "200ms"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Track & Heal",
      description: "Monitor patient progress and adjust treatments in real-time",
      delay: "400ms"
    }
  ];

  const testimonials = [
    {
      quote: "AyurSutra has revolutionized our Panchakarma center. The AI prescription interpretation is incredibly accurate.",
      author: "Dr. Rajesh Sharma",
      clinic: "Vedic Wellness Center, Mumbai",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    },
    {
      quote: "The smart scheduling feature has improved our efficiency by 60%. Patients love the seamless experience.",
      author: "Dr. Priya Nair", 
      clinic: "Ayur Healing Institute, Kerala",
      image: "https://images.pexels.com/photos/5327654/pexels-photo-5327654.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    },
    {
      quote: "As a patient, I appreciate the clear guidance and progress tracking. It makes me feel more involved in my healing.",
      author: "Amit Patel",
      clinic: "Patient at Holistic Ayurveda, Pune",
      image: "https://images.pexels.com/photos/6749753/pexels-photo-6749753.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    }
  ];

  const stats = [
    { label: "Happy Patients", value: counters.patients, suffix: "+", icon: <Users className="w-6 h-6" /> },
    { label: "AI Accuracy", value: counters.accuracy, suffix: "%", icon: <Brain className="w-6 h-6" /> },
    { label: "Partner Centers", value: counters.centers, suffix: "+", icon: <Globe className="w-6 h-6" /> },
    { label: "Satisfaction Rate", value: counters.satisfaction, suffix: "%", icon: <Award className="w-6 h-6" /> }
  ];

  const benefits = [
    { icon: <Zap className="w-6 h-6" />, text: "60% faster patient processing" },
    { icon: <Shield className="w-6 h-6" />, text: "99.2% prescription accuracy" },
    { icon: <Clock className="w-6 h-6" />, text: "50% reduction in scheduling conflicts" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "40% improvement in patient outcomes" }
  ];

  return (
    <div className="min-h-screen bg-mint-50 overflow-hidden">
      {/* Hero Section with Enhanced Animations */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sage-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-beige-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Animated Main Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative animate-float">
                <div className="p-6 bg-gradient-to-br from-sage-100 to-beige-100 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110">
                  <Leaf className="w-16 h-16 text-sage-600 animate-pulse" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center animate-bounce">
                  <Brain className="w-3 h-3 text-white" />
                </div>
                {/* Floating particles */}
                <div className="absolute -top-4 -left-4 w-2 h-2 bg-sage-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-teal-400 rounded-full animate-ping animation-delay-1000"></div>
              </div>
            </div>

            {/* Animated Headlines */}
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-charcoal animate-slide-up">
                AyurSutra
              </h1>
              <h2 className="text-2xl lg:text-3xl font-serif text-sage-600 animate-slide-up animation-delay-200">
                Intelligent Panchakarma, Simplified.
              </h2>
            </div>

            {/* Animated Description */}
            <p className="text-lg lg:text-xl text-charcoal max-w-3xl mx-auto leading-relaxed mb-8 animate-slide-up animation-delay-400">
              Our AI-powered platform digitizes handwritten prescriptions, automates complex scheduling, 
              and provides a seamless experience for doctors, therapists, and patients.
            </p>

            {/* Animated Benefits */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-slide-up animation-delay-600">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-sage-700 bg-white/50 backdrop-blur-sm rounded-lg px-3 py-2 hover:bg-white/70 transition-all duration-300">
                  <div className="text-sage-600">{benefit.icon}</div>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 animate-slide-up animation-delay-800">
              <Link
                to="/demo"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-sage-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sage-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Request a Free Demo</span>
                <ArrowRight className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              
              <button className="group flex items-center space-x-2 text-sage-600 hover:text-sage-700 transition-colors duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="font-medium">Watch Demo</span>
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up animation-delay-1000">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center mb-2 text-sage-600 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-charcoal">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Core Features Section */}
      <section id="features" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50/50 to-beige-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              Your Complete Panchakarma Operating System
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sage-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group animate-on-scroll hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-full p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 border border-sage-100 relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} text-white rounded-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4 group-hover:text-sage-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-sage-600 to-teal-600 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section id="how-it-works" className="py-20 bg-mint-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sage-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="text-center group animate-on-scroll"
                style={{ animationDelay: step.delay }}
              >
                <div className="relative mb-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mx-auto group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 relative z-10">
                    <div className="text-sage-600 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-teal-600 to-sage-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Connecting line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-sage-300 to-teal-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4 group-hover:text-sage-700 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced For Doctors & Patients Sections */}
      <section id="for-doctors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-6">
                Empowering Ayurvedic Practitioners
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Star className="w-6 h-6" />, title: "AI-Powered Prescription Analysis", desc: "Convert handwritten notes into structured treatment plans instantly" },
                  { icon: <Star className="w-6 h-6" />, title: "Intelligent Scheduling", desc: "Optimize therapy sessions based on Ayurvedic timing principles" },
                  { icon: <Star className="w-6 h-6" />, title: "Progress Monitoring", desc: "Track patient outcomes with comprehensive analytics" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="text-sage-600 mt-1 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-charcoal group-hover:text-sage-700 transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link 
                to="/register" 
                className="group inline-flex items-center px-6 py-3 bg-sage-600 text-white font-semibold rounded-lg hover:bg-sage-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Join as Doctor
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative animate-on-scroll">
              <div className="bg-gradient-to-br from-sage-100 to-beige-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Ayurvedic Doctor" 
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-sage-600 rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="for-patients" className="py-20 bg-mint-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <div className="bg-gradient-to-br from-beige-100 to-sage-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative">
                <img 
                  src="https://images.pexels.com/photos/6749753/pexels-photo-6749753.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Patient receiving treatment" 
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                />
                {/* Floating elements */}
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-6">
                A Healing Journey Made Simple
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Heart className="w-6 h-6" />, title: "Personalized Care Plans", desc: "Receive treatments tailored to your unique constitution" },
                  { icon: <Heart className="w-6 h-6" />, title: "Real-time Progress Tracking", desc: "Monitor your healing journey with detailed insights" },
                  { icon: <Heart className="w-6 h-6" />, title: "24/7 Guidance", desc: "Get multilingual support and therapy instructions anytime" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="text-sage-600 mt-1 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-charcoal group-hover:text-sage-700 transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link 
                to="/register" 
                className="group inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              Trusted by Healing Communities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sage-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-sage-50 to-beige-50 rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-sage-100/20 to-teal-100/20"></div>
              
              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                
                <blockquote className="text-xl lg:text-2xl text-charcoal italic mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-charcoal text-lg">{testimonials[currentTestimonial].author}</h4>
                    <p className="text-sage-600">{testimonials[currentTestimonial].clinic}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-sage-600 hover:bg-sage-50 hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-sage-600 hover:bg-sage-50 hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-sage-600 scale-125' 
                      : 'bg-sage-300 hover:bg-sage-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sage-600 via-teal-600 to-sage-700 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-600/90 to-teal-600/90"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Ready to bring intelligent healing to your center?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join the future of Ayurvedic practice with AI-powered Panchakarma management. 
              Transform your center today and provide exceptional care to your patients.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/demo"
                className="group relative inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sage-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Schedule Your Personalized Demo Today</span>
                <ArrowRight className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
              
              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-5 h-5" />
                  <span>No commitment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;