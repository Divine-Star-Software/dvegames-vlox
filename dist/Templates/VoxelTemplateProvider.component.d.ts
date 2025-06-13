import { IVoxelTemplate } from "@divinevoxel/vlox/Templates/VoxelTemplates.types";
export declare const VoxelTemplateProvider: import("@amodx/ncs/").ComponentRegisterData<any, IVoxelTemplate<any, any>, any> & {
    getNodes(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any>, any, any>;
    set(node: import("@amodx/ncs/").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<any>> | undefined, schemaCursor?: any, cursor?: import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any> | undefined): import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any>;
    has(node: import("@amodx/ncs/").NodeCursor): boolean;
    get(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any> | null;
    getRequired(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any>;
    getChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any> | null;
    getRequiredChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any>;
    getParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any> | null;
    getRequiredParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any>;
    getAll(node: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any>[] | null;
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
    data: import("@amodx/ncs/").ComponentRegisterData<any, IVoxelTemplate<any, any>, any>;
    default: import("@amodx/ncs/").ComponentCursor<any, IVoxelTemplate<any, any>, any>;
} & ((schema?: Partial<any> | null | undefined, schemaView?: string | null) => import("@amodx/ncs/").CreateComponentData<any>);
