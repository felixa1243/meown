import ListComponent from "./ListComponent/Index";
import ListHoc from "../shared/components/ListHoc/Index";
import {getOrder} from "../../service/Order";
const Order = ({data})=>{
    return (
        <ListComponent list={data}/>
    )
}
export default ListHoc(Order,{
    service:getOrder
})