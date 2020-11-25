// получить со страницы кнопку
const checkBtn = document.querySelector('.check');
const field = document.querySelector('.field');
const message = document.querySelector('.message');

checkBtn.addEventListener('click', function() {
    message.classList.remove('success');
    message.classList.remove('error');

    if (field.value.length === 0) {
        alert('Введите слово');
        return false;
    }

    const result = isPalindrome(field.value.toLowerCase().trim());

    message.style.display = 'block';
    checkBtn.disabled = true;

    if (result) {
        message.textContent = 'Слово является палиндромом';
        message.classList.add('success');
    } else {
        message.textContent = 'Слово не является палиндромом';
        message.classList.add('error');
    }

    setTimeout(function() {
        message.style.display = 'none';
        checkBtn.disabled = false;
        message.classList.remove('success');
        message.classList.remove('error');
    }, 2000);
});

function isPalindrome(string) {
    // 1 удалить пробелы из строки
    const strWithoutSpace = string.replace(/\s/g, '');
    console.log('strWithoutSpace', strWithoutSpace);

    // 2 разбить на массив т.к. строку перевернуть не получится
    const array = strWithoutSpace.split('');
    console.log('array', array);

    // 3 перевернуть массив
    const arrayReverse = array.reverse();
    console.log('arrayReverse', arrayReverse);
    // 4 превратить массив в строку
    const result = arrayReverse.join('');
    console.log('string', string);
    console.log('result', result);

    // 5 сравнить строки
    return strWithoutSpace === result;
}
