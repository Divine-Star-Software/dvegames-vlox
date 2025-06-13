import { Observable } from "@amodx/core/Observers";
import { VoxelPickResult } from "@divinevoxel/vlox/Voxels/Interaction/VoxelPickResult";
export declare const VoxelMousePickComponent: import("@amodx/ncs/").ComponentRegisterData<any, {
    voxelPicked: Observable<{
        button: number;
        picked: VoxelPickResult;
    }>;
    _cleanUp: () => void;
}, any> & {
    getNodes(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any>, any, any>;
    set(node: import("@amodx/ncs/").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<any>> | undefined, schemaCursor?: any, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any> | undefined): import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any>;
    has(node: import("@amodx/ncs/").NodeCursor): boolean;
    get(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any> | null;
    getRequired(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any>;
    getChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any> | null;
    getRequiredChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any>;
    getParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any> | null;
    getRequiredParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any>;
    getAll(node: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
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
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any>;
    default: import("@amodx/ncs/").ComponentCursor<any, {
        voxelPicked: Observable<{
            button: number;
            picked: VoxelPickResult;
        }>;
        _cleanUp: () => void;
    }, any>;
} & ((schema?: Partial<any> | null | undefined, schemaView?: string | null) => import("@amodx/ncs/").CreateComponentData<any>);
