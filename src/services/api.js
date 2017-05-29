
import {API_ROOT} from '../constants';
import fetchJsonp from 'fetch-jsonp';

function callApi(endpoint) {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
    return fetchJsonp(fullUrl,{jsonpCallback: 'jsoncallback'})
        .then(function(response) {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })

}

export const fetchPhotosByTag = (apiKey, tag, page = 1, pageSize = 36) => callApi(`?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=${pageSize}&tag_mode=all&format=json&page=${page}`);
