// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import NotFound from './pages/NotFound';
// import NotFoundComponent from './pages/NotFound';

function App() {
  const [commonCount, setCommonCount] = useState(0);

  function handleClick() {
    setCommonCount(commonCount + 1);
  }
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
      <Distribution />
      <ListView />
      <MyButton />
      <MyButton />
      <CommonButton count={commonCount} onClick={handleClick} />
      <CommonButton count={commonCount} onClick={handleClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function MyButton() {
  let text = 'test button';
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={handleClick}>
        {text}
        {count}
      </button>
    </>
  );
}

function CommonButton({ count, onClick }) {
  let text = 'common button';

  return (
    <>
      <div>{count}</div>
      <button onClick={onClick}>
        {text}
        {count}
      </button>
    </>
  );
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

function Distribution() {
  const isChecked = false;
  let result;
  if (isChecked) {
    result = 'True';
  } else {
    result = 'False';
  }
  return <div>{result}</div>;
}

function ListView() {
  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}
      <ul>
        <li key={fruit.id}>{fruit.color}</li>
        <li key={fruit.id}>
          <img
            src={fruit.imageUrl}
            alt={'test image' + fruit.name}
            style={{ width: 120, height: 120 }}
          />
        </li>
      </ul>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

const user = {
  name: 'Test Name',
  imageUrl:
    'https://frame-illust.com/fi/wp-content/uploads/2019/02/reiwa-happyou.png',
  imageSize: 120,
  imageName: 'reiwa',
};

const fruits = [
  {
    name: 'Apple',
    color: 'Red',
    no: 1,
    imageUrl:
      'https://2.bp.blogspot.com/-oTqVMb3zbQ4/UgSMNNLY2wI/AAAAAAAAW-o/4nxDWnz7YsQ/s800/fruit_apple.png',
  },
  {
    name: 'Banana',
    color: 'Yellow',
    no: 2,
    imageUrl:
      'https://1.bp.blogspot.com/-JaRzIloEZw4/UgSMOL-UzYI/AAAAAAAAW_A/vOiX6Tz5oO4/s800/fruit_banana.png',
  },
  {
    name: 'Orange',
    color: 'Orange',
    no: 3,
    imageUrl:
      'https://4.bp.blogspot.com/-PYqNTVOP9hs/UgSMR6zIbdI/AAAAAAAAXAk/tDJMCfemfwk/s800/fruit_orange.png',
  },
];

export default App;
