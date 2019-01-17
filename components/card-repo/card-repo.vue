<template>
    <v-flex xs12 md3>
        <v-card class="card-repo-wrapper pos-r">
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

            <div class="bottom-block">
                <v-card-actions v-for="(btn, i) in btnUrls" :key="btn.url + i">
                    <a
                        :href="btn.url"
                        outline
                        block
                        color="teal"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="v-btn v-btn--block v-btn--outline v-btn--depressed v-btn--router theme--light teal--text"
                    >
                        <div class="v-btn__content">{{ btn.name }}</div>
                    </a>
                </v-card-actions>
            </div>
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

    get btnUrls() {
        const res: any[] = [];
        if (this.item.demoUrl) {
            res.push({
                name: 'Demo',
                url: this.item.demoUrl
            });
        }
        res.push({
            name: 'Repo',
            url: this.item.url
        });
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
.pos-r {
    position: relative;
}
.bottom-block {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
}
</style>
