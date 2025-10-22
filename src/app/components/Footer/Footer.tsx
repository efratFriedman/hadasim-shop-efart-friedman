"use client";
import Link from "next/link";
import styles from '@/app/components/Footer/Footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>MySite</div>

        <ul className={styles.links}>
          <li><Link href="/" className={styles.link}>Home</Link></li>
          <li><Link href="/about" className={styles.link}>About</Link></li>
          <li><Link href="/contact" className={styles.link}>Contact</Link></li>
        </ul>

        <div className={styles.socials}>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} MySite | כל הזכויות שמורות
      </div>
    </footer>
  );
}
