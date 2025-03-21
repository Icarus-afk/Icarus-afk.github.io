import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';

const Resume = () => {
  const { basics } = data;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="text-neutral-800 dark:text-neutral-200 font-nunito">
      {/* Header section */}
      <section className="relative pt-28 pb-12 px-8 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-300/10 dark:bg-teal-700/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-300/10 dark:bg-purple-700/10 blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume</h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed">
              My professional background, experience, and qualifications.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href={basics.resumeUrl} 
              download 
              className="flex items-center px-5 py-2.5 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
            
            <a 
              href={basics.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-5 py-2.5 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in New Tab
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced PDF Viewer */}
      <section className="px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg relative"
          >
            {/* PDF document header */}
            <div className="bg-neutral-100 dark:bg-neutral-700 px-6 py-3 border-b border-neutral-200 dark:border-neutral-600 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="font-medium text-neutral-700 dark:text-neutral-200">
                  {basics.name} - Resume
                </span>
              </div>
              
              <a
                href={basics.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-600 transition-colors"
                aria-label="View in fullscreen"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-neutral-800 bg-opacity-80 dark:bg-opacity-80 z-10">
                <div className="flex flex-col items-center">
                  <svg className="animate-spin h-10 w-10 text-teal-500 mb-3" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-neutral-500 dark:text-neutral-400">Loading resume...</span>
                </div>
              </div>
            )}
            
            {/* PDF iframe with improved parameters */}
            <iframe
              src={`${basics.resumeUrl}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
              title="Resume"
              className="w-full h-[800px] md:h-[900px] lg:h-[1000px] border-0"
              onLoad={() => setIsLoading(false)}
            />
            
            {/* Bottom toolbar */}
            <div className="bg-neutral-100 dark:bg-neutral-700 px-6 py-3 border-t border-neutral-200 dark:border-neutral-600 flex justify-between items-center">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Last updated: March 2025
              </span>
              <div className="flex gap-3">
                <a 
                  href={basics.resumeUrl} 
                  download 
                  className="text-teal-500 hover:text-teal-600 transition-colors text-sm flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Save
                </a>
                <button 
                  onClick={() => window.print()}
                  className="text-teal-500 hover:text-teal-600 transition-colors text-sm flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resume;