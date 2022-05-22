import { Calendly } from '@tf/ui';

const styles = {
  height: 'calc(100vh - 63px)',
  // margin: '-28px',
};

export const Calendar = () => (
  <Calendly url="https://calendly.com/fletchertyler914" styles={styles} />
);

export default Calendar;
