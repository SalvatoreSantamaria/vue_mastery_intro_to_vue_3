//create vue app

//pass in options object to createApp
const app = Vue.createApp({
  // data: function() //replaced with ES6 Shorthand
  data() {
    return { 
      product: "Socks",
      description: "Cotton, size large.",
      image: './assets/images/socks_green.jpg',
      someUrl: 'www.google.com',
      onSale: true,
      inventory: 9
    }
  }
})