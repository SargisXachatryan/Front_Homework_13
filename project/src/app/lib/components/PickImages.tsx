"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'

export const PickImages = () => {
    const photo = useRef<HTMLInputElement>(null)
    const [url, setUrl] = useState<string>("")

    const handleChange = () => {
        const file = photo.current?.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.readAsDataURL(file)

            reader.onload = () => {
                setUrl(reader.result as string)
            }
        }
    }

    return <>
        <input
            type="file"
            className='input is-hidden'
            name='photo'
            ref={photo}
            onChange={handleChange}
        />

        <button
            type='button'
            className='button has-background-dark'
            onClick={() => photo.current?.click()}
        >Pick</button>

        {
            url && <div className="has-background-dark my-2">
                <Image
                    src={url}
                    width={200}
                    height={300}
                    alt={`Lecturer's photo`}
                />
            </div>
        }
    </>
}
