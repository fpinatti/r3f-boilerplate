import { Canvas } from '@react-three/fiber'
import Camera from './components/Camera'
import Lights from './components/Lights'
import Ground from './components/Ground'

function App() {

	return (
		<>
			<Canvas
				camera={{position: [0, 6, 30]}}
				shadows
			>
				<Camera />
				<Lights />
				<Ground />
			</Canvas>
		</>
	)
}

export default App
