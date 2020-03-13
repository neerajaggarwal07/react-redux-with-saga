import React, {Component} from 'react';

import { ThemeProvider } from 'styled-components';
import HomePageContainer from './components/pages/HomePage/container/HomePage.container';
import Header from './components/molecules/Header/Header';
import theme from './styles/themes/Default/index';
import GlobalStyle from './styles/GlobalStyles';
class App extends Component {

  constructor(props) {
    super(props);
    this.theme = theme;
  }

  render(){
    return (
      <div>
        <ThemeProvider theme={this.theme}>
        <GlobalStyle />
          <Header/>
          <HomePageContainer />
        </ThemeProvider>
          
      </div>
    );
  }
 
}

export default App;
