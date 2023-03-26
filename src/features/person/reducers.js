import {createSlice} from '@reduxjs/toolkit';

const name = 'person';

const initialState = {
    form : {
        fields: {
            first_name: null,
            last_name: null,
        }
    }
}



const reducers = {
    createPerson: (state) => {
        //todo
    },
    createPersonResult: ( state, {payload}) => {
        //todo
    },
    createPersonError: (state, {payload}) => {
        //todo
    },
    createPersonReset: (state) => {
        //todo
    },
    setFormField: (state, {payload}) => {
        const current = state.form.fields
        const {field, value} = payload

        const fields = {
            ...current,
            [field]: value
        }


}
}
const slice = createSlice({
    name,
    initialState,
    reducers
})

export const {
    createPerson,
    createPersonResult,
    createPersonError,
    createPersonReset,
    setFormField

} = slice.actions


export default slice.reducer
