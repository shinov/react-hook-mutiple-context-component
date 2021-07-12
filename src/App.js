import './App.css';

import WrapperComponent from './component/wrapperComponent';
import WrapperProvider from './component/context/wrapperProvider';

function App() {
  return (
    <div className="App">
      <WrapperProvider defaultState="MI">
        <WrapperComponent/>
      </WrapperProvider>
    </div>
  );
}

export default App;
