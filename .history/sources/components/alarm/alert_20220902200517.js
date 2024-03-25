import { StyleSheet, Text, View, Image } from "react-native";

function elapsedText(date) {
  // 초 (밀리초)
  const seconds = 1;
  // 분
  const minute = seconds * 60;
  // 시
  const hour = minute * 60;
  // 일
  const day = hour * 24;

  var today = new Date();
  var elapsedTime = Math.trunc((today.getTime() - date) / 1000);

  var elapsedText = "";
  if (elapsedTime < seconds) {
    elapsedText = "방금 전";
  } else if (elapsedTime < minute) {
    elapsedText = elapsedTime + "초 전";
  } else if (elapsedTime < hour) {
    elapsedText = Math.trunc(elapsedTime / minute) + "분 전";
  } else if (elapsedTime < day) {
    elapsedText = Math.trunc(elapsedTime / hour) + "시간 전";
  } else if (elapsedTime < day * 15) {
    elapsedText = Math.trunc(elapsedTime / day) + "일 전";
  } else {
    elapsedText = SimpleDateTimeFormat(date, "yyyy.M.d");
  }

  return elapsedText;
}

export default function AlertItem(props) {
  const elapsedTime = elapsedText(props.time);
  console.log(props.time);
  return (
    <View style={styles.alert}>
      <Text style={styles.alertTitle}>{props.title}</Text>
      <Text textBreakStrategy={"simple"} style={styles.alertBody}>
        {props.content}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.alertTime}>{elapsedTime}</Text>
        <Image
          source={require("./assets/gachi-logo.png")}
          style={styles.alertLogo}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alert: {
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 10,
  },
  alertBody: {
    marginBottom: 5,
    fontSize: 15,
  },
  alertLogo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    opacity: 0.3,
    justifyContent: "flex-end",
  },
  alertTime: {
    fontSize: 13,
    opacity: 0.4,
    marginTop: 10,
  },
});
