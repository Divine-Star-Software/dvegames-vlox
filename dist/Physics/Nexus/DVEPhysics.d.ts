import { Graph } from "@amodx/ncs/";
import { DivineVoxelEngineNexus } from "@divinevoxel/vlox/Contexts/Nexus/DivineVoxelEngineNexus";
import "./Colliders/DefaultCollider";
import "../../Providers/DimensionProvider.component";
import "../../Transform.component";
import "../BoxCollider.component";
import "../PhysicsBody.component";
import "../PhysicsColliderState.component";
export declare class DVEPhysics {
    static graph: Graph;
    static init(dve: DivineVoxelEngineNexus): Promise<void>;
    static start(): void;
    static stop(): void;
}
