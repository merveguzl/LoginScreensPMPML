
import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ComponentList from './src/pages/ComponentList';
import LoginOne from "./src/pages/LoginOne";
import LoginEight from "./src/pages/LoginEight"
import LoginFive from "./src/pages/LoginFive"
import LoginFour from "./src/pages/LoginFour"
import LoginNine from "./src/pages/LoginNine"
import LoginSeven from "./src/pages/LoginSeven"
import LoginSix from "./src/pages/LoginSix"
import LoginTen from "./src/pages/LoginTen"
import LoginThree from "./src/pages/LoginThree"
import LoginTwo from "./src/pages/LoginTwo"

const App = () => {
  const [page, setPage] = useState(0);

  const setPageChange = () =>{
    setPage(0)
  }

  const Component = () =>{
    switch (page) {
      case 1:
        return <LoginOne setPage={setPageChange} />
      case 2:
        return <LoginTwo setPage={setPageChange} />
      case 3:
        return <LoginThree setPage={setPageChange} />
      case 4:
        return <LoginFour setPage={setPageChange} />
      case 5:
        return <LoginFive setPage={setPageChange} />
      case 6:
        return <LoginSix setPage={setPageChange} />
      case 7:
        return <LoginSeven setPage={setPageChange} />
      case 8:
        return <LoginEight setPage={setPageChange} />
      case 9:
        return <LoginNine setPage={setPageChange} />
      case 10:
        return <LoginTen setPage={setPageChange} />
  
      default:
        break;
    }
  }

  const component = Component()

  return (
    <SafeAreaView style={{flex:1}}>
      {
        page <= 0 ? (
          <ComponentList setPage={setPage} />
        ) : (
          component
        )
      }
    </SafeAreaView>
  );
};

export default App;
