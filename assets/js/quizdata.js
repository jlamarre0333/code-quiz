const quizItems = [{
    q: "Which is the most specific CSS selector?",
    a: "#element",
    options: [
        '.element',
        '#element',
        'element',
        '$element',
    ]
},
{
    q: "Which HTML tag do you use to import a JavaScript file?",
    a: "<link>",
    options: [
        '<p>',
        '<javascript>',
        '<script>',
        '<link>',
    ]
},
{
    q: "How can you selct an element from the DOM by it's class name?",
    a: "document.querySelector('.element')",
    options: [
        '$element',
        "document.getElementbyId('element')",
        "document.querySelector('.element')",
        "document.querySelector('element')",
    ]
}, {
    q: "Which of these services can be used to deploy your production application?",
    a: "Github Pages",
    options: [
        'Material-UI',
        'Github Pages',
        'CSS',
        'Bootstrap',
    ]
},
{
    q: "Which one of these libraries is maintained Facebook?",
    a: "React",
    options: [
        'React',
        'Node',
        'Express',
        'Mongodb',
    ]
},
{
    q: "Which terminal command can you use to undo your last git commit?",
    a: "git reset --soft HEAD~1",
    options: [
        'git go-back --soft',
        'git checkout -b',
        'git commit-STOP-IT',
        'git reset --soft HEAD~1',
    ]
}]

export default quizItems;