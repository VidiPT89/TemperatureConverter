// Language Support
const i18n = {
    pt: {
        headerTitle: '🌡️ Conversor de Temperatura',
        headerSubtitle: 'Converta entre Celsius, Fahrenheit e Kelvin',
        labelCelsius: 'Celsius (°C)',
        labelFahrenheit: 'Fahrenheit (°F)',
        labelKelvin: 'Kelvin (K)',
        indicatorDefault: '👉 Digite uma temperatura para ver a indicação',
        infoTitle: '📊 Referências Comuns:',
        ref1: ' = Ponto de congelamento da água',
        ref2: ' = Ponto de ebulição da água',
        ref3: ' = Temperatura corporal humana',
        ref4: ' = -40°F (mesma temperatura)',
        splashSubtitle: 'Converta entre Celsius, Fahrenheit e Kelvin',
        splashCreator: 'Desenvolvido por David Arsénio Martins',
        footerCreator: 'Desenvolvido por David Arsénio Martins',
        footerSite: '🌐 ividi.dev',
        footerGithub: '💻 GitHub',
        tempIndicators: {
            extremeCold: '❄️ Extremamente frio! Congelante!',
            veryCold: '🥶 Muito frio! Abaixo do ponto de congelamento da água',
            cold: '❄️ Frio! Temperatura baixa',
            moderate: '😊 Moderado! Temperatura confortável',
            warm: '🔥 Quente! Temperatura elevada',
            veryHot: '🌡️ MUITO QUENTE! Muito elevada'
        },
        corpuIndicators: {
            hypothermia: '🥶 Hipotermia! Perigo!',
            low: '❄️ Temperatura baixa',
            normal: '✅ Normal! Saudável',
            feverMild: '🤒 Febre leve',
            feverModerate: '🌡️ Febre moderada',
            feverHigh: '🚨 Febre alta! Procure ajuda médica!'
        }
    },
    en: {
        headerTitle: '🌡️ Temperature Converter',
        headerSubtitle: 'Convert between Celsius, Fahrenheit and Kelvin',
        labelCelsius: 'Celsius (°C)',
        labelFahrenheit: 'Fahrenheit (°F)',
        labelKelvin: 'Kelvin (K)',
        indicatorDefault: '👉 Enter a temperature to see the indication',
        infoTitle: '📊 Common References:',
        ref1: ' = Water freezing point',
        ref2: ' = Water boiling point',
        ref3: ' = Human body temperature',
        ref4: ' = Same temperature in both scales',
        splashSubtitle: 'Convert between Celsius, Fahrenheit and Kelvin',
        splashCreator: 'Developed by David Arsénio Martins',
        footerCreator: 'Developed by David Arsénio Martins',
        footerSite: '🌐 ividi.dev',
        footerGithub: '💻 GitHub',
        tempIndicators: {
            extremeCold: '❄️ Extremely cold! Freezing!',
            veryCold: '🥶 Very cold! Below water freezing point',
            cold: '❄️ Cold! Low temperature',
            moderate: '😊 Moderate! Comfortable temperature',
            warm: '🔥 Warm! Elevated temperature',
            veryHot: '🌡️ VERY HOT! Very elevated'
        },
        corpuIndicators: {
            hypothermia: '🥶 Hypothermia! Danger!',
            low: '❄️ Low temperature',
            normal: '✅ Normal! Healthy',
            feverMild: '🤒 Mild fever',
            feverModerate: '🌡️ Moderate fever',
            feverHigh: '🚨 High fever! Seek medical help!'
        }
    }
};

let currentLanguage = localStorage.getItem('tempConverterLanguage') || 'pt';
let currentMode = localStorage.getItem('tempConverterMode') || 'ambiente';

// DOM Elements
const splashScreen = document.getElementById('splashScreen');
const appContainer = document.getElementById('appContainer');
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const indicatorText = document.getElementById('temperatureIndicator');
const langPTBtn = document.getElementById('langPT');
const langENBtn = document.getElementById('langEN');
const swapBtn = document.getElementById('swapBtn');
const swapBtn2 = document.getElementById('swapBtn2');
const modeAmbienteBtn = document.getElementById('modeAmbiente');
const modeCorpoBtn = document.getElementById('modeCorpo');

