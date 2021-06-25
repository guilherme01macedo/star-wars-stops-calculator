import { Provider } from 'react-redux';
import CalculatorPage from './features/calculatorPage';
import store from './redux-setup';

import './App.css';    
import './fonts.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CalculatorPage />
      </Provider>
    </div>
  );
}

export default App;
