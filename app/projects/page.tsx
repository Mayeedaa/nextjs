import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Check out my latest projects and work samples",
};

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
      image: "/project1.svg",
      technologies: ["Next.js", "React", "Stripe", "PostgreSQL"],
      link: "https://example.com/ecommerce",
      github: "https://github.com/example/ecommerce",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/project2.svg",
      technologies: ["React", "Firebase", "Tailwind CSS", "WebSocket"],
      link: "https://example.com/tasks",
      github: "https://github.com/example/tasks",
    },
    {
      title: "Analytics Dashboard",
      description:
        "An interactive analytics dashboard for visualizing business metrics and generating reports.",
      image: "/project3.svg",
      technologies: ["React", "D3.js", "Redux", "Node.js"],
      link: "https://example.com/analytics",
      github: "https://github.com/example/analytics",
    },
    {
      title: "Social Media App",
      description:
        "A social networking platform with user profiles, messaging, and content sharing capabilities.",
      image: "/project4.svg",
      technologies: ["Next.js", "MongoDB", "Socket.io", "AWS"],
      link: "https://example.com/social",
      github: "https://github.com/example/social",
    },
    {
      title: "Weather Forecast App",
      description:
        "A real-time weather application with detailed forecasts, weather alerts, and location tracking.",
      image: "/project5.svg",
      technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
      link: "https://example.com/weather",
      github: "https://github.com/example/weather",
    },
    {
      title: "Blog Platform",
      description:
        "A modern blogging platform with markdown support, comments, and social sharing features.",
      image: "/project6.svg",
      technologies: ["Next.js", "MDX", "Prisma", "Vercel"],
      link: "https://example.com/blog",
      github: "https://github.com/example/blog",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className={styles.container} id="projects">
          <div className={styles.header}>
            <h1>My Projects</h1>
            <p>
              Explore some of my recent work and personal projects that showcase
              my skills and expertise.
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
                github={project.github}
              />
            ))}
          </div>

          {/* Filter/Category Section */}
          <section className={styles.stats}>
            <div className={styles.statCard}>
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statCard}>
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
            <div className={styles.statCard}>
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.statCard}>
              <h3>100%</h3>
              <p>Code Quality</p>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
