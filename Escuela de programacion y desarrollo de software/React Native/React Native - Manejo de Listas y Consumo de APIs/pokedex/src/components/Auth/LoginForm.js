import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user, userDetails } from '../../utils/userDB'

export default function LoginForm() {
  const [error, setError] = useState('')

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: true,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValue) => {
      setError('')
      const { username, password } = formValue

      if (username !== user.password || password !== user.password) {
        setError('El usuario o la contraseña no son correctos')
      } else {
        console.log('correcto')
      }
    }
  })

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder='Nombre de usuario'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <TextInput
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Button style={styles.button} title='Entrar' onPress={formik.handleSubmit} />


      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

const initialValues = () => {
  return { username: '', password: '' }
}
const validationSchema = () => {
  return {
    username: Yup.string().required('El usuario es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoría')
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  error: {
    textAlign: 'center',
    color: "#f00",
    marginTop: 5,
  },
  button: {
    marginTop: 10
  }
})