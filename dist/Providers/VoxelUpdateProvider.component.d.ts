import { Vector3Like } from "@amodx/math";
import { LocationData } from "@divinevoxel/vlox/Math";
import { RawVoxelData } from "@divinevoxel/vlox/Voxels";
import { VoxelUpdateData } from "@divinevoxel/vlox/Tasks/Tasks.types";
import { IVoxelTemplateData } from "@divinevoxel/vlox/Templates/VoxelTemplates.types";
export interface IVoxelUpdater {
    paint(location: LocationData, raw: RawVoxelData, data?: VoxelUpdateData): Promise<void>;
    paintArea(dimension: number, start: Vector3Like, end: Vector3Like, raw: RawVoxelData, data?: VoxelUpdateData): Promise<void>;
    paintTemplate(location: LocationData, tmeplateData: IVoxelTemplateData<any>, data?: VoxelUpdateData): Promise<void>;
    erase(location: LocationData, data?: VoxelUpdateData): Promise<void>;
    eraseArea(dimension: number, start: Vector3Like, end: Vector3Like, data?: VoxelUpdateData): Promise<void>;
    eraseTemplate(location: LocationData, tmeplateData: IVoxelTemplateData<any>, data?: VoxelUpdateData): Promise<void>;
}
/**
 * Provides an interface to update the voxel world.
 */
export declare const VoxelUpdateProviderComponent: import("@amodx/ncs/").ComponentRegisterData<any, {
    updater: IVoxelUpdater;
}, any> & {
    getNodes(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any>, any, any>;
    set(node: import("@amodx/ncs/").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<any>> | undefined, schemaCursor?: any, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any> | undefined): import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any>;
    has(node: import("@amodx/ncs/").NodeCursor): boolean;
    get(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any> | null;
    getRequired(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any>;
    getChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any> | null;
    getRequiredChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any>;
    getParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any> | null;
    getRequiredParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any>;
    getAll(node: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
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
        updater: IVoxelUpdater;
    }, any>;
    default: import("@amodx/ncs/").ComponentCursor<any, {
        updater: IVoxelUpdater;
    }, any>;
} & ((schema?: Partial<any> | null | undefined, schemaView?: string | null) => import("@amodx/ncs/").CreateComponentData<any>);
