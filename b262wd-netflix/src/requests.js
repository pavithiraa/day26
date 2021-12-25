const API_Key="2bbbcdb01731af3e48d21a10d38fed36";
const requests={
    fetchTrending:`https://api.themoivedb.org/3/trending/all/week?api_key=${API_Key}&language=en-US`,
    fetchNetflixOriginals:`https://api.themoivedb.org/3/discover/tv?api_key=${API_Key}&with_networks=213`,
    fetchTopRated:`https://api.themoivedb.org/3/moive/top_rated?api_key=${API_Key}&language=en-US`,
    fetchActionMoives:`https://api.themoivedb.org/3/discover/moive?api_key=${API_Key}&with_generes=28`,
    fetchComedyMoives:`https://api.themoivedb.org/3/discover/moive?api_key=${API_Key}&with_generes=35`,
    fetchHorrorMoives:`https://api.themoivedb.org/3/discover/moive?api_key=${API_Key}&with_generes=27`,
    fetchRomanticMoives:`https://api.themoivedb.org/3/discover/moive?api_key=${API_Key}&with_generes=10749`,
    fetchDocumentaries:`https://api.themoivedb.org/3/discover/moive?api_key=${API_Key}&with_generes=99`,
}
export default requests;