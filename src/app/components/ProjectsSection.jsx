"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Application",
    description: "A dynamic e-commerce platform built with Next.js and MongoDB, featuring a clean white background and intuitive buttons in blue, red, and gray. It supports Google Login with NextAuth for secure user authentication. Users can browse products, upload images to AWS S3, and manage carts efficiently. The responsive design, styled with Tailwind CSS, ensures a great user experience.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/WarriorRy/Ecommerce-front.git",
    previewUrl: "https://ecommerce-front-three-mauve.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern and responsive portfolio website showcasing skills, projects, and achievements. Built with Next.js, it features a clean design, smooth navigation, and fast performance. The site highlights expertise in web development, competitive programming, and problem-solving. Interactive elements, styled with Tailwind CSS, enhance the user experience. Currently optimized for showcasing personal and professional growth.",
    image: "/images/projects/2.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/WarriorRy/Portfolio_Website.git",
    previewUrl: "https://portfolio-website-chi-nine-52.vercel.app/",
  },
  {
    id: 3,
    title: "Quiz App",
    description: "A simple and interactive quiz application built using React.js. It features a clean user interface with smooth navigation and real-time feedback on answers. The app supports multiple-choice questions, tracks scores dynamically, and ensures responsiveness across devices. Designed to provide an engaging and educational user experience.",
    image: "/images/projects/4.png",
    tag: ["All", "Web" , "Mobile"],
    gitUrl: "https://github.com/WarriorRy/QuizApp.git",
    previewUrl: "https://quiz-4nn5ub7cz-warriorrys-projects.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
