import React from 'react'
import {Element} from 'react-scroll'

interface SectionProps {
    name: string,
    label: string,
    children: React.ReactNode
}

const Section = ({name, label,children} : SectionProps) => {
  return (
    <Element name={name}>
        <section className='mb-16 md:mb-24 lg:mb-36' aria-label={label}>
            <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-sm font-bold uppercase tracking-widest text-text lg:sr-only'>{label}</h2>
            </div>
            {children}
        </section>
    </Element>
  )
}

export default Section