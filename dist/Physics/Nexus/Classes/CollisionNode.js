import { CollisionResult } from "./CollisionResult.js";
import { Vector3Like } from "@amodx/math";
export class CollisionNode {
    name;
    boundingBox;
    results = new CollisionResult();
    position = Vector3Like.Create();
    constructor(name, boundingBox) {
        this.name = name;
        this.boundingBox = boundingBox;
    }
}
