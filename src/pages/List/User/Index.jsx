import ListHoc from "../Index";
import RenderComponent from "./RenderComponent/Index";
import {getUser} from "../../../service/UserService";

const User = ({data}) => {
    return (
        <RenderComponent list={data}/>
    )
}
export default ListHoc(User, {
    service: getUser
})