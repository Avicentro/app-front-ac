import { Document, Page, Text, StyleSheet, Image, Font, View} from "@react-pdf/renderer"
import { PropsWithRef } from "react"
import Html from 'react-pdf-html';


const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
options.timeZoneName = 'short';


const PdfProgramming = (data: PropsWithRef<any>) => {
    console.log(data);
    return(
        <Document>
        <Page size={'LETTER'} style={style.body} >
            <Text style={style.title}>Programación - Inversiones Avicentro S.A.S</Text>
            <Text style={style.subTitle}>{new Date().toLocaleString('es-CO', options)}</Text>
            {/* <Text style={style.text}>{JSON.stringify(data.data)}</Text> */}
            { data['data'].map((item: any) =>(
                <View style={item.type === 'travel' ? style.travel : style.rest} key={item.id}>
                    <View style={style.data}>
                        <View style={style.detailData}><Text style={style.textBold}>Hora: </Text><Text>{new Date(item.dateStart).toLocaleTimeString('es-CO')}</Text></View>
                        { item.type === 'travel' &&  <View style={style.detailData}><Text style={style.textBold}>Cantidad: </Text><Text>{item.countChickens}</Text></View>}
                        { item.type === 'rest' &&  <View style={style.detailData}><Text style={style.textBold}>Tipo de descanso: </Text><Text>{item.typeRest}</Text></View>}
                        
                    </View>
                    <View style={style.data}>
                    { item.type === 'travel' && <View style={style.detailData}><Text style={style.textBold}>Clientes: </Text><Text>{item.customer?.name}</Text></View> }
                    { item.type === 'travel' && <View style={style.detailData}><Text style={style.textBold}>Proveedor: </Text><Text>{item.supplier?.name}</Text></View>}                          
                    </View>
                    { (item.observation !== '' && item.observation !== null && item.observation !== undefined) && <View style={style.obs}> <Text style={style.textBold}>Observaciones: </Text> <Html style={style.text}>{item.observation}</Html></View>}
                </View>
            ))}
        </Page>
        </Document>
    )
}

const style = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
        fontSize: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    subTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    text: {
        fontSize: 12,
    },
    textBold: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    img: {
        width: 200,
        marginVertical: 5,
        marginHorizontal: 5
    },
    travel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal:5,
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        border: '1px solid black'
    },
    rest: {
        display: 'flex',
        backgroundColor: 'yellow',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal:5,
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        border: '1px solid black'
    },
    data: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    detailData: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 250,
        marginRight: 10,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    obs: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 5,
        justifyContent: 'flex-start'
    }
})

export default PdfProgramming