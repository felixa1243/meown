import {useNavigate} from "react-router-dom";
import useAddProduct from "./UseAddProduct";
import {Button, Card} from "../../components/Index";
import useFetchMutation from "../../hook/useFetchMutation";
import {addPackage} from "../../service/PackageService";
import {ROUTES} from "../../constant/Routing/ROUTES";
import InputGroup from "../../components/InputGroup/Index";

const Add = ({data}) => {
    const {getter, setter} = useAddProduct();
    const navigate = useNavigate();
    const [addError, , fetchMutation] = useFetchMutation(
        addPackage,
        () => navigate(ROUTES.package.list)
    );
    const submitHandler = (e) => {
        e.preventDefault();
        fetchMutation(getter)
    }

    return (
        <div className={'w-full bg-red-500 p-5 font-bold font-poppins flex justify-center'}>
            <Card className={'w-1/2 mt-8 flex rounded-lg p-6 flex'}>
                <div className={'w-full flex flex-col'}>
                    <form
                        className={'w-full flex flex-col items-start'}>
                        {
                            data.map((item) => {
                                return (
                                    <InputGroup
                                        label={item.label}
                                        type={item.type}
                                        onChange={setter[item.id]}
                                        placeholder={item.placeholder}
                                        key={item.id}
                                        className={'w-full mb-3'}
                                    />
                                )
                            })
                        }
                        {addError && (<p className={'text-danger'}>{addError.response.data.message.replace(/\[|\]/g," ")}</p>)}
                        <Button onClick={submitHandler} className={'mt-5'}> Add Package </Button>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default Add;
