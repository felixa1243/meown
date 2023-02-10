import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../../hook/useFetch";
import loadingAnimation from '../../assets/animation/loading.json'
import Lottie from "lottie-react";
import {TiArrowBack} from "react-icons/ti";
import {Button, Card} from "../../components/Index";

const Detail = (RenderComponent, opts) => {
    const InnerComponent = () => {
        const {id} = useParams()
        const [data, , loading] = useFetch(opts.getService(id))
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
                    <TiArrowBack
                        size={30}
                        onClick={() => navigate(opts.back)}
                        className={'hover:cursor-pointer'}/>
                </div>
                <Card className={'w-full rounded-lg p-5 p-5 font-bold font-poppins flex flex-col items-start'}>
                    <RenderComponent data={data}/>
                    <div className={'self-end flex gap-3 mt-5'}>
                        <Button variants={'info'}
                                onClick={()=> navigate(opts.edit+id)}
                        >Update</Button>
                        <Button variants={'danger'}>Delete</Button>
                    </div>
                </Card>
            </div>
        )
    }
    return InnerComponent
}
export default Detail