<template>
  <div>
    <h4>Tara: {{ country.countryName }}</h4>
    <h4>Orasele: {{ country.cities }}</h4>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: ["country"],
  data() {
    return {
      countries: this.$store.state.countries,
      // citiesName: this.showCities(),
    };
  },
  methods: {
    // showCities() {
    //   return this.$store.getters.getCitiesByCountry;
    // },
  },
};
</script>

<style>
#item-card-id {
  background: lightgoldenrodyellow;
}
</style>
