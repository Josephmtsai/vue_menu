<template>
  <section class="sm:bg-surface-light--darken-2 pb-[3rem] sm:py-[3rem]">
    <Form class="w-full sm:min-w-[420px] sm:!max-w-[480px] mx-auto" v-slot="v" ref="myForm" :validation-schema="schema" :initial-values="formValues" @submit="onSubmit">
      <n-card title="Form Info"> {{ v }}} </n-card>
      <Field v-slot="{ field, errorMessage }" :validateOnInput="true" name="UserName" type="text">
        <n-card class="bg-gray-200 border-solid border-2" title="UserName">
          <n-input type="text" v-bind="field" show-password-on="mousedown" placeholder="UserName" />
          <template #footer>{{ errorMessage }} </template>
        </n-card>
      </Field>
      <Field v-slot="{ field, errorMessage }" :validateOnInput="true" name="Password" type="Password">
        <n-card class="bg-gray-200 border-solid border-2" title="Password">
          <n-input type="password" v-bind="field" show-password-on="mousedown" placeholder="Password" />
          <template #footer>{{ errorMessage }} </template>
        </n-card>
      </Field>
      <Field v-slot="{ field, errorMessage }" name="PasswordConfirm" type="Password">
        <n-card class="bg-gray-200 border-solid border-2" title="Password Confirm">
          <n-input type="password" v-bind="field" show-password-on="mousedown" placeholder="Password Confirm" />
          <template #footer>{{ errorMessage }} </template>
        </n-card>
      </Field>
      <Field v-slot="{ field, errorMessage }" :validateOnInput="false" :validateOnModelUpdate="false" :validateOnChange="false" name="Email" type="text">
        <n-card class="bg-gray-200 border-solid border-2" title="Email">
          <n-input type="text" :on-blur="field.onBlur" :value="field.value" :on-update:value="field.onChange" placeholder="Email" />
          <template #footer>{{ errorMessage }} </template>
        </n-card>
      </Field>
      <Field v-slot="{ field, errorMessage }" name="EmailOnBlur" type="text">
        {{ field }}
        <n-card class="bg-gray-200 border-solid border-2" title="EmailOnBlur">
          <template #footer>{{ errorMessage }} </template>
        </n-card>
      </Field>
      <Field v-slot="{ field, errorMessage }" name="AgreeTerms" type="checkbox" :unchecked-value="false" :value="true">
        {{ field }}
        <n-card class="bg-gray-200 border-solid border-2" title="AgreeTerms">
          <n-checkbox v-model:checked="field.checked" :on-update:checked="field.onChange"> Agree Terms.... </n-checkbox>
          <template #footer>{{ errorMessage }} </template>
        </n-card>
      </Field>
      <Field v-slot="{ field, errorMessage }" name="Cities" type="text">
        {{ field }}
        <n-card class="bg-gray-200 border-solid border-2" title="Cities">
          <n-checkbox-group :on-update:value="field.onChange" :value="field.value">
            <n-space item-style="display: flex;">
              <n-checkbox value="Beijing" label="Beijing" />
              <n-checkbox value="Shanghai" label="Shanghai" />
              <n-checkbox value="Guangzhou" label="Guangzhou" />
              <n-checkbox value="Shenzen" label="Shenzhen" />
            </n-space>
          </n-checkbox-group>
          <template #footer>{{ errorMessage }} </template>
        </n-card>
      </Field>
      <n-button attr-type="submit">Submit</n-button>
    </Form>
  </section>
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
      Email: yup.string().required('Required').test('checkEmailExist', 'Not Valid', this.isAvaibledEmail),
      EmailOnBlur: yup.string().required('Required'),
      Password: yup.string().required().min(6).max(15),
      PasswordConfirm: yup
        .string()
        .required()
        .oneOf([yup.ref('Password')], 'Passwords do not match'),
      Cities: yup.array().test('checkArrayRequired', 'Not Valid', this.checkArrayRequired),
      UserName: yup.string().required().min(3),
      AgreeTerms: yup.bool().isTrue(),
    });
    this.formValues = {
      Email: 'mmx362003@gmail.com',
      EmailOnBlur: 'mmx362003confirm@gmail.com',
      Password: '123233a',
      PasswordConfirm: '123233a',
      Cities: [],
      UserName: 'joseph',
      AgreeTerms: true,
    };
    /*this.formValues = {
      Email: '',
      Password: '',
      PasswordConfirm: '',
    };*/
  },
  methods: {
    async isAvaibledEmail(value) {
      let result;
      console.log('Aysnc ' + value);
      await getRandomUserData(3).then((data) => {
        const userDataList = data.data.results;
        const userData = userDataList.filter((user) => {
          return !value.includes('example.com');
        });
        //console.log(userData);
        if (userData.length > 0) {
          result = true;
        } else {
          result = false;
        }
      });
      return result;
    },
    async emailOnBlurCheck(email) {
      console.log('Aysnc EmailOnBlur:' + email);
      let userData;
      await getRandomUserData(3).then((data) => {
        const userDataList = data.data.results;
        userData = userDataList.filter((user) => {
          return email.includes('example.com');
        });
        if (userData.length > 0) {
          this.$refs.myForm.setFieldError('EmailOnBlur', 'not found');
        }
      });
    },
    checkArrayRequired(value) {
      if (value.length == 0) return false;
      return true;
    },
    onSubmit(values) {
      //alert(values);
      alert(JSON.stringify(values, null, 2));
    },
  },
};
</script>
