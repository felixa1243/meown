import Add from "../Index";
const Products_Form = [
    {id: "packageName", label: "Package Name", type: "text"},
    {id: "description", label: "Description", type: "text"},
    {id: "price", label: "Package Price", type: "number"},
]

const AddPackage = () =>{
    return (
        <Add
            data={Products_Form}
        />
    )
}
export default AddPackage