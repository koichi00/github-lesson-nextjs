import styles from "./style.module.css";
export default function Button({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) {
  return (
    <a className={styles.button} href={`/${link}`}>
      {children}
    </a>
  );
}
