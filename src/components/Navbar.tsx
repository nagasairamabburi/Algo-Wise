import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, LogOut } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import toast from 'react-hot-toast';

const Navbar = ({ user }: { user: any }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Successfully logged out');
      navigate('/');
    } catch (error) {
      toast.error('Failed to log out');
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-sm border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center h-20 w-20">
              <img src="/original-image.svg" alt="Replacement Image" width="635" height="410" />
            </div>
            <Link to="/" className="text-xl font-bold text-blue-400">
              AlgoWise Technologies
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/products" className="text-gray-300 hover:text-blue-400 transition">
              Products
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-blue-400 transition">
              Services
            </Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-blue-400 transition">
              Portfolio
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-blue-400 transition">
              About
            </Link>
            <Link to="/career" className="text-gray-300 hover:text-blue-400 transition">
              Careers
            </Link>
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-300 hover:text-blue-400 transition"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            ) : (
              <Link
                to="/auth"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
              >
                Access Portal
              </Link>
            )}
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400 transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-300 hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-300 hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/career"
                className="text-gray-300 hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Career
              </Link>
              {user ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="flex items-center text-gray-300 hover:text-blue-400 transition"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              ) : (
                <Link
                  to="/auth"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Access Portal
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;