import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050711, 0.035);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    // Subtle Lighting (Blue and Cyan)
    const ambientLight = new THREE.AmbientLight(0x082f49, 1.2);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 3, 50);
    cyanLight.position.set(-10, 8, 10);
    scene.add(cyanLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 3.5, 50);
    blueLight.position.set(12, -6, 8);
    scene.add(blueLight);

    const accentPurpleLight = new THREE.PointLight(0x6366f1, 2, 40);
    accentPurpleLight.position.set(0, 15, -5);
    scene.add(accentPurpleLight);

    // Group for all floating objects
    const objectsGroup = new THREE.Group();
    scene.add(objectsGroup);

    // 1. Digital glowing particle field
    const particleCount = prefersReducedMotion ? 100 : isMobile ? 350 : 800;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x06b6d4); // Cyan
    const color2 = new THREE.Color(0x3b82f6); // Blue
    const color3 = new THREE.Color(0x38bdf8); // Sky

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 45;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 45;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 35;

      const mixedColor = Math.random() > 0.5 ? color1 : (Math.random() > 0.5 ? color2 : color3);
      particleColors[i3] = mixedColor.r;
      particleColors[i3 + 1] = mixedColor.g;
      particleColors[i3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.4, 'rgba(56,189,248,0.8)');
      gradient.addColorStop(1, 'rgba(56,189,248,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.3 : 0.4,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 2. Floating geometric objects with wireframes and glass-like materials
    const floatingItems: {
      mesh: THREE.Object3D;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      initialY: number;
      floatSpeed: number;
      floatAmplitude: number;
    }[] = [];

    // Torus 1 (Wireframe)
    const torusGeo = new THREE.TorusGeometry(3.2, 0.4, 16, 50);
    const torusWireMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.2
    });
    const torus = new THREE.Mesh(torusGeo, torusWireMat);
    torus.position.set(10, 3, -6);
    objectsGroup.add(torus);
    floatingItems.push({
      mesh: torus,
      rotSpeedX: 0.003,
      rotSpeedY: 0.005,
      rotSpeedZ: 0.002,
      initialY: 3,
      floatSpeed: 0.001,
      floatAmplitude: 0.8
    });

    // Icosahedron (Geometric diamond)
    const icoGeo = new THREE.IcosahedronGeometry(2.4, 0);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.3
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    icosahedron.position.set(-11, -2, -4);
    objectsGroup.add(icosahedron);
    floatingItems.push({
      mesh: icosahedron,
      rotSpeedX: 0.004,
      rotSpeedY: 0.003,
      rotSpeedZ: 0.005,
      initialY: -2,
      floatSpeed: 0.0014,
      floatAmplitude: 1.0
    });

    // Octahedron
    const octaGeo = new THREE.OctahedronGeometry(1.6, 0);
    const octaMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      emissive: 0x0284c7,
      emissiveIntensity: 0.2
    });
    const octa = new THREE.Mesh(octaGeo, octaMat);
    octa.position.set(-7, 7, -8);
    objectsGroup.add(octa);
    floatingItems.push({
      mesh: octa,
      rotSpeedX: 0.006,
      rotSpeedY: 0.004,
      rotSpeedZ: 0.003,
      initialY: 7,
      floatSpeed: 0.0012,
      floatAmplitude: 0.6
    });

    // Cube (Floating data block)
    const cubeGeo = new THREE.BoxGeometry(2, 2, 2);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      emissive: 0x0369a1,
      emissiveIntensity: 0.2
    });
    const cube = new THREE.Mesh(cubeGeo, cubeMat);
    cube.position.set(8, -6, -5);
    objectsGroup.add(cube);
    floatingItems.push({
      mesh: cube,
      rotSpeedX: 0.002,
      rotSpeedY: 0.006,
      rotSpeedZ: 0.004,
      initialY: -6,
      floatSpeed: 0.0009,
      floatAmplitude: 0.9
    });

    // Subtle 3D Ring
    const ringGeo = new THREE.TorusGeometry(1.8, 0.08, 12, 40);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(3, 8, -9);
    objectsGroup.add(ring);
    floatingItems.push({
      mesh: ring,
      rotSpeedX: 0.005,
      rotSpeedY: 0.007,
      rotSpeedZ: 0.002,
      initialY: 8,
      floatSpeed: 0.0011,
      floatAmplitude: 0.5
    });

    // Mouse parallax tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Window resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Scroll parallax effect
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      if (!prefersReducedMotion) {
        currentMouseX += (targetMouseX - currentMouseX) * 0.03;
        currentMouseY += (targetMouseY - currentMouseY) * 0.03;

        camera.position.x = currentMouseX * 1.5;
        camera.position.y = -currentMouseY * 1.5 - scrollY * 0.003;
        camera.lookAt(0, -scrollY * 0.003, 0);

        // Rotate particles slowly
        particles.rotation.y = elapsedTime * 0.02 + currentMouseX * 0.2;
        particles.rotation.x = elapsedTime * 0.01 + currentMouseY * 0.1;

        // Animate floating geometric objects
        floatingItems.forEach((item) => {
          item.mesh.rotation.x += item.rotSpeedX;
          item.mesh.rotation.y += item.rotSpeedY;
          item.mesh.rotation.z += item.rotSpeedZ;
          item.mesh.position.y =
            item.initialY + Math.sin(elapsedTime * 0.8 + item.initialY) * item.floatAmplitude;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      torusGeo.dispose();
      torusWireMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      cubeGeo.dispose();
      cubeMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 20%, #0d162d 0%, #060914 60%, #03050c 100%)'
      }}
      aria-hidden="true"
    />
  );
};
