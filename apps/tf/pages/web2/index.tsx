import { PersonalOverview, PersonalOverviewProps } from '@tf/ui';

/* eslint-disable-next-line */
export interface Web2Props {}

const overviewProps: PersonalOverviewProps = {
  fullName: 'Tyler Fletcher',
  position: 'Fullstack Engineer',
  email: '0xtylerfletcher@gmail.com',
  salary: '$160,000 - $200,000',
  about:
    "To start with a little background, I began my programming career in 2014. I've always loved technology, puzzles, and problem solving, so it was a very natural path. \r\rMore coming soon...",
  attachments: [
    {
      name: 'resume_fullstack_developer',
      url: '#',
    },
    {
      name: 'cover_letter_fullstack_developer',
      url: '#',
    },
  ],
};

const Web2 = (props: Web2Props) => (
  <div className="text-black dark:text-white">
    <h1 className="text-2xl py-6">Welcome to the web2 realm.</h1>
    <PersonalOverview {...overviewProps} />
  </div>
);

export default Web2;
