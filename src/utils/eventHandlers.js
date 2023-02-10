
export const onChangeText = (callback) => (e) => {
    callback(e.target.value)
}

export const onChangeFile = (callback) => (e) => {
    if (e.target.files) {
        callback(e.target.files[0])
    }
}

export const onChangeTexts = (name, callback) => (e) => {
    callback((prevData) => ({
        ...prevData,
        [name]: e.target.value
    }))
}
