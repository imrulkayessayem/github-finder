class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="ui-container">

                <div class="view-pro">
                    <img src="${user.avatar_url}"><br>
                    <a href="${user.html_url}" target="_blank">View Profile</a>
                </div>

                <div class="pro-info">
                    <span class="repos">Public Repositories: ${user.public_repos}</span>
                    <span class="gists">Public Gists: ${user.public_gists}</span> <br><br><br>
                    <span class="followers">Followers: ${user.followers}</span>
                    <span class="following">Following: ${user.following}</span>
                    <br> <br>
                    <ul>
                        <li>Company: ${user.Company}</li>
                        <li>Website/Blog: <a href="${user.blog}">Click Here</a></li>
                        <li>Location: ${user.location}</li>
                        <li>Since: ${user.created_at}</li>
                    </ul>
                </div>


            </div>
        </div>

        <h3 class="latest-repo">Latest Repositories</h3>
        <div id="repos"></div>
        `
    }

    showRepos(repos) {
        let output = '';

        repos.forEach(function(repo) {
            output += `
            <div class="card">
              <div class="repo-container">
                
                <div class="row">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
  
                <span class="star">Stars: ${repo.stargazers_count}</span>
                <span class="watchers">Watchers: ${repo.watchers.count}</span>
                <span class="forks">Forks: ${repo.forms_count}</span>

                </div>

              </div>
            </div>
            `;
        });
        document.getElementById('repos').innerHTML = output;

    }

    showAlert(message, className) {
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}