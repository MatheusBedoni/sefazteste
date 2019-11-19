<View style={styles.footer}>
                <Button>
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                >
                    <Image style={{marginLeft:10, marginRight:10, marginTop:5, marginBottom:5}} source={require('../../assets/bar_code.png')} />
                    <Text style={{color: '#0000fa'}}>código de</Text>
                    <Text style={{color: '#0000fa'}}>barras</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                    onPress={()=> this.toggleModal()}
                >
                    <Image style={{marginLeft:20, marginRight:20, marginTop:5, marginBottom:5}} source={require('../../assets/fuelstation.png')} />
                    <Text style={{color: '#0000fa'}}>Preço do</Text>
                    <Text style={{color: '#0000fa'}}>comustivel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                >
                    <Image style={{marginLeft:20, marginRight:20, marginTop:5, marginBottom:5}} source={require('../../assets/clipboard.png')} />
                    <Text style={{color: '#0000fa'}}>Lista de </Text>
                    <Text style={{color: '#0000fa'}}>compras </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                >
                    <Image style={{marginLeft:20, marginRight:20, marginTop:5, marginBottom:5}} source={require('../../assets/filter.png')} />
                    <Text style={{color: '#0000fa'}}>Meus</Text>
                    <Text style={{color: '#0000fa'}}>filtros</Text>
                </TouchableOpacity>
                </Button>
                </View>