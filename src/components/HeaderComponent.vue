<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="https://flowbite.com" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> Docs </a>
        <a href="https://flowbite.com" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> Examples </a>
        <a href="https://flowbite.com" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"> Blog </a>
      </div>
      <div>
        {{ url }}
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  created() {
    this.url = location.href;
  },
  data() {
    return {
      url: '',
    };
  },
  name: 'HeaderComponent',
};
</script>
