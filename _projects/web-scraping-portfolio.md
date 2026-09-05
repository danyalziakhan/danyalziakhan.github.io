---
title: Advanced Web Scraping Portfolio
summary: 200+ custom scrapers delivered for clients worldwide, from simple static pages to sites built to resist automation.
tools: [Playwright, BeautifulSoup, pandas, aiohttp]
featured: true
order: 6
---

## The problem

Clients across Korean domestic markets and international ecommerce need data that only exists on somebody else's website. The difficulty varies enormously. Some targets are static pages a simple parser handles in an afternoon. Others sit behind logins, render everything through JavaScript, rate limit aggressively, and actively try to detect automation.

## What I built

A Playwright based framework built up across these projects, so each job starts from something proven rather than a blank file. It covers login and session handling, network interception to pull data straight from the API a page calls, infinite scroll and lazy loading, proxy rotation, and parallel collection for jobs too large to run one page at a time. Parsing and post processing run through BeautifulSoup and pandas, since collected data is rarely useful in the shape it arrives.

Each scraper is still fitted to its target. Sites differ too much for a generic crawler to do well on any of them, and a scraper written without regard for how a particular site behaves tends to break the first time that site changes.

## The result

Over 200 custom scrapers delivered, from single page extractors to large parallel collection systems. When a site changes, the shared framework absorbs most of the impact, so maintenance is usually a small fix and not a rewrite.
