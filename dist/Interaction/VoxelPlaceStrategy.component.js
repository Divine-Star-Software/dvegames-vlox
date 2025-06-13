import { NCS } from "@amodx/ncs/";
import { VoxelPlacingStrategyRegister } from "@divinevoxel/vlox/Voxels/Interaction/Placing/VoxelPlacingStrategyRegister";
import { SchemaRegister } from "@divinevoxel/vlox/Voxels/State/SchemaRegister";
class Data {
    getState(data, picked, alt = null) {
        const strategy = VoxelPlacingStrategyRegister.get(data.id);
        if (!strategy)
            return data;
        const state = strategy.getState(picked, alt);
        if (!state) {
            data.state = 0;
            return data;
        }
        const schema = SchemaRegister.getVoxelSchemas(data.id);
        data.state = schema.state.readString(state);
    }
}
export const VoxelPlaceStragetgyComponent = NCS.registerComponent({
    type: "voxel-place-strategy",
    data: NCS.data(),
    init(component) {
        component.data = new Data();
    },
});
