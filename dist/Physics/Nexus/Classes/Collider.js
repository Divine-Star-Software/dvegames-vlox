import { BoundingBox } from "./BoundingBox.js";
import { CollisionNode } from "./CollisionNode.js";
import { Vector3Like } from "@amodx/math";
export class Collider {
    static createBBox(width = 1, height = width, depth = width) {
        const bbox = new BoundingBox(width, height, depth);
        bbox.setPositionVec3(Vector3Like.Create());
        return bbox;
    }
    nodes = [];
    addNode(name, boundingBox) {
        this.nodes.push(new CollisionNode(name, boundingBox));
    }
    hasFlag(id) {
        return this.flags[id] !== undefined;
    }
}
