import { DivineVoxelEngineRender } from "@divinevoxel/vlox/Contexts/Render/DivineVoxelEngineRender";
import { ArchiverTasksIds, } from "./Types/WorldTask.types";
export class ArchiverTasks {
    static async archiveColumn(dimension, position) {
        return DivineVoxelEngineRender.instance.threads.generators.runTaskAsync(ArchiverTasksIds.ArchiveColumn, [dimension, ...position], []);
    }
    static async importColumn(archivedColumn) {
        return DivineVoxelEngineRender.instance.threads.generators.runTaskAsync(ArchiverTasksIds.ImportColumn, archivedColumn, []);
    }
}
