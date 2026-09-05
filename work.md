---
layout: default
title: Work
permalink: /work/
---

# Work

<p class="section-intro">A selection of projects across 3D pipelines, AI tooling, and automation. Each one links to a short write up of the problem, what I built, and the result.</p>

<div class="card-grid">
  {% assign projects = site.projects | sort: "order" %}
  {% for project in projects %}
  <div class="card">
    <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    <p>{{ project.summary }}</p>
    <ul class="tag-list">
      {% for tool in project.tools limit: 3 %}<li>{{ tool }}</li>{% endfor %}
    </ul>
  </div>
  {% endfor %}
</div>

## Other work

<ul class="other-work-list">
  <li><strong>LinkedIn Job Scraper.</strong> Asynchronous tool that reads company names and locations from an Excel file and collects structured job posting data in parallel.</li>
  <li><strong>Laravel Upgrade, Version 6 to 12.</strong> Upgraded a production Laravel application across six major versions, migrated the frontend build from Mix to Vite, and ported the Vue 2 codebase to Vue 3.</li>
  <li><strong>Industry association CRM and ERP.</strong> A hybrid CRM and ERP application for membership management, financial transactions, and document issuance, built with Laravel 12, Vue 2, and MariaDB, alongside a full overhaul of the association's public website.</li>
</ul>
