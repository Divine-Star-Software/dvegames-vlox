import { NCS } from "@amodx/ncs";
import { BabylonContext } from "../Babylon/Babylon.context";
import { VoxelSchemas } from "@divinevoxel/vlox/Voxels/State/VoxelSchemas";
import { VoxelPropertiesRegister } from "@divinevoxel/vlox/Voxels/Data/VoxelPropertiesRegister";
import { VoxelLUT } from "@divinevoxel/vlox/Voxels/Data/VoxelLUT";
import { TextureManager } from "@divinevoxel/vlox/Textures/TextureManager";
import { VoxelExplodeParticles } from "@divinevoxel/vlox-babylon/Particles/VoxelExplodeParticles";
import { Scene } from "@babylonjs/core/scene";
import { WorldCursor } from "@divinevoxel/vlox/World";
class Data {
  constructor(public scene: Scene) {}
  explodeAt(
    x: number,
    y: number,
    z: number,
    voxelId: string | number,
    mod: number
  ) {
    if (typeof voxelId == "number")
      voxelId = VoxelLUT.voxelIds.getStringId(VoxelLUT.voxels[voxelId][0]);
    const modState = VoxelSchemas.mod
      .get(voxelId)!
      .startEncoding(mod)
      .toStateString();
    const particles =
      VoxelPropertiesRegister.VoxelProperties[
        VoxelLUT.voxelIds.getNumberId(voxelId)
      ]["dve_particle_data"];
    if (!particles) {
      console.warn("No particle data for:", voxelId);
      return;
    }

    const particleTexture = particles[modState];
    TextureManager.getTexture("dve_voxel")!.getTextureIndex(particleTexture);
    const explodeParticles = new VoxelExplodeParticles(
      this.scene,
      new WorldCursor()
    );
    explodeParticles.explodeAt(x, y, z, particleTexture);
  }
}

export const VoxelWorldParticlesComponent = NCS.registerComponent({
  type: "voxel-world-particles",
  data: NCS.data<Data>(),
  init(component) {
    const { scene } = BabylonContext.getRequired(component.node)!.data;
    component.data = new Data(scene);
  },
});
