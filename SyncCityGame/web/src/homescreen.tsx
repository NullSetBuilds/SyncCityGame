import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

const Homescreen: React.FC = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://example.com/city-background.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sync City Game</Text>
        <Button title="Play" onPress={() => console.log('Navigate to Dice Roller')} />
        <Button
          title="Instructions"
          onPress={() => console.log('Show Instructions')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Homescreen;
