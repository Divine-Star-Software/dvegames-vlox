import { NCS } from "@amodx/ncs/";
import { CreateBox } from "@babylonjs/core/Meshes/Builders/boxBuilder";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { VertexBuffer } from "@babylonjs/core/Buffers/buffer";
import { createTransformProxy, TransformComponent, } from "../../Transform.component";
import { Vector3Like } from "@amodx/math";
import { BabylonContext } from "../../Babylon/Babylon.context";
export const VoxelBoxVolumeMeshComponent = NCS.registerComponent({
    type: "voxel-box-volume-mesh",
    shared: {
        material: null,
        box: null,
    },
    data: NCS.data(),
    init(component) {
        const { scene } = BabylonContext.getRequired(component.node).data;
        if (!component.shared.material) {
            component.shared.material = new StandardMaterial("", scene);
            component.shared.material.alpha = 0.7;
            component.shared.material.diffuseColor.set(0, 1, 0);
        }
        if (!component.shared.box) {
            const box = createVoxelBoxVolumneMesh(scene);
            box.enableEdgesRendering();
            box.material = component.shared.material;
            component.shared.box = box;
            box.setEnabled(false);
        }
        const transformComponent = TransformComponent.get(component.node);
        const box = component.shared.box.clone();
        box.setEnabled(true);
        Vector3Like.Copy(box.position, transformComponent.schema.position);
        Vector3Like.Copy(box.scaling, transformComponent.schema.scale);
        createTransformProxy(transformComponent, box.position, null, box.scaling);
        box.material = component.shared.material;
        component.data = box;
    },
    dispose: (component) => component.data.dispose(),
});
export function createVoxelBoxVolumneMesh(scene) {
    const box = CreateBox("", {}, scene);
    box.renderingGroupId = 2;
    const positions = box.getPositionData();
    const newPostions = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i++) {
        newPostions[i] = positions[i] + 0.5;
    }
    const buffer = new VertexBuffer(scene.getEngine(), newPostions, VertexBuffer.PositionKind);
    box.setVerticesBuffer(buffer);
    return box;
}
