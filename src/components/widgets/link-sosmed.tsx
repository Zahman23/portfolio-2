import React from 'react'
import { listSosmed } from '@/data/list-sosmed'
import IconLink from '../ui/icon-link'

const LinkSosmed = () => {
  return (
    <ul className='ml-1 mt-8 flex items-center' aria-label='Social Media'>
        {listSosmed.map((sosmed) => (
            <li key={sosmed.title} className='mr-5 shrink-0 text-xl'>
                <IconLink href={sosmed.href} title={sosmed.title} icon={sosmed.icon}/>
            </li>
        ))}
    </ul>
  )
}

export default LinkSosmed