import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed z-50 flex flex-wrap gap-4 md:gap-6 items-center w-full md:text-xl p-6 h-20 box-border bg-[#0a0a0a]">
      <Link href={'/'} className="flex-shrink-0">
        <Image className="w-16 md:w-[85px]" src={logo} alt={'로고'} width={85} height={27} />
      </Link>
      <Link href={'/champions'}>Champions</Link>
      <Link href={'/items'}>Items</Link>
      <Link href={'/rotation'}>Rotation</Link>
    </header>
  );
};
export default Header;
