import { Observable } from "@amodx/core/Observers";
import { PhysicsBodyComponent } from "../../Physics/PhysicsBody.component";
import { PhysicsColliderStateComponent } from "../../Physics/PhysicsColliderState.component";
declare class PlayerControllerComponentObservers {
    moveForward: Observable<void>;
    moveForwardKeyUp: Observable<void>;
    moveBackward: Observable<void>;
    moveBackwardKeyUp: Observable<void>;
    moveLeft: Observable<void>;
    moveLeftKeyUp: Observable<void>;
    moveRight: Observable<void>;
    moveRightKeyUp: Observable<void>;
    jump: Observable<void>;
    run: Observable<void>;
    keyUp: Observable<void>;
}
declare class ComponentSchema {
    jumpTime: number;
    jumpForce: number;
    speed: number;
}
export declare const PlayerControllerComponent: import("@amodx/ncs/").ComponentRegisterData<ComponentSchema, {
    cleanUp: () => void;
    state: (typeof PhysicsColliderStateComponent)["default"];
    body: (typeof PhysicsBodyComponent)["default"];
    controlObservers: PlayerControllerComponentObservers;
}, any> & {
    getNodes(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any>, any, any>;
    set(node: import("@amodx/ncs/").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<ComponentSchema>> | undefined, schemaCursor?: import("@amodx/ncs/Util/Util.types").Nullable<import("@amodx/ncs/Schema/Schema.types").SchemaCursor<ComponentSchema>> | undefined, cursor?: import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any> | undefined): import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any>;
    has(node: import("@amodx/ncs/").NodeCursor): boolean;
    get(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any> | null;
    getRequired(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any>;
    getChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any> | null;
    getRequiredChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any>;
    getParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any> | null;
    getRequiredParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any>;
    getAll(node: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any>[] | null;
    remove(node: import("@amodx/ncs/").NodeCursor): boolean;
    removeAll(node: import("@amodx/ncs/").NodeCursor): boolean;
    nodeData: {
        get(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<ComponentSchema> | null;
        set(node: import("@amodx/ncs/").SerializedNodeData, componentSchema?: Partial<ComponentSchema> | undefined): void;
        getAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<ComponentSchema>[] | null;
        remove(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<ComponentSchema> | null;
        removeAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<ComponentSchema>[] | null;
    };
    type: string;
    typeId: number;
    data: import("@amodx/ncs/").ComponentRegisterData<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any>;
    default: import("@amodx/ncs/").ComponentCursor<ComponentSchema, {
        cleanUp: () => void;
        state: (typeof PhysicsColliderStateComponent)["default"];
        body: (typeof PhysicsBodyComponent)["default"];
        controlObservers: PlayerControllerComponentObservers;
    }, any>;
} & ((schema?: Partial<ComponentSchema> | null | undefined, schemaView?: string | null) => import("@amodx/ncs/").CreateComponentData<ComponentSchema>);
export {};
