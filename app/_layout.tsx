import { Slot } from 'expo-router'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import DrawerComponent from '../components/DrawerComponent';
import ProductProvider from '../hooks/productDetails';
import { StatusBar } from 'react-native';
import CategoryProvider from '../hooks/categoryDetails';

export default function Layout() {
    return (
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
    )
}
