import React from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import { useCallback, useState } from 'react'
import { GrLanguage } from 'react-icons/gr'
import MenuItem from './MenuItem'
export default function UserMenu() {
    const [isOpen, setisOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setisOpen(prev => !prev);
    }, [])

    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>
                <div
                    onClick={() => { }}
                    className='
                text-sm
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                transition
                cursor:pointer
                '
                >
                    Cho thuê chổ ở qua EarthMcHv
                </div>
                <GrLanguage className='cursor-pointer' />
                <div
                    onClick={toggleOpen}
                    className='
                        p-2
                        border-[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:shadow-md
                        transition
                    '
                >
                    <AiOutlineMenu />
                    <Image
                        height="30"
                        alt="Avatar"
                        width="30"
                        src="/images/placeholder.jpg"
                        className='rounded-full'
                    />
                </div>
            </div>
            {isOpen && (
                <div className='absolute
                                rounded-xl
                                shadow-md
                                bg-white
                                top-12
                                w-[10vw]
                                right-0
                                text-sm

                '>
                    <div
                    >
                        <MenuItem
                            label="Login"
                            onClick={() => { }}
                        />
                        <MenuItem
                            label="Sign Up"
                            onClick={() => { }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
