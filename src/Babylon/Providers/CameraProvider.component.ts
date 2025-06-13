import { NCS } from "@amodx/ncs/";
import type { Camera } from "@babylonjs/core/Cameras/camera";
export const CameraProviderComponent = NCS.registerComponent<{
  camera: Camera;
}>({
  type: "camera-provider",
});
