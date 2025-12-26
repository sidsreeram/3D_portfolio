import { ScrollControls, Scroll, useScroll, Float, Stars, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { useRef } from 'react'
import * as THREE from 'three'
import Overlay from './Overlay'

const MainObject = () => {
    const group = useRef()
    const scroll = useScroll()

    useFrame((state, delta) => {
        if (!group.current) return

        const offset = scroll.offset

        // Rotate the entire group
        group.current.rotation.y = offset * Math.PI * 2
        group.current.rotation.x = Math.sin(offset * Math.PI) * 0.5

        // Move group based on scroll section
        // 0 -> 0.33 (To -2, -1)
        // 0.33 -> 0.66 (To 2, 0)
        // 0.66 -> 1 (To 0, 0, 2)

        const t = offset * 3

        // Simple interpolation for demo (can be refined with maath)
        if (offset < 0.33) {
            // Slide Left
            group.current.position.x = THREE.MathUtils.lerp(0, -2.5, offset * 3)
        } else if (offset < 0.66) {
            // Slide Right
            // (offset - 0.33) goes 0 to 0.33. Normalized: * 3
            const localT = (offset - 0.33) * 3
            group.current.position.x = THREE.MathUtils.lerp(-2.5, 2.5, localT)
        } else {
            // Center
            const localT = (offset - 0.66) * 3
            group.current.position.x = THREE.MathUtils.lerp(2.5, 0, localT)
            group.current.position.z = THREE.MathUtils.lerp(0, 2, localT)
        }
    })

    return (
        <Float floatIntensity={1} speed={1.5} rotationIntensity={1}>
            <group ref={group}>
                {/* Central Core */}
                <mesh>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        emissive="#4f46e5"
                        emissiveIntensity={2}
                        toneMapped={false}
                    />
                </mesh>

                {/* Glassy Ring 1 */}
                <mesh rotation={[Math.PI / 4, 0, 0]}>
                    <torusGeometry args={[1.6, 0.1, 16, 100]} />
                    <MeshTransmissionMaterial
                        color="#22d3ee"
                        resolution={1024}
                        distortion={0.25}
                        thickness={1}
                        anisotropy={1}
                        chromaticAberration={0.5}
                        clearcoat={1}
                        roughness={0.1}
                    />
                </mesh>

                {/* Metallic Ring 2 */}
                <mesh rotation={[-Math.PI / 4, 0, 0]} scale={1.2}>
                    <torusGeometry args={[1.6, 0.05, 16, 100]} />
                    <meshStandardMaterial color="#a78bfa" metalness={1} roughness={0.2} emissive="#a78bfa" emissiveIntensity={0.5} />
                </mesh>

            </group>
        </Float>
    )
}

const Particles = () => {
    return (
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
    )
}

const Experience = () => {
    return (
        <>
            <color attach="background" args={['#050505']} />

            {/* Lights */}
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
            <pointLight position={[-10, -10, -5]} intensity={5} color="#4f46e5" />

            <ScrollControls pages={4} damping={0.2}>

                <MainObject />
                <Particles />

                <Scroll html style={{ width: '100%' }}>
                    <Overlay />
                </Scroll>

            </ScrollControls>

            {/* Post Processing */}
            <EffectComposer disableNormalPass>
                <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.4} />
                <ChromaticAberration offset={[0.002, 0.002]} />
            </EffectComposer>
        </>
    )
}

export default Experience
