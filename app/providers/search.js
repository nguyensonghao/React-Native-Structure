import axios from 'axios';

export default class SearchProvider {
	static search (query, page, total) {
		let url = "https://pixabay.com/api?key=7029048-d6bfc0eb97da5a2d531f1118e&q=" + query + "&page=" + page + "&per_page=" + total;
		return new Promise((resolve, reject) => {
			axios.get(url).then(response => {
				let images = this.convertImage(response.data.hits)
	            resolve(images);
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