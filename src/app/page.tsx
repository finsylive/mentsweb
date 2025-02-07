"use client";
import { Header } from "@/sections/Header";
import {AnimatedTestimonialsDemo} from "@/sections/Testimonials"
import {LogoMarquee} from "@/sections/Tape"
import { Footer } from "@/sections/Footer";
import { HeroSection } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/> 
      <Projects/>
      <LogoMarquee/>
      <AnimatedTestimonialsDemo/>    
      <Footer/>
    </div>
  );
}
