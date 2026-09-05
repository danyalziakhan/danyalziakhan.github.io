---
title: Parametric Structure Generation
summary: Blender tooling that builds towers, bridges, and similar structures from blueprint measurements instead of modeling each variant by hand.
tools: [Python, Blender, Procedural Modeling]
featured: true
order: 2
---

## The problem

Environment structures get modeled by hand from blueprints. Every project arrives with different measurements, so each variant meant starting over, and most of that effort repeated work already done on the last one.

Speed was the obvious cost. The subtler one was drift: two models built by hand from similar specifications do not necessarily agree with each other, and a measurement misread once stays wrong until somebody notices, which is usually late.

## What I built

A parametric system that reads measurements and technical specifications and constructs the structure procedurally in Blender. The rules live in code, so the things that change between builds become inputs: heights, spacings, section counts, and the attached parts that vary by structure such as platforms, spans, and decks.

Because the geometry is generated from rules, it can also be checked automatically. I added AI assisted passes that inspect the output for the problems easiest to miss by eye, such as sections that do not meet cleanly, members misaligned against the specification, and geometry that is structurally implausible for what it claims to be. When something is wrong the fix is to correct the procedural rule and regenerate, which is a very different loop from discovering the same fault by hand three days later.

It started with tower structures. Over the past few months I extended the same system to bridges, and nothing in the approach is tied to one kind of object.

## The result

Variants that used to take a modeling session each are generated from their blueprint values. Output stays consistent between builds because the same rules produce all of it, and correcting a structural mistake means changing a parameter, not reworking a model.
