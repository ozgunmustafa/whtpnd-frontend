import React from 'react'
import Image from 'next/image'

const EmptyContent = () => {
  return (
    <div className="w-100">
      <Image
        src="/content-lost1.svg"
        alt="Picture of the author"
        width={500}
        height={400}
      />
    </div>
  )
}

export default EmptyContent
