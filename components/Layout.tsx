// import Link from "next/link"
import React from "react"
import { LayoutProps } from "../types/types"
import { Footer } from "./Footer"
import { NavBar } from "./NavBar"

const Layout = ({ children }: LayoutProps) => {
  const navFooter = 128 + 48

  return (
    <div className='relative overflow-hidden class="bg-white'>
      <div className='flex flex-col items-center w-full max-w-2xl mx-auto'>
        <NavBar />
        <main
          className='w-full min-h-full px-4 pb-12'
          style={{ height: `calc((100vh - (${navFooter}px))` }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
