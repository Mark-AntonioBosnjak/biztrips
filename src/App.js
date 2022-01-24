import React from 'react';
import { Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import AdminList from './crud/AdminList'
import AdminCreate from './crud/AdminCreate'
import AdminEdit from './crud/AdminEdit.js'
import FlightList from './crud/FlightList.js'




function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource
     name='administration'
     list={AdminList}
     create={AdminCreate}
     edit={AdminEdit}
    />
    <Resource
     name='dashboard'
     list={FlightList}
    />
  </Admin>
}

export default App;
