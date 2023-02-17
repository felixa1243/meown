import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../constant/Routing/ROUTES";
import cat from '../../assets/image/cat.svg'
import TextInput from "./components/TextInput";
import {formList} from "./formList";
import {useReducer, useState} from "react";
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
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const [authFail, loginLoading, loginMutation] = useFetchMutation(login, (data) => {
        const {data: datas} = data
        console.log(datas)
        if (datas.data.role !== "ADMIN") {
            setError(true)
        } else {
            navigate(ROUTES.package.list)
            setToken(datas.token)
            setUser(JSON.stringify(datas.data))
        }
    })
    const onSubmit = e => {
        e.preventDefault()
        loginMutation(loginInfo)
    }
    const invalidSubmit = loginInfo.email.length < 6 || loginInfo.password.length < 6
    return (
        <div className={"w-full h-screen flex justify-center bg-brand-secondary items-center font-poppins"}>
            <div className={"flex drop-shadow-lg px-5 h-[80%]"}>
                <div
                    className={"bg-brand-primary flex flex-col justify-center items-center rounded-l-xl w-1/2 p-20"}>
                    <div className={'w-1/2 flex flex-col justify-center items-center'}>
                        <img src={cat} className={'h-[70%]'} alt={"cat"}/>
                        <h2 className={"xs:text-4xl sm:text-5xl mt-9 font-bold text-[#3F3D56] flex items-start"}>.Meown.
                            <Badge>
                                Administrator
                            </Badge>
                        </h2>
                    </div>
                </div>
                <div className={"w-1/2 rounded-r-xl flex justify-center items-center bg-white border"}>
                    <div className={"w-full px-5 flex h-full justify-center flex-col items-center p-5"}>
                        {loginLoading && (
                            <Lottie animationData={loadingAnimation} className={'h-[60%]'}/>
                        )}
                        {!loginLoading && (
                            <form
                                className={"flex flex-col justify-center gap-2 mt-5 w-[70%] items-center h-full"}
                                onSubmit={onSubmit}
                            >
                                <h2 className={"text-2xl font-bold"}>Login</h2>
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
                                {error && (
                                    <p className={'text-danger'}>Error: Unauthorized user</p>
                                )}
                                <Button className={"mt-3 w-full flex justify-center"}
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