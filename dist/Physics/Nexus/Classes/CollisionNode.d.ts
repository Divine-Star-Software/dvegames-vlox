import { BoundingBox } from "./BoundingBox";
import { CollisionResult } from "./CollisionResult.js";
import { Vector3Like } from "@amodx/math";
export declare class CollisionNode {
    name: string;
    boundingBox: BoundingBox;
    results: CollisionResult;
    position: Vector3Like;
    constructor(name: string, boundingBox: BoundingBox);
}
