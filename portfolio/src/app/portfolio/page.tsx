"use client";

import React from 'react'
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Contact from '../components/Contact';
import {useEffect, useRef} from 'react';

function page() {

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

  return (
    <>
    
        <div id="circle" ref={circleRef}></div>

        <section className='h-screen w-full flex justify-center items-center bg-green-950'>
            <Profile />
        </section>

        <section className='h-screen w-full flex flex-col justify-center bg-blue-950'>
            <Skills />
        </section>

        <section className='w-full bg-red-950'>
            <Project />
        </section>
 
        <section className='h-screen w-full flex flex-col justify-center bg-black'>
            <Contact />
        </section>

    </>
  )
}

export default page
