const Button = ({className, children, ...props}) => {
    let bgColor;
    switch (props.variants.toUpperCase()){
        case 'PRIMARY':
           bgColor =  '-brand-primary'
            break;
        case 'SECONDARY':
            bgColor = '-brand-secondary'
            break;
        case 'WHITE':
            bgColor = '-white'
            break;
    }
    const classes = [className+' ',` bg${bgColor}`].filter(c => c)
    return (
        <button
            className={"px-4 py-3 text-white rounded-xl w-full " + classes}
            {...props}
        >
            {children}
        </button>
    )
}
Button.defaultProps = {
    variants:'PRIMARY'
}
export default Button