import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { AxesViewer } from "@babylonjs/core/Debug/axesViewer";
export declare const AxesViewerComponent: import("@amodx/ncs").ComponentRegisterData<{
    visible: boolean;
}, {
    parent: Mesh;
    viewer: AxesViewer;
}, any> & {
    getNodes(grpah: import("@amodx/ncs").Graph): Generator<import("@amodx/ncs").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs").Graph): Generator<import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any>, any, any>;
    set(node: import("@amodx/ncs").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<{
        visible: boolean;
    }>> | undefined, schemaCursor?: import("@amodx/ncs/Util/Util.types").Nullable<import("@amodx/ncs/Schema/Schema.types").SchemaCursor<{
        visible: boolean;
    }>> | undefined, cursor?: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any> | undefined): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any>;
    has(node: import("@amodx/ncs").NodeCursor): boolean;
    get(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any> | null;
    getRequired(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any>;
    getChild(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any> | null;
    getRequiredChild(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any>;
    getParent(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any> | null;
    getRequiredParent(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any>;
    getAll(node: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any>[] | null;
    remove(node: import("@amodx/ncs").NodeCursor): boolean;
    removeAll(node: import("@amodx/ncs").NodeCursor): boolean;
    nodeData: {
        get(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            visible: boolean;
        }> | null;
        set(node: import("@amodx/ncs").SerializedNodeData, componentSchema?: Partial<{
            visible: boolean;
        }> | undefined): void;
        getAll(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            visible: boolean;
        }>[] | null;
        remove(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            visible: boolean;
        }> | null;
        removeAll(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            visible: boolean;
        }>[] | null;
    };
    type: string;
    typeId: number;
    data: import("@amodx/ncs").ComponentRegisterData<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any>;
    default: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: Mesh;
        viewer: AxesViewer;
    }, any>;
} & ((schema?: Partial<{
    visible: boolean;
}> | null | undefined, schemaView?: string | null) => import("@amodx/ncs").CreateComponentData<{
    visible: boolean;
}>);
