'use client'

import { useRef } from "react"

export const useSectionRef = () => {

    const aboutRef = useRef<HTMLDivElement | null>(null)
    const skillsRef = useRef<HTMLDivElement | null>(null)
    const experienceRef = useRef<HTMLDivElement | null>(null)
    const projectsRef = useRef<HTMLDivElement | null>(null)

    return {
        aboutRef,
        skillsRef,
        experienceRef,
        projectsRef
    }
} 