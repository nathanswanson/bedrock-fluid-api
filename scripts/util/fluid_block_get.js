import { world } from "@minecraft/server";
import { asWorldProperty } from "./world_to_block";
export function getFluidAmount(block) {
    block.getComponent("minecraft:inventory");
    return world.getDynamicProperty(asWorldProperty("fluid_amount", block));
}
export function setFluidAmount(block, amount) {
    if (amount < 0)
        throw new Error("Fluid amount cannot be negative");
    world.setDynamicProperty(asWorldProperty("fluid_amount", block), amount);
}
export function adjustFluidAmount(block, amount) {
    const currentAmount = this.getFluidAmount(block);
    this.setFluidAmount(block, currentAmount + amount);
}
