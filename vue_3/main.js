//create vue app

//pass in options object to createApp
const app = Vue.createApp({
  // data: function() //replaced with ES6 Shorthand
  data() {
    return { 
      cart: 0,
      premiumProp: true
    }
  }, 
  methods: {
  }
})