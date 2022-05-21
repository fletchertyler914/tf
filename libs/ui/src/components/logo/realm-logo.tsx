import Link from 'next/link';
import { appendClasses } from '@tf/utils';
import { Realm } from '@tf/data';

export interface RealmLogoProps {
  className?: string;
  fill?: string;
  realm?: Realm;
  showSwitcher?: boolean;
  stroke?: string;
}

export const RealmSwitchIcon = ({ stroke }: RealmLogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    className={appendClasses(stroke!, 'h-6 w-6')}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
    />
  </svg>
);

export const Web2Icon = ({ className, fill }: RealmLogoProps) => (
  <svg
    className={className}
    viewBox="0 0 200.00000000000003 154.90198736693168"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(4.085 0 0 4.085 -4.085 -9.4771)" className={fill}>
      <path d="m12.64 40l2.76-31.36h-3.28l-1.16 20.48-1.12-20.48h-3.28l-1.12 20.48-1.12-20.48h-3.32l2.8 31.36h3.28l1.12-20.44 1.12 20.44h3.32zm9.64 0.24q4.16 0 4.16-4.4v-6.96h-3.28v6.52q0 0.92-0.32 1.4t-0.8 0.48q-0.56 0-0.84-0.54t-0.28-1.26v-5.24q0-1.44 0.44-2.34t1.92-2.5q1.08-1.12 1.68-1.96t0.92-1.68q0.32-0.8 0.44-1.74t0.12-2.42v-4.84q0-4.4-4.16-4.4h-0.48q-4.2 0-4.2 4.4v23.08q0 4.4 4.2 4.4h0.48zm0.56-28.44q0.32 0.48 0.32 1.4v4.96q0 1.52-0.38 2.44t-1.78 2.4l-0.08 0.08v-9.96q0-0.72 0.28-1.26t0.84-0.54q0.48 0 0.8 0.48zm14.44 27.08q0.72-1.08 0.72-3.28v-22.84q0-2.2-0.72-3.28-0.76-1.12-2.48-1.12-0.76 0-1.4 0.32t-0.96 0.8v-6.84h-3.32l0.04 34.52q0 1.08-0.04 1.6t-0.28 1.24h3.16q0.24-0.32 0.36-1.24 0.16 0.24 0.28 0.36 0.4 0.4 0.98 0.64t1.18 0.24q1.72 0 2.48-1.12zm-4.52-27.08q0.32-0.48 0.8-0.48 0.52 0 0.82 0.52t0.3 1.28v22.36q0 0.76-0.3 1.3t-0.82 0.54q-0.44 0-0.78-0.48t-0.34-1.4v-22.24q0-0.92 0.32-1.4zm10.96 24.88v-2.4q0-3.6 0.28-5.82t1.28-4.02q1-1.72 1.64-2.72 1.56-2.48 2.3-4.18t0.74-3.82v-6.76q0-4.64-4.48-4.64h-0.6q-2.4 0-3.44 1.22t-1.04 3.42v9.48h3.32v-9.08q0-0.8 0.3-1.24t1.18-0.44q0.84 0 1.14 0.44t0.3 1.24v6.84q0 1.36-0.6 2.58t-2 3.3l-1.04 1.56q-1.16 1.8-1.72 3.62t-0.72 3.76-0.16 5.1v2.48 3.4h9.56v-3.32h-6.24z" />
    </g>
  </svg>
);

export const Web3Icon = ({ className, fill }: RealmLogoProps) => (
  <svg
    className={className}
    viewBox="0 0 200 154.77548716019612"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(4.0816 0 0 4.0816 -4.0816 -9.4694)" className={fill}>
      <path d="m12.64 40l2.76-31.36h-3.28l-1.16 20.48-1.12-20.48h-3.28l-1.12 20.48-1.12-20.48h-3.32l2.8 31.36h3.28l1.12-20.44 1.12 20.44h3.32zm9.64 0.24q4.16 0 4.16-4.4v-6.96h-3.28v6.52q0 0.92-0.32 1.4t-0.8 0.48q-0.56 0-0.84-0.54t-0.28-1.26v-5.24q0-1.44 0.44-2.34t1.92-2.5q1.08-1.12 1.68-1.96t0.92-1.68q0.32-0.8 0.44-1.74t0.12-2.42v-4.84q0-4.4-4.16-4.4h-0.48q-4.2 0-4.2 4.4v23.08q0 4.4 4.2 4.4h0.48zm0.56-28.44q0.32 0.48 0.32 1.4v4.96q0 1.52-0.38 2.44t-1.78 2.4l-0.08 0.08v-9.96q0-0.72 0.28-1.26t0.84-0.54q0.48 0 0.8 0.48zm14.44 27.08q0.72-1.08 0.72-3.28v-22.84q0-2.2-0.72-3.28-0.76-1.12-2.48-1.12-0.76 0-1.4 0.32t-0.96 0.8v-6.84h-3.32l0.04 34.52q0 1.08-0.04 1.6t-0.28 1.24h3.16q0.24-0.32 0.36-1.24 0.16 0.24 0.28 0.36 0.4 0.4 0.98 0.64t1.18 0.24q1.72 0 2.48-1.12zm-4.52-27.08q0.32-0.48 0.8-0.48 0.52 0 0.82 0.52t0.3 1.28v22.36q0 0.76-0.3 1.3t-0.82 0.54q-0.44 0-0.78-0.48t-0.34-1.4v-22.24q0-0.92 0.32-1.4zm16.2-8.26q1.04 1.22 1.04 3.42v5.92q0 2.68-0.56 4.28t-2.2 4q1.16 1.64 1.72 2.68t0.8 2.22 0.24 3.02v6.32q0 2.16-1.04 3.38t-3.44 1.22h-0.64q-4.48 0-4.48-4.6l0.04-9.2h3.32v8.76q0 0.8 0.3 1.26t1.14 0.46q0.88 0 1.18-0.46t0.3-1.26v-6.4q0-1.44-0.3-2.3t-1.18-2.18l-2.04-2.88 2.04-2.96q0.88-1.32 1.18-2.34t0.3-2.58v-5.96q0-0.8-0.3-1.24t-1.18-0.44q-0.84 0-1.14 0.44t-0.3 1.24v9.08h-3.32l-0.04-9.48q0-4.64 4.48-4.64h0.64q2.4 0 3.44 1.22z" />
    </g>
  </svg>
);

export const RealmIcon = ({ className, fill, realm }: RealmLogoProps) => {
  if (realm === Realm.Web2) {
    return <Web2Icon className={className} fill={fill} />;
  }
  return <Web3Icon className={className} fill={fill} />;
};

export const RealmLogo = ({
  className,
  fill,
  realm,
  showSwitcher,
}: RealmLogoProps) => {
  const stroke = fill === 'text-white' ? 'stroke-white' : 'stroke-black';
  const otherRealm = realm === Realm.Web2 ? Realm.Web3 : Realm.Web2;
  return showSwitcher ? (
    <Link href="/[realm]" as={`/${otherRealm}`} passHref>
      <a className="flex items-center">
        <RealmIcon className={className} fill={fill} realm={realm} />
        <RealmSwitchIcon stroke={stroke} />
      </a>
    </Link>
  ) : (
    <RealmIcon className={className} fill={fill} realm={realm} />
  );
};

export default RealmLogo;
