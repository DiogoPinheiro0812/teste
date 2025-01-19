import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Modal,Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReviewList from '../components/ReviewListPublica';

interface Review {
  user: string;
  title: string;
  text: string;
}

export default function ReviewsPublicas() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const reviews: Review[] = [
    { user: 'João Silva', title: 'Entrega Excelente', text: 'Serviço excelente, muito rápido e eficiente!' },
    { user: 'Maria Costa', title: 'Bom Serviço', text: 'A experiência foi boa, mas acho que pode melhorar em alguns detalhes.' },
    { user: 'Carlos Pereira', title: 'Ótima Qualidade', text: 'Gostei muito! Superou minhas expectativas.' },
    { user: 'Ana Oliveira', title: 'Precisa Melhorar', text: 'Não foi o que eu esperava. Precisa de ajustes.' },
  ];

  const openModal = (review: Review) => {
    setSelectedReview(review);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedReview(null);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Reviews</Text>
        <Text style={styles.subtitle}>Reviews de Outros Utilizadores</Text>
        <ReviewList reviews={reviews} onPress={openModal} />
        {selectedReview && (
          <Modal transparent={true} visible={modalVisible} animationType="slide">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Icon name="close" size={24} color="#333" onPress={closeModal} style={styles.closeIcon} />
                <Text style={styles.modalTitle}>{selectedReview.title}</Text>
                <Text style={styles.modalUser}>Usuário: {selectedReview.user}</Text>
                <Text style={styles.modalText}>{selectedReview.text}</Text>
              </View>
            </View>
          </Modal>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#81E96D' },
  scrollContainer: { paddingHorizontal: 20, paddingBottom: 80 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1C1C1C', textAlign: 'center', marginBottom: 20, paddingTop: 40 },
  subtitle: { fontSize: 18, color: '#1C1C1C', textAlign: 'left', marginBottom: 10 },
  modalContainer: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: '90%',
    height: '80%',
    borderTopWidth: 2,
    borderTopColor: '#0B3C49',
    elevation: 5,
  },
  closeIcon: { position: 'absolute', top: 15, right: 15 },
  modalTitle: { fontSize: 24, fontWeight: 'bold', color: '#0B3C49', marginBottom: 10 },
  modalUser: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  modalText: { fontSize: 16, color: '#333' },
});
