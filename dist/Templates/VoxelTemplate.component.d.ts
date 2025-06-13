import { TemplateRotationAngles, TemplateRotationAxes } from "@divinevoxel/vlox/Templates/Functions/RotateTemplate";
import { TemplateFlipDirections } from "@divinevoxel/vlox/Templates/Functions/FlipTemplate";
import { FullVoxelTemplate } from "@divinevoxel/vlox/Templates/Full/FullVoxelTemplate";
declare class Data {
    component: (typeof VoxelTemplateComponent)["default"];
    template: FullVoxelTemplate;
    constructor(component: (typeof VoxelTemplateComponent)["default"]);
    store(): void;
    build(): Promise<void>;
    rotate(angles?: TemplateRotationAngles, axes?: TemplateRotationAxes): void;
    flip(direction: TemplateFlipDirections): void;
    clear(): Promise<void>;
}
export declare const VoxelTemplateComponent: import("@amodx/ncs/").ComponentRegisterData<any, Data, any> & {
    getNodes(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").ComponentCursor<any, Data, any>, any, any>;
    set(node: import("@amodx/ncs/").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<any>> | undefined, schemaCursor?: any, cursor?: import("@amodx/ncs/").ComponentCursor<any, Data, any> | undefined): import("@amodx/ncs/").ComponentCursor<any, Data, any>;
    has(node: import("@amodx/ncs/").NodeCursor): boolean;
    get(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, Data, any> | null;
    getRequired(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, Data, any>;
    getChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, Data, any> | null;
    getRequiredChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, Data, any>;
    getParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, Data, any> | null;
    getRequiredParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, Data, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, Data, any>;
    getAll(node: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, Data, any>[] | null;
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
    data: import("@amodx/ncs/").ComponentRegisterData<any, Data, any>;
    default: import("@amodx/ncs/").ComponentCursor<any, Data, any>;
} & ((schema?: Partial<any> | null | undefined, schemaView?: string | null) => import("@amodx/ncs/").CreateComponentData<any>);
export {};
