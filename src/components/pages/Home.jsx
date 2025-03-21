import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import data from "../../data/data.json";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiPython,
  DiHtml5,
  DiCss3,
  DiGit,
  DiGithubBadge,
  DiPostgresql,
} from "react-icons/di";
import {
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiLinkedin,
  SiBootstrap,
  SiDocker,
  SiMysql,
} from "react-icons/si";
import { SiSocketdotio, SiGraphql } from "react-icons/si";
import { CiTwitter } from "react-icons/ci";
import { DiDatabase, DiDjango, DiVisualstudio, DiMysql } from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";
import { BiLogoGoLang } from "react-icons/bi";

const Home = () => {
  const { basics, skills, projects, socials } = data;
  const containerRef = useRef(null);

  // Map of skill names to their icons
  const skillIcons = {
    JavaScript: <DiJavascript1 size={36} className="text-teal-500" />,
    TypeScript: <SiTypescript size={36} className="text-teal-500" />,
    Python: <DiPython size={36} className="text-teal-500" />,
    HTML5: <DiHtml5 size={36} className="text-teal-500" />,
    CSS3: <DiCss3 size={36} className="text-teal-500" />,
    React: <DiReact size={36} className="text-teal-500" />,
    "Node.js": <DiNodejsSmall size={36} className="text-teal-500" />,
    "Express.js": <SiExpress size={36} className="text-teal-500" />,
    "Next.js": <SiNextdotjs size={36} className="text-teal-500" />,
    TailwindCSS: <SiTailwindcss size={36} className="text-teal-500" />,
    Git: <DiGit size={36} className="text-teal-500" />,
    MongoDB: <DiMongodb size={36} className="text-teal-500" />,
    PostgreSQL: <DiPostgresql size={36} className="text-teal-500" />,
    Firebase: <SiFirebase size={36} className="text-teal-500" />,
    SQL: <DiDatabase size={36} className="text-teal-500" />,
    Bootstrap: <SiBootstrap size={36} className="text-teal-500" />,
    Docker: <SiDocker size={36} className="text-teal-500" />,
    MySQL: <DiMysql size={28} className="text-teal-500" />,
    Go: <BiLogoGoLang size={36} className="text-teal-500" />,
    Django: <DiDjango size={36} className="text-teal-500" />,
    GitHub: <DiGithubBadge size={36} className="text-teal-500" />,
    "VS Code": <DiVisualstudio size={36} className="text-teal-500" />,
    "RESTful APIs": <AiOutlineApi size={36} className="text-teal-500" />,
    "Socket.io": <SiSocketdotio size={36} className="text-teal-500" />,
    GraphQL: <SiGraphql size={36} className="text-teal-500" />,
  };

  // Social media icons
  const socialIcons = {
    GitHub: <DiGithubBadge size={22} />,
    LinkedIn: <SiLinkedin size={18} />,
    Twitter: <CiTwitter size={18} />,
  };

  // Get featured projects
  const featuredProjects = projects.filter(project => 
    project.name === "Distributed Ledger System" || 
    project.name === "IoT Greenhouse Management System"
  );

  return (
    <div
      ref={containerRef}
      className="relative text-neutral-800 dark:text-neutral-200 font-nunito overflow-hidden"
    >
      {/* Hero section with animated elements */}
      <section className="relative flex items-center justify-center min-h-screen px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-300/10 dark:bg-teal-700/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-300/10 dark:bg-purple-700/10 blur-3xl"></div>

          {/* Code-like decoration */}
          <div className="absolute left-4 top-1/4 opacity-10 dark:opacity-5 text-xs font-mono hidden md:block text-teal-800 dark:text-teal-200">
            &lt;div class="developer"&gt;
            <br />
            &nbsp;&nbsp;&lt;skills&gt;React, Node.js, TypeScript&lt;/skills&gt;
            <br />
            &nbsp;&nbsp;&lt;passion&gt;Building beautiful UIs&lt;/passion&gt;
            <br />
            &lt;/div&gt;
          </div>
        </div>

        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative inline-block"
            >
              <span className="text-neutral-500 dark:text-neutral-400 text-sm uppercase tracking-wider font-light">
                Hello, my name is
              </span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-teal-500/50 dark:bg-teal-400/50"></span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              {basics.name.split(" ")[0]}
              <span className="relative ml-4">
                <span className="relative z-10 text-teal-500 dark:text-teal-400">
                  {basics.name.split(" ")[1]}
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-3 bg-teal-200 dark:bg-teal-800 opacity-30 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-2xl md:text-3xl text-neutral-600 dark:text-neutral-400 font-light"
            >
              {basics.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-light max-w-2xl leading-relaxed"
            >
              {basics.summary}
            </motion.p>

            {/* Additional info section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex flex-wrap gap-4 items-center text-sm text-neutral-600 dark:text-neutral-400"
            >
              {basics.location && (
                <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800/50 px-3 py-1.5 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-500"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{basics.location}</span>
                </div>
              )}

              {basics.availability && (
                <div className="flex items-center gap-1.5 bg-teal-50 dark:bg-teal-900/20 px-3 py-1.5 rounded-full text-teal-700 dark:text-teal-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{basics.availability}</span>
                </div>
              )}

              {basics.email && (
                <a
                  href={`mailto:${basics.email}`}
                  className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800/50 px-3 py-1.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700/50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-500"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>{basics.email}</span>
                </a>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="pt-6 flex flex-wrap gap-6"
            >
              <Link
                to="/projects"
                className="group relative px-8 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <span>View Projects</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <motion.span
                  className="absolute inset-0 bg-white opacity-20"
                  initial={{ width: "0%", left: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              <Link
                to="/contact"
                className="group relative px-8 py-3 border-2 border-teal-500 text-teal-500 dark:text-teal-400 rounded-full hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.span
                  className="absolute inset-0 bg-teal-500 opacity-10"
                  initial={{ width: "0%", left: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle scroll indicator */}
        {/* Improved scroll indicator with exact centering */}
        <motion.div
          className="absolute bottom-8 inset-x-0 mx-auto w-6 z-10 flex justify-center"
          animate={{
            y: [0, 8, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-neutral-400"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </section>

      {/* Section divider */}
      <div className="relative h-24">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-16 w-px bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent opacity-50"></div>
      </div>
      {/* Technologies section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Technologies I Work With
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-light">
              My technical toolkit includes these languages, frameworks, and
              tools
            </p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 md:gap-10">
            {[
              ...skills.languages,
              ...skills.frameworks,
              ...skills.databases,
              ...skills.tools,
              ...skills.other,
            ]
              .slice(0, 36)
              .map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center justify-center gap-3"
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 p-3">
                    {skillIcons[skill] || (
                      <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center">
                        <span className="text-teal-600 dark:text-teal-400 text-lg font-medium">
                          {skill.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-medium">{skill}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="w-full h-24 flex items-center justify-center">
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent opacity-50"></div>
      </div>

      {/* Featured Projects section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-light">
              Some of my recent work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -8 }}
                className="group bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-teal-500 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-neutral-800 dark:bg-neutral-700 text-white rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-all duration-300"
                    >
                      <DiGithubBadge size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300"
                    >
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center mt-16"
          >
            <Link
              to="/projects"
              className="group relative px-6 py-3 border border-teal-500 text-teal-500 dark:text-teal-400 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex items-center">
                View All Projects
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 px-8 bg-neutral-50 dark:bg-neutral-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-light mx-auto max-w-2xl mb-8">
              {basics.availability} - feel free to reach out if you'd like to
              connect!
            </p>

            <div className="flex justify-center gap-6 mb-10">
              {socials.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-teal-500 dark:hover:text-teal-400 rounded-full border border-neutral-200 dark:border-neutral-700 transition-colors duration-300 hover:border-teal-500 dark:hover:border-teal-500"
                  aria-label={social.name}
                >
                  {socialIcons[social.name] || (
                    <div className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-xs">
                      {social.name.charAt(0)}
                    </div>
                  )}
                </a>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Send Me a Message
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
