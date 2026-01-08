"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button'
import Link from "next/link"
import { UserButton, useUser } from "@clerk/nextjs";

const courses = [
  {
    id: 1,
    name: "HTML",
    desc: "Learn the fundamentals of HTML and build the structure of modern web pages.",
    path: "/course/1/detail",
  },
  {
    id: 2,
    name: "CSS",
    desc: "Master CSS to style and design responsive, visually appealing web layouts.",
    path: "/course/2/detail",
  },
  {
    id: 3,
    name: "React",
    desc: "Build dynamic and interactive web applications using the React JavaScript library.",
    path: "/course/3/detail",
  },
  {
    id: 4,
    name: "React Advanced",
    desc: "Deep dive into advanced React concepts including hooks, state management, performance optimization, and architectural patterns.",
    path: "/course/4/detail",
  },
  {
    id: 5,
    name: "Python",
    desc: "Learn Python programming from basics to intermediate level, covering logic building, functions, and real-world applications.",
    path: "/course/5/detail",
  },
  {
    id: 6,
    name: "Python Advanced",
    desc: "Master advanced Python concepts such as OOP, modules, APIs, data processing, and automation.",
    path: "/course/6/detail",
  },
  {
    id: 7,
    name: "Generative AI",
    desc: "Explore prompt engineering, LLMs, embeddings, image generation, and build GenAI-powered applications.",
    path: "/course/7/detail",
  }
];

const PixelLogo = () => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Crown top */}
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-0.5 z-10">
        {/* Top row - crown points */}
        <div className="bg-yellow-400 col-start-1 row-start-1"></div>
        <div className="bg-yellow-400 col-start-3 row-start-1"></div>
        <div className="bg-yellow-400 col-start-5 row-start-1"></div>
        
        {/* Second row */}
        <div className="bg-yellow-500 col-start-1 row-start-2"></div>
        <div className="bg-yellow-500 col-start-2 row-start-2"></div>
        <div className="bg-yellow-500 col-start-3 row-start-2"></div>
        <div className="bg-yellow-500 col-start-4 row-start-2"></div>
        <div className="bg-yellow-500 col-start-5 row-start-2"></div>
        
        {/* Third row */}
        <div className="bg-yellow-500 col-start-1 row-start-3"></div>
        <div className="bg-blue-500 col-start-2 row-start-3"></div>
        <div className="bg-purple-500 col-start-3 row-start-3"></div>
        <div className="bg-blue-500 col-start-4 row-start-3"></div>
        <div className="bg-yellow-500 col-start-5 row-start-3"></div>
        
        {/* Fourth row */}
        <div className="bg-yellow-600 col-start-2 row-start-4"></div>
        <div className="bg-yellow-600 col-start-3 row-start-4"></div>
        <div className="bg-yellow-600 col-start-4 row-start-4"></div>
        
        {/* Fifth row - code brackets */}
        <div className="bg-green-400 col-start-2 row-start-5"></div>
        {/* <div className="bg-transparent col-start-3 row-start-5 flex items-center justify-center text-[8px] font-bold text-white">{'{ }'}</div> */}
        <div className="bg-green-400 col-start-4 row-start-5"></div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-linear-to-br from-yellow-400 to-purple-600 opacity-30 blur-md rounded-lg"></div>
    </div>
  );
};

const Header = () => {
  const { user } = useUser();

  return (
    <div className='fixed z-50 max-w-7xl p-4 flex justify-between items-center w-full backdrop-blur-md bg-slate-900/80 border-b border-blue-500/20 rounded-b-2xl shadow-lg shadow-blue-500/10'>
        <Link href="/" className='flex gap-3 items-center group'>
          <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <PixelLogo />
          </div>
          <h1 className="text-3xl font-game tracking-wide bg-linear-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-orange-300 transition-all duration-300">
            CodeKing
          </h1>
        </Link>
     
      {/* Navigation Section */}
      <NavigationMenu>
        <NavigationMenuList className="gap-8 font-game">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl tracking-wide hover:text-yellow-400 transition-colors bg-transparent">
              Courses
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px] bg-slate-900/95 backdrop-blur-xl border border-blue-500/30 p-3">
                {courses.map((course, index) => (
                  <Link key={index} href={course.path}>
                    <div className="p-4 hover:bg-blue-500/10 rounded-xl cursor-pointer border border-transparent hover:border-blue-500/50 transition-all duration-300 group">
                      <h2 className="font-medium text-yellow-400 group-hover:text-yellow-300 transition-colors">
                        {course.name}
                      </h2>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {course.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="text-xl tracking-wide hover:text-yellow-400 transition-colors">
              <Link href={"/projects"}>Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="text-xl tracking-wide hover:text-yellow-400 transition-colors">
              <Link href={"/pricing"}>Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="text-xl tracking-wide hover:text-yellow-400 transition-colors">
              <Link href={"/contact"}>Contact Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Login Button  */}
      {!user ?
        <Link href={'/sign-in'}>
          <Button className="font-game text-xl relative group overflow-hidden" variant="pixel">
            <span className="relative z-10">Sign In</span>
            <div className="absolute inset-0 bg-linear-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Button>
        </Link>
        : 
        <div className="flex gap-4 items-center">
          <Link href={"/dashboard"}>
            <Button className="font-game text-xl relative group overflow-hidden" variant="pixel">
              <span className="relative z-10">DASHBOARD</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Button>
          </Link>
          <div className="ring-2 ring-blue-400 rounded-full hover:ring-blue-400 transition-all flex justify-center items-center">
            <UserButton appearance={{ elements: { userButtonTrigger: "outline-none" } }} />
          </div>
        </div>
      }
    </div>
  )
}

export default Header