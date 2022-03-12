import React from 'react';
import { Loading } from './Loading';

class ClassState extends  React.Component {
  constructor(props){
    super(props);

    this.state = {
      error: true,
      loading: false
    };
  }

  componentDidUpdate(){
    console.log('actualizacion')

    if(this.state.loading){
      setTimeout(() => {
        console.log('haciendo la validacion')
  
        this.setState({loading: false})
  
        console.log('despues')
      }, 3000)
    }

  }


  // UNSAFE_componentWillMount(){
  //   console.log('componentWillMount');
  // }

  componentDidMount(){
    console.log('componentDidMount');
  }

  render() {

    return (
      <div>
        <h2> Eliminar {this.props.name}</h2>

        {this.state.error && (
          <p> Error: es incorrecto </p>
        )}

        {this.state.loading && (
          <Loading />
        )}


        <p>Por favor, escribe el código de seguridad</p>

        <input placeholder="Código de seguridad"/>
        <button
          onClick={() => this.setState({loading: true})}
        >Comprobar</button>

      </div>
    )
  }
}

export { ClassState };