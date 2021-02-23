app.component('plant-profile', {
  props: {
    plants: Array,
    plantIndex: Number 
  },
  template: 
  /*html*/
  `
  <div class="pic-container">
    <img :src="imageLink" class="profile-pic">
    <h3>{{plantName}}</h3>
  </div>
  `,
  computed: {
    imageLink() {
      // assume this is being called from index.html
      return "../assets/" + this.plants[this.plantIndex].name + ".jpg"
    },
    plantName(){
      return this.plants[this.plantIndex].name
    }
  }
})