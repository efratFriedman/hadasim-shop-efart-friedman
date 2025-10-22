"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "@/app/components/Header/Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/logo/Hadasim_logo_-_header.png"
          alt="Hadassim Logo"
          width={150}
          height={50}
          priority
          style={{ 
            objectFit: 'contain',
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </Link>

      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
      </nav>

      <button className={styles.loginBtn}><Link href="/form">sign up</Link></button>
    </header>
  );
}
