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
      <div id="hero">
        <HeroSection/> 
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="footer">
        <LogoMarquee/>
        <AnimatedTestimonialsDemo/>    
        <Footer/>
      </div>
    </div>
  );
}
