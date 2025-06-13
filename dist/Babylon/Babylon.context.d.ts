import type { Scene } from "@babylonjs/core/scene";
import type { Engine } from "@babylonjs/core/Engines/engine";
import type { UtilityLayerRenderer } from "@babylonjs/core/Rendering/utilityLayerRenderer";
import { DVEBabylonRenderer } from "@divinevoxel/vlox-babylon/Renderer/DVEBabylonRenderer";
export declare const BabylonContext: import("@amodx/ncs/").ContextRegisterData<{}, {
    scene: Scene;
    engine: Engine;
    renderer: DVEBabylonRenderer;
    utilLayer?: UtilityLayerRenderer;
}> & {
    set: (parent: import("@amodx/ncs/").NodeCursor, schema?: {} | null | undefined, schemaView?: string | null, data?: {
        scene: Scene;
        engine: Engine;
        renderer: DVEBabylonRenderer;
        utilLayer?: UtilityLayerRenderer;
    } | null | undefined) => import("@amodx/ncs/").ContextCursor<{}, {
        scene: Scene;
        engine: Engine;
        renderer: DVEBabylonRenderer;
        utilLayer?: UtilityLayerRenderer;
    }>;
    get: (parent: import("@amodx/ncs/").NodeCursor) => import("@amodx/ncs/").ContextCursor<{}, {
        scene: Scene;
        engine: Engine;
        renderer: DVEBabylonRenderer;
        utilLayer?: UtilityLayerRenderer;
    }> | null;
    getRequired: (parent: import("@amodx/ncs/").NodeCursor) => import("@amodx/ncs/").ContextCursor<{}, {
        scene: Scene;
        engine: Engine;
        renderer: DVEBabylonRenderer;
        utilLayer?: UtilityLayerRenderer;
    }>;
    remove: (parent: import("@amodx/ncs/").NodeCursor) => import("@amodx/ncs/").ContextCursor<{}, {
        scene: Scene;
        engine: Engine;
        renderer: DVEBabylonRenderer;
        utilLayer?: UtilityLayerRenderer;
    }> | null;
    data: import("@amodx/ncs/").ContextRegisterData<{}, {
        scene: Scene;
        engine: Engine;
        renderer: DVEBabylonRenderer;
        utilLayer?: UtilityLayerRenderer;
    }>;
    default: import("@amodx/ncs/").ContextCursor<{}, {
        scene: Scene;
        engine: Engine;
        renderer: DVEBabylonRenderer;
        utilLayer?: UtilityLayerRenderer;
    }>;
} & ((schema?: {} | undefined, schemaViewId?: string, data?: {
    scene: Scene;
    engine: Engine;
    renderer: DVEBabylonRenderer;
    utilLayer?: UtilityLayerRenderer;
} | undefined) => import("@amodx/ncs/").CreateContextData);
