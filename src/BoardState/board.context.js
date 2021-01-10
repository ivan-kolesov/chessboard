import {createContext} from 'react';

const BoardContext = createContext({
  boardState: '',
  setBoardState: (payload) => {},
});
export default BoardContext;
