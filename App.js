
import AppNavigation from './navigation/appNavigation';
import { I18nManager } from 'react-native';

// Disable RTL layout (force LTR)
I18nManager.forceRTL(false);


export default function App() {
  return (
   <AppNavigation/>
  );
}



