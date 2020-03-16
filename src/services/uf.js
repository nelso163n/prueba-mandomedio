const baseUrl = 'https://api.sbif.cl/api-sbifv3/recursos_api/';
const apikey = 'd8093171162117c0c6e8da895b00978d4e2b6a0e';
const format = 'json';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

const headers = {
  host: 'api.sbif.cl'
}

export const getUrl = (url) => {
  return `${baseUrl}${url}`;
}

export const getUrlWithFormat = (url) => {
  return `${url}?apikey=${apikey}&formato=${format}`;
}

export const getUfsByMonth = async (fromYear, fromDay) => {
  const messageError = 'error al cargar data';
  try {
    const url = getUrlWithFormat(`uf/${fromYear}/${fromDay}`);  
    const response = await fetch(proxyurl + getUrl(url), {
      method : 'GET',
      headers
    });
    const data = await response.json();
    return (response.status === 200)? data : messageError;
  } catch (error) {
    console.log(error);
    return messageError;
  }
}