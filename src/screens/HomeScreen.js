import React from "react";
import { View, Text, Button, ScrollView } from "react-native";

export default function HomeScreen({navigation}){
    const alunos = [
        {id:1, nome:"João da Silva", idade: 16, curso:"Desenvolvimento", cidade:'Manoel Ribas'},
        {id:2, nome:"Amarildo Ferraz", idade: 52, curso:"informática", cidade:'João Pessoa'},
        {id:3, nome:"Maurício Pernambuco", idade: 45, curso:"Robótica", cidade:'Indaiatuba'},
        {id:4, nome:"Marcelino Marinho", idade: 12, curso:"Administração", cidade:'Belford Roxo'},
    ];

    return<>
        <ScrollView contentContainerStyle={{padding:20}}>
            <Text style={{fontSize:20, marginBottom: 10}}>
                Lista de Alunos:
            </Text>
            {alunos.map(aluno =>(
                <View key={aluno.id} style={{marginBottom:20}}>
                    <Button
                        title={aluno.nome}
                        onPress = {() => navigation.navigate('Detalhes', {aluno})}
                        />
                </View>
            ))}
        </ScrollView>
    </>
}