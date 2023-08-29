import {
  Document,
  Page,
  Text,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";
import { PropsWithRef } from "react";
import Html from "react-pdf-html";

const fechaActual = new Date();

// Sumar 1 día (en milisegundos)
fechaActual.setDate(fechaActual.getDate() + 1);

// Obtener los componentes de la fecha (año, mes y día)
const año = fechaActual.getFullYear();
const mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, por lo que se suma 1
const dia = fechaActual.getDate();
const logo = "https://prometeo-avicentro.s3.us-east-2.amazonaws.com/prometeo-logo.png";


// Formatear la fecha para que tenga el formato deseado (por ejemplo, 'YYYY-MM-DD')
const fechaFormateada = año + '-' + (mes < 10 ? '0' : '') + mes + '-' + (dia < 10 ? '0' : '') + dia;

const PdfProgramming = (data: PropsWithRef<any>) => {
  console.log(data);
  return (
    <Document>
      <Page size={"LETTER"} style={style.body}>
        <Image style={style.img} src={logo} />
        <Text style={style.title}>
          Programación - Inversiones Avicentro S.A.S
        </Text>
        <Text style={style.subTitle}>
          Fecha: {fechaFormateada}
        </Text>
        {/* <Text style={style.text}>{JSON.stringify(data.data)}</Text> */}
        <View style={style.data}>
          <Text style={style.detailDataTableTime}>Hora</Text>
          <Text style={style.detailDataTable}>Clientes</Text>
          <Text style={style.detailDataTable}>Proveedor</Text>
          <Text style={style.detailDataTableChi}>Cantidad</Text>
          <Text style={style.detailDataTableObs}>Observaciones</Text>
        </View>
        {data["data"].map((item: any) => (
          <View
            style={item.type === "travel" ? style.travel : style.rest}
            key={item.id}
          >
            <View style={style.data}>
              <View style={style.detailDataTime}>
                <Text>
                  {new Date(item.dateStart).toLocaleTimeString([], {
                    hour12: false,
                  })}
                </Text>
              </View>
              {item.type === "rest" && (
                <View style={style.detailData}>
                  <Text style={style.text}>Descanso - {item.typeRest}</Text>
                </View>
              )}
              {item.type === "travel" && (
                <View style={style.detailData}>
                  <Text style={style.text}>{item.customer?.name}</Text>
                </View>
              )}
              {item.type === "travel" && (
                <View style={style.detailData}>
                  <Text style={style.text}>{item.supplier?.name}</Text>
                </View>
              )}
              {item.type === "travel" && (
                <View style={style.detailDataChi}>
                  <Text style={style.text}>{item.countChickens}</Text>
                </View>
              )}
              {item.observation !== "" &&
                item.observation !== null &&
                item.observation !== undefined && (
                  <View style={style.obs}>
                    <Html style={style.text}>{item.observation}</Html>
                  </View>
                )}
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
};

const style = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontSize: 10,
  },
  title: {
    fontSize: 24,
    marginHorizontal: 10,
    fontFamily: "Helvetica-Bold",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 10,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    marginHorizontal: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  textBold: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
  },
  img: {
    width: 150,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  travel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottom: "1px solid #F7F7FC",
  },
  rest: {
    display: "flex",
    backgroundColor: "yellow",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  data: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  detailData: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 100,
    fontSize: 10,
    margin: 'auto 0'
  },
  detailDataObs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 150,
    margin: 'auto 0'
  },
  detailDataTableObs: {
    display: "flex",
    justifyContent: "flex-start",
    width: 150,
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
  },
  detailDataChi: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 70,
    fontWeight: "bold",
    margin: 'auto 0',
    fontSize: 10,
  },
  detailDataTime: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 60,
    fontWeight: "bold",
    margin: 'auto 0',
    fontSize: 10,
  },
  detailDataTable: {
    display: "flex",
    justifyContent: "flex-start",
    width: 100,
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  detailDataTableChi: {
    display: "flex",
    justifyContent: "flex-start",
    width: 70,
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  detailDataTableTime: {
    display: "flex",
    justifyContent: "flex-start",
    width: 60,
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
  },
  obs: {
    width: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 'auto 0'
  },
});

export default PdfProgramming;
