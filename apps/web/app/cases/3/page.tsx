"use client";
import React from "react";
import { TestImage } from "../../../components/test-image";

export default function Page(): JSX.Element {
  const originalSize = 18986238;
  return (
    <main>
      <h1>case 3</h1>

      <div>
        <TestImage
          originalSize={originalSize}
          src="http://localhost:3330/images/3/3-original.png"
          title="Original"
        />
        <TestImage
          originalSize={originalSize}
          quality={20}
          src="http://localhost:3330/images/3/3-png-q20.png"
          title="Compressed"
        />
        <TestImage
          originalSize={originalSize}
          quality={50}
          src="http://localhost:3330/images/3/3-png-q50.png"
          title="Compressed"
        />
        <TestImage
          originalSize={originalSize}
          quality={100}
          src="http://localhost:3330/images/3/3-png-q100.png"
          title="Compressed"
        />
        <TestImage
          originalSize={originalSize}
          quality={20}
          src="http://localhost:3330/images/3/3-jpeg-q20.jpeg"
          title="Compressed"
        />
        <TestImage
          originalSize={originalSize}
          quality={50}
          src="http://localhost:3330/images/3/3-jpeg-q50.jpeg"
          title="Compressed"
        />
        <TestImage
          originalSize={originalSize}
          quality={100}
          src="http://localhost:3330/images/3/3-jpeg-q100.jpeg"
          title="Compressed"
        />
        <TestImage
          originalSize={originalSize}
          quality={20}
          src="http://localhost:3330/images/3/3-webp-q20.webp"
          title="WebP"
        />
        <TestImage
          originalSize={originalSize}
          quality={50}
          src="http://localhost:3330/images/3/3-webp-q50.webp"
          title="WebP"
        />
        <TestImage
          originalSize={originalSize}
          quality={100}
          src="http://localhost:3330/images/3/3-webp-q100.webp"
          title="WebP"
        />
      </div>
    </main>
  );
}
