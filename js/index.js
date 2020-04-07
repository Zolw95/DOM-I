const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Loop
var nav = document.getElementsByTagName('nav')[0];
navItems = nav.getElementsByTagName('a');

for (i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent['nav']['nav-item-' + (i + 1)];
  navItems[i].style.color = 'green';
};

// Add New Element Using appendChild

function addItem(name) {
  let a = document.createElement('a');
  a.textContent = name;
  return a;
}
var newItem = nav.appendChild(addItem('Test'));
newItem.style.color = 'green';


// Add New Element Using prepend
var secondItem = nav.prepend(addItem('Home'));
document.getElementsByTagName('a')[0].style.color = 'green';

// Below code does not seem to work
// secondItem.style.color = 'green';


//navItems.forEach(el => el.setAttribute('id', 'nav-item-' + 1));

/*
var navServices = document.getElementsByTagName('a')[0]
navServices.setAttribute('id', 'nav-item-' + i + 1);
var navProduct = document.getElementsByTagName('a')[1];
navProduct.setAttribute('id', 'nav-item-2');
var navVision = document.getElementsByTagName('a')[2];
navVision.setAttribute('id', 'nav-item-3');
var navFeatures = document.getElementsByTagName('a')[3];
navFeatures.setAttribute('id', 'nav-item-4');
var navAbout = document.getElementsByTagName('a')[4];
navAbout.setAttribute('id', 'nav-item-5');
var navContact = document.getElementsByTagName('a')[5];
navContact.setAttribute('id', 'nav-item-6');
*/
// Add textContent to Each element
/*
document.getElementById('nav-item-1').textContent = 'Services';
document.getElementById('nav-item-2').textContent = 'Product';
document.getElementById('nav-item-3').textContent = 'Vision';
document.getElementById('nav-item-4').textContent = 'Features';
document.getElementById('nav-item-5').textContent = 'About';
document.getElementById('nav-item-6').textContent = 'Contact';
*/

// Examples: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Add H1, Button Text and Image

var ctaContent = document.querySelector('.cta');
ctaContent.getElementsByClassName('cta-text');

// Select CTA H1 Tag and Add Content
ctaContent.getElementsByTagName('h1')[0].textContent = siteContent['cta']['h1'];
ctaContent.getElementsByTagName('button')[0].textContent = siteContent['cta']['button'];
document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src']);


// Add Main Content

// Select Top Content
var topContent = document.querySelector('.top-content');
var textContent = topContent.getElementsByClassName('text-content');

// Select Top H4s and Add Content
textContent[0].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['features-h4'];
textContent[1].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['about-h4'];

// Select Top Paragraphs and Add Content
textContent[0].getElementsByTagName('p')[0].textContent = siteContent['main-content']['features-content'];
textContent[1].getElementsByTagName('p')[0].textContent = siteContent['main-content']['about-content'];

// Add Middle Image

document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

// Select Bottom Content

var bottomContent = document.querySelector('.bottom-content');
var textContent = bottomContent.getElementsByClassName('text-content');

// Select Bottom H4 and Add Content
textContent[0].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['services-h4'];
textContent[1].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['product-h4'];
textContent[2].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['vision-h4'];

// Select Bottom Paragraphs and Add Content
textContent[0].getElementsByTagName('p')[0].textContent = siteContent['main-content']['services-content'];
textContent[1].getElementsByTagName('p')[0].textContent = siteContent['main-content']['product-content'];
textContent[2].getElementsByTagName('p')[0].textContent = siteContent['main-content']['vision-content'];


//  Select Contact Section

var contact = document.querySelector('.contact');

// Select H4

contact.getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4'];

// Select First Paragraph

contact.getElementsByTagName('p')[0].textContent = siteContent['contact']['address'];

// Select Second Paragraph

contact.getElementsByTagName('p')[1].textContent = siteContent['contact']['phone'];

// Select Third Paragraph

contact.getElementsByTagName('p')[2].textContent = siteContent['contact']['email'];


// Select Footer and Update Footer
var footerContent = document.getElementsByTagName('footer')[0];
footerContent.getElementsByTagName('p')[0].textContent = siteContent['footer']['copyright'];