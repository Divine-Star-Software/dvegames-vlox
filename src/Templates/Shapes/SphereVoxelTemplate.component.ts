import { NCS } from "@amodx/ncs";
import { VoxelShapeTemplateProvider } from "./VoxelShapeTemplateProvider.component";
import { SphereVoxelTemplate } from "@divinevoxel/vlox/Templates/Shapes/SphereVoxelTemplate";
export const SphereVoxelTemplateComponent = NCS.registerComponent({
  type: "sphere-voxel-template",
  schema: NCS.schema({
    radius: NCS.property(5),
  }),
  init(component) {
    const provider = VoxelShapeTemplateProvider.getRequired(component.node);
    const template = new SphereVoxelTemplate(
      SphereVoxelTemplate.CreateNew({
        radius: component.schema.radius,

      })
    );
    provider.data = template;
    const cursor = component.schema.getCursor();
    const index = component.schema.getSchemaIndex();
    cursor.setProxy(index.radius, template, "radius");
  },
  dispose(component) {
    const provider = VoxelShapeTemplateProvider.get(component.node);
    if (!provider) return;
    if (component.data == provider.data) {
      (provider as any).data = null;
    }
  },
});
