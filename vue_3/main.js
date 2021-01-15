//create vue app

//pass in options object to createApp
const app = Vue.createApp({
  // data: function() //replaced with ES6 Shorthand
  data() {
    return { 
      brand: "Vue",
      product: "Socks",
      description: "Cotton, size large.",
      // image: './assets/images/socks_green.jpg',
      selectedVariant: 0,
      someUrl: 'www.google.com',
      onSale: true,
      inventory: 0, 
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 1, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0  }
      ],
      sizes: ['Small', "Medium", "Large"],
      cart: 0,
      onSale: true
    }
  }, 
  methods: {
    addToCart() {
      this.cart += 1
    }, 
    removeFromCart() {
      this.cart -= 1
    },
    // updateImage(variantImage) {
    //   // set the image to the input mouseover image
    //   this.image = variantImage 
    // }
    updateVariant(index) {
      // set the image to the input mouseover image
      this.selectedVariant = index
      console.log(index)
    }
  },
  computed: {
    title() {
      //computed properties
      return this.brand + ' ' + this.product
    }, 
    image() {
      // targeting either variant[0].image or variant[1].image
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    onSaleMessage() {
      if (this.onSale) {
        return(this.brand + ' ' + this.product + ' ' + 'is on sale')
      }
    }
  }
})