"use client"

import Image from "next/image"
import { useUser } from "@clerk/nextjs"

const getTimeGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
}

const WelcomeBanner = () => {
    const { user } = useUser()

    return (
        <div className="relative rounded-xl border-2 border-blue-500/30 bg-slate-900/80 backdrop-blur-sm overflow-hidden p-6 group hover:border-blue-500/50 transition-all duration-300">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:opacity-70 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:opacity-70 transition-opacity duration-300" />

            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                {/* Robot */}
                <div className="relative">
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="relative p-4 rounded-2xl bg-slate-900/50 border-2 border-blue-500/30 group-hover:border-blue-500/50 group-hover:bg-blue-950/10 transition-all duration-300">
                        <Image
                            src="/machine.webp"
                            alt="robo"
                            height={80}
                            width={80}
                            className="animate-float"
                        />
                    </div>
                </div>

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                    {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 mb-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="font-game text-sm text-blue-300">
                            {getTimeGreeting()}
                        </span>
                    </div> */}

                    <h2 className="font-game text-3xl text-white mb-3">
                        {getTimeGreeting()},{" "}
                        <span className="bg-linear-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            {user?.fullName || "Coder"}!
                        </span>
                    </h2>

                    <p className="font-game text-gray-400 text-lg">
                        Ready to continue your coding journey? Let&apos;s build something amazing today.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeBanner


