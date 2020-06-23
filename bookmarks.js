const bookmarks = document.querySelector('.bookmarks');
const headerBookmark = document.querySelector('.bookmarks .header');
const aboutMeBookmark = document.querySelector('.bookmarks .about__me');
const referencesBookmark = document.querySelector('.bookmarks .references');
const contactsBookmark = document.querySelector('.bookmarks .contacts');

window.addEventListener('scroll', () => addBookMarks())

addBookMarks = () => {
  if (window.scrollY > window.innerHeight - 150) {
    headerBookmark.classList.add('visible');
  } else {
    headerBookmark.classList.remove('visible');
  }

  if (window.scrollY < window.innerHeight - 200 || window.scrollY > (window.innerHeight * 2) - 200 ) {
    aboutMeBookmark.classList.add('visible');
  } else {
    aboutMeBookmark.classList.remove('visible');
  }

  if (window.scrollY < (window.innerHeight * 2) - 200 || window.scrollY > (window.innerHeight * 3) - 200 ) {
    referencesBookmark.classList.add('visible');
  } else {
    referencesBookmark.classList.remove('visible');
  }
  if (window.scrollY < (window.innerHeight * 3) - 200 || window.scrollY > (window.innerHeight * 4) - 200 ) {
    contactsBookmark.classList.add('visible');
  } else {
    contactsBookmark.classList.remove('visible');
  }
}

addBookMarks();