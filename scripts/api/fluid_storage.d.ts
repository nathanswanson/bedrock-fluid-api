import { BlockComponentOnPlaceEvent, BlockComponentPlayerDestroyEvent, BlockCustomComponent } from "@minecraft/server";
export declare abstract class FluidStorage implements BlockCustomComponent {
    abstract capacity: number;
    abstract flowSpeed: number;
    onPlace(e: BlockComponentOnPlaceEvent): void;
    onPlayerDestroy(e: BlockComponentPlayerDestroyEvent): void;
}
