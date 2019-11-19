import React from 'react'
import { View , Text , ScrollView , Image  , StyleSheet , TouchableOpacity , Dimensions , Platform , FlatList , SafeAreaView , TouchableHighlight } from 'react-native'
import { Header , Avatar , Nome , Post , PostImage , User , Desc , Button} from './style'
import Modal from "react-native-modal";

let seleitem = "x "
export default class App extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
            itemSelected:"X",
            sele:"34",
            data: [
              { rn: "0", empresa: "Posto 1", bairro :"Bairro1",municipio:"Municipio1",preco:4.30,image:"http://pioneiro.rbsdirect.com.br/imagesrc/25411641.jpg?w=620"},
              { rn: "1", empresa: "Posto 2",bairro:"Bairro2",municipio:"Municipio2",preco:5.50,image:"https://www.brasilagro.com.br/uploads/conteudo/conteudo/2019/10/zAK3L/bombas-etanol-e-gasolina-x1-fJIGsm_510x400.jpg"},
              { rn: "2", empresa: "Posto 3", bairro:"Bairro3",municipio:"Municipio3",preco:6.00,image:"https://www.brasilagro.com.br/uploads/conteudo/conteudo/2019/10/zAK3L/bombas-etanol-e-gasolina-x1-fJIGsm_510x400.jpg"},
              { rn: "3", empresa: "Posto 4", bairro:"Bairro4",municipio:"Municipio4",preco:7.2,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XbKjGM0zgbNyz31Y3lsOYs7m0qmtGmkTmPY84-xnfUkFEljKXQ&s" },
              { rn: "4", empresa: "Posto 5", bairro:"Bairro5",municipio:"Municipio5",preco:8.1,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XbKjGM0zgbNyz31Y3lsOYs7m0qmtGmkTmPY84-xnfUkFEljKXQ&s" },
              { rn: "5", empresa: "Posto 6", bairro:"Bairro6",municipio:"Municipio6",preco:9.8,image:"https://tercalivre.com.br/wp-content/uploads/2019/04/Gasolina-min-990x557.jpg" },
              { rn: "6", empresa: "Posto 7", bairro:"Bairro7",municipio:"Municipio7",preco:10.1,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0mpSb2MA2w7XRNn6UO73VJvXUA82DgROe2Vqk5YfZ4Muax8uV&s"},
            ]
          }
    }
    toggleModal = (id) => {
      seleitem = id
       
    };
    selected = (id) => {
        this.setState({itemSelected:id});
      };
      getModal() {
        return this.state.itemSelected
      };
      toggleModalNavi = (item) => {
       
          this.props.navigation.navigate("Detail",item);
      };
      setItem(item) {
          if( this.state.itemSelected != item.rn){
            return(
              <TouchableOpacity style={styles.itemm}
               onPress={ () =>  this.selected(item.rn)}
               >
                  <View  style={styles.containerdinheiro}><Nome>R$</Nome></View>
                         <View style={styles.containerValor}><Text style={styles.textValor}>{item.preco}</Text></View>
                              <View >
                                  <Text style={styles.text}>{item.empresa}</Text>
                                  <Text style={styles.enderecotext}>{item.bairro}</Text>
                                  <Text style={styles.enderecotext}>{item.municipio}</Text>
                              </View>                               
              </TouchableOpacity>                          
          ) 
          }else{
            return(
              <TouchableOpacity style={styles.itemmSelected}
              onPress={ () =>  this.selected("item.rn")}
               >
                  <View    style={styles.containercancel}><Nome>X</Nome></View>
                              <View style={styles.modalcontainer}>
                                  <Text style={styles.text}>{item.empresa}</Text>
                                  <Text style={styles.textValor}>{item.bairro}</Text>
                                
                              </View>  
                              <View>
                              <Text style={styles.textValor}></Text>
                              <Text style={styles.textValor}></Text>
                              <Text style={styles.textValor}></Text>
                              <Text style={styles.textValor}>R${item.preco}</Text></View>  
                                                  
              </TouchableOpacity>                          
          )     
          }
           
       
      };
      setSelectedItem(item) {
        
        return(
            <TouchableOpacity style={styles.itemmSelected}
            
             >
                <View    style={styles.containercancel}><Nome>X</Nome></View>
                            <View style={styles.modalcontainer}>
                                <Text style={styles.enderecotext}>{item.name}</Text>
                                <Text style={styles.text}>{item.end}</Text>
                              
                            </View>  
                            <View>
                            <Text style={styles.textValor}></Text>
                            <Text style={styles.textValor}></Text>
                            <Text style={styles.textValor}>R${item.valor}</Text></View>  
                                                
            </TouchableOpacity>                          
        )     
  };
    render() {
        return(
            
            <SafeAreaView  style={styles.container}>
            
                <View style={styles.contentContainer}> 
                   
                    <View style={{backgroundColor: '#008799', flexDirection: 'row'}}> 
                        <Nome>Menor</Nome>
                        <Desc>Preco</Desc>
                    </View>
                    <Header>
                        <Image  source={require('../../assets/search.png')} />
                        <Text style={{color: '#0000fa'}}>Pesquise pelo nome produto</Text>
                    </Header>
                    <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => this.setItem(item)}
                    keyExtractor={item => item.empresa}
                    />
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
        backgroundColor: '#1b78d7'
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
    buttons: {
      width: 200,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFF",
      borderRadius: 5,
      marginTop: 5
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
        borderColor:"#008799",
        borderWidth: 3,
        borderRadius: 10,
        marginRight: 20,
        marginTop: 35,
        marginLeft:20,
        alignItems:'center',
        flexDirection:'row',
      },
      buttonsvert: {
        borderColor:"#008799",
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 35,
        alignItems:'center',
      },
      text: {
        marginTop: 15 , marginLeft:10, fontWeight:'bold',fontSize:20
      },
      enderecotext: {
        marginTop: 5 , marginLeft:10,fontSize:15
      },
      textValor: {
       fontWeight:'bold', color:'#ff0000', fontSize:25, marginRight:10
      },
      itemm: {
        backgroundColor:'#fff',
        borderRadius: 10,
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        flexDirection:'row',
        fontSize:15,
       
      },
      itemmSelected: {
        backgroundColor:'#ffa500',
        borderRadius: 10,
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
        justifyContent:'space-between',
        fontSize:15,
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
        borderRadius: 10,
      },
      containerValor: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
        backgroundColor:'#ffff00',
        borderRadius: 10,
        marginTop:15,
        marginBottom:15,
        flexDirection:'row',
        width:100,
        height:100
      },
});