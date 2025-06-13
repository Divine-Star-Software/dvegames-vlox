import { NCS } from "@amodx/ncs";
export const NodeRefernceComponent = NCS.registerComponent({
    type: "node-refernce",
    schema: NCS.schema({
        nodeId: NCS.property(0n),
        nodeIndex: NCS.property(0),
    }),
    data: NCS.data(),
    init(component) {
        const c = component.cloneCursor();
        component.data = {
            get node() {
                return ((c.schema.nodeIndex !== undefined &&
                    c.node.graph.getNode(c.schema.nodeIndex)) ||
                    null);
            },
        };
    },
});
