import { Document, Page, Text, StyleSheet, Image, Font, View} from "@react-pdf/renderer"
import { PropsWithRef } from "react"
import Html from 'react-pdf-html';


const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
options.timeZoneName = 'short';
options.timeZone = 'America/Bogota';


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
                        <View style={style.detailData}>
                            <Text style={style.textBold}>Hora: </Text>
                            <Text>{new Date(item.dateStart).toLocaleTimeString('es-CO', {timeZone: 'America/Bogota'})}</Text>
                        </View>
                        { item.type === 'travel' &&  <View style={style.detailData}><Text style={style.textBold}>Cantidad: </Text><Text style={style.text}>{item.countChickens}</Text></View>}
                        { item.type === 'rest' && <View style={style.detailData}><Text style={style.textBold}>Tipo de descanso: </Text><Text style={style.text}>{item.typeRest}</Text></View>}
                        { item.type === 'travel' && <View style={style.detailData}><Text style={style.textBold}>Clientes: </Text><Text style={style.text}>{item.customer?.name}</Text></View> }
                        { item.type === 'travel' && <View style={style.detailData}><Text style={style.textBold}>Proveedor: </Text><Text style={style.text}>{item.supplier?.name}</Text></View>} 
                    </View>
                    { (item.observation !== '' && item.observation !== null && item.observation !== undefined) && <View style={style.obs}> <Text style={style.textBold}>Observaciones: </Text> <Html style={style.text}>{item.observation}</Html></View>}
                </View>
            ))}
        </Page>
        </Document>
    )
}

Font.register({
    family: 'Signika Bold',
    src: 'https://fonts.gstatic.com/s/signika/v25/vEF72_JTCgwQ5ejvMV0Ox_Kg1UwJ0tKfX4zNpD8E4ASzH1r9ZjyoxDkmoNshjgx8M-U.woff2'
})

const style = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
        fontSize: 12,
    },
    title: {
        fontSize: 24,
        marginHorizontal: 10,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 5,
    },
    subTitle: {
        fontSize: 10,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginBottom: 20,
    },
    text: {
        fontSize: 12,
        fontFamily: 'Helvetica',
    },
    textBold: {
        fontSize: 10,
        fontFamily: 'Helvetica-Bold',
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
        paddingHorizontal: 3,
        paddingVertical: 3,
        borderBottom: '1px solid #F7F7FC'

    },
    rest: {
        display: 'flex',
        backgroundColor: 'yellow',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal:5,
        marginVertical: 5,
        paddingHorizontal: 3,
        paddingVertical: 3,
  
    },
    data: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    detailData: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: 200,
        marginRight: 10,
        fontWeight: 'bold',
    },
    obs: {
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        rowGap: 5,
        justifyContent: 'flex-start'
    }
})

export default PdfProgramming