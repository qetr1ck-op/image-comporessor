"use client";
import React from "react";
import { TestImage } from "../../../components/test-image";

export default function Page(): JSX.Element {
  const originalSize = 2528045;
  return (
    <main>
      <h1>case 2</h1>

      <div>
        <TestImage
          originalSize={originalSize}
          src="/images/2/2-original.jpg"
          title="Original"
        />
        <TestImage
          originalSize={originalSize}
          quality={20}
          src="/images/2/2-jpeg-q20.jpeg"
          title="Compressed"
        />
        <TestImage
          originalSize={originalSize}
          quality={50}
          src="/images/2/2-jpeg-q50.jpeg"
          title="Compressed"
        />
        <TestImage
          originalSize={originalSize}
          quality={100}
          src="/images/2/2-jpeg-q100.jpeg"
          title="Compressed"
        />
        <TestImage
          originalSize={originalSize}
          quality={20}
          src="/images/2/2-webp-q20.webp"
          title="WebP"
        />
        <TestImage
          originalSize={originalSize}
          quality={50}
          src="/images/2/2-webp-q50.webp"
          title="WebP"
        />
        <TestImage
          originalSize={originalSize}
          quality={100}
          src="/images/2/2-webp-q100.webp"
          title="WebP"
        />
      </div>
    </main>
  );
}
