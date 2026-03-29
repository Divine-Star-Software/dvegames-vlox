import { NCS } from "@amodx/ncs/";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { Node as BabylonNode } from "@babylonjs/core/node";
import { Vector3Like } from "@amodx/math";

import {
  createTransformProxy,
  TransformComponent,
} from "../Transform.component";
import { BabylonContext } from "./Babylon.context";

class Data {
  transformNode: TransformNode;
  getWorldPosition() {
    return this.transformNode.getAbsolutePosition();
  }

  private traverse = (node: BabylonNode) => {
    node.computeWorldMatrix();
    for (const child of node.getChildren()) {
      this.traverse(child);
    }
  };
  parent(node: BabylonNode) {
    if (!node) return;
    node.parent = this.transformNode;
    this.traverse(node);
  }
}

export const TransformNodeComponent = NCS.registerComponent({
  type: "transform-node",
  schema: NCS.schema({
    mode: NCS.property(""),
  }),
  data: NCS.data<Data>(),
  performance: {
    useReusableCursor: true,
  },
  init(component) {
    component.data = component.dataPool.get() ?? new Data();

    const context = BabylonContext.getRequired(component.node);
    let transformNode =
      component.data.transformNode ??
      new TransformNode(component.node.name, context.data.scene);
    transformNode.setEnabled(true);
    context.returnCursor();
    component.data.transformNode = transformNode;
    const tranform = TransformComponent.getRequired(component.node);
    Vector3Like.Copy(transformNode.position, tranform.schema.position);
    Vector3Like.Copy(transformNode.rotation, tranform.schema.rotation);
    Vector3Like.Copy(transformNode.scaling, tranform.schema.scale);

    if (component.schema.mode == "proxy") {
      createTransformProxy(
        tranform,
        transformNode.position,
        transformNode.rotation,
        transformNode.scaling,
      );
    }
    if (component.schema.mode == "sync") {
    }

    transformNode.computeWorldMatrix();

    const parent = TransformNodeComponent.getParent(component.node);
    if (parent) {
      component.data.transformNode.parent = parent.data.transformNode;
      component.data.transformNode.computeWorldMatrix();
    }
    tranform.returnCursor();
  },
  dispose(component) {
    const children = component.data.transformNode.getChildren();
    for (let i = 0; i < children.length; i++) {
      children[i].parent = null;
    }
    component.data.transformNode.setEnabled(false);
    component.dataPool.addItem(component.data);
  },
});
