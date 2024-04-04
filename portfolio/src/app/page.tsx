"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    <>
        
        <div className="h-screen w-screen">

        <Header />
        <Hero />
        <Skills />
        <Project />

        </div>
        
        
    </>

     
          
          
    // </main>
  );
}
