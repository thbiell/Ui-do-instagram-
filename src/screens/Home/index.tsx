
import { LinearGradient } from "expo-linear-gradient";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Bookmark from "../../assets/Bookmark.svg";
import Comment from "../../assets/Comment.svg";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import Heart from "../../assets/Heart.svg";
import image from "../../assets/image.png";
import Logo from "../../assets/logo.svg";
import Message from "../../assets/message.svg";
import Points from "../../assets/points.svg";
import Share from "../../assets/Share.svg";
import Stroke from "../../assets/stroke.svg";

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto2,
  },
];

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo width={127} height={49} />
        <View style={styles.headerOptions}>
          <Stroke />
          <Message />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View style={styles.stores}>
          <FlatList
            data={DATA}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <LinearGradient
                colors={["#D52865", "#F7B55A"]}
                style={styles.storesCard}
                key={item.item.id}
              >
                <Image
                  style={styles.storesCardImage}
                  source={item.item.pathURL}
                />
              </LinearGradient>
            )}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "data:image/jpeg;base64,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" }}
              />
              <Text style={styles.contentHeaderLeftText}>Neymar</Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image source={image} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                clicslab How IOT is changing the world?
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                View all 3 comments
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                3 hours ago See Translation
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={foto}
              />
              <Text style={styles.contentHeaderLeftText}>Diana</Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image source={image} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                clicslab How IOT is changing the world?
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                View all 3 comments
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                3 hours ago See Translation
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 50,
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,
  },
  stores: {
    height: 104,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  storesCard: {
    borderRadius: 50,
    marginRight: 14,
  },
  storesCardImage: {
    width: 64,
    height: 64,
    borderRadius: 50,
    margin: 2,
  },
  content: {
    width: "100%",
    marginBottom: 20,
  },
  contentHeader: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  contentHeaderLeft: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  contentHeaderLeftText: {
    color: "#fff",
  },
  contentImage: {
    width: "100%",
    height: 355,
  },
  contentFooter: {},
  contentFooterOptions: {
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentFooterOptionsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  contentFooterText: {
    color: "#fff",
  },
  contentFooterTexts: {
    paddingLeft: 20,
    gap: 10,
  },
  contentFooterText1: {
    fontSize: 14,
  },

  contentFooterText2: {
    fontSize: 14,
  },
  contentFooterText3: {
    fontSize: 10,
  },
});