import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const EnumHandler = ({ extend, defaultValue, valueKey, updateFunction, name }) => {
    const handleChange = (event) => {
        updateFunction({valueKey, value: event.target.value})
    }
    return <FormControl className="">
        <InputLabel shrink htmlFor="age-native-label-placeholder">
            {name}
                </InputLabel>
        <NativeSelect
            value={defaultValue}
            onChange={handleChange}
            inputProps={{
                name: valueKey,
                id: 'age-native-label-placeholder',
            }}
        >
            {Object.keys(extend).map(
                (key) => {
                    const {value, name} = extend[key]
                    return <option value={value}>{name}</option>
                }
            )}
        </NativeSelect>
    </FormControl>
}

export default EnumHandler