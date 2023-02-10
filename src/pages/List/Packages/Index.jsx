import ListHoc from "../Index";
import RenderComponent from "./RenderComponent/Index";
import {getPackages} from "../../../service/PackageService";

const Products = ({data}) => {
    return (
            <div className={'bg-brand-secondary h-screen bg-brand-secondary'}>
                {
                    data && (
                        <RenderComponent list={data}/>
                    )
                }
            </div>
    )
}
export default ListHoc(Products, {
    service: getPackages
})