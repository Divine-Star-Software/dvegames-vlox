import { VoxelShapeTemplateShapeDirections } from "@divinevoxel/vlox/Templates/Shapes/VoxelShapeTemplate.types";
export declare const PyramidVoxelTemplateComponent: import("@amodx/ncs").ComponentRegisterData<{
    width: number;
    height: number;
    depth: number;
    direction: VoxelShapeTemplateShapeDirections;
    fallOff: number;
}, any, any> & {
    getNodes(grpah: import("@amodx/ncs").Graph): Generator<import("@amodx/ncs").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs").Graph): Generator<import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any>, any, any>;
    set(node: import("@amodx/ncs").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }>> | undefined, schemaCursor?: import("@amodx/ncs/Util/Util.types").Nullable<import("@amodx/ncs/Schema/Schema.types").SchemaCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }>> | undefined, cursor?: import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any> | undefined): import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any>;
    has(node: import("@amodx/ncs").NodeCursor): boolean;
    get(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any> | null;
    getRequired(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any>;
    getChild(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any> | null;
    getRequiredChild(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any>;
    getParent(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any> | null;
    getRequiredParent(node: import("@amodx/ncs").NodeCursor, cursor?: import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any>;
    getAll(node: import("@amodx/ncs").NodeCursor): import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any>[] | null;
    remove(node: import("@amodx/ncs").NodeCursor): boolean;
    removeAll(node: import("@amodx/ncs").NodeCursor): boolean;
    nodeData: {
        get(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            width: number;
            height: number;
            depth: number;
            direction: VoxelShapeTemplateShapeDirections;
            fallOff: number;
        }> | null;
        set(node: import("@amodx/ncs").SerializedNodeData, componentSchema?: Partial<{
            width: number;
            height: number;
            depth: number;
            direction: VoxelShapeTemplateShapeDirections;
            fallOff: number;
        }> | undefined): void;
        getAll(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            width: number;
            height: number;
            depth: number;
            direction: VoxelShapeTemplateShapeDirections;
            fallOff: number;
        }>[] | null;
        remove(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            width: number;
            height: number;
            depth: number;
            direction: VoxelShapeTemplateShapeDirections;
            fallOff: number;
        }> | null;
        removeAll(node: import("@amodx/ncs").SerializedNodeData): import("@amodx/ncs").SerializedComponentData<{
            width: number;
            height: number;
            depth: number;
            direction: VoxelShapeTemplateShapeDirections;
            fallOff: number;
        }>[] | null;
    };
    type: string;
    typeId: number;
    data: import("@amodx/ncs").ComponentRegisterData<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any>;
    default: import("@amodx/ncs").ComponentCursor<{
        width: number;
        height: number;
        depth: number;
        direction: VoxelShapeTemplateShapeDirections;
        fallOff: number;
    }, any, any>;
} & ((schema?: Partial<{
    width: number;
    height: number;
    depth: number;
    direction: VoxelShapeTemplateShapeDirections;
    fallOff: number;
}> | null | undefined, schemaView?: string | null) => import("@amodx/ncs").CreateComponentData<{
    width: number;
    height: number;
    depth: number;
    direction: VoxelShapeTemplateShapeDirections;
    fallOff: number;
}>);
