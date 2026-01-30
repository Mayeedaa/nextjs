import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "Learn more about my background, experience, and expertise",
};

export default function About() {
  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      duration: "2022 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      duration: "2020 - 2022",
      description:
        "Developed and maintained multiple client-facing web applications with a focus on user experience.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      duration: "2019 - 2020",
      description:
        "Contributed to various web development projects and learned industry best practices.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      year: "2019",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy",
      year: "2019",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className={styles.container}>
          <h1>About Me</h1>

          {/* Bio Section */}
          <div className={styles.bioSection}>
            <div className={styles.bioContent}>
              <h2>Who am I?</h2>
              <p>
                I'm a passionate full-stack developer with 5+ years of
                experience building web applications that solve real-world
                problems. I specialize in creating performant, scalable, and
                user-friendly applications using modern technologies.
              </p>
              <p>
                My journey in tech started with a curiosity about how things
                work. What began as a hobby has evolved into a career where I
                combine technical expertise with creative problem-solving to
                deliver exceptional digital products.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open
                source projects, writing technical blog posts, or exploring new
                technologies to stay ahead of the curve.
              </p>
            </div>
            <div className={styles.bioImage}>
              <Image
                src="/profile-image.svg"
                alt="Profile picture"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Experience Section */}
          <section className={styles.experienceSection}>
            <h2>Experience</h2>
            <div className={styles.timeline}>
              {experience.map((job, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h3>{job.title}</h3>
                    <p className={styles.company}>{job.company}</p>
                    <p className={styles.duration}>{job.duration}</p>
                    <p>{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className={styles.educationSection}>
            <h2>Education</h2>
            <div className={styles.educationGrid}>
              {education.map((edu, index) => (
                <div key={index} className={styles.educationCard}>
                  <h3>{edu.degree}</h3>
                  <p className={styles.institution}>{edu.institution}</p>
                  <p className={styles.year}>{edu.year}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies Section */}
          <section className={styles.technologiesSection}>
            <h2>Technologies & Tools</h2>
            <div className={styles.techGrid}>
              <div className={styles.techCategory}>
                <h3>Frontend</h3>
                <ul>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Vue.js</li>
                </ul>
              </div>
              <div className={styles.techCategory}>
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className={styles.techCategory}>
                <h3>Tools & DevOps</h3>
                <ul>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>GitHub Actions</li>
                  <li>Vercel</li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
