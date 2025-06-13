import { PositionGizmo } from "@babylonjs/core/Gizmos/positionGizmo";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
export declare const VoxelPositionGuideComponent: import("@amodx/ncs").ComponentRegisterData<{
    visible: boolean;
}, {
    parent: TransformNode;
    positionGizmo: PositionGizmo;
}, any> & {
    getNodes(grpah: import("@amodx/ncs").Graph): Generator<import("@amodx/ncs").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs").Graph): Generator<import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any>, any, any>;
    set(node: import("@amodx/ncs").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<{
        visible: boolean;
    }>> | undefined, schemaCursor?: import("@amodx/ncs/Util/Util.types").Nullable<import("@amodx/ncs/Schema/Schema.types").SchemaCursor<{
        visible: boolean;
    }>> | undefined, cursor?: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any> | undefined): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any>;
    has(node: import("@amodx/ncs").NodeCursor): boolean;
    get(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any> | null;
    getRequired(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any>;
    getChild(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any> | null;
    getRequiredChild(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any>;
    getParent(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any> | null;
    getRequiredParent(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any>;
    getAll(node: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
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
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any>;
    default: import("@amodx/ncs").ComponentCursor<{
        visible: boolean;
    }, {
        parent: TransformNode;
        positionGizmo: PositionGizmo;
    }, any>;
} & ((schema?: Partial<{
    visible: boolean;
}> | null | undefined, schemaView?: string | null) => import("@amodx/ncs").CreateComponentData<{
    visible: boolean;
}>);
