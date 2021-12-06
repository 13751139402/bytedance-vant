Component({
  properties: {
    group: Object,
  },
  methods: {
    onClick(event) {
      const { url } = event.target.dataset;

      if (getCurrentPages().length > 9) {
        tt.redirectTo({
          url,
        });
      } else {
        tt.navigateTo({
          url,
          fail(error) {
            console.log(error);
          },
        });
      }
    },
  },
});
