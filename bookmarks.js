const bookmarks = document.querySelector('.bookmarks');
const headerBookmark = document.querySelector('.bookmarks .header');
const aboutMeBookmark = document.querySelector('.bookmarks .about__me');
const referencesBookmark = document.querySelector('.bookmarks .references');
const contactsBookmark = document.querySelector('.bookmarks .contacts');

const header = document.querySelector('#page-header');
const aboutMe = document.querySelector('#about__me');
const references = document.querySelector('#references');
const contacts = document.querySelector('#contacts');

const headerHeight = header.clientHeight;
const aboutMeHeight = aboutMe.clientHeight;
const referencesHeight = references.clientHeight;
const contactsHeight = contacts.clientHeight;


window.addEventListener('scroll', () => addBookMarks())

addBookMarks = () => {
  if (window.scrollY > headerHeight - 100) {
    headerBookmark.classList.add('visible');
  } else {
    headerBookmark.classList.remove('visible');
  }

  if (window.scrollY < headerHeight - 180 || window.scrollY > headerHeight + aboutMeHeight - 145 ) {
    aboutMeBookmark.classList.add('visible');
  } else {
    aboutMeBookmark.classList.remove('visible');
  }

  if (window.scrollY < headerHeight + aboutMeHeight - 220 || window.scrollY > headerHeight + aboutMeHeight + referencesHeight - 195 ) {
    referencesBookmark.classList.add('visible');
  } else {
    referencesBookmark.classList.remove('visible');
  }
  if (window.scrollY < headerHeight + aboutMeHeight + referencesHeight - 260) {
    contactsBookmark.classList.add('visible');
  } else {
    contactsBookmark.classList.remove('visible');
  }
}

addBookMarks();