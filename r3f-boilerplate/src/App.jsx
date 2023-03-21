import { Canvas } from '@react-three/fiber'
import Camera from './components/Camera'
import Lights from './components/Lights'
import Ground from './components/Ground'
import AnimatedModel from './components/AnimatedModel'
import TextureModel from './components/TextureModel'
import PerformanceMonitor from './components/PerformanceMonitor'

function App() {

	return (
		<>
			<Canvas
				camera={{position: [0, 7, 80]}}
				shadows
			>
				<Camera />
				<Lights />
				<PerformanceMonitor />
				<AnimatedModel position={[-8, 0, 60]} />
				<TextureModel position={[3, 5, 45]} />
				<Ground position={ [0, -1, 0] } />
			</Canvas>
		</>
	)
}

export default App
