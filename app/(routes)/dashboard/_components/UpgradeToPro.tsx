import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const UpgradeToPro = () => {
    return (
        <div className="relative group p-6 border-2 border-yellow-500/50 rounded-xl mt-8 w-full bg-slate-900/60 backdrop-blur-sm overflow-hidden group hover:border-yellow-500/80 transition-all duration-300">

            {/* Animated border effect */}
            {/* <div className="absolute w-30 h-30 inset-0 rounded-full group-hover:bg-yellow-500/20 transition-all duration-500 blur-lg"></div> */}

            <div className="relative flex flex-col items-center">
                {/* Logo with glow */}
                <div className="mb-4 flex justify-center">
                    <div className="relative p-4 rounded-full border-2 border-yellow-400/30 bg-yellow-500/30 group-hover:border-yellow-400/60 transition-all duration-300">
                        <div className="absolute -inset-2 rounded-full bg-yellow-900/20 group-hover:bg-yellow-500/50  transition-all duration-300 blur-sm" />
                        <Image
                            src="/logo.png"
                            alt="Invite Friend"
                            width={56}
                            height={56}
                            className="relative"
                        />
                    </div>
                </div>

                {/* Title with gradient */}
                <h2 className="font-game text-4xl text-white mb-2">
                    <span className="bg-linear-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                        GO TO PRO
                    </span>
                </h2>

                {/* Description */}
                <p className="font-game text-gray-400 text-center mb-6 max-w-sm text-xl">
                    Unlock <span className="text-yellow-300">all premium courses</span>,
                    projects, and certificate access
                </p>

                {/* Feature dots */}
                <div className="flex gap-6 mb-6">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-game text-sm text-gray-400">All Access</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="font-game text-sm text-gray-400">Projects</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="font-game text-sm text-gray-400">Certificates</span>
                    </div>
                </div>

                {/* CTA Button */}
                <Link href={"/pricing"} className="w-full">
                    <Button
                        variant={'pixel'}
                        className="w-full py-5 font-game bg-linear-to-r from-yellow-400 to-yellow-500 border-2 border-yellow-500/30 hover:border-yellow-500/50 hover:bg-linear-to-r hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 group/btn"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <span className="text-yellow-400">🔐</span>
                            UNLOCK PRO FEATURES
                            <span className="text-black text-3xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                →
                            </span>
                        </span>
                    </Button>
                </Link>

                {/* Subtext */}
                <p className="font-game text-gray-700 text-sm text-center mt-4">
                    Cancel anytime • 7-day free trial available
                </p>
            </div>
        </div>
    )
}

export default UpgradeToPro