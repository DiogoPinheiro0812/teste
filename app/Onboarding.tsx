import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const Onboarding = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/Login');
  };

  const handleSignUp = () => {
    router.push('/Register');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/robo-waiter.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: '15%', 
    justifyContent: 'center',
    paddingBottom: 30,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10, 
  },
  image: {
    width: 350, 
    height: 350, 
    resizeMode: 'contain',
  },
  buttonsContainer: {
    marginHorizontal: 20,
    marginTop: 50, 
  },
  button: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 15,
    marginBottom: 10, 
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 25, 
    fontWeight: 'bold',
  },
});

export default Onboarding;
