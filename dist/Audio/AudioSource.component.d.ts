declare class Data {
    component: (typeof AudioSourceComponent)["default"];
    constructor(component: (typeof AudioSourceComponent)["default"]);
    play(): void;
}
export declare const AudioSourceComponent: import("@amodx/ncs/").ComponentRegisterData<{
    sfxId: string;
    level: number;
    rolloffFactor: number;
}, Data, any> & {
    getNodes(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any>, any, any>;
    set(node: import("@amodx/ncs/").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }>> | undefined, schemaCursor?: import("@amodx/ncs/Util/Util.types").Nullable<import("@amodx/ncs/Schema/Schema.types").SchemaCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }>> | undefined, cursor?: import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any> | undefined): import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any>;
    has(node: import("@amodx/ncs/").NodeCursor): boolean;
    get(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any> | null;
    getRequired(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any>;
    getChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any> | null;
    getRequiredChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any>;
    getParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any> | null;
    getRequiredParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any>;
    getAll(node: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any>[] | null;
    remove(node: import("@amodx/ncs/").NodeCursor): boolean;
    removeAll(node: import("@amodx/ncs/").NodeCursor): boolean;
    nodeData: {
        get(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            sfxId: string;
            level: number;
            rolloffFactor: number;
        }> | null;
        set(node: import("@amodx/ncs/").SerializedNodeData, componentSchema?: Partial<{
            sfxId: string;
            level: number;
            rolloffFactor: number;
        }> | undefined): void;
        getAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            sfxId: string;
            level: number;
            rolloffFactor: number;
        }>[] | null;
        remove(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            sfxId: string;
            level: number;
            rolloffFactor: number;
        }> | null;
        removeAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            sfxId: string;
            level: number;
            rolloffFactor: number;
        }>[] | null;
    };
    type: string;
    typeId: number;
    data: import("@amodx/ncs/").ComponentRegisterData<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any>;
    default: import("@amodx/ncs/").ComponentCursor<{
        sfxId: string;
        level: number;
        rolloffFactor: number;
    }, Data, any>;
} & ((schema?: Partial<{
    sfxId: string;
    level: number;
    rolloffFactor: number;
}> | null | undefined, schemaView?: string | null) => import("@amodx/ncs/").CreateComponentData<{
    sfxId: string;
    level: number;
    rolloffFactor: number;
}>);
export {};
