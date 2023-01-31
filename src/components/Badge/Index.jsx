const Badge = ({children,className,...props}) =>{
    return <span className={"bg-[#3F3D56] px-2 py-1 text-sm text-[#FF74B1] rounded-md "+className} {...props}>{children}</span>;
}
export default Badge