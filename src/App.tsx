import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from './firebase';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Products from './pages/Products';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import Stars from './components/Stars';
import BackgroundVideo from './components/BackgroundVideo';
// import ParticleSystem from './components/ParticleSystem';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorDotPosition, setCursorDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const moveCursorDot = (e: MouseEvent) => {
      setCursorDotPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', moveCursorDot);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', moveCursorDot);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white flex flex-col relative overflow-hidden">
        <BackgroundVideo />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/140521-775376205_small.mp4" type="video/mp4" />
        </video>
        <Stars />
        {/* <ParticleSystem /> */}

        <div className="relative z-10">
          <Navbar user={user} />
          <AnimatePresence mode="wait">
            <motion.div
              className="flex-grow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/auth"
                  element={user ? <Navigate to="/products" /> : <Auth />}
                />
                <Route
                  path="/products"
                  element={
                    <ProtectedRoute>
                      <Products />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/products/:id"
                  element={
                    <ProtectedRoute>
                      <ProductDetail />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/services"
                  element={
                    <ProtectedRoute>
                      <Services />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/portfolio"
                  element={
                    <ProtectedRoute>
                      <Portfolio />
                    </ProtectedRoute>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route
                  path="/career"
                  element={
                    <ProtectedRoute>
                      <Career />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <ProtectedRoute>
                      <Contact />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </motion.div>
          </AnimatePresence>
          <Footer />
        </div>

        <Toaster position="top-center" />

        <motion.div
          className="custom-cursor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            transform: `translate(${cursorPosition.x - 10}px, ${cursorPosition.y - 10}px)`,
          }}
        />
        <motion.div
          className="custom-cursor-dot"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            transform: `translate(${cursorDotPosition.x - 2}px, ${cursorDotPosition.y - 2}px)`,
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;