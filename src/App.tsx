import { Component } from 'react';
import Navbar from './containers/Navbar.tsx';
import Action from './containers/Action.tsx';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Action />
      </>
    )
  }
}

export default App;