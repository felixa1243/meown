import {Link, useLocation} from "react-router-dom";
import {ROUTES} from "../../constant/Routing/ROUTES";
import logo from '../../assets/image/logo.svg'

const Navbar = (props) => {
    const links = [{
        link: ROUTES.package.list,
        text: 'Packages'
    }, {
        link: ROUTES.user.list,
        text: 'User'
    }, {
        link: ROUTES.transaction.list,
        text: 'Order'
    }]
    const location = useLocation()
    const currentPath = location.pathname.split("/")[1]
    return (<div className={'w-full bg-white flex h-[90px] items-center justify-between px-5 py-2'}>
        <div>
            <img src={logo} alt={'logo'}/>
        </div>
        <div className={'flex gap-5 items-center pr-4'}>
            {links.map((item, index) => {
                return (
                    <Link to={item.link}
                          className={`font-bold text-md xs:hidden ${item.link.includes(currentPath) ?
                              'text-white bg-black rounded-xl px-4 py-2 hover:text-brand-primary duration-300 ease-out ' :
                              'text-brand-primary hover:text-black'
                          }`}
                          key={index}>{item.text}</Link>
                )
            })}
            <p onClick={() => props.onLogout()}
               className={'text-xl font-bold ml-4 hover:cursor-pointer'}>Logout</p>
            <div className={'flex flex-col justify-center items-center gap-1 sm:hidden h-[40px] w-[25px] px-1'}>
                <span className={'block h-[3px] w-full bg-black'}/>
                <span className={'block h-[3px] w-full bg-black'}/>
                <span className={'block h-[3px] w-full bg-black'}/>
            </div>
        </div>
    </div>)
}
export default Navbar