import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { appendClasses, Realm } from '@tf/ui';
// import { useRealm } from '@tf/utils';

/* eslint-disable-next-line */
export interface Web3Props {}

const Web3 = (props: Web3Props) => (
  <div className="text-black dark:text-white">
    <h1 className="text-2xl">Welcome to the web3 realm.</h1>
    <p className="mt-4">
      To start with a little background, I began working in the blockchain/web3
      realm in 2015, and have grown an immense passion for everything it brings
      and stands for (and/or against).
    </p>
    <p className="mt-4">
      In web3 fashion, I have decided to let others <em>mint</em> my resume.
      <span>To get started, please connect your Solana wallet below.</span>
    </p>

    <WalletMultiButton className="bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 mt-6" />
  </div>
);

export default Web3;
