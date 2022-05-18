import Link from 'next/link';
import React from 'react';
import { Realm } from '../../utils';

export interface Web2LogoProps {
  className?: string;
  fill?: string;
  route?: Realm;
}

const Icon = ({ className, fill }: Web2LogoProps) => (
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

export const Web2Logo = ({ className, fill, route }: Web2LogoProps) => {
  return route ? (
    <Link href={'/' + route.toLowerCase()} passHref>
      <a href={'/' + route.toLowerCase()}>
        <Icon className={className} fill={fill} />
      </a>
    </Link>
  ) : (
    <Icon className={className} fill={fill} />
  );
};

export default Web2Logo;
