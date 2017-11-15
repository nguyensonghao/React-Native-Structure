import { Alert } from 'react-native';

export default class UtilService {
	static alertError (message) {
		alert('Thông báo', message, 'Đóng');
	}

	static alert (title, message) {
		Alert.alert(
		  	title,
		  	message,
		  	[{text: 'Đóng'}]
		)
	}
}