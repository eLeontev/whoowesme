import { getStorageProvider } from 'libs'
import { StorageAdapterType } from 'libs/StorageAdapter'

export const storage = getStorageProvider() as StorageAdapterType
