import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Bem-vindo ao ForkFolio!</Text>
        <Text style={styles.subtitle}>A tua review é importante</Text>
        <Image
          // Substituir pelo caminho da sua imagem
          style={styles.image}
          resizeMode="contain" // Ajuste a imagem sem distorcer
        />
        {/* Subtítulo */}
        <Text style={styles.subtitle}>Conhece a nossa mascote</Text>
        
        <Image
          source={require('../assets/images/robo-waiter.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.description}>
          O Lys é a mascote do ForkFolio, ele vai-te ajudar a navegar na aplicação!
        </Text>
        <Text style={styles.teamHeading}>Conhece a nossa equipa</Text>

        <View style={styles.teamContainer}>
          <View style={styles.row}>
            <View style={styles.teamMember}>
              <Image
                source={require('../assets/images/Bruno_perfil.jpeg')}
                style={styles.teamImage}
                resizeMode="contain"
              />
              <Text style={styles.teamName}>Bruno</Text>
            </View>
            <View style={styles.teamMember}>
              <Image
                source={require('../assets/images/Diogo_perfil.jpeg')}
                style={styles.teamImage}
                resizeMode="contain"
              />
              <Text style={styles.teamName}>Diogo</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.teamMemberCentered}>
              <Image
                // Substituir pelo caminho da imagem de Vasco
                style={styles.teamImage}
                resizeMode="contain"
              />
              <Text style={styles.teamName}>Vasco</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81E96D',
    paddingTop: 40,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    paddingBottom: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1C1C1C',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#1C1C1C',
    textAlign: 'center',
    marginVertical: 15,
  },
  image: {
    width: width - 40,
    height: 150, 
    borderRadius: 10,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#1C1C1C',
    textAlign: 'center',
    marginTop: 20,
  },
  teamHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1C1C',
    textAlign: 'center',
    marginVertical: 20,
  },
  teamContainer: {
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  teamMember: {
    alignItems: 'center',
  },
  teamMemberCentered: {
    alignItems: 'center',
    width: '100%',
  },
  teamImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  teamName: {
    fontSize: 16,
    color: '#1C1C1C',
    textAlign: 'center',
  },
});
