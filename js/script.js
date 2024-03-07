const cards = document.getElementsByClassName('card')
const contentsDiv = document.getElementsByClassName('contents')

function displayContent(e) {
    let content = e.currentTarget.lastElementChild;
    let heading = e.currentTarget.children[1];
    // console.log(heading)
    // heading.style.
    content.classList.add('active')
    heading.classList.add('hide-heading');
    setTimeout(() => {
        content.children[0].style.visibility = 'visible';
    }, 400);
}
function removeContent(e) {
    let content = e.currentTarget.lastElementChild;
    let heading = e.currentTarget.children[1];
    content.classList.remove('active');
    heading.classList.remove('hide-heading');
}

Array.from(cards).forEach(element => {
    element.addEventListener('mouseover', displayContent);
    element.addEventListener('mouseout', removeContent);
})

Array.from(contentsDiv).forEach(element => {
    element.addEventListener('transitionend', () => {
        if (element.classList.contains('active')) {
            element.children[0].style.display = 'flex';
        }else {
            element.children[0].style.display = 'none';
        }
    });
});