import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { FaCheckCircle, FaTelegram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import mvpBefore1 from "../../assets/imag/beforeafter/mvp-before-1.png";
import mvpAfter1 from "../../assets/imag/beforeafter/mvp-after-1.png";
import mvpBefore2 from "../../assets/imag/beforeafter/mvp-before-2.png";
import mvpAfter2 from "../../assets/imag/beforeafter/mvp-after-2.png";
import mvpBefore3 from "../../assets/imag/beforeafter/mvp-before-3.png";
import mvpAfter3 from "../../assets/imag/beforeafter/mvp-after-3.png";
import mvpBefore4 from "../../assets/imag/beforeafter/mvp-before-4.png";
import mvpAfter4 from "../../assets/imag/beforeafter/mvp-after-4.png";

const MVP_BEFORE_AFTER = [
  { before: mvpBefore1, after: mvpAfter1 },
  { before: mvpBefore2, after: mvpAfter2 },
  { before: mvpBefore3, after: mvpAfter3 },
  { before: mvpBefore4, after: mvpAfter4 },
];
const FEATURED_ORDER = [1, 5, 6, 7, 2];
const OTHER_ORDER = [3, 4];

const PROJECTS_META = [
  {
    id: 1,
    stack: ["React", "Vite", "Tailwind CSS", "Mock API"],
    // Live site is embedded in a mini browser-preview instead of a static screenshot.
    previewUrl: "https://shaghayegh-b.github.io/Fotros/",
    LinkRemote: "https://shaghayegh-b.github.io/Fotros/",
    repository: "https://github.com/shaghayegh-b/Fotros",
  },
  {
    id: 6,
    stack: ["WordPress", "Elementor", "WooCommerce", "Front-End"],
    highlight: true,
    previewUrl: "https://commagp.ir/",
    LinkRemote: "https://commagp.ir/",
  },
  {
    id: 5,
    stack: ["WordPress", "WooCommerce", "Elementor", "E-commerce"],
    previewUrl: "https://peydashoop.ir/",
    LinkRemote: "https://peydashoop.ir/",
  },
  {
    id: 3,
    stack: ["React", "Vite", "Tailwind CSS", "Mock API"],
    previewUrl: "https://shaghayegh-b.github.io/bazrafkan-store/",
    LinkRemote: "https://shaghayegh-b.github.io/bazrafkan-store/",
    repository: "https://github.com/shaghayegh-b/bazrafkan-store",
  },
  {
    id: 7,
    stack: ["UI Redesign", "Front-End", "Responsive Design"],
    status: "local",
    videoUrl: `${import.meta.env.BASE_URL}videos/mvp-demo.mp4`,
    beforeAfterImages: MVP_BEFORE_AFTER,
  },
  {
    id: 2,
    stack: ["React", "API", "Front-End"],
    LinkRemote: "https://app.freebridge.ir/",
    repository: "https://github.com/shaghayegh-b/Yelena-F-public",
  },
  {
    id: 4,
    stack: ["React", "Tailwind CSS", "Vite", "GitHub Pages"],
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
import WebsitePreview from "../../components/WebsitePreview/WebsitePreview";
import VideoPreview from "../../components/VideoPreview/VideoPreview";

export default function Home() {
  const { t, i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  const projects = PROJECTS_META.map((meta) => ({
    ...meta,
    ...t(`projects.${meta.id}`, { returnObjects: true }),
  }));
  const byId = (id) => projects.find((p) => p.id === id);
  const heroProject = byId(FEATURED_ORDER[0]);
  const featuredGridProjects = FEATURED_ORDER.slice(1).map(byId);
  const otherProjects = OTHER_ORDER.map(byId);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = isFa ? "rtl" : "ltr";
  }, [i18n.language, isFa]);

  const toggleLanguage = () => {
    i18n.changeLanguage(isFa ? "en" : "fa");
  };

  const formRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false); // نمایش واقعی مودال
  const [animate, setAnimate] = useState(false); // کنترل انیمیشن ورود/خروج
  const [showBeforeAfter, setShowBeforeAfter] = useState(false); // نمایش گالری قبل/بعد
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
        "rOjFwGiu24iaiLyIE",
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
        },
      );
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    setShowBeforeAfter(false);
    setTimeout(() => setAnimate(true), 10); // شروع انیمیشن ورود بعد از رندر
  };

  const closeModal = () => {
    setAnimate(false);
    setTimeout(() => {
      setShowModal(false);
      setSelectedProject(null);
      setShowBeforeAfter(false);
    }, 300);
  };
  const skills = [
    {
      category: "Front-End",
      items: [
        { name: "HTML", projects: ["All Projects"] },
        { name: "CSS", projects: ["All Projects"] },
        { name: "JavaScript", projects: ["All Projects"] },
        { name: "React", projects: ["Fotros", "Bazrafkan Store", "Portfolio"] },
        { name: "React Router", projects: ["Portfolio"] },
      ],
    },
    {
      category: "UI & Styling",
      items: [
        {
          name: "Tailwind CSS",
          projects: ["Fotros", "Bazrafkan Store", "Portfolio"],
        },
        { name: "Sass", projects: [] },
        { name: "Bootstrap", projects: ["Portfolio"] },
        { name: "Responsive Design", projects: ["All Projects"] },
      ],
    },
    {
      category: "API & Data",
      items: [
        { name: "REST API", projects: ["Fotros", "Bazrafkan Store"] },
        { name: "Axios", projects: ["Portfolio"] },
        { name: "Fetch", projects: ["Fotros", "Bazrafkan Store"] },
        { name: "React Query", projects: [] },
      ],
    },
    {
      category: "Development Tools",
      items: [
        { name: "Git", projects: ["All Projects"] },
        { name: "GitHub", projects: ["All Projects"] },
        { name: "Git Flow", projects: [] },
        { name: "Vite", projects: ["All Projects"] },
        { name: "Figma", projects: ["Fotros"] },
      ],
    },
    {
      category: "WordPress",
      items: [
        { name: "WordPress", projects: ["Peyda", "Marketyar", "WebAray"] },
        { name: "WooCommerce", projects: ["Peyda"] },
        { name: "Elementor", projects: ["Peyda", "Marketyar", "WebAray"] },
        { name: "PHP / Theme Customization", projects: ["Marketyar"] },
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
          <nav className="flex items-center gap-3 md:gap-8 text-sm text-gray-300">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#a93a3a]"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-[#a93a3a]"
            >
              {t("nav.projects")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#a93a3a]"
            >
              {t("nav.contact")}
            </button>
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded border border-gray-500 text-xs hover:border-[#a93a3a] hover:text-[#a93a3a]"
            >
              {isFa ? "EN" : "فا"}
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
              <span className="font-bold">{t("hero.name")}</span>
            </h2>
            <h3 className="mt-2 text-lg text-[#c94a4a] font-medium">
              {t("hero.role")}
            </h3>

            <p className="mt-4 max-w-3xl leading-relaxed text-gray-700">
              {t("hero.bio1")}
            </p>

            <p className="mt-3 max-w-3xl text-sm text-gray-600">
              {t("hero.bio2")}
            </p>

            <p className="mt-3 max-w-3xl text-sm text-gray-600">
              {t("hero.bio3")}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2.5 rounded-lg bg-[#c94a4a] text-white text-sm font-medium hover:scale-105 transition-transform"
              >
                {t("hero.hireBtn")}
              </button>

              <a
                href="/bazrafkan-portfolio/ShBResume.pdf"
                download
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-gray-200 text-sm flex items-center gap-2 hover:bg-gray-300 transition"
              >
                <FiExternalLink size={14} /> {t("hero.downloadResume")}
              </a>

              <a
                href="https://github.com/shaghayegh-b"
                className="px-5 py-2 rounded-lg bg-[#494c60] text-white text-sm flex items-center gap-2 hover:bg-[#62657d] transition"
              >
                <FiGithub size={14} /> {t("hero.viewGithub")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:hidden p-4">
          <h3 className=" text-xl font-semibold ">
            {t("skillsSection.title")}
          </h3>
          <div className="bg-white shadow p-6 mt-5 rounded-xl">
            {skills.map((cat) => (
              <div key={cat.category} className="mb-4">
                <h4 className="font-semibold mb-2">
                  {t(`skillCategories.${cat.category}`)}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative px-3 py-1 rounded-full bg-gray-100 text-sm cursor-pointer hover:bg-[#c94a4a] hover:text-white transition"
                    >
                      {skill.name}
                      {skill.projects.length > 0 && (
                        <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded z-10 whitespace-nowrap">
                          {t("skillsSection.usedIn")}{" "}
                          {skill.projects.join(", ")}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p className="mt-2 text-xs text-gray-400 italic">
              {t("skillsSection.aiNote")}
            </p>
          </div>
        </div>
        {/* PROJECTS */}
        <section
          id="projects"
          className={`relative lg:col-span-3 py-8 px-4 space-y-6 transition-all duration-700 ${
            activeSection === "projects" ? "active-section" : ""
          }`}
        >
          <h3 className="text-xl font-semibold">
            {t("projectsSection.title")}
          </h3>

          {/* Featured hero */}
          <ProjectCard
            project={heroProject}
            featured
            setSelectedProject={openModal}
          />

          {/* Featured grid — Peyda, Marketyar, MVP, Yelena, in that order */}
          <div className="grid md:grid-cols-2 gap-6">
            {featuredGridProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                highlight={project.highlight}
                setSelectedProject={openModal}
              />
            ))}
          </div>

          {/* Other Projects — simpler, less prominent cards */}
          <h3 className="text-xl font-semibold">
            {t("projectsSection.otherProjectsTitle")}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                compact
                setSelectedProject={openModal}
              />
            ))}
          </div>
        </section>

        {/* SIDEBAR */}
        <aside className="space-y-1 bg-white px-6 flex flex-col-reverse md:flex-col">
          <div className="px-1 py-6 hidden lg:block">
            <h3 className="text-xl font-semibold mb-4">
              {t("skillsSection.title")}
            </h3>
            {skills.map((cat) => (
              <div key={cat.category} className="mb-4">
                <h4 className="font-semibold mb-2">
                  {t(`skillCategories.${cat.category}`)}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative px-3 py-1 rounded-full bg-gray-100 text-sm cursor-pointer hover:bg-[#c94a4a] hover:text-white transition"
                    >
                      {skill.name}
                      {skill.projects.length > 0 && (
                        <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded z-10 whitespace-nowrap">
                          {t("skillsSection.usedIn")}{" "}
                          {skill.projects.join(", ")}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p className="mt-2 text-xs text-gray-400 italic">
              {t("skillsSection.aiNote")}
            </p>
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
              <h4 className="font-semibold mb-2">{t("contactInfo.title")}</h4>
              <a
                href="https://www.google.com/maps?q=Khuzestan,+Iran"
                target="-blank"
                className="flex items-center gap-3"
              >
                <FaMapMarkerAlt /> {t("contactInfo.location")}
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
                <a href="t.me/front_shaghayegh" className="hover:text-blue-900">
                  <FaTelegram />
                </a>
                <a
                  href="mailto:bazrafkannjad.sh@gmail.com"
                  className="hover:text-red-800"
                >
                  <FaEnvelope />
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
              <h4 className="font-semibold mb-2">{t("workWithMe.title")}</h4>
              <p className="text-xs text-gray-500 mb-4">
                {t("workWithMe.text")}
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                <input
                  className="w-full border rounded px-3 py-2"
                  placeholder={t("workWithMe.namePlaceholder")}
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
                  placeholder={t("workWithMe.emailPlaceholder")}
                />
                <textarea
                  className="w-full border rounded px-3 py-2"
                  rows={3}
                  placeholder={t("workWithMe.messagePlaceholder")}
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
                  {formStatus === "sending"
                    ? t("workWithMe.sending")
                    : t("workWithMe.send")}
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
              <h4 className="font-semibold mb-2">{t("resumeCard.title")}</h4>
              <p className="text-sm text-gray-600 mb-3">
                {t("resumeCard.text")}
              </p>
              <a
                href="/bazrafkan-portfolio/ShBResume.pdf"
                download
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#c94a4a] text-white rounded-lg hover:scale-105 transition-transform"
              >
                {t("resumeCard.button")}
              </a>
            </div>
          </div>
        </aside>
      </main>
      <footer className="bg-gray-400 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-2 text-center">
          <p className="text-sm">{t("footer.p1")}</p>
          <p className="text-xs ">{t("footer.p2")}</p>
          <div className="flex gap-2 text-lg">
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
            <a href="t.me/front_shaghayegh" className="hover:text-blue-900">
              <FaTelegram />
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

            <div className="text-gray-800 space-y-3 my-4">
              {selectedProject.caseStudy?.intro && (
                <p>
                  <span className="text-lg font-[600]">
                    {t("modal.intro")} :{" "}
                  </span>
                  <span> </span>
                  {selectedProject.caseStudy.intro}
                </p>
              )}
              {selectedProject.caseStudy?.role && (
                <p>
                  <span className="text-lg font-[600]">
                    {t("modal.role")} :{" "}
                  </span>
                  <span> </span>
                  {selectedProject.caseStudy.role}
                </p>
              )}
              {selectedProject.caseStudy?.challenge && (
                <p>
                  <span className="text-lg font-[600]">
                    {t("modal.challenge")} :{" "}
                  </span>
                  <span> </span>
                  {selectedProject.caseStudy.challenge}
                </p>
              )}
              {selectedProject.caseStudy?.solution && (
                <p>
                  <span className="text-lg font-[600]">
                    {t("modal.solution")} :{" "}
                  </span>
                  <span> </span>
                  {selectedProject.caseStudy.solution}
                </p>
              )}
              {selectedProject.caseStudy?.teamSkills?.length > 0 && (
                <ul className="list-none pl-0 space-y-2">
                  {selectedProject.caseStudy.teamSkills.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-[#c94a4a]"
                    >
                      <FaCheckCircle /> {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Technical Details */}
            {selectedProject.caseStudy?.technicalBullets?.length > 0 && (
              <div className="mb-4">
                <span className="text-lg font-[600]">
                  {t("modal.technical")}
                </span>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
                  {selectedProject.caseStudy.technicalBullets.map(
                    (point, i) => (
                      <li key={i}>{point}</li>
                    ),
                  )}
                </ul>
              </div>
            )}

            {/* Before / After */}
            {selectedProject.beforeAfterImages?.length > 0 && (
              <div className="mb-4">
                <button
                  onClick={() => setShowBeforeAfter((v) => !v)}
                  className="px-4 py-2 rounded border border-[#c94a4a] text-[#c94a4a] text-sm font-medium hover:bg-[#c94a4a] hover:text-white transition"
                >
                  {showBeforeAfter
                    ? t("modal.hideBeforeAfter")
                    : t("modal.showBeforeAfter")}
                </button>

                {showBeforeAfter && (
                  <div className="mt-4 space-y-6">
                    {selectedProject.beforeAfterImages.map((pair, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                      >
                        <div>
                          <span className="block text-xs font-semibold text-gray-500 mb-1">
                            {t("modal.before")}
                          </span>
                          <img
                            src={pair.before}
                            alt={`before-${i}`}
                            className="w-full h-auto rounded-lg border border-gray-200"
                          />
                        </div>
                        <div>
                          <span className="block text-xs font-semibold text-gray-500 mb-1">
                            {t("modal.after")}
                          </span>
                          <img
                            src={pair.after}
                            alt={`after-${i}`}
                            className="w-full h-auto rounded-lg border border-gray-200"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Media / Preview */}
            {(selectedProject.previewUrl ||
              selectedProject.videoUrl ||
              selectedProject.videoEmbedUrl) && (
              <div className="mb-4">
                {selectedProject.caseStudy?.beforeAfterTitle && (
                  <span className="text-lg font-[600] block mb-2">
                    {selectedProject.caseStudy.beforeAfterTitle}
                  </span>
                )}
                {selectedProject.previewUrl ? (
                  <WebsitePreview
                    url={selectedProject.previewUrl}
                    title={selectedProject.title}
                    height="14rem"
                  />
                ) : (
                  <VideoPreview
                    src={selectedProject.videoUrl}
                    embedUrl={selectedProject.videoEmbedUrl}
                    title={selectedProject.title}
                    height="14rem"
                  />
                )}
              </div>
            )}

            {/* CTA */}
            <div className="mt-4 flex flex-wrap gap-4">
              {selectedProject.LinkRemote ? (
                <a
                  href={selectedProject.LinkRemote}
                  target="_blank"
                  className="px-4 py-2 bg-[#c94a4a] text-white rounded hover:scale-105 transition-transform"
                >
                  {selectedProject.linkLabel || t("modal.viewLive")}
                </a>
              ) : (
                <>
                  {(selectedProject.videoUrl ||
                    selectedProject.videoEmbedUrl) && (
                    <a
                      href={
                        selectedProject.videoUrl ||
                        selectedProject.videoEmbedUrl
                      }
                      target="_blank"
                      className="px-4 py-2 bg-[#c94a4a] text-white rounded hover:scale-105 transition-transform"
                    >
                      {t("projectsSection.watchVideo")}
                    </a>
                  )}
                  <span className="px-4 py-2 bg-gray-100 text-gray-500 rounded border border-dashed border-gray-300">
                    {t("projectsSection.localDemo")}
                  </span>
                </>
              )}
              {selectedProject.repository && (
                <a
                  href={selectedProject.repository}
                  target="_blank"
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:scale-105 transition-transform"
                >
                  {t("modal.github")}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
