import ListHoc from "../Index";
import RenderComponent from "./RenderComponent/Index";
import {getPackages} from "../../../service/PackageService";
import {ROUTES} from "../../../constant/ROUTES";
import {Button} from "../../../components/Index";
import {useNavigate} from "react-router-dom";

const Products = ({data}) => {
    const navigate = useNavigate()
    return (
        <div className={'bg-brand-secondary h-screen bg-brand-secondary'}>
            <Button className={'w-[100px] font-bold'} style={{marginTop: 25, marginLeft:20}} onClick={()=>navigate(ROUTES.package.add)} > Add </Button>
            {
                data && (
                    <RenderComponent list={data}/>
                )
            }
        </div>
    )
}
export default ListHoc(Products,{
    service:getPackages
})