import { appendClasses } from '@tf/utils';
import Link from 'next/link';
import { RealmLogo } from '../logo';

export interface PillProps {
  className?: string;
  title: string;
  href?: string;
}

export const Pill = ({ className, title }: PillProps) => (
  <Link href={'/' + title.toLowerCase()}>
    <div
      className={appendClasses(
        className ?? '',
        'sm:mx-8 p-2 h-40 w-80 flex items-center justify-center rounded-[90px] shadow hover:shadow-xl border border-transparent hover:skew-x-12 scale-[0.7] sm:scale-100'
      )}
    >
      <RealmLogo
        className="w-20"
        fill="dark:fill-black fill-white md:fill-black"
      />
    </div>
  </Link>
);

export default Pill;
