import React from 'react'
import { View , Text , ScrollView , Image  , StyleSheet , TouchableOpacity , Dimensions , FlatList } from 'react-native'
import { Header , Avatar , Nome , Post , PostImage , User , Desc , Button} from './styles'
import Modal from "react-native-modal";


  
export default class App extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
            itemSelected: " ",
            listApi: []
           

          }
    }
    async componentDidMount() {
      try {
        const response = await fetch(
          `http://189.86.30.9/preco/public/api/v1/precos?l=1000&s=0` 
        )
        const data = await response.json()
        this.setState({listApi: data})
      } catch(err) {
          console.log("Error fetching data-----------", err);
      }
  }
    toggleModal = (id) => {
        this.setState({
          itemSelected: id
          });
      };
      getModal() {
        return this.state.itemSelected
      };

      setItem(item) {
        if(item.rn != this.state.itemSelected){
            return(
                <TouchableOpacity style={styles.itemm}
                 onPress={()=> this.toggleModal(item.rn)}
                 >
                    <View    style={styles.containerdinheiro}><Nome>R$</Nome></View>
                           <View style={styles.containerValor}><Text style={styles.textValor}> {item.preco}</Text></View>
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
            onPress={()=> this.toggleModal(" ")}
             >
                <View    style={styles.containercancel}><Nome>X</Nome></View>
                            <View style={styles.modalcontainer}>
                                <Text style={styles.text}>{item.empresa}</Text>
                                <Text style={styles.enderecotext}>{item.municipio}</Text>
                              
                            </View>  
                            <View>
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
                                <Text style={styles.text}>{item.name}</Text>
                                <Text style={styles.enderecotext}>{item.end}</Text>
                              
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
            
            <View style={styles.container}>
            
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
                    data={this.state.listApi}
                    renderItem={({ item }) => this.setItem(item)}
                    keyExtractor={item => item.id}
                    />
                </View>
                
                <View style={styles.footer}>
                    
                </View>
               
          
            </View>
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
        flex: 1 // pushes the footer to the end of the screen
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
        marginTop: 5 , marginLeft:10,fontSize:15, marginBottom:20
      },
      textValor: {
       fontWeight:'bold', color:'#ff0000', fontSize:25
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