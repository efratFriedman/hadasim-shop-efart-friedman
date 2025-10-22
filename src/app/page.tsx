"use client";
import React from "react";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import Card from "./components/Card/Card";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.content}>
        <Card
          image="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
          title="Summer Dress"
          description="A-line summer dress with delicate floral print, pockets and adjustable straps."
          price={49.99}
        />

        <Card
          image="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg"
          title="Casual Jacket"
          description="Comfortable and modern casual jacket for everyday wear."
          price={79.99}
        />

        <Card
          image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
          title="Classic T-shirt"
          description="Quality t-shirt made from soft cotton, available in various colors."
          price={29.99}
        />

        <Card
          image="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
          title="Floral Midi Dress"
          description="Midi dress with colorful floral print, perfect for special occasions."
          price={59.99}
        />

        <Card
          image="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg"
          title="Leather Jacket"
          description="Black leather jacket with zipper, classic rock style."
          price={99.99}
        />

        <Card
          image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
          title="Printed T-shirt"
          description="T-shirt with modern graphic print, perfect for a casual look."
          price={34.99}
        />
      </main>


      <Footer />
    </div>
  );
}
