function setParams(config) {
    config.params = {
        apikey: "a1213c70",
    };
    return config;
}

function getData(response) {
    return response.data;
}

export default function(axios) {
    axios.interceptors.request.use(setParams);
    axios.interceptors.response.use(getData);
}
