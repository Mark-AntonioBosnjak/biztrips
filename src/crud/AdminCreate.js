import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const AdminCreate = (props) => {
    return(
        <Create title='Create a Flight' {...props}>
            <SimpleForm>
            <TextInput source='id' />
            <TextInput source='flug-von' />
            <TextInput source='flug-nach' />
            <DateInput source='datum'/>
            <TextInput source='beschreibung' />
            <TextInput source='preis' />
            </SimpleForm>
        </Create>
    )
}

export default AdminCreate