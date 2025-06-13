import { NCS } from "@amodx/ncs/";
import RotateTemplate from "@divinevoxel/vlox/Templates/Functions/RotateTemplate";
import FlipTemplate from "@divinevoxel/vlox/Templates/Functions/FlipTemplate";
import { VoxelBoxVolumeComponent } from "../Voxels/Volumes/VoxelBoxVolume.component";
import { TransformComponent } from "../Transform.component";
class Data {
    component;
    template;
    constructor(component) {
        this.component = component;
    }
    store() {
        /*     FullVoxelTemplate.CreateNewFromArea()
        this.component.data.template = CreateTemplate(
          DimensionProviderComponent.get(this.component.node)?.schema.dimension ||
            0,
          ...VoxelBoxVolumeComponent.get(this.component.node)!.data.getPoints()
        ); */
    }
    async build() {
        const volume = VoxelBoxVolumeComponent.get(this.component.node);
        /*     await CoreTasks.buildTemplate(
          DimensionProviderComponent.get(this.component.node)?.schema.dimension ||
            0,
          volume.data.getPoints()[0],
          this.component.data.template.toJSON()
        ); */
    }
    rotate(angles = 90, axes = "y") {
        const transform = TransformComponent.get(this.component.node);
        RotateTemplate(this.component.data.template, angles, axes);
        transform.schema.scale.x = this.component.data.template.bounds.size.x;
        transform.schema.scale.y = this.component.data.template.bounds.size.y;
        transform.schema.scale.z = this.component.data.template.bounds.size.z;
    }
    flip(direction) {
        FlipTemplate(this.component.data.template, direction);
    }
    async clear() {
        /*     await CoreTasks.removeVoxelArea(
          DimensionProviderComponent.get(this.component.node)?.schema.dimension ||
            0,
          ...VoxelBoxVolumeComponent.get(this.component.node)!.data.getPoints()
        ); */
    }
}
export const VoxelTemplateComponent = NCS.registerComponent({
    type: "voxel-template",
    init: (component) => (component.data = new Data(component.cloneCursor())),
    dispose: (component) => component.data.component.returnCursor(),
});
