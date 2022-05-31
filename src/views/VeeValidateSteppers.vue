<template>
  <section class="sm:bg-surface-light--darken-2 pb-[3rem] sm:py-[3rem]">
    <Form class="w-full sm:min-w-[420px] sm:!max-w-[480px] mx-auto" v-slot="v" ref="myForm" :validation-schema="schema" :initial-values="onNextSteps" @submit="onSubmit"> </Form>
  </section>
</template>
<script setup>
import { createMachine } from 'xstate';
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';
import { reactive } from 'vue';

const formValues = reactive({ UserName: '', Email: '', Location: '', PhoneNumber: null, Password: '', ConfirmPassword: '' });

function onNextSteps(values) {
  Object.assign(formValues, values);
  alert(JSON.stringify(values, null, 2));
}
</script>
