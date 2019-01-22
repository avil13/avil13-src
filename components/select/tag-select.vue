<template>
    <v-select
        v-model="tagValue"
        :items="tags"
        attach
        chips
        label="Tags"
        multiple
        solo
    >
        <template slot="item" slot-scope="{ item }">
            <v-list-tile-action>
                <v-icon>{{ iconName(item) }}</v-icon>
            </v-list-tile-action>
            <span>{{ item }}</span>
            <div
                v-if="tagIcon(item)"
                :style="`background-image:url('${tagIcon(item)}');`"
                class="tag-item"
            ></div>
        </template>
    </v-select>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Getter } from 'vuex-class';

import { IListItem } from '~/store';
import { icons } from '~/store-data/items.ts';

@Component
export default class TagSelectComponent extends Vue {
    @Getter
    tags: IListItem[];

    @Prop({
        type: Array,
        required: true
    })
    value: string[];

    get tagValue() {
        return this.value;
    }
    set tagValue(v) {
        this.$emit('input', v);
    }

    checkBoxItems = {};

    tagIcon(tag): string {
        if (icons.includes(tag)) {
            return `/img/svg-icon/${tag}.svg`;
        }
        return '';
    }

    iconName(item) {
        return this.tagValue.includes(item) ? 'done' : 'crop_din';
    }
}
</script>


<style>
.tag-item {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    right: 1rem;
    /* background-image: url('http://i.stack.imgur.com/2OrtT.jpg'); */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
}
</style>
