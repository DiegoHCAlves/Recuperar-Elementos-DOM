var validacao = true;
function tagEx() {


    if (validacao) {
        element = document.getElementsByTagName('li')[1]
        element.style.color = 'blue';

        element = document.getElementsByTagName('li')[2]
        element.style.background = 'red';

        element = document.getElementsByTagName('li')[3]
        element.innerText = "SpringBoot";

    } else {
        element = document.getElementsByTagName('li')[1]
        element.style.color = '';

        element = document.getElementsByTagName('li')[2]
        element.style.background = '';

        element = document.getElementsByTagName('li')[3]
        element.innerText = "NodeJs";

    }

    validacao = !validacao;

}

function tagId() {


    if (validacao) {
        element = document.getElementById("java")
        element.style.color = 'blue'

        element = document.getElementById("python")
        element.style.background = 'red'

        element = document.getElementById("nodejs")
        element.innerText = "SpringBoot";

    } else {
        element = document.getElementById("java")
        element.style.color = ''

        element = document.getElementById("python")
        element.style.background = ''

        element = document.getElementById("nodejs")
        element.innerText = "NodeJs";

    }

    validacao = !validacao;

}

function _tagName() {


    if (validacao) {
        element = document.getElementsByName("java")[0]
        element.style.color = 'blue';

        element = document.getElementsByName("python")[0]
        element.style.background = 'red';

        element = document.getElementsByName("nodejs")[0]
        element.innerText = "SpringBoot";

    } else {
        element = document.getElementsByName("java")[0]
        element.style.color = '';

        element = document.getElementsByName("python")[0]
        element.style.background = '';

        element = document.getElementsByName("nodejs")[0]
        element.innerText = "NodeJs";

    }

    validacao = !validacao;

}

function tagClass() {


    if (validacao) {
        element = document.getElementsByClassName('langs')[0]
        element.style.color = 'blue';

        element = document.getElementsByClassName('langs')[1]
        element.style.background = 'red';

        element = document.getElementsByClassName('langs')[2]
        element.innerText = "SpringBoot";

    } else {
        element = document.getElementsByClassName('langs')[0]
        element.style.color = '';

        element = document.getElementsByClassName('langs')[1]
        element.style.background = '';

        element = document.getElementsByClassName('langs')[2]
        element.innerText = "NodeJs";

    }

    validacao = !validacao;

}

function _qSelector() {

    let element = document.querySelectorAll('.exSelector');

    if (validacao) {

        element[0].style.color = 'blue';

        element[1].style.background = 'red';

        element[2].innerText = "SpringBoot";

    } else {

        element[0].style.color = '';

        element[1].style.background = '';

        element[2].innerText = "NodeJs";

    }

    validacao = !validacao;

}