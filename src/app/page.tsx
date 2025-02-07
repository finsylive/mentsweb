"use client";
import { Header } from "@/sections/Header";
import {AnimatedTestimonialsDemo} from "@/sections/Testimonials"
import {LogoMarquee} from "@/sections/Tape"

export default function Home() {
  return (
    <div>
      <Header /> 
      <AnimatedTestimonialsDemo/>  
       <LogoMarquee/>   
    </div>
  );
}
