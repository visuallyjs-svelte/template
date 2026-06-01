<script lang="ts">
    import { type SvelteWrapperProps } from "@visuallyjs/browser-ui-svelte"

    const {
        data, model, vertex
    }:SvelteWrapperProps = $props()

</script>

<div class="vjs-world" data-vjs-target="true">
	{data.label }
</div>
