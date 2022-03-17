import React from 'react';

const SECURITY_CODE = 'paradigma';

const UseReducer = ({ name }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {

    console.log('Empezando el efecto')

    if (state.loading) {
      setTimeout(() => {
        console.log('haciendo la validacion')

        if (state.value === SECURITY_CODE) {
          dispatch({ type: 'CONFIRM' })
        } else {
          dispatch({ type: 'ERROR' })
        }

        console.log('Terminando la validación');
      }, 3000)
    }

    console.log('Terminando el efecto');
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
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
            dispatch({ type: 'WRITE', payload: event.target.value })
          }}
        />

        <button
          onClick={() => {
            dispatch({ type: 'CHECK' })
          }}

        >Comprobar</button>

      </div>
    )

  } else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>Pedimos confirmación ¿tas seguro?</p>
        <button
          onClick={() => {
            dispatch({ type: 'DELETE' })
          }}
        >Si, eliminar</button>
        <button
          onClick={() => {
            dispatch({ type: 'RESET' })
          }}
        >
          Nop, me arrepentí</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Eliminado con exito</p>

        <button
          onClick={() => {
            dispatch({ type: 'RESET' })
          }}
        >
          Resetear</button>


      </React.Fragment>
    );
  }

}


const initialState = {
  value: '',
  error: false,
  loading: false,
  delete: false,
  confirmed: false
}

const reducerObject = (state, payload) => ({
  'ERROR': {
    ...state,
    error: true,
    loading: false
  },
  'CHECK': {
    ...state,
    loading: true
  },
  'CONFIRM': {
    ...state,
    error: false,
    loading: false,
    confirmed: true
  },
  'WRITE': {
    ...state,
    value: payload
  },
  'DELETE': {
    ...state,
    deleted: true,
  },
  'RESET': {
    ...state,
    confirmed: false,
    deleted: false,
    value: ''
  },

});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type]
  } else {
    return state;
  }
}

export { UseReducer };