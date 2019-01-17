<template>
    <v-flex xs12 md4>
        <v-card class="card-repo-wrapper">
            <v-img
                contain
                :src="(item.image || '/img/image/github.png')"
                :alt="item.name"
                aspect-ratio="1.8"
            ></v-img>

            <v-card-title primary-title>
                <v-layout column>
                    <v-card-text>
                        <h2 class="headline repo-title text-xs-center">
                            <a
                                :href="item.url"
                                target="_blank"
                                rel="noopener noreferrer"
                            >{{ item.name }}</a>
                        </h2>
                    </v-card-text>
                    <v-card-text>{{ item.description }}</v-card-text>
                </v-layout>
            </v-card-title>
            <v-card-actions v-for="(url, i) in btnUrls" :key="url">
                <a
                    :href="url"
                    outline
                    block
                    color="teal"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="v-btn v-btn--block v-btn--outline v-btn--depressed v-btn--router theme--light teal--text"
                >
                    <div class="v-btn__content">{{ btnTexts[i] }}</div>
                </a>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { IListItem } from '~/store/index.ts';

@Component
export default class CardRepoComponent extends Vue {
    @Prop({
        type: Object,
        required: true
    })
    item: IListItem;

    btnTexts = ['Repo', 'Demo'];

    get btnUrls() {
        const res = [this.item.url];
        if (this.item.demoUrl) {
            res.push(this.item.demoUrl);
        }
        return res;
    }
}
</script>

<style>
.card-repo-wrapper {
    min-height: 33rem;
}
.repo-title {
    color: #5f5f5f;
}
.repo-title a {
    text-decoration: none;
}
.repo-title a:hover {
    text-decoration: underline;
}
</style>
