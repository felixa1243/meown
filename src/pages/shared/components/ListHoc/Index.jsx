import useFetch from "../../../../hook/useFetch";
import Lottie from "lottie-react";
import empty from '../../../../assets/animation/empty.json'
import loadingAnimation from '../../../../assets/animation/loading.json'
const ListHoc = (ListComp, opts) => {
    const InnerComponent = () => {
        const [data, , loading] = useFetch(opts.service())
        return (
            <div className={'bg-brand-secondary h-screen'}>
                {
                    loading && (
                        <div className={'w-full h-screen flex flex-col justify-center items-center'}>
                            <Lottie animationData={loadingAnimation} className={'h-[60%]'}/>
                            <p className={'text-2xl font-bold font-poppins text-brand-primary'}>Loading...</p>
                        </div>
                    )
                }
                {
                    data && data.data?.length > 0 ? (
                        <ListComp
                            data={data.data}
                        />
                    ) : (
                        <div className={'w-full h-screen flex flex-col justify-center items-center'}>
                            <p className={'text-lg font-bold font-poppins text-brand-primary'}>Empty...</p>
                            <Lottie animationData={empty} className={'h-[60%]'}/>
                        </div>
                    )
                }
            </div>
        )
    }
    return InnerComponent
}
export default ListHoc