import React, {useContext, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Row from './Row';
import {TILE_SIZE} from './constants';
import BoardContext from './BoardState/board.context';

const Board = () => {
  const {boardState} = useContext(BoardContext);

  return useMemo(() => {
    return (
      <View style={styles.board}>
        {Array(8)
          .fill(1)
          .map((v, i) => (
            <Row key={i} row={i} />
          ))}
      </View>
    );
  }, [boardState]);
};

const styles = StyleSheet.create({
  board: {
    width: TILE_SIZE * 8,
    height: TILE_SIZE * 8,
    borderColor: '#333',
    borderWidth: 0.5,
  },
});

export default Board;
