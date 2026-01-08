import PrimaryButton from '../../components/primaryButton.jsx'
import SecondaryButton from '../../components/SecondaryButton.jsx'
import { SOCIAL_LINKS } from '../../data/socialLinks.js'

function Home() {
    const WHAT_I_DO = [
        {
            header: 'Design-to-Code',
            description:
                'Translating Figma designs into responsive, interactive websites using React and Tailwind or BEM (Block Element Modifier) CSS',
        },
        {
            header: 'Backend Solutions',
            description:
                'Building secure, serverless databases with Supabase and integrating complex APIs (like Amadeus) for real-time functionality.',
        },
        {
            header: 'Web Optimization',
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
    return (
        <div>
            <div className='relative h-screen bg-black pt-top-pad overflow-hidden'>
                <img
                    className='absolute bottom-0 left-[10%] h-[90dvh] w-auto max-w-none pointer-events-none z-10'
                    src='/landing-page-portrait.png'
                    alt='landing page background'
                />
                <img
                    className='z-10 absolute w-full h-[40dvh] bottom-0'
                    src='/white-background.png'
                    alt='white background'
                />
                <div className='slanted-divider' />
            </div>

            <div className='z-11 p-8 absolute right-0 bottom-0 flex justify-between w-full items-center'>
                <div className='text-white w-[80%]'>
                    <div className='text-lg font-bold'>Hi, I'm</div>
                    <div className='text-4xl font-bold'>Sean Soriano</div>
                    <div className='text-xs text-wrap'>
                        Information Technology Student & <br /> Aspiring
                        Full-Stack Developer. <br /> Specializing in React &
                        Supabase
                    </div>
                </div>
                <div className='grid gap-8'>
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
                                <Icon className='text-4xl text-white' />
                            </a>
                        )
                    })}
                </div>
            </div>

            {/* 'at' works as X and Y coordinates */}
            <div className='bg-radial-[at_50%_60%] from-white to-[#01010120] to-55%'>
                <div className=' pt-22 px-15 grid gap-12 justify-items-center items-center tracking-wider'>
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
                    <div className='grid gap-18'>
                        <SecondaryButton text='EXPLORE' />

                        <img
                            src='/glyph-separator.svg'
                            alt='glyph-separator'
                        />
                    </div>

                    {WHAT_I_DO.map((ido, idx) => {
                        return (
                            <div
                                key={idx}
                                className='grid gap-6'
                            >
                                <div className='text-lg font-bold tracking-figma-wide '>
                                    {ido.header.toUpperCase()}
                                </div>
                                <div className='text-description'>
                                    {ido.description}
                                </div>
                            </div>
                        )
                    })}

                    <PrimaryButton text='SKILLS' />

                    <div className='grid gap-10'>
                        <div className='text-3xl font-bold tracking-figma-wide text-center'>
                            USING NOW:
                        </div>

                        <div className='grid w-full justify-items-center gap-15 pb-28'>
                            {USING_NOW.map(({ src, alt, label }, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className='grid justify-items-center gap-7'
                                    >
                                        <img
                                            src={src}
                                            alt={alt}
                                        />
                                        <div className='text-3xl font-light tracking-wider'>
                                            {label}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-project-section-bg h-30 grid justify-items-center items-center'>
                <PrimaryButton text='PROJECTS' />
            </div>
            <div className='bg-neutral-900'>
                <div>
                    <div className='grid gap-2 justify-items-center font-semibold text-sm text-center p-6 text-zinc-50'>
                        TRABILIS - TRAVEL BOOKING WEB APP
                        <div className='h-px bg-white w-60'></div>
                    </div>
                </div>
            </div>
            <div className='grid gap-5 w-full p-6 bg-[url(/my-project-video-demo-bg.png)]'>
                <video
                    className='rounded-lg '
                    controls
                    playsInline
                    preload='metadata'
                >
                    <source
                        src='/videos/trabilis-demo.mp4 '
                        type='video/mp4'
                        className=''
                    />
                    <div className='text-red-500'>
                        Your browser doesn't support the video tag
                    </div>
                </video>
                <div className='grid gap-1 text-zinc-50/80 text-center text-xs'>
                    <div> Live right now! (For Educational Purposes)</div>
                    <a
                        className=' text-sm text-centeritalic text-blue-300 hover:underline'
                        href='https://trabilis.vercel.app/'
                    >
                        Trabilis - A Travel Booking Web Application
                    </a>
                </div>
            </div>

            <PrimaryButton text='CONTACT' />

            <div>**Page footer here**</div>

            <form>
                <input
                    name='name'
                    id='name'
                    type='text'
                    placeholder='Enter Your Full Name*'
                />
                <input
                    name='email'
                    id='email'
                    type='text'
                    placeholder='Enter Your Email*'
                />
                <input
                    name='number'
                    id='number'
                    type='text'
                    placeholder='Phone Number*'
                />
                <textarea
                    name='message'
                    id='message'
                    placeholder='Your Message*'
                ></textarea>

                <div>Submit</div>
            </form>
        </div>
    )
}

export default Home
