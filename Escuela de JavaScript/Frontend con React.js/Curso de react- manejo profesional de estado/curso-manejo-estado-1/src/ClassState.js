import React from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';

class ClassState extends  React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: '',
      error: false,
      loading: false
    };
  }

  componentDidUpdate(){
    console.log('actualizacion')

    if(this.state.loading){
      setTimeout(() => {
        console.log('haciendo la validacion')
  
        if(SECURITY_CODE === this.state.value){
          this.setState({ error: false, loading: false })
        }else{
          this.setState({error: true, loading: false })
        }
  
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

        {(this.state.error && !this.state.loading) && (
          <p> Error: es incorrecto </p>
        )}

        {this.state.loading && (
          <Loading />
        )}


        <p>Por favor, escribe el código de seguridad</p>

        <input 
          value={this.state.value}
          placeholder="Código de seguridad"
          onChange={(event) => {
            this.setState({ value: event.target.value })
          }}
        />
        <button
          onClick={() => this.setState({loading: true})}
        >Comprobar</button>

      </div>
    )
  }
}

export { ClassState };