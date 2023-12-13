import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Profile />
      <MyButton />
    </div>
  );
}

function MyButton() {
  return <button>test</button>;
}

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={'test image' + user.imageName}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
      <br />
    </>
  );
}

const user = {
  name: 'Test Name',
  imageUrl:
    'https://frame-illust.com/fi/wp-content/uploads/2019/02/reiwa-happyou.png',
  imageSize: 120,
  imageName: 'reiwa',
};

export default App;
