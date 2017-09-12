/**
 * Created by tyhink on 7/2/17.
 */
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/re_dir';
import { Header } from './components/common/commonIndex';
import LibraryList from './components/LibraryList';

const store = createStore(reducers);

const App = () => {
  return (
      <Provider store={store} >
          <View style={{ flex:1 }}>
              <Header headerText="Tech Stack" />
              <LibraryList />
          </View>
      </Provider>
  );
};

export default App;