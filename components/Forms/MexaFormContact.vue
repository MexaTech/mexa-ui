<template>
  <div class="grid">
    <div class="col-12 md:col-6">
      <div class="p-fluid pr-0 md:pr-6">
        <slot name="form">
          <div class="field">
            <label for="name" class="font-medium">Name</label
            ><input
              class="p-inputtext p-component py-3 px-2 text-lg"
              id="name"
              type="text"
            />
          </div>
          <div class="field">
            <label for="email" class="font-medium">Email</label
            ><input
              class="p-inputtext p-component py-3 px-2 text-lg"
              id="email"
              type="text"
            />
          </div>
          <div class="field">
            <label for="company" class="font-medium">Company</label
            ><input
              class="p-inputtext p-component py-3 px-2 text-lg"
              id="company"
              type="text"
            />
          </div>
          <div class="field">
            <label for="message" class="font-medium">Message</label
            ><textarea
              class="p-inputtextarea p-inputtext p-component p-inputtextarea-resizable py-3 px-2 text-lg"
              id="message"
              rows="6"
              style="height: calc(177.333px); overflow: hidden"
            ></textarea>
          </div>
          <button
            class="p-button p-component w-auto"
            type="button"
            aria-label="Send Message"
          >
            <span class="pi pi-send p-button-icon p-button-icon-left"></span
            ><span class="p-button-label">Send Message</span
            ><span class="p-ink" role="presentation" aria-hidden="true"></span>
          </button>
        </slot>
      </div>
    </div>
    <div
      class="col-12 md:col-6 bg-no-repeat bg-right-bottom"
      style="
        background-image: url('https://blocks.primevue.org/images/blocks/contact/contact-1.png');
      "
    >
      <div class="text-900 text-2xl font-medium mb-6">
        <slot name="title"> Contact Us </slot>
      </div>
      <div class="text-700 line-height-3 mb-6">
        <slot name="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </slot>
      </div>
      <div class="">
        <slot name="call_to_action">
          <a
            class="inline-flex align-items-center text-blue-600 font-bold no-underline cursor-pointer"
            ><span class="mr-3">View Address on Google Maps</span
            ><i class="pi pi-arrow-right"></i
          ></a>
        </slot>
      </div>
      <ul class="list-none p-0 m-0 mt-6 text-700">
        <slot name="links">
          <li class="flex align-items-center mb-3">
            <i class="pi pi-phone mr-2"></i><span>+123456789</span>
          </li>
          <li class="flex align-items-center mb-3">
            <i class="pi pi-twitter mr-2"></i><span>@prime_ng</span>
          </li>
          <li class="flex align-items-center">
            <i class="pi pi-inbox mr-2"></i><span>contact@primetek.com.tr</span>
          </li>
        </slot>
      </ul>
    </div>
  </div>
</template>
