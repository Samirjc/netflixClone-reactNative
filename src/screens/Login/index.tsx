import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import leftArrow from "../../assets/icons/leftArrow.png"
import logo from "../../assets/icons/logo.png"

export const Login = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.logoWrapper}>
                <Image source={leftArrow} style={styles.arrowIcon}/>
                <Image source={logo} style={styles.logo}/>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Email ou número de telefone"
                placeholderTextColor={'#777'}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={'#777'}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.mediumText}>Precisa de ajuda?</Text>
            <Text style={styles.biggerText}>Novo por aqui? Inscreva-se agora.</Text>
            <Text style={styles.text}>O acesso está protegido pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.</Text>
        </View>
    )
}