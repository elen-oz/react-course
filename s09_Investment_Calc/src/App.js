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

      {!userInput && <p>No Investment calculated yet.</p>}
      {userInput && (
        <ResultsTable
          data={yearlyData}
          initialInvestment={userInput['current-savings']}
        />
      )}
    </div>
  );
}

export default App;
