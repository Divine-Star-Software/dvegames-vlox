import { PositionGizmo } from "@babylonjs/core/Gizmos/positionGizmo";
import { ScaleGizmo } from "@babylonjs/core/Gizmos/scaleGizmo";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
export declare const VoxelBoxVolumeControllerComponent: import("@amodx/ncs/").ComponentRegisterData<{
    mode: "position" | "scale";
    visible: boolean;
}, {
    node: TransformNode | null;
    positionGizmo: PositionGizmo | null;
    scaleGizmo: ScaleGizmo | null;
}, any> & {
    getNodes(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any>, any, any>;
    set(node: import("@amodx/ncs/").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<{
        mode: "position" | "scale";
        visible: boolean;
    }>> | undefined, schemaCursor?: import("@amodx/ncs/Util/Util.types").Nullable<import("@amodx/ncs/Schema/Schema.types").SchemaCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }>> | undefined, cursor?: import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any> | undefined): import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any>;
    has(node: import("@amodx/ncs/").NodeCursor): boolean;
    get(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any> | null;
    getRequired(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any>;
    getChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any> | null;
    getRequiredChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any>;
    getParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any> | null;
    getRequiredParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any>;
    getAll(node: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any>[] | null;
    remove(node: import("@amodx/ncs/").NodeCursor): boolean;
    removeAll(node: import("@amodx/ncs/").NodeCursor): boolean;
    nodeData: {
        get(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            mode: "position" | "scale";
            visible: boolean;
        }> | null;
        set(node: import("@amodx/ncs/").SerializedNodeData, componentSchema?: Partial<{
            mode: "position" | "scale";
            visible: boolean;
        }> | undefined): void;
        getAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            mode: "position" | "scale";
            visible: boolean;
        }>[] | null;
        remove(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            mode: "position" | "scale";
            visible: boolean;
        }> | null;
        removeAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            mode: "position" | "scale";
            visible: boolean;
        }>[] | null;
    };
    type: string;
    typeId: number;
    data: import("@amodx/ncs/").ComponentRegisterData<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any>;
    default: import("@amodx/ncs/").ComponentCursor<{
        mode: "position" | "scale";
        visible: boolean;
    }, {
        node: TransformNode | null;
        positionGizmo: PositionGizmo | null;
        scaleGizmo: ScaleGizmo | null;
    }, any>;
} & ((schema?: Partial<{
    mode: "position" | "scale";
    visible: boolean;
}> | null | undefined, schemaView?: string | null) => import("@amodx/ncs/").CreateComponentData<{
    mode: "position" | "scale";
    visible: boolean;
}>);
