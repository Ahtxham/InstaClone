import { Colors } from "../Themes/"
import {Dimensions} from 'react-native'

const { width, height } = Dimensions.get("window");


const Styles = {
    ProfileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    ProfileDataHeading: {
        justifyContent: 'center',
        alignSelf: "center",
        margin: 10,
    },

    RecentPostsImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },

    PostsBorder: {
        borderWidth: 1,
        borderColor: "#959595",
        padding: 4,
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: 5,
    },
    
    Button: {
        backgroundColor: "white",
        padding: 5,
        width: 100,
        height:32,
        borderRadius: 5,
        borderColor: "#959595",
        borderWidth: 1,
        margin: 5,
        alignItems: "center",
        justifyContent: 'center',
    },

    ButtonIcon: {
        width: 12,
        height: 12,
    },
    PostImages: {
        width: width/3,
        height: width/3,
    },
    
}


export default Styles;