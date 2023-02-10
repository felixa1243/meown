const Card = ({children, className,...props}) => {
    return (
        <div className={`bg-white border border-[1px] `+className} {...props}>
            {children}
        </div>
    )
}
export default Card