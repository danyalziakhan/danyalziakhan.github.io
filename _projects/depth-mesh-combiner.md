---
title: Multi Sensor Depth Alignment Tool
summary: Calibration tooling that merges four overlapping depth sensor streams into one clean surface, aligned by eye rather than by editing numbers.
tools: [Python, OpenCV, NumPy, SciPy]
repo: https://github.com/danyalziakhan/depth-mesh-combiner
featured: true
order: 7
---

## The problem

Four depth sensors were mounted above a physical surface, each covering roughly one quadrant. Merging their raw output does not work. The sensors sit at slightly different heights and angles, their fields of view overlap unevenly, and each reports depth against its own baseline. Concatenating the four frames gives you visible seams, a surface that tilts where it should be flat, and height steps along every boundary. Depth cameras also return zero for pixels they cannot resolve, and those zeros read as holes punched through the surface.

The calibration itself was the real obstacle. There are more than twenty interacting parameters across the four sensors, and editing a number, restarting, and looking at the result is a terrible loop when a change to one sensor's crop shifts everything downstream of it.

## What I built

Three tools sharing one image processing core.

The alignment tool puts twenty four live sliders next to a full screen preview of the combined grid: crop bounds and a rotation angle per sensor, plus four global margins. Every slider movement re-runs the whole pipeline and redraws, so alignment becomes something judged by eye against the actual output rather than reasoned about numerically.

Underneath, each frame is rotated, cropped to its sensor's bounds and padded to a consistent width, then assembled into a two by two grid with rows and columns padded to reconcile the mismatched shapes. Invalid zero readings are mapped to the midpoint of the working depth range so they stop reading as spikes, values are clipped to the range that matters, and the outer margins are trimmed.

Sliders cannot fix everything, so a second tool handles what is left. Click a pixel, then plus and minus raise or lower a square block around it, with bracket keys resizing the block. That covers residual height differences between sensors that no crop or rotation resolves.

Both tools export calibration as generated Python modules holding int16 arrays. At runtime applying the correction is a single array addition, so nothing is recalculated while the system is live. The processing core also carries nonlinear edge warps, stretching or compressing each edge independently through remapped coordinate grids, for the lens and perspective distortion that shows up at frame boundaries.

## The result

Calibration turned into a visual task that takes minutes. The exported matrices load straight into the real time path, and when a sensor gets knocked out of position, recovering means moving sliders until the preview looks right and pressing save.
