<template>
  <div class="container is-fluid">
    <div class="columns">
      <table class="table column is-offset-5 full-width">
        <thead>
          <tr>
            <th>
              Package
            </th>
            <th>
              Count
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pkg, index) in packages" v-bind:key="index">
            <td>{{pkg.name}}</td>
            <td>{{pkg.count}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'TopPackages',
  data () {
    return {
      packages: []
    }
  },
  created: function () {
    var vm = this
    axios.get('http://localhost:3000/packages')
      .then(response => {
        vm.packages = response.data.packages
      })
  }

}
</script>

<style>
</style>
