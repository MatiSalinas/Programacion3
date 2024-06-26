import { useState } from 'react'

import './style.css'

function App() {

  return (
    <>
      <form >
        <h1>Formulario de registro</h1>
        <p>Por favor complete con sus datos el formulario.</p>

        <div className="nombreCompleto">
          <h2>Datos del estudiante</h2>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" />
          <label htmlFor="segundoNombre">Segundo Nombre</label>
          <input type="text" name="segundoNombre" />
          <label htmlFor="apellido">Apellido</label>
          <input type="text" name="apellido" />
        </div>
        
        <div className="direccion">
          <h2>Direccion</h2>
          <label htmlFor="calle">Calle</label>
          <input type="text" name='calle'/>
          <label htmlFor="numero">Numero</label>
          <input type="text"name='numero' />
          <div className="bloque">
            <label htmlFor="ciudad">Ciudad</label>
            <input type="text" name='ciudad'/>
            <label htmlFor="provincia">Provincia</label>
            <input type="text" name='provincia'/>
          </div>
          <label htmlFor="cPostal">Codigo Postal</label>
          <input type="text" name='cPostal'/>
        </div>

        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="text" name='email' />
  
        </div>

      <div className="contrasenia">
        <label htmlFor="password">Contrasenia</label>
        <input type="text" name='password' />
      </div>

      <div className="carrera">
        <select name="carreras">
                <option value="1">Windows 8</option>
                <option value="2">Introduction to Linux</option>
                <option value="3">English 101</option>
                <option value="4">English 102</option>
                <option value="5">Creative Writing 1</option>
                <option value="6">Creative writing 2</option>
                <option value="7">History 01</option>
                <option value="8">History 02</option>
                <option value="9">Math 01</option>
                <option value="10">Math 02</option>
        </select>
      </div>

      </form>
    </>
  )
}

export default App
