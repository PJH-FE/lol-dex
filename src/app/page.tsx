import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href={'/champions'}>Champions</Link>
      <Link href={'/items'}>Items</Link>
      <Link href={'/rotation'}>Rotation</Link>
    </>
  );
}
