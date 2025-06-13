import { ArchivedSectorData } from "@divinevoxel/vlox/World/Archive/Types";
import { Vec3Array } from "@amodx/math";
export declare class ArchiverTasks {
    static archiveColumn(dimension: number, position: Vec3Array): Promise<ArchivedSectorData>;
    static importColumn(archivedColumn: ArchivedSectorData): Promise<void>;
}
