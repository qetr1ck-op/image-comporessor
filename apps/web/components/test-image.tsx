import React, { useEffect, useState } from "react";

function diffTime(a: number, b: number) {
  const diffX = Math.round((a / b) * 100) / 100;

  if (a === b) {
    return diffX;
  }
  if (a > b) {
    return `-${diffX}`;
  }
  if (a < b) {
    return `+${Math.round((b / a) * 100) / 100}`;
  }
}

function formatBytes(bytes: number, decimals = 2) {
  if (!Number(bytes)) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = [
    "Bytes",
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB",
  ];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function TestImage({
  src,
  title,
  quality,
  originalSize,
}: {
  src: string;
  title: string;
  originalSize: number;
  quality?: number;
}) {
  const [imageBlog, setImageBlob] = useState<Blob>();

  useEffect(() => {
    void fetch(src)
      .then((data) => data.blob())
      .then((blob) => {
        setImageBlob(blob);
      });
  }, []);

  if (!imageBlog) {
    return null;
  }
  return (
    <div>
      <pre>
        {title} Mime: {imageBlog.type}{" "}
        {quality ? `Quality: ${quality}/100` : null} Size:{" "}
        {formatBytes(Number(imageBlog.size))}{" "}
        {`Diff: ${diffTime(originalSize, imageBlog.size)}x`}
      </pre>
      <img alt="test" src={src} style={{ width: "100%" }} />
    </div>
  );
}
