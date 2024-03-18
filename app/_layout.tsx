import { Slot } from 'expo-router'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import DrawerComponent from '../components/DrawerComponent';
import ProductProvider from '../hooks/productDetails';

export default function Layout() {
    return (
        <ProductProvider>
            <DrawerComponent>
                <GluestackUIProvider config={config}>
                    <Slot />
                </GluestackUIProvider>
            </DrawerComponent>
        </ProductProvider>
    )
}
