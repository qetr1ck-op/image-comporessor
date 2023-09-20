"use client";
import React from "react";
import { TestImage } from "../../../components/test-image";

export default function Page(): JSX.Element {
  const originalSize = 4856346;
  return (
    <main>
      <h1>case 1</h1>

      <div>
        <TestImage
          originalSize={originalSize}
          src="/images/1/1-original.jpg"
          title="Original"
        />
        <TestImage
          originalSize={originalSize}
          quality={20}
          src="/images/1/1-jpeg-q20.jpeg"
          title="Compressed"
        />
        <TestImage
          originalSize={originalSize}
          quality={50}
          src="/images/1/1-jpeg-q50.jpeg"
          title="Compressed"
        />
        <TestImage
          originalSize={originalSize}
          quality={100}
          src="/images/1/1-jpeg-q100.jpeg"
          title="Compressed"
        />
        <TestImage
          originalSize={originalSize}
          quality={20}
          src="/images/1/1-webp-q20.webp"
          title="WebP"
        />
        <TestImage
          originalSize={originalSize}
          quality={50}
          src="/images/1/1-webp-q50.webp"
          title="WebP"
        />
        <TestImage
          originalSize={originalSize}
          quality={100}
          src="/images/1/1-webp-q100.webp"
          title="WebP"
        />
      </div>
    </main>
  );
}
