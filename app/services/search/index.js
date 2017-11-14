import axios from 'axios';

import { API_KEY_SEARCH } from '../../constants/config.js';
import UtilService from '../util';

export default class SearchService {
	search (query, page, total) {
		let url = "https://pixabay.com/api?key=" + API_KEY_SEARCH + "&q=" + query + "&page=" + page + "&per_page=" + total;
		return new Promise((resolve, reject) => {
			axios.get(url).then(response => {
				images = response.data.hits.filter(image => {
					return image.userImageURL;
				})
	            resolve(this.convertImage(images));
	        })
	        .catch(function (error) {
	            alert(error);
	            reject(error);
	        });
		})
	}

	convertImage (images) {
        let result = [];
        if (images.length % 2 == 0) {
            for (let i = 0; i < images.length; i += 2) {
                result.push([images[i].userImageURL, images[i + 1].userImageURL]);
            }
        } else {
            for (let i = 0; i < images.length - 1; i += 2) {
                result.push([images[i].userImageURL, images[i + 1].userImageURL]);
            }

            result.push([images[images.length - 1].userImageURL]);
        }

        return result;
    }
}