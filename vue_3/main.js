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
      inventory: 0, 
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 1, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2, color: 'blue', image: './assets/images/socks_blue.jpg'  }
      ],
      sizes: ['Small', "Medium", "Large"],
      cart: 0
    }
  }, 
  methods: {
    addToCart() {
      this.cart += 1
    }, 
    removeFromCart() {
      this.cart -= 1
    },
    updateImage(variantImage) {
      // set the image to the input mouseover image
      this.image = variantImage 
    }
  }
})