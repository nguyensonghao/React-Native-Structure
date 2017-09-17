export default Style = {
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',        
        backgroundColor: 'white'
    },

    avatarContainer: {
        padding: 20
    },

    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        padding: 20
    },

    detail: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        alignItems: 'center',
        padding: 20
    },

    name: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10
    },

    subName: {
        fontSize: 14,
        color: 'white',
        marginTop: 6
    },

    rect: {
        backgroundColor: '#F5F5F5',
    },

    rectLeft: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 40,
        borderTopWidth: 120,
        borderRightColor: 'transparent',
        borderTopColor: 'white'
    },

    indicate: {
        alignItems: 'center',
        flex: 1
    },

    progress: {
        width: 80,
        height: 6,
        backgroundColor: 'black',
        borderRadius: 3
    }
}