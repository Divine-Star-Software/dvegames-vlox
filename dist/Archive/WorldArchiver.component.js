import { NCS } from "@amodx/ncs/";
import { WorldRegister } from "@divinevoxel/vlox/World/WorldRegister";
import ArchiveArea from "@divinevoxel/vlox/World/Archive/Functions/Area/ArchiveArea";
import { CreateSectorsFromArea } from "@divinevoxel/vlox/World/Archive/Functions/Area/ImportArea";
import { ArchiverTasks } from "./Tasks/ArchiverTasks";
import { DimensionProviderComponent } from "../Providers/DimensionProvider.component";
class Data {
    component;
    constructor(component) {
        this.component = component;
    }
    async archive() {
        const proms = [];
        const dimension = DimensionProviderComponent.get(this.component.node)
            .schema.dimension;
        for (const [, sector] of WorldRegister.dimensions.get(dimension).sectors) {
            proms.push(ArchiverTasks.archiveColumn(dimension, sector.position));
        }
        const sectors = await Promise.all(proms);
        const archivedArea = ArchiveArea({
            sectors,
            dimension,
        });
        return archivedArea;
    }
    async load(data) {
        const proms = [];
        for (const sector of CreateSectorsFromArea(data)) {
            proms.push(ArchiverTasks.importColumn(sector));
        }
        await Promise.all(proms);
    }
}
export const WorldArchiverComponent = NCS.registerComponent({
    type: "world-archiver-component",
    data: NCS.data(),
    init: (component) => (component.data = new Data(component.cloneCursor())),
    dispose: (component) => component.data.component.returnCursor(),
});
