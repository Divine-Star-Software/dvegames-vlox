export declare const SceneOptionsComponent: import("@amodx/ncs/").ComponentRegisterData<{
    shade: {
        doSun: boolean;
        doRGB: boolean;
        doAO: boolean;
        doColor: boolean;
    };
    levels: {
        base: number;
        sun: number;
    };
    effects: {
        enabled: boolean;
    };
    fog: {
        mode: number;
        density: number;
        heightFactor: number;
        color: {
            r: number;
            g: number;
            b: number;
        };
        startBlend: number;
        blendEnd: number;
    };
    sky: {
        horizon: number;
        horizonStart: number;
        horizonEnd: number;
        color: {
            r: number;
            g: number;
            b: number;
        };
        blendStart: number;
        blendEnd: number;
    };
}, any, any> & {
    getNodes(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").NodeCursor>;
    getComponents(grpah: import("@amodx/ncs/").Graph): Generator<import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any>, any, any>;
    set(node: import("@amodx/ncs/").NodeCursor, componentSchema?: import("@amodx/ncs/Util/Util.types").Nullable<Partial<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }>> | undefined, schemaCursor?: import("@amodx/ncs/Util/Util.types").Nullable<import("@amodx/ncs/Schema/Schema.types").SchemaCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }>> | undefined, cursor?: import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any> | undefined): import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any>;
    has(node: import("@amodx/ncs/").NodeCursor): boolean;
    get(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any> | null;
    getRequired(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any>;
    getChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any> | null;
    getRequiredChild(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any>;
    getParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any> | null;
    getRequiredParent(node: import("@amodx/ncs/").NodeCursor, cursor?: import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any> | undefined, nodeCursor?: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any>;
    getAll(node: import("@amodx/ncs/").NodeCursor): import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any>[] | null;
    remove(node: import("@amodx/ncs/").NodeCursor): boolean;
    removeAll(node: import("@amodx/ncs/").NodeCursor): boolean;
    nodeData: {
        get(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            shade: {
                doSun: boolean;
                doRGB: boolean;
                doAO: boolean;
                doColor: boolean;
            };
            levels: {
                base: number;
                sun: number;
            };
            effects: {
                enabled: boolean;
            };
            fog: {
                mode: number;
                density: number;
                heightFactor: number;
                color: {
                    r: number;
                    g: number;
                    b: number;
                };
                startBlend: number;
                blendEnd: number;
            };
            sky: {
                horizon: number;
                horizonStart: number;
                horizonEnd: number;
                color: {
                    r: number;
                    g: number;
                    b: number;
                };
                blendStart: number;
                blendEnd: number;
            };
        }> | null;
        set(node: import("@amodx/ncs/").SerializedNodeData, componentSchema?: Partial<{
            shade: {
                doSun: boolean;
                doRGB: boolean;
                doAO: boolean;
                doColor: boolean;
            };
            levels: {
                base: number;
                sun: number;
            };
            effects: {
                enabled: boolean;
            };
            fog: {
                mode: number;
                density: number;
                heightFactor: number;
                color: {
                    r: number;
                    g: number;
                    b: number;
                };
                startBlend: number;
                blendEnd: number;
            };
            sky: {
                horizon: number;
                horizonStart: number;
                horizonEnd: number;
                color: {
                    r: number;
                    g: number;
                    b: number;
                };
                blendStart: number;
                blendEnd: number;
            };
        }> | undefined): void;
        getAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            shade: {
                doSun: boolean;
                doRGB: boolean;
                doAO: boolean;
                doColor: boolean;
            };
            levels: {
                base: number;
                sun: number;
            };
            effects: {
                enabled: boolean;
            };
            fog: {
                mode: number;
                density: number;
                heightFactor: number;
                color: {
                    r: number;
                    g: number;
                    b: number;
                };
                startBlend: number;
                blendEnd: number;
            };
            sky: {
                horizon: number;
                horizonStart: number;
                horizonEnd: number;
                color: {
                    r: number;
                    g: number;
                    b: number;
                };
                blendStart: number;
                blendEnd: number;
            };
        }>[] | null;
        remove(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            shade: {
                doSun: boolean;
                doRGB: boolean;
                doAO: boolean;
                doColor: boolean;
            };
            levels: {
                base: number;
                sun: number;
            };
            effects: {
                enabled: boolean;
            };
            fog: {
                mode: number;
                density: number;
                heightFactor: number;
                color: {
                    r: number;
                    g: number;
                    b: number;
                };
                startBlend: number;
                blendEnd: number;
            };
            sky: {
                horizon: number;
                horizonStart: number;
                horizonEnd: number;
                color: {
                    r: number;
                    g: number;
                    b: number;
                };
                blendStart: number;
                blendEnd: number;
            };
        }> | null;
        removeAll(node: import("@amodx/ncs/").SerializedNodeData): import("@amodx/ncs/").SerializedComponentData<{
            shade: {
                doSun: boolean;
                doRGB: boolean;
                doAO: boolean;
                doColor: boolean;
            };
            levels: {
                base: number;
                sun: number;
            };
            effects: {
                enabled: boolean;
            };
            fog: {
                mode: number;
                density: number;
                heightFactor: number;
                color: {
                    r: number;
                    g: number;
                    b: number;
                };
                startBlend: number;
                blendEnd: number;
            };
            sky: {
                horizon: number;
                horizonStart: number;
                horizonEnd: number;
                color: {
                    r: number;
                    g: number;
                    b: number;
                };
                blendStart: number;
                blendEnd: number;
            };
        }>[] | null;
    };
    type: string;
    typeId: number;
    data: import("@amodx/ncs/").ComponentRegisterData<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any>;
    default: import("@amodx/ncs/").ComponentCursor<{
        shade: {
            doSun: boolean;
            doRGB: boolean;
            doAO: boolean;
            doColor: boolean;
        };
        levels: {
            base: number;
            sun: number;
        };
        effects: {
            enabled: boolean;
        };
        fog: {
            mode: number;
            density: number;
            heightFactor: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            startBlend: number;
            blendEnd: number;
        };
        sky: {
            horizon: number;
            horizonStart: number;
            horizonEnd: number;
            color: {
                r: number;
                g: number;
                b: number;
            };
            blendStart: number;
            blendEnd: number;
        };
    }, any, any>;
} & ((schema?: Partial<{
    shade: {
        doSun: boolean;
        doRGB: boolean;
        doAO: boolean;
        doColor: boolean;
    };
    levels: {
        base: number;
        sun: number;
    };
    effects: {
        enabled: boolean;
    };
    fog: {
        mode: number;
        density: number;
        heightFactor: number;
        color: {
            r: number;
            g: number;
            b: number;
        };
        startBlend: number;
        blendEnd: number;
    };
    sky: {
        horizon: number;
        horizonStart: number;
        horizonEnd: number;
        color: {
            r: number;
            g: number;
            b: number;
        };
        blendStart: number;
        blendEnd: number;
    };
}> | null | undefined, schemaView?: string | null) => import("@amodx/ncs/").CreateComponentData<{
    shade: {
        doSun: boolean;
        doRGB: boolean;
        doAO: boolean;
        doColor: boolean;
    };
    levels: {
        base: number;
        sun: number;
    };
    effects: {
        enabled: boolean;
    };
    fog: {
        mode: number;
        density: number;
        heightFactor: number;
        color: {
            r: number;
            g: number;
            b: number;
        };
        startBlend: number;
        blendEnd: number;
    };
    sky: {
        horizon: number;
        horizonStart: number;
        horizonEnd: number;
        color: {
            r: number;
            g: number;
            b: number;
        };
        blendStart: number;
        blendEnd: number;
    };
}>);
