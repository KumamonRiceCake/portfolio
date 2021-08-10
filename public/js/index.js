// Elements
const $homeMenu = document.querySelector('#home-menu')
const $educationMenu = document.querySelector('#education-menu')
const $experienceMenu = document.querySelector('#experience-menu')
const $projectMenu = document.querySelector('#projects-menu')
const $weatherAppMenu = document.querySelector('#weather-app-menu')
const $taskManagerMenu = document.querySelector('#task-manager-api-menu')
const $chatAppMenu = document.querySelector('#chat-app-menu')
//const $ = document.querySelector('')

$homeMenu.addEventListener('click', () => {
    location.href = '/'
})

$educationMenu.addEventListener('click', () => {
    location.href = 'education.html'
})

$experienceMenu.addEventListener('click', () => {
    location.href = 'experience.html'
})

$projectMenu.addEventListener('click', () => {
    location.href = 'projects.html'
})

$weatherAppMenu.addEventListener('click', () => {
    location.href = 'weather-app.html'
})

$taskManagerMenu.addEventListener('click', () => {
    location.href = 'task-manager.html'
})

$chatAppMenu.addEventListener('click', () => {
    location.href = 'chat-app.html'
})