"use client";
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';


const ExploreOptions = [
  {
    id: 1,
    title: "Quiz Pack",
    description: "Practice what you learned from bite-sized challenges.",
    icon: "/tree.png",
    color: "from-green-500 to-green-300",
    bgColor: "bg-emerald-900/20",
    borderColor: "border-emerald-500/30",
    stats: "100+ Quizzes"
  },
  {
    id: 2,
    title: "Community Projects",
    description: "Build real-world apps collaboratively with the community.",
    icon: "/growth.png",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-500/30",
    stats: "50+ Projects"
  },
  {
    id: 3,
    title: "Video Courses",
    description: "Learn with structured video lessons taught step-by-step.",
    icon: "/game.png",
    color: "from-purple-500 to-purple-300",
    bgColor: "bg-purple-900/20",
    borderColor: "border-purple-500/30",
    stats: "40+ Hours"
  },
  {
    id: 4,
    title: "Explore Apps",
    description: "Explore prebuilt apps you can try as demo and build yourself.",
    icon: "/start-up.png",
    color: "from-orange-500 to-orange-400",
    bgColor: "bg-orange-900/20",
    borderColor: "border-orange-500/30",
    stats: "25+ Apps"
  }
];

const ExploreMore = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const [progressValues] = useState<number[]>(() =>
    ExploreOptions.map(() =>
      Math.floor(Math.random() * 30) + 70
    )
  );



  return (
    <div className='mt-8 relative'>
      {/* Section header with gradient */}
      <div className='flex items-center justify-between'>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 bg-yellow-600 rounded-full"></div>
          <h2 className="font-game text-3xl text-white">
            <span className="bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Explore More
            </span>
          </h2>
        </div>
        {/* Animated dots */}
        {/* <div className="flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${hoveredCard === i ? 'bg-blue-500 scale-125' : 'bg-blue-500/30'}`}
            />
          ))}
        </div> */}
      </div>

      {/* Grid container */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {ExploreOptions.map((option, index) => (
          <div
            key={option.id}
            className={`relative p-5 rounded-xl border-2 ${option.borderColor} ${option.bgColor} backdrop-blur-sm 
              transition-all duration-300 hover:scale-[1.02] hover:border-opacity-60 
              group cursor-pointer overflow-hidden`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated background effect */}
            <div className={`absolute inset-0 bg-linear-to-br ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

            {/* Glowing corner accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-current opacity-30"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-current opacity-30"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-current opacity-30"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-current opacity-30"></div>

            {/* Content */}
            <div className='flex gap-4 items-start relative z-10'>
              {/* Icon container with glow */}
              <div className="relative group">
                <div className={`absolute -inset-3 bg-linear-to-br ${option.color} rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className={`relative p-3 rounded-lg bg-slate-900/50 border ${option.borderColor} 
                  group-hover:bg-slate-800/50 transition-all duration-300`}>
                  <Image
                    src={option.icon}
                    alt={option.title}
                    height={60}
                    width={60}
                    className="relative drop-shadow-lg"
                  />
                </div>

                {/* Badge */}
                <div className={`absolute -top-2 -right-2 bg-linear-to-br ${option.color} text-white font-game text-xs 
                  px-2 py-1 rounded-md transform rotate-4 shadow-lg group-hover:-right-4  group-hover:rotate-1 transition-all duration-300`}>
                  {option.stats}
                </div>
              </div>

              {/* Text content */}
              <div className='flex-1'>
                <div className="flex items-start justify-between mb-2">
                  <h2 className={`font-game text-2xl font-medium bg-linear-to-r ${option.color} bg-clip-text text-transparent`}>
                    {option.title}
                  </h2>
                  {/* Arrow indicator */}
                  <div className={`opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 
                    transition-all duration-300 text-2xl ${option.color.split(' ')[0].replace('from-', 'text-')}`}>
                    →
                  </div>
                </div>

                <p className='font-game text-gray-300 mb-4'>
                  {option.description}
                </p>

                {/* Progress/status bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs font-game text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{progressValues[index]}%</span>
                  </div>

                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-linear-to-r ${option.color} rounded-full transition-all duration-700`}
                      style={{ width: `${progressValues[index]}%` }}
                    />
                  </div>

                </div>

                {/* Interactive button */}
                <div className="mt-5 ">
                  <Button variant='outline' className={` cursor-pointer font-game tracking-wider text-sm px-4 py-2 rounded-lg border ${option.borderColor} 
                    bg-slate-900/50 hover:bg-slate-800/70 transition-all duration-300 
                    text-gray-300 hover:text-white transform hover:-translate-y-0.5 active:scale-95`} >
                    Explore Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-10 text-center cursor-pointer hover:underline">
        <p className="font-game text-gray-400 mb-4">
          Want to see everything we offer?
        </p>
        {/* <button className="font-game px-6 py-3 rounded-lg border-2 border-blue-500/30 
          bg-blue-900/20 hover:bg-blue-900/40 hover:border-blue-500/50 
          transition-all duration-300 text-white hover:scale-105 active:scale-95">
          View All Learning Paths
        </button> */}
      </div>
    </div>
  )
}

export default ExploreMore