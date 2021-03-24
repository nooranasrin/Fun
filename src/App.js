import {useState} from "react";
import './App.css';
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

const getCharComponents = (text, setText) => {
  const characters = text.split('');
  return characters.map((character, index) =>
      <CharComponent
          char={character}
          key={index}
          onClick={() => removeCharComponent(setText, characters, index)}
      />)
}

const removeCharComponent = (setText, characters, index) => {
  characters.splice(index, 1);
  setText(characters.join(''));
}

const App = () => {
  const [text, setText] = useState("");

  return (
      <div className={'app'}>
        <input
            className={'inputBox'}
            value={text}
            onChange={(event) => setText(event.target.value)}
        />
        <p className={'paragraph'}>The Length Of The Entered Text is {text.length}</p>
        <ValidationComponent textLength={text.length}/>
        {getCharComponents(text, setText)}
      </div>
  );
};

export default App;
