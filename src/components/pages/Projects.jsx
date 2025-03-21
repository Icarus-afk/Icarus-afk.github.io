import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import data from "../../data/data.json";

const Projects = () => {
  const { projects } = data;
  const [githubData, setGithubData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Fetch GitHub data for projects
  useEffect(() => {
    const fetchGithubData = async () => {
      setIsLoading(true);
      const githubInfo = {};

      // Using Promise.allSettled to handle any failed requests gracefully
      const requests = projects.map((project) => {
        const repoPath = new URL(project.githubUrl).pathname.substring(1);
        return fetch(`https://api.github.com/repos/${repoPath}`)
          .then((response) => response.json())
          .then((data) => {
            githubInfo[project.githubUrl] = {
              stars: data.stargazers_count,
              forks: data.forks_count,
              updated: new Date(data.updated_at).toLocaleDateString(),
              language: data.language,
              error: false,
            };
          })
          .catch(() => {
            githubInfo[project.githubUrl] = { error: true };
          });
      });

      await Promise.allSettled(requests);
      setGithubData(githubInfo);
      setIsLoading(false);
    };

    fetchGithubData();
  }, [projects]);

  // Function to extract username/repo from GitHub URL
  const getRepoIdentifier = (url) => {
    const path = new URL(url).pathname;
    return path.substring(1); // Remove leading slash
  };

  return (
    <div className="text-neutral-800 dark:text-neutral-200 font-nunito">
      {/* Hero section */}
      <section className="relative pt-28 pb-20 px-8 overflow-hidden">
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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed">
              A collection of my work across various technologies and domains.
              Each project represents a problem solved or a creative
              exploration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              // Replace the motion.div for each project card with this improved version:

              <motion.div
                key={project.name}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)] border border-neutral-100 dark:border-neutral-700 transform-gpu transition-all duration-300"
              >
                {/* Project card header with 3D effect */}
                <div className="relative h-32 bg-gradient-to-r from-teal-500/90 to-teal-600/90 p-6 shadow-sm transform-gpu transition-transform group-hover:translate-z-1">
                  <div className="absolute top-0 right-0 p-3 transform transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5">
                    <svg
                      className="h-6 w-6 text-white opacity-80"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white relative z-10 transition-transform group-hover:translate-y-0.5">
                    {project.name}
                  </h3>
                  {!isLoading &&
                    githubData[project.githubUrl] &&
                    !githubData[project.githubUrl].error && (
                      <div className="absolute bottom-3 right-3 flex items-center space-x-3 text-white/80 text-sm">
                        <div className="flex items-center">
                          <svg
                            className="h-4 w-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                          </svg>
                          {githubData[project.githubUrl].stars}
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="h-4 w-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            />
                          </svg>
                          {githubData[project.githubUrl].forks}
                        </div>
                      </div>
                    )}
                  {/* Layered background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-teal-700/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Project content with 3D depth */}
                <div className="p-6 relative">
                  {/* Subtle edge highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/30 dark:via-teal-700/30 to-transparent"></div>

                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 h-24 overflow-hidden transition-transform group-hover:translate-y-0.5">
                    {project.description}
                  </p>

                  {/* Technologies with 3D effect */}
                  <div className="mb-5 transition-transform group-hover:translate-y-0.5">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-xs shadow-sm transform transition-transform hover:translate-y-[-1px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub info banner with 3D depth */}
                  {!isLoading &&
                    githubData[project.githubUrl] &&
                    !githubData[project.githubUrl].error && (
                      <div className="text-xs text-neutral-500 dark:text-neutral-500 mb-4 transition-transform group-hover:translate-y-0.5">
                        <div className="flex items-center">
                          <span className="flex items-center mr-3">
                            <span className="w-2 h-2 rounded-full mr-1 bg-teal-500 shadow-sm"></span>
                            {githubData[project.githubUrl].language}
                          </span>
                          <span>
                            Updated: {githubData[project.githubUrl].updated}
                          </span>
                        </div>
                      </div>
                    )}

                  {/* Links with 3D effect */}
                  <div className="flex flex-wrap gap-3 transition-transform group-hover:translate-y-0.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all hover:shadow-md hover:-translate-y-0.5"
                    >
                      <svg
                        className="h-4 w-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View Code
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm px-3 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-all hover:shadow-md hover:-translate-y-0.5"
                      >
                        <svg
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 px-8 bg-neutral-50/50 dark:bg-neutral-800/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Want to see more?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg mx-auto">
              Check out my GitHub profile for more projects or get in touch to
              discuss potential collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/icarus-afk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-teal-500 text-teal-500 dark:text-teal-400 rounded-full hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                View GitHub Profile
              </a>
              <Link
                to="/contact"
                className="px-8 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
