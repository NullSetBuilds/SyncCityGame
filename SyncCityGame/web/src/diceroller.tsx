import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DiceRoller: React.FC = () => {
  const [dice1, setDice1] = useState<number>(1);
  const [dice2, setDice2] = useState<number>(1);

  const rollDice = () => {
    setDice1(Math.floor(Math.random() * 6) + 1);
    setDice2(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dice Roller</Text>
      <Button title="Roll Dice" onPress={rollDice} />
      <View style={styles.diceContainer}>
        <Text style={styles.dice}>{dice1}</Text>
        <Text style={styles.dice}>{dice2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  diceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
  dice: {
    fontSize: 36,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default DiceRoller;
