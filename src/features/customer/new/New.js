import React,{useState} from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useUpdateFields } from '../hooks'
import formStyles from './styles'



const Form = ({ disabled = false, onSubmit }) => {
    const styles = StyleSheet.create(formStyles())
    const { fields, setFormField } = useUpdateFields()

    const {
        first_name,
        last_name,
    } = fields

    return (
        <View style={styles.container}>
            <View style={styles.form}></View>

            <TextInput
                key={'first_name'}
                placeholder='First Name'
                value={firstName}
                style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
                onChangeText={text => onChangeText('first_name', text)}
            />

            <View style={{ height: 15, width: '100%' }}></View>

            <TextInput
                key={'last_name'}
                placeholder='Last Name'
                value={lastName}
                style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
                onChangeText={v => setFormField('last_name', v)}
            />

            <TouchableOpacity
                onPress={onSubmit}
            >
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Form
