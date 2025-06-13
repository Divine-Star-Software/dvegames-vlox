import { Vector3Like } from "@amodx/math";
export class Plane {
    dimensions = Vector3Like.Create();
    normal = Vector3Like.Create();
    update(dimensions, normal) {
        Vector3Like.Copy(this.dimensions, dimensions);
        Vector3Like.Copy(this.normal, normal);
        return this;
    }
    /**# Line To Plane
     * @returns  a value between 0 and 1.
     *
     * 1 meaning there was no collision
     * and 0.5 meaning there was collision at the halfway mark of the bouding box.
     *
     */
    lineToPlane(line) {
        const NdotU = this.normal.x * line.end.x +
            this.normal.y * line.end.y +
            this.normal.z * line.end.z;
        return NdotU == 0
            ? Infinity
            : (this.normal.x * (this.dimensions.x - line.start.x) +
                this.normal.y * (this.dimensions.y - line.start.y) +
                this.normal.z * (this.dimensions.z - line.start.z)) /
                NdotU;
    }
}
