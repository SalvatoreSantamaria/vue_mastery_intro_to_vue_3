
// Component Name and object to configure component
app.component('product-display', {

  props: {
    premium: {
      type: Boolean, 
      required: true
    }
  },

  template: 
  `
<div class="product-display">
  <div class="product-container">
    <div class="product-image">
      <!-- Attribute Binding -->
      <!-- Use v-bind to bind an attribute to an expression. -->
      <!-- attribute is src and expression is "image". Shorthand v-bind: <img :src="image">  -->
      <img v-bind:src="image" :class="{ 'out-of-stock-img': !inStock } "> 
      <a :href="someUrl">www.test.com</a>
    </div>
    <div class="product-info">
      <!-- Computed Properties -->
      <h1>{{ title }}</h1>

      <h1>{{ product }}</h1>
      <p> {{ description }}</p>

      <!-- Conditional Rendering. Can also use v-show -->
      <p v-if="onSale">{{ onSaleMessage }}</p>
      <!-- <p v-else>Not on sale</p> -->

      <p v-if="inventory > 10">In Stock</p>
      <p v-else-if="inventory <= 10 && inventory > 0">Stock running low</p>
      <p v-else>Out of Stock</p>
      <p>Shipping: {{ shipping }}</p>
      <product-details :details="details"></product-details>

      <p>Variants</p>
      <!-- <ul>
         need to give each item a unique key 
        <li v-for="variant in variants" :key="variant.id" @mouseover="updateImage(variant.image)" class="color-circle" :style=" {backgroundColor: variant.color }">ID: {{ variant.id }} Color: {{ variant.color }}</li>
      </ul> -->

      <!-- Class and style binding. use camelCase or kebab in quotes: {backgroundColor: variant.color }  or {'background-color': variant.color } -->
      <!-- <div
      v-for="variant in variants" :key="variant.id" @mouseover="updateImage(variant.image)" class="color-circle" :style=" {backgroundColor: variant.color }">
    </div> -->
      
      <!-- Computed Properties -->
      <div
      v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style=" {backgroundColor: variant.color }">
    </div>
      <p>Sizes</p>
      <ul>
        <li v-for="size of sizes" :key="size">{{ size }}</li>
      </ul>
      <!-- Click is the event we are listening for, "cart += 1" is the targeted expression  -->
      <!-- <button class="button" v-on:click="cart += 1">Add to cart</button> -->
      <!-- using method for target expression . shorthard for v-on:click is @click -->
      <!-- Class binding, adds the class disableButton when !inStock . could also use ternary "[!inStock ? disabledButton : '']"-->
       <button class="button" :disabled="!inStock" :class="{ disabledButton: !inStock }" v-on:click="addToCart">Add to cart</button> 
       <button class="button" v-on:click="removeFromCart">Remove from cart</button> 
  </div>
</div>
  `
  ,
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
        onSale: true
      }
    }, 
    methods: {
      // Communicating Events 1
      addToCart() {
        // this.cart += 1 // this.cart is no longer in the productDisplay file, it's now in main.js

        // Emit an event called add to cart. Add a listener in the index.html called @add-to-cart, then it calls updateCart from main.js.
        // example: @add-to-cart="updateCart"
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)  
      }, 
      removeFromCart() {
        //this.cart -= 1
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
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
      },
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 2.99
      }
    }
})