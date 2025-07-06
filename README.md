# 🌐 TheWealthPoint GeoSense – Web App

This is the frontend web application for the **Thewealthpoint GeoSense**, built using React, Material UI, and Leaflet. It allows users to explore, evaluate, and visualise optimal business locations based on population and competitor data.

## 🛠️ Tech Stack

- React (Vite)
- TypeScript
- Material UI (MUI)
- React Leaflet

## 🚀 Features

- Set number of desired business locations (up to 500)
- Select competitor data by week (Week 1 or Week 2)
- Toggle scoring metrics: population, distance to competitor, and density
- View results on interactive map with:
  - Markers
  - Detail drawer (per OA)
  - Animated map fly-to
- Toggle heatmap overlay based on population

## 📦 Installation

1. **Install dependencies**

```bash
npm install
```

2. **Start the dev server**

```bash
npm run dev
```

3. Open in browser:

```
http://localhost:5173
```

Make sure the FastAPI backend is running on `http://localhost:8000`.

## 📃 License

This project is for technical demonstration purposes only.
