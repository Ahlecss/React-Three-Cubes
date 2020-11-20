import React, { useReducer, useEffect } from 'react'
import { Canvas, } from 'react-three-fiber'

import Box from './Styles/Cube'
import Button from './Styles/Button'
import { initialState, reducer } from "./reducers/cubes";


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { cubes, number, special } = state;
  const SPECIAL_CUBE = 16;

  useEffect(() => {
    if( number > 0 && number % SPECIAL_CUBE === 0 ){
      dispatch({type :'SPECIAL', number : number})
    }
  }, [number]);

  const cubeList = cubes.map((cube, index) =>
    <Box position={[
      -5 + 1.6 * (cube.number % 7), 
      3 - 1.6 * (Math.floor(cube.number / 7)) , 
      0
    ]} color={index} cube={cube} special={special} {...cube } />
  );
  

  return (
    <>
    <nav class="nav">
      <Button onClick={() => dispatch({ type: 'ADD_CUBE' })}>Add button</Button>
      <Button onClick={() => dispatch({ type: 'SHUFFLE' })}>Shuffle</Button>
      <Button onClick={() => dispatch({ type: 'CHANGE_ODD' })}>Start odd</Button>
      <Button onClick={() => dispatch({ type: 'STOP_ODD' })}>Stop odd</Button>
    </nav>
    <Canvas id="canvas" width="100vw" height="100vh">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {cubeList}
    </Canvas>,
  </>
  );
}


export default App;