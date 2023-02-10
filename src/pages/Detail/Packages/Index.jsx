import Detail from "../Index";
import {getPackagesById} from "../../../service/PackageService";
import {ROUTES} from "../../../constant/Routing/ROUTES";
import {formatCurrency} from "../../../utils/currency";

const PackageDetails = ({data}) => {
    return (
        <div className={'w-full rounded-lg p-5 font-bold font-poppins'}>
            <div className={'flex'}>
                <div className={'w-1/2 flex flex-col'}>
                    <p className={'font-bold'}>Id</p>
                    <p className={'font-bold'}>Package Name</p>
                    <p className={'font-bold'}>Description</p>
                    <p className={'font-bold'}>Price</p>
                </div>
                <div className={'w-1/2 flex flex-col'}>
                    {
                        data && Object.keys(data?.data).map((k, index) => {
                            if (index === 3) {
                                return (
                                    <p className={'font-bold'}>: {formatCurrency(data?.data.price)}</p>
                                )
                            }
                            return (
                                <p className={'font-bold'} key={index}>: {data?.data[k]}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Detail(PackageDetails, {
    getService: getPackagesById,
    back: ROUTES.package.list,
    edit:ROUTES.package.edit+'/'
});