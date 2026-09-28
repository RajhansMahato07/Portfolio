# Rajhans Mahato — Futuristic Developer Portfolio

A modern, minimal, dark-themed developer portfolio for **Rajhans Mahato**, Full Stack Developer and B.Tech Information Technology student at Bengal College of Engineering & Technology, Durgapur.

![Portfolio Preview Banner](https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop)

---

## ⚡ Core Features & Architectural Highlights

1. **Futuristic 3D WebGL Background (`Three.js`)**:
   - Floating wireframe geometries (torus, icosahedron, octahedron, data block cubes).
   - High-density glowing digital particle cloud with cyan (`#06b6d4`) and electric blue (`#3b82f6`) lighting.
   - Smooth mouse parallax and scroll tracking.
   - Built-in `prefers-reduced-motion` detection and mobile performance scaling.

2. **Clean, Authentic Information Architecture**:
   - **Zero fake achievements or falsified claims**: strictly reflects authentic education, skills, and documentation.
   - **Hero Section**: Quick terminal status badge, direct GitHub link, CV download, and quick contact pills.
   - **About Section**: Core focus areas, engineering pillars, and student profile.
   - **Education Timeline**: B.Tech in IT (2023–2027) & Higher Secondary 12th (2022–2023).
   - **Skills Grid**: Organized by Frontend, Backend, Database, Languages, and Ecosystem. No arbitrary percentages.
   - **Experience & Internship**: Pre-configured with the **Edu Tantr (VDT EDU TANTR VENTURES PVT LTD)** 3-month AI & ML Training & Internship offer details (Ref: `IOL-EDUJ1632`). Includes clear editable fields for future roles.
   - **Certificates Gallery**: Real certificate previews (`cert1.jpeg` and `cert2.jpeg`) from `d:\project\certificate\`. Interactive inspection modal, file download, and in-browser import capability.
   - **Upcoming Projects**: Dedicated pipeline showing future projects (*CloudDev Workspace*, *DevPulse*, *NexusAPI*) with disabled "Coming Soon" demo buttons and a full **Project Detail Architecture Blueprint System**.
   - **Live GitHub Integration**: Direct profile card with asynchronous repository telemetry from `@RajhansMahato07`.
   - **Contact & Direct Actions**: Form with client validation, `mailto:` integration, direct phone link, and direct CV download (`Rajhans_Mahato_CV.pdf`).

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

The application is configured to run at `http://127.0.0.1:5173/`.

---

## 📝 Customization & Data Management

All portfolio content is decoupled and located in one clean file:
👉 **[`src/data/portfolioData.ts`](file:///d:/project/src/data/portfolioData.ts)**

- Update social links, bio, or contact information.
- Add real projects by simply changing `status: 'Completed'` and providing a live demo URL.
- Drop new certificate files into `public/certificates/` or use the browser "Import Certificate" button.
- Replace `public/Rajhans_Mahato_CV.pdf` with any updated PDF resume anytime.
