import { Vector3Like } from "@amodx/math";
declare class Data {
    component: (typeof PhysicsBodyComponent)["default"];
    constructor(component: (typeof PhysicsBodyComponent)["default"]);
    setVelocity(vector: Vector3Like): Vector3Like;
    getVelocity(): {
        x: number;
        y: number;
        z: number;
    };
}
export declare const PhysicsBodyComponent: import("@amodx/ncs/").ComponentRegisterData<{
    velocity: {
        x: number;
        y: number;
        z: number;
    };
    targetVelocity: {
        x: number;
        y: number;
        z: number;
    };
    mass: number;
    friction: number;
    angularDamping: number;
    gravityScale: number;
}, Data, any> & {
    getNodes(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any>, any, any>;
    set(node: import("@amodx/ncs/").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }>> | undefined, schemaCursor?: import("@amodx/ncs/Util/Util.types").Nullable<import("@amodx/ncs/Schema/Schema.types").SchemaCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }>> | undefined, cursor?: import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any> | undefined): import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any>;
    has(node: import("@amodx/ncs/").NodeCursor): boolean;
    get(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any> | null;
    getRequired(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any>;
    getChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any> | null;
    getRequiredChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any>;
    getParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any> | null;
    getRequiredParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any>;
    getAll(node: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any>[] | null;
    remove(node: import("@amodx/ncs/").NodeCursor): boolean;
    removeAll(node: import("@amodx/ncs/").NodeCursor): boolean;
    nodeData: {
        get(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            velocity: {
                x: number;
                y: number;
                z: number;
            };
            targetVelocity: {
                x: number;
                y: number;
                z: number;
            };
            mass: number;
            friction: number;
            angularDamping: number;
            gravityScale: number;
        }> | null;
        set(node: import("@amodx/ncs/").SerializedNodeData, componentSchema?: Partial<{
            velocity: {
                x: number;
                y: number;
                z: number;
            };
            targetVelocity: {
                x: number;
                y: number;
                z: number;
            };
            mass: number;
            friction: number;
            angularDamping: number;
            gravityScale: number;
        }> | undefined): void;
        getAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            velocity: {
                x: number;
                y: number;
                z: number;
            };
            targetVelocity: {
                x: number;
                y: number;
                z: number;
            };
            mass: number;
            friction: number;
            angularDamping: number;
            gravityScale: number;
        }>[] | null;
        remove(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            velocity: {
                x: number;
                y: number;
                z: number;
            };
            targetVelocity: {
                x: number;
                y: number;
                z: number;
            };
            mass: number;
            friction: number;
            angularDamping: number;
            gravityScale: number;
        }> | null;
        removeAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            velocity: {
                x: number;
                y: number;
                z: number;
            };
            targetVelocity: {
                x: number;
                y: number;
                z: number;
            };
            mass: number;
            friction: number;
            angularDamping: number;
            gravityScale: number;
        }>[] | null;
    };
    type: string;
    typeId: number;
    data: import("@amodx/ncs/").ComponentRegisterData<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any>;
    default: import("@amodx/ncs/").ComponentCursor<{
        velocity: {
            x: number;
            y: number;
            z: number;
        };
        targetVelocity: {
            x: number;
            y: number;
            z: number;
        };
        mass: number;
        friction: number;
        angularDamping: number;
        gravityScale: number;
    }, Data, any>;
} & ((schema?: Partial<{
    velocity: {
        x: number;
        y: number;
        z: number;
    };
    targetVelocity: {
        x: number;
        y: number;
        z: number;
    };
    mass: number;
    friction: number;
    angularDamping: number;
    gravityScale: number;
}> | null | undefined, schemaView?: string | null) => import("@amodx/ncs/").CreateComponentData<{
    velocity: {
        x: number;
        y: number;
        z: number;
    };
    targetVelocity: {
        x: number;
        y: number;
        z: number;
    };
    mass: number;
    friction: number;
    angularDamping: number;
    gravityScale: number;
}>);
export {};
