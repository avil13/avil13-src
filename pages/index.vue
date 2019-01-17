<template>
    <v-layout row wrap align-center>
        <v-flex xs12>
            <h1 class="headline text-xs-center">List of repositories by AVIL13</h1>
        </v-flex>
        <v-flex xs12 md8 offset-md2>
            <v-select
                v-model="tagValue"
                :items="tags"
                attach
                chips
                label="Tags"
                multiple
                solo
            ></v-select>
        </v-flex>
        <card-repo
            :item="item"
            v-for="(item, i) in itemsList"
            :key="item.name + i"
        />
    </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { State, Getter } from 'vuex-class';
import cardRepo from '~/components/card-repo/card-repo.vue';
import { IListItem } from '~/store/index.ts';

@Component({
    components: {
        'card-repo': cardRepo
    }
})
export default class IndexPage extends Vue {
    @State
    items: IListItem[];

    @Getter
    tags: string[];

    tagValue: string[] = [];

    get itemsList() {
        return this.items.filter(v => {
            if (this.tagValue.length === 0) {
                return true;
            }

            return this.tagValue.some(tag => {
                return v.tags.includes(tag);
            });
        });
    }
}
</script>
