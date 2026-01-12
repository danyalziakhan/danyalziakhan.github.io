---
layout: default
title: Home
---

# Hi, I'm Danyal 🙂

I'm a software engineer who builds **Python automation, RPA solutions, AI powered tools, 3D processing pipelines, web scrapers, and full stack systems** that save time and cut manual effort. I also create **tutorials and technical writing** that simplify complex topics for others.

I personally craft the code for each project and tailor it to the client's exact needs. Recently, my work has focused on **applied AI and 3D automation**, including production-grade Blender addons used in a **digital twin (3D visualization) pipeline** at a company partly owned by **Hexagon**. I build systems that connect **AI models, 3D geometry processing, and automation scripts** into real workflows that people actually use in production. The goal is always the same: remove manual work, speed things up, and make complex pipelines easier for teams to run.

## What I Do

- **AI-to-Blender Digital Twin Pipeline**  
  Built a production pipeline for a **3D visualization (digital twin) company partly owned by Hexagon** where **Trellis AI generated 3D models** are created from reference images and then passed into my custom **Blender addons and scripts**. These tools clean up messy geometry, remove extra triangles, run voxel remeshing and QuadriFlow remeshing, and turn triangle heavy meshes into clean quad based models that artists can easily edit, texture, and use in the final digital twin scenes while keeping the original shape and detail. This pipeline saves hours of manual cleanup on every model and makes AI generated 3D assets practical for real production.

- **AI Powered Automation & Agentic Tools**  
  I design and implement practical AI systems using modern open weight models such as Qwen3 VL, Qwen Image Edit, Qwen3 Coder, and related tooling. This includes image understanding, decision making pipelines, Excel driven AI workflows, and agent style programs that combine reasoning, OCR, and visual analysis to replace slow manual processes.

- **ComfyUI Based Image Generation & Editing**  
  I am highly experienced with ComfyUI and build comprehensive, reusable workflows for image generation and image editing. I work with models such as Z Image Turbo and FLUX.1 dev for image generation, and Qwen Image Edit and FLUX.1 Kontext dev for advanced image editing tasks. My workflows cover thumbnail generation for platforms like Fiverr and YouTube, realistic character generation, background removal, scene replacement, style transfer, and other image transformations. I can create new workflows from scratch or modify existing ones to handle complex, custom requirements.

- **Advanced Web Scraping**  
  I build Python-based scrapers for anything from simple static pages to highly dynamic sites, handling authentication, anti-bot measures, and proxy rotation. My Playwright framework supports parallel scraping, login automation, network interception, and infinite scroll for large-scale data collection.

- **Python Script Debugging**  
  I quickly find and fix bugs or logic issues in any Python code, ensuring each change is clearly explained through comments.

- **Custom Process Automation**  
  I create Python programs that automate repetitive work such as data entry, bulk file operations, scheduled tasks, and complex web or desktop workflows, saving time and reducing manual effort.

- **Programming Tutorials & Documentation**  
  I write clear, step-by-step tutorials for blogs and course overviews, as well as API documentation for developer portals and official resources. Content is original, well-structured, and tailored to your audience, covering Python, JavaScript, FastAPI, React, and more.

## Recent Projects

- **AI-to-Blender Digital Twin Pipeline**
  Developed a production pipeline for a **3D visualization (digital twin) company partially owned by Hexagon**. The workflow starts with **Trellis AI-generated 3D prototypes** created from reference images, which are then passed into my custom **Blender addons and scripts**.  
  These tools automatically **clean up messy geometry, remove excess triangles, perform voxel remeshing and QuadriFlow remeshing, and convert triangle-heavy meshes into clean quad-based topology**. The result is a **modeler-ready asset** that preserves the original shape and detail while being far easier and faster for artists to edit, texture, and integrate into the final digital twin scene.  
  This pipeline removes hours of manual cleanup from each model and makes AI-generated 3D assets practical for real production.

- **Product Similarity Search (AI Vision Based)**
  Built an AI driven product matching system using open weight vision language models. Initially experimented with CLIP based cosine similarity combined with OCR, but abandoned the approach due to accuracy and performance limitations. Switched to general purpose multimodal models such as Qwen2.5, Intern2V, and finally Qwen3 VL. The final system sends base product images and seller images directly to the Qwen3 VL 8B model via a llama.cpp server with an OpenAI compatible API, prompting the model to answer only yes or no if the products are the same. The model internally performs OCR and deep visual reasoning, recognizing attributes such as object type, materials, colors, and structure. The program reads an Excel file containing product images, processes each row through the model, and writes the final matching results back to a new Excel file automatically.

