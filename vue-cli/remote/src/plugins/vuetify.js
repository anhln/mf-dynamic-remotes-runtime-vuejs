import colors from "vuetify/lib/util/colors";
import Vue from "vue";
import Vuetify, {
  VHover,
  VCard,
  VCardTitle,
  VCardActions,
  VDivider,
  VList,
  VListItem,
  VListItemTitle,
  VListItemIcon,
  VApp,
  VAppBar,
  VSlideItem,
  VSpacer,
  VMenu,
  VSlideGroup,
  VBtn,
  VIcon,
  VToolbarTitle,
  VSheet,
  VRow,
  VCol,
  VTooltip,
  VAvatar,
} from "vuetify/lib";

Vue.use(Vuetify, {
  components: {
    VHover,
    VApp,
    VCard,
    VCardActions,
    VCardTitle,
    VDivider,
    VList,
    VListItem,
    VListItemTitle,
    VAppBar,
    VSlideItem,
    VSpacer,
    VMenu,
    VSlideGroup,
    VBtn,
    VIcon,
    VToolbarTitle,
    VListItemIcon,
    VSheet,
    VRow,
    VCol,
    VTooltip,
    VAvatar,
  },
  iconfont: "md",
});
const config = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.purple.darken1, // #E53935
        secondary: colors.purple.lighten4, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
});
// export default new Vuetify({});
export default config;

export const frameworkConfig = {
  vuetify: config,
};
