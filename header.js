const whoAmI = document.querySelector('.who__am__i');
const WhatIKnow = document.querySelector('.what__i__know');

const whoAmIDesc = ['SipiZork', 'Sipos Márk', 'Frontend Developer'];
const whatIKnowDesc = ['HTML', 'CSS', 'Javascript', 'React', 'Firebase', 'Git', 'Adobe XD', 'jQuery'];

let offset = 0;
let offset2 = 250;
for (let loopCounter = 0; loopCounter < 500; loopCounter++) {
  whoAmIDesc.forEach(data => {
    setTimeout(() => {
      whoAmI.style.top = '100%';
    }, 1000 + offset);
    setTimeout(() => {
      whoAmI.innerText = data;
    }, 1500 + offset);
    setTimeout(() => {
      whoAmI.style.transition = 'none';
      whoAmI.style.top = '-100%';
    }, 1600 + offset);
    setTimeout(() => {
      whoAmI.style.transition = 'all .5s';
      whoAmI.style.top = '0';
    }, 1700 + offset);
    offset += 1700;
  })
  whatIKnowDesc.forEach(data => {
    setTimeout(() => {
      WhatIKnow.style.top = '100%';
    }, 1000 + offset2);
    setTimeout(() => {
      WhatIKnow.innerText = data;
    }, 1500 + offset2);
    setTimeout(() => {
      WhatIKnow.style.transition = 'none';
      WhatIKnow.style.top = '-100%';
    }, 1600 + offset2);
    setTimeout(() => {
      WhatIKnow.style.transition = 'all .5s';
      WhatIKnow.style.top = '0';
    }, 1700 + offset2);
    offset2 += 1700;
  })
  loopCounter++;
}