"use client";
import React from "react";
import SignUpForm from "../components/SignUp/Signup";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Form() {
  return (
   <div className="page-container">
    <Header/>
    <main className="content">
    <SignUpForm/>
    </main>
    <Footer/>
   </div>
  );
}
