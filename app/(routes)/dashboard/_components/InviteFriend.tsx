"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"

const InviteFriend = () => {
    const [email, setEmail] = useState("")

    //COPIED OUT FOR NOW

    // const [isCopied, setIsCopied] = useState(false)

    // const referralCode = "CODE2024"
    // const referralLink = "https://codingmastery.com/invite/CODE2024"

    // const handleInvite = () => {
    //     if (!email) return
    //     console.log("Inviting:", email)
    //     setEmail("")
    // }

    // const copyToClipboard = (text: string) => {
    //     navigator.clipboard.writeText(text)
    //     setIsCopied(true)
    //     setTimeout(() => setIsCopied(false), 2000)
    // }

    return (
        <section className="relative group mt-8 overflow-hidden rounded-xl border-2 border-green-500/30 bg-slate-900/80 p-6 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300">
            {/* Decorative blobs */}
            <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-green-500/10 blur-md" />
            <div className="absolute bottom-6 left-6 h-12 w-12 rounded-full bg-emerald-500/10 blur-md" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                    <div className="relative rounded-full border-2 border-green-500/30 bg-green-900/30 p-4">
                        <div className="absolute -inset-2 rounded-full bg-green-500/20 blur-sm group-hover:bg-green-500/50 transition-all duration-300" />
                        <Image
                            src="/mail.png"
                            alt="Invite Friend"
                            width={56}
                            height={56}
                            className="relative"
                        />
                    </div>
                </div>

                {/* Heading */}
                <h2 className="mb-2 font-game text-4xl text-white">
                    Invite a Friend
                </h2>

                <p className="mx-auto mb-8 max-w-xl font-game text-gray-400 text-xl">
                    Share the learning journey and
                    <span className="ml-1 text-yellow-300">earn rewards together.</span>
                </p>

                {/* Invite Input */}
                <div className="mx-auto mb-10 max-w-xl">
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <Input
                            type="email"
                            placeholder="friend@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-12 col-span-2 border border-green-500/30 bg-slate-900/50 pl-5 font-game text-white placeholder:text-gray-500 focus:border-green-500/60 rounded-sm" />

                        <Button
                            size="lg"
                            variant="pixel"
                            // disabled={!email}
                            // onClick={handleInvite}
                            className="h-11 rounded-none"
                        >
                            INVITE
                        </Button>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-800 pt-4">
                    <p className="font-game text-sm text-gray-700">
                        Share with up to 5 friends per month
                    </p>
                </div>
            </div>
        </section>
    )
}

export default InviteFriend
