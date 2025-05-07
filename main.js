// Get the HTML element
document.documentElement.dir = 'rtl'; // Default direction for Arabic

// Create language data object
const languages = {
    ar: {
        direction: 'rtl',
        // Add your Arabic text content here
        welcome: 'مرحباً',
        home: 'الرئيسية',
        about: 'حول',
        contact: 'اتصل بنا'
    },
    en: {
        direction: 'ltr',
        // Add your English text content here
        welcome: 'Welcome',
        home: 'Home',
        about: 'About',
        contact: 'Contact'
    }
};

// Function to switch language
function switchLanguage(lang) {
    // Change direction
    document.documentElement.dir = languages[lang].direction;
    
    // Update text content
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = languages[lang][key];
    });
}

// Add click events to language buttons
document.getElementById('ar-btn').addEventListener('click', () => switchLanguage('ar'));
document.getElementById('en-btn').addEventListener('click', () => switchLanguage('en'));