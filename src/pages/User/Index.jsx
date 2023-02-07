import ListHoc from "../shared/components/ListHoc/Index";
import ListComponent from "./components/ListComponent/Index";
import {getUser} from "../../service/UserService";

const User = ({data}) => {
    return (
        <ListComponent list={data}/>
    )
}
export default ListHoc(User, {
    service: getUser
})