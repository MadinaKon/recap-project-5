import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces?.map(
          ({
            slug,
            artist,
            name,
            imageSource,
            year,
            genre,
            colors,
            // dimensions,
          }) => (
            <li key={slug}>
              <p>Artist: {artist}</p>
              <p>Name: {name}</p>
              <p>Year: {year}</p>
              <p>Genre: {genre}</p>
              <p>Colors: {colors}</p>

              <img src={imageSource} alt={name} width={500} height={500} />
              <ArtPiecePreview
                image={imageSource}
                title={name}
                artist={artist}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
}
