const {
    VITE_TMDB_TOKEN,
    VITE_AUTH0_DOMAIN,
    VITE_AUTH0_CLIENT_ID,
    VITE_AUTH0_CALLBACK_URL,
    VITE_BACKEND_URL,

  } = import.meta.env;

export default {
    TOKEN: VITE_TMDB_TOKEN,
    AUTH0_DOMAIN: VITE_AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: VITE_AUTH0_CLIENT_ID,
    AUTH0_CALLBACK: VITE_AUTH0_CALLBACK_URL,
    API_URL: VITE_BACKEND_URL || 'https://streamseek-ab53d9073059.herokuapp.com',
  };