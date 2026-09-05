---
layout: default
title: About
permalink: /about/
---

<div class="hero">
  <img class="hero-photo" src="{{ "/assets/images/danyal-photo.jpg" | relative_url }}" alt="Danyal Zia Khan">
  <div class="hero-text">
    <h1>About</h1>
    <p class="hero-role">Python developer based in Pakistan <img class="flag-inline" src="{{ "/assets/images/pk-flag.svg" | relative_url }}" alt="Pakistan" width="21" height="14"></p>
  </div>
</div>

I learned C++ before I enrolled in a software engineering degree, and the reason was pretty specific. Around 2013 I had an old laptop with an integrated ATI GPU that did not support the OpenGL versions PPSSPP needed, so a lot of PSP games ran with glitches or broke outright. I wanted to play those games properly, and patching the emulator myself looked like the only route. So I worked through C++ books and online tutorials and spent a long time on trial and error until I had fixed some of it.

That is also how I ended up in <a href="{{ site.social.github }}" target="_blank" rel="noopener">open source</a>. Once I could read and modify somebody else's codebase, contributing to other projects and starting my own stopped feeling out of reach.

Later I wrote programming tutorials professionally: core material on C++, C#, and Java first, then Angular, React, and Ionic as client demand shifted. Explaining a language to someone who does not know it yet is a good way to find the gaps in your own understanding, and it made me better at handing work over afterwards.

The last six plus years have been Python and automation. The shape of it has changed over that time. Early on a job usually meant one program doing one thing. Now most of what I build has AI somewhere inside it, running the part of a pipeline that used to need a person, and the systems have enough moving pieces that keeping them predictable is a large share of the actual engineering.

## What I work on

Most of what I do now falls into four areas that overlap more than you would expect.

**Automation pipelines.** Systems that take over the repetitive middle of a workflow. A lot of it is tabular: large Excel exports that need grouping, aggregating, and reconciling against a second source, and the cleanup that always comes first. That means stripping stray and special characters, fixing broken encodings, dropping the columns nobody reads, and forcing inconsistent entries into agreement so the numbers can be trusted downstream. The rest is bulk file and image handling, scheduled jobs, and desktop and web routines. Usually the goal is that nobody has to remember to run it.

**Metric 3D reconstruction and digital twin work.** Pipelines that pull measurements and structure out of reference images or technical documentation and turn them into scale accurate 3D environments, working with reconstruction models such as SAM 3D, ReconViaGen, and Pixal3D. Most of it is about removing manual modeling: parametric and procedural tools that generate environment structures such as towers, bridges, and roads from their specifications, so a new variant is a change of input values. AI assistance runs inside these pipelines as well, checking geometry for faults that are easy to miss by eye and helping drive reconstruction through procedural rules.

**Web scraping.** Scrapers for sites that range from plain static pages to platforms actively built to block automation. That means handling authentication and session persistence, anti bot measures, proxy rotation, and content that only appears on scroll or arrives through an internal API the page calls rather than the HTML it renders. Large jobs run in parallel, and the data gets cleaned and reshaped on the way out, since what a site returns is rarely the structure anyone wants to work in.

**AI assisted systems.** Object detection, bounding box extraction, and dimension estimation, including open vocabulary detection with GroundingDINO and segmentation with SAM. OCR and document processing to pull structured values out of scans and technical drawings. Product similarity matching from images. Local model deployment through llama.cpp, which keeps client data on their own hardware and takes the per call cost out of pipelines that run continuously. ComfyUI workflows for image generation and editing.

A lot of this work starts from an awkward constraint. Sometimes a generator produces a mesh that no artist can edit; sometimes the data you need sits on a site built specifically to withhold it. What I like about these problems is that there is rarely something off the shelf to reach for, so the job comes down to learning how a particular tool behaves in practice, which is not always what its documentation claims.

## How I work

I write the code myself and fit it to the project. A generic template bent into shape leaves you maintaining someone else's assumptions, and those surface at the worst time. Before starting I make sure I understand the actual problem and not only the feature request, because those are often different things and the gap between them is where projects go wrong. I explain my reasoning as I go and comment the parts where the logic is not obvious, so whoever picks it up next is not stuck guessing.

Clarity, performance, and reliability are what I optimize for, in that order. Code that runs fast but nobody can maintain is a liability.

## Tools

<ul class="tag-list">
  <li>Python</li><li>TypeScript</li><li>Rust</li><li>C++</li><li>PowerShell</li>
  <li>Playwright</li><li>BeautifulSoup</li><li>pandas</li><li>Test automation</li>
  <li>FastAPI</li><li>Laravel</li><li>React</li><li>Vue</li>
  <li>PyTorch</li><li>Hugging Face</li><li>llama.cpp</li>
  <li>YOLO</li><li>SAM</li><li>GroundingDINO</li><li>Depth Anything</li>
  <li>SAM 3D</li><li>ReconViaGen</li><li>Pixal3D</li>
  <li>EasyOCR</li><li>PaddleOCR</li><li>OpenCV</li>
  <li>Qwen</li><li>Gemma</li><li>DeepSeek</li><li>ComfyUI</li>
  <li>Blender</li><li>Claude Code</li><li>OpenCode</li>
</ul>

## Outside of client work

I keep a personal automation hub running the collection of Python tools I have built over the years, and I test new open weight models as they come out, mostly to see what they make practical that was not practical before.

[Get in touch]({{ "/contact/" | relative_url }}) if you want to talk about a project.
