import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../cores';
import { Entypo } from '@expo/vector-icons';
const logo = require('../assets/logo.png');
const container = require('../assets/component.png')
const widget = require('../assets/widget.png')

const Home = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>Gym App - GYM CHAT</Text>
            <Text style={styles.p}>Converse com o seu professor agora mesmo!</Text>
            <Text style={styles.p}>Dúvidas de treino? Contate-nos agora!</Text>
            <Image source={container} style={styles.imagecontainer} />
            <Image source={widget} style={styles.imagecontainer} />
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Chat")}
                    style={styles.chatButton}
                >
                    <Entypo name="chat" size={30} color={colors.lightGray} />
                </TouchableOpacity>
            </View>
        </View>
    );
    };

    export default Home;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: "#1e1e1e",
        },
        logo: {
            alignSelf: "center", 
            marginTop: 24,
        },
        imagecontainer: {
            alignSelf: "center", 
            marginTop: 20,
        },
        title: {
            fontSize: 36,
            fontWeight: 'bold',
            color: "#24FF00",
            alignSelf: "center",
            paddingBottom: 24,
            paddingTop: 30,
          },
        p: {
            fontSize: 15,
            fontWeight: 'regular',
            color: "#fff",
            alignSelf: "center",
            paddingBottom: 5,
            paddingTop: 10, 
        },
        chatButton: {
            backgroundColor: colors.primary,
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
            marginRight: 20,
            marginBottom: 50,
        }
    });