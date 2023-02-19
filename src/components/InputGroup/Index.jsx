const InputGroup = ({className, type, label, ...props}) => {
    return (
        <div className={'flex gap-[1] w-full' + className}
             key={props.key}
        >
            <div className={'w-1/2'}>
                <label htmlFor={label} className={'hover:cursor-pointer'}>{label}</label>
            </div>
            <div className={'w-1/2'}>
                {
                    type === "textarea" ?
                        (
                            <textarea className={"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-brand-secondary focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"}
                                      id={label}
                                      {...props}
                            />
                        )
                        :
                        <input
                            type={type}
                            className={"focus:py-2 focus:outline-none focus:border-b-[3px] border-b-[#FF74B1] border-transparent border rounded w-full ease-in duration-300"}
                            id={label}
                            {...props}
                        />
                }
            </div>
        </div>
    )
}
export default InputGroup