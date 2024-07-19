"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface IProps {
    className?: string
    href: string
    children: React.ReactNode
}

export const NavLink = ({ children, href, className }: IProps) => {
    const path = usePathname()
    className += path == href ? " has-background-success" : ""
    return <Link className={className} href={href}>{children}</Link>
}
