<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="grid grid-nogutter -mt-3 -ml-3 -mr-3">
      <div class="col-12 lg:col-6 p-3">
        <EcommerceCategoryPreview />
      </div>
      <div class="col-12 lg:col-6">
        <div class="grid grid-nogutter lg:flex-column">
          <div class="col-12 p-3">
            <EcommerceCategoryPreview
              image="https://blocks.primevue.org/images/blocks/ecommerce/categorypreview/category-preview-1-10.png"
            />
          </div>
          <div class="col-12 p-3">
            <EcommerceCategoryPreview
              title="Category Title 2"
              image="https://blocks.primevue.org/images/blocks/ecommerce/categorypreview/category-preview-1-11.png"
            >
              <template #content> Vitae purus faucibus ornare </template>
              <template #link>
                <a
                  tabindex="0"
                  class="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150"
                  >Shop Now Link<i
                    class="pi pi-fw pi-arrow-right text-2xl ml-2"
                  ></i
                ></a>
              </template>
            </EcommerceCategoryPreview>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
