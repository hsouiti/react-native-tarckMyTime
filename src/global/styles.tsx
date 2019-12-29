import { TextStyle, ViewStyle } from "react-native"

export const Fonts = {
    boldFont: 'OpenSans-Bold',
    regularBold: 'OpenSans-Regular',
    defaultFont: 'Monster'

}

//fontFamily: 'OpenSans-Bold'

export const Colors = {
    primaryColor: '#1565C0',
    primaryColorLight: '#1976D2',
    secondaryColor: 'coral',
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

export const button: ViewStyle = {
    borderRadius: 10,
    height: 45,
    width: '100%',
    backgroundColor: Colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
}
export const textButton: TextStyle = {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold'
}