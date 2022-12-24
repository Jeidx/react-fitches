import React, { useState } from 'react'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Wrapper } from "./components/Styled/GlobalStyled";


function App() {
  const [counter, setCounter] = useState(0);




  return (
    <div>
      <Header
        counter={counter} />
      <Wrapper>
        <Main
          setCounter={setCounter} />
      </Wrapper>
    </div>
  );
}

export default App;
