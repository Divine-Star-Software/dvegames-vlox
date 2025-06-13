import { NexusTasksIds } from "./NexusTask.types";
import { DVEPhysics } from "../Nexus/DVEPhysics";
export default function (nexus) {
    nexus.TC.registerTask(NexusTasksIds.RegisterCollider, (node) => {
        const newNode = DVEPhysics.graph.addNode(node);
        return [newNode.index];
    });
    nexus.TC.registerTask(NexusTasksIds.RemoveCollider, ([id]) => {
        DVEPhysics.graph.removeNode(id);
    });
}
