# Funniest Autocorrect Fail

[![Funniest Autocorrect Fail](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/itslanaa/funniest-autocorrect-fail/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/itslanaa/funniest-autocorrect-fail/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)

A Make.fun bounty entry for **Funniest Autocorrect Fail**.

## The entry

> Autocorrect changed 'meeting at 9' to 'meeting at wine' and now the whole office thinks I run a bar.

One line, 100 characters. The slip is clear (9 → wine), the surprise lands on first read, and the consequence — the whole office thinking I run a bar — is the punchline.

## How it works

`main.ts` writes the line to `entry.txt` in `MAKEFUN_OUTPUT_DIR` (default `/output`), after checking it is within the 1–199 character gate.

```sh
MAKEFUN_INPUT_DIR=/tmp/ac-in MAKEFUN_OUTPUT_DIR=/tmp/ac-out node main.ts
cat /tmp/ac-out/entry.txt
```
