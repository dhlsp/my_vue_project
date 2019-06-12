export default {
  computed: {
    isEn() {
      return this.$store.getters.language === 'en';
    },
  },
};
