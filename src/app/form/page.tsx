"use client";
import React from "react";
import SignUpForm from "../components/SignUp/Signup";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "@/app/page.module.css";

export default function Form() {
  return (
   <div className={styles.pageContainer}>
    <Header/>
    <SignUpForm/>
    <Footer/>
   </div>
  );
}
