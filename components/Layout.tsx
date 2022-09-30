// import Link from "next/link"
import React from "react"
import { LayoutProps } from "../types/types"
import { Footer } from "./Footer"
import { NavBar } from "./NavBar"

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='relative overflow-hidden'>
      <div className='flex flex-col items-center w-full max-w-2xl mx-auto'>
        <NavBar />
        <main className='w-full px-4 pb-12'>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
