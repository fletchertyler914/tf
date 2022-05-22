import { Realm } from '@tf/data';
import { appendClasses } from '@tf/utils';
import Link from 'next/link';
import { RealmLogo } from '../logo';

export interface PillProps {
  className?: string;
  realm: Realm;
  href?: string;
}

export const Pill = ({ className, realm }: PillProps) => (
  <Link href="/[realm]" as={`/${realm}`}>
    <div
      className={appendClasses(
        className ?? '',
        'sm:mx-8 p-2 h-40 w-80 flex items-center justify-center rounded-[90px] shadow-xl border border-transparent hover:scale-[1.0] scale-[0.9] md:hover:scale-[110%] md:scale-100'
      )}
    >
      <RealmLogo
        className="w-20"
        fill="dark:fill-black fill-white"
        realm={realm}
      />
    </div>
  </Link>
);

export default Pill;
