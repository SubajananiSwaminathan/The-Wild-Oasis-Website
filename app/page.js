import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <div>
      <Navigation />
      <h1>The Wild Oasis. Welcome to Paradise!</h1>;
      <Link href="/cabins">Explore Luxury Cabins</Link>
    </div>
  );
}
