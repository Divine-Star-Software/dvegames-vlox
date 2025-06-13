import { WorldCursor } from "@divinevoxel/vlox/World/Cursor/WorldCursor";
import { NCS } from "@amodx/ncs/";
import { DimensionProviderComponent } from "../Providers/DimensionProvider.component";
import PickVoxel from "@divinevoxel/vlox/Voxels/Interaction/Functions/PickVoxel";
class Data {
    component;
    origin;
    originDirection;
    pickedPosition;
    pickedNormal;
    dataTool = new WorldCursor();
    dimension;
    constructor(component) {
        this.component = component;
        this.dimension = DimensionProviderComponent.getRequired(component.node);
    }
    pick(start, direction, length) {
        return PickVoxel(this.dataTool, start, direction, length);
    }
}
export const VoxelInersectionComponent = NCS.registerComponent({
    type: "voxel-intersection",
    data: NCS.data(),
    init(component) {
        component.data = new Data(component.cloneCursor());
    },
    dispose(component) {
        component.data.component.returnCursor();
    },
});
