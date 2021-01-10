import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TILE_SIZE} from './constants';
import Piece from './Piece';
import Notation from './Notation';

const Square = ({row, column}) => {
  const style = [
    styles.square,
    (row + column) % 2 ? styles.white : styles.black,
  ];
  return (
    <View style={style}>
      <Piece row={row} column={column} />
      <Notation row={row} column={column} />
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#333',
    borderBottomWidth: 0.5,
    borderRightColor: '#333',
    borderRightWidth: 0.5,
  },
  black: {
    backgroundColor: '#b08a68',
  },
  white: {
    backgroundColor: '#d4b997',
  },
});

export default Square;
