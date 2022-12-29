let store = {};

const globalStore: any = {};

globalStore.set = (key: any, value: any) => {
    store = { ...store, [key]: value };
};

// globalStore.get = (key) => {
//     return store[key];
// };

export default globalStore;
