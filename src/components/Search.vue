<template>
  <div class="container is-fluid">
    <div class="columns">
      <div class="field has-addons column is-offset-4">
        <div class="control">
          <input v-bind:class="{ input: true, 'is-danger': inputError}"  type="text" v-model="searchTerm" placeholder="Find a repository">
        </div>
        <div class="control">
          <a v-bind:class="{ button: true, 'is-info': true, 'is-loading': isLoading }" v-on:click="searchRepo">
            Search
          </a>
        </div>
      </div>
    </div>
    <div class="columns">
      <table class="table column is-offset-3 full-width">
        <thead>
          <tr>
            <th> Repo Name </th>
            <th> Owner </th>
            <th> Number of Stars</th>
            <th> Number of forks</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(repo, index) in repositories" v-bind:key="index"  v-bind:class="{'is-selected': repo.imported}">
            <td>
              <a> {{repo.name}}</a>
            </td>
            <td>
              <a> {{repo.owner}}</a>
            </td>
            <td>
              {{repo.forks_count}}
            </td>
            <td>
              {{repo.stars}}
            </td>
            <td>
              <a class="button" :disabled="repo.imported" :id="'import-' + repo.id "  v-on:click="importRepo($event, repo)"> Import </a>
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
      repositories: [],
      isLoading: false
    }
  },
  methods: {
    searchRepo: function () {
      var vm = this
      vm.isLoading = true
      if (this.searchTerm.length === 0) {
        this.inputError = true
      } else {
        axios.get('http://localhost:3000/search?q=' + vm.searchTerm)
          .then(response => {
            vm.repositories = response.data.repos
            vm.isLoading = false
            console.log(response.data.repos)
          })
      }
    },
    importRepo: function (e, repo) {
      var elem = document.getElementById('import-' + repo.id)
      elem.text = 'Importing....'
      axios.post('http://localhost:3000/import', {repo_name: repo.name, owner: repo.owner})
        .then(response => {
          if (response.data.status === '200') {
            elem.text = 'Imported'
            elem.parentNode.parentNode.className += ' is-selected'
            elem.disabled = true
          } else {
            elem.text = 'Import failed'
            console.log(response.data)
          }
        })
    }
  }

}
</script>

<style>
</style>
