# keenanclough.ai

**Human Ambition x Autonomous Systems**

This repository contains the source code for [keenanclough.ai](https://keenanclough.ai), my personal command centre, portfolio, and research log. It sits at the intersection of public policy, digital operations, and frontier data science.

## The Architecture

This site is built for high performance and modularity, acting as a unified hub for both polished broadcasts and technical lab notes.

* **Framework:** [Astro](https://astro.build/) (Static Site Generation)
* **Hosting & CI/CD:** [Cloudflare Pages](https://pages.cloudflare.com/) 
* **Deployment:** Serverless Edge network via Cloudflare Workers
* **Styling:** Custom native CSS variables matching the core brand palette (Slate Grey & Turquoise-Green)

## Local Development

To run this project locally and test new widgets or research notes:

1. Clone the repository:
   ```git clone [https://github.com/amounderness/keenan-ai.git](https://github.com/amounderness/keenan-ai.git)```
2. Navigate into the directory:
   ```cd keenan-ai```
3. Install dependencies:
   ```npm install```
4. Start the local development server:
   ```npm run dev```

The site will be available at ```http://localhost:4321```.

## Structure

- ```/src/pages``` - Core routing (Home, About, Projects)
- ```/src/content/blog/``` - The "Notebooks" for technical research and exploration
- ```/src/components``` - Reusable Astro components and global SVG assets.
