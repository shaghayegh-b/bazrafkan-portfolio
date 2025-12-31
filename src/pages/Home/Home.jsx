import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { FaCheckCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";
const projects = [
  {
    id: 1,
    title: "Fotros — Advanced Clothing Store",
    subtitle: "Personal Project | Featured",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Figma",
      "E-commerce",
      "Mock REST API",
    ],
    featured: true,
    shortBullets: [
      "Built a production-ready e-commerce front-end using React and Tailwind CSS",
      "Implemented cart, wishlist, product variations, and user dashboard",
      "Translated complex Figma designs into responsive, scalable UI components",
    ],

    bullets: [
      "Built a production-ready e-commerce front-end focused on real-world shopping flows and conversion-oriented UI",
      "Converted advanced Figma designs into pixel-perfect, fully responsive interfaces",
      "Designed scalable and reusable React components suitable for real production use",
      "Implemented advanced features including cart, wishlist, product variations, and user dashboard",
      "Added light mode, dark mode, and system theme support to enhance user experience",
      "Simulated real backend behavior using custom mock REST APIs",
    ],

    caseStudy: {
      overview:
        "Fotros is a production-ready e-commerce front-end application designed to simulate a real-world online clothing store, with a focus on scalability, performance, and conversion-focused UX.",
      problem:
        "Many junior-level e-commerce demos lack real-world complexity such as user dashboards, product variations, and scalable UI architecture.",
      solution:
        "I designed and implemented a scalable front-end architecture using React and Tailwind CSS, translated complex Figma designs into responsive components, implemented full shopping features, and simulated backend behavior using mock REST APIs.",
    },

    LinkRemote: "https://shaghayegh-b.github.io/Fotros/",
    repository: "https://github.com/shaghayegh-b/Fotros",
  },

  {
    id: 2,
    title: "Blockchain Web Application",
    subtitle: "Team Project",
    stack: ["React", "JavaScript", "REST API", "Git", "GitHub"],

    shortBullets: [
      "Worked as a front-end developer in a collaborative blockchain team project",
      "Developed responsive UI components integrated with real backend APIs",
      "Collaborated closely with backend developers to align UI with business logic",
    ],

    bullets: [
      "Worked as a front-end developer in a collaborative team environment",
      "Developed responsive UI components based on shared and evolving requirements",
      "Integrated real backend APIs and handled asynchronous data rendering",
      "Adapted UI and UX after the original designer left the project",
      "Collaborated closely with backend developers to ensure consistency with blockchain logic",
    ],

    caseStudy: {
      overview:
        "A team-based blockchain web application demonstrating collaboration, real API integration, and scalable React UI architecture.",
      problem:
        "The project required maintaining UI consistency and responsiveness while integrating complex backend blockchain logic, especially after design ownership changed mid-project.",
      solution:
        "I implemented multiple responsive UI sections, handled dynamic API-driven data rendering, and contributed to UI/UX decisions while collaborating closely with backend developers.",
      teamSkills: [
        "Collaborated with backend developers to align UI behavior with business logic",
        "Adapted quickly to design changes after the original designer left the project",
        "Communicated technical constraints and UI decisions within a cross-functional team",
      ],
    },

    LinkRemote: "https://app.freebridge.ir/",
    repository: "https://github.com/shaghayegh-b/Yelena-F-public",
  },

  {
    id: 3,
    title: "Simple Clothing Store",
    subtitle: "Personal Project",
    stack: ["React", "Vite", "Tailwind CSS", "Mock API"],

    shortBullets: [
      "Built a mobile-first e-commerce application with core shopping features",
      "Implemented cart, wishlist, authentication, and basic user dashboard",
      "Used mock APIs to simulate real product and user data",
    ],

    bullets: [
      "Built a mobile-first e-commerce application focused on essential shopping flows",
      "Implemented cart, wishlist, authentication, and a basic user dashboard",
      "Optimized layouts for mobile and tablet devices",
      "Used mock APIs to simulate real product and user data",
      "Served as a foundation for developing a more advanced e-commerce project",
    ],

    LinkRemote: "https://shaghayegh-b.github.io/bazrafkan-store/",
    repository: "https://github.com/shaghayegh-b/bazrafkan-store",
  },

  {
    id: 4,
    title: "Personal Portfolio Website",
    subtitle: "Personal Project",
    stack: ["React", "Tailwind CSS", "Vite", "GitHub Pages"],

    shortBullets: [
      "Designed and developed a professional front-end portfolio website",
      "Focused on performance, responsiveness, and clear project presentation",
      "Deployed and maintained using GitHub Pages",
    ],

    bullets: [
      "Designed and developed a professional personal portfolio to showcase front-end projects",
      "Focused on performance, responsiveness, and clean UI presentation",
      "Built with a scalable structure to support continuous improvements",
      "Deployed and maintained using GitHub Pages",
    ],

    LinkRemote: "https://shaghayegh-b.github.io/bazrafkan-portfolio/",
    repository: "https://github.com/shaghayegh-b/bazrafkan-portfolio",
  },
];

