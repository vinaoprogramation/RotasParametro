import React from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native"
import {useState} from 'react';

export default function AlunoCard( {aluno} ){   
    const [dados, setDados] = useState(aluno);
    console.log(aluno)



    return<>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Nome: {dados.nome}</Text>
                <Text>Idade: {dados.idade}</Text>
                <Text>Curso: {dados.curso}</Text>
                <Text>Cidade: {dados.cidade}</Text>
                <Text>{ aluno.idade>=18 ? "Maior de idade" : "Menor de idade"}</Text>

                <Button title='Mudar curso para ADS'
                onPress={() => setDados({
                    ...dados, curso: 'ADS'
                })}
                />
                
                <TouchableOpacity style={estilos.botao}
                onPress={() => setDados({
                    ...dados, curso: (aluno.curso)
                })}
                >
                    <Text style={estilos.texto}>Desmudar</Text>
                </TouchableOpacity>
            </View>
        </>
}


const estilos = StyleSheet.create({
    botao:{
        marginTop: 20,
        backgroundColor: 'green',
        color: 'white',
        padding: 20,
        width: 200,
        textAlign: 'center'
    },
    texto:{
        color:'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})