import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReviewList from '../components/ReviewList';

const { width, height } = Dimensions.get('window');

export default function ReviewsPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReview, setSelectedReview] = useState<{
    title: string;
    question1: string;
    rating: number;
    question2: string;
    response: string;
  } | null>(null);

  const reviews = [
    {
      title: 'Primeira Review',
      question1: 'Como avaliaria o serviço?',
      rating: 5,
      question2: 'O que mais gostou no serviço?',
      response: 'A experiência foi incrível e muito satisfatória.',
    },
    {
      title: 'Segunda Review',
      question1: 'Como avaliaria a entrega?',
      rating: 3,
      question2: 'O que poderia ser melhorado na entrega?',
      response: 'A rapidez poderia ser melhor, mas foi aceitável.',
    },
    {
      title: 'Terceira Review',
      question1: 'Como avaliaria o atendimento ao cliente?',
      rating: 4,
      question2: 'O que mais gostou no atendimento?',
      response: 'Os funcionários foram muito educados e prestativos.',
    },
    {
      title: 'Quarta Review',
      question1: 'Como avaliaria o produto?',
      rating: 2,
      question2: 'O que não gostou no produto?',
      response: 'O produto não era como descrito e parecia de baixa qualidade.',
    },
  ];

  const openModal = (review: {
    title: string;
    question1: string;
    rating: number;
    question2: string;
    response: string;
  }) => {
    setSelectedReview(review);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedReview(null);
    setModalVisible(false);
  };

  const renderRating = (rating: number) => {
    const circles = [];
    for (let i = 1; i <= 5; i++) {
      circles.push(
        <View
          key={i}
          style={[
            styles.circle,
            { backgroundColor: i <= rating ? '#0B3C49' : '#E0E0E0' },
          ]}
        />
      );
    }
    return <View style={styles.ratingContainer}>{circles}</View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Reviews</Text>
        <Text style={styles.subtitle}>Reviews passadas</Text>

        <ReviewList reviews={reviews} onReviewPress={openModal} />

        {selectedReview && (
          <Modal transparent={true} visible={modalVisible} animationType="slide">
            <View style={styles.modalOverlay} />
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity onPress={closeModal} style={styles.closeIcon}>
                  <Icon name="close" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.modalTitle}>{selectedReview.title}</Text>
                
                <Text style={styles.modalSubtitle}>{selectedReview.question1}</Text>
                {renderRating(selectedReview.rating)}

                <Text style={styles.modalSubtitle}>{selectedReview.question2}</Text>
                <Text style={styles.modalText}>{selectedReview.response}</Text>
              </View>
            </View>
          </Modal>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81E96D',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1C1C1C',
    textAlign: 'center',
    marginBottom: 10,
    paddingTop: 40,
  },
  subtitle: {
    fontSize: 18,
    color: '#1C1C1C',
    textAlign: 'left',
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: width * 0.85,
    height: height * 0.85,
    borderTopWidth: 2,
    borderTopColor: '#0B3C49',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  closeIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0B3C49',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalSubtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B3C49',
    textAlign: 'center',
    marginVertical: 20,
  },
  modalText: {
    fontSize: 18,
    color: '#333',
    marginTop: 20,
    lineHeight: 24,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
