import { NavLink, Outlet } from 'react-router-dom'

import { useWindowScroll } from 'react-use'
import { ArrowUpFromLine } from 'lucide-react'
import { SOCIAL_LINKS } from '../data/socialLinks'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useDebounceCallback } from 'usehooks-ts'
import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-scroll'

function Logo({ color }) {
    return (
        <svg
            className={`h-15 lg:h-25 ${color}`}
            viewBox='0 0 100 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle
                cx='32'
                cy='50'
                r='16'
                stroke='currentColor'
                strokeWidth='1.8'
            />

            <ellipse
                cx='70'
                cy='55'
                rx='14.5'
                ry='15.5'
                stroke='currentColor'
                strokeWidth='1.8'
                transform='rotate(4 70 55)'
            />

            <path
                d='M48 49.5L55.5 53.5'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
            />

            <path
                d='M16 50H10'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                opacity='1'
            />
        </svg>
    )
}

function NavLinks({ setIsOpen }) {
    const Links = ['Skills', 'Projects', 'Contact']

    return Links.map((link) => {
        return (
            <li key={link}>
                <Link
                    to={link}
                    smooth={true}
                    duration={400}
                    offset={-40}
                    onClick={() => setIsOpen(false)}
                    setIsOpen={setIsOpen}
                >
                    {link}
                </Link>
            </li>
        )
    })
}

function HomeLayout() {
    const { y } = useWindowScroll()
    const isScrolled = y > 20

    function handleScroll() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen((prev) => !prev)
    }

    const debounced = useDebounceCallback(handleClick, 100)

    return (
        <div>
            {/* NAVBAR */}
            <nav
                className={`w-full transition-all duration-200 ease-in inset-x-0 fixed top-0 z-1000  ${
                    isScrolled && 'bg-black/0 backdrop-blur-md shadow-sm'
                }`}
            >
                <div className='wrapper py-3 flex justify-between items-center'>
                    {<Logo color={'text-white lg:text-black'} />}
                    <div
                        onClick={debounced}
                        className='lg:hidden'
                    >
                        {isOpen ? (
                            <X
                                size={35}
                                color='white'
                            />
                        ) : (
                            <Menu
                                size={35}
                                color='white'
                            />
                        )}
                    </div>
                    <div className='hidden sm:flex text-white list-none gap-12 '>
                        <NavLinks />
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key='div'
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 200 }}
                            transition={{ duration: 0.1 }}
                            className='wrapper bg-transparent backdrop-blur-sm shadow-2xl'
                        >
                            <ul className=' grid gap-6 justify-items-center py-6 text-white'>
                                <NavLinks setIsOpen={setIsOpen} />
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            <div>
                <Outlet />
            </div>

            <footer className='lg:grid lg:justify-items-center flex flex-col md:flex-row gap-6 items-center justify-around w-full p-6 text-sm bg-black text-white/80'>
                <div
                    onClick={() => handleScroll()}
                    className='grid gap-2 justify-items-center'
                >
                    <ArrowUpFromLine />
                    <div>Back To Top</div>
                </div>
                <div className='flex items-center gap-4'>
                    {SOCIAL_LINKS.map(({ name, icon, link }, index) => {
                        const Icon = icon
                        const isLast = index === SOCIAL_LINKS.length - 1
                        return (
                            <div
                                className='flex gap-3'
                                key={index}
                            >
                                <a
                                    key={name}
                                    href={link}
                                    className='cursor-pointer'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <Icon className='text-4xl text-white' />
                                </a>
                                {!isLast && (
                                    <div className='h-8 w-px bg-white/20'></div>
                                )}
                            </div>
                        )
                    })}
                </div>
                <p>Copyright © 2026 Seanxiety All Rights Reserved.</p>
            </footer>
        </div>
    )
}

export default HomeLayout
