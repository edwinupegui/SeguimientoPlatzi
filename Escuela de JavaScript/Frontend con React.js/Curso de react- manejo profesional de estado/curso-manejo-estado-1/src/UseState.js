import React from 'react';

const SECURITY_CODE = 'paradigma';

const UseState = ( {name} ) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  console.log(value);

  React.useEffect(() => {

    console.log('Empezando el efecto')
    
    if(loading){
      setTimeout(() => {
        console.log('haciendo la validacion')
  
        if(value === SECURITY_CODE){
          setLoading(false);
          // setError(false);
        }else{
          setError(true);
          setLoading(false);
        }
        
        
  
        console.log('Terminando la validación');
      }, 3000)
    }

    console.log('Terminando el efecto');
  }, [loading]);

  return (
    <div>
        <h2> Eliminar {name}</h2>

        <p>Por favor, escribe el código de seguridad</p>

        {(error && !loading) && (
          <p> Error: es incorrecto </p>
        )}

        {loading && (
          <p> Cargando... </p>
        )}

        <input 
          placeholder="Código de seguridad"
          value={value}
          onChange={(event) => {
            // setError(false);
            setValue(event.target.value);
          }}
        />

        <button
          onClick={() => {
            setError(false) // este fue
            setLoading(true)
        }}
          
        >Comprobar</button>
       
      </div>
  )
}

export { UseState };