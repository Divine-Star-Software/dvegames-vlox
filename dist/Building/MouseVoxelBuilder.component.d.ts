import { Observable } from "@amodx/core/Observers";
declare enum Tools {
    Single = "signle",
    Box = "box"
}
export declare const MouseVoxelBuilderComponent: import("@amodx/ncs").ComponentRegisterData<{
    tool: Tools;
}, {
    voxelPickedObserver: Observable;
}, any> & {
    getNodes(grpah: import("@amodx/ncs").Graph): Generator<import("@amodx/ncs").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs").Graph): Generator<import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any>, any, any>;
    set(node: import("@amodx/ncs").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<{
        tool: Tools;
    }>> | undefined, schemaCursor?: import("@amodx/ncs/Util/Util.types").Nullable<import("@amodx/ncs/Schema/Schema.types").SchemaCursor<{
        tool: Tools;
    }>> | undefined, cursor?: import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any> | undefined): import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any>;
    has(node: import("@amodx/ncs").NodeCursor): boolean;
    get(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any> | null;
    getRequired(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any>;
    getChild(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any> | null;
    getRequiredChild(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any>;
    getParent(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any> | null;
    getRequiredParent(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any>;
    getAll(node: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any>[] | null;
    remove(node: import("@amodx/ncs").NodeCursor): boolean;
    removeAll(node: import("@amodx/ncs").NodeCursor): boolean;
    nodeData: {
        get(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            tool: Tools;
        }> | null;
        set(node: import("@amodx/ncs").SerializedNodeData, componentSchema?: Partial<{
            tool: Tools;
        }> | undefined): void;
        getAll(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            tool: Tools;
        }>[] | null;
        remove(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            tool: Tools;
        }> | null;
        removeAll(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            tool: Tools;
        }>[] | null;
    };
    type: string;
    typeId: number;
    data: import("@amodx/ncs").ComponentRegisterData<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any>;
    default: import("@amodx/ncs").ComponentCursor<{
        tool: Tools;
    }, {
        voxelPickedObserver: Observable;
    }, any>;
} & ((schema?: Partial<{
    tool: Tools;
}> | null | undefined, schemaView?: string | null) => import("@amodx/ncs").CreateComponentData<{
    tool: Tools;
}>);
export {};
