---
title: Distributed Application Manager
summary: A full stack platform for running, scheduling, and monitoring a whole collection of automation tools from one place.
tools: [FastAPI, WebSockets, React]
featured: true
order: 5
---

## The problem

Years of building automation tools left me with dozens of separate Python programs. Each had its own entry point, its own configuration, and its own way of reporting that something had gone wrong. Running one meant remembering which script did what, opening a terminal, and watching it until it finished.

Managing the tools was turning into a bigger job than writing them, and anything that needs babysitting eventually stops getting used.

## What I built

A platform that brings all of them under a single interface. A FastAPI backend discovers and launches the individual tools, WebSockets stream their output in real time, and a React frontend handles running, scheduling, and monitoring.

Tasks run in parallel and report progress as they go, so a long scraping job and a batch image process can run at the same time without either becoming invisible. Scheduling is built in, which removed the last reason to start anything by hand. Logs stream live instead of landing in a file somewhere, so a job that fails halfway is something I notice while it is happening.

## The result

A folder of unrelated scripts became one automation hub. Adding a new tool now means registering it, not building another entry point around it, and anything already running can be checked without hunting for the terminal that started it.
