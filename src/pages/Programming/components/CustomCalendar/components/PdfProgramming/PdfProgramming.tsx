import {
  Document,
  Page,
  Text,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";
import { PropsWithRef, useEffect } from "react";
import Html from "react-pdf-html";
import ApiService from "../../../../../../core/newApi.services";
import { getFormat } from "../../../../pages/helpers/getFormat";
const fechaActual = new Date();

// Sumar 1 día (en milisegundos)
fechaActual.setDate(fechaActual.getDate() + 1);

// Obtener los componentes de la fecha (año, mes y día)
const año = fechaActual.getFullYear();
const mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, por lo que se suma 1
const dia = fechaActual.getDate();
const logo =
  "https://prometeo-avicentro.s3.us-east-2.amazonaws.com/prometeo-logo.png";

// Formatear la fecha para que tenga el formato deseado (por ejemplo, 'YYYY-MM-DD')
const fechaFormateada =
  año + "-" + (mes < 10 ? "0" : "") + mes + "-" + (dia < 10 ? "0" : "") + dia;

  const initList = 1;

const PdfProgramming = (dataTravel: PropsWithRef<any>) => {


  const dataProcess = async() => {
    const { data } = await ApiService.getData({}, `/programming-entry-time/date/${new Date().toISOString()}`);
    localStorage.setItem('dataPDF', JSON.stringify(data[0]));
    console.log(data[0])
  }

  useEffect(() => {
    dataProcess()
  }, []);
  
  const DatePdf = (date: Date) => {
    console.log(date);
    const newDate = new Date(date).toLocaleTimeString("es-CO", {
      timeZone: "America/Bogota",
    });
    return newDate;
  }

  return (
    <Document>
      <Page size={"LETTER"} style={style.body}>
        <View style={style.header}>
        <Image style={style.img} src={logo} />
        <View><Text style={style.title}>
          Programación - Inversiones Avicentro S.A.S
        </Text>
        <Text style={style.subTitle}>Fecha Registro: {fechaFormateada}</Text>
        <Text style={style.subTitle}>Hora de ingreso: {DatePdf(JSON.parse(localStorage.getItem('dataPDF') as string).entryHour)}</Text>
        <Text style={style.subTitle}>Fecha del proceso: {getFormat(new Date(JSON.parse(localStorage.getItem('dataPDF') as string).initProcess), true)}</Text>

        </View>        
        </View>
        <View style={style.data}>
          <Text style={style.detailDataTableNum}>#</Text>
          <Text style={style.detailDataTableTime}>Hora</Text>
          <Text style={style.detailDataTable}>Clientes</Text>
          <Text style={style.detailDataTable}>Proveedor</Text>
          <Text style={style.detailDataTableChi}>Cantidad</Text>
          <Text style={style.detailDataTableObs}>Observaciones</Text>
        </View>
        {dataTravel["data"].map((item: any, index: number) => (
          <View
            style={item.type === "travel" ? style.travel : style.rest}
            key={`${item.id}0${item.n_document}`}
          >
            <View style={style.data}>
              {item.type === "travel" && (
                <View style={style.detailDataNum}>
                  <Text>{initList + 1}</Text>
                </View>
              )}
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
                    <Html style={style.html} stylesheet={stylesheet}>{item.observation}</Html>
                  </View>
                )}
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
};

const stylesheet = {
  p: {
    margin: 0,
  },
};

const style = StyleSheet.create({
  body: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 15,
    fontSize: 8,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  title: {
    fontSize: 15,
    fontFamily: "Helvetica-Bold",
    marginBottom: 3,
  },
  subTitle: {
    fontSize: 8,
    fontFamily: "Helvetica",
    fontWeight: "bold",
  },
  text: {
    fontSize: 8,
    fontFamily: "Helvetica",
  },
  html: {
    fontSize: 8,
    fontFamily: "Helvetica",
  },
  textBold: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
  },
  img: {
    width: 150,
  },
  travel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 3,
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
    fontSize: 8,
    margin: "auto 0",
  },
  detailDataObs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 250,
    margin: "auto 0",
  },
  detailDataTableObs: {
    display: "flex",
    justifyContent: "flex-start",
    width: 250,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
  },
  detailDataChi: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 70,
    fontWeight: "bold",
    margin: "auto 0",
    fontSize: 8,
  },
  detailDataNum: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 20,
    fontWeight: "bold",
    margin: "auto 0",
    fontSize: 8,
  },
  detailDataTableNum: {
    display: "flex",
    justifyContent: "flex-start",
    width: 20,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
  },
  detailDataTime: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 60,
    fontWeight: "bold",
    margin: "auto 0",
    fontSize: 8,
  },
  detailDataTable: {
    display: "flex",
    justifyContent: "flex-start",
    width: 100,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
  },
  detailDataTableChi: {
    display: "flex",
    justifyContent: "flex-start",
    width: 70,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
  },
  detailDataTableTime: {
    display: "flex",
    justifyContent: "flex-start",
    width: 60,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
  },
  obs: {
    width: 230,
    display: "flex",
    fontSize: 8,
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: "0",
  },
});

export default PdfProgramming;
