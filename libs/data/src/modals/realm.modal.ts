export enum Realm {
  None = 'none',
  Web2 = 'web2',
  Web3 = 'web3',
}

export interface UseRealm {
  realm: Realm;
  realmStyles: RealmStyle;
  setRealm: (realm: Realm) => void;
}

export interface RealmStyle {
  backgroundColor: string;
  hoverBackgroundColor: string;
  color: string;
  textColor: string;
  hoverTextColor: string;
}
