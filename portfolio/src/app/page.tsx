"use client";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Skills from "./components/Skills";


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    <>
        
        <div className="h-screen w-full font-poppins">

        <Header />
        <Hero />
        <Profile />
        <Skills />
        <Project />
        <Contact />

        </div>
        
        
    </>

     
          
          
    // </main>
  );
}
