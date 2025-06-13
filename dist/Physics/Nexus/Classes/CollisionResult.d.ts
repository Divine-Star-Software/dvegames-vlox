export declare class CollisionResult {
    raw: {
        hitDepth: number;
        nx: number;
        ny: number;
        nz: number;
    };
    update(h: number, nx: number, ny: number, nz: number): this;
    loadIn(results: CollisionResult): void;
    reset(): void;
    collided(): boolean;
    faceHit: {
        top: () => boolean;
        bottom: () => boolean;
        east: () => boolean;
        west: () => boolean;
        north: () => boolean;
        south: () => boolean;
    };
    normalHit: {
        x: () => number;
        y: () => number;
        z: () => number;
    };
}
