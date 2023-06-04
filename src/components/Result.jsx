import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultsContexProvider';
import  Loading  from './Loading';
import Texts from './Results/Texts';
import Images from './Results/Images';
import Videos from './Results/Videos';

export default function Result() {
  const location = useLocation();

  const {getResult, result, searchTerm, setSearchTerm, isLoading} = useResultContext();

  useEffect(()=>{
    if (searchTerm) {
      getResult(searchTerm);
    }
  },[searchTerm,location.pathname]);


  if (isLoading) { return <Loading  /> }
  switch (location.pathname) {
    case '/search':
      return (
       <Texts result={result} />
      );
    case '/images':
      return (
        <Images result={result} />
      );
    case '/videos':
      return (
        <Videos result={result} />
      );
    default:
      return 'default';
  }
}
