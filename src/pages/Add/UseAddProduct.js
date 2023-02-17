import React from "react";
import {onChangeFile, onChangeText} from "../../utils/eventHandlers";

const useAddProduct = () => {
    const [packageName, setPackageName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [isDisable, setDisable] = React.useState(true);

    const getter = {packageName, description, price};
    const setter = {
        packageName: onChangeText(setPackageName),
        description: onChangeText(setDescription),
        price: onChangeText(setPrice),
    }

    React.useEffect(() => {
        if (packageName && description && price) {
            setDisable(false)
        } else setDisable(true)
    }, [packageName, description, price])

    return {
        getter, setter
    }
}

export default useAddProduct;
