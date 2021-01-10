import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TILE_SIZE, COLUMNS} from './constants';

const Notation = ({row, column}) => {
  const renderLetters = () => {
    return (
      <View style={styles.notationLetter}>
        <Text style={styles.notationText}>{COLUMNS[column]}</Text>
      </View>
    );
  };
  const renderNumbers = () => {
    return (
      <View style={styles.notationNumber}>
        <Text style={styles.notationText}>{8 - row}</Text>
      </View>
    );
  };

  return (
    <>
      {column === 0 && renderNumbers()}
      {row === 7 && renderLetters()}
    </>
  );
};

const styles = StyleSheet.create({
  notation: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notationLetter: {
    position: 'absolute',
    bottom: 0,
    right: 2,
  },
  notationNumber: {
    position: 'absolute',
    left: 2,
    top: 0,
  },
  notationText: {
    fontSize: 7,
    color: '#fff',
  },
});

export default Notation;
