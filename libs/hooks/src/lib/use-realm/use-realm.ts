import { REALM_STYLES } from '@tf/utils';
import { UseRealm, Realm, RealmStyle } from '@tf/data';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export function useRealm(): UseRealm {
  const [realm, setRealm] = useState(Realm.None);
  const [realmStyles, setRealmStyles] = useState<RealmStyle>(
    REALM_STYLES[Realm.None]
  );
  const router = useRouter();
  const { realm: routeRealm } = router.query;
  // const routeParts = router.pathname.split('/');

  useEffect(() => {
    if (
      // routeParts.length > 0 &&
      // routeParts[1] &&
      // Object.values(Realm).includes(routeParts[1] as Realm)
      routeRealm
    ) {
      setRealm(routeRealm as Realm);
      setRealmStyles(REALM_STYLES[routeRealm as Realm]);
      console.log('useRealm', routeRealm, router);
      // setRealm(routeParts[1] as Realm);
      // setRealmStyles(REALM_STYLES[routeParts[1] as Realm]);
    } else {
      setRealm(Realm.None);
      setRealmStyles(REALM_STYLES[Realm.None]);
    }
  }, [routeRealm, router]);

  return { realm, setRealm, realmStyles };
}

export default useRealm;
