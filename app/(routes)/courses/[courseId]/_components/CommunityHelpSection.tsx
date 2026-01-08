import { Button } from '@/components/ui/button'

const CommunityHelpSection = () => {
  return (
    <div className='flex flex-col items-center p-6 border-2 border-emerald-500/40 hover:border-emerald-500/70 duration-300  rounded-xl mt-7 w-full font-mono bg-slate-900/60 text-center'>
      <div className='mb-4 font-game'>
        <h2 className='text-4xl text-emerald-300 mb-2 tracking-wide'>
          Join the Coding Kingdom
        </h2>
        <p className='text-gray-300 text-xl'>
          Connect with <span className='text-yellow-300'>developers,</span> get unstuck, and grow together
        </p>
      </div>

      <Button
        variant={'pixel'}
        className="w-full py-5 font-game bg-linear-to-r from-yellow-400 to-yellow-500 border-2 border-yellow-500/30 hover:border-yellow-500/50 hover:bg-linear-to-r hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 group/btn"
      >
        <span className="flex items-center justify-center gap-2">
          Enter Community
        </span>
      </Button>
    </div>
  )
}

export default CommunityHelpSection