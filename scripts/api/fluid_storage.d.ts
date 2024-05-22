import { BlockComponentOnPlaceEvent, BlockComponentPlayerDestroyEvent, BlockCustomComponent } from "@minecraft/server";
import { DynamicObject, StaticObject } from "nathan-lib";
export declare abstract class FluidStorage implements BlockCustomComponent {
    abstract capacity: StaticObject;
    abstract flowSpeed: StaticObject;
    fluidAmount: DynamicObject;
    onPlace(e: BlockComponentOnPlaceEvent): void;
    onPlayerDestroy(e: BlockComponentPlayerDestroyEvent): void;
}
