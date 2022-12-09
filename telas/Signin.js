import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    TextInput, 
    Image, 
    SafeAreaView, 
    TouchableOpacity, 
    StatusBar, 
    Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
const background = require('../assets/background.png');

export default function Login({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleLogin = () => {
        if (email !== "" && password !== ""){
            signInWithEmailAndPassword(auth, email, password)
                .then(() => console.log('Logado com sucesso'))
                .catch((err) => Alert.alert('Algo deu errado!', err.message));
        }
    };

    return(
        <View style={styles.container}>
            <Image source={background} style={styles.background} />
            <View style={styles.graySheet} />
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>Entrar</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Coloque seu e-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Coloque sua senhar"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
                    <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Entrar</Text>
                </TouchableOpacity>
                <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}} />
                <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Não tem uma conta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={{color: '#24FF00', fontWeight: '600', fontSize: 14}}>Cadastre-se</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      color: "#24FF00",
      alignSelf: "center",
      paddingBottom: 24,
    },
    input: {
      backgroundColor: "#fff",
      height: 58,
      marginBottom: 20,
      fontSize: 16,
      borderRadius: 10,
      padding: 12,
    },
    background: {
      width: "100%",
      height: 340,
      position: "absolute",
      top: 0,
      resizeMode: 'cover',
    },
    graySheet: {
      width: '100%',
      height: '75%',
      position: "absolute",
      bottom: 0,
      backgroundColor: '#1E1E1E',
      borderTopLeftRadius: 60,
    },
    form: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 30,
    },
    button: {
      backgroundColor: '#24FF00',
      height: 58,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
  });
