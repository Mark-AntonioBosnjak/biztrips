import React from 'react'
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton} from 'react-admin'

const AdminList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='flug-von' />
            <TextField source='flug-nach' />
            <DateField source='datum'/>
            <TextField source='beschreibung' />
            <TextField source='preis' />
            <EditButton source='Edit' />
            <DeleteButton basePath='Delete' />
        </Datagrid>
    </List>
}

export default AdminList

