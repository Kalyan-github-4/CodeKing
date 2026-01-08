"use client";

import Link from "next/link";
import { Button } from '@/components/ui/button'
import { useEffect, useMemo, useState } from 'react';
import GridCanvas from '../../components/GridCanvas';

const Hero = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  // Array of quotes to display
  const quotes = useMemo(() => [
    "Beginner friendly coding courses & projects",
    "Learn by building real-world applications",
    "Master programming with hands-on experience",
    "Start your journey from zero to hero",
    "Join a community of passionate developers",
    "Turn ideas into working software"
  ], []);

  useEffect(() => {
    // Typewriter effect logic
    const currentQuote = quotes[currentQuoteIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentQuote.length) {
          setDisplayText(currentQuote.substring(0, displayText.length + 1));
          setTypingSpeed(100);
        } else {
          // Finished typing, pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentQuote.substring(0, displayText.length - 1));
          setTypingSpeed(50);
        } else {
          // Finished deleting, move to next quote
          setIsDeleting(false);
          setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
          setTypingSpeed(100);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    
    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, currentQuoteIndex, typingSpeed, quotes]);

  return (
    <div className='w-full relative h-screen overflow-hidden bg-slate-900'>
      {/* Reusable GridCanvas component */}
      <GridCanvas 
        particleCount={80}
        gridSize={40}
        connectDistance={120}
      />

      <div className='absolute w-full flex flex-col items-center mt-44 z-10'>
        <div className='relative'>
          <h1 className='font-bold text-7xl font-game tracking-wider text-white animate-fade-in'>
            Start Your
          </h1>
          <div className='absolute -inset-1 bg-linear-to-r from-blue-500 via-purple-500 to-yellow-500 opacity-20 blur-xl rounded-lg' />
        </div>
        
        <div className='relative mt-2'>
          <h1 
            className='font-bold text-8xl font-game bg-linear-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent tracking-wider animate-pulse'
          >
            Coding Journey
          </h1>
        </div>

        {/* Typewriter effect container */}
        <div className='mt-6 min-h-20 flex items-center justify-center'>
          <h2 className='font-game text-3xl tracking-wider text-blue-200 animate-fade-in text-center' style={{animationDelay: '0.3s'}}>
            {displayText}
            <span className='ml-1 animate-pulse'>|</span>
          </h2>
        </div>
        
        <div className='relative mt-8 group'>
          <div className='absolute bg-linear-to-r from-yellow-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300' />
          <Link href={'/dashboard'}>
            <Button 
              variant="pixel" 
              className='relative text-3xl font-game p-6'
            >
              GET STARTED
            </Button>
          </Link>
        </div>

        {/* Pixel decorations */}
        <div className='flex gap-3 mt-8'>
          <div className='w-2 h-2 bg-blue-500 animate-bounce' style={{animationDelay: '0s'}} />
          <div className='w-2 h-2 bg-purple-500 animate-bounce' style={{animationDelay: '0.2s'}} />
          <div className='w-2 h-2 bg-yellow-500 animate-bounce' style={{animationDelay: '0.4s'}} />
        </div>
        
        {/* Quote progress indicator */}
        <div className='flex gap-2 mt-4'>
          {quotes.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentQuoteIndex 
                  ? 'w-8 bg-yellow-400' 
                  : 'bg-blue-400/30'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }
        .animate-pulse {
          animation: cursor-blink 2s infinite;
        }
      `}</style>
    </div>
  )
}

export default Hero;