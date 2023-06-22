import { useState } from 'react';

import UserInput from './components/UserInput';
import Header from './components/Header';
import ResultsTable from './components/ResultsTable';

function App() {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div>
      <Header />
      <UserInput />
      {/* ! Todo: Show below table conditionally (only once result data is available) */}
      {/* ! Show fallback text if no data is available */}
      {isAvailable ? <ResultsTable /> : <p>Data not available!</p>}
    </div>
  );
}

export default App;
