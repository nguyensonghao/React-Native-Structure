import React, { Component } from 'react';
import { ConfirmDialog } from 'react-native-simple-dialogs';

export default class ConfirmDetele extends Component {
	render () {
		const { show } = this.props;

		return (
			<ConfirmDialog
			    title="Thông báo"
			    message="Bạn có muốn xóa thật không?"
			    visible={show}
			    onTouchOutside={() => this.setState({dialogVisible: false})}
			    positiveButton={{
			        title: "Có",
			        onPress: () => this.props.delete()
			    }}
			    negativeButton={{
			        title: "Không",
			        onPress: () => this.props.close()
			    }}
			/>
		)
	}
}