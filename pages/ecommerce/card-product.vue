<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
      <div class="col-12 md:col-6 lg:col-3">
        <EcommerceCardProduct price="$ 150.00" />
      </div>
      <div class="col-12 md:col-6 lg:col-3">
        <EcommerceCardProduct
          offer="-25%"
          :stars="4"
          reviews="8 reviews"
          old_price="$ 400.00"
          price="$ 250.00"
        />
      </div>
      <div class="col-12 md:col-6 lg:col-3">
        <EcommerceCardProduct price="$ 100.00">
          <template #image>
            <img
              src="https://blocks.primevue.org/images/blocks/ecommerce/productlist/product-list-5-4.png"
              class="w-full"
            />
          </template>
        </EcommerceCardProduct>
      </div>
      <div class="col-12 md:col-6 lg:col-3">
        <EcommerceCardProduct :stars="1" price="$ 50.00">
          <template #title> Product Example </template>
        </EcommerceCardProduct>
      </div>
    </div>
  </div>
</template>
