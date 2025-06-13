import { Vector3Like, Vec3Array } from "@amodx/math";
export declare class BoundingBox {
    bottomAligned: boolean;
    bounds: {
        minX: number;
        maxX: number;
        minZ: number;
        maxZ: number;
        minY: number;
        maxY: number;
    };
    _full: {
        w: number;
        h: number;
        d: number;
    };
    _half: {
        w: number;
        h: number;
        d: number;
    };
    position: Vector3Like;
    constructor(width?: number, height?: number, depth?: number, bottomAligned?: boolean);
    update(width: number, height: number, depth: number): void;
    setPositionVec3(position: Vector3Like): void;
    setPosition(x: number, y: number, z: number): void;
    get width(): number;
    get height(): number;
    get depth(): number;
    set width(width: number);
    set height(height: number);
    set depth(depth: number);
    get halfWidth(): number;
    get halfHeight(): number;
    get halfDepth(): number;
    pointIsInside(point: Vector3Like): boolean;
    doesIntersect(boundingBox: BoundingBox): boolean;
    query(): Generator<Vec3Array>;
}
