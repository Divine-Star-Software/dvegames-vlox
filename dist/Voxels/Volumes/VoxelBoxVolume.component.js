import { NCS } from "@amodx/ncs/";
import { TransformComponent } from "../../Transform.component";
class Data {
    component;
    constructor(component) {
        this.component = component;
    }
    getPoints() {
        const { position, scale } = TransformComponent.getRequired(this.component.node).schema;
        return [
            [position.x, position.y, position.z],
            [position.x + scale.x, position.y + scale.y, position.z + scale.z],
        ];
    }
    setPoints([start, end]) {
        const transform = TransformComponent.getRequired(this.component.node).schema;
        transform.position.x = start[0];
        transform.position.y = start[1];
        transform.position.z = start[2];
        transform.scale.x = Math.abs(end[0] - start[0]);
        transform.scale.y = Math.abs(end[1] - start[1]);
        transform.scale.z = Math.abs(end[2] - start[2]);
    }
    inBounds(x, y, z) {
        const schema = TransformComponent.getRequired(this.component.node).schema;
        const position = schema.position;
        const scale = schema.scale;
        if (x < position.x)
            return false;
        if (y < position.y)
            return false;
        if (z < position.z)
            return false;
        if (x > position.x + scale.x)
            return false;
        if (y > position.y + scale.y)
            return false;
        if (z > position.z + scale.z)
            return false;
        return true;
    }
}
export const VoxelBoxVolumeComponent = NCS.registerComponent({
    type: "voxel-box-volume",
    init: (component) => (component.data = new Data(component.cloneCursor())),
    dispose: (component) => component.data.component.returnCursor(),
});
