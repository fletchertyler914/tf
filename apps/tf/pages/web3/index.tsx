import { PersonalOverview, PersonalOverviewProps } from '@tf/ui';

/* eslint-disable-next-line */
export interface Web3Props {}

const overviewProps: PersonalOverviewProps = {
  fullName: 'Tyler Fletcher',
  position: 'Fullstack Engineer',
  email: '0xtylerfletcher@gmail.com',
  salary: '$160,000 - $200,000',
  about:
    'I began working in the blockchain/web3 realm in 2015, and have grown an immense passion for everything it brings and stands for (and against). In true web3 fashion, I have decided to let others mint my resume as an NFT on the Solana blockchain. To get started, please connect your Solana wallet above (or download one).',
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

const Web3 = (props: Web3Props) => {
  // const [address, setAddress] = useState(
  //   '3ijFZcJKmp1EnDbbuaumWYvEFbztx9NRupwTXTchK9bP'
  // );
  // const [nft, setNft] = useState(null);
  // const fetchNft = async () => {
  //   const nft = await mx.nfts().findByMint(new PublicKey(address));
  //   setNft(nft);
  // };

  return (
    <div className="text-black dark:text-white">
      <h1 className="text-2xl py-6">Welcome to the web3 realm.</h1>
      <PersonalOverview {...overviewProps} />
    </div>
  );
};

export default Web3;
