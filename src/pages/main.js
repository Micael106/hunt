import React, { Component } from 'react';

import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import Modal, { SlideAnimation, ModalTitle, ModalContent } from 'react-native-modals'

export default class Main extends Component {
  static navigationOptions = {
    title: "Turmas"
  }

  state = {
    modalVisible: false,
    selectedTurmaId: "1",
    alunos: [
      {
        _id: "1",
        nome: "Micael Lopes da Silva",
        fotoUrl: "https://www.w3schools.com/w3images/avatar2.png"
      },
      {
        _id: "2",
        nome: "João Higo Souza Nunes",
        fotoUrl: "https://www.w3schools.com/w3images/avatar2.png"
      },
      {
        _id: "3",
        nome: "Fulano da Silva",
        fotoUrl: "https://www.w3schools.com/w3images/avatar2.png"
      }
    ],
    turmas: [
      {
        _id: "1",
        nome: "1º ano",
        turno: "Manhã",
        qtdAlunos: 21,
        disciplinas: [
          {
            nome: "Português",
            aulas: [
              {
                nome: "Aula 1",
                alunos: ["1","2"]
              },
              {
                nome: "Aula 2",
                alunos: ["3"]
              }
            ]
          }
        ]
      },
      {
        _id: "2",
        nome: "2º ano",
        turno: "Tarde",
        qtdAlunos: 17,
        disciplinas: [
          {
            nome: "Matemática",
            aulas: [
              {
                nome: "Aula 1",
                alunos: ["1","2"]
              },
              {
                nome: "Aula 2",
                alunos: ["3"]
              }
            ]
          }
        ]
      },
      {
        _id: "3",
        nome: "3º ano",
        turno: "Noite",
        qtdAlunos: 9,
        disciplinas: [
          {
            nome: "Português",
            aulas: [
              {
                nome: "Aula 1",
                alunos: ["1","2"]
              }
            ]
          }
        ]
      },
      {
        _id: "4",
        nome: "2º ano",
        turno: "Manhã",
        qtdAlunos: 14,
        disciplinas: [
          {
            nome: "Português",
            aulas: [
              {
                nome: "Aula 1",
                alunos: ["1","2"]
              },
              {
                nome: "Aula 2",
                alunos: ["3"]
              }
            ]
          }
        ]
      }
    ]
  }

  openModal(turmaId) {
    this.setState({
      modalVisible: true,
      selectedTurmaId: turmaId
    });
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.openModal(item._id)}>
      <View style={styles.turmaContainer}>
        <View style={styles.turmaTitleView}>
          <Text style={styles.turmaTitle}>{item.nome}</Text>
          <View style={styles.turmaTurno}>
            <Text style={styles.turmaTurnoText}>{item.turno}</Text>
          </View>
        </View>
        <Text style={styles.turmaDescription}>{item.qtdAlunos} alunos matriculados</Text>
      </View>
    </TouchableOpacity>
  )

  renderItemDisciplina = ({ item }) => (
    <TouchableOpacity onPress={() => {}}>
      <View style={{}}>
        <Text style={{}}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.turmas}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
        />
        <Modal.BottomModal
          visible={this.state.modalVisible}
          height={0.5}
          width={1}
          onTouchOutside={() => this.closeModal()}
          onSwipeOut={() => this.closeModal()}
          modalTitle={
            <ModalTitle
              title={'Aulas da turma '+this.state.turmas.find(item => item._id == this.state.selectedTurmaId).nome + ' (' + this.state.turmas.find(item => item._id == this.state.selectedTurmaId).turno + ')'}
              hasTitleBar/>
          }>
          <ModalContent>
            <View style={styles.innerContainer}>
              <FlatList
                contentContainerStyle={styles.list}
                data={this.state.turmas.find(item => item._id == this.state.selectedTurmaId).disciplinas}
                keyExtractor={item => item.nome}
                renderItem={this.renderItemDisciplina}/>
            </View>
          </ModalContent>
        </Modal.BottomModal>
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
  },
  turmaTitleView: {
    flexDirection: "row"
  },
  turmaTurno: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#4D4DFF",
    padding: 5,
    marginLeft: 10
  },
  turmaTurnoText: {
    fontSize: 10,
    fontWeight: "bold", 
    color: "#4D4DFF"
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  }
})