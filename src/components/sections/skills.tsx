

import React from 'react'
import Section from '../widgets/section'
import { skillsData } from '@/data/data'

const Skills = () => {
  return (
    <Section name='skills' label='Skills'>
        <div className='group relative pb-1 transition-all sm:gap-8 md:gap-4'>
            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:bg-slate-800/50 lg:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:drop-shadow-lg'></div>
       <div className='space-y-8'>
         {skillsData.map((section, idx) => (
          <div key={idx}className='z-10 relative'>
          <h3 className='font-medium leading-snug text-slate-200 mb-4'>{section.category}</h3> 
          
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center items-center h-full'>
              {section.items.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className='flex flex-col items-center text-teal-300'>
                    {Icon ? (
                      <Icon className='text-3xl mb-2' />
                    ) : (
                      <div className='h-10 mb-2' /> // placeholder biar sejajar
                    )}
                    <span className='text-sm text-center'>{item.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
      ))}
       </div>
        </div>
    </Section>
  )
}



export default Skills