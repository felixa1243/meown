import {useNavigate} from "react-router-dom";
import useAddProduct from "./UseAddProduct";
import {Button, Card} from "../../components/Index";
import useFetchMutation from "../../hook/useFetchMutation";
import {addPackage} from "../../service/PackageService";
import {ROUTES} from "../../constant/ROUTES";
import {Input} from "postcss";
import FormInput from "../../components/FormInput/Index";

const Add = ({data}) => {
    const {getter, setter} = useAddProduct();
    const navigate = useNavigate();
    const {fetchMutation} = useFetchMutation(
        addPackage,
        () => navigate(ROUTES.package.list)
    );

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = {
            "packageName" : getter.packageName,
            "description" : getter.description,
            "price" : getter.price.toString()
        };

        // formData.append("packageName", getter.packageName);
        // formData.append("description", getter.description);
        // formData.append("price", getter.price);

        fetchMutation(formData);
    }
    console.log(data)

    return (
        <Card className={'w-full rounded-lg p-5 font-bold font-poppins'}>
            <div className={'flex'}>
                <div className={'w-1/2 flex flex-col'}>
                    <form
                        className={'w-1/2 flex flex-col'}>
                        {
                            data.map((item, index) => {
                                return (
                                        <FormInput
                                            label={item.label}
                                            type={item.type}
                                            value={getter[item.id]}
                                            onChange={setter[item.id]}
                                            placeholder={item.placeholder}
                                            key={item.id}
                                        />
                                )
                            })
                        }
                        <Button onClick={submitHandler}> Add Package </Button>
                    </form>
                </div>
            </div>
        </Card>
    )
}

    export default Add;
