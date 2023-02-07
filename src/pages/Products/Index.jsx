import ListHoc from "../shared/components/ListHoc/Index";
import ListComponent from "./components/ListComponent/Index";
import {getPackages} from "../../service/PackageService";
const Products = ({data}) => {
    return (
        <div className={'bg-brand-secondary h-full'}>
            {
                data && (
                    <ListComponent list={data}/>
                )
            }
        </div>
    )
}
export default ListHoc(Products,{
    service:getPackages
})