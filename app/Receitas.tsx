import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import {Colors} from '../constants/Colors';

const { width } = Dimensions.get('window');

const receitas = [
  {
    id: '1',
    nome: 'Receita 1',
    imagem: 'https://via.placeholder.com/150',
    descricao: 'Esta é a descrição detalhada da Receita 1.',
  },
  {
    id: '2',
    nome: 'Receita 2',
    imagem: 'https://via.placeholder.com/150',
    descricao: 'Esta é a descrição detalhada da Receita 2.',
  },
  {
    id: '3',
    nome: 'Receita 3',
    imagem: 'https://via.placeholder.com/150',
    descricao: 'Esta é a descrição detalhada da Receita 3.',
  },
  {
    id: '4',
    nome: 'Receita 4',
    imagem: 'https://via.placeholder.com/150',
    descricao: 'Esta é a descrição detalhada da Receita 4.',
  },
];

export default function Receita() {
  const router = useRouter();

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.recipeItem}
      onPress={() =>
        router.push({
          pathname: '/',
          params: { nome: item.nome, descricao: item.descricao, imagem: item.imagem },
        })
      }
    >
      <Image source={{ uri: item.imagem }} style={styles.recipeImage} />
      <Text style={styles.recipeName}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receitas</Text>
      <FlatList
        data={receitas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1C1C1C',
    textAlign: 'center',
    marginBottom: 20,
    paddingTop: 50,
  },
  recipeItem: {
    alignItems: 'center',
    margin: 10,
  },
  recipeImage: {
    width: (width - 100) / 2,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#0B3C49',
  },
  recipeName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0B3C49',
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  listContainer: {
    marginTop: 20,
  },
});
