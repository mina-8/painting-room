'use client'
import { AU, CA, DE, ES, FR, GB, IT, US } from 'country-flag-icons/react/3x2';
import Link from 'next/link'
import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
    const [toogel, settoogel] = useState(false);
    return (
        <header>
            <div className="bg-gray-100 p-4 dark:bg-gray-100 lg:flex justify-between items-center h-24 hidden">
                <Link href={'/'}
                    className="flex gap-1 items-center font-bold hover:text-sky-400"
                >
                    Main menu
                </Link>

                <div className=" gap-4 items-center hidden lg:flex ">

                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <US title="United States" className='rounded-lg' width={50} />
                        usa
                    </Link>
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <CA title="Canda" className='rounded-lg' width={50} />
                        canada
                    </Link>
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <GB title='GB' className='rounded-lg' width={50} />
                        uk</Link>
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <FR className='rounded-lg' width={50} />
                        France</Link>
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <DE className='rounded-lg' width={50} />
                        Germany</Link>
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <ES className='rounded-lg' width={50} />
                        Spain</Link>
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <IT className='rounded-lg' width={50} />
                        Italy</Link>
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <AU className='rounded-lg' width={50} />
                        Australia</Link>

                </div>


            </div>

            <div
                className="bg-gray-100 p-4  flex justify-between items-center h-24 relative lg:hidden"
            >
                <Link href={'/'}
                    className="flex gap-1 items-center font-bold hover:text-sky-400 "
                >
                    Main menu
                </Link>

                <button
                    onClick={() => settoogel(prev => !prev)}
                    className="lg:hidden px-4 "
                >
                    <RxHamburgerMenu />
                </button>


                <div className=" gap-4 items-center flex flex-col bg-inherit w-full p-4 absolute top-20 right-0 duration-500 z-50"
                    style={{
                        clipPath: toogel ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(0 0, 100% 0, 100% 0, 0 0)'
                    }}
                >
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <US title="United States" className='rounded-lg' width={50} />
                        usa
                    </Link>
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <CA title="Canda" className='rounded-lg' width={50} />
                        canada
                    </Link>
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <GB title='GB' className='rounded-lg' width={50} />
                        uk</Link>
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <FR className='rounded-lg' width={50} />
                        France</Link>
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <DE className='rounded-lg' width={50} />
                        Germany</Link>
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <ES className='rounded-lg' width={50} />
                        Spain</Link>
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <IT className='rounded-lg' width={50} />
                        Italy</Link>
                    <Link href='/' className='hover:text-sky-500 flex flex-col items-center'>
                        <AU className='rounded-lg' width={50} />
                        Australia</Link>

                </div>
            </div>

        </header>
    )
}

export default Navbar