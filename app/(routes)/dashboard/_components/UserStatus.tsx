"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";

const UserStatus = () => {
    const { user } = useUser();

    return (
        <div className="p-6 border-2 border-blue-500/30 rounded-xl bg-slate-900/80 backdrop-blur-sm relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

            {/* Pixel border effect */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-yellow-500"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-yellow-500"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-yellow-500"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-yellow-500"></div>

            <div className="flex gap-3 items-center relative z-10">
                <div className="relative">
                    <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-sm group-hover:bg-blue-500/30 transition-all duration-300"></div>
                    <Image
                        src="/alex_walk.gif"
                        alt="alex_walk"
                        width={80}
                        height={80}
                        className="relative rounded-full border-2 border-blue-500/50"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <h2 className="font-game text-lg text-white truncate">{user?.fullName || "Player"}</h2>
                    <p className="font-game text-sm text-blue-300/80 truncate">
                        {user?.primaryEmailAddress?.emailAddress?.split('@')[0] || "coder"}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-6 relative z-10">
                {/* Total Rewards */}
                <div className="p-4 rounded-lg bg-slate-800/50 border border-blue-900/30 hover:border-blue-500/40 transition-all duration-300 group/item">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-yellow-500/20 blur-sm rounded-full animate-pulse"></div>
                            <Image
                                src={'/star.png'}
                                alt="star"
                                width={50}
                                height={50}
                                className="relative drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-game bg-linear-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">20</h2>
                            <h2 className="text-sm font-game text-gray-400 uppercase tracking-wider">Total Rewards</h2>
                        </div>
                    </div>
                    <div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-linear-to-r from-yellow-500 to-orange-500 w-3/4 rounded-full"></div>
                    </div>
                </div>

                {/* Daily Streak */}
                <div className="p-4 rounded-lg bg-slate-800/50 border border-orange-900/30 hover:border-orange-500/40 transition-all duration-300 group/item">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-orange-500/20 blur-sm rounded-full animate-pulse" style={{ animationDuration: '1.5s' }}></div>
                            <Image
                                src={'/fire.png'}
                                alt="fire"
                                width={50}
                                height={50}
                                className="relative drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-game bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">8</h2>
                            <h2 className="text-sm font-game text-gray-400 uppercase tracking-wider">Daily Streak</h2>
                        </div>
                    </div>
                    <div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-linear-to-r from-orange-500 to-red-500 w-2/3 rounded-full"></div>
                    </div>
                </div>


                {/* XP Points - Added new stat */}
                <div className="p-4 rounded-lg bg-slate-800/50 border border-red-900/30 hover:border-red-500/40 transition-all duration-300 group/item">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500/20 blur-sm rounded-full"></div>
                            <Image
                                src={'/xp.png'}
                                alt="xp"
                                width={50}
                                height={50}
                                className="relative drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-game bg-linear-to-r from-red-500 to-red-500 bg-clip-text text-transparent">1500</h2>
                            <h2 className="text-sm font-game text-gray-400 uppercase tracking-wider">XP Points</h2>
                        </div>
                    </div>
                    <div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-linear-to-r from-red-400 to-red-500 w-2/3 rounded-full"></div>
                    </div>
                </div>
                
                {/* Badges */}
                <div className="p-4 rounded-lg bg-slate-800/50 border border-purple-900/30 hover:border-purple-500/40 transition-all duration-300 group/item">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500/20 blur-sm rounded-full"></div>
                            <Image
                                src={'/badge2.png'}
                                alt="badge"
                                width={100}
                                height={100}
                                className="relative drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-game bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">3</h2>
                            <h2 className="text-sm font-game text-gray-400 uppercase tracking-wider">Badges Earned</h2>
                        </div>
                    </div>
                    <div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-linear-to-r from-purple-500 to-pink-500 w-1/2 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Level Progress Bar */}
            <div className="mt-6 relative z-10">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-game text-sm text-blue-300">Level 5</span>
                    <span className="font-game text-sm text-green-300">XP: 1500/2000</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-blue-300 via-blue-500 to-blue-600 w-3/4 rounded-full relative">
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer bg-size-[200%_100%]"></div>
                    </div>
                </div>
                <div className="flex justify-between mt-1">
                    <span className="font-game text-xs text-gray-500">Beginner</span>
                    <span className="font-game text-xs text-gray-500">Pro Coder</span>
                </div>
            </div>

            <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
      `}</style>
        </div>
    )
}

export default UserStatus