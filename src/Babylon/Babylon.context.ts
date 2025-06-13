import { NCS } from "@amodx/ncs/";
import type { Scene } from "@babylonjs/core/scene";
import type { Engine } from "@babylonjs/core/Engines/engine";
import type { UtilityLayerRenderer } from "@babylonjs/core/Rendering/utilityLayerRenderer";
import { DVEBabylonRenderer } from "@divinevoxel/vlox-babylon/Renderer/DVEBabylonRenderer";
export const BabylonContext = NCS.registerContext<
  {},
  {
    scene: Scene;
    engine: Engine;
    renderer: DVEBabylonRenderer;
    utilLayer?: UtilityLayerRenderer;
  }
>({
  type: "babylon",
});
