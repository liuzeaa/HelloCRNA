import React from 'react';
import { StyleSheet } from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import FindScreen from  './components/wechat/FindScreen'
import DynamicScreen from  './components/wechat/DynamicScreen'
import ContactsScreen from  './components/wechat/ContactsScreen'
import MyScreen from  './components/wechat/MyScreen'
import DynamicDetailScreen from  './components/wechat/DynamicDetailScreen'

const RootTabs = createMaterialTopTabNavigator(
    {
        dynamic: {
            screen: DynamicScreen,
        },
        contacts: {
            screen: ContactsScreen,
        },
        find: {
            screen: FindScreen,
        },
        my:{
            screen:MyScreen,
        }
    },
    {
        tabBarPosition: 'bottom',//选项卡位置
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#02A8F3',//选中颜色
            inactiveTintColor:'#757575',//未选中颜色
            //设置选项卡的背景颜色
            style: {
                backgroundColor: '#FCFCFC',
                borderTopWidth:1,
                borderTopColor:'#E8E8E8'
            },
            //去掉安卓点击之后的小黄线
            indicatorStyle: {
                height: 0
            },
            //是否显示icon图标
            showIcon:true,
            //选项卡样式
            tabStyle:{
                height:50,
                paddingBottom:10
            },
            //icon样式
            iconStyle:{
                marginBottom:-8,
                marginTop:12
            }
        }
    });

// myapp路由
const MyApp = createStackNavigator({
    dynamicStack: {
        screen: RootTabs,
        navigationOptions: ({navigation}) => ({
            headerStyle: styles.headerBar,
            headerTintColor: '#fff'
        })
    },
    dynamicDetail: {
        path: 'people/:name',
        screen: DynamicDetailScreen,
    },
});
var styles = StyleSheet.create({
    headerBar:{
        backgroundColor:'#242529',
    }
})
export default MyApp;