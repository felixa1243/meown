import {Navigate} from "react-router-dom";
import {ROUTES} from "../../constant/ROUTES";
import cat from '../../assets/image/cat.svg'
import TextInput from "./components/TextInput";
import {formList} from "./formList";
import {useReducer} from "react";
import {loginReducer, state} from "./reducers/loginReducer";
import {Badge, Button} from "../../components/Index";

const Login = (props) => {
    const [loginInfo, dispatch] = useReducer(loginReducer, state)
    if (localStorage.getItem("TOKEN")) {
        return (
            <Navigate to={ROUTES.package.list}/>
        )
    }
    return (
        <div className={"w-full h-screen flex justify-center bg-brand-secondary items-center font-poppins"}>
            <div className={"h-[651px] flex shadow-xl"}>
                <div className={"w-[534px] h-full bg-brand-primary flex flex-col justify-center items-center rounded-l-xl"}>
                    <img src={cat} alt={"cat"}/>
                    <h2 className={"text-5xl mt-9 font-bold text-[#3F3D56] flex items-start"}>.Meown.
                        <Badge>
                            Administrator
                        </Badge>
                    </h2>

                </div>
                <div className={"w-[534px] h-full bg-white rounded-r-xl flex justify-center items-center"}>
                    <div className={"w-full px-5 flex justify-center flex-col items-center"}>
                        <h2 className={"text-2xl font-bold"}>Login</h2>
                        <form
                            className={"flex flex-col gap-2 mt-5 w-[70%] items-center"}
                            onSubmit={(e) => e.preventDefault()}
                        >
                            {
                                formList.map((item) => {
                                    return (
                                        <TextInput label={item.label}
                                                   onChange={(e) => dispatch(item.onChange(e.target.value))}
                                                   key={item.label}/>
                                    )
                                })
                            }
                            <Button className={"mt-9"} type={"submit"}>Login</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login