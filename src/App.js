/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import Board from './Board';
import BoardProvider from './BoardState/boardProvider';

const App: () => React$Node = () => {
  return (
    <BoardProvider>
      <View style={styles.container}>
        <Board />
      </View>
    </BoardProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
