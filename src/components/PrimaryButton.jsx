function PrimaryButton(props) {
    return (
        <div>
            <button
                className={`${props.className} p-5 lg:px-10 bg-transparent border-6`}
            >
                <div className='text-sm font-bold lg:text-3xl tracking-figma-ultra-wide '>
                    {props.text}
                </div>
            </button>
        </div>
    )
}

export default PrimaryButton
