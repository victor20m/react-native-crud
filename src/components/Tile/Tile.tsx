import React from 'react';
import {styles} from './Tile.styles';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

interface Props {
  icon: React.ReactNode;
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const Tile = ({icon, title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
