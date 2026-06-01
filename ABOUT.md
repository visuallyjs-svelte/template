### Summary
This is a template project demonstrating a basic implementation of VisuallyJS in Svelte, featuring a draggable palette and a main canvas.

### Components Used
- `SurfaceProvider`: Context provider.
- `PaletteComponent`: A component that enables dragging elements from a DOM list onto the canvas.
- `SurfaceComponent`: The core canvas component.
- `ControlsComponent`: Basic UI controls for the canvas.
- `MiniviewComponent`: A thumbnail overview.

### Component Options
#### `PaletteComponent`
- `className`: CSS class for the palette container.
- `selector`: A CSS selector identifying the draggable elements (e.g., `[data-vjs-type]`).

#### `SurfaceComponent`
- `renderOptions`: Configuration for rendering nodes and edges.
- `viewOptions`: Configuration for the view state.
- `modelOptions`: Configuration for the data model.
- `url`: Path to the initial data.
- `className`: CSS class for the canvas container.

### Stylesheet Requirement
Make sure to include `visuallyjs.css`.

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
```
