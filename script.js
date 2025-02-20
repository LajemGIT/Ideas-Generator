import { activityIdeas } from "./ideas.js";

const crazyMeterScale = document.querySelector('.js-crazy-meter');
const generateIdeaButton = document.querySelector('.js-generate-idea');
const result = document.querySelector('.js-result');

generateIdeaButton.addEventListener('click', () => {
  if (crazyMeterScale && crazyMeterScale.value === '1') {
    const randomActivity = activityIdeas.level1[Math.floor(Math.random() * activityIdeas.level1.length)];
    result.textContent = randomActivity;
  } else if (crazyMeterScale.value === '2') {
    const randomActivity = activityIdeas.level2[Math.floor(Math.random() * activityIdeas.level2.length)];
    result.textContent = randomActivity;
  } else if (crazyMeterScale.value === '3') {
    const randomActivity = activityIdeas.level3[Math.floor(Math.random() * activityIdeas.level3.length)];
    result.textContent = randomActivity;
  } else if (crazyMeterScale.value === '4') {
    const randomActivity = activityIdeas.level4[Math.floor(Math.random() * activityIdeas.level4.length)];
    result.textContent = randomActivity;
  } else if (crazyMeterScale.value === '5') {
    const randomActivity = activityIdeas.level5[Math.floor(Math.random() * activityIdeas.level5.length)];
    result.textContent = randomActivity;
  } else if (crazyMeterScale.value === '6') {
    const randomActivity = activityIdeas.level6[Math.floor(Math.random() * activityIdeas.level6.length)];
    result.textContent = randomActivity;
  } else if (crazyMeterScale.value === '7') {
    const randomActivity = activityIdeas.level7[Math.floor(Math.random() * activityIdeas.level7.length)];
    result.textContent = randomActivity;
  } else if (crazyMeterScale.value === '8') {
    const randomActivity = activityIdeas.level8[Math.floor(Math.random() * activityIdeas.level8.length)];
    result.textContent = randomActivity;
  } else if (crazyMeterScale.value === '9') {
    const randomActivity = activityIdeas.level9[Math.floor(Math.random() * activityIdeas.level9.length)];
    result.textContent = randomActivity;
  } else if (crazyMeterScale.value === '10') {
    const randomActivity = activityIdeas.level10[Math.floor(Math.random() * activityIdeas.level10.length)];
    result.textContent = randomActivity;
  } else if (crazyMeterScale > 10) {
    alert('STOP IT!')
  } else if (crazyMeterScale > 100000) {
    alert("Bro. I won't be Adding more than 10 Levels. imagine what level 100000 would look like... You probably would end up in an asylum.")
  }
});