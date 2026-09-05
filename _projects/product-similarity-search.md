---
title: Product Similarity Search with Vision Models
summary: An image based product matching system that compares catalog pairs at a scale nobody could review by hand.
tools: [Qwen, llama.cpp, Python, Excel automation]
featured: true
order: 3
---

## The problem

A client needed to know whether two product listings referred to the same item, judging mainly from the product images. Titles were unreliable, since they came from different sellers in different formats and sometimes different languages. The catalog was far too large for anyone to work through pair by pair.

## What I built

The first version used CLIP embeddings with cosine similarity, backed by OCR for text visible in the images. It handled the clear cases and fell apart on the ones that mattered: the same product photographed from a different angle, or two genuinely different products that happen to look alike. Accuracy was not high enough for the client to act on the output without checking it, which defeated the point.

I worked through several multimodal models before settling on Qwen's vision language line, which handled the ambiguous pairs considerably better. The final system runs that model locally through a llama.cpp server, reads image pairs straight from the client's Excel file, and writes its verdict back into the same sheet.

Keeping it inside Excel was deliberate. The client already worked in that file, and a matching tool that demands a separate interface tends to quietly stop being used.

## The result

Large batches of product pairs are processed unattended, with accuracy high enough that the client acts on the results rather than re-checking them. Because the model runs locally, catalog data never leaves their machine, which mattered to them for a competitive dataset.
