import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');
const NoteContext = React.createContext({test: {test2: 'test2'}});

class App extends Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <NoteContext.Provider value={{test3: 'test3'}}>
          <Toolbar />
        </NoteContext.Provider>
        
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
      <NonClassButton />
    </div>
  );
}

class ThemedButton extends Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = {...NoteContext, ...ThemeContext};
  render() {
    //console.log('ThemeContext',ThemeContext);
    console.log('context',this.context);
    console.log('this', this);
    return <button theme={this.context}>test</button>;
  }
}

const NonClassButton = (props) => {
  console.log('ThemeContext',ThemeContext);
    //console.log('context',context);
  return <button>NonClassButton</button>
}

export default App;