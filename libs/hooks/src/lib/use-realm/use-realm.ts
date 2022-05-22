import { REALM_STYLES } from '@tf/utils';
import { UseRealm, Realm, RealmStyle } from '@tf/data';
import { useRouter } from 'next/router';
import { useState, useMemo } from 'react';

export function useRealm(): UseRealm {
  const [realm, setRealm] = useState<Realm>(Realm.None);
  const [lasRealm, setLastRealm] = useState<Realm | undefined>(undefined);
  const [realmStyles, setRealmStyles] = useState<RealmStyle>(
    REALM_STYLES[Realm.None]
  );
  const router = useRouter();
  const { realm: routeRealm } = router.query;

  useMemo(() => {
    if (routeRealm) {
      setRealm(routeRealm as Realm);
      setRealmStyles(REALM_STYLES[routeRealm as Realm]);
      setLastRealm(routeRealm as Realm);
    } else {
      setRealm(Realm.None);
      setRealmStyles(REALM_STYLES[Realm.None]);
    }
  }, [routeRealm]);

  return { realm, lasRealm, setRealm, realmStyles };
}

export default useRealm;
