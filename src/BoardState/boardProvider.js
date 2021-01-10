import React, {useState} from 'react';
import BoardContext from './board.context';

const BoardProvider = ({children}) => {
  const state = {
    boardState: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
    setBoardState: (boardState) => {
      setBoard((prevState) => {
        return {
          ...prevState,
          boardState: boardState,
        };
      });
    },
  };
  const [board, setBoard] = useState(state);

  return (
    <BoardContext.Provider value={board}>{children}</BoardContext.Provider>
  );
};
export default BoardProvider;
