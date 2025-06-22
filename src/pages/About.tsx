import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const founders = [
  {
    name: "Abburi Ram",
    alternateName: "Abburi Naga Sai Ram",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1743795574861-d0a6fcdabc1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    bio: "A tech enthusiast and entrepreneur, Abburi Ram (also known as Abburi Naga Sai Ram or abburi sai ram) is currently pursuing Electrical Engineering at IIT Hyderabad. With a strong background in AI, software development, and business strategy, he has delivered impactful solutions through internships and freelance projects. As CEO of AlgoWise Technologies (AlgoWise, Algo-Wise), Abburi Ram leads the company's mission to solve real-world challenges using AI, with innovative products like PersonaMatch and MetaRise.ai. His vision drives AlgoWise Technologies to be a leader in AI and emerging technologies.",
    education: "IIT Hyderabad - Electrical Engineering",
    social: {
      linkedin: "https://www.linkedin.com/in/abburi-ram-b5bbb6256/",
      twitter: "#",
      email: "ram.a@algo-wise.com"
    }
  },
  {
    name: "Sai Nishith",
    alternateName: "Pavan Nishith",
    role: "Co-Founder & COO",
    image: "https://images.unsplash.com/photo-1743794630119-6d028162730c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    bio: "A strategic leader from JNTU Hyderabad, Sai Nishith (also known as Pavan Nishith) specializes in operations, management, and scaling businesses. With hands-on experience in managing teams and delivering results, he ensures seamless execution of AlgoWise Technologies' services and products, empowering the company to grow and deliver value to clients globally. As Co-Founder & COO of AlgoWise Technologies (AlgoWise, Algo-Wise), Sai Nishith plays a crucial role in the company's operational excellence and strategic growth.",
    education: "JNTU Hyderabad",
    social: {
      linkedin: "https://www.linkedin.com/in/pavan-nishith-6657a8256/",
      twitter: "#",
      email: "sai.nishith@algo-wise.com"
    }
  }
];

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-text">
            About AlgoWise Technologies - Founded by Abburi Ram & Sai Nishith
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of technology through innovative AI solutions and emerging technologies. AlgoWise Technologies (AlgoWise, Algo-Wise, algowisetechnologies) is led by visionary founders <strong>Abburi Ram</strong> and <strong>Sai Nishith</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-900/30 to-black/30 border border-blue-900/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              At AlgoWise Technologies (AlgoWise, Algo-Wise), we envision a future where artificial intelligence and emerging technologies seamlessly integrate into every aspect of business and life, creating more efficient, intelligent, and sustainable solutions. Founded by <strong>Abburi Ram (Abburi Naga Sai Ram)</strong> from IIT Hyderabad and <strong>Sai Nishith</strong> from JNTU Hyderabad, our dual approach of product innovation and service excellence positions us uniquely in the technology landscape. AlgoWise Technologies is committed to being a global leader in AI and digital transformation.
            </p>
          </div>
        </motion.div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team - Founders of AlgoWise Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-900/50 to-black/50 border border-blue-900/50 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="flex flex-row md:flex-col gap-6 items-center">
                  <img
                    src={founder.image}
                    alt={`${founder.name} - ${founder.role} of AlgoWise Technologies`}
                    className="w-48 h-60 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                    {founder.alternateName && (
                      <p className="text-gray-400 text-sm mb-1">Also known as: {founder.alternateName}</p>
                    )}
                    <p className="text-blue-400 mb-2">{founder.role}</p>
                    <p className="text-gray-300 text-sm mb-4">{founder.education}</p>
                    <p className="text-gray-300 mb-4">{founder.bio}</p>
                    <div className="flex gap-4">
                      <a 
                        href={founder.social.linkedin} 
                        className="text-gray-400 hover:text-blue-400 transition"
                        aria-label={`${founder.name} LinkedIn Profile`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a 
                        href={founder.social.twitter} 
                        className="text-gray-400 hover:text-blue-400 transition"
                        aria-label={`${founder.name} Twitter Profile`}
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a 
                        href={`mailto:${founder.social.email}`} 
                        className="text-gray-400 hover:text-blue-400 transition"
                        aria-label={`Email ${founder.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-900/30 to-black/30 border border-blue-900/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Why Choose AlgoWise Technologies?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Innovative Leadership</h3>
                <p className="text-gray-300">Led by <strong>Abburi Ram</strong> (IIT Hyderabad) and <strong>Sai Nishith</strong> (JNTU Hyderabad), combining technical excellence with strategic vision.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Cutting-Edge Products</h3>
                <p className="text-gray-300">Revolutionary AI solutions including PersonaMatch, MetaSEO, and Mentaura AI that transform industries.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Global Impact</h3>
                <p className="text-gray-300">AlgoWise Technologies serves clients worldwide with scalable, secure, and sustainable AI solutions.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Future-Ready Technology</h3>
                <p className="text-gray-300">Pioneering next-generation technologies including quantum computing integration and advanced neural networks.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;