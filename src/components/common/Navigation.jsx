import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || 
              (link.path !== "/" && location.pathname.startsWith(link.path));
            
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative px-2 py-1 group font-medium transition-colors duration-300 ${
                    isActive 
                      ? "text-teal-500 dark:text-teal-400" 
                      : "text-neutral-700 dark:text-neutral-300 hover:text-teal-500 dark:hover:text-teal-400"
                  }`}
                >
                  {link.name}
                  {isActive ? (
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 dark:bg-teal-400 rounded-full"
                      layoutId="navIndicator"
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 dark:bg-teal-400 rounded-full group-hover:w-full transition-all duration-300" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <svg 
          className="w-6 h-6"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden bg-white dark:bg-neutral-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <ul className="flex flex-col space-y-6 text-center">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl font-medium px-4 py-2 ${
                        location.pathname === link.path
                          ? "text-teal-500 dark:text-teal-400"
                          : "text-neutral-700 dark:text-neutral-300"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;