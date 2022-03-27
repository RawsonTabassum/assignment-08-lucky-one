import logo from './logo.svg';
import './App.css';
import Choose from './component/Choose/Choose';
import Header from './component/Header/Header';
import Questions from './component/Questions/Questions';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Choose></Choose>
      <Questions></Questions>
    </div>
  );
}

export default App;
