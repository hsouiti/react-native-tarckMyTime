import { TextStyle } from "react-native"

export const Fonts = {
    boldFont: 'OpenSans-Bold',
    regularBold: 'OpenSans-Regular',
    defaultFont: 'Monster'

}

//fontFamily: 'OpenSans-Bold'

export const Colors = {
    primaryColor: '#1565C0',
    primaryColorLight: '#1976D2',
    lightGray: '#EEEEEE',
    grey: '#9E9E9E',
    white: '#FFF',
    green: '#09af00'
}

export const titleWrapper = {
    paddingBottom: 30,

}
export const globalTitle: TextStyle = {
    fontSize: 25,
    fontFamily: 'Monster',
    textAlign: 'center'
}

export const globalContainer = {
    flex: 1,
    backgroundColor: Colors.white
}

export const input = {
    borderColor: Colors.grey,
    backgroundColor: Colors.white,
    borderRadius: 50,
    paddingLeft: 20,
}

export const inputHolder = {
    width: '80%',
    marginBottom: 10
}