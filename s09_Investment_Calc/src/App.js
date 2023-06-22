import { useState } from 'react';

import UserInput from './components/UserInput';
import Header from './components/Header';
import ResultsTable from './components/ResultsTable';

function App() {
  const [userInput, setUserInput] = useState(null);
  const [isAvailable, setIsAvailable] = useState(true);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {/* ! Todo: Show below table conditionally (only once result data is available) */}
      {/* ! Show fallback text if no data is available */}
      {isAvailable ? <ResultsTable /> : <p>Data not available!</p>}
    </div>
  );
}

export default App;
