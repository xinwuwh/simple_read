import React,{ Component } from 'react';
import { Provider} from 'react-redux';
import Header from './common/header';
import store from './store';

import { GlobalStyle } from './style';


class App extends Component{

  render(){
      return (
        <Provider store= {store} >
          <GlobalStyle />
          <Header />
        </Provider>
      
      );
  }

  
}
export default App;