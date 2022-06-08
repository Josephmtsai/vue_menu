<template>
  <router-view />
</template>
<script setup>
import { watch } from '@vue/runtime-core';
import { useDialogStore } from '../stores/dialog';
import { useDialog } from 'naive-ui';
import { storeToRefs } from 'pinia';
const dialog = useDialog();
const dialogStore = useDialogStore();
const { display, title, content } = storeToRefs(dialogStore);
watch(display, (newValue) => {
  if (newValue) {
    dialog.error({
      title,
      content,
      maskClosable: false,
      onClose: () => {
        dialogStore.hideMessage();
      },
    });
  }
});
</script>
