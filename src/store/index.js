import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [
      {
        countryName: "Romania",
        cities: [
          "Bucuresti",
          "Brasov",
          "Alba-Iulia",
          "Cluj-Napoca",
          "Iasi",
          "Timisoara",
          "Sibiu",
        ],
      },
      {
        countryName: "Franta",
        cities: ["Paris", "Marseille", "Strasbourg", "Lyon", "Nice", "Lille"],
      },
      {
        countryName: "Italia",
        cities: ["Roma", "Florenta", "Milano", "Venetia", "Pisa", "Napoli"],
      },
      {
        countryName: "Spania",
        cities: [
          "Madrid",
          "Barcelona",
          "Sevilla",
          "Malaga",
          "Palma",
          "Valencia",
        ],
      },
      {
        countryName: "Marea Britanie",
        cities: [
          "Londra",
          "Liverpool",
          "Manchester",
          "Cambridge",
          "Newport",
          "Rotherham",
        ],
      },
    ],
  },
  getters: {
    getCitiesByCountry: (state) => (countryName) => {
      return state.countries
        .filter((c) => c.countryName === countryName)
        .map((c) => c.cities);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