import back from "../../assets/imag/back.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiGit,
} from "react-icons/si";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import ModalAlert from "../../components/ModalAlert/ModalAlert";
import porof from "../../assets/imag/porof.png";
export default function Home() {
  const formRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false); // نمایش واقعی مودال
  const [animate, setAnimate] = useState(false); // کنترل انیمیشن ورود/خروج
  const [formStatus, setFormStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // 👈 مهم
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [showModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setModalMessage("Please enter a valid email address.");
      setIsModalOpen(true);
      return;
    }
    setFormStatus("sending");

    emailjs
      .sendForm(
        "service_u9lolxr",
        "template_d4bnwa3",
        formRef.current,
        "rOjFwGiu24iaiLyIE"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setFormStatus("success");
          setModalMessage("Thanks! Your message has been sent successfully.");
          setIsModalOpen(true);
          formRef.current.reset();
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email error:", error.text);
          setFormStatus("error");
          setModalMessage("Oops! Something went wrong. Please try again.");
          setIsModalOpen(true);
        }
      );
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    setTimeout(() => setAnimate(true), 10); // شروع انیمیشن ورود بعد از رندر
  };

  const closeModal = () => {
    setAnimate(false); // شروع انیمیشن خروج
    setTimeout(() => {
      setShowModal(false);
      setSelectedProject(null);
    }, 300); // مدت زمان transition
  };
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", projects: ["Fotros", "Bazrafkan Store", "Portfolio"] },
        { name: "Next.js", projects: [] },
        { name: "Tailwind", projects: ["Fotros", "Bazrafkan Store"] },
        { name: "Bootstrap", projects: ["Portfolio"] },
        { name: "Sass", projects: [] },
        { name: "JavaScript", projects: ["All Projects"] },
      ],
    },
    {
      category: "Tools & Workflow",
      items: [
        { name: "Git", projects: ["All Projects"] },
        { name: "GitHub", projects: ["All Projects"] },
        { name: "Vite", projects: ["All Projects"] },
        { name: "Figma", projects: ["Fotros"] },
        { name: "Mock APIs", projects: ["Fotros", "Bazrafkan Store"] },
      ],
    },
    {
      category: "Special Projects",
      items: [
        { name: "Blockchain", projects: ["Yekena"] },
        { name: "AI-generated Assets", projects: ["Fotros"] },
      ],
    },
  ];

  const [activeSection, setActiveSection] = useState(null);
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-gray-800">
      {/* NAVBAR */}
      <header className="bg-[#0b0b0e] text-white">
        <div className="max-w-7xl mx-auto px-2 md:px-4 py-4 flex items-center justify-between">
          <h1 className="font-semibold tracking-wide">Shaghayegh-Bazrafkan</h1>
          <nav className="flex gap-3 md:gap-8 text-sm text-gray-300">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#a93a3a]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-[#a93a3a]"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#a93a3a]"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="about"
        style={{ backgroundImage: `url(${back})` }}
        className={`relative bg-cover bg-center ${
          activeSection === "about" ? "active-section" : ""
        }`}
      >
        <div className="absolute inset-0 bg-[#f5f6f980]"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-14 md:pt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={porof}
              alt="profile"
              className="w-72 h-72 object-cover rounded-xl shadow-xl"
            />
          </div>

          {/* Text */}
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl ">
              <span className="font-bold">Shaghayegh</span> Bazrafkan
            </h2>
            <h3 className="mt-2 text-lg text-[#c94a4a] font-medium">
              Front-End Developer
            </h3>

            <p className="mt-4 max-w-3xl leading-relaxed text-gray-700">
              Front-End Developer focused on building fast, scalable, and
              production-ready web applications. Experienced in translating
              complex Figma designs into clean, responsive React interfaces for
              real-world products.
            </p>

            <p className="mt-3 max-w-3xl text-sm text-gray-600">
              2+ years of hands-on experience developing conversion-focused UIs,
              reusable React components, and modern front-ends using React and
              Tailwind CSS.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2.5 rounded-lg bg-[#c94a4a] text-white text-sm font-medium hover:scale-105 transition-transform"
              >
                Hire Me for Front-End Projects
              </button>

              <a
                href="/bazrafkan-portfolio/ShBResume.pdf"
                download
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-gray-200 text-sm flex items-center gap-2 hover:bg-gray-300 transition"
              >
                <FiExternalLink size={14} /> Download Resume (PDF)
              </a>

              <a
                href="https://github.com/shaghayegh-b"
                className="px-5 py-2 rounded-lg bg-[#494c60] text-white text-sm flex items-center gap-2 hover:bg-[#62657d] transition"
              >
                <FiGithub size={14} /> View GitHub Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:hidden p-4">
          <h3 className=" text-xl font-semibold ">Skills & Workflow</h3>
          <div className="bg-white shadow p-6 mt-5 rounded-xl">
            {skills.map((cat) => (
              <div key={cat.category} className="mb-4">
                <h4 className="font-semibold mb-2">{cat.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative px-3 py-1 rounded-full bg-gray-100 text-sm cursor-pointer hover:bg-[#c94a4a] hover:text-white transition"
                    >
                      {skill.name}
                      {skill.projects.length > 0 && (
                        <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded z-10 whitespace-nowrap">
                          Used in: {skill.projects.join(", ")}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* PROJECTS */}
        <section
          id="projects"
          className={`relative lg:col-span-3 py-8 px-4 space-y-6 transition-all duration-700 ${
            activeSection === "projects" ? "active-section" : ""
          }`}
        >
          <h3 className="text-xl font-semibold">Projects</h3>

          {/* Featured */}
          <ProjectCard
            project={projects[0]}
            featured
            setSelectedProject={openModal}
          />

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard project={projects[1]} setSelectedProject={openModal} />
            <div className="grid gap-6">
              <ProjectCard project={projects[2]} />
              <ProjectCard project={projects[3]} />
            </div>
          </div>
        </section>

        {/* SIDEBAR */}
        <aside className="space-y-1 bg-white px-6 flex flex-col-reverse md:flex-col">
          <div className="px-1 py-6 hidden lg:block">
            <h3 className="text-xl font-semibold mb-4">Skills & Workflow</h3>
            {skills.map((cat) => (
              <div key={cat.category} className="mb-4">
                <h4 className="font-semibold mb-2">{cat.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative px-3 py-1 rounded-full bg-gray-100 text-sm cursor-pointer hover:bg-[#c94a4a] hover:text-white transition"
                    >
                      {skill.name}
                      {skill.projects.length > 0 && (
                        <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded z-10 whitespace-nowrap">
                          Used in: {skill.projects.join(", ")}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <hr className="text-gray-300 hidden lg:block" />
          {/* Info */}
          <div className="space-y-1 flex flex-col-reverse md:flex-row lg:flex-col gap-[20px] lg:inline-block">
            <div
              id="contact"
              className={`px-1 py-6 text-sm space-y-2 ${
                activeSection === "contact" ? "active-section" : ""
              }`}
            >
              <h4 className="font-semibold mb-2">Contact Information</h4>
              <a
                href="https://www.google.com/maps?q=Khuzestan,+Iran"
                target="-blank"
                className="flex items-center gap-3"
              >
                <FaMapMarkerAlt /> Iran, Khuzestan
              </a>
              <a
                className="flex items-center gap-3"
                href={`mailto:${"bazrafkannjad.sh@gmail.com"}`}
              >
                <FaEnvelope /> bazrafkannjad.sh@gmail.com
              </a>
              <a
                className="flex items-center gap-3"
                href={`tel:${+989399619640}`}
              >
                <FaPhoneAlt /> +989399619640
              </a>
              {/* Social */}
              <section className="flex justify-center md:justify-start lg:justify-center gap-6 text-xl pt-4">
                <a
                  className="hover:text-black"
                  href="https://github.com/shaghayegh-b"
                  target="-blank"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/shaghayegh-bazrafkannjad-523bb5301"
                  className="hover:text-blue-600"
                >
                  <FaLinkedin />
                </a>
              </section>
            </div>
            <hr className="text-gray-300" />
            <div
              id="contact"
              className={`px-1 py-6 text-sm ${
                activeSection === "contact" ? "active-section" : ""
              }`}
            >
              <h4 className="font-semibold mb-2">Work With Me</h4>
              <p className="text-xs text-gray-500 mb-4">
                Available for freelance and remote front-end projects. Quick
                response, clean code, and on-time delivery.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                <input
                  className="w-full border rounded px-3 py-2"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  name="email"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Email"
                />
                <textarea
                  className="w-full border rounded px-3 py-2"
                  rows={3}
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full py-2 rounded bg-[#c94a4a] text-white"
                >
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>

              <ModalAlert
                isOpen={isModalOpen}
                onClose={() => {
                  setIsModalOpen(false);
                }}
                message={modalMessage}
                timer={4000} // مدت زمان نوار progress
              />
            </div>
          </div>
          <hr className="text-gray-300" />
          {/* کارت دانلود PDF */}
          <div className="my-6">
            <div className="p-1 flex flex-col items-center text-center">
              <h4 className="font-semibold mb-2">Download My Resume</h4>
              <p className="text-sm text-gray-600 mb-3">
                Professional Front-End Developer Resume with skills, projects,
                and contact info.
              </p>
              <a
                href="/bazrafkan-portfolio/ShBResume.pdf"
                download
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#c94a4a] text-white rounded-lg hover:scale-105 transition-transform"
              >
                Download PDF
              </a>
            </div>
          </div>
        </aside>
      </main>
      <footer className="bg-gray-400 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-2 text-center">
          <p className="text-sm">
            My portfolio is a reflection of my growth journey in the world of
            programming and design.
          </p>
          <p className="text-xs ">
            Every line of this site is a piece of my learning path — crafted
            with love and passion :)
          </p>
          <div className="flex gap-2 text-xs">
            <a
              href="https://github.com/shaghayegh-b"
              target="_blank"
              className="hover:text-black"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shaghayegh-bazrafkannjad-523bb5301"
              target="_blank"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:bazrafkannjad.sh@gmail.com"
              className="hover:text-red-800"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-[10px] mt-1">&copy; 2025 Shaghayegh Bazrafkan</p>
        </div>
      </footer>

      {showModal && selectedProject && (
        <div
          onClick={closeModal}
          className={`fixed inset-0 bg-[#0000004a] bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative bg-white overflow-y-auto max-h-[90vh] rounded-lg p-6 max-w-xl w-full transform transition-all duration-300 ${
              animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {selectedProject.subtitle}
            </p>
            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#c94a4a] text-white px-2 py-1 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="text-gray-800 space-y-2 my-4">
              <p>
                <span className="text-lg font-[600]">overview : </span>
                <span className=" ">{selectedProject.caseStudy.overview}</span>
              </p>
              <p>
                <span className="text-lg font-[600]">problem : </span>
                <span className=" ">{selectedProject.caseStudy.problem}</span>
              </p>
              <p>
                <span className="text-lg font-[600]">solution : </span>
                <span className=" ">{selectedProject.caseStudy.solution}</span>
              </p>
              <ul className="list-none pl-0 mt-4 space-y-2">
                {selectedProject.caseStudy.teamSkills?.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-[#c94a4a]"
                  >
                    <FaCheckCircle /> {skill}
                  </li>
                ))}
              </ul>
            </div>
            {/* Bullets */}
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {selectedProject.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-4 flex gap-4">
              <a
                href={selectedProject.LinkRemote}
                target="_blank"
                className="px-4 py-2 bg-[#c94a4a] text-white rounded hover:scale-105 transition-transform"
              >
                View Live
              </a>
              <a
                href={selectedProject.repository}
                target="_blank"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:scale-105 transition-transform"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
