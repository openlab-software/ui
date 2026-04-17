<script setup lang="ts">
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
} from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <VuePreviewProvider>
    <Dialog v-model="open">
      <DialogTrigger as-child>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" @click="open = false">Cancel</Button>
          <Button @click="open = false">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </VuePreviewProvider>
</template>
