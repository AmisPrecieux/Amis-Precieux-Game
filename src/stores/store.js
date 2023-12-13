// store.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authToken: null,
  }),
  actions: {
    setAuthToken(token) {
      this.authToken = token;
    },
  },
});
