import { NCS } from "@amodx/ncs/";
class IVoxelUpdaterPlaceHolder {
    paint() {
        throw new Error("paint method not implemented.");
    }
    paintArea() {
        throw new Error("paintArea method not implemented.");
    }
    paintTemplate() {
        throw new Error("Method not implemented.");
    }
    erase() {
        throw new Error("paintTemplate method not implemented.");
    }
    eraseArea() {
        throw new Error("eraseArea method not implemented.");
    }
    eraseTemplate() {
        throw new Error("eraseTemplate method not implemented.");
    }
}
/**
 * Provides an interface to update the voxel world.
 */
export const VoxelUpdateProviderComponent = NCS.registerComponent({
    type: "voxel-update-provider",
    data: NCS.data(),
    init(component) {
        component.data = {
            updater: new IVoxelUpdaterPlaceHolder(),
        };
    },
});
