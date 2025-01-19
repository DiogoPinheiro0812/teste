import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Review {
  user: string;
  title: string;
  text: string;
}

interface ReviewItemProps {
  review: Review;
  onPress: (review: Review) => void;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review, onPress }) => (
  <TouchableOpacity onPress={() => onPress(review)}>
    <View style={styles.reviewBox}>
      <Icon name="block" size={24} color="#000" style={styles.blockIcon} />
      <Text style={styles.reviewTitle}>{review.title}</Text>
      <View style={styles.userInfo}>
        <Image style={styles.userIcon} />
        <Text style={styles.userName}>{review.user}</Text>
      </View>
      <Text style={styles.reviewText}>
        {review.text.length > 50 ? `${review.text.substring(0, 50)}...` : review.text}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  reviewBox: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 20,
    marginVertical: 10,
    elevation: 3,
  },
  blockIcon: { position: 'absolute', top: 10, right: 15 },
  reviewTitle: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  userInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  userIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#CCC', marginRight: 10 },
  userName: { fontSize: 18, fontWeight: 'bold' },
  reviewText: { fontSize: 16 },
});

export default ReviewItem;
