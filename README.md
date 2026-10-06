# Rajhans Mahato — Developer Portfolio

A modern, minimal, dark-themed developer portfolio for **Rajhans Mahato**, Web Developer and B.Tech Information Technology student at Bengal College of Engineering and Technology, Durgapur.

---

## ⚡ Core Highlights & Resume Alignment

1. **Header & Profile**:
   - Web Developer | B.Tech Information Technology
   - Location: Dhanbad, Jharkhand
   - Phone: +91 7979044117
   - Email: rajhansmahato1210@gmail.com
   - GitHub: [github.com/RajhansMahato07](https://github.com/RajhansMahato07)

2. **Resume Download**:
   - One-click instant download of the official resume (`Rajhans_Mahato_Resume.pdf`).
   - Automatically regenerated during build time via `node generate_resume_pdf.js`.
   - Inlined as Base64 data URI for offline support and also served statically from `dist/` and `public/`.

3. **Featured Projects**:
   - **ShopEase** — Responsive E-Commerce Web Application (React.js, Node.js, Express.js, MongoDB, Bootstrap, REST APIs).
   - **StudentHub** — Student Management & Notice Portal (React.js, Node.js, Express.js, MongoDB, CRUD, REST APIs).

4. **Technical Skills & Core Competencies**:
   - Languages: HTML5, CSS3, JavaScript, C, Java, Python, SQL
   - Frontend: React.js, Bootstrap, Responsive Web Design, DOM Manipulation
   - Backend: Node.js, Express.js, REST APIs
   - Database: MongoDB, MySQL/SQL
   - Tools: Git, GitHub, VS Code, npm
   - Core CS: OOP, DBMS, Data Structures, Operating Systems, Computer Networks
   - Core Competencies: Responsive Web Development, REST API Integration, CRUD Applications, Version Control, Problem Solving, Team Collaboration

5. **Internship & Education**:
   - **EDU TANTR** — AI/ML Intern (Aug 2025 – Nov 2025).
   - **B.Tech in Information Technology** — Bengal College of Engineering and Technology, Durgapur (2023 – 2027).
   - **Class XII** — DGSS Inter College Bandgora, Bokaro (2023, 71%).
   - **Class X** — TATA DAV School (2019, 70%).

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **3D Graphics & WebGL**: Three.js
- **Styling**: Tailwind CSS + Custom Glassmorphism tokens
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Production build
npm run build
```

---

## 🌐 Netlify Deployment Guide

This project is pre-configured with `netlify.toml` and `public/_redirects` for 100% production-ready Netlify deployment.

### Method 1: Deploy via GitHub (Recommended)
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Production ready portfolio with resume"
   git push origin main
   ```
2. Go to [Netlify](https://app.netlify.com/) and click **"Add new site"** -> **"Import an existing project"**.
3. Select your GitHub repository (`RajhansMahato07/Portfolio`).
4. Netlify will automatically detect:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**. Netlify will build and give you a live production URL!

### Method 2: Netlify Drop (Instant Drag & Drop)
1. Run `npm run build` locally.
2. Go to [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop the `dist` folder directly into the browser window.
4. Your site goes live instantly with your resume and all assets working perfectly!
