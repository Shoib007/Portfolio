import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { RiRobotLine } from "react-icons/ri";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import NetFlix from "@/public/netflix.png";
import Keyloger from "@/public/project-1.jpg";
import Trainer from "@/public/project-2.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Robotics Engineer",
    location: "Bangalore, KR",
    description:
      "I develop Robotics Activities and Coding for Companies B2B Clients and give then training on it.",
    icon: React.createElement(RiRobotLine),
    date: "2022 - Current",
  },
  {
    title: "AI/ML Lecturer",
    location: "Ambedkar Nagar, UP",
    description:
      "I impacted 100+ students life by teaching Computer Science, Coding and Artificial Intelligence & Machine Learning",
    icon: React.createElement(LiaChalkboardTeacherSolid),
    date: "2019 - 2021",
  },
  {
    title: "Jr. Faculty of Hardware & Network",
    location: "Bangalore, KA",
    description:
      "I impacted 20+ students life by train them about Computer Hardware & Networks",
    icon: React.createElement(LiaChalkboardTeacherSolid),
    date: "2018 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Netflix Clone",
    description:
      "I created this project to learn Tailwind with Vite.js",
    tags: ["React", "Vite.js", "Django", "Tailwind", "Docker"],
    imageUrl: NetFlix,
  },
  {
    title: "Trainer Management System", 
    description:
      "I developed this project to manage the training + Trainers in my company",
    tags: ["React", "JavaScript", "Bootstrap", "ContextAPI", "Docker"],
    imageUrl: Trainer,
  },
  {
    title: "Python Keylogger",
    description:
      "I created this Keylogger when I was teacher my students about Ethical Hacking",
    tags: ["Python", "Socket", "SMTP", "Threading"],
    imageUrl: Keyloger,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "AWS",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Bootstrap",
] as const;
