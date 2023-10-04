import useSWR from "swr";
import ArtPieces from "./art-pieces/index.js";

const API_URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function SpotlightPage() {
  const { data } = useSWR(API_URL, fetcher);

  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
