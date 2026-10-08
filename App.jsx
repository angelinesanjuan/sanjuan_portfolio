import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [message, setMessage] = useState("");

  // ================= PROJECTS =================
  const projects = [
    {
      id: 1,
      title: "Calculator",
      description:
        "A simple calculator application that performs basic mathematical operations.",
      details:
        "This calculator project allows users to perform basic mathematical calculations using an interactive and responsive interface.",
      link: "https://calculator-app-sable-six.vercel.app",
    },

    {
      id: 2,
      title: "To-Do List",
      description:
        "A task management application for adding, completing, and managing daily tasks.",
      details:
        "This To-Do List project allows users to create, complete, and manage tasks through an interactive interface.",
      link: "https://todo-list-pearl-two-92.vercel.app",
    },
  ];

  // ================= CONTACT FORM =================
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    if (
      !form.name.value ||
      !form.email.value ||
      !form.message.value
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage("Message sent successfully!");
    form.reset();
  };

  // ================= NAVIGATION =================
  const navItems = [
    ["Home", "home"],
    ["About", "about"],
    ["Projects", "projects"],
    ["Resume", "resume"],
    ["Contact", "contact"],
  ];

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-950 text-white"
          : "min-h-screen bg-gray-100 text-gray-900"
      }
    >
      {/* ================= NAVBAR ================= */}
      <nav
        className={
          darkMode
            ? "fixed top-0 z-50 w-full bg-gray-900 shadow-lg"
            : "fixed top-0 z-50 w-full bg-white shadow-lg"
        }
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <h1 className="text-xl font-bold">
            Angeline San Juan
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden gap-6 md:flex">
            {navItems.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="font-medium transition hover:text-blue-500"
              >
                {name}
              </a>
            ))}
          </div>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 overflow-x-auto border-t px-4 py-3 md:hidden">
          {navItems.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="whitespace-nowrap text-sm font-medium hover:text-blue-500"
            >
              {name}
            </a>
          ))}
        </div>
      </nav>

      {/* ================= HOME ================= */}
      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-6 pt-32"
      >
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-3 text-lg font-medium text-blue-600">
            Welcome to My E-Portfolio
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-6xl">
            Hello, I'm
            <span className="text-blue-600">
              {" "}Angeline San Juan
            </span>
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            I'm currently a 3rd year student taking up Bachelor
            of Science in Information Technology at Cavite State
            University - Tanza Campus.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              Contact Me
            </a>

          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <h2 className="mb-3 text-center text-4xl font-bold">
            About Me
          </h2>

          <p className="mb-12 text-center text-gray-500">
            Personal Background, Skills and Interests
          </p>

          <div className="grid gap-8 md:grid-cols-2">

            {/* Background */}
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-900">

              <div className="mb-4 text-4xl">
                👩‍💻
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Personal Background
              </h3>

              <p className="leading-7 text-gray-500 dark:text-gray-400">
                I am a 3rd year Bachelor of Science in Information
                Technology student at Cavite State University -
                Tanza Campus. I am interested in application
                development, web development, and modern
                technologies.
              </p>

            </div>

            {/* Skills */}
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-900">

              <div className="mb-4 text-4xl">
                💡
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Skills & Interests
              </h3>

              <div className="flex flex-wrap gap-3">

                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "ReactJS",
                  "Tailwind CSS",
                  "GitHub",
                  "UI Design",
                  "Web Development",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="bg-gray-200 px-6 py-24 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-6xl">

          <h2 className="mb-3 text-center text-4xl font-bold">
            Projects / Work Samples
          </h2>

          <p className="mb-12 text-center text-gray-500">
            Some of my projects and applications
          </p>

          <div className="grid gap-8 md:grid-cols-2">

            {projects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden rounded-2xl bg-white shadow-md dark:bg-gray-800"
              >

                {/* Project Icon */}
                <div className="flex h-48 items-center justify-center bg-blue-100 text-7xl">
                  {project.id === 1 ? "🧮" : "📝"}
                </div>

                <div className="p-6">

                  <h3 className="mb-3 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">

                    {/* View Project */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                    >
                      View Project
                    </a>

                    {/* Details */}
                    <button
                      onClick={() =>
                        setSelectedProject(
                          selectedProject === project.id
                            ? null
                            : project.id
                        )
                      }
                      className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                      {selectedProject === project.id
                        ? "Hide Details"
                        : "Details"}
                    </button>

                  </div>

                  {/* Project Details */}
                  {selectedProject === project.id && (
                    <div className="mt-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
                      <p className="text-sm leading-6">
                        {project.details}
                      </p>
                    </div>
                  )}

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= RESUME ================= */}
      <section
        id="resume"
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-3 text-center text-4xl font-bold">
            Resume / CV
          </h2>

          <p className="mb-12 text-center text-gray-500">
            My education, experience and skills
          </p>

          <div className="grid gap-8 md:grid-cols-3">

            {/* Education */}
            <div className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">

              <h3 className="mb-4 text-xl font-bold text-blue-600">
                🎓 Education
              </h3>

              <div className="space-y-6">

                <div>
                  <h4 className="font-semibold">
                    Antonio B. Del Rosario Sr. Mem. Elementary School
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Elementary
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    2011 - 2015
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Tanza National Trade School - Annex
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Junior High School
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    2016 - 2020
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Tanza National Trade School
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Senior High School
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    2022 - 2024
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Cavite State University - Tanza Campus
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Bachelor of Science in Information Technology
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    2024 - Present
                  </p>
                </div>

              </div>
            </div>

            {/* Experience */}
            <div className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">

              <h3 className="mb-4 text-xl font-bold text-blue-600">
                💼 Experience
              </h3>

              <h4 className="font-semibold">
                Academic Project
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Developed academic projects involving simple
                websites, ReactJS, JavaScript, and responsive
                user interfaces.
              </p>

            </div>

            {/* Skills */}
            <div className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">

              <h3 className="mb-4 text-xl font-bold text-blue-600">
                🛠️ Skills
              </h3>

              <ul className="space-y-2 text-sm text-gray-500">
                <li>✓ ReactJS</li>
                <li>✓ JavaScript</li>
                <li>✓ HTML & CSS</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ Git & GitHub</li>
                <li>✓ Responsive Design</li>
              </ul>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="bg-gray-200 px-6 py-24 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-3 text-center text-4xl font-bold">
            Contact Information
          </h2>

          <p className="mb-12 text-center text-gray-500">
            Feel free to contact me
          </p>

          <div className="grid gap-10 md:grid-cols-2">

            {/* Contact Info */}
            <div>

              <h3 className="mb-6 text-2xl font-bold">
                Get In Touch
              </h3>

              <div className="space-y-5">

                <div>
                  <p className="font-semibold">
                    📧 Email
                  </p>

                  <p className="text-gray-500">
                    sanjuanangeline008@email.com
                  </p>
                </div>

                <div>
                  <p className="font-semibold">
                    📱 Phone
                  </p>

                  <p className="text-gray-500">
                    +63 9483905226
                  </p>
                </div>

                <div>
                  <p className="font-semibold">
                    📍 Location
                  </p>

                  <p className="text-gray-500">
                    Philippines
                  </p>
                </div>

                <div>
                  <p className="font-semibold">
                    🔗 Social Links
                  </p>

                  <div className="mt-3 flex gap-3">

                    <a
                      href="https://github.com/angelinesanjuan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-gray-900 px-4 py-2 text-white transition hover:bg-gray-700"
                    >
                      GitHub
                    </a>

                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-800"
            >

              <div className="mb-4">

                <label className="mb-2 block font-medium">
                  Name
                </label>

                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
                />

              </div>

              <div className="mb-4">

                <label className="mb-2 block font-medium">
                  Email
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
                />

              </div>

              <div className="mb-4">

                <label className="mb-2 block font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your message..."
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
                ></textarea>

              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Send Message
              </button>

              {message && (
                <p className="mt-4 text-center font-medium text-blue-600">
                  {message}
                </p>
              )}

            </form>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-950 px-6 py-8 text-center text-white">

        <p>
          © 2026 Angeline San Juan. All Rights Reserved.
        </p>

        <p className="mt-2 text-sm text-gray-400">
          Built with ReactJS and Tailwind CSS
        </p>

      </footer>

    </div>
  );
}

export default App;