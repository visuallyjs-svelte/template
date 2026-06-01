import {ArrowOverlay,
    type BrowserElement,
    type EdgeEventCallbackPayload,
    EVENT_TAP,
    type NodeEventCallbackPayload} from "@visuallyjs/browser-ui";
import HelloComponent from './components/HelloNode.svelte';
import WorldComponent from './components/WorldNode.svelte';

/**
 * View options map node/group types to the JSX used to render them and to various aspects of the given vertex type's
 * behaviour. They also allow you to map edge types to edge appearance and behaviour, although for simple config
 * you can use the `edges` render option in place of an edge mapping a view (see code above).
 */
const viewOptions = {
    // These are mappings for node type. They are in fact optional; if you don't provide them, VisuallyJs will
    // use a default JSX. But in most apps you're probably going to want to provide JSX for your nodes.
    nodes:{
        // Node mapping for type `hello`
        hello:{
            // This is the component used to render a node of type `hello`
          component:HelloComponent,
            // event mappings for nodes of type `hello`
            events: {
              [EVENT_TAP]: (p:NodeEventCallbackPayload<BrowserElement>) => {
                alert(`You tapped on a hello node with id ${p.obj.id}`)
              }
            }
        },
        // Node mapping for type `world`
        world:{
            // This is the component used to render a node of type `world`
            component:WorldComponent,
            // event mappings for nodes of type `world`
            events: {
              [EVENT_TAP]:(p:NodeEventCallbackPayload<BrowserElement>) => {
                alert(`You tapped on a world node with id ${p.obj.id}`)
              }
            }
        }
    },
    // These are edge mappings. In this app we have one, which applies to all edges because its type is `default`.
    // Note that for many use cases you can setup edge appearance/behaviour in the `edges` renderOption, for settings
    // that should apply to all edges. But for more advanced use cases you're going to want to provide edge mappings.
    edges:{
        default:{
            // Place an Arrow at the target end of every edge
            targetMarker:ArrowOverlay.type,
            events:{
                // on tap, remove the edge
                [EVENT_TAP]:(p:EdgeEventCallbackPayload) => p.model.removeEdge(p.obj)
            }
        }
    }
}

export default viewOptions
