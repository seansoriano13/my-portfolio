function SecondaryButton(props) {
    return (
        <div>
            <button className='border-l-4 border-r-4 px-10 py-3 cursor-pointer'>
                <div className='text-sm tracking-figma-wide font-bold'>
                    {props.text}
                </div>
            </button>
        </div>
    )
}

export default SecondaryButton
