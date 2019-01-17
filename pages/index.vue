<template>
    <v-layout row wrap  align-center>
        <card-repo :item="item" v-for="(item, i) in items" :key="item.name + i"/>
    </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { State } from 'vuex-class';
import cardRepo from '~/components/card-repo/card-repo.vue';
import { IListItem } from '~/store/index.ts';

@Component({
    components: {
        'card-repo': cardRepo
    }
})
export default class IndexPage extends Vue {
    @State
    items: IListItem;
}
</script>
