// import { useState, useCallback } from 'react';

// // eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface UseMetaplex {
//   count: number;
//   increment: () => void;
// }

// export function useMetaplex(): UseMetaplex {
//   const [count, setCount] = useState(0);
//   const increment = useCallback(() => setCount((x) => x + 1), []);
//   return { count, increment };
// }

// export default useMetaplex;

import { useState, useCallback, useMemo } from 'react';
import { Cluster, clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { Metaplex } from '@metaplex-foundation/js-next';

const connection = new Connection(clusterApiUrl('devnet'));
const metaplex = Metaplex.make(connection);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseMetaplex {
  metaplex: Metaplex | undefined;
  connection: Connection | undefined;
  updateConnection: (connection: string) => void;
}

export function useMetaplex(): UseMetaplex {
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

  return { metaplex, connection, updateConnection };
}

export default useMetaplex;
