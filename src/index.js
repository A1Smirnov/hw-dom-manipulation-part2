// import "./styles.css";

console.log(`Testing console`);


// It's implemented from Part 3 Copy the following data structure to the top of your index.js file; you will use it to create your menu buttons.
// It's updated in Part 4 of Part 2

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// <------------------ Part 1: Getting Started ------------------ >

// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr');

// <------------------ Part 2: Creating a Menu Bar ------------------ >

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById('top-menu');

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

// <------------------ Part 3: Adding Menu Buttons ------------------ >

// Part of data is in the beginning of this script

//   Iterate over the entire menuLinks array and for each "link" object:
  menuLinks.forEach(link => {

//   Create an <a> element.
    const linkEl = document.createElement('a');

//   On the new element, add an href attribute with its value set to the href property of the "link" object.
    linkEl.href = link.href;

//   Set the new element's content to the value of the text property of the "link" object.
    linkEl.textContent = link.text;
  
//   Append the new element to the topMenuEl element.
    topMenuEl.appendChild(linkEl);
  });

// <------------------ Part 4: Adding Interactivity ------------------ >

// _._     _,-'""`-._
// (,-.`._,'(       |\`-/|
//     `-.-' \ )-`( , o o)
//           `-    \`_`"'-
//                         Meow!


// <------------------ DOM MANIPULATION PART 2 ------------------ >

// <------------------ Part 1: Getting Started ------------------ >
// Got started
// <------------------ Part 2: Adding Additional HTML and CSS ------------------ >
// Added
// <------------------ Part 3: Creating the Submenu ------------------ >

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById('sub-menu');

// Set the height of subMenuEl element to be "100%".
subMenuEl.style.height = '100%';

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

// Change the position of the submenu to temporarily hide it.
subMenuEl.style.position = 'absolute'; // Set the position property to absolute
subMenuEl.style.top = '0'; // Set the top property to 0

// <------------------ Part 4: Adding Menu Interaction ------------------ >

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function(event) {
// The first line of code of the event listener function should call the event object's preventDefault() method.
event.preventDefault();
// The second line of code of the function should immediately return if the element clicked was not an <a> element.

// !!! BUGFIX !!! Used capital `A` instead of lowercase `a` because this property in upperCase and in CSS it's lowercase

if (event.target.tagName !== 'A') return;
// Log the content of the <a> to verify the handler is working.

// !!! BUGFIX !!!
console.log(event.target.textContent);

// Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:
  const clickedLink = event.target;

//  !!! BUGFIX !!! USING CONTAINS INSTEAD OF BOOLEAN TOOGLE

const isActive = clickedLink.classList.contains('active');

// The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.

topMenuLinks.forEach(link => {
  if (link !== clickedLink) {
    link.classList.remove('active');
  }
});
// The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
if (isActive) {
  clickedLink.classList.add('active');
}
});
// Hint: Removing a non-existent class from an element does not cause an error!
// Progress Check - Clicking any of the links should make that link active and clear the others. Clicking an active link should clear that link. Here is what it should look like so far, with "CATALOG" active:

// <------------------ Part 5: Adding Submenu Interaction ------------------ >

// Function to build the Submenu
function buildSubmenu(subLinks) {
  // Clear current contents of subMenuEl
  subMenuEl.innerHTML = '';

  // Iterate over the subLinks array
  subLinks.forEach(link => {
    // Create an <a> element
    const linkEl = document.createElement('a');

    // Set the href attribute
    linkEl.href = link.href;

    // Set the content of the <a>
    linkEl.textContent = link.text;

    // Append the new element to subMenuEl
    subMenuEl.appendChild(linkEl);
  });
}

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
  // Prevent the default action of the link
  event.preventDefault();

  // Return early if the clicked element is not an <a> element
  if (event.target.tagName !== 'A') return;

  // Log the content of the <a> to verify the handler is working
  console.log(event.target.textContent);

  // Get the clicked link
  const clickedLink = event.target;
  const isActive = clickedLink.classList.toggle('active');

  // Remove the 'active' class from all other <a> elements
  topMenuLinks.forEach(link => {
    if (link !== clickedLink) {
      link.classList.remove('active');
    }
  });

  // Check for the associated link object from menuLinks
  const linkObject = menuLinks.find(linkObj => linkObj.text.toLowerCase() === clickedLink.textContent.toLowerCase());

  // Toggle the submenu
  if (!isActive) {
    subMenuEl.style.top = '0'; // Hide the submenu if the clicked link is active
    return;
  }

  // Check if the clicked link has subLinks
  if (linkObject && linkObject.subLinks) {
    // Show the submenu by setting top to 100%
    subMenuEl.style.top = '100%';

    // Build the submenu using the subLinks from the link object
    buildSubmenu(linkObject.subLinks);
  } else {
    // If it does not have subLinks (like "about"), hide the submenu
    subMenuEl.style.top = '0';
  }
});
// Attach a delegated 'click' event listener to subMenuEl
subMenuEl.addEventListener('click', function(event) {
  // Prevent the default action of the link
  event.preventDefault();

  // Return early if the clicked element is not an <a> element
  if (event.target.tagName !== 'A') return;

  // Log the content of the <a> to verify the handler is working
  console.log(event.target.textContent);

  // Hide the submenu
  subMenuEl.style.top = '0';

   // Remove the active class from each <a> element in topMenuLinks
   topMenuLinks.forEach(link => link.classList.remove('active'));

   // Update the contents of mainEl with the text of the clicked submenu item
   const clickedLink = event.target;
 
   // Testing
   if (clickedLink.textContent.toLowerCase() === 'about') {
     mainEl.innerHTML = `<h1>About</h1>`;
   } else {
     mainEl.innerHTML = `<h1>${clickedLink.textContent}</h1>`;
   }
 });
