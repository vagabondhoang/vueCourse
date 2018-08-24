<template>
  <div class="thread">
    <div>
      <p>
        <router-link :to="{name: 'PageThreadShow', params: {id: thread['.key']}}">{{thread.title}}</router-link>
      </p>
      <p class="text-faded text-xsmall">
        By <a href="#">{{user.name}}</a>, <AppDate :timestamp="thread.publishedAt"/>.
      </p>
    </div>
     <div class="activity">
      <p class="replies-count">
        {{repliesCount}} replies
      </p>
    </div>
  </div>
</template>
<script>
import sourceData from '@/data'
import AppDate from './AppDate'

export default {
  components: {
    AppDate
  },
  props: {
    thread: {
      type: Object,
      required: true
    }
  },

  computed: {
    repliesCount () {
      return Object.keys(this.thread.posts).length - 1
    },
    user () {
      return sourceData.users[this.thread.userId]
    }
  }
}
</script>

