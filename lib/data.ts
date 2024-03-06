import React from "react";
import { RiRobotLine } from "react-icons/ri";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
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
    title: "Software Developer",
    location: "Bangalore, KR",
    description:
      "Develop API for various functionality in the ERP software that impact 1K+ clients and their businesses",
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
    title: "CRM Software", 
    description:
    "I developed this project for my client to manage the Team and their work",
    tags: ["React", "JavaScript", "Tailwind CSS", "Docker", "Django", "PostgreSQL", "Redis","Celery"],
    imageUrl: Trainer,
    link:"https://github.com/Shoib007/trainingManagementSystem"
  },
  {
    title: "Netflix Clone",
    description:
      "I created this project to learn Tailwind with Vite.js",
    tags: ["React", "Vite.js", "Django", "Tailwind", "Docker"],
    imageUrl: NetFlix,
    link:"https://github.com/Shoib007/netflix-clone-fullstack"
  },
  {
    title: "Python Keylogger",
    description:
      "I created this Keylogger when I was teaching my students about Ethical Hacking",
    tags: ["Python", "Socket", "SMTP", "Threading"],
    imageUrl: Keyloger,
    link:"https://github.com/Shoib007/Keylogger-Python"
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
