import { DivineVoxelEngineRender } from "@divinevoxel/vlox/Contexts/Render/DivineVoxelEngineRender";
import { NexusTasksIds } from "./NexusTask.types";
export class NexusTasks {
    static async registerBody(node) {
        return await DivineVoxelEngineRender.instance.threads.nexus.runTaskAsync(NexusTasksIds.RegisterCollider, node);
    }
    static async removeBody(id) {
        await DivineVoxelEngineRender.instance.threads.nexus.runTaskAsync(NexusTasksIds.RemoveCollider, id);
    }
}
