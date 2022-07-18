
import { View, Text, SafeAreaView, ScrollView, } from 'react-native';
import { useState, useEffect } from 'react';
import Cedula from './Cedula';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        'http://cedulaapifinal.somee.com/api/Cedulas',
      );

      const json = await result.json()

      setData(json);
    };

    fetchData();
  }, []);
 
  return (
    <ScrollView style={{flex: 1}}>
    
    { data.map((cedula, i) => <Cedula person={cedula} key={i} /> )}
    </ScrollView>
  );
}


