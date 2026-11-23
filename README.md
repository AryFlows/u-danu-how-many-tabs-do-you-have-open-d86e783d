# How Many Tabs Do You Have Open?

[![Competition](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![Rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/AryFlows/u-danu-how-many-tabs-do-you-have-open-d86e783d/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![Reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/AryFlows/u-danu-how-many-tabs-do-you-have-open-d86e783d/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)

An entry for [How Many Tabs Do You Have Open?](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d) on make.fun.

## The entry

**137** — one honest count of open browser tabs, digits only (3 characters).

Why 137: it is prime and non-round, so it reads as counted rather than estimated — high enough to surprise, specific enough to be believed as a real tab-hoarder's count.

## Run

```sh
node main.ts
```

`main.ts` writes the number to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), with no trailing newline. Node standard library only.

## How it works

The count is a constant in `main.ts`, checked against the gate (1–5 digits) before writing, so the output is always exactly the number and nothing else.
