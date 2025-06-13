import { Scene } from "@babylonjs/core/scene";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import type { Mesh } from "@babylonjs/core/Meshes/mesh";
export declare const VoxelBoxVolumeMeshComponent: import("@amodx/ncs/").ComponentRegisterData<any, Mesh, {
    material: StandardMaterial | null;
    box: Mesh | null;
}> & {
    getNodes(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }>, any, any>;
    set(node: import("@amodx/ncs/").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<any>> | undefined, schemaCursor?: any, cursor?: import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }> | undefined): import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }>;
    has(node: import("@amodx/ncs/").NodeCursor): boolean;
    get(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }> | null;
    getRequired(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }>;
    getChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }> | null;
    getRequiredChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }>;
    getParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }> | null;
    getRequiredParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }>;
    getAll(node: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }>[] | null;
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
    data: import("@amodx/ncs/").ComponentRegisterData<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }>;
    default: import("@amodx/ncs/").ComponentCursor<any, Mesh, {
        material: StandardMaterial | null;
        box: Mesh | null;
    }>;
} & ((schema?: Partial<any> | null | undefined, schemaView?: string | null) => import("@amodx/ncs/").CreateComponentData<any>);
export declare function createVoxelBoxVolumneMesh(scene: Scene): Mesh;
