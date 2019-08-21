export function getFromLocal(name) {
  return JSON.parse(localStorage.getItem(name));
}

export function setToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}
export function getChallenges() {
  return fetch('/api/challenges').then(res => res.json());
}

export function postChallenge(data) {
  return fetchChallenge('POST', data);
}

export function patchChallenge(data, id) {
  return fetchChallenge('PATCH', data, id);
}
export function deleteChallenge(id) {
  return fetchChallenge('DELETE', null, id);
}

function fetchChallenge(method, data, id = '') {
  return fetch('/api/challenges/' + id, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : undefined
  }).then(res => res.json());
}

export function getUser() {
  return fetch('/api/user').then(res => res.json());
}

export function patchUser(data, id) {
  return fetchUser('PATCH', data, id);
}

function fetchUser(method, data, id = '') {
  return fetch('/api/user/' + id, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : undefined
  }).then(res => res.json());
}
