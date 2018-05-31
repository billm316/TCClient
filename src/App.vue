<template>
    <div id="app">
        <v-app light>
            <v-navigation-drawer app v-model="drawer">
                <v-list>
                    <v-list-tile @click="home()">
                        <v-list-tile-action>
                            <v-icon>home</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>

            <v-toolbar app>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title >Title</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>apps</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>refresh</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>
            </v-toolbar>

            <v-content>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-content>

            <v-footer app></v-footer>
        </v-app>
    </div>
</template>

<script>

export default {
    name: 'App',
    data: () => ({
        drawer: null
    }),
    components: {
    },
    methods: { 
        home: function() {
            this.$router.push({path: '/'});
            this.drawer = !this.drawer
        }
    }
}
</script>

<style>
  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
  }
</style>
