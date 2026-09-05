---
layout: default
---

<div class="hero">
  <img class="hero-photo" src="{{ "/assets/images/danyal-photo.jpg" | relative_url }}" alt="Danyal Zia Khan">
  <div class="hero-text">
    <h1>Danyal Zia Khan</h1>
    <p class="hero-role">Python developer building automation, 3D reconstruction, and AI systems that replace manual work</p>
    <p class="hero-meta">Based in Pakistan <img class="flag-inline" src="{{ "/assets/images/pk-flag.svg" | relative_url }}" alt="Pakistan" width="21" height="14"> <span class="sep">&middot;</span> Working with clients worldwide</p>
  </div>
</div>

<p class="lede">Most of what I build exists because nothing off the shelf did the job. Pipelines that turn blueprints and reference images into scale accurate 3D environments. Scrapers that pull data from sites built to stop exactly that. AI models running on a client's own hardware instead of someone else's API. Six plus years of Python, and more than 200 scrapers delivered.</p>

<div class="cta-row">
  <a class="btn btn-primary" href="{{ "/contact/" | relative_url }}">Get in touch</a>
  <a class="btn btn-secondary" href="{{ "/work/" | relative_url }}">See my work</a>
</div>

## What I do

- **3D reconstruction and parametric modeling.** Blender addons and Python tools that turn blueprint measurements and reference images into scale accurate environment structures such as towers, bridges, and roads. Producing a variant takes a change of input values instead of a modeling session, and AI assisted passes check the geometry for faults before it reaches an artist.
- **AI assisted automation.** Systems built on open weight models and run locally, so client data stays on client hardware: image understanding, object detection and dimension estimation, OCR across scans and technical drawings, and reasoning through llama.cpp.
- **Web scraping.** A Playwright based framework covering authentication, anti bot handling, proxy rotation, and parallel collection, developed across more than 200 delivered scrapers.
- **Process automation.** Python programs that absorb the repetitive work: large Excel and tabular processing, grouping and aggregation, data cleanup, bulk file handling, and scheduled jobs that run without anyone remembering to start them.

[See all services &rarr;]({{ "/services/" | relative_url }})

## Recent work

<div class="card-grid">
  {% assign featured = site.projects | where: "featured", true | sort: "order" %}
  {% for project in featured limit: 4 %}
  <div class="card">
    <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    <p>{{ project.summary }}</p>
    <ul class="tag-list">
      {% for tool in project.tools limit: 3 %}<li>{{ tool }}</li>{% endfor %}
    </ul>
  </div>
  {% endfor %}
</div>

[View the full case studies &rarr;]({{ "/work/" | relative_url }})
