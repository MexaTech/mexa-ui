<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
      <div class="col-12 md:col-6 flex align-items-center">
        <div>
          <slot name="header">
            <div class="text-blue-600 text-xl mb-3">ALL-IN-ONE</div>
            <div class="text-900 text-4xl font-bold mb-6">
              Mobile Experience
            </div>
          </slot>
          <div class="grid">
            <slot name="content">
              <div class="col-12 md:col-6">
                <div class="text-900 font-medium mb-2">Fully Managed</div>
                <div class="text-700 mb-3 line-height-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </div>
              </div>
              <div class="col-12 md:col-6">
                <div class="text-900 font-medium mb-2">Fully Secure</div>
                <div class="text-700 mb-3 line-height-3">
                  Eu turpis egestas pretium aenean pharetra.
                </div>
              </div>
              <div class="col-12 md:col-6">
                <div class="text-900 font-medium mb-2">
                  Unlimited &amp; Free
                </div>
                <div class="text-700 mb-3 line-height-3">
                  Tortor dignissim convallis aenean et tortor at risus viverra.
                </div>
              </div>
              <div class="col-12 md:col-6">
                <div class="text-900 font-medium mb-2">Daily Spending</div>
                <div class="text-700 mb-3 line-height-3">
                  Risus nec feugiat in fermentum posuere urna nec.
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
      <div class="col-12 md:col-6">
        <slot name="image">
          <img
            src="https://blocks.primevue.org/images/blocks/feature/feature-1.png"
            alt="Image"
            class="w-full"
          />
        </slot>
      </div>
    </div>
  </div>
</template>
