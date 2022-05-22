import { CSSProperties } from 'react';
import { InlineWidget } from 'react-calendly';

/* eslint-disable-next-line */
export interface CalendlyProps {
  url: string;
  styles?: CSSProperties;
}

export const Calendly = ({ url, styles }: CalendlyProps) => (
  <div className="pt-6">
    <InlineWidget url={url} styles={styles} />
  </div>
);

export default Calendly;
