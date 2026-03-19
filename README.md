# TrueShine Cleaning - HTML/CSS/JS Website

This is the pure HTML, CSS, and JavaScript version of the TrueShine Cleaning website.

## File Structure

```
/public/
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page
├── pricing.html            # Pricing page
├── contact.html            # Contact page
├── faq.html                # FAQ page
├── privacy-policy.html     # Privacy Policy
├── terms-and-conditions.html # Terms & Conditions
├── disclaimer.html         # Disclaimer
├── cookie-policy.html      # Cookie Policy
├── styles/
│   ├── main.css           # Global styles
│   ├── home.css           # Home page styles
│   ├── about.css          # About page styles
│   ├── services.css       # Services page styles
│   ├── pricing.css        # Pricing page styles
│   ├── contact.css        # Contact page styles
│   ├── faq.css            # FAQ page styles
│   └── legal.css          # Legal pages styles
└── scripts/
    ├── main.js            # Global JavaScript
    ├── home.js            # Home page scripts
    ├── contact.js         # Contact page scripts
    └── faq.js             # FAQ page scripts
```

## Features

- **Pure HTML/CSS/JS**: No build tools or frameworks required
- **Responsive Design**: Mobile-first approach
- **Icons**: Using Lucide icons via CDN
- **Forms**: Contact and quote forms with validation
- **Modals**: Quote request modal
- **Navigation**: Sticky header with mobile menu
- **SEO**: Proper meta tags and semantic HTML

## How to Use

1. Open any HTML file in a web browser
2. All pages are linked together via navigation
3. Forms are functional with client-side validation
4. No server required for basic functionality

## Page Templates

Each page follows this structure:

1. **Header**: Navigation bar (consistent across all pages)
2. **Hero Section**: Page-specific banner
3. **Content Sections**: Main page content
4. **CTA Section**: Call-to-action (optional)
5. **Footer**: Contact info and links (consistent across all pages)

## Customization

### Colors
Edit the CSS variables in `main.css`:
```css
:root {
    --color-blue-600: #2563eb;
    --color-green-600: #16a34a;
    /* etc. */
}
```

### Content
Edit the HTML files directly to change text, images, and layout.

### Forms
Form submissions are currently handled with JavaScript console.log().
To connect to a backend:
1. Add your API endpoint
2. Modify the form submission handlers in the JavaScript files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images from Unsplash
- Minimal JavaScript
- CSS is modular and cached
- Icons loaded from CDN

## Deployment

Simply upload all files to any web hosting service:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting

No build process required!
