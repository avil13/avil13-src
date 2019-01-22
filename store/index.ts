import items from '~/store-data/items';

export interface IListItem {
    name: string;
    description: string;
    tags: string[];
    url: string;
    demoUrl?: string;
    image?: string;
    icon?: string;
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
    },

    getters: {
        tags: state => {
            const tagList: string[] = [];
            state.items.forEach((v: IListItem) => {
                v.tags.forEach(tag => {
                    if (!tagList.includes(tag)) {
                        tagList.push(tag);
                    }
                });
            });
            return tagList;
        }
    }
};

export default store;
