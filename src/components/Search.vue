<template>
  <div class="container is-fluid">
    <div class="columns">
      <div class="field has-addons column is-offset-4">
        <div class="control">
          <input v-bind:class="{ input: true, 'is-danger': inputError}"  type="text" v-model="searchTerm" placeholder="Find a repository">
        </div>
        <div class="control">
          <a class="button is-info" v-on:click="searchRepo">
            Search
          </a>
        </div>
      </div>
    </div>
    <div class="columns">
      <table class="table column is-offset-3 full-width">
        <thead>
          <tr>
            <th>Repo link</th>
            <th> Number of Stars</th>
            <th> Number of forks</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(repo, index) in repositories" v-bind:key="index">
            <td>
              <a :href="repo.link"> {{repo.full_name}}</a>
            </td>
            <td>
              {{repo.forks_count}}
            </td>
            <td>
              {{repo.stars}}
            </td>
            <td>
              <a class="button"> Import </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>  
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      searchTerm: '',
      inputError: false,
      repositories: []
    }
  },
  methods: {
    searchRepo: function () {
      var vm = this
      if (this.searchTerm.length === 0) {
        this.inputError = true
      } else {
        axios.get('http://localhost:3000/search?q=' + vm.searchTerm)
          .then(response => {
            vm.repositories = response.data.repos            
            console.log(response.data.repos)
          })
      }
    }
  }

}
</script>

<style>
</style>
