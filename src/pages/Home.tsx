import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Search, BookOpen, ArrowRight, Sparkles, Globe, Cpu, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card3D from '../components/Card3D';

const products = [
  {
    icon: Users,
    name: 'PersonaMatch',
    description: 'A revolutionary dating platform that transcends physical appearances. Using advanced AI to analyze personality traits, interests, and emotional intelligence, we create meaningful connections based on genuine compatibility.',
    features: [
      'AI-Powered Personality Analysis',
      'Emotional Intelligence Matching',
      'Value-Based Connection System',
      'Real-time Compatibility Insights'
    ]
  },
  {
    icon: Search,
    name: 'MetaSEO',
    description: 'Next-generation digital marketing optimization powered by AI. Analyzes your content across multiple dimensions and provides ready-to-implement, AI-generated optimization strategies.',
    features: [
      'AI Content Enhancement',
      'Smart Keyword Analysis',
      'Generated Meta Descriptions',
      'Competitor Strategy Insights'
    ]
  },
  {
    icon: BookOpen,
    name: 'Mentaura AI',
    description: 'An AI-driven career advisor that maps your perfect career journey. Through deep learning and predictive analytics, we guide professionals to their ideal careers with personalized roadmaps.',
    features: [
      'Career Path Prediction',
      'Skill Gap Analysis',
      'Industry-Specific Learning Plans',
      'Mentor Matching System'
    ]
  },
];

