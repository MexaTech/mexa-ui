<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="grid -mr-3 -ml-3">
      <div class="col-12 lg:col-8 p-4">
        <div
          class="surface-card grid formgrid p-fluid border-round shadow-2 p-4"
        >
          <div
            class="col-12 mb-4 flex flex-column lg:flex-row align-items-center justify-content-between"
          >
            <slot name="header">
              <div class="text-900 font-medium text-xl">
                Contact Information
              </div>
              <div class="mt-3 lg:mt-0">
                <span class="text-600 mr-2">Already have an account?</span>
                <a
                  tabindex="0"
                  class="cursor-pointer text-900 hover:text-primary transition-duration-150"
                >
                  Login
                </a>
              </div>
            </slot>
          </div>
          <slot name="contact_information">
            <div class="col-12 field">
              <label for="email" class="text-900 font-medium mb-3">
                Email
              </label>
              <InputText id="email" placeholder="" />
            </div>

            <div class="flex align-items-center">
              <Checkbox v-model="checked" :binary="true" />
              <label id="checkbox-1" class="text-900 ml-2">
                Email me with news and offers
              </label>
            </div>
          </slot>

          <div
            class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3"
            role="separator"
            aria-orientation="horizontal"
          ></div>
          <slot name="shipping">
            <div class="col-12 mt-4 lg:mt-0 mb-4">
              <div class="text-900 font-medium text-xl">Shipping</div>
            </div>
            <div class="col-12 field mb-4">
              <label for="country" class="text-900 font-medium mb-3">
                Country
              </label>
              <InputText id="country" placeholder="" />
            </div>
            <div class="col-12 lg:col-6 field mb-4">
              <label for="name" class="text-900 font-medium mb-3"> Name </label>
              <InputText id="name" placeholder="" />
            </div>
            <div class="col-12 lg:col-6 field mb-4">
              <label for="last_name" class="text-900 font-medium mb-3">
                Last name
              </label>
              <InputText id="last_name" placeholder="" />
            </div>
            <div class="col-12 field mb-4">
              <label for="address" class="text-900 font-medium mb-3">
                Apartment, Suite, etc.
              </label>
              <InputText id="address" placeholder="" />
            </div>
            <div class="col-12 lg:col-6 field mb-4">
              <label for="cp" class="text-900 font-medium mb-3">
                Postal Code
              </label>
              <InputText id="cp" placeholder="" />
            </div>
            <div class="col-12 lg:col-6 field mb-4">
              <label for="city" class="text-900 font-medium mb-3"> City </label>
              <InputText id="city" placeholder="" />
            </div>
            <div class="col-12 field mb-4">
              <label for="phone" class="text-900 font-medium mb-3">
                Phone
              </label>
              <InputText id="phone" placeholder="" />
            </div>
          </slot>
          <div
            class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3"
            role="separator"
            aria-orientation="horizontal"
          ></div>
          <slot name="shipping_method">
            <div class="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2">
              Shipping Method
            </div>
            <div class="col-12 flex flex-column lg:flex-row field">
              <EcommerceCardSelector title="UPS" subtitle="Delivery: Next Week">
                <template #content>
                  <label for="ups" class="text-primary mr-2 font-medium"
                    >$9.00</label
                  >
                  <RadioButton
                    v-model="radio"
                    inputId="ups"
                    name="ups"
                    value="ups"
                  />
                </template>
              </EcommerceCardSelector>
              <EcommerceCardSelector
                title="FedEx"
                subtitle="Delivery: Next Week"
              >
                <template #content>
                  <label for="fedex" class="text-primary mr-2 font-medium"
                    >$9.00</label
                  >
                  <RadioButton
                    v-model="radio"
                    inputId="fedex"
                    name="fedex"
                    value="fedex"
                  />
                </template>
              </EcommerceCardSelector>
            </div>
          </slot>

          <div
            class="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3"
            role="separator"
            aria-orientation="horizontal"
          ></div>
          <slot name="payment_method">
            <div class="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2">
              Payment
            </div>
            <div class="col-12 mb-4">
              <EcommerceCardSelector title="Paypal" subtitle="paypal.com">
                <template #content>
                  <RadioButton
                    v-model="payment_method"
                    inputId="paypal"
                    name="paypal"
                    value="paypal"
                  />
                </template>
              </EcommerceCardSelector>
              <EcommerceCardSelector title="Credit Card" subtitle="Credit Card">
                <template #content>
                  <RadioButton
                    v-model="payment_method"
                    inputId="credit"
                    name="credit"
                    value="credit"
                  />
                </template>
              </EcommerceCardSelector>
              <EcommerceCardSelector title="Bank" subtitle="Bank">
                <template #content>
                  <RadioButton
                    v-model="payment_method"
                    inputId="bank"
                    name="bank"
                    value="bank"
                  />
                </template>
              </EcommerceCardSelector>
            </div>
          </slot>

          <slot name="payment">
            <EcommerceFormCardPayment />
          </slot>
        </div>
      </div>
      <div class="col-12 lg:col-4 p-4">
        <div class="surface-card border-round shadow-2 p-5">
          <div
            class="flex justify-content-between align-items-center border-bottom-1 pb-3 surface-border"
          >
            <slot name="header_shopping_list">
              <span class="text-900 font-medium text-lg lg:text-xl">
                <i class="pi pi-shopping-cart text-xl mr-2"></i>
                Your Order (1)
              </span>
              <a
                tabindex="0"
                class="text-600 font-medium cursor-pointer hover:text-primary"
              >
                Edit Cart
              </a>
            </slot>
          </div>
          <slot name="list">
            <EcommerceShoppingCart />
          </slot>

          <div class="py-2 mt-3 border-bottom-1 surface-border">
            <slot name="order">
              <div class="text-900 font-medium mb-2">Save Your Account</div>
              <div class="text-600 text-sm line-height-3 mb-2">
                Create an exclusive account for easy shopping and experience for
                your upcoming visits.
              </div>
              <div
                class="p-password p-component p-inputwrapper p-input-icon-right w-full mb-2"
              >
                <input
                  class="p-inputtext p-component p-password-input w-full"
                  type="password"
                  aria-controls="pv_id_1_panel"
                  aria-expanded="false"
                  aria-haspopup="true"
                />
                <i class="pi pi-eye"></i>
                <span class="p-hidden-accessible" aria-live="polite">
                  Enter a password
                </span>
              </div>
              <button
                class="p-button p-component p-button-primary w-full mt-3"
                type="button"
                aria-label="Place Order"
              >
                <span class="p-button-label"> Place Order </span>
                <span
                  class="p-ink"
                  role="presentation"
                  aria-hidden="true"
                ></span>
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const checked = ref("");
const radio = ref("");
const payment_method = ref("");
</script>
