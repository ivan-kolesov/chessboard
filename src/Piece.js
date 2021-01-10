import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {TILE_SIZE, COLUMNS} from './constants';
import BoardContext from './BoardState/board.context';
import {fenToObj} from './helpers';
import {SvgFromXml} from 'react-native-svg';
import chesspieces from './chesspieces';

const Piece = ({row, column}) => {
  const {boardState} = useContext(BoardContext);
  const position = `${COLUMNS[column]}${row + 1}`;
  const figure = fenToObj(boardState)[position];

  return (
    <View style={styles.piece}>
      {figure && (
        <SvgFromXml
          width={TILE_SIZE / 1.8}
          height={TILE_SIZE / 1.8}
          xml={chesspieces[figure]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  piece: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Piece;
