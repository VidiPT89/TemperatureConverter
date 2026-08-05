# 🌡️ Temperature Converter

A modern, elegant temperature converter with a polished glassmorphism interface, smooth animations and a bilingual experience.

Temperature Converter is a lightweight web app that converts temperatures between Celsius, Fahrenheit and Kelvin with ease. It combines a premium animated interface, real-time conversions, temperature indicators, and a smooth, professional experience, all built with vanilla HTML, CSS and JavaScript.

## ✨ Main Features

• 🔄 Bidirectional conversions — Celsius ↔ Fahrenheit ↔ Kelvin in real-time
• 🌡️ Temperature indicators — Visual feedback showing cold/moderate/hot conditions with emojis
• ⌨️ Full keyboard support (digits, decimal point, `Enter`, `Backspace`, `Esc`)
• 🌗 Elegant glassmorphism design with smooth animations and micro-interactions
• 🌍 One-click language toggle between European Portuguese and English, remembered between visits
• 🎬 Smooth animations — floating gradient orbs, animated splash screen, ripple effects, staggered entrance
• 📱 Fully responsive layout, from mobile to desktop
• 💾 Preferences (language) saved locally and restored automatically
• ↩️ Swap buttons — Quickly rotate between temperature scales

## 🛠️ Technologies

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🧱 Project Structure

```
TemperatureConverter/
├── index.html          # Page structure, inputs, indicators and language toggle
├── styles.css          # Glassmorphism, animations and responsive layout
├── script.js           # Conversion logic, i18n and interactions
├── LICENSE             # MIT License
└── README.md           # Project documentation
```

## ▶️ How to Run

### Option 1: Direct in Browser
Simply open `index.html` in your browser — no setup required.

### Option 2: Local Server
```bash
# Clone the repository
git clone https://github.com/VidiPT89/TemperatureConverter.git

# Navigate to the directory
cd TemperatureConverter

# Start a local server
python3 -m http.server 8000
# or
npx http-server

# Open in browser
http://127.0.0.1:8000/
```

No build step, no dependencies — it's static HTML/CSS/JS and can also be served with any static file server.

## 📊 Temperature Ranges

The app provides visual feedback based on temperature:

| Temperature | Indicator | Emoji |
|-------------|-----------|-------|
| < -40°C | Extremely cold! Freezing! | ❄️ |
| -40°C to 0°C | Very cold! Below freezing point | 🥶 |
| 0°C to 15°C | Cold! Low temperature | ❄️ |
| 15°C to 25°C | Moderate! Comfortable temperature | 😊 |
| 25°C to 35°C | Warm! Elevated temperature | 🔥 |
| > 35°C | VERY HOT! Extremely dangerous! | 🌡️ |

## 🌍 Common Reference Points

- **0°C** = Water freezing point (32°F)
- **100°C** = Water boiling point (212°F)
- **37°C** = Human body temperature (98.6°F)
- **-40°C** = -40°F (same value in both scales)

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Digits 0-9` | Enter a temperature value |
| `.` or `,` | Decimal point |
| `Backspace` | Delete last digit |
| `Esc` | Clear all fields |

## 🧩 Project Highlights

This project focuses on delivering a smooth and modern experience while keeping the implementation simple, lightweight and easy to understand. Language preference is stored in `localStorage`, so it persists between visits.

The splash screen provides an elegant introduction before the main interface loads, creating a polished first impression.

## 📄 License

This project is licensed under the MIT License. See [LICENSE](https://github.com/VidiPT89/TemperatureConverter/blob/main/LICENSE) for more information.

---

Developed by David Arsénio Martins 🌐 [ividi.dev](https://ividi.dev/) · 💻 [github.com/VidiPT89](https://github.com/VidiPT89/)
