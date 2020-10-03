import Vue from "vue";
import Router from "vue-router";
import MainView from "./views/MainView.vue";
import Privacy from "./views/Privacy.vue";
import WorkContainer from "@/components/WorkContainer";
import {
  Eigenräume,
  LIAMM,
  EigenräumeExtendedEdition,
  PermanentlyMoving,
  PublicTransportation,
  SchwerelosRemix,
  ShadesOfYellow
} from "@/views/work/index.js";
import Voyager from "./views/Voyager.vue";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "MainView",
      component: MainView
    },{
      path: "/work",
      name: "Work",
      component: WorkContainer,
      children: [
        {
          path: "shades-of-yellow",
          name: "Shades of Yellow",
          component: ShadesOfYellow
        },
        {
          path: "eigenräume-standard-edition",
          name: "Eigenräume",
          component: Eigenräume
        },{
          path: "liamm",
          name: "Life Is About Making Memories",
          component: LIAMM
        },{
          path: "eigenräume-extended-edition",
          alias: ["/eigenraeume", "/eigenräume"],
          name: "Eigenräume (Extended Edition)",
          component: EigenräumeExtendedEdition
        },{
          path: "301",
          alias: "/301",
          name: "301 Permanently Moving",
          component: PermanentlyMoving
        },{
          path: "public-transportation",
          alias: "/public-transportation",
          name: "Public Transportation EP",
          component: PublicTransportation
        },{
          path: "schwerelos-zoomoid-remix",
          alias: "/schwerelos-remix",
          name: "Schwerelos - Zoomoid Remix",
          component: SchwerelosRemix,
        },
      ]
    },{
      path: "/privacy",
      name: "Privacy",
      component: Privacy
    },{
      path: "/voyager",
      name: "Voyager",
      component: Voyager,
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
})
