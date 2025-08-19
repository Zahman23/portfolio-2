'use client'

import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface IconLink{
    title: string,
    href: string,
    icon: IconType
}

const IconLink = ({title,href, icon}: IconLink) => {
  return (
    <Link
    href={href}
    target='_blank'
    className='block hover:text-text'
    rel='noreferrer noopener'
    aria-label={`${title} (opens in a new tab)`}
    title={title}
    >
        <span className='sr-only'>{title}</span>
        {React.createElement(icon)}
    </Link>
  )
}

export default IconLink