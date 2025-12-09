# OrientLamp Frontend

OrientLamp is an innovative educational platform designed to help students in Morocco with university orientation, providing comprehensive information about higher education institutions, personalized guidance, and an AI-powered chatbot assistant.

## 🚀 Features

- **School Directory**: Browse and search Moroccan universities and engineering schools
- **AI Chat Assistant**: Get personalized guidance from OrientIA
- **Dark/Light Mode**: Smooth theme switching with persistent preferences
- **Responsive Design**: Optimized for desktop and mobile devices
- **Collapsible Sidebar**: Minimize sidebar to icon-only mode for more screen space
- **Interactive Dashboard**: Track your orientation journey

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16.x or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git**

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yassinelamsaaf/orientLamp-frontend.git
cd orientLamp-frontend
```

### 2. Install Dependencies

```bash
npm install
```

Or if you're using yarn:

```bash
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173` (or another port if 5173 is in use).

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
orientLamp-frontend/
├── public/
│   └── images/           # Static images and logos
├── src/
│   ├── components/       # Reusable React components
│   │   ├── ui/          # UI components (buttons, cards, etc.)
│   │   ├── Layout.jsx   # Main layout wrapper
│   │   ├── Sidebar.jsx  # Navigation sidebar
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── ChatAI.jsx
│   │   ├── Search.jsx
│   │   └── ...
│   ├── hooks/           # Custom React hooks
│   │   └── useTheme.jsx # Theme management hook
│   ├── lib/             # Utility functions
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Navigation
- **Tailwind CSS v4** - Styling framework
- **Lucide React** - Icon library

## 🌙 Features Guide

### Dark Mode
Toggle between light and dark themes using:
- The switch in the **Sidebar** (bottom section)
- The switch in **Settings** page

Your preference is saved in browser storage.

### Collapsible Sidebar
- Click the chevron button on the sidebar edge to collapse/expand
- In collapsed mode, only icons are shown
- Navigation works seamlessly in both modes
- State persists across page navigation

### AI Chatbot
Navigate to **Chat AI** page to interact with OrientIA for:
- Information about Moroccan universities
- Orientation guidance
- Post-baccalaureate options
- Program recommendations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

- Yassine Lamsaaf - [@yassinelamsaaf](https://github.com/yassinelamsaaf)

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ for Moroccan students
