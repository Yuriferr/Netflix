import React, { useState , useEffect } from 'react'
import './App.scss'

import api from './api'

import Header from './components/Header/Header';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import MovieRow from './components/MovieRow/MovieRow';

import Logo from './assets/logoBranca.png'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

function App() {
  const [blackHeader, setBlackHeader] = useState(false)
  const [featuredData, setFeaturedData] = useState(null);
  const [movieList, setMovieList] = useState([]);
  
  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className="App">

      <Header black={blackHeader} />

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }

      <section className='lists'>
        {movieList.map((item, index) => (
          <MovieRow key={index} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        <div className='dues'>
          Feito com <span role="img" aria-label='coração'>❤️</span> por B7Web<br/><br/>
          Direitos de imagem para Netflix<br/><br/>
          Dados pegos do site Themoviedb.org
        </div>
        <div className='icons'>
          <a href='/' className='logo'>
            <img alt='logo' src={Logo}/>
          </a>
          <a target="_blank" href='https://www.linkedin.com/in/yuriferr'>
            <BsLinkedin color='white' size={30}/>
          </a>
          <a target="_blank" href='https://github.com/Yuriferr'>
            <BsGithub color='white' size={30}/>
          </a>
        </div>
      </footer>
      
        {movieList.length <= 0 && 
          <div className='loading'>
              <img src='https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif' alt='Carregando'/>
          </div>
        }
    </div>
  )
}

export default App
