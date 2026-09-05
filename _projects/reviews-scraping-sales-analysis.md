---
title: Review Scraping and Sales Ratio Analysis
summary: A scraping and analysis pipeline that estimates relative sales performance from public review data.
tools: [Playwright, Python, Qwen, llama.cpp]
featured: true
order: 4
---

## The problem

A client wanted to know which products were selling well across several major Korean marketplaces. Actual sales figures are not published anywhere, so the question had to be answered from what those platforms do expose publicly.

## What I built

A scraping pipeline that takes a product list from an Excel file and collects reviews and ratings for each item across the marketplaces. The scrapers handle the usual obstacles on those sites: content that loads only as you scroll, rate limiting, and page structures that differ per platform and change without warning.

The collected reviews go to a Qwen model running locally through llama.cpp, which estimates relative sales performance from review volume, rating distribution, and what the reviews actually say. Volume on its own is misleading here. An older listing accumulates reviews simply by existing, and a heavily discounted product attracts a recognizable kind of comment, so reading what the reviews say does real work here, not simply counting them.

## The result

The client gets a usable proxy for sales performance built entirely from public data, refreshed on demand and never assembled by hand. It is an estimate, not a figure, and gets treated as one, but it is enough to rank products against each other and decide where to look more closely.
