const pwdCheck = document.querySelector('#password-check');
const pwdCheckErr = document.querySelector('#password-check-error');
const pwd = document.querySelector('#password');
const pwdErr = document.querySelector('#password-error');

function checkPasswords() {
    if (pwdCheck.value !== pwd.value) {
        pwdCheckErr.textContent = 'Passwords do not match';
    }
    else {
        pwdCheckErr.textContent = '';
    }
}

pwdCheck.addEventListener('input', () => checkPasswords());
pwd.addEventListener('input', () => {
    if (pwdCheck.value.length !== 0) checkPasswords(); 

    const regExpCap = /[A-Z]/g;
    const regExpDig = /[0-9]/g;
    let result = '';

    if (!regExpCap.test(pwd.value)) result += 'Need at least 1 capital letter. \r\n';
    if (!regExpDig.test(pwd.value)) result += 'Need at least 1 number. \r\n';
    if (pwd.value.length < 8) result += 'Need at least 8 characters.';

    console.log(result)
    pwdErr.textContent = result;
})
