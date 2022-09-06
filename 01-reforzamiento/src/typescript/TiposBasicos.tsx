import React from 'react'

export const TiposBasicos = () => {

    const nombre: string = 'Pablo';
    const edad = 47;
    let estaActivo: boolean = false;

    const poderes: string[] = [ 'Velocidad', 'Volar', 'Respirar en el agua']

  return (
    <>
        <h3>Tipos Basicos</h3>
        {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
        <br />
        {poderes.join(', ')}
    </>
  )
}
