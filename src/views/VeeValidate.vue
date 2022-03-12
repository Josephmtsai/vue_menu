<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="container mx-auto p-4 phone:mx-auto tablet:mx-0 bg-gray-200">
      <div class="rounded-sm p-1 lg:col-span-6 md:col-span-12">
        <Form v-slot="v" ref="myForm" :validation-schema="schema" :initial-values="formValues" @submit="onSubmit">
          <n-card title="myForm Value"> {{ v }}} </n-card>
          <Field v-slot="{ field, errorMessage }" :validateOnInput="true" name="Password" type="Password">
            <n-card title="Password">
              <n-input type="password" v-bind="field" :model-value="field.value" show-password-on="mousedown" placeholder="Password" />
              <template #footer>{{ errorMessage }} </template>
            </n-card>
          </Field>
          <Field v-slot="{ field, errorMessage }" name="PasswordConfirm" type="Password">
            <n-card title="Password Confirm">
              <n-input type="password" v-bind="field" :model-value="field.value" show-password-on="mousedown" placeholder="Password Confirm" />
              <template #footer>{{ errorMessage }} </template>
            </n-card>
          </Field>
          <Field v-slot="{ field, errorMessage }" name="Email" type="text">
            <n-card title="Email">
              <n-input type="text" v-bind="field" :model-value="field.value" show-password-on="mousedown" placeholder="Email" />
              <template #footer>{{ errorMessage }} </template>
            </n-card>
          </Field>
          <Field v-slot="{ field, errorMessage }" name="EmailOnBlur" type="text">
            <n-card title="EmailOnBlur">
              <n-input type="text" v-bind="field" @on-blur="isAvaibledEmail(field.value)" :model-value="field.value" show-password-on="mousedown" placeholder="Email On Blur" />
              <template #footer>{{ errorMessage }} </template>
            </n-card>
          </Field>
          <n-button attr-type="submit">Submit</n-button>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import { getRandomUserData } from '@/api/sample.js';
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';
export default {
  name: 'VeeValidate',
  components: {
    Field,
    Form,
  },
  data() {
    return {
      userDataList: [],
    };
  },
  created() {
    this.schema = yup.object({
      Email: yup.string().required('Required').email('Email invalid').test('checkEmailExist', 'Exist', this.isAvaibledEmail),
      EmailOnBlur: yup.string().required('Required').email('Email invalid'),
      Password: yup.string().required().min(6).max(15),
      PasswordConfirm: yup
        .string()
        .required()
        .oneOf([yup.ref('Password')], 'Passwords do not match'),
    });
    this.formValues = {
      Email: 'mmx362003@gamil.com',
      Password: '123233a',
      PasswordConfirm: '123233a',
    };
    /*this.formValues = {
      Email: '',
      Password: '',
      PasswordConfirm: '',
    };*/
  },
  methods: {
    async isAvaibledEmail(email) {
      console.log('Aysnc Email');
      let userData;
      getRandomUserData(3).then((data) => {
        const userDataList = data.data.results;
        userData = userDataList.filter((user) => {
          return email.includes('example.com');
        });
        if (userData.length > 0) {
          console.log(false);
          return false;
        }
        return true;
      });
    },
    onSubmit(values) {
      //alert(values);
      alert(JSON.stringify(values, null, 2));
    },
  },
};
</script>
