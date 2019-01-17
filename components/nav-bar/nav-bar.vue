<template>
    <div>
        <v-toolbar app dark fixed color="primary">
            <nuxt-link to="/" class="brand-logo">
                <img src="/img/svg/github-icon.svg" alt="DiaDiary shop">
            </nuxt-link>

            <v-spacer></v-spacer>
                <!-- <search-input></search-input> -->
            <v-spacer></v-spacer>

            <v-toolbar-side-icon
                v-if="showMenu"
                @click.stop="drawer = !drawer"
                class="hidden-md-and-up"
            ></v-toolbar-side-icon>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                    ripple
                    flat
                    v-for="(item, i) in menuItems"
                    :key="i"
                    :to="item.to"
                >
                    <v-icon left v-html="item.icon"></v-icon>
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <!-- navigation-drawer -->
        <v-navigation-drawer
            v-if="showMenu"
            v-model="drawer"
            fixed
            temporary
            right
            class="hidden-md-and-up"
        >
            <v-list>
                <v-list-tile @click.stop="drawer = false">
                    <v-list-tile-action>
                        <v-icon color="#dd2c00" right v-html="`close`"></v-icon>
                    </v-list-tile-action>
                </v-list-tile>
                <!--  -->
                <v-list-tile
                    v-for="(item, i) in menuItems"
                    :key="i"
                    :to="item.to"
                    avatar
                >
                    <v-list-tile-action>
                        <v-icon left v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <!--  -->
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { State } from 'vuex-class';
import searchInput from '~/components/search/search-input.vue';

interface IMenuItems {
    icon?: string;
    title: string;
    to: any;
}

@Component({
    components: {
        'search-input': searchInput
    }
})
export default class NavBarComponent extends Vue {
    drawer = false;
    filterDrawer = false;

    menuItems: IMenuItems[] = [];

    get showMenu() {
        return this.menuItems.length > 0;
    }
}
</script>


<style>
.brand-logo {
    min-width: 1.8rem;
    margin-top: 0.6rem;
}
.brand-logo img {
    max-width: 2rem;
}
</style>
