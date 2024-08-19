import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/cabins">Cabins</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/account">Account</Link>
      </li>
    </ul>
  );
}
