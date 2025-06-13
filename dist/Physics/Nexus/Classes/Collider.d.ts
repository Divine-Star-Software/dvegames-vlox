import { BoundingBox } from "./BoundingBox.js";
import { CollisionNode } from "./CollisionNode.js";
import { Vector3Like } from "@amodx/math";
export declare abstract class Collider {
    static createBBox(width?: number, height?: number, depth?: number): BoundingBox;
    nodes: CollisionNode[];
    abstract id: string;
    abstract isSolid: boolean;
    abstract flags: Record<string, number>;
    addNode(name: string, boundingBox: BoundingBox): void;
    abstract getNodes(dataTool: Vector3Like): CollisionNode[];
    hasFlag(id: string): boolean;
}
