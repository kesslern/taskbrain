<script lang="ts">
import "tuicss/dist/tuicss.css";
import { onMount } from "svelte";

onMount(async () => {
  if (document !== undefined) {
    await import("tuicss/dist/tuicss.js");
  }
});
</script>
