import React, { Component } from 'react';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

export default class Main extends Component {
  static navigationOptions = {
    title: "Turmas"
  }

  state = {
    docs: [
      {
        _id: "1",
        nome: "1º ano",
        turno: "Manhã",
        qtdAlunos: 21
      },
      {
        _id: "2",
        nome: "2º ano",
        turno: "Tarde",
        qtdAlunos: 17
      },
      {
        _id: "3",
        nome: "3º ano",
        turno: "Noite",
        qtdAlunos: 9
      },
      {
        _id: "4",
        nome: "2º ano",
        turno: "Manhã",
        qtdAlunos: 14
      }
    ]
  }

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.turmaContainer}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.turmaTitle}>{item.nome}</Text>
          <View style={{borderWidth: 2, borderRadius: 5, borderColor: "#4D4DFF", padding: 5, marginLeft: 10}}>
            <Text style={{fontSize: 10, fontWeight: "bold", color: "#4D4DFF"}}>{item.turno}</Text>
          </View>
        </View>
        <Text style={styles.turmaDescription}>{item.qtdAlunos} alunos matriculados</Text>
      </View>
    </TouchableOpacity>
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  list : {
    padding: 20
  },
  turmaContainer: {
    backgroundColor: "#EEE",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  turmaTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555"
  },
  turmaDescription: {
    fontSize: 16,
    color: "#888",
    marginTop: 5,
    lineHeight: 24
  }
})