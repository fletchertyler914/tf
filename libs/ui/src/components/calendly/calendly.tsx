import { CSSProperties } from 'react';
import { InlineWidget } from 'react-calendly';

/* eslint-disable-next-line */
export interface CalendlyProps {
  url: string;
  styles?: CSSProperties;
}

export const Calendly = ({ url, styles }: CalendlyProps) => (
  <InlineWidget url={url} styles={styles} />
);

export default Calendly;
