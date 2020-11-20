//import ReactDOM from 'react-dom'
import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'

export default function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  let texture = createTexture((props.color), props.color % 2 === 1 ? '#A2CCB6' : 'orange', 80)

  function createTexture(text, background, size) {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
  
    context.font = size + "pt Arial";
  
    context.fillStyle = background;
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "black";
    context.fillText(text, canvas.width / 2, canvas.height / 2);
  
    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
  
    return texture;
  }

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
      if(props.cube.stop === false) {
        mesh.current.rotation.x = mesh.current.rotation.y += -0.1
    } else if(props.cube.stop === true) {
        mesh.current.rotation.x = mesh.current.rotation.y += -0.02
    } else {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    }
    })

    if(props.special.includes(props.color)){
        return (
            <mesh
              {...props}
              ref={mesh}
              scale={[0.6, 0.6, 0.6]}
              >
              <boxBufferGeometry args={[1, 1, 1]} />
              <meshStandardMaterial map={texture} />
            </mesh>
          )
    } else {
        return (
            <mesh
              {...props}
              ref={mesh}
              scale={[0.6, 0.6, 0.6]}
              >
              <boxBufferGeometry args={[1, 1, 1]} />
              <meshStandardMaterial map={texture} />
            </mesh>
          )
    }

}
