<template>
  <div>
    <header class="bg-gray-800 text-white">
      <div class="pt-16 text-xl">
        Easy to use with short URL
      </div>
      <div class="flex justify-center pt-8">
        <input
          class="appearance-none block w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Input longurl"
          v-model="longurl"
        />
        <button
          class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="getShort"
        >
          Shorten
        </button>
      </div>
      <div class="mt-2 text-sm">
        By clicking SHORTTEN, you are agreeing to Privacy Policy
      </div>
      <div class="flex justify-center">
        <div
          v-if="shorturl"
          class="mt-8 w-64 rounded border-solid border-2 border-white flex justify-between flex-row px-4 py-2"
        >
          <a :href="shorturl" class="hover:text-gray-400">{{ shorturl }}</a>
          <button
            class="hover:text-gray-400 cursor-pointer"
            v-clipboard:copy="shorturl"
          >
            copy
          </button>
        </div>
      </div>
    </header>
    <section class="pt-8 h-64">
      <div class="text-2xl">Are you a developer?</div>
      <div>You can use shol.xyz api for free!</div>
      <div class="flex justify-center mt-4">
        <a
          href="/docs"
          class="w-32 block rounded border-solid border-2 border-gray-800 px-4 py-2"
          >Read Docs</a
        >
      </div>
    </section>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'Home',
  data: () => ({
    longurl: '',
    shorturl: ''
  }),
  methods: {
    getShort() {
      const trimurl = this.longurl.trim()
      if (trimurl === '') {
        this.$Msg.error('Plase input the url')
        return
      } else if (!trimurl.includes('.') || trimurl.length < 4) {
        this.$Msg.error('URL is wrong')
        return
      }
      Axios.post(`https://shol.xyz/?url=${trimurl}`)
        .then(result => {
          if (result.status !== 200) {
            this.$Msg.error('Error while generating url')
            return
          }
          this.shorturl = 'https://shol.xyz/' + result.data.short
          this.$Msg.success('Successfully generated url')
        })
        .catch(e => {
          this.$Msg.error('Server connetion faild')
        })
    }
  }
}
</script>

<style>
header {
  height: 40vh;
}
</style>
