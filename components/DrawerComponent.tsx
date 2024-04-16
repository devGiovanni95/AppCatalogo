import React, { useRef, useState } from 'react';
import { DrawerLayoutAndroid, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import { router, useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

interface DrawerProps {
    children: React.ReactNode;
}

const DrawerComponent: React.FC<DrawerProps> = ({ children }) => {
    const drawer = useRef<DrawerLayoutAndroid>(null);

    const router = useRouter();

    const handleHome = () => {
        router.push('/');
        drawer.current?.closeDrawer(); // Fechar o drawer após a navegação
    };

    const handlePortfolio = () => {
        router.push("/portfolio");
        drawer.current?.closeDrawer(); // Fechar o drawer após a navegação
    };

    const handleCategory = () => {
        router.push("/category");
        drawer.current?.closeDrawer(); // Fechar o drawer após a navegação
    };

    const handleAromas = () => {
        router.push("/aromas");
        drawer.current?.closeDrawer(); // Fechar o drawer após a navegação
    };

    const handleFaq = () => {
        router.push('/faq');
        drawer.current?.closeDrawer(); // Fechar o drawer após a navegação
    };


    const handleRequest = () => {
        router.push('/requestOrder');
        drawer.current?.closeDrawer(); // Fechar o drawer após a navegação
    };

    //  //Vai ser apagado posteriormente
    // const handleSuccess = () => {
    //     router.push('/success');
    //     drawer.current?.closeDrawer(); // Fechar o drawer após a navegação
    // };
    
    // //Vai ser apagado posteriormente
    // const handleUnSuccess = () => {
    //     router.push('/unsuccess');
    //     drawer.current?.closeDrawer(); // Fechar o drawer após a navegação
    // };

    const handleCart = () => {
        router.push('/cart');
        drawer.current?.closeDrawer(); // Fechar o drawer após a navegação
    };

    
    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.option} onPress={handleHome}>Home</Text>
            <Text style={styles.option} onPress={handleCategory}>Categorias</Text>
            <Text style={styles.option} onPress={handlePortfolio}>Portifólio Completo</Text>
            <Text style={styles.option} onPress={handleAromas}>Aromas</Text>
            <Text style={styles.option} onPress={handleFaq}>F.A.Q</Text>
            {/* <Text style={styles.option} onPress={handleRequest}>Request</Text>*/}
            {/* <Text style={styles.option} onPress={handleSuccess}>Success</Text>
            <Text style={styles.option} onPress={handleUnSuccess}>Unsuccess</Text> */}
            <Text style={styles.option} onPress={handleCart}>Cart</Text>

        </View>
    );



    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={'left'}
            renderNavigationView={navigationView}>
            <View style={styles.container}>
                {/* AppBar */}
                <View style={styles.appBar}>
                    <TouchableOpacity onPress={() => drawer.current?.openDrawer()} style={styles.menuButton}>
                        <Ionicons name="menu" size={32} color="#F9FFF4" />
                    </TouchableOpacity>
                    <View style={styles.logo}>
                    <Svg width="161" height="32" viewBox="0 0 161 42" fill="none" >
                        <Path d="M12.375 26.4766C11.1562 28.2109 10.5469 29.9375 10.5469 31.6562C10.5469 33.4531 11.1484 34.7656 12.3516 35.5938C13.5547 36.4219 14.9844 36.8359 16.6406 36.8359C17.9062 36.8359 19.6406 36.6719 21.8438 36.3438C21.9219 36.2031 22.8359 35.2031 24.5859 33.3438C26.1797 31.6562 28.5938 28.9531 31.8281 25.2344C24.1094 25.5 17.625 25.9141 12.375 26.4766ZM39.1406 20.9453C40.3438 21.0859 42.0391 21.3594 44.2266 21.7656C46.4141 22.1562 48.7891 22.6172 51.3516 23.1484C50.7422 18.1797 49.7734 12.8906 48.4453 7.28125C46.7266 10.3906 43.625 14.9453 39.1406 20.9453ZM32.0625 5.85156C32.2188 5.49219 32.4219 5.11719 32.6719 4.72656C33.1406 3.88281 33.5312 3.16406 33.8438 2.57031C39.1406 0.898438 44.0938 0.0625 48.7031 0.0625C50.1719 0.0625 51.5703 0.21875 52.8984 0.53125C54.1641 0.828125 55.1953 1.35156 55.9922 2.10156C56.7734 2.82031 57.3828 3.89844 57.8203 5.33594C58.2734 6.77344 58.625 8.51562 58.875 10.5625L59.4141 14.7812L60.9844 25.6797C61.6094 30.1328 62.2656 33.5859 62.9531 36.0391C57.9844 37.4922 54.4609 38.7109 52.3828 39.6953C52.3828 37.9297 52.1328 33.1328 51.6328 25.3047C48.7109 25.1172 46.7266 25.0234 45.6797 25.0234C44.5547 25.0703 43.0703 25.1484 41.2266 25.2578C39.3984 25.3516 37.6875 25.4453 36.0938 25.5391C30.1562 32.0859 25.3672 36.4219 21.7266 38.5469C18.0547 40.6875 14.6094 41.7578 11.3906 41.7578C8.26562 41.7578 5.70312 40.9766 3.70312 39.4141C1.6875 37.8672 0.679688 36.25 0.679688 34.5625C0.679688 32.6562 1.73438 30.5312 3.84375 28.1875C5.92188 25.875 8.67969 23.8359 12.1172 22.0703C15.5391 20.3359 19.6094 19.4688 24.3281 19.4688C25.4531 19.4688 26.5234 19.5 27.5391 19.5625C28.5703 19.625 29.7266 19.7266 31.0078 19.8672C32.3047 20.0078 33.6172 20.1719 34.9453 20.3594L39.6562 13.5391C40.5781 12.1953 42.4219 9.125 45.1875 4.32812C43.3438 4.375 41.2969 4.53125 39.0469 4.79688C36.8125 5.0625 34.4844 5.41406 32.0625 5.85156ZM66.4922 18.1562L66.6562 11.4062L73.7578 12.0625L74.1562 17.4766C74.5312 16.4141 74.8672 15.3828 75.1641 14.3828C75.3984 13.5547 75.6562 12.9141 75.9375 12.4609C76.1875 12.0234 76.6328 11.6406 77.2734 11.3125C77.8828 10.9844 78.6172 10.8203 79.4766 10.8203C80.4453 10.8203 81.5156 11.0469 82.6875 11.5L81.9141 14.4766C81.5234 16.0859 81.0312 17.8672 80.4375 19.8203C78.5625 18.5859 77.2969 17.875 76.6406 17.6875C75.3906 19.3281 74.6484 20.5703 74.4141 21.4141C74.5078 22.8203 74.6094 23.9062 74.7188 24.6719C76.125 25.1719 77.3672 25.4219 78.4453 25.4219C77.7891 27.2656 76.9844 29.2812 76.0312 31.4688C72.7812 31.4688 70.7891 31.2734 70.0547 30.8828C69.2891 30.5078 68.4922 29.8672 67.6641 28.9609C66.8203 28.0391 66.3984 26.2891 66.3984 23.7109C66.3984 22.0234 66.4297 20.1719 66.4922 18.1562ZM92.5781 15.5547C91.75 16.9453 91.3359 18.3828 91.3359 19.8672C91.3359 23.9141 93.4062 26.3828 97.5469 27.2734C97.9375 25.7109 98.1328 24.1797 98.1328 22.6797C98.1328 20.2734 97.5625 18.5469 96.4219 17.5C95.2969 16.4688 94.0156 15.8203 92.5781 15.5547ZM102.633 11.7812L101.367 13.9375C102.539 14.2969 103.492 15.0547 104.227 16.2109C104.977 17.3828 105.352 18.8281 105.352 20.5469C105.352 22.2031 105.031 23.7422 104.391 25.1641C103.734 26.5703 103.039 27.5938 102.305 28.2344C101.555 28.9062 100.266 29.6953 98.4375 30.6016C98.1094 30.7578 97.6484 31.0469 97.0547 31.4688C96.6016 31.8125 96.2109 32.0703 95.8828 32.2422C92.8359 32.2266 90.0625 31.3672 87.5625 29.6641C85.0625 28.0078 83.8125 25.9141 83.8125 23.3828C83.8125 19.2578 86.6641 15.3047 92.3672 11.5234C94.9766 11.7578 97.1875 11.875 99 11.875C100.344 11.875 101.555 11.8438 102.633 11.7812ZM94.7812 3.95312L90.8438 8.66406L88.8984 7.82031L94.2188 1.39844L98.3906 1.30469L103.125 7L99.7734 8.66406L94.7812 3.95312ZM108.469 16.0234V13.1406C110.531 12.7656 113.047 12.1328 116.016 11.2422L116.109 14.9688C117.734 13.3125 118.938 12.0703 119.719 11.2422C123.859 12.0078 126.195 13.2891 126.727 15.0859C127.711 13.8828 128.898 12.6016 130.289 11.2422C132.258 11.3047 133.945 11.6484 135.352 12.2734C136.727 12.8828 137.672 13.6641 138.188 14.6172C138.703 15.5703 138.961 16.8906 138.961 18.5781C138.961 19.875 138.867 21.5 138.68 23.4531C138.555 24.8281 138.492 25.7812 138.492 26.3125C138.492 26.7031 138.531 27.5078 138.609 28.7266C136.75 30.4297 134.164 32.1875 130.852 34C131.039 32.7969 131.195 30.7734 131.32 27.9297L131.367 27.3906C131.445 25.9531 131.484 24.8281 131.484 24.0156C131.484 21.8438 131.266 20.2422 130.828 19.2109C130.375 18.1484 129.641 17.1406 128.625 16.1875C127.969 17.8438 127.555 18.8359 127.383 19.1641C127.445 20.4141 127.477 22.0625 127.477 24.1094C127.477 26.6406 127.414 28.8672 127.289 30.7891C123.664 31.3984 121.273 31.9531 120.117 32.4531C120.133 31.4062 120.141 30.4844 120.141 29.6875C120.141 22.6562 119.328 18.2578 117.703 16.4922L116.203 19.1641L116.508 31.0703C112.164 31.4922 109.273 31.8359 107.836 32.1016C108.258 27.1328 108.469 21.7734 108.469 16.0234ZM150.07 15.8828L149.461 21.6016C150.82 21.6016 152.281 21.5547 153.844 21.4609C153.875 20.4297 153.891 19.9375 153.891 19.9844C153.891 18.6562 153.539 17.6562 152.836 16.9844C152.117 16.2969 151.195 15.9297 150.07 15.8828ZM142.992 15.6484L148.266 11.1719L154.57 11.6406C156.602 11.8125 158.039 12.3203 158.883 13.1641C159.758 14.0391 160.195 14.9922 160.195 16.0234C160.195 16.4766 160.133 17.0625 160.008 17.7812C159.836 18.625 159.656 19.8828 159.469 21.5547C157.328 22.6641 155.703 23.3125 154.594 23.5C153.469 23.6875 152.391 23.7812 151.359 23.7812C150.969 23.7812 150.484 23.7422 149.906 23.6641C151.438 25.5703 152.93 26.5234 154.383 26.5234C156.102 26.5234 157.648 25.875 159.023 24.5781H159.211C157.648 29.4531 154.758 31.8906 150.539 31.8906C148.352 31.8906 146.766 31.5859 145.781 30.9766C144.797 30.3672 144.047 29.4844 143.531 28.3281C143 27.2031 142.734 25.0703 142.734 21.9297L142.852 17.9219L142.992 15.6484Z" fill="#F9F9F9" />
                    </Svg>
                    </View>

                    <View style={styles.cart}>
                    <TouchableOpacity onPress={handleCart} >
                        <FontAwesome5 name="shopping-cart" size={24} color="white" />
                    </TouchableOpacity>
                    </View>
                    
                </View>
                {/* Conteúdo */}
                {children}
            </View>
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navigationContainer: {
        paddingVertical: 32,
        backgroundColor: '#7A5656',
    },
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#7A5656', // Cor de fundo da app bar
        elevation: 4, // Sombra na app bar
        paddingHorizontal: 16, // Espaçamento horizontal
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        width: "70%",
        backgroundColor: '#7A5656', // Cor de fundo da app bar
    },
    menuButton: {
        marginRight: 16, // Espaçamento à direita para o ícone do menu
        color: "#F9FFF4",

    },
    logoIcon: {
        justifyContent: "center", // Espaçamento à direita para o ícone do menu
        color: "#F9FFF4"
    },
    option: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        fontSize: 18,
        color: "#F9FFF4"
    },
    cart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: "flex-end",
        marginLeft: 20
    }
});

export default DrawerComponent;
