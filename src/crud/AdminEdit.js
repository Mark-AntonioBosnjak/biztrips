import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin'

const AdminEdit = (props) => {
    return (
    <Edit title="Edit a Flight" {...props}>
        <SimpleForm>
        <TextInput source='id' />
            <TextInput source='flug-von' />
            <TextInput source='flug-nach' />
            <DateInput source='datum'/>
            <TextInput source='beschreibung' />
            <TextInput source='preis' />
        </SimpleForm>
        </Edit>
    )
}

export default AdminEdit