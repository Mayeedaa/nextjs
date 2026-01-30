import styles from "./SkillCard.module.css";

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
