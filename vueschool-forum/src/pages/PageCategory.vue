<template>
  <div v-if="asyncDataStatus_ready" class="col-full">
    <h1>{{ category.name }}</h1>
    <CategoryListItem :category="category"/>
  </div>
</template>
 <script>
    import {mapActions} from 'vuex'
    import CategoryListItem from '@/components/CategoryListItem'
    import asyncDataStatus from '@/mixins/asyncDataStatus'

    export default {
      components: {
        CategoryListItem
      },

      mixins: [asyncDataStatus],

      props: {
        id: {
          required: true,
          type: String
        }
      },

      methods: {
        ...mapActions(['fetchCategory', 'fetchForums'])
      },

      computed: {
        category () {
          return this.$store.state.categories[this.id]
        }
      },
    
      created () {
        this.fetchCategory({id: this.id})
          .then(category => this.fetchForums({ids: category.forums}))
          .then(() => { this.asyncDataStatus_fetched() })
      }
    }
</script>
 <style scoped>
 </style>