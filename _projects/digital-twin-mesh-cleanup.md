---
title: Digital Twin Mesh Processing Pipeline
summary: A production pipeline that turns generated 3D models into geometry artists can actually work with.
tools: [Python, Blender, Geometry Processing]
featured: true
order: 1
---

## The problem

A digital twin company was generating 3D models with tools like Trellis and Hunyuan3D. As a starting point the output was fine. Underneath it was not production ready: dense triangle geometry with inconsistent topology, surfaces that looked closed but were not, duplicated definitions pointing at the same material, and structural pieces that had come out broken or only half formed.

Artists were spending the first part of every job repairing the model before they could start the work they were actually there to do. Volume made it worse. This was not one model to fix by hand, it was a steady stream of them, and each one needed the same tedious sequence of corrections.

## What I built

A set of Blender addons and Python scripts that run a raw model through a repair and restructuring pass before it reaches anyone.

The pipeline targets the failures that show up again and again in generated geometry. Cylindrical sections such as pipes often arrive broken or incomplete, so they get detected and rebuilt. Vertices that should be welded are welded. Objects that belong together are joined. Duplicate material definitions are collapsed down to the surfaces they actually describe. Past that there is a long tail of small geometry corrections that are individually trivial and collectively expensive, and those are handled automatically as well.

Remeshing happens during that pass, but it is not the point of it. What matters is that an artist has to edit the result afterwards, so the pipeline aims at topology that responds sensibly to ordinary modeling operations.

Everything is scripted and repeatable. A model that comes out wrong goes back through with adjusted parameters, no hand repair involved, which also means the pipeline improves as new failure cases turn up.

## The result

Artists receive models already in a workable state, so their time goes into texturing and refinement. The pipeline runs as a standard step in the studio's production process, and the same corrections no longer get redone manually on every job.
