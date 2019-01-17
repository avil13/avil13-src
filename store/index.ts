import items from '~/store-data/items';

export interface IListItem {
    name: string;
    description: string;
    tags: string[];
    url: string;
    demoUrl?: string;
    image?: string;
}

export interface IIndexState {
    items: IListItem[];
}

// IndexStore
const store = {
    namespaced: true,

    state: (): IIndexState => ({
        items
    }),

    mutations: {
        setItems(state: IIndexState, items = []) {
            state.items = items;
        }
    }
};

export default store;
