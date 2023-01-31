const Button = ({className, children, ...props}) => {
    const classes = [className].filter(c => c)
    return (
        <button
            className={"px-4 py-3 bg-[#FF74B1] text-white rounded-xl w-full " + classes}
            {...props}
        >
            {children}
        </button>
    )
}
export default Button