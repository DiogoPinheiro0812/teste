import React from 'react';
import { View, StyleSheet } from 'react-native';
import ReviewItem from './ReviewItem';

interface Review {
  user: string;
  title: string;
  text: string;
}

interface ReviewListProps {
  reviews: Review[];
  onPress: (review: Review) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, onPress }) => {
  return (
    <View style={styles.listContainer}>
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} onPress={onPress} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: { flexDirection: 'column', alignItems: 'center', marginBottom: 20 },
});

export default ReviewList;
