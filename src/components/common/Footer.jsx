import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Social links
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/icarus-afk", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tapiwa-mushakavanhu",
      icon: "linkedin",
    },
    { name: "Twitter", url: "https://twitter.com/icarus_afk", icon: "twitter" },
  ];

  return (
    <footer className="pt-16 pb-8 border-t border-neutral-200 dark:border-neutral-800 relative">
      {/* Decorative background element */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-16 right-16 w-72 h-72 rounded-full bg-teal-100/20 dark:bg-teal-900/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand and tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <h2 className="text-2xl font-bold mb-3 text-teal-500 dark:text-teal-400">
              Ehasan Ahmed
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-5 max-w-md">
              Building modern web applications with a focus on clean design and exceptional user experience.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
                  aria-label={link.name}
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.icon === "github" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )}
                  {link.icon === "linkedin" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {link.icon === "twitter" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Contact info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4">
              Get in Touch
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Open to new opportunities and collaborations
            </p>
            <a 
              href="mailto:ehasan.ahmed01@gmail.com" 
              className="inline-flex items-center text-teal-500 dark:text-teal-400 hover:underline"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              ehasan.ahmed01@gmail.com
            </a>
          </motion.div>
        </div>
        
        {/* Copyright section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-8 mt-8 border-t border-neutral-200 dark:border-neutral-800/50 text-center text-sm text-neutral-500 dark:text-neutral-500"
        >
          <p>© {currentYear} Ehasan Ahmed. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Designed and built with <span className="text-red-500">♥</span> using React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;