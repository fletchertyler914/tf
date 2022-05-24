import { useState, useCallback, useMemo, useEffect } from 'react';
import { Cluster, clusterApiUrl, Connection } from '@solana/web3.js';
import { Metaplex } from '@metaplex-foundation/js-next';
import { walletOrGuestIdentity } from '@metaplex-foundation/js-next';
import { useWallet } from '@solana/wallet-adapter-react';
import { bundlrStorage } from '@metaplex-foundation/js-next';
import { mockStorage } from '@metaplex-foundation/js-next';

export interface UseMetaplex {
  metaplex: Metaplex | undefined;
  connection: Connection | undefined;
  updateConnection: (connection: string) => void;
}

export function useMetaplex(): UseMetaplex {
  const { wallet } = useWallet();
  const [metaplex, setMetaplex] = useState<Metaplex | undefined>();
  const [connection, setConnection] = useState<Connection | undefined>(
    undefined
  );

  const updateConnection = useCallback(
    (cluster?: string) =>
      setConnection(new Connection(clusterApiUrl(cluster as Cluster))),
    []
  );

  useMemo(() => {
    if (connection) {
      setMetaplex(Metaplex.make(connection));
    }
  }, [connection]);

  useEffect(() => {
    const connection = new Connection(clusterApiUrl('devnet'));
    setConnection(connection);
  }, []);

  useMemo(() => {
    if (metaplex) {
      metaplex.use(walletOrGuestIdentity(wallet?.adapter));

      // if(connection?.rpcEndpoint) {

      // }

      console.log(connection?.rpcEndpoint);

      if (connection?.rpcEndpoint.includes('devnet')) {
        // metaplex.use(
        //   bundlrStorage({
        //     address: 'https://devnet.bundlr.network',
        //     providerUrl: 'https://api.devnet.solana.com',
        //     timeout: 60000,
        //   })
        // );

        metaplex.use(mockStorage());
      }
    }
  }, [wallet, metaplex, connection]);

  return { metaplex, connection, updateConnection };
}

export default useMetaplex;
