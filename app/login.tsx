import React from 'react'
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'


const login = () => {
  return (
    <LinearGradient colors={['#591e03', '#d70b26', '#a83204']}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      
      <View style={styles.formContainer}>

        <View style={{alignItems: 'center'}}>
            <MaterialCommunityIcons name="account-circle" size={100} color="#f7f7f7" />
        </View>

        <TextInput style={[styles.registerButton, {marginTop: 8}]} placeholder='E-mail'/>
        <TextInput style={[styles.registerButton, {marginTop: 8}]}placeholder='Password' secureTextEntry/>
        <TouchableOpacity style={[styles.registerButton, {marginTop: 32}]} onPress={() => {router.replace('/welcome')}}><Text>Login</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 15,
    width: 175,},
})
export default login