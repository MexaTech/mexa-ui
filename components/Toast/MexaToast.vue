<template>
  <div>
    <Toast />
    <Button label="Success" class="p-button-success" @click="showSuccess" />
  </div>
</template>
<script setup>
import { useToast } from "primevue/usetoast";
// const toast = useToast;
const showSuccess = () => {
  // toast.add({
  //   severity: "success",
  //   summary: "Success Message",
  //   detail: "Message Content",
  //   life: 3000,
  // });
  console.log("showSuccess...");
};
</script>
