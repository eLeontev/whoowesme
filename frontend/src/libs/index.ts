import StorageAdapter, { LocalstorageAdapter, StorageAdapterType } from './StorageAdapter'

const adapter = StorageAdapter.getAdapter()

const getStorageProvider = (): StorageAdapterType => {
  switch (adapter) {
    case 'localStorage':
      return LocalstorageAdapter
      break
    default:
      return LocalstorageAdapter
      break
  }
}
export { getStorageProvider }
