import Vue from "vue";
import Vuex from "vuex";
import Character from "./modules/character";
import Favorites from "./modules/favorites";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    character: Character,
    favorites: Favorites
  }
});
