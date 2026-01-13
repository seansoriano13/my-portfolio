import { BiLogoGmail } from 'react-icons/bi'
import SecondaryButton from '../components/SecondaryButton.jsx'
import { SOCIAL_LINKS } from '../data/socialLinks.js'
import { FaFacebook } from 'react-icons/fa6'
import emailjs from '@emailjs/browser'
import { FaPhoneAlt } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton.jsx'
import { Link } from 'react-scroll'

function Home() {
    const WHAT_I_DO = [
        {
            header: 'Design-to-Code',
            image: '/design.png',
            description:
                'Translating Figma designs into responsive, interactive websites using React and Tailwind or BEM (Block Element Modifier) CSS',
        },
        {
            header: 'Backend Solutions',
            image: '/develop.png',
            description:
                'Building secure, serverless databases with Supabase and integrating complex APIs (like Amadeus) for real-time functionality.',
        },
        {
            header: 'Web Optimization',
            image: '/backend.png',
            description:
                'Ensuring code quality and safety through Git version control and optimizing applications for speed and mobile responsiveness.',
        },
    ]

    const USING_NOW = [
        {
            label: 'React',
            src: '/logo/react.svg',
            alt: 'React logo',
        },
        {
            label: 'Tailwind',
            src: '/logo/tailwind.svg',
            alt: 'Tailwind logo',
        },
        {
            label: 'Supabase',
            src: '/logo/supabase.svg',
            alt: 'Supabase logo',
        },
        {
            label: 'Node JS',
            src: '/logo/node.svg',
            alt: 'Node JS logo',
        },
        {
            label: 'Express JS',
            src: '/logo/express.svg',
            alt: 'Express JS logo',
        },
    ]

    const CONTACT_DETAILS = [
        {
            logo: BiLogoGmail,
            text: 'guitarisean@gmail.com',
            link: 'mailto:guitarisean@gmail.com',
        },
        {
            logo: FaFacebook,
            text: '@sseanxiety',
            link: 'fb.com/sseanxiety',
        },
        {
            logo: FaPhoneAlt,
            text: '09927831240 (DITO)',
            link: 'tel:09927831240',
        },
    ]

    const [status, setStatus] = useState('idle')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setStatus('submitting')

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            console.log('im clicked')
            const response = await emailjs.send(
                'service_5xjkb8h',
                'template-portfolio-sean',
                data,
                { publicKey: 'tbEyWCg3Fg66q4_o9' }
            )
            if (response.status === 200) {
                setStatus('success')
                console.log('SUCCESS!', response.status, response.text)
            }

            await new Promise((resolve) => setTimeout(resolve, 3000))
        } catch (error) {
            console.error(error)
            setStatus('error')
        } finally {
            setStatus('idle')
        }
    }

    return (
        <div>
            <div className='relative h-screen bg-black pt-top-pad overflow-hidden'>
                <img
                    className='absolute bottom-0 lg:left-[50%] left-10 h-[90dvh] w-auto max-w-none pointer-events-none z-10'
                    src='/landing-page-portrait.png'
                    alt='landing page background'
                />
                <div className='slanted-divider-white' />
                <div className='slanted-divider-black z-10 lg:z-0 lg:hidden' />
                <img
                    className='hidden lg:block absolute h-full  lg:-right-[40%] w-full'
                    src='/black-rectangle.png'
                    alt='black-rectangle.png'
                />
                <div className='z-10 wrapper absolute bottom-10 lg:inset-0 items-center lg:items-start lg:gap-6 flex lg:flex-col lg:justify-center justify-between'>
                    <div className='font-raleway text-white lg:text-black w-[80%]'>
                        <div className='text-lg md:text-5xl lg:text-5xl font-bold'>
                            Hi, I'm
                        </div>
                        <div className='text-4xl font-bold md:text-8xl lg:text-8xl lg:w-1/2'>
                            Sean Soriano
                        </div>
                        <div className='text-xs text-wrap lg:font-extrabold md:text-xl  lg:text-xl  lg:text-[#909090]'>
                            Information Technology Student & <br /> Aspiring
                            Full-Stack Developer. <br /> Specializing in React &
                            Supabase
                        </div>
                    </div>
                    <div className='grid gap-8 lg:grid-cols-3'>
                        {SOCIAL_LINKS.map(({ name, icon, link }) => {
                            const Icon = icon
                            return (
                                <a
                                    key={name}
                                    href={link}
                                    className='cursor-pointer'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <Icon className='text-4xl text-white lg:text-black' />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* 'at' works as X and Y coordinates */}
            <div className='white-black-radial-bg'>
                <div className='wrapper py-22 grid gap-12 justify-items-center items-center tracking-wider'>
                    <div>
                        <PrimaryButton text='ABOUT ME' />
                    </div>
                    <div className='text-description'>
                        I am a 4th-Year Information Technology student at Our
                        Lady of Fatima University with a passion for building
                        full-stack web applications. My journey began in my
                        freshman year, I view web development much like
                        architecture: seeing a website as a house built from the
                        ground up, or a complex structure made of modular "Lego"
                        components. I love the process of assembling these
                        pieces, logic, design, and database to create functional
                        home for users on the web.
                    </div>
                    <div className='text-description'>
                        Currently, I am seeking an internship opportunity where
                        I can apply my skills in React and Supabase to solve
                        real-world problems and further develop my architectural
                        approach to coding.
                    </div>
                    <div className='grid gap-18 justify-items-center'>
                        <Link
                            to='Projects'
                            smooth={true}
                            duration={400}
                            offset={120}
                        >
                            <SecondaryButton text='EXPLORE' />
                        </Link>

                        <img
                            src='/glyph-separator.svg'
                            alt='glyph-separator'
                        />
                    </div>

                    <div className='wrapper grid grid-cols-1 lg:grid-cols-2 gap-12 my-22'>
                        {WHAT_I_DO.map((ido, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className='relative grid gap-6 lg:last:col-span-2 last:place-item-center max-w-100 mx-auto'
                                >
                                    <div className='lg:text-2xl text-lg font-bold tracking-figma-wide '>
                                        {ido.header.toUpperCase()}
                                    </div>
                                    <div className='text-lg font-sans font-light leading-snug text-justify'>
                                        {ido.description}
                                    </div>
                                    <img
                                        className='absolute -top-7 -left-7 lg:-left-12'
                                        src={ido.image}
                                        alt=''
                                    />
                                </div>
                            )
                        })}
                    </div>

                    <img
                        src='/glyph-separator.svg'
                        alt='glyph-separator'
                    />

                    <div id='Skills'>
                        <PrimaryButton
                            text='SKILLS'
                            className='my-22'
                        />
                    </div>

                    <div className='grid gap-10'>
                        <div className='text-3xl font-bold tracking-figma-wide text-center lg:text-start'>
                            USING NOW:
                        </div>

                        <div className='grid lg:flex w-full items-center justify-items-center gap-15'>
                            {USING_NOW.map(({ src, alt, label }, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className='grid justify-items-center gap-7'
                                    >
                                        <img
                                            className='h-30'
                                            src={src}
                                            alt={alt}
                                        />
                                        <div className='text-3xl font-light tracking-wider '>
                                            {label}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div
                id='Projects'
                className='
                bg-[url("/my-project-section-bg.png")] 
                lg:bg-[url("/my-project-section-bg-desktop.png")]
                py-8 lg:py-22 grid justify-items-center items-center bg-cover bg-no-repeat'
            >
                <PrimaryButton text='PROJECTS' />
            </div>
            <div className='bg-neutral-900'>
                <div>
                    <div className='grid gap-4 justify-items-center font-semibold text-sm lg:text-lg text-center p-6 lg:py-10 text-zinc-50'>
                        <div className='grid gap-2 underline underline-offset-10'>
                            TRABILIS - TRAVEL BOOKING WEB APP
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid gap-5 w-full p-6 lg:p-22  bg-[url(/my-project-video-demo-bg.png)] bg-no-repeat bg-cover object-cover'>
                <div className='relative w-full aspect-video rounded-lg overflow-hidden bg-black lg:w-5xl mx-auto'>
                    <video
                        className='absolute inset-0 w-full transition-opacity duration-500'
                        playsInline
                        preload='metadata'
                        controls
                        src='/videos/trabilis-demo.mp4'
                    />
                </div>
                <div className='grid gap-1 lg:text-lg text-zinc-50/80 text-center text-xs'>
                    <div> Live right now! (For Educational Purposes)</div>
                    <a
                        className='lg:text-md text-sm text-centeritalic text-blue-300 hover:underline'
                        href='https://trabilis.vercel.app/'
                    >
                        Trabilis - A Travel Booking Web Application
                    </a>
                </div>
            </div>

            <div
                id='Contact'
                className='white-black-radial-bg'
            >
                <div className='wrapper py-22 grid gap-12 justify-items-center content-center'>
                    <PrimaryButton text='CONTACT' />
                    <div className='grid gap-4'>
                        {CONTACT_DETAILS.map((contact, idx) => {
                            const IconComponent = contact.logo
                            return (
                                <div
                                    key={idx}
                                    className='flex gap-2 items-center'
                                >
                                    <IconComponent size={30} />
                                    <a href={contact.link}>{contact.text}</a>
                                </div>
                            )
                        })}
                    </div>

                    <div className='grid gap-2 items-center text-description'></div>
                    <img
                        src='/glyph-separator.svg'
                        alt='glyph-separator'
                    />
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='grid gap-6 w-full justify-items-center lg:w-3xl'
                    >
                        <input
                            className='form-input'
                            type='text'
                            placeholder='NAME/COMPANY (OPTIONAL)'
                            {...register('name')}
                        />
                        <input
                            className='form-input'
                            type='text'
                            placeholder='EMAIL*'
                            {...register('email', { required: true })}
                        />
                        <input
                            className='form-input'
                            type='text'
                            placeholder='PHONE NUMBER*'
                            {...register('number', { required: true })}
                        />
                        <textarea
                            className='form-input h-40'
                            placeholder='YOUR MESSAGE'
                            {...register('message')}
                        ></textarea>
                        <input
                            type='hidden'
                            {...register('honey-pot')}
                        />
                        <div className='flex gap-2'>
                            {(errors.email || errors.number) && (
                                <span className='text-red-500'>
                                    Fill all required fields.
                                </span>
                            )}
                        </div>

                        <SecondaryButton
                            status={status}
                            type='submit'
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
