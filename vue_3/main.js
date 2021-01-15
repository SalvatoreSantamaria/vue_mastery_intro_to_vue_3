//create vue app

//pass in options object to createApp
const app = Vue.createApp({
  // data: function() //replaced with ES6 Shorthand
  data() {
    return { 
      cart: [],
      premiumProp: true
    }
  }, 
  methods: {
    // Communicating Events 3
    updateCart(id) {
      this.cart.push(id)
    },
    removeFromCart(id) {
      const index = this.cart.indexOf(id)
      if (index > -1) {
          this.cart.splice(index, 1)
      }
    }
  }
})