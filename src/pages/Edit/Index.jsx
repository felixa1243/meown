import {useReducer} from "react";
import InputGroup from "../../components/InputGroup/Index";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Card} from "../../components/Index";
import useFetchMutation from "../../hook/useFetchMutation";
import {TiArrowBack} from "react-icons/ti";

const Edit = ({formList, reducer, initialState, editService, ...props}) => {
    const [formData, dispatch] = useReducer(reducer, initialState)
    const {id} = useParams()
    const navigate = useNavigate()
    const [, , edit] = useFetchMutation(editService, () => {
        navigate(props.backPath)
    })
    const handleSubmit = e => {
        e.preventDefault()
        edit(editService(id, formData))
    }
    return (
        <div className={'w-full flex justify-center pt-5 font-poppins flex-col justify-center'}>
            <div className={'flex justify-between px-3 py-2'}>
                <Card className={'flex items-center gap-2 px-3 py-2 rounded-lg hover:cursor-pointer'} onClick={()=>{
                    navigate(props.backPath)
                }}>
                    <TiArrowBack size={20}/>
                    <h2>Back</h2>
                </Card>
                <Card className={'p-3 rounded-lg hover:cursor-pointer'}>
                    <h2>{props.section}</h2>
                </Card>
            </div>
            <div className={'w-full flex justify-center'}>
                <form
                    className={'w-1/2 bg-white px-5 py-3 rounded-lg shadow-md flex flex-col gap-3'}
                    onSubmit={handleSubmit}
                >
                    <p className={'font-bold my-3'}>Item id: {id}</p>
                    {formList.map((item) => {
                        return (
                            <InputGroup
                                type={item.type}
                                label={item.label}
                                onChange={e => dispatch({type: item.action, payload: e.target.value})}
                                key={item.label}
                            />
                        )
                    })}
                    <div className={'w-full flex items-end mt-5 gap-3'}>
                        <Button variants={'gray'}>Update</Button>
                        <Button variants={'info'} type={"submit"}>Update</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Edit