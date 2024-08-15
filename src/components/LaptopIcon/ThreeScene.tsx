import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Scene and Camera Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mountRef.current!.clientWidth / mountRef.current!.clientHeight, 0.1, 1000);
        camera.position.z = 7;

        // Renderer Setup
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio); 
        mountRef.current!.appendChild(renderer.domElement);

        // Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 5;
        controls.maxDistance = 15;
        controls.maxPolarAngle = Math.PI / 2;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);

        // Monitor
        const monitorGeometry = new THREE.BoxGeometry(4, 2.5, 0.2);
        const monitorMaterial = new THREE.MeshStandardMaterial({
            color: 0x333333,
            metalness: 0.6,
            roughness: 0.4,
        });
        const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
        scene.add(monitor);

        // Screen
        const screenGeometry = new THREE.PlaneGeometry(3.8, 2.3);
        const screenMaterial = new THREE.MeshStandardMaterial({
            color: 0x111111,
            metalness: 0.9,
            roughness: 0.1,
            emissive: 0x000000,
        });
        const screen = new THREE.Mesh(screenGeometry, screenMaterial);
        screen.position.set(0, 0, 0.11);
        scene.add(screen);

        // Monitor Stand
        const standGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.5, 32);
        const standMaterial = new THREE.MeshStandardMaterial({
            color: 0x444444,
            metalness: 0.7,
            roughness: 0.5,
        });
        const stand = new THREE.Mesh(standGeometry, standMaterial);
        stand.position.set(0, -2, 0);
        scene.add(stand);

        // Monitor Base
        const baseGeometry = new THREE.BoxGeometry(1.5, 0.2, 1);
        const base = new THREE.Mesh(baseGeometry, standMaterial);
        base.position.set(0, -2.75, 0);
        scene.add(base);

        // Keyboard
        const keyboardGeometry = new THREE.BoxGeometry(3, 0.2, 1);
        const keyboardMaterial = new THREE.MeshStandardMaterial({
            color: 0x555555,
            metalness: 0.6,
            roughness: 0.5,
        });
        const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
        keyboard.position.set(0, -3.25, 0.5);
        scene.add(keyboard);

        // Mouse
        const mouseGeometry = new THREE.BoxGeometry(0.5, 0.2, 0.8);
        const mouseMaterial = new THREE.MeshStandardMaterial({
            color: 0x555555,
            metalness: 0.6,
            roughness: 0.5,
        });
        const mouse = new THREE.Mesh(mouseGeometry, mouseMaterial);
        mouse.position.set(1.75, -3.25, 0.5);
        scene.add(mouse);

        // // Bar Chart (Left of Monitor)
        // const barChartGeometry = new THREE.BoxGeometry(0.5, 2, 0.5);
        // const barChartMaterial = new THREE.MeshStandardMaterial({
        //     color: 0x1f78b4,
        //     metalness: 0.6,
        //     roughness: 0.5,
        // });
        // for (let i = 0; i < 5; i++) {
        //     const bar = new THREE.Mesh(barChartGeometry, barChartMaterial);
        //     bar.position.set(-5 + i * 1.2, -1.5 + Math.random() * 2, 0); // Positioned to the left of the monitor
        //     scene.add(bar);
        // }

        // Line Chart (Right of Monitor)
        const lineChartMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
        const lineChartPoints = [];
        for (let i = 0; i < 5; i++) {
            lineChartPoints.push(new THREE.Vector3(2.3 + i * 1.2, -2 + Math.random() * 4, 0)); // Positioned to the right of the monitor
        }
        const lineChartGeometry = new THREE.BufferGeometry().setFromPoints(lineChartPoints);
        const lineChart = new THREE.Line(lineChartGeometry, lineChartMaterial);
        scene.add(lineChart);

        // Database Symbol (Cylinder with Discs) - Positioned on the right
        const databaseGeometry = new THREE.CylinderGeometry(1, 1, 0.5, 32);
        const databaseMaterial = new THREE.MeshStandardMaterial({
            color: 0x8a2be2,
            metalness: 0.7,
            roughness: 0.4,
        });
        const database1 = new THREE.Mesh(databaseGeometry, databaseMaterial);
        database1.position.set(4, -4, 0); // Positioned on the right
        scene.add(database1);
        const database2 = new THREE.Mesh(databaseGeometry, databaseMaterial);
        database2.position.set(4, -3.3, 0); // Positioned on the right
        scene.add(database2);
        

        // Render Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        // Handle Window Resize
        const handleResize = () => {
            camera.aspect = mountRef.current!.clientWidth / mountRef.current!.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current!.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeScene;
