function SecondaryButton(props) {
    return (
        <button className='border-l-4 border-r-4 px-10 py-3 '>
            <div className='text-sm tracking-figma-wide font-bold'>
                {props.text}
            </div>
        </button>
    )
}

export default SecondaryButton
