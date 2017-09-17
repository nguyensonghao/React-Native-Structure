export default Style = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        // padding: 10,
        paddingTop: 16
    },

    toolbar: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 6,
        paddingLeft: 10
    },

    toolbarItem: {
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 20,
        height: 20
    },

    toolbarItemFirst: {
        borderRightWidth: 1,
        borderRightColor: '#ddd',
        paddingRight: 20
    },

    toolbarIcon: {
        fontSize: 24
    },

    toolbarText: {
        fontSize: 13,
        marginLeft: 4,
        fontWeight: '500'
    },

    textInputContainer: {        
        minHeight: 200,
        borderWidth: 1,
        borderColor: "#ddd",
        paddingLeft: 6,
        paddingTop: 10,
        flexDirection: 'row',
        borderTopWidth: 0
    },

    editorContainer: {
        flex: 1,
    },

    textInput: {
        borderWidth: 0,
    },

    listButton: {
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft: 10
    },

    button: {
        height: 32,
        padding: 6,
        backgroundColor: '#4267b2',
        marginRight: 10,
        borderRadius: 4,
        paddingLeft: 10,
        paddingRight: 10
    },

    buttonPost: {
        color: 'white'
    },

    avatar: {
        width: 42,
        height: 42,
        borderRadius: 21,
        marginRight: 6
    }
}