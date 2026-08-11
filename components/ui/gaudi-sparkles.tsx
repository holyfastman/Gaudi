"use client";

import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="gaudi-sparkles">
      <div className="gaudi-sparkles-field">
        <SparklesCore
          id="gaudi-particles"
          background="transparent"
          minSize={0.4}
          maxSize={1.35}
          particleDensity={1200}
          particleColor="#f4e7cb"
          speed={0.45}
          className="gaudi-sparkles-canvas"
        />
      </div>

      <div className="gaudi-sparkles-content">
        <p>Архитектура исполнения</p>
        <h2>Gaudi</h2>
        <div className="gaudi-light-line" aria-hidden="true">
          <i />
          <b />
        </div>
        <span>Точность. Ответственность. Результат.</span>
      </div>
      <div className="gaudi-sparkles-mask" aria-hidden="true" />
    </div>
  );
}
