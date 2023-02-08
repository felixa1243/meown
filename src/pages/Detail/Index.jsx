import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../../hook/useFetch";
import loadingAnimation from '../../assets/animation/loading.json'
import Lottie from "lottie-react";
import {TiArrowBack} from "react-icons/ti";

const Detail = (RenderComponent, opts) => {
    const InnerComponent = () => {
        const {id} = useParams()
        const [data, error, loading] = useFetch(opts.getService(id))
        const navigate = useNavigate()
        return (
            <div className={'bg-brand-secondary h-screen p-5'}>
                {
                    loading && (
                        <Lottie
                            animationData={loadingAnimation}
                        />
                    )
                }
                <div className={'w-full mb-5'}>
                    <TiArrowBack size={30} onClick={()=>navigate(opts.back)} className={'hover:cursor-pointer'}/>
                </div>
                <RenderComponent data={data}/>
            </div>
        )
    }
    return InnerComponent
}
export default Detail