export declare const DimensionContext: import("@amodx/ncs/").ContextRegisterData<{
    dimension: import("@amodx/ncs/Schema/Schema.types").SchemaProperty<string>;
}, {}> & {
    set: (parent: import("@amodx/ncs/").NodeCursor, schema?: {
        dimension: import("@amodx/ncs/Schema/Schema.types").SchemaProperty<string>;
    } | null | undefined, schemaView?: string | null, data?: {} | null | undefined) => import("@amodx/ncs/").ContextCursor<{
        dimension: import("@amodx/ncs/Schema/Schema.types").SchemaProperty<string>;
    }, {}>;
    get: (parent: import("@amodx/ncs/").NodeCursor) => import("@amodx/ncs/").ContextCursor<{
        dimension: import("@amodx/ncs/Schema/Schema.types").SchemaProperty<string>;
    }, {}> | null;
    getRequired: (parent: import("@amodx/ncs/").NodeCursor) => import("@amodx/ncs/").ContextCursor<{
        dimension: import("@amodx/ncs/Schema/Schema.types").SchemaProperty<string>;
    }, {}>;
    remove: (parent: import("@amodx/ncs/").NodeCursor) => import("@amodx/ncs/").ContextCursor<{
        dimension: import("@amodx/ncs/Schema/Schema.types").SchemaProperty<string>;
    }, {}> | null;
    data: import("@amodx/ncs/").ContextRegisterData<{
        dimension: import("@amodx/ncs/Schema/Schema.types").SchemaProperty<string>;
    }, {}>;
    default: import("@amodx/ncs/").ContextCursor<{
        dimension: import("@amodx/ncs/Schema/Schema.types").SchemaProperty<string>;
    }, {}>;
} & ((schema?: {
    dimension: import("@amodx/ncs/Schema/Schema.types").SchemaProperty<string>;
} | undefined, schemaViewId?: string, data?: {} | undefined) => import("@amodx/ncs/").CreateContextData);
