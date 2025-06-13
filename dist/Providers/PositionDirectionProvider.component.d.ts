import { Vector3Like } from "@amodx/math";
/**
 * Provide a position and direction for other components to use.
 */
export declare const PositionDirectionProviderComponent: import("@amodx/ncs/").ComponentRegisterData<any, {
    position: Vector3Like;
    direction: Vector3Like;
}, any> & {
    getNodes(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any>, any, any>;
    set(node: import("@amodx/ncs/").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<any>> | undefined, schemaCursor?: any, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any> | undefined): import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any>;
    has(node: import("@amodx/ncs/").NodeCursor): boolean;
    get(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any> | null;
    getRequired(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any>;
    getChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any> | null;
    getRequiredChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any>;
    getParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any> | null;
    getRequiredParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any>;
    getAll(node: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any>[] | null;
    remove(node: import("@amodx/ncs/").NodeCursor): boolean;
    removeAll(node: import("@amodx/ncs/").NodeCursor): boolean;
    nodeData: {
        get(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<any> | null;
        set(node: import("@amodx/ncs/").SerializedNodeData, componentSchema?: Partial<any> | undefined): void;
        getAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<any>[] | null;
        remove(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<any> | null;
        removeAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<any>[] | null;
    };
    type: string;
    typeId: number;
    data: import("@amodx/ncs/").ComponentRegisterData<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any>;
    default: import("@amodx/ncs/").ComponentCursor<any, {
        position: Vector3Like;
        direction: Vector3Like;
    }, any>;
} & ((schema?: Partial<any> | null | undefined, schemaView?: string | null) => import("@amodx/ncs/").CreateComponentData<any>);
