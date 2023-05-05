<template>
  <div class="surface-card grid formgrid p-fluid border-round shadow-2 p-4">
    <slot name="content">
      <div class="col-12 field mb-4">
        <label for="cc" class="text-900 font-medium mb-3 block"
          >Card Number</label
        >
        <InputText
          class="p-inputmask p-inputtext p-component"
          placeholder="9999-9999-9999-9999"
          style="margin-right: 0.5em"
        />
      </div>
      <div class="col-12 lg:col-6 field mb-4">
        <label for="exp" class="text-900 font-medium mb-3 block"
          >Expiry Date</label
        >
        <InputText
          class="p-inputmask p-inputtext p-component"
          placeholder="99/99"
          style="margin-right: 0.5em"
        />
      </div>
      <div class="col-12 lg:col-6 field mb-4">
        <label for="cvc" class="text-900 font-medium mb-3 block">CVC</label>
        <InputText
          class="p-inputmask p-inputtext p-component"
          placeholder="999"
          style="margin-right: 0.5em"
        />
      </div>
      <div class="col-12 field mb-0">
        <label for="holderName" class="text-900 font-medium mb-3"
          >Cardholder Name</label
        >
        <InputText
          id="holderName"
          type="text"
          class="p-inputtext w-full mb-3"
        />
      </div>
    </slot>
  </div>
</template>
