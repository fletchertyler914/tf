import { Nft } from '@metaplex-foundation/js-next';
import { PublicKey } from '@solana/web3.js';
import { Realm } from '@tf/data';
import { useMetaplex } from '@tf/hooks';
import { PersonalOverview, PersonalOverviewProps } from '@tf/ui';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface RealmProps {}

const RealmContainer = (props: RealmProps) => {
  const router = useRouter();
  const { realm } = router.query;

  // TODO: fetch NFTs to mint if web3 realm
  const [address, setAddress] = useState(
    '3ijFZcJKmp1EnDbbuaumWYvEFbztx9NRupwTXTchK9bP'
  );
  const [nfts, setNfts] = useState<Nft[]>([]);
  const { metaplex } = useMetaplex();

  let overviewProps: PersonalOverviewProps = {
    fullName: 'Tyler Fletcher',
    position: 'Fullstack Developer',
    email: 'hello@tylerjfletcher.xyz',
    salary: '$160,000 - $200,000',
    about: '',
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

  if (realm === Realm.Web2) {
    overviewProps = {
      ...overviewProps,
      about: 'I began my programming career in 2014 after bouncing around many types of jobs throughout my late teens and early 20\'s. I\'ve always loved technology, puzzles, and problem solving, so it was a very natural path. More coming soon...',
    };
  } else if (realm === Realm.Web3) {
    overviewProps = {
      ...overviewProps,
      about: 'I began working in the blockchain / web3 realm in 2015, and have grown an immense passion for everything it brings and stands for (and against). In true web3 fashion, I have decided to let others mint my resume as an NFT on the Solana blockchain. To get started, please connect your Solana wallet above (or download one). More coming soon...',
    };
  }

  const createAttachmentsFromNfts = (nfts: Nft[]) =>
    nfts.map((nft) => ({
      name: nft.name,
      url: nft.uri,
    }));

  useEffect(() => {
    if (address && metaplex && realm === 'web3') {
      const fetchNft = async () => {
        const nft = await metaplex.nfts().findByMint(new PublicKey(address));
        setNfts([nft]);
        console.log('nft', nft);
      };
      fetchNft();
    }
  }, [realm, metaplex, address]);

  //   useEffect(() => {
  //     if (realm === Realm.Web3 && nfts.length > 0) {
  //       const attachments = createAttachmentsFromNfts(nfts);
  //       overviewProps = {
  //         ...overviewProps,
  //         attachments,
  //       };
  //     }
  //   }, [nfts, realm]);

  return (
    <div className="text-black dark:text-white">
      <h1 className="text-2xl pt-6">Welcome to the {realm} realm.</h1>
      <p className="text-xs text-gray-600 dark:text-gray-300 pb-6">
        Click on the realm in the top right to jump through the wormhole.
      </p>
      <PersonalOverview {...overviewProps} />
    </div>
  );
};

export default RealmContainer;
