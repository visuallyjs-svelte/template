<script lang="ts">
    import { type SvelteWrapperProps } from "@visuallyjs/browser-ui-svelte"

    const {
        data, model, vertex
    }:SvelteWrapperProps = $props()

</script>

<div class="vjs-hello">
	{data.label}
	<div data-vjs-source="true" class="vjs-hello-connect" title="Drag edge to a World node"></div>
</div>
