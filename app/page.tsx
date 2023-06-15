import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a
          href="https://codesandbox.io/u/DeveloperLuisF3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            DeveloperLuisF3&nbsp;
            <code className={styles.code}>/code</code>
          </p>
        </a>

        <div>
          <a href="#" rel="noopener noreferrer">
            By{" "}
            <Image
              src="/luisf3.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={75}
              height={75}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.logo}></div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.facebook.com/profile.php?id=100075811754998"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.facebook}>
            Facebook <span>-&gt;</span>
          </h2>
          <p className={styles.facebook}>Developer LuisF3</p>
        </a>

        <a
          href="https://www.instagram.com/developer_luisf3/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.instagram}>
            Instagram <span>-&gt;</span>
          </h2>
          <p className={styles.instagram}>developer_luisf3</p>
        </a>

        <a
          href="https://github.com/DeveloperLuisF3"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.git}>
            Git/Hub <span>-&gt;</span>
          </h2>
          <p className={styles.git}>Developer LuisF3</p>
        </a>

        <a
          href="https://www.youtube.com/channel/UCUe93GaLtWWz_c2vbhlFP9A"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.youtube}>
            YouTube <span>-&gt;</span>
          </h2>
          <p className={styles.youtube}>Developer LuisF3</p>
        </a>
      </div>
    </main>
  );
}
