import { Slot } from 'expo-router'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import DrawerComponent from '../components/DrawerComponent';

export default function Layout(){
    return (
    <DrawerComponent>
      <GluestackUIProvider config={config}>
            <Slot />
        </GluestackUIProvider>
        </DrawerComponent>
    )
}
