import useFetch from "../../hook/useFetch";
import {getSummary} from "../../service/DashboardService";
import {Card} from "../../components/Index";

const DashBoard = () => {
    const [data] = useFetch(getSummary())
    let summary
    let topSpenders
    if (data){
        summary = data?.data
        topSpenders = summary?.topSpenders
    }
    console.log(summary)
    return (
        <div className={"w-full p-5"}>
            <Card className={"w-full font-poppins rounded-lg p-8"}>
                <p className={"font-bold text-lg text-center mb-6"}>This month</p>
                {
                    data && (
                        <div className={"w-full mt-3 flex xs:flex-col"}>
                            <div className={"w-1/2"}>
                                <p className={"font-bold"}>Sale:</p>
                                <p>Rp.{summary.currentMonth.saleCount}</p>
                                <p className={"font-bold"}>Total:</p>
                                <p>{data?.data?.currentMonth.saleTotal} x transactions</p>
                            </div>
                            <div className={"w-1/2 xs:mt-3"}>
                                <p className={"font-bold"}>Top spenders:</p>
                                <ol className={"w-full mt-3"}>
                                    {
                                        topSpenders.length > 0 ? (
                                                topSpenders.map((item,index)=>(
                                                    <li key={item.user_id}>
                                                        <p><span className={"font-bold"}>#{index+1} </span>{item.name}</p>
                                                        <p><span className={"font-bold"}>Spent: </span>{item.total_spent}</p>
                                                    </li>
                                                ))
                                            ):
                                            (
                                                <p className={"text-gray-400"}>there is no record a this moment</p>
                                            )
                                    }
                                </ol>
                            </div>
                        </div>
                    )
                }
            </Card>
        </div>
    )
}
export default DashBoard