import { defineStore } from 'pinia';

export const useDialogStore = defineStore('dialog', {
  state: () => {
    return { title: '', content: '', display: false };
  },

  actions: {
    setMessage(title, content) {
      this.title = title;
      this.content = content;
    },
    showMessage() {
      this.display = true;
    },
    hideMessage() {
      this.display = false;
    },
  },
});
