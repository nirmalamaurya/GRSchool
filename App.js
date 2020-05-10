import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Dashboard from './src/screens/Dashboard';
import StaffDetail from './src/screens/StaffDetail';

import AboutUs from './src/screens/DrawerScreens/AboutUs';
import ContactUs from './src/screens/DrawerScreens/ContactUs';
import StaffScreen from './src/screens/DrawerScreens/StaffScreen';
import MenuButton from './src/components/MenuButton';
import CurriculamScreen from './src/screens/DrawerScreens/CurriculamScreen';
import NewsScreen from './src/screens/DrawerScreens/NewsScreen';
import UpComingEventsScreen from './src/screens/DrawerScreens/UpComingEventsScreen';
import React from 'react'

//Creating Dashboard Screen in Stack Navigation
const home = createStackNavigator(
  {
  Dashboard:Dashboard
  
  
  },
  {
    defaultNavigationOptions :{
      title : "Sri Gangaram buddha SS",
      headerStyle: {
        backgroundColor: '#429bf5',
      },
      headerTitleStyle:{
        color: 'white'
      },
      headerLeft : () =><MenuButton/>
    }
  }
);

//Creating About Us Screen in Stack Navigation
const AboutUsDrawer = createStackNavigator(
  {
  AboutUs:AboutUs
  },{
    defaultNavigationOptions :{
      title : "About Us",
      headerStyle: {
        backgroundColor: '#429bf5',
      },
      headerLeft : () =><MenuButton/>
    }
  }
);


//Creating Contact Us Screen in Stack Navigation
const ContactUsDrawer = createStackNavigator(
  {
 ContactUs:ContactUs
  },{
    defaultNavigationOptions :{
      title : "Contact Us",
      headerStyle: {
        backgroundColor: '#429bf5',
      },
      headerLeft : () =><MenuButton/>
    }
  }
);

//Creating Staff Screen in Stack Navigation
const StaffScreenDrawer = createStackNavigator(
  {
    StaffScreen:StaffScreen,
    StaffDetail :StaffDetail
  },{

    defaultNavigationOptions :{
      title : "Our Staff",
      headerStyle: {
        backgroundColor: '#429bf5',
      }
      //headerLeft : () =><MenuButton/>
    }
  }
);
//Creating Upcoming Events Screen in Stack Navigation
const upComingEventsScreenDrawer = createStackNavigator(
  {
  UpComingEventsScreen:UpComingEventsScreen
  },{
    defaultNavigationOptions :{
      title : "Upcoming Events",
      headerStyle: {
        backgroundColor: '#429bf5',
      },
      headerLeft : () =><MenuButton/>
    }
  }
);//Creating News Screen in Stack Navigation
const NewsScreenDrawer = createStackNavigator(
  {
  NewsScreen:NewsScreen
  },{
    defaultNavigationOptions :{
      title : "News",
      headerStyle: {
        backgroundColor: '#429bf5',
      },
      headerLeft : () =><MenuButton/>
    }
  }
);//Creating Curriculam Screen in Stack Navigation
const CurriculamScreenDrawer = createStackNavigator(
  {
  CurriculamScreen:CurriculamScreen
  },{
    defaultNavigationOptions :{
      title : "Curriculam",
      headerStyle: {
        backgroundColor: '#429bf5',
      },
      headerLeft : () =><MenuButton/>
    }
  }
);
// Creating Drawer Navigation

const drawerNavigation = createDrawerNavigator(
  {

  Dashboard :{
    screen : home,
    navigationOptions:{
    title :'Home'

    }
  },
  Staff:{
    screen:StaffScreenDrawer,
    navigationOptions:{
    title : 'Our Staff'
    }
  },
  UpcomingEvents :{
    screen: upComingEventsScreenDrawer,
    navigationOptions:{
    title : 'Upcoming'
    }
  },
  AboutUs :{
    screen: AboutUsDrawer,
    navigationOptions:{
    title : 'About Us'
    }
  },
  
  Curriculam :{
    screen: CurriculamScreenDrawer,
    navigationOptions:{
    title : 'Curriculam'
    }
  },
  News :{
    screen: NewsScreenDrawer,
    navigationOptions:{
    title : 'News'
    }
  },
  ContactUs:{
    screen:ContactUsDrawer,
    navigationOptions:{
    title : 'Contact Us'
    }
  }
  
},
{    drawerBackgroundColor: '#d8dadb'


}
);export default createAppContainer(drawerNavigation);
