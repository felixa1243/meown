import {Link} from "react-router-dom";
import {ROUTES} from "../../constant/ROUTES";

const Navbar = (props) => {
    const links = [{
        link: ROUTES.package.list,
        text: 'Package'
    }, {
        link: ROUTES.user.list,
        text: 'User'
    }, {
        link: ROUTES.transaction.list,
        text: 'Order'
    }]
    return (<div className={'w-full bg-white flex h-[80px] items-center justify-between'}>
        <div className={''}>
        </div>
        <div className={'flex gap-5 items-end pr-4'}>
            {links.map((item, index) => {
                return (<Link to={item.link}
                              className={'text-brand-primary font-bold text-md'}
                              key={index}>{item.text}</Link>)
            })}
            <p onClick={() => props.onLogout()}
               className={'text-xl font-bold ml-4 hover:cursor-pointer'}>Logout</p>
        </div>
    </div>)
}
export default Navbar