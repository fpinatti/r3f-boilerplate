import { useTexture } from "@react-three/drei"
import * as THREE from 'three'

const Ground = () => {

	return (
		<mesh rotation={ [Math.PI * -.5, 0, 0] } receiveShadow>
			<planeGeometry args={ [100, 100, 100, 100] } />
			<meshStandardMaterial 
				color={ 'red' }
			/>
		</mesh>
	)
}

export default Ground