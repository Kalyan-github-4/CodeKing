import React, { useMemo } from 'react'
import Image from 'next/image'
import { Progress } from '@/components/ui/progress'
import { Course } from '../../_components/CourseList'
import { BookOpen, Trophy, Zap } from 'lucide-react'

type Props = {
  courseDetail?: Course | undefined
}

const CourseStatus = ({ courseDetail }: Props) => {
  const counts = useMemo(() => {
    if (!courseDetail) return { totalExc: 0, totalXP: 0 }

    let totalExercises = 0
    let totalXP = 0

    courseDetail.chapters?.forEach(chapter => {
      totalExercises += chapter?.exercises?.length || 0
      chapter?.exercises?.forEach(exercise => {
        totalXP += exercise?.xp || 0
      })
    })

    return {
      totalExc: totalExercises,
      totalXP: totalXP
    }
  }, [courseDetail])

  const exerciseProgress = 5
  const xpProgress = 50
  const exercisePercentage = counts.totalExc > 0 ? Math.round((exerciseProgress / counts.totalExc) * 100) : 0
  const xpPercentage = counts.totalXP > 0 ? Math.round((xpProgress / counts.totalXP) * 100) : 0

  return (
    <div className=' border-2 border-yellow-500/60 hover:border-yellow-500/80 duration-300 rounded-xl p-6 w-full bg-linear-to-br from-slate-900/80 to-slate-900  font-game '>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-4xl tracking-wide bg-linear-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent'>Progress Dashboard</h2>
        <div className='flex items-center gap-2 text-sm text-yellow-400'>
          <Zap className='w-4 h-4' />
          <span>LIVE TRACKING</span>
        </div>
      </div>

      <div className='space-y-6'>
        {/* Exercises Card */}
        <div className='bg-gray-800/50 rounded-lg p-4 border border-gray-700/50'>
          <div className='flex items-start justify-between mb-3'>
            <div className='flex items-center gap-3'>
              <div className='p-2 bg-cyan-900/30 rounded-lg border border-cyan-500/20'>
                <BookOpen className='w-6 h-6 text-cyan-400' />
              </div>
              <div>
                <h3 className='text-2xl text-white'>Exercises Completed</h3>
                <p className='text-base text-gray-400 tracking-wider'>Master challenges & level up</p>
              </div>
            </div>
            <div className='text-right'>
              <div className='text-2xl text-white'>{exerciseProgress}/{counts.totalExc}</div>
              <div className='text-base text-cyan-400'>{exercisePercentage}%</div>
            </div>
          </div>
          <Progress 
            value={exercisePercentage} 
            className="h-2 bg-gray-700 [&>div]:bg-linear-to-r [&>div]:from-cyan-500 [&>div]:to-cyan-600" 
          />
        </div>

        {/* XP Card */}
        <div className='bg-gray-800/50 rounded-lg p-4 border border-gray-700/50'>
          <div className='flex items-start justify-between mb-3'>
            <div className='flex items-center gap-3'>
              <div className='p-2 bg-purple-900/30 rounded-lg border border-purple-500/20'>
                <Trophy className='w-6 h-6 text-purple-400' />
              </div>
              <div>
                <h3 className='text-3xl tracking-wide text-white'>XP Earned</h3>
                <p className='text-base text-gray-400 tracking-wider'>Gain experience & rank up</p>
              </div>
            </div>
            <div className='text-right'>
              <div className='text-2xl text-white'>{xpProgress.toLocaleString()}/{counts.totalXP.toLocaleString()}</div>
              <div className='text-base text-purple-400'>{xpPercentage}%</div>
            </div>
          </div>
          <Progress 
            value={xpPercentage} 
            className="h-2 bg-gray-700 [&>div]:bg-linear-to-r [&>div]:from-purple-500 [&>div]:to-purple-600" 
          />
        </div>

        {/* Stats Summary */}
        <div className='grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50'>
          <div className='text-center'>
            <div className='text-cyan-300 tracking-wider text-sm'>Current Level</div>
            <div className='text-2xl text-white tracking-wider'>5</div>
          </div>
          <div className='text-center'>
            <div className='text-purple-300 tracking-wider text-sm'>Next Rank In</div>
            <div className='text-2xl tracking-wider text-white'>{counts.totalXP - xpProgress} XP</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseStatus