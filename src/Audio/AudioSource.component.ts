import { NCS } from "@amodx/ncs/";
import { Audio } from "@amodx/audio";
import { TransformComponent } from "../Transform.component";
import { SFXPlayOptions } from "@amodx/audio/Meta/AudioTypes";

const options: SFXPlayOptions = {
  level: 0,
};
const options3D: SFXPlayOptions = {
  level: 0,
  _3dSoundPosition: {
    x: 0,
    y: 0,
    z: 0,
  },
  _3dSoundData: {
    rolloffFactor: 0,
  },
};
class Data {
  public component: (typeof AudioSourceComponent)["default"];
  play() {
    const transform = TransformComponent.get(this.component.node)!;
    if (transform) {
      options3D.level = this.component.schema.level;
      options3D._3dSoundPosition!.x = transform.schema.position.x;
      options3D._3dSoundPosition!.y = transform.schema.position.y;
      options3D._3dSoundPosition!.z = transform.schema.position.z;
      options3D._3dSoundData!.rolloffFactor =
        this.component.schema.rolloffFactor;
      Audio.sfx.play(this.component.schema.sfxId, options3D);
      transform.returnCursor();
    } else {
      options.level = this.component.schema.level;
      Audio.sfx.play(this.component.schema.sfxId, options);
    }
  }
}

export const AudioSourceComponent = NCS.registerComponent({
  type: "audio-source",
  schema: NCS.schema({
    sfxId: NCS.property(""),
    level: NCS.property(0),
    rolloffFactor: NCS.property(0),
  }),
  data: NCS.data<Data>(),
  init: (component) => {
    component.data = component.dataPool.get() ?? new Data();
    component.data.component = component;
  },
  dispose: (component) => {
    if (!component.data) return;
    component.data?.component?.returnCursor();
    component.dataPool.addItem(component.data);
  },
});
