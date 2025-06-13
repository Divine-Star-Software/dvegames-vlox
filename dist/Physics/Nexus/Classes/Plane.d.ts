import { Vector3Like } from "@amodx/math";
import { Line } from "./Line.js";
export declare class Plane {
    dimensions: Vector3Like;
    normal: Vector3Like;
    update(dimensions: Vector3Like, normal: Vector3Like): this;
    /**# Line To Plane
     * @returns  a value between 0 and 1.
     *
     * 1 meaning there was no collision
     * and 0.5 meaning there was collision at the halfway mark of the bouding box.
     *
     */
    lineToPlane(line: Line): number;
}
