const app = Vue.createApp({
  data() {
    return {
      plants: [
        {id: 0, name: "Alocasia", description: ""},
        {id: 1, name: "Boston-Fern", description: ""},
        {id: 2, name: "Monstera-Deliciosa", description: ""}
      ],
      plantIndex: 1
    }
  }
})

