import { DynamicObject } from "nathan-lib";
export class FluidStorage {
    onPlace(e) {
        // Set the fluid amount to 0 when the block is placed
        this.fluidAmount = new DynamicObject(e.block, "fluid_amount", 0);
    }
    onPlayerDestroy(e) {
        this.fluidAmount.setVal(0);
    }
}
