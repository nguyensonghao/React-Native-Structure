import { firebaseApp } from '../../firebaseApp.js';

export default class FirebaseService {
	static insert (collection, value) {
		let _ref = firebaseApp.database().ref();
		return new Promise((resolve, reject) => {
			_ref.child(collection).push(value, function (err) {
				resolve(err ? false : true);
	        })
	    })
	}

	static all (collection) {
		let _ref = firebaseApp.database().ref();
		return new Promise((resolve, reject) => {
			_ref.child(collection).once("value", function(item) {
	            var result = [];
	            if (item) {
	            	item = item.val();
	                for (var key in item) {
	                    item[key].id = key;
	                    result.push(item[key]);
	                }
	                resolve(result);
	            } else {
	                resolve([]);
	            }
	        });
		})
	}

	static addChild (collection, callback) {
		let _ref = firebaseApp.database().ref();
		_ref.child(collection).on('child_added', data => {
			callback(data.val());
		})
	}

	static findById (collection, id) {
		return new Promise((resolve, reject) => {
			_ref.child(collection).orderByKey().equalTo(id).once("value", function(item) {
	            item = item.val();
	            if (item) {
	                for (var key in item) {
	                    item[key].id = key;
	                    resolve(item[key]);
	                    break;
	                }
	            } else {
	                resolve(null);
	            }
	        });
		})
	}

	static findByField  (collection, key, value) {
		let _ref = firebaseApp.database().ref();
		return new Promise((resolve, reject) => {
			_ref.child(collection).orderByChild(key).equalTo(value).once("value", function(item) {
	            var result = [];
	            if (item) {
	            	item = item.val();
	                for (var key in item) {
	                    item[key].id = key;
	                    result.push(item[key]);
	                }
	                resolve(result);
	            } else {
	                resolve([]);
	            }
	        });
		})
    }
}