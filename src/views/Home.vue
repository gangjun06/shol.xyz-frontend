<template>
  <header class="bg-gray-800 text-white">
    <div class="pt-16 text-lg">
      쓸데없이 긴 URL 대신 짧은 URL 을 사용하세요!
    </div>
    <div class="flex justify-center pt-4">
      <input
        class="appearance-none block w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="긴 URL을 넣어주세요"
        v-model="longurl"
      />
      <button
        class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="getShort"
      >
        만들기
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    longurl: '',
    shorturl: ''
  }),
  methods: {
    getShort() {}
  }
}
</script>

<style>
header {
  height: 40vh;
}
</style>
