import Image from "next/image";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
