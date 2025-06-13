export declare const PhysicsSystems: import("@amodx/ncs/").SystemRegisterData & {
    set: (graph: import("@amodx/ncs/").Graph) => void;
    get: (graph: import("@amodx/ncs/").Graph) => import("@amodx/ncs/").SystemInstance | null;
    remove: (graph: import("@amodx/ncs/").Graph) => import("@amodx/ncs/").SystemInstance | null;
    prototype: import("@amodx/ncs/Systems/SystemPrototype").SystemPrototype;
};
