import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, ProgressBarAndroid,TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

export default function WriteReviewPage() {
  const [progress, setProgress] = useState(0.4); 
    const router = useRouter();

  const closeModal = () => {
    router.push('/QrCodeScanner');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressContainer}>
        <ProgressBarAndroid
          style={styles.progressBar}
          styleAttr="Horizontal"
          indeterminate={false}
          progress={progress}
        />
        <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
      </View>
      <View style={styles.whiteRectangle}>  
        <TouchableOpacity onPress={closeModal} style={styles.closeIcon}>
                          <Icon name="close" size={24} color="#333" />
                        </TouchableOpacity>
        <Text style={styles.text}>Escreva sua review aqui</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81E96D',
    padding: 20,
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  progressContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 18,
    color: '#1C1C1C',
    marginTop: 10,
  },
  progressBar: {
    width: width * 0.8,
    height: 20,
    borderRadius: 5,
  },
  whiteRectangle: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: width * 0.9,
    height: height * 0.8, 
    marginTop: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  text: {
    fontSize: 20,
    color: '#0B3C49',
  },
  closeIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
});
