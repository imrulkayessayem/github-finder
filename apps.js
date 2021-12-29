const sayem = new Github;
const n_ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== '') {
        sayem.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                n_ui.showAlert('User not found', 'alert')
            } else {
                n_ui.showProfile(data.profile);
                n_ui.showRepos(data.repos);
            }
        })
    } else {
        n_ui.clearProfile();
    }
});
