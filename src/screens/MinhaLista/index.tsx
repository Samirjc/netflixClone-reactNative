import React, { useState } from "react";
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import leftArrow from "../../assets/icons/leftArrow.png"
import lupa from "../../assets/icons/lupa.png"
import { styles } from "./styles";

export const MinhaLista = () => {
    const [myList, setmyList] = useState<string[]>([
        'https://occ-0-5838-1740.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABYvyNn-A39o9Y0QIZ5aIs8qBf-Nptlb-VVl65PI3KHv7Wxq1sfckanDkw8pk6i5YuAbeCUzjMuXa6hkmHHuzS1VWq24hVxz3SjLdaNOf6SGtnZ1jjAotmUjXoEUKbLd7DX-pTG0w78vfiWVVGZ4Cje3X-5DZWCf0VPeNzF0.jpg?r=a71',

        'https://occ-0-5838-1740.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABb5haHV2CCHBxjJWzg1Say-G4u3FAhHCOHbyS93V06J8YkO3dk1Z67jcnLBA2of_RS5KOq2qqBtDR5vGweWyjMdgnPcaTgddFa-fpDLK-RATOfmu0oajLzXuJlU2yZqgYGeq3g.jpg?r=6de',

        'https://occ-0-1539-420.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABV1ctKHzP_hmACz0zj5yKSAZOGwG4XggKb8BE26uPnStk5tkkj8TJ4uhyLQ2Qs90jJooDfvuEhm_XKr3aEuxvRlSObRCNRwcyi3-RlmAq1w3Sb37kKz-UyKnuY_uzZMGoQ3p1A.jpg?r=dae',

        'https://occ-0-5838-1740.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdCi6dG2qi1Mr0ZD-68OmIYXUZIdW3vPZTRZOUYdkK6dO55aMjBxmxSIgArfLLwrIZ8sBZiaQPGo2n6Mnhz2szIkKbFf0iVTRm7j_OjBJ-8n3SNruS-y6Z8MINn59fk-XtDBYHDH2yo.jpg?r=3b2'
    ])

    return (
        <View style={styles.wrapper}>
            <View style={styles.topWrapper}>
                <View style={styles.leftWrapper}>
                    <Image source={leftArrow} style={styles.arrowIcon}/>
                    <Text style={styles.title}>Minha lista</Text>
                </View>
                <Image source={lupa} style={styles.lupaIcon}/>
            </View>

            <FlatList numColumns={3} data={myList} renderItem={({item, index}) =>
                <TouchableOpacity>
                    <Image source={{uri: item}} style={styles.myListImage} />
                </TouchableOpacity>
            } />
        </View>
    )
}