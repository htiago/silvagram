app.component('plant-profile', {
  props: {
    plants: Array,
    plantIndex: Number 
  },
  template: 
  /*html*/
  `
  <span>{{text}}</span>
  `,
  computed: {
    text() {
      return this.plants[1]
    }
  }
})