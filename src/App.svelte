<script>

	import { SurfaceProvider, PaletteComponent, SurfaceComponent, ControlsComponent, MiniviewComponent, useZoom} from "@visuallyjs/browser-ui-svelte"

	import CurrentZoom from "./components/CurrentZoom.svelte"
    import renderOptions from "./render-options"
    import viewOptions from "./view-options"
    import modelOptions from "./model-options"

    import greetings from "./greetings"

</script>

<SurfaceProvider>
	<PaletteComponent className="vjs-demo-palette" selector="[data-vjs-type]">
		<CurrentZoom/>
		{#each greetings as g}
			<div data-vjs-type="hello" data-vjs-label={g.h} class="vjs-hello" data-vjs-lang={g.lang}>{g.h}</div>
		{/each}
		{#each greetings as g}
			<div data-vjs-type="world" data-vjs-label={g.w} class="vjs-world" data-vjs-lang={g.lang}>{g.w}</div>
		{/each}
	</PaletteComponent>
	<SurfaceComponent className="vjs-canvas" renderOptions={renderOptions} viewOptions={viewOptions} modelOptions={modelOptions} url="/dataset.json">
		<ControlsComponent/>
		<MiniviewComponent/>
	</SurfaceComponent>
</SurfaceProvider>
