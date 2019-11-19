import React from 'react'
import { View , SafeAreaView , StyleSheet , Platform , Image , Text , FlatList , TouchableOpacity , TouchableHighlight ,Dimensions , Picker} from 'react-native'
import { Header , Avatar , Nome , Post , PostImage , User , Desc , Button2} from './styles'
import { Slider, Block , Button } from 'galio-framework';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        sliderdistancia: 10,
        sliderpreco:10,
        produto:" "
      }
   }
   registerTheValue = (value) => {
    this.setState({
      sliderdistancia: value
      });
  };
  registerThePreco = (value) => {
    this.setState({
      sliderpreco: value
      });
  };
  render() {
    return(
      <SafeAreaView  style={styles.container}>
             <View style={styles.contentContainer}> 
             <View style={{backgroundColor: '#008799', flexDirection: 'row'}}> 
                        <Nome>Filtrar</Nome>
                        <Desc>busca</Desc>
                    </View>  
                    <Header>
                    <Text style={styles.text}>Combustiveis</Text>    
                   </Header>
                   <Button2>
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                    onPress={()=>  this.props.navigation.navigate("Tab")}
                  
                >
                    <Image style={{marginLeft:20, marginRight:20, marginTop:5, marginBottom:5}} source={require('../../assets/gas.png')} />
                    <Text style={{color: '#0000fa'}}>Gasolina</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                    onPress={()=>this.props.navigation.navigate("List")}
                >
                    <Image style={{marginLeft:20, marginRight:20, marginTop:5, marginBottom:5}} source={require('../../assets/ethanol.png')} />
                    <Text style={{color: '#0000fa'}}>Etanol </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                    onPress={()=>  this.props.navigation.navigate("Tab")}
                >
                    <Image style={{marginLeft:20, marginRight:20, marginTop:5, marginBottom:5}} source={require('../../assets/petrol.png')} />
                    <Text style={{color: '#0000fa'}}>Diesel</Text>
                </TouchableOpacity>
                </Button2>
                    <Header>
                        <Text style={styles.text}>Distância</Text>
                        <Text style={styles.textValor}>{parseFloat(this.state.sliderdistancia.toFixed(0))} km</Text>
                    </Header>
                    <Slider
                    activeColor="#2ee6ff"
                      maximumValue={100}
                      value={10}
                      onValueChange={(value) => this.registerTheValue(value)}
                    />
                       
                  
                    <Header>
                        <Text style={styles.text}>Preço maximo</Text>
                        <Text style={styles.textValor}>{parseFloat(this.state.sliderpreco.toFixed(2))} R$</Text>
                    </Header>
                    <Slider
                    activeColor="#2ee6ff"
                      maximumValue={100}
                      value={10}
                      onValueChange={(value) => this.registerThePreco(value)}
                    />
                <Text style={styles.text}>Ordenar por</Text>    

                    <Button2>

              
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                    onPress={()=>this.props.navigation.navigate("List")}
                >
                    <Text style={{marginLeft:20, marginRight:20,color: '#0000fa'}}>Preço </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                    onPress={()=>  this.props.navigation.navigate("Tab")}
                >
                    <Text style={{marginLeft:20, marginRight:20,color: '#0000fa'}}>Distância</Text>
                </TouchableOpacity>
                </Button2>
                    <TouchableOpacity style={styles.buttons}
                     onPress={()=>  this.props.navigation.navigate("List")}>

                <Text style={styles.textValor}>Filtrar</Text></TouchableOpacity>
                   
    
             </View>
                   
            <View style={styles.footer}>

                    </View>
  </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff'
  },
  modalcontainer: {
      justifyContent:'center',
      borderRadius:20,
      alignItems:'center'
      
  },
  modalbutton: {
      marginTop: 10 , marginLeft:10, borderBottomColor:'#008799',borderBottomWidth:5, marginRight:10
  },
  contentContainer: {
      flex: 1, // pushes the footer to the end of the screen
  },
  footer: {
      backgroundColor:'#fff',
      flex:0.1,
      elevation:2,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 1,
    },
    buttons: {
      width: Dimensions.get('window').width,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#008799",
      borderRadius: 5,
      flexDirection:'row',
      marginTop: 15
    },
    centro: {
      flex:2,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingHorizontal:5
  },
    buttonsvert: {
      borderColor:"#008799",
      borderWidth: 3,
      borderRadius: 10,
      marginTop: 35,
      alignItems:'center',
    },
    text: {
      marginTop: 15 , marginLeft:5, fontWeight:'bold',fontSize:20
    },
    enderecotext: {
      marginTop: 5 , marginLeft:10,fontSize:15, marginBottom:20
    },
    textValor: {
     fontWeight:'bold', color:'#2ee6ff', fontSize:20
    },
    itemm: {
      backgroundColor:'#fff',
      borderRadius: 10,
      marginTop:10,
      flexDirection:'row',
      fontSize:15,
      width: Dimensions.get('window').width , // approximate a square
    },
    itemmSelected: {
      backgroundColor:'#ffa500',
      borderRadius: 10,
      marginTop:10,
      flexDirection:'row',
      justifyContent:'space-between',
      fontSize:15,
      width: Dimensions.get('window').width , // approximate a square
    },
    containerdinheiro: {
      backgroundColor:'#ff0000',
      height:40,
      width:40,
      borderRadius:30,
      marginLeft:10
    },
    containercancel: {
      backgroundColor:'#ff0000',
      width:40,
    
    },
    containerValor: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 1,
      backgroundColor:'#ffa500',
      borderRadius: 10,
      marginTop:15,
      marginBottom:15,
      flexDirection:'row',
      width:100,
      height:100
    },
});