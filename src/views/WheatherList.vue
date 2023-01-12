<template>
  <div>
    <h1>See Wheather</h1>
    <h3>Selecteaza tara</h3>
    <input
      v-model="countries.countryName"
      placeholder="country"
      @keydown.enter="showCitiesByCountry"
    />
    <button @click="showCitiesByCountry">Search</button>
    <p>{{ citiesNames }}</p>
    <select class="p-1">
      <option
        v-for="(country, index) in countries"
        :key="index"
        @click="showCitiesByCountry"
      >
        {{ country.countryName }}
      </option>
    </select>
    <div v-show="showCities">
      <div
        v-for="(country, index) in countries"
        :key="index"
        class="border border-1 m-auto my-3 rounded-2 w-75"
        id="item-card-id"
      >
        <ItemCard :country="country" />
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";

export default {
  name: "WhetherList",
  components: { ItemCard },
  data() {
    return {
      countries: this.$store.state.countries,
      countryName: "",
      citiesNames: this.showCitiesByCountry(),
      showCities: false,
    };
  },
  methods: {
    showCitiesByCountry(country) {
      this.$store.getters.getCitiesByCountry(country);
      this.showCities = true;
    },
  },
};
</script>

<style scoped></style>
