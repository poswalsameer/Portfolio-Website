"use client";
import { useEffect, useState, useRef } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Link from "next/link";


export default function Home() {

  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circleElement = circleRef.current;

    const mouse = { x: 0, y: 0 };
    const previousMouse = { x: 0, y: 0 };
    const circle = { x: 0, y: 0 };

    let currentScale = 0;
    let currentAngle = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const speed = 0.17;

    const tick = () => {
      circle.x += (mouse.x - circle.x) * speed;
      circle.y += (mouse.y - circle.y) * speed;

      const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

      const deltaMouseX = mouse.x - previousMouse.x;
      const deltaMouseY = mouse.y - previousMouse.y;

      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;

      const mouseVelocity = Math.min(
        Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
        150
      );

      const scaleValue = (mouseVelocity / 150) * 0.5;

      currentScale += (scaleValue - currentScale) * speed;

      const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

      const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;

      if (mouseVelocity > 20) {
        currentAngle = angle;
      }

      const rotateTransform = `rotate(${currentAngle}deg)`;

      if (circleElement) {
        circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
      }

      window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  //conditional rendering

  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);



  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
      
    <>
        
        <div className="h-screen w-full flex flex-col justify-center items-center font-poppins ">

        <div id="circle" ref={circleRef}></div>

        {/* {windowWidth > 767 && (
          <Header />
        )} */}

          <Hero />
        {/* <Profile />
        <Skills />
        <Project />
        <Contact /> */}

        </div>
        
        
    </>

     
          
          
    // </main>
  );
}
