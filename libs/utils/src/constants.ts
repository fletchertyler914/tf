import { Realm, RealmStyle } from '@tf/data';

export const REALM_STYLES: Record<Realm, RealmStyle> = {
  [Realm.None]: {
    backgroundColor: 'bg-black',
    hoverBackgroundColor: 'dark:hover:bg-gray-800 hover:bg-gray-300',
    color: 'black',
    textColor: 'text-black disabled:text-gray-500',
    hoverTextColor: 'dark:hover:text-gray-300 hover:text-gray-800',
  },
  [Realm.Web2]: {
    backgroundColor: 'bg-blue-600',
    hoverBackgroundColor: 'hover:bg-blue-800 dark:hover:bg-blue-400',
    color: 'blue-600',
    textColor: 'text-blue-600 disabled:text-gray-500',
    hoverTextColor: 'hover:text-blue-800 dark:hover:text-blue-400',
  },
  [Realm.Web3]: {
    backgroundColor: 'bg-red-600',
    hoverBackgroundColor: 'hover:bg-red-800 dark:hover:bg-red-400',
    color: 'red-600',
    textColor: 'text-red-600 disabled:text-gray-500',
    hoverTextColor: 'hover:text-red-800 dark:hover:text-red-400',
  },
};
