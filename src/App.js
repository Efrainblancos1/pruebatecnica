import DataTable, {createTheme,Alignment} from 'react-data-table-component';
import 'styled-components';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons' 

const App = () =>{    
  
  const [users, setusers] = useState([])
  const [tableusers, settableusers]= useState([])
  const [buscar,setbuscar]=useState("")
  const URL = 'https://restcountries.com/v3.1/all'
  const VerDatos = async () =>{
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setusers(data)
  }
  useEffect(()=>{
    VerDatos()
  },[])

  const columns = [
  {
    name: 'País',
    selector: row => row.name.common
  },
  {
    name: 'Capital',
    selector: row => row.capital
  },
  {
    name: 'Continente',
    selector: row => row.region
  },
    {
    name: 'Población',
    selector: row => row.population
  },
  ]
    // createTheme creates a new theme named solarized that overrides the build in dark theme
    createTheme('custom', {
      text: {
        primary: '#268bd2',
        secondary: '#2aa198',
      },
      background: {
        default: '#002b36',
      },
      context: {
        background: '#cb4b16',
        text: '#FFFFFF',
      },
      divider: {
        default: '#073642',
      },
      action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
      },
    }, 'dark');

    const MyComponent = () => (
      <DataTable
        title="Arnold Movies"
        columns={columns}
        theme="solarized"
      />
    );

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };



  //RETURN  
  return (
    <div className="App">
      <h1>Prueba técnica Efraín Blanco Salazar para TTN COMPANY</h1>


      <DataTable 
      columns={columns}
      data = {users}
      pagination
      paginationComponentOptions={paginationComponentOptions}
      subHeaderAlign={Alignment.Center}
      theme='custom'

      />


    </div>
  );
}


export default App;
