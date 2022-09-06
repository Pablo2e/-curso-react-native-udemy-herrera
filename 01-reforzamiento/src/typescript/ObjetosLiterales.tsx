interface Persona {
    nombreCompleto: string;
    edad: number;
    dirección: Direccion;
}
interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Pablo',
        edad: 47,
        dirección: {
            pais: 'Canada',
            casaNo: 615
        }
    }

  return (
    <>
        <h3>Objetos Literales</h3>
        <code><pre>{JSON.stringify(persona, null, 2)}</pre></code>
    </>
  )
}
