import { NCS } from "@amodx/ncs/";
import { WorldRegister } from "@divinevoxel/vlox/World/WorldRegister";
import {
  ArchivedAreaData,
  ArchivedSectorData,
} from "@divinevoxel/vlox/World/Archive/Types";
import ArchiveArea from "@divinevoxel/vlox/World/Archive/Functions/Area/ArchiveArea";
import { CreateSectorsFromArea } from "@divinevoxel/vlox/World/Archive/Functions/Area/ImportArea";
import { ArchiverTasks } from "./Tasks/ArchiverTasks";
import { DimensionProviderComponent } from "../Providers/DimensionProvider.component";

class Data {
  constructor(public component: (typeof WorldArchiverComponent)["default"]) {}
  async archive() {
    const proms: Promise<ArchivedSectorData>[] = [];
    const dimension = DimensionProviderComponent.get(this.component.node)!
      .schema.dimension;

    for (const [, sector] of WorldRegister.dimensions.get(dimension)!.sectors) {
      proms.push(ArchiverTasks.archiveColumn(dimension, sector.position));
    }

    const sectors = await Promise.all(proms);
    const archivedArea = ArchiveArea({
      sectors,
      dimension,
    });

    return archivedArea;
  }
  async load(data: ArchivedAreaData) {
    const proms: Promise<any>[] = [];
    for (const sector of CreateSectorsFromArea(data)) {
      proms.push(ArchiverTasks.importColumn(sector));
    }
    await Promise.all(proms);
  }
}

export const WorldArchiverComponent = NCS.registerComponent({
  type: "world-archiver-component",
  data: NCS.data<Data>(),
  init: (component) => (component.data = new Data(component.cloneCursor())),
  dispose: (component) => component.data.component.returnCursor(),
});
