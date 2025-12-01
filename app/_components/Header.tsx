"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from 'next/image'
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


const Header = () => {
  const { user } = useUser();

  return (
    <div className='fixed z-50 max-w-7xl p-4 flex justify-between items-center w-full'>
      <div className='flex gap-4 items-center'>

        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <h1 className="text-3xl font-game tracking-wide">CodeBox</h1>
      </div>

      {/* Navigation Section */}
      <NavigationMenu>
        <NavigationMenuList className="gap-8 font-game">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-2xl tracking-wide">Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]">
                {courses.map((course, index) => (
                  <div key={index} className="p-4 hover:bg-accent rounded-xl cursor-pointer">
                    <h2 className="font-medium">{course.name}</h2>
                    <p className="text-sm text-gray-500">{course.desc}</p>
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem >
            <NavigationMenuLink className="text-xl tracking-wide">
              <Link href={"/projects"}>Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="text-xl tracking-wide">
              <Link href={"/pricing"}>Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="text-xl tracking-wide">
              <Link href={"/contact"}>Contact Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      {/* Login Button  */}
      {!user ?

        <Link href={'/sign-in'}>
          <Button className="font-game text-2xl" variant="pixel">Sign In</Button>
        </Link>
        : <div className="flex gap-4 items-center">
          <Link href={"/dashboard"}>
            <Button className="font-game text-2xl" variant="pixel">Dashboard</Button>
          </Link>
          <UserButton appearance={{ elements: { userButtonTrigger: "outline-none" } }} />
        </div>}
    </div>
  )
}

export default Header