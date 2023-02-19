import RenderComponent from "./RenderComponent/Index";
import ListHoc from "../Index";
import {getOrder} from "../../../service/OrderService";
const Order = ({data})=>{
    return (
        <RenderComponent list={data}/>
    )
}
export default ListHoc(Order,{
    service:getOrder
})