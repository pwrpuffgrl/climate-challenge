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
export function deleteChallenge(data, id) {
  return fetchChallenge('DELETE', data, id);
}
function fetchChallenge(method, data, id = '') {
  return fetch('/api/challenges/' + id, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
