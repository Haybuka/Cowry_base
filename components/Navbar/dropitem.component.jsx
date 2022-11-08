import Link from 'next/link'
import React from 'react'

const DropItem = ({item}) => {
    const {img,body,title,id} = item
  return (
    <Link href={`/services#${id}`}>
    <div className='flex items-center' >
        <span className='inline-block mr-3 w-[40px] h-[40px]'>
            <img src={img} classname="w-full"/>
        </span>
        <span className='font-semibold'>{title} </span>
    </div>
    <p className=''>{body}</p>
</Link>
  )
}

export default DropItem