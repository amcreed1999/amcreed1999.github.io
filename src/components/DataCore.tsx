"use client";

import { useEffect, useRef, type RefObject } from "react";

interface DataCoreProps {
  storyRef: RefObject<HTMLElement>;
}

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const mix = (from: number, to: number, amount: number) =>
  from + (to - from) * amount;

const smoothstep = (edge0: number, edge1: number, value: number) => {
  const amount = clamp((value - edge0) / (edge1 - edge0));
  return amount * amount * (3 - 2 * amount);
};

export default function DataCore({ storyRef }: DataCoreProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const story = storyRef.current;
    if (!canvas || !story) return;

    let disposed = false;
    let visible = true;
    let frame: number | null = null;
    let progress = 0;
    let targetProgress = 0;
    let pointerX = 0;
    let pointerY = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const start = async () => {
      const THREE = await import("three");
      if (disposed) return;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: window.devicePixelRatio <= 1.5,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.08;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0, 10);

      const core = new THREE.Group();
      const ringAssembly = new THREE.Group();
      const plateAssembly = new THREE.Group();
      const nodeAssembly = new THREE.Group();
      core.add(ringAssembly, plateAssembly, nodeAssembly);
      scene.add(core);

      const graphite = new THREE.MeshPhysicalMaterial({
        color: 0x172338,
        metalness: 0.92,
        roughness: 0.2,
        clearcoat: 0.65,
        clearcoatRoughness: 0.24,
      });
      const steel = new THREE.MeshPhysicalMaterial({
        color: 0xa8bbd6,
        metalness: 0.95,
        roughness: 0.16,
        clearcoat: 0.75,
        clearcoatRoughness: 0.2,
      });
      const signal = new THREE.MeshPhysicalMaterial({
        color: 0x7aaeff,
        emissive: 0x245da8,
        emissiveIntensity: 1.15,
        metalness: 0.62,
        roughness: 0.16,
        clearcoat: 0.9,
      });
      const darkSteel = new THREE.MeshPhysicalMaterial({
        color: 0x27344b,
        metalness: 0.85,
        roughness: 0.28,
      });

      const ringCount = window.innerWidth < 700 ? 5 : 7;
      const rings: InstanceType<typeof THREE.Mesh>[] = [];
      for (let index = 0; index < ringCount; index += 1) {
        const radius = 1.34 + index * 0.18;
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(radius, index % 2 ? 0.035 : 0.055, 12, 100),
          index === ringCount - 2 ? signal : index % 2 ? steel : graphite,
        );
        ring.rotation.x = Math.PI / 2;
        ring.userData.index = index;
        ringAssembly.add(ring);
        rings.push(ring);
      }

      const plates: InstanceType<typeof THREE.Mesh>[] = [];
      for (let index = 0; index < 3; index += 1) {
        const plate = new THREE.Mesh(
          new THREE.CylinderGeometry(0.9 - index * 0.15, 0.9 - index * 0.15, 0.045, 64),
          index === 1 ? signal : darkSteel,
        );
        plate.rotation.x = Math.PI / 2;
        plate.position.z = (index - 1) * 0.17;
        plateAssembly.add(plate);
        plates.push(plate);
      }

      const inner = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.72, 2),
        new THREE.MeshPhysicalMaterial({
          color: 0x8fb8f6,
          emissive: 0x1f4d8a,
          emissiveIntensity: 0.7,
          metalness: 0.75,
          roughness: 0.16,
          flatShading: true,
        }),
      );
      core.add(inner);

      const cage = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.05, 1)),
        new THREE.LineBasicMaterial({ color: 0x8ebcff, transparent: true, opacity: 0.36 }),
      );
      core.add(cage);

      const axle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.025, 0.025, 5.5, 12),
        steel,
      );
      axle.rotation.z = Math.PI / 2;
      core.add(axle);

      const nodes: InstanceType<typeof THREE.Mesh>[] = [];
      for (let index = 0; index < 12; index += 1) {
        const node = new THREE.Mesh(
          new THREE.SphereGeometry(index % 3 === 0 ? 0.07 : 0.045, 16, 12),
          index % 3 === 0 ? signal : steel,
        );
        node.userData.angle = (index / 12) * Math.PI * 2;
        nodeAssembly.add(node);
        nodes.push(node);
      }

      const ambient = new THREE.HemisphereLight(0xb9d3ff, 0x080d17, 2.3);
      const key = new THREE.DirectionalLight(0xe4edff, 5.5);
      key.position.set(4, 4, 7);
      const rim = new THREE.PointLight(0x4d91ff, 16, 22);
      rim.position.set(-3.5, -1.5, 4);
      const warm = new THREE.PointLight(0xffb07a, 5, 15);
      warm.position.set(3, -3, 2);
      scene.add(ambient, key, rim, warm);

      const resize = () => {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();
      };

      const updateScroll = () => {
        const bounds = story.getBoundingClientRect();
        const distance = Math.max(story.offsetHeight - window.innerHeight, 1);
        targetProgress = clamp(-bounds.top / distance);
      };

      const onPointerMove = (event: PointerEvent) => {
        pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
        pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
      };

      const render = (time: number) => {
        if (disposed) return;
        const staticMotion = reducedMotion.matches;
        progress = staticMotion ? targetProgress : mix(progress, targetProgress, 0.075);

        const unlock = smoothstep(0.12, 0.34, progress);
        const distribute = smoothstep(0.34, 0.61, progress);
        const align = smoothstep(0.61, 0.84, progress);
        const resolve = smoothstep(0.84, 1, progress);
        const seconds = time * 0.001;
        const viewportNarrow = window.innerWidth < 820;

        rings.forEach((ring, index) => {
          const center = (rings.length - 1) / 2;
          const offset = index - center;
          const fan = offset * 0.3 * unlock;
          ring.position.z = fan * (1 - align) + offset * 0.11 * align;
          ring.position.y = Math.sin(index * 1.7) * 0.34 * distribute * (1 - align);
          ring.position.x = offset * 0.13 * align;
          ring.rotation.x = Math.PI / 2 + offset * 0.09 * unlock + align * Math.PI * 0.42;
          ring.rotation.y = Math.sin(index) * 0.22 * distribute + align * Math.PI * 0.48;
          ring.rotation.z = offset * 0.045 * unlock + resolve * offset * 0.025;
          const pulse = 1 + Math.sin(seconds * 1.1 + index * 0.6) * 0.006 * (1 - resolve);
          ring.scale.setScalar(pulse * (1 - resolve * 0.08));
        });

        plates.forEach((plate, index) => {
          const offset = index - 1;
          plate.position.z = offset * mix(0.17, 0.82, unlock) * (1 - align);
          plate.position.y = offset * 0.46 * align;
          plate.rotation.y = distribute * (index - 1) * 0.4;
          plate.scale.setScalar(1 - resolve * 0.28);
        });

        nodes.forEach((node, index) => {
          const angle = node.userData.angle as number;
          const radius = mix(1.08, 2.2, distribute) * mix(1, 0.78, resolve);
          node.position.set(
            Math.cos(angle + seconds * 0.08) * radius,
            Math.sin(angle * 2.03) * 0.62 * mix(0.25, 1, distribute),
            Math.sin(angle + seconds * 0.08) * radius * 0.42,
          );
          node.scale.setScalar(0.55 + distribute * 0.65 + (index % 3 === 0 ? 0.2 : 0));
        });

        inner.rotation.x = seconds * 0.1 + progress * Math.PI * 1.8;
        inner.rotation.y = seconds * 0.14 + progress * Math.PI * 2.2;
        inner.scale.setScalar(mix(1, 0.72, distribute) + resolve * 0.4);
        cage.rotation.copy(inner.rotation);
        cage.scale.setScalar(mix(1, 1.35, distribute) * mix(1, 0.78, resolve));

        const storyTurn = progress * Math.PI * 2.35;
        core.rotation.x = 0.18 + Math.sin(storyTurn * 0.7) * 0.24 - align * 0.26;
        core.rotation.y = -0.48 + storyTurn + pointerX * 0.06 * (1 - align);
        core.rotation.z = -0.08 + Math.sin(storyTurn * 0.45) * 0.12;
        let coreX = 0;
        if (progress < 0.34) {
          coreX = mix(3.4, -2.2, smoothstep(0.1, 0.3, progress));
        } else if (progress < 0.58) {
          coreX = mix(-2.2, 2.2, smoothstep(0.36, 0.56, progress));
        } else if (progress < 0.82) {
          coreX = mix(2.2, -2.2, smoothstep(0.59, 0.79, progress));
        } else {
          coreX = mix(-2.2, 0, smoothstep(0.82, 0.98, progress));
        }
        core.position.x = viewportNarrow ? 0 : coreX;
        core.position.y = viewportNarrow
          ? mix(-1.25, -0.12, smoothstep(0.12, 0.3, progress))
          : pointerY * -0.05 * (1 - align);
        const scale = viewportNarrow ? 0.72 : mix(0.86, 0.78, distribute) + resolve * 0.12;
        core.scale.setScalar(scale);

        renderer.render(scene, camera);
        frame = visible && !document.hidden && !staticMotion
          ? window.requestAnimationFrame(render)
          : null;
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
          if (visible && frame === null && !document.hidden && !reducedMotion.matches) {
            frame = window.requestAnimationFrame(render);
          }
        },
        { threshold: 0.01 },
      );
      const resizeObserver = new ResizeObserver(resize);
      const onVisibility = () => {
        if (!document.hidden && visible && frame === null && !reducedMotion.matches) {
          frame = window.requestAnimationFrame(render);
        }
      };
      const onMotionChange = () => {
        if (frame !== null) window.cancelAnimationFrame(frame);
        frame = null;
        updateScroll();
        render(performance.now());
      };

      observer.observe(story);
      resizeObserver.observe(canvas);
      window.addEventListener("scroll", updateScroll, { passive: true });
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      reducedMotion.addEventListener("change", onMotionChange);
      resize();
      updateScroll();
      render(performance.now());

      const cleanup = () => {
        if (frame !== null) window.cancelAnimationFrame(frame);
        observer.disconnect();
        resizeObserver.disconnect();
        window.removeEventListener("scroll", updateScroll);
        window.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("visibilitychange", onVisibility);
        reducedMotion.removeEventListener("change", onMotionChange);
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments) {
            object.geometry.dispose();
          }
        });
        [graphite, steel, signal, darkSteel, inner.material, cage.material].forEach((material) =>
          material.dispose(),
        );
        renderer.dispose();
      };

      if (disposed) cleanup();
      else teardown = cleanup;
    };

    let teardown = () => {};
    start().catch(() => {
      canvas.dataset.webgl = "unavailable";
    });

    return () => {
      disposed = true;
      teardown();
    };
  }, [storyRef]);

  return (
    <div className="data-core" aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="data-core-halo" />
    </div>
  );
}
