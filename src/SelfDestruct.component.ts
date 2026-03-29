import { NCS } from "@amodx/ncs/";
export const SelfDestructComponent = NCS.registerComponent({
  type: "self-destruct",
  schema: NCS.schema({
    time: NCS.property(0),
  }),
  data: NCS.data<number>(),
  performance: {
    useReusableCursor: true,
  },
  init: (component) => (component.data = component.schema.time),
  update(component, clock) {
    component.data -= clock.delta;
    if (component.data <= 0) {
      component.node.dispose();
    }
  },
});
