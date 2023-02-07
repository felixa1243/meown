import useFetch from "../../../../hook/useFetch";
import Lottie from "lottie-react";
import empty from '../../../../assets/animation/empty.json'

const ListHoc = (ListComp, opts) => {
    return (props) => {
        const [data, error, loading] = useFetch(opts.service())
        return (
            <div className={'bg-brand-secondary h-screen'}>
                {
                    loading && (
                        <p>Loading...</p>
                    )
                }
                {
                    data && data.data?.length > 0 ? (
                        <ListComp
                            data={data.data}
                        />
                    ) : (
                        <div className={'w-full h-screen flex flex-col justify-center items-center'}>
                            <p className={'text-2xl font-bold font-poppins text-brand-primary'}>Empty...</p>
                            <Lottie animationData={empty} className={'h-[60%]'}/>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default ListHoc