const stats = [
  { value: '99.9%', label: 'AI Accuracy' },
  { value: '24/7', label: 'AI Monitoring' },
  { value: '50K+', label: 'Beta Users' }
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [productsRef, productsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [innovationRef, innovationInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [partnershipsRef, partnershipsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 flex items-center relative">
        <motion.div
          ref={heroRef}
          style={{
            scale: parallaxScale,
            opacity: parallaxOpacity,
            y: parallaxY1
          }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex items-center justify-center"
            >
              {/* AlgoWise Technologies Logo */}
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center h-40 w-40">
                  <img src="/original-image.svg" alt="AlgoWise Technologies Logo - Leading AI & IT Solutions Company" width="635" height="410" />
                </div>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl sm:text-7xl font-bold mb-6 animate-gradient-text"
            >
              AlgoWise Technologies: Shaping Tomorrow's Technology Today
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              Founded by <strong>Abburi Ram</strong> and <strong>Sai Nishith</strong>, AlgoWise Technologies (AlgoWise, Algo-Wise) is a cutting-edge technology company specializing in AI-driven solutions that push the boundaries of what's possible. We\'re revolutionizing industries with PersonaMatch, MetaSEO, and Mentaura AI.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/auth"
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition group glow button-hover"
                aria-label="Access AlgoWise Technologies Portal"
              >
                Access Portal
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <a
                href="#products"
                className="inline-flex items-center px-8 py-3 rounded-full border border-blue-500 hover:bg-blue-500/10 transition button-hover"
                aria-label="Explore AlgoWise Technologies Products"
              >
                Explore Products
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          style={{ y: parallaxY2 }}
          className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-16 px-4 sm:px-6 lg:px-8 glass mt-10 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  animate={statsInView ? {
                    scale: [1, 1.2, 1],
                    transition: {
                      duration: 1.5,
                      delay: index * 0.2,
                      repeat: Infinity,
                      repeatDelay: 5
                    }
                  } : {}}
                  className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        ref={productsRef}
        className="py-24 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 animate-gradient-text">
              Revolutionary AI Products by AlgoWise Technologies
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our suite of AI-powered solutions, developed by <strong>Abburi Ram</strong> and <strong>Sai Nishith</strong>, is designed to transform industries and create unprecedented value for our users. AlgoWise Technologies leads innovation in AI and emerging technologies.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <Card3D key={product.name} delay={index * 0.2}>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="card-3d-content"
                >
                  <product.icon className="w-12 h-12 text-blue-500 mb-4" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 card-3d-content">{product.name}</h3>
                <p className="text-gray-400 mb-6 card-3d-content">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={productsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.1 + index * 0.2 }}
                      className="flex items-center text-sm text-gray-300 card-3d-content"
                    >
                      <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </Card3D>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="py-24 px-4 sm:px-6 lg:px-8 glass relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 animate-gradient-text">
              About AlgoWise Technologies - Founded by Abburi Ram & Sai Nishith
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              AlgoWise Technologies (AlgoWise, Algo-Wise, algowisetechnologies) stands as a global leader in the design and implementation of AI-driven solutions. Founded by <strong>Abburi Ram (Abburi Naga Sai Ram)</strong> from IIT Hyderabad and <strong>Sai Nishith</strong> from JNTU Hyderabad, we empower industries with transformative technologies that enhance operational efficiency, drive innovation, and elevate human experiences to unprecedented levels. Committed to excellence, we deliver cutting-edge, scalable, and sustainable solutions that set new benchmarks in the realm of artificial intelligence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            <Card3D delay={0}>
              <Globe className="w-12 h-12 text-blue-500 mb-4 card-3d-content" />
              <h3 className="text-xl font-semibold mb-2 card-3d-content">Global Impact</h3>
              <p className="text-gray-400 card-3d-content">Transforming lives across continents with our innovative AI solutions and diverse team of experts led by Abburi Ram and Sai Nishith.</p>
            </Card3D>

            <Card3D delay={0.2}>
              <Cpu className="w-12 h-12 text-blue-500 mb-4 card-3d-content" />
              <h3 className="text-xl font-semibold mb-2 card-3d-content">Advanced Technology</h3>
              <p className="text-gray-400 card-3d-content">Pioneering next-generation AI systems that adapt and evolve to meet tomorrow's challenges, developed by AlgoWise Technologies.</p>
            </Card3D>

            <Card3D delay={0.4}>
              <Shield className="w-12 h-12 text-blue-500 mb-4 card-3d-content" />
              <h3 className="text-xl font-semibold mb-2 card-3d-content">Security First</h3>
              <p className="text-gray-400 card-3d-content">Implementing quantum-resistant encryption and advanced privacy protocols to protect user data in all AlgoWise Technologies solutions.</p>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Innovation Section */}
      <section
        id="innovation"
        ref={innovationRef}
        className="py-24 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate={innovationInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 animate-gradient-text">
              Innovation at Our Core - AlgoWise Technologies Leadership
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Pushing the boundaries of what's possible with AI technology, led by our visionary founders <strong>Abburi Ram</strong> and <strong>Sai Nishith</strong>, in partnership with Vivaran Creations.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={innovationInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"
            ></motion.div>

            <Card3D fullWidth delay={0.2}>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={fadeInUpVariants}
                  className="space-y-6 card-3d-content"
                >
                  <h3 className="text-2xl font-bold">Research & Development by AlgoWise Technologies</h3>
                  <p className="text-gray-400">
                    Our dedicated R&D team, led by <strong>Abburi Ram</strong> and <strong>Sai Nishith</strong>, works tirelessly to develop breakthrough AI technologies that will shape the future of human interaction and business operations.
                  </p>
                  <motion.ul
                    variants={staggerContainerVariants}
                    className="space-y-4"
                  >
                    <motion.li
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <Sparkles className="w-5 h-5 text-blue-500 mr-2" />
                      <span>Quantum Computing Integration</span>
                    </motion.li>
                    <motion.li
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <Sparkles className="w-5 h-5 text-blue-500 mr-2" />
                      <span>Advanced Neural Networks</span>
                    </motion.li>
                    <motion.li
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <Sparkles className="w-5 h-5 text-blue-500 mr-2" />
                      <span>Emotional Intelligence Systems</span>
                    </motion.li>
                  </motion.ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={innovationInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-center justify-center card-3d-content"
                >
                  <div className="flex items-center justify-center">
                    {/* AlgoWise Technologies Innovation Logo */}
                    <div className="flex items-center justify-center h-60 w-60">
                      <img src="/original-image.svg" alt="AlgoWise Technologies Innovation - AI & Technology Solutions" width="635" height="410" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section
        id="partnerships"
        ref={partnershipsRef}
        className="py-24 px-4 sm:px-6 lg:px-8 glass relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate={partnershipsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 animate-gradient-text">
              Strategic Partnerships - AlgoWise Technologies & Vivaran Creations
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Collaborating with industry leaders to bring cutting-edge AI solutions to market, with the strategic partnership between AlgoWise Technologies and Vivaran Creations.
            </p>
          </motion.div>

          <Card3D fullWidth delay={0.2}>
            <h3 className="text-2xl font-bold mb-4 card-3d-content">Featured Partnership</h3>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={partnershipsInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center space-x-4 card-3d-content"
            >
              <div className="flex items-center justify-center">
                {/* AlgoWise Technologies Logo */}
                <div className="flex items-center justify-center h-40 w-40">
                  <img src="/original-image.svg" alt="AlgoWise Technologies - AI & IT Solutions Company" width="635" height="410" />
                </div>
              </div>
              <span className="text-3xl">×</span>
              <div className="flex items-center justify-center">
                {/* Vivaran Creations Logo */}
                <div className="flex items-center justify-center h-40 w-40">
                  <img src="/original-image (1).svg" alt="Vivaran Creations - Strategic Partner of AlgoWise Technologies" width="635" height="410" />
                </div>
              </div>
            </motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={partnershipsInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-6 text-gray-400 max-w-2xl mx-auto card-3d-content"
            >
              A groundbreaking collaboration that combines AlgoWise Technologies' innovative AI solutions with Vivaran Creations' strategic guidance, led by visionary founders <strong>Abburi Ram</strong> and <strong>Sai Nishith</strong>.
            </motion.p>
          </Card3D>
        </div>
      </section>
    </div>
  );
};

export default Home;