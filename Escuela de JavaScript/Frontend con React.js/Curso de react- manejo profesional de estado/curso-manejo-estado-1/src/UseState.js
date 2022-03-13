import React from 'react';

const SECURITY_CODE = 'paradigma';

const UseState = ( {name} ) => {
  const [state, setState] = React.useState({
    value: '',
    error: false, 
    loading: false
  });

  // const [value, setValue] = React.useState('');
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(false);

  console.log(state);

  React.useEffect(() => {

    console.log('Empezando el efecto')
    
    if(state.loading){
      setTimeout(() => {
        console.log('haciendo la validacion')
  
        if(state.value === SECURITY_CODE){
          setState({
            ...state,
            error: false,
            loading: false
          });
          // setLoading(false);
          // setError(false);
        }else{
          setState({
            ...state,
            error: true,
            loading: false
          });
          // setError(true);
          // setLoading(false);
        }
        
        
  
        console.log('Terminando la validación');
      }, 3000)
    }

    console.log('Terminando el efecto');
  }, [state.loading]);

  return (
    <div>
        <h2> Eliminar {name}</h2>

        <p>Por favor, escribe el código de seguridad</p>

        {(state.error && !state.loading) && (
          <p> Error: es incorrecto </p>
        )}

        {state.loading && (
          <p> Cargando... </p>
        )}

        <input 
          placeholder="Código de seguridad"
          value={state.value}
          onChange={(event) => {

            setState({
              ...state,
              value: event.target.value
            });
            // setError(false);
            // setValue(event.target.value);
          }}
        />

        <button
          onClick={() => {
            // setError(false) // este fue
            setState({
              ...state,
              loading: true
            });
            // setLoading(true)
        }}
          
        >Comprobar</button>
       
      </div>
  )
}

export { UseState };