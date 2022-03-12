import React from 'react';

const UseState = ( {name} ) => {
  const [error, setError] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  
  React.useEffect(() => {

    console.log('inicio')
    
    if(loading){
      setTimeout(() => {
        console.log('haciendo la validacion')
  
        loading(false)
  
        console.log('despues')
      }, 3000)
    }

    console.log('fin')
  }, [loading]);

  return (
    <div>
        <h2> Eliminar {name}</h2>

        <p>Por favor, escribe el código de seguridad</p>

        {error && (
          <p> Error: es incorrecto </p>
        )}

        {loading && (
          <p> Cargando... </p>
        )}

        <input placeholder="Código de seguridad"/>

        <button
          onClick={() => setLoading(true)}
        >Comprobar</button>
       
      </div>
  )
}

export { UseState };