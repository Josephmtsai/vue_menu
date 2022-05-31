<template>
  <div>
    <Field v-slot="{ field, errorMessage }" :validateOnInput="false" :validateOnModelUpdate="false" :validateOnChange="false" name="Email" type="text">
      <n-card class="bg-gray-200 border-solid border-2" title="Email">
        <n-input type="text" :on-blur="field.onBlur" :value="field.value" :on-update:value="field.onChange" placeholder="Email" />
        <template #footer
          ><n-gradient-text gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
            {{ errorMessage }}
          </n-gradient-text>
        </template>
      </n-card>
    </Field>
    <Field v-slot="{ field, errorMessage }" name="EmailOnBlur" type="text">
      {{ field }}
      <n-card class="bg-gray-200 border-solid border-2" title="EmailOnBlur">
        <n-input type="text" v-bind="field" @blur="emailOnBlurCheck(field.value)" :model-value="field.value" show-password-on="mousedown" placeholder="Email On Blur" />
        <template #footer
          ><n-gradient-text gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
            {{ errorMessage }}
          </n-gradient-text>
        </template>
      </n-card>
    </Field>
    <Field v-slot="{ field, errorMessage }" name="AgreeTerms" type="checkbox" :unchecked-value="false" :value="true">
      {{ field }}
      <n-card class="bg-gray-200 border-solid border-2" title="AgreeTerms">
        <n-checkbox v-model:checked="field.checked" :on-update:checked="field.onChange"> Agree Terms.... </n-checkbox>
        <template #footer
          ><n-gradient-text gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
            {{ errorMessage }}
          </n-gradient-text>
        </template>
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
        <template #footer
          ><n-gradient-text gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
            {{ errorMessage }}
          </n-gradient-text>
        </template>
      </n-card>
    </Field>
  </div>
</template>
<script setup>
import { Field } from 'vee-validate';
</script>