// Conversion functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

// Update UI language
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('tempConverterLanguage', lang);

    // Update header
    document.getElementById('headerTitle').textContent = i18n[lang].headerTitle;
    document.getElementById('headerSubtitle').textContent = i18n[lang].headerSubtitle;

    // Update labels
    document.getElementById('labelCelsius').textContent = i18n[lang].labelCelsius;
    document.getElementById('labelFahrenheit').textContent = i18n[lang].labelFahrenheit;
    document.getElementById('labelKelvin').textContent = i18n[lang].labelKelvin;

    // Update info section
    document.getElementById('infoTitle').textContent = i18n[lang].infoTitle;
    document.getElementById('ref1').textContent = i18n[lang].ref1;
    document.getElementById('ref2').textContent = i18n[lang].ref2;
    document.getElementById('ref3').textContent = i18n[lang].ref3;
    document.getElementById('ref4').textContent = i18n[lang].ref4;

    // Update footer
    document.getElementById('footerCreator').textContent = i18n[lang].footerCreator;
    document.getElementById('footerSite').textContent = i18n[lang].footerSite;
    document.getElementById('footerGithub').textContent = i18n[lang].footerGithub;

    // Update splash screen
    document.getElementById('splashSubtitle').textContent = i18n[lang].splashSubtitle;
    document.getElementById('splashCreator').textContent = i18n[lang].splashCreator;

    // Update buttons
    langPTBtn.classList.toggle('active', lang === 'pt');
    langENBtn.classList.toggle('active', lang === 'en');

    // Clear indicator if no temperature entered
    if (!celsiusInput.value && !fahrenheitInput.value && !kelvinInput.value) {
        indicatorText.textContent = i18n[lang].indicatorDefault;
    }
}

// Update temperature indicator based on Celsius value
function updateIndicator(celsius) {
    let indicator = '';
    let className = '';
    
    if (currentMode === 'corpo') {
        // Body temperature indicators
        const temps = i18n[currentLanguage].corpuIndicators;
        if (celsius < 35) {
            indicator = temps.hypothermia;
            className = 'very-cold';
        } else if (celsius < 36.5) {
            indicator = temps.low;
            className = 'cold';
        } else if (celsius < 37.5) {
            indicator = temps.normal;
            className = 'moderate';
        } else if (celsius < 38.5) {
            indicator = temps.feverMild;
            className = 'warm';
        } else if (celsius < 39.5) {
            indicator = temps.feverModerate;
            className = 'warm';
        } else {
            indicator = temps.feverHigh;
            className = 'very-hot';
        }
    } else {
        // Ambient temperature indicators
        const temps = i18n[currentLanguage].tempIndicators;
        if (celsius < -40) {
            indicator = temps.extremeCold;
            className = 'very-cold';
        } else if (celsius < 0) {
            indicator = temps.veryCold;
            className = 'very-cold';
        } else if (celsius < 15) {
            indicator = temps.cold;
            className = 'cold';
        } else if (celsius < 25) {
            indicator = temps.moderate;
            className = 'moderate';
        } else if (celsius < 35) {
            indicator = temps.warm;
            className = 'warm';
        } else {
            indicator = temps.veryHot;
            className = 'very-hot';
        }
    }

    indicatorText.textContent = indicator;
    indicatorText.className = `indicator-text ${className} updated`;
    
    // Remove animation class after animation completes
    setTimeout(() => {
        indicatorText.classList.remove('updated');
    }, 400);
}

// Handle Celsius input
celsiusInput.addEventListener('input', (e) => {
    const celsius = parseFloat(e.target.value);
    
    if (isNaN(celsius) || e.target.value === '') {
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        indicatorText.textContent = i18n[currentLanguage].indicatorDefault;
        indicatorText.className = 'indicator-text';
        return;
    }

    const fahrenheit = celsiusToFahrenheit(celsius);
    const kelvin = celsiusToKelvin(celsius);

    fahrenheitInput.value = fahrenheit.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);

    updateIndicator(celsius);
});

