import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Line } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const DataNode = ({ position, scale = 1, delay = 0 }: { 
  position: [number, number, number], 
  scale?: number,
  delay?: number 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && glowRef.current) {
      const time = state.clock.elapsedTime + delay;
      const pulse = 1 + Math.sin(time * 1.5) * 0.1;
      
      meshRef.current.scale.setScalar(scale * pulse);
      glowRef.current.scale.setScalar(scale * pulse * 1.2);
      
      // Subtle opacity pulsing
      const opacity = 0.8 + Math.sin(time * 2) * 0.2;
      if (glowRef.current.material instanceof THREE.MeshStandardMaterial) {
        glowRef.current.material.opacity = opacity * 0.3;
      }
    }
  });

  return (
    <group position={position}>
      {/* Main node */}
      <Box ref={meshRef} args={[0.08, 0.08, 0.08]}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#f8fafc"
          emissiveIntensity={0.4}
          metalness={0.1}
          roughness={0.0}
        />
      </Box>
      
      {/* Subtle glow */}
      <Box ref={glowRef} args={[0.12, 0.12, 0.12]}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#e0e7ff"
          emissiveIntensity={0.6}
          transparent
          opacity={0.4}
          metalness={0.0}
          roughness={0.0}
        />
      </Box>
    </group>
  );
};

const ConnectionLine = ({ start, end, opacity = 0.3 }: { 
  start: [number, number, number], 
  end: [number, number, number],
  opacity?: number 
}) => {
  const lineRef = useRef<any>(null);
  
  useFrame((state) => {
    if (lineRef.current?.material) {
      const time = state.clock.elapsedTime;
      const pulse = opacity + Math.sin(time * 3) * 0.1;
      lineRef.current.material.opacity = Math.max(0.1, pulse);
    }
  });

  return (
    <Line
      ref={lineRef}
      points={[start, end]}
      color="#ffffff"
      opacity={opacity}
      transparent
      lineWidth={1}
    />
  );
};

const CorporateNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.02;
    }
  });

  // Generate geometric grid pattern
  const { nodes, connections } = useMemo(() => {
    const nodeArray: Array<{ position: [number, number, number], scale: number, delay: number }> = [];
    const connectionArray: Array<{ start: [number, number, number], end: [number, number, number], opacity: number }> = [];
    
    // Create a structured 3D grid
    const gridSize = 3;
    const spacing = 1.2;
    
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          // Skip center and some nodes for cleaner look
          if (Math.abs(x) + Math.abs(y) + Math.abs(z) <= 2) {
            nodeArray.push({
              position: [x * spacing, y * spacing, z * spacing],
              scale: 0.8 + Math.random() * 0.3,
              delay: (x + y + z) * 0.5
            });
          }
        }
      }
    }
    
    // Create connections between nearby nodes
    for (let i = 0; i < nodeArray.length; i++) {
      for (let j = i + 1; j < nodeArray.length; j++) {
        const dist = new THREE.Vector3(...nodeArray[i].position)
          .distanceTo(new THREE.Vector3(...nodeArray[j].position));
        
        // Only connect adjacent nodes for clean geometric pattern
        if (dist < spacing * 1.5) {
          connectionArray.push({
            start: nodeArray[i].position,
            end: nodeArray[j].position,
            opacity: 0.3 - (dist / spacing) * 0.1
          });
        }
      }
    }
    
    return { nodes: nodeArray, connections: connectionArray };
  }, []);

  return (
    <group ref={groupRef}>
      {/* Data nodes */}
      {nodes.map((node, index) => (
        <DataNode 
          key={index} 
          position={node.position} 
          scale={node.scale}
          delay={node.delay}
        />
      ))}
      
      {/* Connection lines */}
      {connections.map((connection, index) => (
        <ConnectionLine
          key={index}
          start={connection.start}
          end={connection.end}
          opacity={connection.opacity}
        />
      ))}
      
      {/* Central hub */}
      <Box args={[0.15, 0.15, 0.15]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#f1f5f9"
          emissiveIntensity={0.8}
          metalness={0.0}
          roughness={0.0}
        />
      </Box>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden">
      <Canvas
        camera={{ position: [3, 2, 4], fov: 40 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
      >
        {/* Clean, professional lighting */}
        <ambientLight intensity={0.4} color="#f8fafc" />
        
        <directionalLight 
          position={[5, 8, 5]} 
          intensity={1.2} 
          color="#ffffff"
          castShadow
        />
        
        <directionalLight 
          position={[-3, -2, 3]} 
          intensity={0.3} 
          color="#e2e8f0"
        />
        
        <CorporateNetwork />
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.08}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          minDistance={2}
          maxDistance={8}
        />
      </Canvas>
      
      {/* Professional label */}
      <div className="absolute bottom-4 right-4 text-white text-xs font-medium tracking-wide uppercase">
        3D Interactive Architecture
      </div>
      
      {/* Subtle corner accent */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-200"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-blue-200"></div>
    </div>
  );
};

export default Hero3D;