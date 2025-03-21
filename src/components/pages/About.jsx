import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import data from "../../data/data.json";

const About = () => {
  const {
    basics,
    education,
    experience,
    skills,
    accomplishments,
    extracurricular,
    certifications,
  } = data;

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed">
              Versatile Software Engineer passionate about building impactful
              digital solutions that solve real-world problems through clean,
              efficient code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline section - Experience */}
      <section className="py-16 px-8 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Professional Journey
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative border-l-2 border-teal-200 dark:border-teal-800 ml-3 md:ml-6 pl-6 md:pl-8 mb-12"
          >
            {experience.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-12 relative"
              >
                <div className="absolute -left-[41px] md:-left-[47px] top-0 w-5 h-5 rounded-full bg-teal-500 border-4 border-white dark:border-neutral-900 shadow-md"></div>
                <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">
                      {job.position}
                    </h3>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-1 md:mt-0 bg-neutral-100 dark:bg-neutral-700/40 px-2.5 py-1 rounded-full">
                      {job.startDate} — {job.endDate}
                    </div>
                  </div>
                  <div className="text-lg font-semibold mb-3 group-hover:text-teal-500 transition-colors">
                    {job.company}
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Education
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform-gpu"
              >
                <div className="text-neutral-500 dark:text-neutral-400 text-sm mb-2 bg-neutral-100 dark:bg-neutral-700/40 px-2.5 py-1 rounded-full inline-block">
                  {edu.startDate} — {edu.endDate}
                </div>
                <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-1">
                  {edu.degree}
                </h3>
                <div className="text-lg font-semibold mb-3 relative">
                  {edu.institution}
                  <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-teal-200 dark:bg-teal-800/70"></span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills section */}
      <section className="py-16 px-8 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform-gpu border border-neutral-100 dark:border-neutral-700/50"
            >
              <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-teal-400 relative inline-block">
                Languages
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-200 dark:bg-teal-800/70"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm transform transition-transform hover:translate-y-[-2px] shadow-sm hover:shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform-gpu border border-neutral-100 dark:border-neutral-700/50"
            >
              <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-teal-400 relative inline-block">
                Frameworks
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-200 dark:bg-teal-800/70"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm transform transition-transform hover:translate-y-[-2px] shadow-sm hover:shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform-gpu border border-neutral-100 dark:border-neutral-700/50"
            >
              <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-teal-400 relative inline-block">
                Databases
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-200 dark:bg-teal-800/70"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm transform transition-transform hover:translate-y-[-2px] shadow-sm hover:shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools & Other */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform-gpu border border-neutral-100 dark:border-neutral-700/50"
            >
              <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-teal-400 relative inline-block">
                Tools & Other
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-200 dark:bg-teal-800/70"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.tools, ...skills.other].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm transform transition-transform hover:translate-y-[-2px] shadow-sm hover:shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Achievements & Credentials
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Accomplishments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-teal-600 dark:text-teal-400">
                Accomplishments
              </h3>

              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100 dark:border-neutral-700/50">
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-[54.5px]"
                >
                  {accomplishments &&
                    accomplishments.length > 0 &&
                    accomplishments.map((item, index) => (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        className="flex items-start group"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-500 dark:bg-teal-600 mt-1.5 group-hover:scale-110 transition-transform duration-300 shadow-sm"></div>
                        <p className="ml-4 text-neutral-700 dark:text-neutral-300 leading-relaxed group-hover:translate-x-1 transition-transform">
                          {item}
                        </p>
                      </motion.li>
                    ))}
                  {(!accomplishments || accomplishments.length === 0) && (
                    <p className="text-neutral-500 dark:text-neutral-400 italic">
                      No accomplishments listed yet.
                    </p>
                  )}
                </motion.ul>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-teal-600 dark:text-teal-400">
                Certifications
              </h3>

              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100 dark:border-neutral-700/50">
                {certifications && certifications.length > 0 ? (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar"
                  >
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="border-l-4 border-teal-500 pl-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-700/20 rounded-r-lg transition-all duration-300 hover:translate-x-1 hover:shadow-sm"
                      >
                        <h4 className="text-base font-bold text-neutral-800 dark:text-neutral-200">
                          {cert.title || ""}
                        </h4>
                        <div className="flex flex-wrap justify-between items-baseline mt-1 gap-2">
                          <span className="text-sm text-neutral-600 dark:text-neutral-400">
                            {cert.issuer?.split("\n")[0] || ""}
                          </span>
                          {(cert.issue_date || (cert.month && cert.year)) && (
                            <span className="text-xs bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded-full shadow-sm">
                              {cert.issue_date
                                ? cert.issue_date.replace("Issued ", "")
                                : cert.month && cert.year
                                ? `${cert.month} ${cert.year}`
                                : ""}
                            </span>
                          )}
                        </div>
                        {cert.credential_link && (
                          <a
                            href={cert.credential_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 text-xs mt-2 group"
                          >
                            <span>View Certificate</span>
                            <svg
                              className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <p className="text-neutral-500 dark:text-neutral-400 italic">
                    No certifications listed yet.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      {extracurricular && extracurricular.length > 0 && (
        <section className="py-16 px-8 bg-transparent">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Extracurricular Activities
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-8"
            >
              {extracurricular.map((activity, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform-gpu border border-neutral-100 dark:border-neutral-700/50"
                >
                  <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-3 relative inline-block">
                    {activity.organization}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-200 dark:bg-teal-800/70"></span>
                  </h3>
                  <div className="mb-4">
                    {activity.roles.map((role, idx) => (
                      <div key={idx} className="inline-block mr-3 mb-2">
                        <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full text-sm shadow-sm hover:shadow transform transition-transform hover:translate-y-[-2px]">
                          {role}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {activity.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default About;
