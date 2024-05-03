import { world } from "@minecraft/server";
import { asWorldProperty } from "../util/world_to_block";
export class FluidStorage {
    onPlace(e) {
        world.setDynamicProperty(asWorldProperty("fluid_amount", e.block), 0);
    }
    onPlayerDestroy(e) {
        world.setDynamicProperty(asWorldProperty("fluid_amount", e.block), 0);
    }
}
