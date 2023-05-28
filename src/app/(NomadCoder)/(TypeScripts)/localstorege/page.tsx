export interface LocalStorage<T, E> {
  key: T;
  value: E;
  storageSet(key: T, value: E): void;
  storageGet(target: E): void;
  storageClear(): void;
}

export class Model<Key, Value> implements LocalStorage<Key, Value> {
  key!: Key;
  value!: Value;

  storageSet<Key, Value>(key: Key, value: Value) {
    if (typeof key === "string" && typeof value === "string") {
      localStorage.setItem(key, value);
    }
  }
  storageGet<Key>(key: Key): String | null {
    if (typeof key === "string") {
      return localStorage.getItem(key);
    }
    return null;
  }
  storageRemove<Key>(key: Key): void {
    if (typeof key === "string") {
      localStorage.removeItem(key);
    }
  }
  storageClear() {
    localStorage.clear();
  }
}

export class Geolocation {
  getCurrentPosition(
    sucessFn: PositionCallback,
    errorFn?: PositionErrorCallback,
    options?: object
  ) {
    if (errorFn && options) {
      navigator.geolocation.getCurrentPosition(sucessFn, errorFn, options);
    } else if (errorFn) {
      navigator.geolocation.getCurrentPosition(sucessFn, errorFn);
    } else {
      navigator.geolocation.getCurrentPosition(sucessFn);
    }
  }
  watchPosition(
    sucess: PositionCallback,
    error?: PositionErrorCallback,
    options?: object
  ) {
    if (error && options) {
      navigator.geolocation.watchPosition(sucess, error, options);
    } else if (error) {
      navigator.geolocation.watchPosition(sucess, error);
    } else {
      navigator.geolocation.watchPosition(sucess);
    }
  }

  clearWatch(watchId: number) {
    navigator.geolocation.clearWatch(watchId);
  }
}
