import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function Perfil() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [aboutMe, setAboutMe] = useState('');

  const handleSave = () => {
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Sobre mim:', aboutMe);
  };

  const handleLogout = () => {
    console.log('Usuário saiu da conta');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profilePictureContainer}>
        <Image
          source={require('../assets/images/Bruno_perfil.jpeg')}
          style={styles.profilePicture}
          resizeMode="cover"
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Escreva aqui..."
          placeholderTextColor="#888"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Escreva aqui..."
          placeholderTextColor="#888"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.inputLabel}>Sobre Mim</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Escreva aqui..."
          placeholderTextColor="#888"
          value={aboutMe}
          onChangeText={(text) => setAboutMe(text)}
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81E96D', // Fundo verde
    alignItems: 'center',
    padding: 20,
  },
  profilePictureContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#0B3C49',
    overflow: 'hidden',
    alignItems: 'flex-start',
  },
  
  
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  input: {
    width: width * 0.9,
    height: 50,
    borderWidth: 1,
    borderColor: '#0B3C49',
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#0B3C49',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: width * 0.9,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#0B3C49',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: width * 0.9,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
