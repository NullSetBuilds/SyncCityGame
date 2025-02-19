import React from 'react';
import { SafeAreaView } from 'react-native';

// Import the DiceRoller component
import DiceRoller from './diceroller';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      {/* Render the DiceRoller component */}
      <DiceRoller />
    </SafeAreaView>
  );
};

export default App;
