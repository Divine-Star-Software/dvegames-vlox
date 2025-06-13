import { NodeCursor } from "@amodx/ncs";
export declare const NodeRefernceComponent: import("@amodx/ncs").ComponentRegisterData<{
    nodeId: bigint;
    nodeIndex: number;
}, {
    readonly node: NodeCursor | null;
}, any> & {
    getNodes(grpah: import("@amodx/ncs").Graph): Generator<import("@amodx/ncs").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs").Graph): Generator<import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any>, any, any>;
    set(node: import("@amodx/ncs").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<{
        nodeId: bigint;
        nodeIndex: number;
    }>> | undefined, schemaCursor?: import("@amodx/ncs/Util/Util.types").Nullable<import("@amodx/ncs/Schema/Schema.types").SchemaCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }>> | undefined, cursor?: import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any> | undefined): import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any>;
    has(node: import("@amodx/ncs").NodeCursor): boolean;
    get(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any> | null;
    getRequired(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any>;
    getChild(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any> | null;
    getRequiredChild(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any>;
    getParent(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any> | null;
    getRequiredParent(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any>;
    getAll(node: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any>[] | null;
    remove(node: import("@amodx/ncs").NodeCursor): boolean;
    removeAll(node: import("@amodx/ncs").NodeCursor): boolean;
    nodeData: {
        get(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            nodeId: bigint;
            nodeIndex: number;
        }> | null;
        set(node: import("@amodx/ncs").SerializedNodeData, componentSchema?: Partial<{
            nodeId: bigint;
            nodeIndex: number;
        }> | undefined): void;
        getAll(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            nodeId: bigint;
            nodeIndex: number;
        }>[] | null;
        remove(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            nodeId: bigint;
            nodeIndex: number;
        }> | null;
        removeAll(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            nodeId: bigint;
            nodeIndex: number;
        }>[] | null;
    };
    type: string;
    typeId: number;
    data: import("@amodx/ncs").ComponentRegisterData<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any>;
    default: import("@amodx/ncs").ComponentCursor<{
        nodeId: bigint;
        nodeIndex: number;
    }, {
        readonly node: NodeCursor | null;
    }, any>;
} & ((schema?: Partial<{
    nodeId: bigint;
    nodeIndex: number;
}> | null | undefined, schemaView?: string | null) => import("@amodx/ncs").CreateComponentData<{
    nodeId: bigint;
    nodeIndex: number;
}>);
