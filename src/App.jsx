import React, { useState, useEffect } from 'react';
import './App.css';

import Repos from './components/repos/Repos';
import Sidebar from './components/sidebar/Sidebar';

import { getRepositoriesCached } from './utils/helpers';
import { sort } from './utils/sorting';

const App = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      let fetchedRepos = await getRepositoriesCached();
      setRepos(sort(fetchedRepos, 'stargazers_count', 'desc'));
    };

    fetchRepos();
  }, []);

  const onSortChange = (sortBy, order) => {
    setRepos(sort([...repos], sortBy, order));
  };

  return (
    <div className="wrapper">
      <Sidebar onSortChange={onSortChange} />
      <Repos repos={repos} />
    </div>
  );
};

export default App;
