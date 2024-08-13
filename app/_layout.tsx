import { Slot } from 'expo-router'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import DrawerComponent from '../components/Drawer';
import ProductProvider from '../hooks/productDetails';
import { StatusBar } from 'react-native';
import CategoryProvider from '../hooks/categoryDetails';
import { CartProvider } from '../hooks/cartItem';

export default function Layout() {
    return (
    <CartProvider>
        <CategoryProvider>
            <ProductProvider>
                <StatusBar hidden={true} />
                <DrawerComponent>
                    <GluestackUIProvider config={config}>
                        <Slot />
                    </GluestackUIProvider>
                </DrawerComponent>
            </ProductProvider>
        </CategoryProvider>
    </CartProvider>

    )
}
