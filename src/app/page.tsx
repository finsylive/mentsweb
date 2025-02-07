"use client";
import { Header } from "@/sections/Header";
import {AnimatedTestimonialsDemo} from "@/sections/Testimonials"
import {LogoMarquee} from "@/sections/Tape"
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header /> 
      <AnimatedTestimonialsDemo/>  
       <LogoMarquee/>   
       <Footer/>
    </div>
  );
}
