export interface StorageAdapterType {
  add(name: string, value: any): void
  remove(name: string): void
  get(name: string): string
}

const StorageAdapter = {
  getAdapter: (): string => {
    return 'localStorage'
  },
}

const LocalstorageAdapter: StorageAdapterType = {
  add: (name: string, value: any): void => {
    localStorage.setItem(name, value)
  },
  get: (name: string): string => {
    const data = localStorage.getItem(name) as string

    return data || ''
  },
  remove: (name: string): void => {
    localStorage.removeItem(name)
  },
}

export { LocalstorageAdapter }

export default StorageAdapter
