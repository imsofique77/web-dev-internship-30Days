index.js
import React from 'react';

function Greeting() {
  return (
    <div>
      <h1>Hello, welcome to React!</h1>
      <p>This is my first React component.</p>
    </div>
  );
}

export default Greeting;

App.js

import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <Greeting />
    </div>
  );
}

export default App;


Greeting.js

import React from 'react';

function Greeting() {
  return (
    <div>
      <h1>Hello, welcome to React!</h1>
      <p>This is my first React component.</p>
    </div>
  );
}

export default Greeting;


