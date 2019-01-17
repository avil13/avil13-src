<template>
    <v-app id="inspire">
        <!-- nav -->
        <nav-bar></nav-bar>
        <!-- /nav -->
        <!-- content -->
        <v-content app>
            <v-container grid-list-md>
                <main>
                    <nuxt></nuxt>
                </main>
            </v-container>
        </v-content>
        <!-- /content -->
        <!-- footer -->
        <v-footer height="auto" dark color="primary lighten-1">
            <v-card-actions class="justify-center">{{ year }}</v-card-actions>
        </v-footer>
        <!-- /footer -->
    </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { State } from 'vuex-class';

import navBar from '~/components/nav-bar/nav-bar.vue';

@Component({
    components: {
        'nav-bar': navBar
    }
})
export default class DefaultLayout extends Vue {
    get year() {
        const data = new Date();
        return data.getUTCFullYear();
    }
}
</script>
