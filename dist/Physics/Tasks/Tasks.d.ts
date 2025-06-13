import { CreateNodeData } from "@amodx/ncs/";
export declare class NexusTasks {
    static registerBody(node: CreateNodeData): Promise<number>;
    static removeBody(id: number): Promise<void>;
}
