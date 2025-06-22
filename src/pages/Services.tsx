import { motion } from 'framer-motion';
import { Code, Sparkles, Brain, Cloud, Shield, Database, Cpu, Globe } from 'lucide-react';

const services = [
  {
    icon: <Brain className="w-8 h-8 text-blue-400" />,
    name: "AI Solutions Development",
    description: "Custom artificial intelligence solutions tailored to your business needs. We specialize in machine learning models, natural language processing, and computer vision applications.",
    features: [
      "Custom ML Model Development",
      "AI Integration Services",
      "Predictive Analytics",
      "Computer Vision Solutions",
      "NLP Applications"
    ]
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-400" />,
    name: "Cloud Architecture & DevOps",
    description: "Enterprise-grade cloud solutions and DevOps practices to optimize your infrastructure and deployment processes.",
    features: [
      "Cloud Migration Strategy",
      "Infrastructure as Code",
      "CI/CD Implementation",
      "Microservices Architecture",
      "Container Orchestration"
    ]
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    name: "Cybersecurity Services",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Security Architecture Design",
      "Compliance Implementation",
      "Incident Response Planning"
    ]
  },
  {
    icon: <Database className="w-8 h-8 text-blue-400" />,
    name: "Big Data Analytics",
    description: "Transform your raw data into actionable insights with our advanced analytics and data engineering services.",
    features: [
      "Data Pipeline Development",
      "Real-time Analytics",
      "Data Warehouse Solutions",
      "Business Intelligence",
      "ETL Process Implementation"
    ]
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    name: "IoT Solutions",
    description: "End-to-end IoT solutions from sensor integration to data analytics and visualization.",
    features: [
      "IoT Architecture Design",
      "Sensor Integration",
      "Edge Computing Solutions",
      "Real-time Monitoring",
      "IoT Analytics"
    ]
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    name: "Digital Transformation",
    description: "Strategic consulting and implementation services to guide your organization's digital transformation journey.",
    features: [
      "Digital Strategy Development",
      "Process Automation",
      "Legacy System Modernization",
      "Digital Experience Design",
      "Change Management"
    ]
  }
];

const consultingServices = [
  {
    icon: <Code className="w-8 h-8 text-blue-400" />,
    title: "Custom Development",
    description: "End-to-end development of custom software solutions tailored to your specific business needs. Our expert team leverages cutting-edge technologies to deliver scalable, secure, and efficient applications.",
    expertise: [
      "Full-stack Development",
      "Mobile App Development",
      "Enterprise Solutions",
      "API Development",
      "System Integration"
    ]
  },
  {
    icon: <Sparkles className="w-8 h-8 text-blue-400" />,
    title: "Innovation Consulting",
    description: "Strategic technology consulting to help organizations embrace digital transformation and stay ahead of the competition. We provide comprehensive roadmaps for implementing innovative solutions.",
    expertise: [
      "Technology Strategy",
      "Digital Transformation",
      "Innovation Workshops",
      "Emerging Tech Advisory",
      "Process Optimization"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-text">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-900/50 to-black/50 border border-blue-900/50 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Consulting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingServices.map((service, _index) => (
              <div
                key={service.title}
                className="bg-gradient-to-br from-blue-900/30 to-black/30 border border-blue-900/30 rounded-xl p-8"
              >
                {service.icon}
                <h3 className="text-2xl font-bold my-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-400 mb-3">Areas of Expertise:</h4>
                  {service.expertise.map((item, i) => (
                    <div key={i} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center bg-gradient-to-br from-blue-900/30 to-black/30 border border-blue-900/30 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-6">
            Let's discuss how our services can help you achieve your technology goals.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;