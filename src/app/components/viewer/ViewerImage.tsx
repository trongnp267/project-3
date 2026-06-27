"use client";

import { useEffect, useRef } from "react";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";

export default function ViewerImage(props: {
  className: string,
  images: {
    className: string,
    link: string
  }[]
}) {
  const {className, images} = props;
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    const viewer = new Viewer(galleryRef.current, {
        navbar: true,
        toolbar: true,
        title: true,
        movable: true,
        zoomable: true,
        scalable: true,
        rotatable: true,
        fullscreen: true,
    });

    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div ref={galleryRef} className={className}>
      {images.map((image, index) => (
        <img key={index} src={image.link} alt="" className={image.className} />
      ))}
    </div>
  );
}