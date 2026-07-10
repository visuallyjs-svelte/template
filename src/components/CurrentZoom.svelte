<script>
    import {useZoom} from "@visuallyjs/browser-ui-svelte";
    const zoom = useZoom()
</script>
<div>Zoom: {zoom.current.toFixed(2)}</div>
