<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>
      <v-col cols="12" md="4">
        <Vselect :options="items.slice(0, 2)" label="Filter by country" @select="addFilterCountrySelect" />
        <Vselect :options="items.slice(2)" label="Filter by score" @select="addFilterSortSelect" />
      </v-col>
      <v-col cols="12" md="4">
        <Users />
      </v-col>
      <v-col cols="12" md="4">
        <v-progress-circular v-if="isLoading" indeterminate color="primary"></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vselect from './commons/Vselect.vue';
import Users from './Users.vue'
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ContentBlock',
  components: {
    Vselect, Users
  },
  data: () => ({
    items: [
      'russia',
      'usa',
      '> 20',
      '< 10',
    ],
  }),
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
  },

  methods: {
    ...mapActions([
      'addFilterCountry',
      'addFilterSort'
    ]),
    addFilterCountrySelect(coutry) {
      this.addFilterCountry(coutry);
    },
    addFilterSortSelect(sort) {
      this.addFilterSort(sort);
    }
  }
}
</script>
