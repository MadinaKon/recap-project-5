import React from "react";

export default function ArtPieces({ pieces }) {
  console.log("DATA ", JSON.stringify(pieces));

  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>{piece}</li>
        ))}
      </ul>
    </>
  );
}
