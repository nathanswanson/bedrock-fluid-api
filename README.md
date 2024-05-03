# Bedrock Fluid API

Bedrock Fluid API Library, allows other modders to implement a shared fluid system. This is a NPM library not an addon.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Future Plans](#future-plans)

## Installation

> :warning: : This Library requires Experimental Beta Features in Minecraft.

1. In your addon run:  `npm i https://github.com/nathanswanson/fluid-api.git`

## Usage

When creating a custom block, extend the
```typescript
export class BlockPump extends FluidStorage {
  fluidCapacity = 4096; //How much fluid this can storge in (1/1000 bucket)
  flowSpeed = 5; //How fast the fluid can move to adjacent blocks in (1/1000 bucket)
}
```
## Future Plans

* Reduce dynamic property access call.
* Implement block dynamic property when it is released from Mojang.
* Cables - currently blocks have to be adjacent.