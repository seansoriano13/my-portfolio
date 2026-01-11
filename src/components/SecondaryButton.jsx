function SecondaryButton(props) {
    return (
        <div>
            <button
                disabled={props.status === 'submitting'}
                type={props.type}
                className={`${
                    props.status === 'success'
                        ? 'bg-green-400'
                        : 'bg-transparent'
                } border-black border-l-4 border-r-4 px-10 py-3 cursor-pointer transition-colors duration-1000 ease-in-out`}
            >
                <div className='text-sm tracking-figma-wide font-bold'>
                    {props.status === 'idle' && 'SUBMIT'}
                    {props.status === 'submitting' && 'SUBMITTING...'}
                    {props.status === 'success' && 'SUBMITTED!'}
                    {props.status === 'error' && 'ERROR!'}
                </div>
            </button>
        </div>
    )
}

export default SecondaryButton
