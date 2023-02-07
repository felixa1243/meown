import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../constant/ROUTES";
import cat from '../../assets/image/cat.svg'
import TextInput from "./components/TextInput";
import {formList} from "./formList";
import {useReducer} from "react";
import {loginReducer, state} from "./reducers/loginReducer";
import {Badge, Button} from "../../components/Index";
import useFetchMutation from "../../hook/useFetchMutation";
import {login} from "../../service/AuthService";
import {setToken} from "../../utils/token";
import {setUser} from "../../utils/userInfo";
import loadingAnimation from "../../assets/animation/loading.json";
import Lottie from "lottie-react";

const Login = () => {
    const [loginInfo, dispatch] = useReducer(loginReducer, state)
    const navigate = useNavigate()
    const [authFail, loginLoading, loginMutation] = useFetchMutation(login, (data) => {
        const {data: datas} = data
        setToken(datas.token)
        setUser(JSON.stringify(datas.data))
        navigate(ROUTES.package.list)
    })
    const onSubmit = e => {
        e.preventDefault()
        loginMutation(loginInfo)
    }
    const invalidSubmit = loginInfo.email.length < 6 || loginInfo.password.length < 6
    return (
        <div className={"w-full h-screen flex justify-center bg-brand-secondary items-center font-poppins"}>
            <div className={"h-[651px] flex shadow-xl"}>
                <div
                    className={"w-[534px] h-full bg-brand-primary flex flex-col justify-center items-center rounded-l-xl"}>
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
                        {loginLoading && (
                            <Lottie animationData={loadingAnimation} className={'h-[60%]'}/>
                        )}
                        {!loginLoading && (
                            <form
                                className={"flex flex-col gap-2 mt-5 w-[70%] items-center"}
                                onSubmit={onSubmit}
                            >
                                {
                                    formList.map((item) => {
                                        return (
                                            <TextInput label={item.label}
                                                       onChange={(e) => dispatch(item.onChange(e.target.value))}
                                                       key={item.label}
                                                       type={item.type}
                                            />
                                        )
                                    })
                                }
                                {(authFail && authFail.code === "ERR_BAD_REQUEST") && (
                                    <p className={"text-md text-rose-500 self-start"}>Login error: User not found</p>
                                )}
                                {
                                    (authFail && authFail.code !== "ERR_BAD_REQUEST") && (
                                        <p className={"text-md text-danger self-start"}>Login error: {authFail.message}</p>
                                    )
                                }
                                <Button className={"mt-3"}
                                        type={"submit"}
                                        disabled={loginLoading || invalidSubmit}>Login</Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login