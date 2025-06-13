import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { Node as BabylonNode } from "@babylonjs/core/node";
declare class Data {
    component: (typeof TransformNodeComponent)["default"];
    transformNode: TransformNode;
    constructor(component: (typeof TransformNodeComponent)["default"]);
    getWorldPosition(): import("@babylonjs/core").Vector3;
    parent(node: BabylonNode): void;
}
export declare const TransformNodeComponent: import("@amodx/ncs/").ComponentRegisterData<{
    mode: string;
}, Data, any> & {
    getNodes(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any>, any, any>;
    set(node: import("@amodx/ncs/").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<{
        mode: string;
    }>> | undefined, schemaCursor?: import("@amodx/ncs/Util/Util.types").Nullable<import("@amodx/ncs/Schema/Schema.types").SchemaCursor<{
        mode: string;
    }>> | undefined, cursor?: import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any> | undefined): import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any>;
    has(node: import("@amodx/ncs/").NodeCursor): boolean;
    get(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any> | null;
    getRequired(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any>;
    getChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any> | null;
    getRequiredChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any>;
    getParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any> | null;
    getRequiredParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any>;
    getAll(node: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any>[] | null;
    remove(node: import("@amodx/ncs/").NodeCursor): boolean;
    removeAll(node: import("@amodx/ncs/").NodeCursor): boolean;
    nodeData: {
        get(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            mode: string;
        }> | null;
        set(node: import("@amodx/ncs/").SerializedNodeData, componentSchema?: Partial<{
            mode: string;
        }> | undefined): void;
        getAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            mode: string;
        }>[] | null;
        remove(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            mode: string;
        }> | null;
        removeAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            mode: string;
        }>[] | null;
    };
    type: string;
    typeId: number;
    data: import("@amodx/ncs/").ComponentRegisterData<{
        mode: string;
    }, Data, any>;
    default: import("@amodx/ncs/").ComponentCursor<{
        mode: string;
    }, Data, any>;
} & ((schema?: Partial<{
    mode: string;
}> | null | undefined, schemaView?: string | null) => import("@amodx/ncs/").CreateComponentData<{
    mode: string;
}>);
export {};
