import 'fetch';

var reposForUser = function(username) {
  let url = `https://api.github.com/users/${username}/repos`;

  return fetch(url).then(response => response.json());
}

export {reposForUser}
