import * as THREE from 'three';

export class SplineHero3D {
  constructor(container, onStarCollected) {
    this.container = container;
    this.onStarCollected = onStarCollected;

    this.scene = null;
    this.camera = null;
    this.renderer = null;

    this.crystalGroup = null;
    this.attentionRings = [];
    this.floatingStars = [];
    this.starParticles = null;

    this.mouse = new THREE.Vector2(0, 0);
    this.targetRotation = new THREE.Vector2(0, 0);
    this.raycaster = new THREE.Raycaster();

    this.clock = new THREE.Clock();
    this.animationFrameId = null;

    this.init();
  }

  init() {
    // 1. Scene with subtle gradient fog
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x090d16, 0.015);

    // 2. Camera
    const aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
    this.camera.position.set(0, 0, 18);

    // 3. Renderer with high performance & filmic tone mapping
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    this.container.appendChild(this.renderer.domElement);

    // 4. Studio Lighting (Apple / Spline aesthetic)
    this.setupStudioLighting();

    // 5. Build Spline-style Objects
    this.buildNeuralCrystal();
    this.buildAttentionRings();
    this.buildFloatingCollectibleStars();
    this.buildStarfieldDust();

    // 6. Events
    this.setupEvents();

    // 7. Loop
    this.animate();
  }

  setupStudioLighting() {
    // Soft ambient
    const ambient = new THREE.AmbientLight(0xffffff, 1.4);
    this.scene.add(ambient);

    // Key directional lights
    const cyanLight = new THREE.DirectionalLight(0x38bdf8, 3.0);
    cyanLight.position.set(15, 20, 15);
    this.scene.add(cyanLight);

    const violetLight = new THREE.DirectionalLight(0xa855f7, 2.5);
    violetLight.position.set(-15, -10, -10);
    this.scene.add(violetLight);

    const goldPoint = new THREE.PointLight(0xfbbf24, 4.0, 30);
    goldPoint.position.set(0, 0, 4);
    this.scene.add(goldPoint);
  }

  buildNeuralCrystal() {
    this.crystalGroup = new THREE.Group();

    // 1. Faceted Icosahedron Crystal Core
    const crystalGeo = new THREE.IcosahedronGeometry(3.6, 0);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      emissive: 0x4338ca,
      emissiveIntensity: 0.35,
      metalness: 0.15,
      roughness: 0.1,
      transmission: 0.85,
      thickness: 1.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    this.coreMesh = new THREE.Mesh(crystalGeo, crystalMat);
    this.crystalGroup.add(this.coreMesh);

    // Wireframe outer cage
    const wireGeo = new THREE.IcosahedronGeometry(3.68, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    this.crystalGroup.add(wireMesh);

    // Inner Glowing Plasma Sphere
    const innerGeo = new THREE.SphereGeometry(1.8, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.4
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    this.crystalGroup.add(innerSphere);

    this.scene.add(this.crystalGroup);
  }

  buildAttentionRings() {
    const ringConfigs = [
      { radius: 5.6, tube: 0.05, color: 0x38bdf8, rot: [0.6, 0.3, 0] },  // Query (Q)
      { radius: 6.8, tube: 0.05, color: 0xa855f7, rot: [-0.4, 0.7, 0.2] }, // Key (K)
      { radius: 8.0, tube: 0.05, color: 0xf59e0b, rot: [0.3, -0.6, 0.9] }  // Value (V)
    ];

    ringConfigs.forEach(cfg => {
      const geo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 16, 120);
      const mat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        emissive: cfg.color,
        emissiveIntensity: 0.8,
        metalness: 0.9,
        roughness: 0.1
      });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.set(...cfg.rot);
      this.crystalGroup.add(ring);
      this.attentionRings.push({ mesh: ring, speed: (Math.random() * 0.005 + 0.003) });
    });
  }

  buildFloatingCollectibleStars() {
    this.floatingStars = [];
    const starCoords = [
      [-6, 3, 2], [6, 3.5, 1], [-4, -4, 2], [5, -3.5, 3],
      [-7, -1, -1], [7, 0, 2]
    ];

    starCoords.forEach((coord, i) => {
      const starGroup = new THREE.Group();
      starGroup.position.set(...coord);

      const starGeo = new THREE.OctahedronGeometry(0.65, 0);
      const starMat = new THREE.MeshPhysicalMaterial({
        color: 0xffd700,
        emissive: 0xf59e0b,
        emissiveIntensity: 0.8,
        metalness: 0.9,
        roughness: 0.1,
        clearcoat: 1.0
      });
      const starMesh = new THREE.Mesh(starGeo, starMat);
      starMesh.userData = { isStar: true, index: i + 1 };
      starGroup.add(starMesh);

      // Halo ring
      const halo = new THREE.Mesh(
        new THREE.TorusGeometry(0.9, 0.03, 8, 24),
        new THREE.MeshBasicMaterial({ color: 0xfef08a, transparent: true, opacity: 0.7 })
      );
      starGroup.add(halo);

      this.scene.add(starGroup);
      this.floatingStars.push({
        group: starGroup,
        mesh: starMesh,
        halo,
        collected: false,
        index: i + 1,
        basePos: starGroup.position.clone()
      });
    });
  }

  buildStarfieldDust() {
    const count = 1200;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const palette = [
      new THREE.Color(0x38bdf8),
      new THREE.Color(0xa855f7),
      new THREE.Color(0xfbbf24),
      new THREE.Color(0xffffff)
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    this.starParticles = new THREE.Points(geo, mat);
    this.scene.add(this.starParticles);
  }

  setupEvents() {
    window.addEventListener('resize', () => {
      if (!this.container) return;
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    });

    // Smooth Mouse Tracking for Spline-like 3D tilt
    this.container.addEventListener('pointermove', (e) => {
      const rect = this.container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.mouse.set(x, y);
      this.targetRotation.x = y * 0.45;
      this.targetRotation.y = x * 0.65;
    });

    // Click on 3D Stars
    this.container.addEventListener('click', (e) => {
      const rect = this.container.getBoundingClientRect();
      const clickMouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );

      this.raycaster.setFromCamera(clickMouse, this.camera);
      const starMeshes = this.floatingStars.filter(s => !s.collected).map(s => s.mesh);
      const intersects = this.raycaster.intersectObjects(starMeshes);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        this.collectStar(hit.userData.index);
      }
    });
  }

  collectStar(index) {
    const star = this.floatingStars.find(s => s.index === index);
    if (!star || star.collected) return;

    star.collected = true;

    // Sparkle scale animation
    let t = 0;
    const interval = setInterval(() => {
      t += 0.15;
      star.group.scale.setScalar(1 + t * 2.5);
      if (t >= 1) {
        clearInterval(interval);
        this.scene.remove(star.group);
      }
    }, 25);

    if (this.onStarCollected) {
      this.onStarCollected(index);
    }
  }

  collectAllRemainingStars() {
    this.floatingStars.forEach(s => {
      if (!s.collected) this.collectStar(s.index);
    });
  }

  animate() {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    const elapsed = this.clock.getElapsedTime();

    // 1. Spline Crystal Smooth Floating & Mouse Tilt
    if (this.crystalGroup) {
      // Smooth lerp to mouse tilt
      this.crystalGroup.rotation.x += (this.targetRotation.x - this.crystalGroup.rotation.x) * 0.05;
      this.crystalGroup.rotation.y += (this.targetRotation.y - this.crystalGroup.rotation.y) * 0.05;

      // Natural gentle spin & bob
      this.coreMesh.rotation.y = elapsed * 0.15;
      this.crystalGroup.position.y = Math.sin(elapsed * 1.5) * 0.4;
    }

    // 2. Attention Rings Orbital Rotation
    this.attentionRings.forEach(r => {
      r.mesh.rotation.z += r.speed;
      r.mesh.rotation.y += r.speed * 0.7;
    });

    // 3. Floating Stars Bobbing & Twinkling
    this.floatingStars.forEach((star, i) => {
      if (!star.collected) {
        star.group.position.y = star.basePos.y + Math.sin(elapsed * 2.5 + i) * 0.35;
        star.mesh.rotation.y += 0.025;
        star.mesh.rotation.x += 0.015;
        star.halo.rotation.z -= 0.03;
      }
    });

    // 4. Subtle background dust rotation
    if (this.starParticles) {
      this.starParticles.rotation.y = elapsed * 0.02;
    }

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.renderer && this.renderer.domElement) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}
