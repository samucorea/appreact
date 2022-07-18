import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, AzeretMono_900Black } from 'expo-font';
import { 

  Inter_400Regular,
  Inter_700Bold

} from '@expo-google-fonts/inter'


export default function Cedula(props) {
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold
      })
    
      if(!fontsLoaded) {
        return <Text>Cargando</Text>
      }
      

     const person = props.person
     const  nameParts = props.person.nombreCompleto.split(' ')
     const nombre = nameParts[0]
     const apellido = nameParts.slice(1).join(' ')

    return (
    <View style={styles.container}>
      <View>
       <Text style={styles.header}>República Dominicana</Text>
       <Text style={styles.header}>Junta Central Electoral</Text>
       <Text style={styles.header}>CÉDULA DE IDENTIDAD Y ELECTORAL</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={{ ...styles.text, flex: 0.4, alignItems:'center'}} >
            <Image source={{uri: `data:image/png;base64,${person.imagen}`}} style={{width:'90%',  height:'98%', resizeMode:'stretch'}}/>
        </View>
        <View style={{ ...styles.text, flex: 0.6, justifyContent: 'space-between'}} >
          <Text style={{fontFamily:'Inter_700Bold', textAlign:'center', marginBottom: 5, fontWeight:'bold', fontSize:25}}>{person.numeroCedula}</Text>
          <Text style={{...styles.text, fontSize: 10}}>LUGAR DE NACIMIENTO:</Text>
          <Text style={{...styles.text, marginBottom: 5}}>{person.lugarNacimiento}</Text>

          <Text style={{...styles.text, fontSize: 10}}>FECHA DE NACIMIENTO:</Text>
          <Text style={{...styles.text, marginBottom: 5}}>{person.fechaNacimiento}</Text>

          <View style={{flexDirection: 'row', alignItems:'baseline', }}><Text style={{fontSize: 10}}>NACIONALIDAD: </Text><Text style={{...styles.text, fontSize: 14}}>{person.nacionalidad}</Text></View>

          <View>
            <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row', alignItems:'baseline'}}>
              <Text style={{fontSize: 10}}>
                SEXO:  
              </Text>
               <Text style={styles.text}>
                 {person.sexo === 'M' ? 'MASCULINO' : 'FEMENINO'}
              </Text>
            </View>

            <View style={{flexDirection:'row', alignItems:'baseline', marginLeft: 5}}>
              <Text style={{...styles.text,fontSize: 10}}>
                SANGRE: 
              </Text>
              <Text style={styles.text}>
                 {person.tipoSangre}
              </Text>
            </View>

            
            </View>

            <View style={{flexDirection:'row', alignItems: 'baseline', marginBottom: 5}}>
              <Text style={{fontSize: 10}}>
                ESTADO CIVIL: 
              </Text>
              <Text style={styles.text}>
                 {person.estadoCivil}
              </Text>
            </View>
            <View style={{flexDirection:'row', alignItems: 'baseline', marginBottom: 5}}>
              <Text style={{fontSize: 10}}>
                OCUPACIÓN: 
              </Text>
              <Text style={styles.text}>
                 {person.ocupacion}
              </Text>
            </View>

            <View style={{flexDirection:'row', alignItems: 'baseline', margin:0, fontFamily:'Inter_400Regular'}}>
              <Text style={{...styles.text,fontSize: 10}}>
                FECHA DE EXPIRACION: 
              </Text>
              
            </View>
            <Text style={styles.text}>
                 {person.fechaExpiracion}
              </Text>
          </View>
        </View>
      </View>
      <View style={{paddingLeft:7}}>
        <Text style={{...styles.header,...styles.text, textAlign:'left'}}>{nombre}</Text>
        <Text style={{...styles.header,...styles.text, textAlign:'left'}}>{apellido}</Text>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
      fontSize: 15,
      textAlign: 'center',
      fontFamily:'Inter_400Regular',
      letterSpacing: 3
    },  
    container: {
      backgroundColor: '#fff',
      margin:'10px',
      borderColor: 'black',
      borderWidth: '1px',
      borderStyle: 'solid'
    },
    text: {
      fontFamily: 'Inter_400Regular',
    },
    infoContainer: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      marginTop: 10,
      fontFamily:'Inter_400Regular'
    }
  });