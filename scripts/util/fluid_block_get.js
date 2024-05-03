import { world } from "@minecraft/server";
import { asWorldProperty } from "./world_to_block";
export function getFluidAmount(block) {
    return world.getDynamicProperty(asWorldProperty("fluid_amount", block));
}
export function setFluidAmount(block, amount) {
    world.setDynamicProperty(asWorldProperty("fluid_amount", block), amount);
}
export function adjustFluidAmount(block, amount) {
    const currentAmount = this.getFluidAmount(block);
    this.setFluidAmount(block, currentAmount + amount);
}
