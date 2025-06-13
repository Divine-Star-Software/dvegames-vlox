export declare const PhysicsColliderStateComponent: import("@amodx/ncs/").ComponentRegisterData<{
    isGrounded: number;
    isInLiquid: number;
    wantsToJump: number;
    jumpTime: number;
    coyoteTime: number;
}, any, any> & {
    getNodes(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any>, any, any>;
    set(node: import("@amodx/ncs/").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }>> | undefined, schemaCursor?: import("@amodx/ncs/Util/Util.types").Nullable<import("@amodx/ncs/Schema/Schema.types").SchemaCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }>> | undefined, cursor?: import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any> | undefined): import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any>;
    has(node: import("@amodx/ncs/").NodeCursor): boolean;
    get(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any> | null;
    getRequired(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any>;
    getChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any> | null;
    getRequiredChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any>;
    getParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any> | null;
    getRequiredParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any>;
    getAll(node: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any>[] | null;
    remove(node: import("@amodx/ncs/").NodeCursor): boolean;
    removeAll(node: import("@amodx/ncs/").NodeCursor): boolean;
    nodeData: {
        get(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            isGrounded: number;
            isInLiquid: number;
            wantsToJump: number;
            jumpTime: number;
            coyoteTime: number;
        }> | null;
        set(node: import("@amodx/ncs/").SerializedNodeData, componentSchema?: Partial<{
            isGrounded: number;
            isInLiquid: number;
            wantsToJump: number;
            jumpTime: number;
            coyoteTime: number;
        }> | undefined): void;
        getAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            isGrounded: number;
            isInLiquid: number;
            wantsToJump: number;
            jumpTime: number;
            coyoteTime: number;
        }>[] | null;
        remove(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            isGrounded: number;
            isInLiquid: number;
            wantsToJump: number;
            jumpTime: number;
            coyoteTime: number;
        }> | null;
        removeAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            isGrounded: number;
            isInLiquid: number;
            wantsToJump: number;
            jumpTime: number;
            coyoteTime: number;
        }>[] | null;
    };
    type: string;
    typeId: number;
    data: import("@amodx/ncs/").ComponentRegisterData<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any>;
    default: import("@amodx/ncs/").ComponentCursor<{
        isGrounded: number;
        isInLiquid: number;
        wantsToJump: number;
        jumpTime: number;
        coyoteTime: number;
    }, any, any>;
} & ((schema?: Partial<{
    isGrounded: number;
    isInLiquid: number;
    wantsToJump: number;
    jumpTime: number;
    coyoteTime: number;
}> | null | undefined, schemaView?: string | null) => import("@amodx/ncs/").CreateComponentData<{
    isGrounded: number;
    isInLiquid: number;
    wantsToJump: number;
    jumpTime: number;
    coyoteTime: number;
}>);
