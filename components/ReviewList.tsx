import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

export interface Review {
  title: string;
  question1: string;
  rating: number;
  question2: string;
  response: string;
}


interface ReviewListProps {
  reviews: Review[];
  onReviewPress: (review: Review) => void;
}

export default function ReviewList({ reviews, onReviewPress }: ReviewListProps) {
  return (
    <View style={styles.reviewContainer}>
      {reviews.map((review, index) => (
        <TouchableOpacity key={index} onPress={() => onReviewPress(review)}>
          <View style={styles.reviewBox}>
            <View style={styles.iconsContainer}>
              <Icon name="edit" size={24} color="#FFF" style={styles.icon} />
              <Icon name="block" size={24} color="#FFF" style={styles.icon} />
            </View>
            <Text style={styles.reviewTitle}>{review.title}</Text>
            <Text style={styles.reviewText}>{review.response}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  reviewContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  reviewBox: {
    width: width * 0.9,
    height: height * 0.14,
    backgroundColor: '#0B3C49',
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#000',
  },
  iconsContainer: {
    position: 'absolute',
    top: 10,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  icon: {
    marginLeft: 10,
  },
  reviewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  reviewText: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 5,
  },
});
