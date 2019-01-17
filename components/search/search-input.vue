<template>
    <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        color="white"
        hide-no-data
        hide-selected
        item-text="Description"
        label="Поиск товара"
        placeholder="Начните вводить название"
        prepend-inner-icon="search"
        clearable
        @click:clear="clear"
        @change="selected"
        append-icon
        return-object
        persistent-hint
        class="mt-3 search-top-input"
    >
        <template slot="item" slot-scope="{ item }">
            <v-list-tile-content>
                <v-list-tile-title v-text="item.Description"></v-list-tile-title>
                <v-list-tile-sub-title v-text="item.Category"></v-list-tile-sub-title>
            </v-list-tile-content>
        </template>
    </v-autocomplete>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
// import debounce from '~/utils/debounce';

@Component({
    watch: {
        search(val) {
            if (!val || val.length < 2) {
                this.entries = [];
                return;
            }

            // debounce(150, () => {
            //     this.isLoading = true;

            //     // Lazily load input items
            //     fetch('https://api.publicapis.org/entries')
            //         .then(res => res.json())
            //         .then(res => {
            //             this.isLoading = false;
            //             this.entries = res.entries || [];
            //         })
            //         .catch(err => {
            //             // console.log(err);
            //             this.isLoading = false;
            //             this.entries = [];
            //         });
            // });
        }
    }
})
export default class SerchInputComponent extends Vue {
    entries: any[] = [];
    isLoading = false;
    descriptionLimit = 50; // Длинна текста в выпадающем списке
    model: any = {};
    search: string | null = null;

    clear() {
        this.entries = [];
        this.search = null;
    }

    selected() {
        console.log('->', this.model);
    }

    get items() {
        return this.entries.map(entry => {
            const Description =
                entry.Description.length > this.descriptionLimit
                    ? entry.Description.slice(0, this.descriptionLimit) + '...'
                    : entry.Description;

            return { ...entry, Description };
        });
    }
}
</script>

<style>
@media (max-width: 598px) {
    .search-top-input .v-input__icon--prepend-inner {
        display: none;
    }
}
</style>
