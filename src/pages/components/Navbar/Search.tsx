import React from 'react'
import { BiSearch } from 'react-icons/bi'

export default function Search() {
    return (
        <div
            className='
                border-[1px]
                w-[405px]
                py-2
                rounded-full
                shadow-md
                transition
                cursor-pointer
            '
        >
            <div
                className='
                    flex
                    flex-row
                    items-center
                    justify-between
                '
            >
                <div
                    className='
                        text-sm
                        font-semibold
                        px-6
                    '
                >
                    Địa điểm bất kỳ
                </div>
                <div className='
                    text-sm
                    font-semibold
                    px-2
                    border-x-[1px]
                    flex-1
                    text-center
                '>
                    tuần bất kỳ
                </div>
                <div className='
                    text-sm
                    pl-6
                    pr-2
                    text-gray-600
                    flex
                    flex-row
                    items-center
                    gap-3
                '>
                    Thêm khách
                    <div className='
                        p-2
                        bg-rose-500
                        rounded-full
                        text-white
                    '>
                        <BiSearch />
                    </div>
                </div>
            </div>

        </div>
    )
}
