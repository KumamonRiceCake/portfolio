// Elements
const $homeMenu = document.querySelector('#home-menu')
const $educationMenu = document.querySelector('#education-menu')
const $experienceMenu = document.querySelector('#experience-menu')
const $projectMenu = document.querySelector('#projects-menu')
const $weatherAppMenu = document.querySelector('#weather-app-menu')
const $taskManagerMenu = document.querySelector('#task-manager-api-menu')
const $chatAppMenu = document.querySelector('#chat-app-menu')
const $fileRepositoryMenu = document.querySelector('#file-repository-api-menu')
const $webAlbumAppMenu = document.querySelector('#web-album-app-menu')

$homeMenu.addEventListener('click', () => {
    location.href = '/'
})

$educationMenu.addEventListener('click', () => {
    location.href = '/education'
})

$experienceMenu.addEventListener('click', () => {
    location.href = '/experience'
})

$projectMenu.addEventListener('click', () => {
    location.href = '/projects'
})

$weatherAppMenu.addEventListener('click', () => {
    location.href = '/projects/weather-app'
})

$taskManagerMenu.addEventListener('click', () => {
    location.href = '/projects/task-manager'
})

$chatAppMenu.addEventListener('click', () => {
    location.href = '/projects/chat-app'
})

$fileRepositoryMenu.addEventListener('click', () => {
    location.href = '/projects/file-repo'
})

$webAlbumAppMenu.addEventListener('click', () => {
    location.href = '/projects/web-album'
})