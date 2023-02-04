const API_KEY = "d40100688f2e9a88e2c57f663056ea9d";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(
          `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`
        ),
      },
      {
        slug: "trending",
        title: "Recomendado para Você",
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`
        ),
      },
      {
        slug: "romace",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-BR`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
      }
    }

    return info;
  },
};
