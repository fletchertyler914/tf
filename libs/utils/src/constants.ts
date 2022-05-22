import { Realm, RealmStyle } from '@tf/data';

export const REALM_STYLES: Record<Realm, RealmStyle> = {
  [Realm.None]: {
    backgroundColor: 'dark:bg-yellow-600 bg-yellow-600',
    hoverBackgroundColor: 'dark:hover:bg-gray-800 hover:bg-gray-300',
    color: 'yellow-500',
    textColor: 'dark:text-white text-black',
    hoverTextColor: 'dark:hover:text-gray-300 hover:text-gray-800',
  },
  [Realm.Web2]: {
    backgroundColor: 'bg-blue-500',
    hoverBackgroundColor: 'hover:bg-blue-700 dark:hover:bg-blue-300',
    color: 'blue-500',
    textColor: 'text-blue-500 disabled:text-gray-500',
    hoverTextColor: 'hover:text-blue-700 dark:hover:text-blue-300',
  },
  [Realm.Web3]: {
    backgroundColor: 'bg-red-500',
    hoverBackgroundColor: 'hover:bg-red-700 dark:hover:bg-red-300',
    color: 'red-500',
    textColor: 'text-red-500 disabled:text-gray-500',
    hoverTextColor: 'hover:text-red-700 dark:hover:text-red-300',
  },
};
