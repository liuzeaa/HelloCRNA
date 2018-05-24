import React from 'react';
import { FlatList, StyleSheet,View, Text,Button,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeadScreen from './HeadScreen';

//动态组件
export default class DynamicScreen extends React.Component {
    static navigationOptions = {
        title: '动态',
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-text-outline" size={26} color={tintColor} />
        ),
    }
    render(){
        return (
            <View style={styles.container}>
                <HeadScreen></HeadScreen>
                <View style={styles.container}>
                    <FlatList
                        data={[
                            {key:'1',name:'张三',text:'我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',time:'2017-01-02 10:20:33'},
                            {key:'2',name:'xiongshi1998',text:'出生无法选择，但人生可以选择',time:'2017-01-02 10:20:33'},
                            {key:'3',name:'2222',text:'过多的关注和曝光会不会对孩子的正常生活有影响？一阵风似的离开后，孩子会不会有点失落？',time:'2017-01-02 10:20:33'},
                            {key:'4',name:'2222',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'},
                            {key:'5',name:'2222',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'}
                        ]}
                        renderItem={({item}) => (
                            <View style={styles.item}>
                                <View style={{flex:1}}>
                                    <Text><Icon name="ios-chatboxes-outline" color="#000" size={30} /></Text>
                                </View>
                                <View style={{flex:9}}>
                                    <Text onPress={() => this.props.navigation.navigate('find')} style={styles.name}>{item.name}</Text>
                                    <Text onPress={() => this.props.navigation.navigate('dynamicDetail',{name:'6666'})} style={styles.text}>{item.text}</Text>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                            </View>
                        )}
                        ItemSeparatorComponent={
                            ()=>(
                                <View style={{backgroundColor:'#EBEBEB',height:5}}>

                                </View>
                            )
                        }
                        ListEmptyComponent={
                            ()=>(
                                <View style={{flex:1}}>
                                    <Text>暂无数据</Text>
                                </View>
                            )
                        }
                        ListFooterComponent={
                            ()=>(
                                <View style={{height:40,justifyContent:'center',alignItems:'center'}}>
                                    <Text>我是有底线的</Text>
                                </View>
                            )
                        }
                        ListHeaderComponent={
                            ()=>(
                                <View style={{height:40,justifyContent:'center',alignItems:'center'}}>
                                    <Text>有新动态</Text>
                                </View>
                            )
                        }
                    />
                </View>
            </View>
        )
    }
}

//组件样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#EBEBEB'
    },
    item: {
        flex:1,
        flexDirection:'row',
        padding:10,
        backgroundColor:'#fff',
    },
    name:{
        color:'#59482E',
        fontSize:14
    },
    text:{
        color:'#232323',
        fontSize:14,
        marginTop:2
    },
    time:{
        color:'gray',
        fontSize:12,
        marginTop:8
    },
    //动态组件图片
    userphoto:{
        width:40,
        height:40,
        tintColor:'#9E9E9E'
    },
    //头部组件+
    headAdd:{
        width: 24,
        height: 24,
        tintColor: '#fff',
        marginRight:20,
    },
    //发现组件样式
    findView:{
        backgroundColor:'#fff',
        marginTop:15,
        padding:10,
        alignItems:'center',
        flexDirection:'row',
    },
    findViewText2:{
        flex:8,
    },
    findViewIcon:{
        width:24,
        height:24,
        marginRight:10
    },
    findViewIcon2:{
        flex:2,
        width:46,
        height:46,
    },
    findViewText:{
        fontSize:18,
        color:'#232323',
    },
    findBody:{
        backgroundColor:'#EBEBEB'
    },
    findMT:{
        marginTop:0,
        borderTopWidth:1,
        borderTopColor:'#EBEBEB'
    },
    //header样式
    headerBar:{
        backgroundColor:'#242529',
    }
});
