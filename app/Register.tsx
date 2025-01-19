// app/register.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Importando o useRouter

const Register = () => {
  const router = useRouter(); 
  const handleCreateAccount = () => {
    router.push('/'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/robo-waiter.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.formContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Username" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          secureTextEntry
        />
        <TextInput 
          style={styles.input} 
          placeholder="Confirm Password" 
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: '10%', // Ajuste para a imagem começar mais em cima
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 40, // Espaço entre a imagem e os campos
  },
  image: {
    width: 300, // Tamanho da imagem
    height: 300, 
    resizeMode: 'contain',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50', // Cor verde para o botão
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Register;
