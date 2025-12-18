import React from "react";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
const projects = [
  {
    id: 1,
    title: "Advanced Clothing Store",
    subtitle: "Personal Project",
    stack: ["React", "Tailwind CSS", "E-commerce", "Github"],
    featured: true,
    bullets: [
      "Built a fully responsive e-commerce UI focused on conversion-ready layouts",
      "Designed scalable and reusable React components suitable for production",
      "Implemented pixel-perfect UI from real Figma designs",
      "Optimized layout performance and responsiveness across devices",
    ],
    mylink: "https://shaghayegh-b.github.io/Fotros/",
    repository: "https://github.com/shaghayegh-b/Fotros",
  },
  {
    id: 2,
    title: "Blockchain Web Application",
    subtitle: "Team Project",
    stack: ["React", "JavaScript", "API", "Github"],
    bullets: [
      "Collaborated with a front-end team using Git & GitHub for version control",
      "Developed responsive UI components based on shared design requirements",
      "Integrated REST APIs and handled dynamic data rendering",
    ],
    mylink: "https://app.freebridge.ir/",
    repository: "https://github.com/shaghayegh-b/Yelena-F-public",
  },
  {
    id: 3,
    title: "Simple Clothing Store",
    stack: ["React", "Tailwind CSS"],
    bullets: [
      "Built as a practice e-commerce project",
      "Focused on layout and responsiveness",
    ],
    mylink: "https://shaghayegh-b.github.io/bazrafkan-store/",
    repository: "https://github.com/shaghayegh-b/bazrafkan-store",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    subtitle: "Personal Project",
    stack: ["React", "Tailwind CSS", "Vite"],
    bullets: [
      "Designed and developed a personal portfolio website",
      "Deployed using GitHub Pages",
    ],
    mylink: "https://shaghayegh-b.github.io/bazrafkan-portfolio/",
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
export default function Home() {
  const skills = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiGit />, name: "Git" },
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
            <a
              onClick={() => scrollToSection("about")}
              className="hover:text-[#a93a3a]"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className="hover:text-[#a93a3a]"
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#a93a3a]"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="about"
        style={{ backgroundImage: `url(${back})` }}
        className={`bg-cover bg-center ${
          activeSection === "about" ? "active-section" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/avatar.png"
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
              Front-End Developer who builds fast, responsive, and
              production-ready web applications. Specialized in turning Figma
              designs into clean, scalable interfaces for real-world projects,
              startups, and e-commerce platforms.
            </p>

            <p className="mt-3 max-w-3xl text-sm text-gray-600">
              2+ years of hands-on practice building responsive UI, reusable
              components, and production-ready front-ends with React and
              Tailwind CSS.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="box-shadow px-6 py-2.5 rounded-lg bg-[#c94a4a] text-white text-sm font-medium"
              >
                Hire Me for Front-End Projects
              </button>

              <button
                onClick={() => window.print()}
                title="print"
                className="box-shadow px-5 py-2 rounded-lg bg-gray-200 text-sm flex items-center gap-2"
              >
                <FiExternalLink size={14} /> Download Resume (PDF)
              </button>

              <a
                href="https://github.com/shaghayegh-b"
                className="box-shadow px-5 py-2 rounded-lg bg-[#494c60] text-white text-sm flex items-center gap-2"
              >
                <FiGithub size={14} /> View GitHub Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* PROJECTS */}
        <section
          id="projects"
          className={`relative lg:col-span-3 py-8 px-4 space-y-6 transition-all duration-700 ${
            activeSection === "projects" ? "active-section" : ""
          }`}
        >
          <h3 className="text-xl font-semibold">Projects</h3>

          {/* Featured */}
          <ProjectCard project={projects[0]} featured />

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard project={projects[1]} id />
            <div className="grid gap-6">
              <ProjectCard project={projects[2]} />
              <ProjectCard project={projects[3]} />
            </div>
          </div>
        </section>

        {/* SIDEBAR */}
        <aside className="space-y-1 bg-white px-6">
          <div className="px-1 py-6">
            <h3 className="font-semibold mb-4 text-center">
              Skills & Workflow
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-gray-100 hover:bg-gray-900 hover:text-white transition"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-xs">{skill.name}</span>
                </div>
              ))}
            </div>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>• Building responsive and scalable React applications</li>
              <li>• Component-based architecture using React Hooks</li>
              <li>• Pixel-perfect UI implementation from Figma designs</li>
              <li>• REST API integration and async data handling</li>
            </ul>
          </div>
          <hr className="text-gray-300" />
          {/* Info */}
         <div className="space-y-1 md:flex gap-[20px] lg:inline-block">
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
              <a className="hover:text-blue-600" href="#">
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

            <div className="space-y-3">
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Your Name"
              />
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Email"
              />
              <textarea
                className="w-full border rounded px-3 py-2"
                rows={3}
                placeholder="Message"
              />
              <button className="box-shadow w-full py-2 rounded bg-[#c94a4a] text-white">
                Send Message
              </button>
            </div>
          </div>
          </div>
        </aside>
      </main>
      <footer className=" mt-3 bg-gray-400 px-4 py-10">
        <div className="footer flex flex-col gap-[.5rem] items-center justify-between">
          <p className="p-1 text-center ">
            My portfolio is a reflection of my growth journey in the world of
            programming and design.
          </p>
          <div className="p-1  text-.9rem text-center">
            <p className="footer2 text-[.8rem]">
              Built with React and Tailwind CSS, powered by Vite, and deployed
              via "
              <a
                className="text-blue-900"
                target="-blank"
                href="https://github.com/shaghayegh-b/bazrafkan-portfolio"
              >
                GitHub Pages
              </a>
              .
            </p>
            <p className=" text-[.8rem] ">
              Designed and developed with a focus on speed, simplicity, and
              responsiveness using modern web technologies.
            </p>
          </div>
          <p className="p-1 text-center">
            Every line of this site is a piece of my learning path — crafted
            with love and passion :)
          </p>
        </div>
      </footer>
    </div>
  );
}
