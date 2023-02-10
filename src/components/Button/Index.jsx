const Button = ({className, children, ...props}) => {
    let bgColor;
    switch (props.variants.toUpperCase()) {
        case 'PRIMARY':
            bgColor = 'bg-brand-primary'
            break;
        case 'SECONDARY':
            bgColor = 'bg-brand-secondary'
            break;
        case 'GRAY':
            bgColor = 'bg-gray-500'
            break;
        case 'SUCCESS':
            bgColor = 'bg-emerald-600'
            break;
        case 'INFO':
            bgColor = 'bg-blue-600'
            break;
        case 'DANGER':
            bgColor = 'bg-danger'
            break;
    }
    const classes = [className + ' ', ` ${bgColor}`].filter(c => c)
    return (
        <button
            className={"px-4 py-3 text-white rounded-xl flex justify-start " + classes}
            {...props}
        >
            {children}
        </button>
    )
}
Button.defaultProps = {
    variants: 'PRIMARY'
}
export default Button