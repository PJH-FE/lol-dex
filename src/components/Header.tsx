import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative z-10">
      <Link href={'/'}>Home</Link>
      <Link href={'/champions'}>Champions</Link>
      <Link href={'/items'}>Items</Link>
      <Link href={'/rotation'}>Rotation</Link>
    </header>
  );
};
export default Header;
