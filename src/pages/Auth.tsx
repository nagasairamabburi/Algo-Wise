import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, UserPlus, LogIn } from 'lucide-react';
import toast from 'react-hot-toast';
import { auth } from '../firebase';
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        if (password !== confirmPassword) {
          throw new Error('Passwords do not match');
        }
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success('Account created successfully!');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Successfully signed in!');
      }
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || `Failed to ${isSignUp ? 'sign up' : 'sign in'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    
    try {
      const result = await signInWithPopup(auth, provider);
      toast.success('Successfully signed in with Google!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen pt-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-black/50 border border-blue-900/50 backdrop-blur-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignUp ? 'Create Account' : 'Access Portal'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                {isSignUp ? <UserPlus className="w-5 h-5" /> : <LogIn className="w-5 h-5" />}
                {isSignUp ? 'Create Account' : 'Sign In'}
              </>
            )}
          </button>

          <button
            type="button"
            onClick={toggleMode}
            className="w-full text-sm text-blue-400 hover:text-blue-300 transition"
          >
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
          </button>

          <div className="relative">
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-gray-400">Or continue with</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full py-2 px-4 bg-white/10 hover:bg-white/20 rounded-lg transition flex items-center justify-center"
          >
            <img
              src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Auth;