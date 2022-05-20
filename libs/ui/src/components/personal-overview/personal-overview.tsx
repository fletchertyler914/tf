import { PaperClipIcon } from '@heroicons/react/solid';
import { appendClasses } from '@tf/utils';
import { useRealm } from '@tf/hooks';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { Realm } from '@tf/data';
import { RealmStyle } from 'libs/data/src';

interface Attachment {
  name: string;
  url: string;
}

/* eslint-disable-next-line */
export interface PersonalOverviewProps {
  fullName: string;
  position: string;
  email: string;
  salary: string;
  about: string;
  attachments?: Attachment[];
}

const Attachment = (
  attachment: Attachment,
  realm: Realm,
  realmStyles: RealmStyle,
  connected: boolean
) => (
  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
    <div className="w-0 flex-1 flex items-center">
      <PaperClipIcon
        className="flex-shrink-0 h-5 w-5 text-gray-400"
        aria-hidden="true"
      />
      <span className="ml-2 flex-1 w-0 truncate">
        {attachment.name}
        {realm === Realm.Web2 ? '.pdf' : '.NFT'}
      </span>
    </div>
    <div className="ml-4 flex-shrink-0">
      <button
        disabled={realm === Realm.web3 ? !connected : false}
        onClick={() => console.log(realm === Realm.Web2 ? 'Download' : 'Mint')}
        className={appendClasses(
          [realmStyles.textColor, realmStyles.hoverTextColor],
          'font-medium'
        )}
      >
        {realm === Realm.Web2
          ? 'Download'
          : !connected
          ? 'Connect Wallet'
          : 'Mint'}
      </button>
    </div>
  </li>
);

export const PersonalOverview = ({
  fullName,
  position,
  email,
  salary,
  about,
  attachments,
}: PersonalOverviewProps) => {
  const { connected } = useWallet();
  const { realm, realmStyles } = useRealm();

  return (
    <div className="bg-white dark:bg-gray-800 shadow border border-gray-400 dark:border-gray-200 overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex">
          <div className="flex flex-1 flex-col">
            <h3 className="text-lg leading-6 font-bold text-gray-900 dark:text-white">
              Applicant Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-800 dark:text-gray-300">
              Personal details and application.
            </p>
          </div>
          <div className="flex flex-col items-end justify-center">
            {realm === Realm.Web3 && (
              <WalletMultiButton className="bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200" />
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400 dark:border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-bold text-black dark:text-gray-300">
              Full name
            </dt>
            <dd className="mt-1 text-sm text-gray-800 dark:text-gray-300">
              {fullName}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-bold text-black dark:text-gray-300">
              Position
            </dt>
            <dd className="mt-1 text-sm text-gray-800 dark:text-gray-300">
              {position}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-bold text-black dark:text-gray-300">
              Email address
            </dt>
            <dd className="mt-1 text-sm text-gray-800 dark:text-gray-300 underline">
              <a href={`mailto:${email}`}>{email}</a>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-bold text-black dark:text-gray-300">
              Salary expectation
            </dt>
            <dd className="mt-1 text-sm text-gray-800 dark:text-gray-300">
              {salary}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-bold text-black dark:text-gray-300">
              About
            </dt>
            <dd className="mt-1 text-sm text-gray-800 dark:text-gray-300">
              {about}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Attachments
            </dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">
              <ul className="border border-gray-400 dark:border-gray-200 rounded-md divide-y divide-gray-400 dark:divide-gray-200">
                {attachments?.map((attachment) =>
                  Attachment(attachment, realm, realmStyles, connected)
                )}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
export default PersonalOverview;
