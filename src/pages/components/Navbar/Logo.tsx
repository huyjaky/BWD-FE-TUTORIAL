import Image from "next/image";
import { useRouter } from "next/navigation";

import React from 'react'

export default function Logo() {
    return (
        <Image
            alt="Logo"
            height="100"
            width="100"
            src="/images/logo.png"
            className="mr-[250px]"
        />
    )
}
