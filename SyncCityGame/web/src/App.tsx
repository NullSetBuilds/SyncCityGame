import React from 'react';
import { SafeAreaView } from 'react-native';

// Import the DiceRoller and Homescreen components
import DiceRoller from './diceroller';
import Homescreen from './homescreen';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      {/* Render the Homescreen component */}
      <Homescreen />
    </SafeAreaView>
  );
};

export default App;
