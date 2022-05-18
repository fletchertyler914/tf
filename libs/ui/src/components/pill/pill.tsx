import Link from 'next/link';
import Web2Logo from '../logo/web2-logo';
import Web3Logo from '../logo/web3-logo';

export interface PillProps {
  className?: string;
  title: string;
  href?: string;
}

const appendClassNames = (className = '', defaultClassName: string) =>
  defaultClassName.concat(...[' ', className]);

export const Pill = ({ className, title }: PillProps) => (
  <Link href={'/' + title.toLowerCase()}>
    <div
      className={appendClassNames(
        className,
        'sm:mx-8 p-2 h-40 w-80 flex items-center justify-center rounded-[90px] shadow hover:shadow-xl border border-transparent hover:skew-x-12 scale-[0.9] sm:scale-100'
      )}
    >
      {title === 'web2' ? (
        <Web2Logo className="w-20" />
      ) : (
        <Web3Logo className="w-20" />
      )}
    </div>
  </Link>
);

export default Pill;
