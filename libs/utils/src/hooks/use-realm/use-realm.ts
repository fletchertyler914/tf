import { Realm } from '@tf/ui';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export interface UseRealm {
  realm: Realm;
  setRealm: (realm: Realm) => void;
}

export function useRealm(): UseRealm {
  const [realm, setRealm] = useState(Realm.None);
  const router = useRouter();
  const routeParts = router.pathname.split('/');

  useEffect(() => {
    if (
      routeParts.length > 0 &&
      routeParts[1] &&
      Object.values(Realm).includes(routeParts[1] as Realm)
    ) {
      setRealm(routeParts[1] as Realm);
    } else {
      setRealm(Realm.None);
    }
  }, [routeParts]);

  return { realm, setRealm };
}

export default useRealm;
