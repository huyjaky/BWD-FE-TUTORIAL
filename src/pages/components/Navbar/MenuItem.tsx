import React from 'react'

interface MenuItemProps {
    onClick: () => void;
    label: string;
}


const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
    return (
        <div
            onClick={onClick}
            className='
                font-semibold
                px-4
                py-3
                transition
                hover:bg-neutral-100
                cursor-pointer

            '
        >
            {label}

        </div>
    )
}

export default MenuItem;