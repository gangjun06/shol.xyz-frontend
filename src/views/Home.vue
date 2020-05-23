<template>
  <div id="bg" :style="bgLink">
    <div class="position text-white">
      <div class="text-5xl font-bold">shol.xyz</div>
      <div class="text-2xl mb-2">Create short domains easily!</div>
      <div class="flex mb-8">
        <a href="" class="mr-4">API Docs</a>
        <a href="https://github.com/gangjun06/shol.xyz-backend">Github</a>
      </div>
      <div class="flex justify-between">
        <input
          class="w-full bg-opacity-0 bg-white placeholder-white appearance-none block w-1/3 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
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

      <div class="mt-32">
        <a href="https://gangjun.dev"
          >&copy;{{ new Date().getFullYear() }}. Gangjun</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'Home',
  data: () => ({
    longurl: ''
  }),
  computed: {
    bgLink() {
      const imglist = [
        '305',
        '319',
        '613',
        '566',
        '96',
        '282',
        '279',
        '1064',
        '60',
        '239',
        '170',
        '112',
        '387',
        '715',
        '187',
        '879',
        '982'
      ]
      const randomURL = imglist[Math.floor(Math.random() * imglist.length)]
      return {
        backgroundImage: `url('https://i.picsum.photos/id/${randomURL}/${window.innerWidth}/${window.innerHeight}.jpg')`
      }
    }
  },
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
          const shorturl = 'https://shol.xyz/' + result.data.short
          this.$Msg.success(
            'Successfully generated url.\nUrl has been saved to the clipboard'
          )
          this.$copyText(shorturl)
        })
        .catch(e => {
          this.$Msg.error('Server connetion faild')
        })
    }
  }
}
</script>

<style>
#bg {
  height: 100vh;
  width: 100vw;
  background-size: cover;
}
.position {
  position: absolute;
  bottom: 10%;
  left: 6%;
}
</style>
