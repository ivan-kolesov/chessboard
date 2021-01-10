import React from 'react';
import {StyleSheet, View} from 'react-native';
import Square from './Square';
import {TILE_SIZE} from './constants';

const Row = ({row}) => {
  return (
    <View style={styles.row}>
      {Array(8)
        .fill(0)
        .map((v, i) => (
          <Square key={i} row={row} column={i} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    width: '100%',
    height: TILE_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Row;
