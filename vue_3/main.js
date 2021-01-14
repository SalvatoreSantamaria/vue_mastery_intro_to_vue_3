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
      inventory: 9, 
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 1, color: 'green' },
        { id: 2, color: 'blue'  }
      ],
      sizes: ['Small', "Medium", "Large"]
    }
  }
})