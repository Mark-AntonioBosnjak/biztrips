import React from 'react'
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton, ImageField} from 'react-admin'

const FlightList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='flug-von' />
            <TextField source='flug-nach' />
            <DateField source='datum'/>
            <TextField source='beschreibung' />
            <TextField source='preis' />
            <ImageField source ='image' />
        </Datagrid>
    </List>
}

export default FlightList