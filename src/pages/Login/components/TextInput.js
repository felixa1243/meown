const TextInput = ({className, label, ...props}) => {
    const classes = [className].filter(c => c)
    return (
        <div className={"flex flex-col w-full " + classes} {...props} key={props.key}>
            <label
                htmlFor={label}
                className={"text-lg"}
            >
                {label}
            </label>
            <input type={"text"}
                   className={"focus:py-2 focus:outline-none focus:border-b-[3px] border-b-[#FF74B1] border-transparent border rounded w-full ease-in duration-300"}
                   id={label}
                   {...props}
            />
        </div>
    )
}
export default TextInput