import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Clock, Briefcase, ChevronRight, X, Upload, Loader2 } from 'lucide-react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

// Sample job data - this would typically come from an API
const jobListings = [
  {
    id: 1,
    title: 'Full Stack Developer - Intern',
    location: 'Hyderabad',
    type: 'Intern',
    department: 'Engineering',
    description: 'Looking for a skilled Full Stack Developer to build and maintain our web applications.',
    requirements: [
      'Bachelors degree in Computer Science or related field',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms',
    ],
    responsibilities: [
      'Develop and maintain web applications',
      'Write clean, maintainable code',
      'Collaborate with design team',
      'Optimize application performance',
    ]
  },
];

interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  coverLetter: string;
  resumeFile: File | null;
}

const Career = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resumeFile: null,
  });

  const filteredJobs = jobListings.filter(job => {
    const titleMatch = job.title.toLowerCase().includes(searchTitle.toLowerCase());
    const locationMatch = job.location.toLowerCase().includes(searchLocation.toLowerCase());
    return titleMatch && locationMatch;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resumeFile: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const job = jobListings.find(j => j.id === selectedJob);
      if (!job || !formData.resumeFile) {
        throw new Error('Missing required information');
      }

      // Upload resume to Firebase Storage
      const fileId = uuidv4();
      const fileExt = formData.resumeFile.name.split('.').pop();
      const storageRef = ref(storage, `resumes/${fileId}.${fileExt}`);
      await uploadBytes(storageRef, formData.resumeFile);
      const resumeUrl = await getDownloadURL(storageRef);

      // Save application data to Firestore
      await addDoc(collection(db, 'applications'), {
        jobId: job.id,
        jobTitle: job.title,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        coverLetter: formData.coverLetter,
        resumeUrl,
        appliedAt: new Date().toISOString(),
      });

      toast.success('Application submitted successfully!');
      setShowApplicationForm(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        coverLetter: '',
        resumeFile: null,
      });
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
      console.error('Application submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-text">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of the revolution in AI and emerging technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by job title"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-900/30 to-black/30 border border-blue-900/30 rounded-xl p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-blue-400">{job.title}</h2>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <span className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </span>
                  <span className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.type}
                  </span>
                  <span className="flex items-center text-gray-300">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {job.department}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{job.description}</p>

              {selectedJob === job.id ? (
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setShowApplicationForm(true)}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                    >
                      Apply Now
                    </button>
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="text-blue-400 hover:text-blue-300 transition flex items-center"
                    >
                      Show less
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setSelectedJob(job.id)}
                  className="text-blue-400 hover:text-blue-300 transition flex items-center"
                >
                  Learn more
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-300 text-lg">No job openings match your search criteria.</p>
          </motion.div>
        )}

        {/* Application Form Modal */}
        <AnimatePresence>
          {showApplicationForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-gradient-to-br from-blue-900/50 to-black/50 border border-blue-900/50 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Apply for {jobListings.find(j => j.id === selectedJob)?.title}</h2>
                  <button
                    onClick={() => setShowApplicationForm(false)}
                    className="text-gray-400 hover:text-white transition"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Years of Experience</label>
                    <input
                      type="text"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Cover Letter</label>
                    <textarea
                      name="coverLetter"
                      required
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Resume</label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume"
                      />
                      <label
                        htmlFor="resume"
                        className="flex items-center justify-center w-full px-4 py-2 bg-black/50 border border-blue-900/50 rounded-lg cursor-pointer hover:bg-black/70 transition"
                      >
                        <Upload className="w-5 h-5 mr-2" />
                        {formData.resumeFile ? formData.resumeFile.name : 'Upload Resume (PDF, DOC, DOCX)'}
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Career;