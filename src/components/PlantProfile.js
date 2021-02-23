app.component('plant-profile', {
  props: {
    plant: Object
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
      return "../assets/" + this.plant.name + ".jpg"
    },
    plantName(){
      return this.plant.name
    }
  }
})