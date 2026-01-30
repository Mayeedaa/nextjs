import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkillCard from "./components/SkillCard";
import styles from "./page.module.css";

export default function Home() {
  const skills = [
    {
      icon: "🚀",
      title: "Web Development",
      description:
        "Building responsive and modern web applications with React and Next.js",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces with attention to detail",
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description:
        "Developing scalable server-side applications and RESTful APIs",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description:
        "Creating mobile applications for iOS and Android platforms",
    },
    {
      icon: "🔐",
      title: "Security",
      description:
        "Implementing secure authentication and data protection measures",
    },
    {
      icon: "📊",
      title: "Data Analysis",
      description:
        "Analyzing and visualizing data to drive business decisions",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1>Welcome to My Portfolio</h1>
              <p className={styles.subtitle}>
                I'm a passionate developer and designer creating amazing digital
                experiences
              </p>
              <div className={styles.heroCTA}>
                <a href="#projects" className={styles.buttonPrimary}>
                  View My Work
                </a>
                <a href="/contact" className={styles.buttonSecondary}>
                  Get in Touch
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/hero-image.svg"
                alt="Hero illustration"
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.skills}>
          <div className={styles.container}>
            <h2>My Skills</h2>
            <div className={styles.skillsGrid}>
              {skills.map((skill) => (
                <SkillCard
                  key={skill.title}
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Let's Work Together</h2>
            <p>
              I'm always interested in hearing about new projects and
              opportunities.
            </p>
            <a href="/contact" className={styles.buttonPrimary}>
              Start a Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
