import Image from "next/image"
import Link from "next/link"
import React, { FC } from "react"
import { CardProps } from "../types/types"

const Card = ({ page }: CardProps) => {
  return (
    <Link href={`/`}>
      <a className='flex justify-center '>
        <div className='grid content-between w-full max-w-sm my-4 overflow-hidden rounded shadow-lg md:my-0'>
          {/* image */}
          <div>
            {page.cover ? (
              <Image
                className='static w-full h-auto'
                src={page.cover}
                objectFit='cover'
                width={400}
                height={225}
                quality={30}
                alt='alt-image'
              />
            ) : (
              <Image
                className='static w-full h-auto'
                src='http://placekitten.com/800/600'
                objectFit='cover'
                width={400}
                height={225}
                quality={30}
                alt='alt-image'
              />
            )}
          </div>

          {/* title & date*/}
          <div className='px-6 pt-4 '>
            <h2 className='mb-3 text-base font-medium '>{page.name}</h2>
            <p className='text-xs text-gray-700'>{page.published}</p>
          </div>

          {/* tag */}
          <div className='px-6 pb-4 '>
            {page.tags.map((tag, index) => (
              <span
                key={index}
                className='px-2 py-1 mb-2 mr-2 text-sm font-normal break-words bg-gray-200 rounded-lg'
              >
                {`#${tag}`}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card