import Link from 'next/link';
import Image from 'next/image';
import HamburgerMenu from '../HamburgerMenu';

type HeaderPropTypes = {
  img: string;
  alt: string;
};

const links = [
  { title: 'Home', href: '/' },
  { title: 'Work', href: '/work' },
  { title: 'Contact', href: '/contact' },
];

const StickyHeader: React.FC<HeaderPropTypes> = ({ img, alt }) => {
  return (
    <header className='sticky top-0 flex justify-between p-4'>
      <Link href='/'>
        <Image src={img} alt={alt} height={250} width={150} />
      </Link>
      <HamburgerMenu links={links} />
    </header>
  );
};

export default StickyHeader;
