---
layout: default
title: Blog
---

<!-- # Blog

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> —
      <small>{{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul> -->

# Archive

<ul>
  {% for post in site.archive %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> — 
      <small>{{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
