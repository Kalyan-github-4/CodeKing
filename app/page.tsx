import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
    
    <Hero />
    <h1 className="font-game text-2xl">Build with 💗 By NextJS</h1>
    <Button variant="destructive">Click me!!</Button>
    </div>
  );
}
