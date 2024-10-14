import { StyleSheet, Font } from "@react-pdf/renderer";
import roboto from "/home/catnip/Desktop/college/projects/resumeMaker/client/src/fonts/Roboto-Regular.ttf";
import robotoBold from "/home/catnip/Desktop/college/projects/resumeMaker/client/src/fonts/Roboto-Black.ttf";

// Registering the fonts
// Font.register({
//   family: "Roboto",
//   src: "../fonts/Roboto-Black.ttf",
// });
// Font.register({
//   family: "Roboto",
//   src: "Roboto-Bold.ttf",
//   fontWeight: "bold",
// });
Font.register({
  family: "roboto",
  src: roboto,
  fontSize: 12,
  // fontWeight: "bold",
});
Font.register({
  family: "robotoBold",
  src: robotoBold,
  fontSize: 12,
});

// Define your styles
const styles = StyleSheet.create({
  studentNameHeader: {
    fontSize: 25,
    textDecoration: "underline",
    textAlign: "center",
    paddingBottom: "3px",
    fontFamily: "roboto",
    // fontWeight: "bold",
    // textDecoration: "italic",
  },
  topicNames: {
    fontFamily: "robotoBold",
    fontSize: 16,
    textAlign: "left",
    fontWeight: "bold",
  },
  location: {
    fontSize: 12,
    textAlign: "center",
  },
  links: {
    display: "flex",
    flexDirection: "row",
    fontSize: 12,
    justifyContent: "space-around",
  },

  project: {
    fontSize: 12,
  },
  projectNameYear: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  projectName: {
    textAlign: "left",
  },
  projectYear: {
    textAlign: "right",
  },
  skills: {
    fontSize: 12,
  },
});

// Form styles remain unchanged
const formStyles = {
  containerLight: {
    backGroundColor: "white",
    color: "black",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    maxWidth: "80%",
    margin: "10px auto",
    border: "1px solid black",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  containerDark: {
    margin: "10px",
    // fontFamily: "Geist Mono",
    backgroundColor: "#000",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    maxWidth: "80%",
    margin: "10px auto",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  container: {
    margin: "10px",
    fontFamily: "Geist Mono",
    backgroundColor: "#000",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    maxWidth: "80%",
    // maxHeight: "80%",
    margin: "0 auto",
    // backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  label: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "10px",
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  personalDetails: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  contactDetails: { display: "flex", flexDirection: "column", width: "100%" },
  collegeDetails: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  pucDetails: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  projectDetails: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  inputLight: {
    color: "black",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%", // Set uniform width for all inputs
    maxWidth: "80%", // Optional: limit the maximum width
    boxSizing: "border-box",
    margin: "10px 0", // Uniform margins
  },
  inputDark: {
    color: "white",
    backgroundColor: "black",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%", // Set uniform width for all inputs
    maxWidth: "80%", // Optional: limit the maximum width
    boxSizing: "border-box",
    margin: "10px 0", // Uniform margins
  },

  downloadButton: {
    marginTop: "20px",
    padding: "12px 20px",
    backgroundColor: "#262626",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    padding: "10px",
  },
};

export { styles, formStyles };
