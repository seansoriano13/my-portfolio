import { Outlet } from 'react-router-dom'

import { useWindowScroll } from 'react-use'
import { ArrowUpFromLine } from 'lucide-react'
import { SOCIAL_LINKS } from '../data/socialLinks'

function Logo({ color }) {
    return (
        <svg
            className={`h-15 ${color}`}
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

function HomeLayout() {
    const { y } = useWindowScroll()
    const isScrolled = y > 20

    function handleScroll() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    return (
        <div>
            {/* NAVBAR */}
            <nav
                className={`transition-all duration-200 ease-in w-full bg-transparent mx-auto fixed top-0 z-1000 p-4 flex justify-between items-center ${
                    isScrolled
                        ? 'bg-transparent backdrop-blur-md shadow-sm py-2'
                        : 'bg-transparent'
                }`}
            >
                {<Logo color={'text-white'} />}
                {/* <Menu
                    size={35}
                    color='white'
                /> */}
            </nav>
            <div>
                <Outlet />
            </div>

            <footer className='flex flex-col md:flex-row gap-6 items-center justify-around w-full p-6 text-sm bg-black text-white/80'>
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
