import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Experience from './components/Experience'

function App() {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 30,
        }}
      >
        <color attach="background" args={["#000000"]} />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
