import bash_icon from 'images/icons/bash-icon.png'
import cpp_icon from 'images/icons/cpp-icon.png'
import chash_icon from 'images/icons/csharp-icon.png'
import css_icon from 'images/icons/css-icon.png'
import default_icon from 'images/icons/default-icon.png'
import go_icon from 'images/icons/go-icon.png'
import html_icon from 'images/icons/html-icon.png'
import java_icon from 'images/icons/java-icon.png'
import js_icon from 'images/icons/js-logo.png'
import php_icon from 'images/icons/php-icon.png'
import python_icon from 'images/icons/python-icon.png'
import react_icon from 'images/icons/reactjs-logo.png'
import jupyter_icon from 'images/icons/jupyter-icon.png'
import tsql_icon from 'images/icons/tsql-icon.png'

import lscache from 'lscache'

import {GITUSER} from 'config.json'

const LSCACHE_TIMEOUT = 10;

export function setRepoLanguage(repo) {
  let { language, name } = repo;

  if (name.toLowerCase().startsWith('react')) {
    language = 'react';
  }
  repo.language = language ? language.toLowerCase() : '';
  return repo;
}

export function getRepositories() {
  return fetch(`https://api.github.com/users/${GITUSER}/repos?&per_page=100`)
    .then(response => response.json());
}

export async function getRepositoriesCached() {
  let fetchedRepos = lscache.get('repos')
  if (!fetchedRepos) {
    fetchedRepos = await getRepositories();

    fetchedRepos = fetchedRepos
      .filter((repo) => repo.fork === false && repo.description)
      .map((repo) => setRepoLanguage(repo));
    lscache.set('repos', fetchedRepos, LSCACHE_TIMEOUT/* minutes */)
  }
  return fetchedRepos
}

export function getUserInfo() {
  return fetch(`https://api.github.com/users/${GITUSER}`)
    .then(response => response.json());
}

export async function getUserInfoCached() {
  let fetchedInfo = lscache.get('info');
  if (!fetchedInfo) {
    fetchedInfo = await getUserInfo();
    lscache.set('info', fetchedInfo, LSCACHE_TIMEOUT)
  }
  return fetchedInfo
}

export function repositoryLogo(repo_name) {
  return `https://raw.githubusercontent.com/${GITUSER}/${repo_name}/master/logo.png`
}

export function languageLogo(language) {
  switch(language) {
    case "c++":
      return cpp_icon
    case "c#":
      return chash_icon
    case "css":
      return css_icon
    case "go":
      return go_icon
    case "html":
      return html_icon
    case "java":
      return java_icon
    case "javascript":
      return js_icon
    case "php":
      return php_icon
    case "python":
      return python_icon
    case "react":
      return react_icon
    case "jupyter notebook":
      return jupyter_icon
    case "shell":
      return bash_icon
    case "tsql":
      return tsql_icon
    default:
      return default_icon
  }
}
