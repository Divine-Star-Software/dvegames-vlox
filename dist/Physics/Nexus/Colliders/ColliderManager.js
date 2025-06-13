export const ColliderManager = {
    colliders: {},
    registerCollider(collider) {
        if (Array.isArray(collider)) {
            return collider.forEach((_) => (this.colliders[_.id] = _));
        }
        this.colliders[collider.id] = collider;
    },
    getCollider(id) {
        const collider = this.colliders[id];
        if (!collider) {
            throw new Error(`Collider with ${id} does not exists.`);
        }
        return collider;
    },
};
