
import {useDispatch, useSelector} from 'react-redux'



export const useUpdateFields = () => {

    const dispatch = useDispatch()

    const fields = useSelector(state => state.person.form.fields)

    return {
        fields,
        setFormField: (field, value) => {
            console.log(`Updating field ${field} to ${value}`)
            return dispatch(actions.setFormField({field, value}))
        },
    }
}




export const useNewPerson = () => {

        const dispatch = useDispatch()

        const onSubmit = () => {
            dispatch(actions.createPerson())
        }

        return {
            onSubmit,
        }
    }
