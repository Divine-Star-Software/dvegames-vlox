import type { Collider } from "../Classes/Collider";
export declare const ColliderManager: {
    colliders: Record<string, Collider>;
    registerCollider(collider: Collider | Collider[]): void;
    getCollider(id: string): Collider;
};
