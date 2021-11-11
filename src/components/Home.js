import {useState, useEffect} from 'react'
import React from 'react'
import '../styles/Home.css';


export const Home = () => {
    const [videosList, setVideoList] = useState([]);
  const [searchVideo, setSearchVideo] = useState('')

  useEffect(() => {
    if(searchVideo!==''){
      fetchData();
  }

  }, [searchVideo]);

  async function fetchData() {
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&hl=snippet.localizedsnippet.localized&locale=France&channelType=any&maxResults=100&order=title&q=${searchVideo}&key=AIzaSyDVT5tjIloXPxv90PnC7-u8trUaQAmk8Zk`);
    const result = await data.json();
    console.log(result)
    setVideoList(result.items);
  };
  const handleSearch = (e) =>{
    let value = e.target.value;
    setSearchVideo(value)
}
    return (
        <div>
            <div >
          <header className="form-search">
              <input type="text" className="title" onChange={handleSearch} placeholder="search" />
          </header>
          {videosList && (
            <div >
              <ul className="video-container"s >
                {videosList.map((movie) => (
                  <li className="video">
                    <img src={movie.snippet.thumbnails.medium.url} alt="poster" className="video-img" />

                    <div className="video-info">
                      <h5>{movie.snippet.title}</h5>
                      <h6>{movie.snippet.channelTitle}</h6>
                    </div>



                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        </div>
    )
}
