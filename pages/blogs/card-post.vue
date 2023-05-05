<template>
  <div class="surface-card shadow-2 p-3 border-round">
    <BlogsCardPosts :tags="tags" />
  </div>
  <div class="surface-card shadow-2 p-3 border-round" style="margin-top: 20px">
    <BlogsCardPosts :tags="tags">
      <template #image>
        <img
          src="https://blocks.primevue.org/images/blocks/blog/blog-1.jpg"
          alt="Image"
          class="w-full"
        />
      </template>
      <template #avatar>
        <img
          src="https://blocks.primevue.org/images/blocks/avatars/circle/avatar-f-1.png"
          class="mr-3 flex-shrink-0"
          width="28"
          height="28"
        />
      </template>
      <template #autor> Ana Warren </template>
      <template #date>Dec 16</template>
      <template #title>Python Hacks</template>
      <template #content>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab iure
        facilis distinctio quidem magni nesciunt quaerat sunt dolorum delectus
        debitis non unde a voluptate nemo ipsam, dicta iste laboriosam
        voluptatum.
      </template>
      <template #time> 25 min read </template>
    </BlogsCardPosts>
  </div>
</template>
<script setup>
const tags = ref(["Poles", "Nature", "Animal"]);
</script>