- **Reviews Scraping & Sales Ratio Analysis (AI Assisted)**
  Developed a scraping pipeline for Korean marketplaces including Coupang, Smart Store, and Musinsa. The system collects reviews, ratings, and review content for products listed in an input Excel file. Once scraping is complete, the resulting dataset is sent to the Qwen3 30B A3B model through llama.cpp, where the model analyzes review volume, average ratings, and sentiment to estimate relative sales ratios within each marketplace. The output highlights which products are likely selling more compared to others in the same market.

- **LinkedIn Job Scraper**
  Built an asynchronous LinkedIn job scraping tool that reads company names and locations from an Excel file. Each company name is used as a search query to collect all relevant job postings for the specified location. The scraper supports multiple companies in parallel and outputs structured job data including title, description, location, and posting URL into an Excel file.

- **Notification Listener Android App**
  Developed an Android service that captures phone notifications and forwards them as SMS in real time. Implemented battery-level alerts, app-ignore lists, and a foreground service for stable performance.

- **Depth Mesh Combiner**
  I built this as part of a 3D Sand Model project (inspired by the Augmented Reality Sandbox) to merge four different data streams into a single, clean image. The app has simple sliders to line up the depth sensors by tweaking margins and heights, so the contours look natural. Once everything's aligned, those settings can be saved as a transformation matrix, which makes the real-time adjustments much faster while the program runs.

- **ThrowViz (Throw Distance Visualization)**
  While working on the 3D Sand Model, I built a little Python tool to figure out how much area a laser projector would cover at different distances. You just give it the surface size, the distance from the projector to the surface, and the projector's throw ratio, and it shows you the projected coverage. It's handy for quickly testing the best mounting height or distance. For example, if you need a bigger projection area, it tells you how much farther back the projector should be.

- **Laravel upgrade (v6 → v12)**
  Upgraded a production Laravel application from version 6 to 12, modernizing all dependencies and modules. Migrated the frontend build system from Laravel Mix to Vite and ported the Vue 2 codebase to Vue 3 for improved performance and maintainability.

- **Pakistan Businessmen Association (PBA)**  
  Developed a hybrid CRM/ERP web application that streamlined the company's internal operations, enabling workflows to be managed by a small admin team (1–2 people). Key features included membership registration and management, financial transactions, document issuance and printing, blacklist and expense tracking, database backups, user management, and SMS/email notifications. Built with Laravel 12 (backend), Vue 2 (frontend), and MariaDB. In addition, I overhauled the association's existing website (originally built by other developers), modernizing it with the latest Bootstrap, fixing responsiveness issues, enhancing verification pages with new features, and resolving multiple bugs. Also built with Laravel 12, Vue 2, and MariaDB.

- **Distributed Application Manager**
  Built a full stack platform using FastAPI, WebSockets, and React to bring all of my Python automation tools under one roof. Instead of running scripts separately, this app lets you configure, run, and monitor them from a single web interface. It handles everything from crawlers and registration automation to image processors and Excel utilities. You can stream logs in real time, schedule tasks, and run multiple workflows in parallel. The idea was to turn a messy collection of scripts into a clean, scalable automation hub for internal use.

- **Advanced Web Scraping Portfolio**
  Delivered 200+ custom Python scrapers for clients worldwide, including Korean domestic markets and international e commerce platforms. Developed a custom Playwright based framework using BeautifulSoup, pandas, and aiohttp to bypass authentication barriers, anti bot systems, and IP restrictions.

- **Custom Python Automation Tools**
  Built RPA solutions for data entry, bulk file management, image processing and downloading, data cleaning and data post-processing, thumbnail generation, vinyl (LP) creation, and other desktop and web task automation, reducing manual workload for multiple businesses.

- **Technical Writing & Tutorials**  
  Wrote tutorials on programming fundamentals (such as C#, C++, etc.) and articles on frameworks (such as Angular, React, and Ionic, etc.), along with API documentation and course materials.

## Hire Me

I offer these services on [Fiverr](https://www.fiverr.com/danyalzia) with clear pricing and fast delivery.  
If a project needs something extra such as custom deployment, AI model integration, hosting configuration, or long term maintenance, I can take care of that as well. 🙂

## Contact

- **Email:** [danyalziakhan@gmail](mailto:danyalziakhan@gmail)
- **GitHub:** [github.com/danyalziakhan](https://github.com/danyalziakhan)
- **LinkedIn:** [linkedin.com/in/danyalziakhan](https://linkedin.com/in/danyalziakhan)
