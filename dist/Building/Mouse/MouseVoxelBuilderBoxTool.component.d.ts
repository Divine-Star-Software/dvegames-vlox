import { NodeCursor } from "@amodx/ncs";
export declare const MouseVoxelBuilderBoxToolComponent: import("@amodx/ncs").ComponentRegisterData<{
    defaultExtrusion: number;
}, () => void, any> & {
    getNodes(grpah: import("@amodx/ncs").Graph): Generator<import("@amodx/ncs").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs").Graph): Generator<import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any>, any, any>;
    set(node: import("@amodx/ncs").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<{
        defaultExtrusion: number;
    }>> | undefined, schemaCursor?: import("@amodx/ncs/Util/Util.types").Nullable<import("@amodx/ncs/Schema/Schema.types").SchemaCursor<{
        defaultExtrusion: number;
    }>> | undefined, cursor?: import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any> | undefined): import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any>;
    has(node: import("@amodx/ncs").NodeCursor): boolean;
    get(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any> | null;
    getRequired(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any>;
    getChild(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any> | null;
    getRequiredChild(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any>;
    getParent(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any> | null;
    getRequiredParent(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any>;
    getAll(node: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any>[] | null;
    remove(node: import("@amodx/ncs").NodeCursor): boolean;
    removeAll(node: import("@amodx/ncs").NodeCursor): boolean;
    nodeData: {
        get(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            defaultExtrusion: number;
        }> | null;
        set(node: import("@amodx/ncs").SerializedNodeData, componentSchema?: Partial<{
            defaultExtrusion: number;
        }> | undefined): void;
        getAll(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            defaultExtrusion: number;
        }>[] | null;
        remove(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            defaultExtrusion: number;
        }> | null;
        removeAll(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            defaultExtrusion: number;
        }>[] | null;
    };
    type: string;
    typeId: number;
    data: import("@amodx/ncs").ComponentRegisterData<{
        defaultExtrusion: number;
    }, () => void, any>;
    default: import("@amodx/ncs").ComponentCursor<{
        defaultExtrusion: number;
    }, () => void, any>;
} & ((schema?: Partial<{
    defaultExtrusion: number;
}> | null | undefined, schemaView?: string | null) => import("@amodx/ncs").CreateComponentData<{
    defaultExtrusion: number;
}>);