// Handle Fahrenheit input
fahrenheitInput.addEventListener('input', (e) => {
    const fahrenheit = parseFloat(e.target.value);
    
    if (isNaN(fahrenheit) || e.target.value === '') {
        celsiusInput.value = '';
        kelvinInput.value = '';
        indicatorText.textContent = i18n[currentLanguage].indicatorDefault;
        indicatorText.className = 'indicator-text';
        return;
    }

    const celsius = fahrenheitToCelsius(fahrenheit);
    const kelvin = celsiusToKelvin(celsius);

    celsiusInput.value = celsius.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);

    updateIndicator(celsius);
});

// Handle Kelvin input
kelvinInput.addEventListener('input', (e) => {
    const kelvin = parseFloat(e.target.value);
    
    if (isNaN(kelvin) || e.target.value === '') {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        indicatorText.textContent = i18n[currentLanguage].indicatorDefault;
        indicatorText.className = 'indicator-text';
        return;
    }

    const celsius = kelvinToCelsius(kelvin);
    const fahrenheit = celsiusToFahrenheit(celsius);

    celsiusInput.value = celsius.toFixed(2);
    fahrenheitInput.value = fahrenheit.toFixed(2);

    updateIndicator(celsius);
});

// Swap button 1: Celsius <-> Fahrenheit
swapBtn.addEventListener('click', () => {
    const tempC = celsiusInput.value;
    const tempF = fahrenheitInput.value;
    
    celsiusInput.value = tempF;
    fahrenheitInput.value = tempC;
    
    if (tempF && !isNaN(parseFloat(tempF))) {
        celsiusInput.dispatchEvent(new Event('input'));
    } else {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        indicatorText.textContent = i18n[currentLanguage].indicatorDefault;
        indicatorText.className = 'indicator-text';
    }
});

// Swap button 2: Fahrenheit <-> Kelvin
swapBtn2.addEventListener('click', () => {
    const tempF = fahrenheitInput.value;
    const tempK = kelvinInput.value;
    
    fahrenheitInput.value = tempK;
    kelvinInput.value = tempF;
    
    if (tempK && !isNaN(parseFloat(tempK))) {
        kelvinInput.dispatchEvent(new Event('input'));
    } else {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        indicatorText.textContent = i18n[currentLanguage].indicatorDefault;
        indicatorText.className = 'indicator-text';
    }
});

// Language toggle buttons
langPTBtn.addEventListener('click', () => {
    updateLanguage('pt');
});

langENBtn.addEventListener('click', () => {
    updateLanguage('en');
});

// Mode toggle buttons
modeAmbienteBtn.addEventListener('click', () => {
    currentMode = 'ambiente';
    localStorage.setItem('tempConverterMode', 'ambiente');
    modeAmbienteBtn.classList.add('active');
    modeCorpoBtn.classList.remove('active');
    
    // Recalculate indicator if there's a temperature
    if (celsiusInput.value && !isNaN(parseFloat(celsiusInput.value))) {
        updateIndicator(parseFloat(celsiusInput.value));
    }
});

modeCorpoBtn.addEventListener('click', () => {
    currentMode = 'corpo';
    localStorage.setItem('tempConverterMode', 'corpo');
    modeCorpoBtn.classList.add('active');
    modeAmbienteBtn.classList.remove('active');
    
    // Recalculate indicator if there's a temperature
    if (celsiusInput.value && !isNaN(parseFloat(celsiusInput.value))) {
        updateIndicator(parseFloat(celsiusInput.value));
    }
});

// Clear all on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        indicatorText.textContent = i18n[currentLanguage].indicatorDefault;
        indicatorText.className = 'indicator-text';
    }
});

// Initialize splash screen and app
function initApp() {
    // Update language on load
    updateLanguage(currentLanguage);
    
    // Initialize mode buttons
    if (currentMode === 'corpo') {
        modeCorpoBtn.classList.add('active');
        modeAmbienteBtn.classList.remove('active');
    } else {
        modeAmbienteBtn.classList.add('active');
        modeCorpoBtn.classList.remove('active');
    }

    // Hide splash screen after 2.5 seconds
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        appContainer.classList.remove('hidden');
    }, 2500);
}

// Start the app
document.addEventListener('DOMContentLoaded', initApp);
