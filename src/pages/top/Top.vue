<template>
  <div>
    <h1>Top Page</h1>
    <pre v-if="films">{{ films }}</pre>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'p-top',
  data () {
    return {
      ghibliService: null,
    };
  },
  computed: {
    ...mapState({
      films: ({ films }) => films.films,
    })
  },
  methods: {
    ...mapActions({
      fetchFilms: 'films/fetchFilm',
    })
  },
  created() {
    this.fetchFilms();
  }
}
</script>
