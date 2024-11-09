import EncryptedStorage from 'react-native-encrypted-storage';

const setEncryptStorage = async <T>(key: string, data: T) => {
  await EncryptedStorage.setItem(key, JSON.stringify(data));
};

const getEncryptStorage = async (key: string) => {
  const storeDate = await EncryptedStorage.getItem(key);
  return storeDate ? JSON.parse(storeDate) : null;
};

const removeEncryptStorage = async (key: string) => {
  const data = await getEncryptStorage(key);
  if (data) {
    await EncryptedStorage.removeItem(key);
  }
};

export {setEncryptStorage, getEncryptStorage, removeEncryptStorage};
