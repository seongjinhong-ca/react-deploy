import logo from './logo.svg';
import profileImage from './img/seongjin.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> My React App</h1>
      <h2>Author: Seongjin Hong</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
