import { DivineVoxelEngineRender } from "@divinevoxel/vlox/Contexts/Render";
type Data = {
    dve: DivineVoxelEngineRender;
};
export declare const RendererContext: import("@amodx/ncs/").ContextRegisterData<{}, Data> & {
    set: (parent: import("@amodx/ncs/").NodeCursor, schema?: {} | null | undefined, schemaView?: string | null, data?: Data | null | undefined) => import("@amodx/ncs/").ContextCursor<{}, Data>;
    get: (parent: import("@amodx/ncs/").NodeCursor) => import("@amodx/ncs/").ContextCursor<{}, Data> | null;
    getRequired: (parent: import("@amodx/ncs/").NodeCursor) => import("@amodx/ncs/").ContextCursor<{}, Data>;
    remove: (parent: import("@amodx/ncs/").NodeCursor) => import("@amodx/ncs/").ContextCursor<{}, Data> | null;
    data: import("@amodx/ncs/").ContextRegisterData<{}, Data>;
    default: import("@amodx/ncs/").ContextCursor<{}, Data>;
} & ((schema?: {} | undefined, schemaViewId?: string, data?: Data | undefined) => import("@amodx/ncs/").CreateContextData);
export {};
