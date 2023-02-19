import {Card} from "../../components/Index";
import IncomingOrder from "./tab/Incoming/Index";
import OnWaiting from "./tab/OnWaiting/Index";
import Paid from "./tab/Paid/Index";
import {useState} from "react";

const ManageTransactions = () => {
    const constants = {
        pending: "pending",
        on_waiting: "on_waiting",
        paid: "paid"
    }
    const listButton = [
        {
            text: "Incoming transactions",
            tab: constants.pending,
            component: IncomingOrder
        },
        {
            text: "Waiting",
            tab: constants.on_waiting,
            component: OnWaiting
        }, {
            text: "Paid",
            tab: constants.paid,
            component: Paid
        }
    ]
    const [tab, setTab] = useState(constants.pending)
    let Component;
    switch (tab) {
        case constants.pending:
            Component = IncomingOrder
            break;
        case constants.on_waiting:
            Component = OnWaiting
            break;
        case constants.paid:
            Component = Paid
            break;
        default:
            Component = IncomingOrder
    }
    return (
        <div className={"h-screen bg-brand-secondary w-full p-5"}>
            <div className={"flex flex-col"}>
                <div className={"flex gap-1"}>
                    {
                        listButton.map((item, index) => (
                            <Card
                                className={"rounded-lg px-4 py-2 hover:cursor-pointer shadow-md"}
                                onClick={() => setTab(item.tab)}
                                key={index}
                            >
                                {item.text}
                            </Card>
                        ))
                    }
                </div>
            </div>
            <div className={"p-5"}>
                <Component/>
            </div>
        </div>
    )
}
export default ManageTransactions