import React from "react";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <h2>{title}</h2>
      <h3>{artist}</h3>
      {image}
    </>
  );
}
