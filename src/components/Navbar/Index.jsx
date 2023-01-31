import Button from "../Button/Index";

const Navbar = (props) =>{
    return (
        <div>
            <Button
                onClick={()=>props.onLogout()}
            >Logout</Button>
        </div>
    )
}
export default Navbar