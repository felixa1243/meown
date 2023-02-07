const Card = ({children, className}) => {
    return (
        <div className={`bg-white border border-[1px] `+className}>
            {children}
        </div>
    )
}
export default Card