export const useStateStore = defineStore("state", {
  state: () => ({ ip: { type: "default" } }),
  getters: {
    doubleCount: (state) => String(state.ip.type) + "test",
  },
  actions: {
    increment() {
      String(this.ip.type);
    },
  },
});
