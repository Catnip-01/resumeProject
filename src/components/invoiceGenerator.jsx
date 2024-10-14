import React, { useState } from "react";
import { styles, formStyles } from "./resumeStyles";
import {
  Font,
  Document,
  Page,
  Text,
  View,
  PDFDownloadLink,
  Path,
  Svg,
} from "@react-pdf/renderer";
import roboto from "/home/catnip/Desktop/college/projects/resumeMaker/client/src/fonts/Roboto-Regular.ttf";
import robotoBold from "/home/catnip/Desktop/college/projects/resumeMaker/client/src/fonts/Roboto-Black.ttf";
import lightSvg from "../svg/light.svg";
import darkSvg from "../svg/moon.svg";

Font.register({
  family: "roboto",
  src: roboto,
});

console.log("registered fonts : " + JSON.stringify(Font.getRegisteredFonts()));

// Define the PDF Document component
const InvoiceDocument = (resume) => (
  <Document>
    <Page size="A4" style={{ padding: 20 }}>
      {/* Student Name Header */}
      <View style={styles.studentNameHeader}>
        <Text>{resume.studentName || "testName"}</Text>
      </View>

      {/* Location */}
      <View style={styles.location}>
        <Text>{resume.location || "testLocation"}</Text>
      </View>

      <Text>{"\n"}</Text>

      {/* Phone Number and Email Links */}
      <View style={styles.links}>
        <Text>{resume.phoneNumber || "+91-1234567890"}</Text>
        <Text>{resume.email || "testEmail@example.com"}</Text>
        <Text>{resume.linkedin || "testLinkedInProfile"}</Text>
      </View>

      <Text>{"\n"}</Text>

      {/* Education Section */}
      <View style={styles.topicNames}>
        <Text>Education</Text>
      </View>
      <View style={{ borderBottom: "1px solid #000" }} />
      <Text>{"\n"}</Text>

      {/* College Name */}
      <View style={{ fontFamily: "robotoBold", fontSize: 12 }}>
        <Text>{resume.collegeName || "testCollegeName"}</Text>
      </View>

      {/* Degree, Course, CGPA */}
      <View
        style={{ display: "flex", flexDirection: "row", gap: 3, fontSize: 12 }}
      >
        <Text>
          {resume.degreeName || "testDegreeName"},{" "}
          {resume.courseName || "testCourseName"}
        </Text>
        <Text style={{ fontFamily: "robotoBold" }}>
          CGPA: {resume.cgpa || "0.0"}
        </Text>
      </View>

      {/* Second PUC */}
      <View>
        <Text style={{ fontFamily: "robotoBold", fontSize: 12 }}>
          {resume.secondPUC || "testSecondPUC"}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            fontSize: 12,
          }}
        >
          <Text>Upper Secondary Graduation - Percentage: </Text>
          <Text style={{ fontFamily: "robotoBold" }}>
            {resume.secondPUPercentage + "%"}
          </Text>
        </View>
      </View>

      <Text>{"\n"}</Text>

      {/* Projects */}
      <View style={styles.topicNames}>
        <Text>Projects</Text>
      </View>
      <View style={{ borderBottom: "1px solid #000" }} />
      <Text>{"\n"}</Text>

      {resume.projects && resume.projects.length > 0 ? (
        resume.projects.map((project, index) => (
          <View key={index} style={styles.project}>
            <View style={styles.projectNameYear}>
              <Text style={styles.projectName}>
                {project.name || "testProjectName"}
              </Text>
              <Text style={styles.projectYear}>
                {project.year || "testYear"}
              </Text>
            </View>
            <Text>{project.techStack || "testTechStack"}</Text>
            <Text>{project.description || "testDescription"}</Text>
            <Text>{"\n"}</Text>
          </View>
        ))
      ) : (
        <Text>No projects listed</Text>
      )}

      {/* Skills */}
      <View style={styles.topicNames}>
        <Text>Skills</Text>
      </View>
      <View style={{ borderBottom: "1px solid #000" }} />
      <Text>{"\n"}</Text>
      <View style={styles.skills}>
        <Text>
          Programming Languages:{" "}
          {resume.programmingLanguages || "testProgrammingLanguages"}
        </Text>
        <Text>Services: {resume.services || "testServices"}</Text>
      </View>
    </Page>
  </Document>
);

const InvoiceGenerator = () => {
  const [studentName, setStudentName] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [secondPUC, setSecondPUC] = useState("");
  const [secondPUPercentage, setSecondPUPercentage] = useState("");
  const [theme, setTheme] = useState("");

  // State for projects
  const [projects, setProjects] = useState([
    { name: "", year: "", techStack: "", description: "" },
  ]);

  const [programmingLanguages, setProgrammingLanguages] = useState("");
  const [services, setServices] = useState("");
  // const [developerTools, setDeveloperTools] = useState("");

  // Function to handle project changes
  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  // Function to add a new project
  const addProject = () => {
    if (projects.length < 5) {
      setProjects([
        ...projects,
        { name: "", year: "", techStack: "", description: "" },
      ]);
    }
  };

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const containerStyle =
    theme === "light" ? formStyles.containerLight : formStyles.containerDark;

  const inputStyle =
    theme === "light" ? formStyles.inputLight : formStyles.inputDark;

  const themeIcon = theme === "light" ? lightSvg : darkSvg;

  return (
    <div style={containerStyle}>
      <div
        style={{
          position: "fixed",
          top: "2.5%",
          right: "2.5%",
        }}
      >
        <button
          onClick={changeTheme}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <img
            src={themeIcon}
            alt="Toggle Theme"
            style={{
              width: "24px",
              height: "24px",
              border: "1px solid black",
              borderRadius: "50%",
              padding: "7px",
            }}
          />
        </button>
      </div>

      <h1>Generate Resume</h1>
      <div style={formStyles.personalDetails}>
        <h2>Personal Details : </h2>
        <label style={formStyles.label}>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter name"
            style={inputStyle}
          />
        </label>

        <label style={formStyles.label}>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            style={inputStyle}
          />
        </label>
      </div>

      <hr style={{ width: "100%" }} />
      <h2>Contact Details:</h2>

      <div style={formStyles.contactDetails}>
        <label style={formStyles.label}>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter phone number"
            style={inputStyle}
          />
        </label>

        <label style={formStyles.label}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            style={inputStyle}
          />
        </label>

        <label style={formStyles.label}>
          <input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="Enter LinkedIn profile"
            style={inputStyle}
          />
        </label>
      </div>

      <hr style={{ width: "100%" }} />
      <h2>College Details:</h2>

      <div style={formStyles.collegeDetails}>
        {/* <h2>College Details:</h2> */}
        <label style={formStyles.label}>
          <input
            type="text"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            placeholder="Enter college"
            style={inputStyle}
          />
        </label>

        <label style={formStyles.label}>
          <input
            type="text"
            value={degreeName}
            onChange={(e) => setDegreeName(e.target.value)}
            placeholder="Enter degree"
            style={inputStyle}
          />
        </label>

        <label style={formStyles.label}>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Enter course"
            style={inputStyle}
          />
        </label>

        <label style={formStyles.label}>
          <input
            type="text"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            placeholder="Enter CGPA"
            style={inputStyle}
          />
        </label>
      </div>

      <hr style={{ width: "100%" }} />
      <h2>PUC Details:</h2>

      <div style={formStyles.pucDetails}>
        {/* <h2>PUC Details:</h2> */}
        <label style={formStyles.label}>
          <input
            type="text"
            value={secondPUC}
            onChange={(e) => setSecondPUC(e.target.value)}
            placeholder="Enter second PUC"
            style={inputStyle}
          />
        </label>

        <label style={formStyles.label}>
          <input
            type="text"
            value={secondPUPercentage}
            onChange={(e) => setSecondPUPercentage(e.target.value)}
            placeholder="Enter second PUC percentage"
            style={inputStyle}
          />
        </label>
      </div>

      <hr style={{ width: "100%" }} />
      <h2>Projects:</h2>

      {/* Projects */}
      <div style={formStyles.projectDetails}>
        {/* <h3>Projects:</h3> */}
        {projects.map((project, index) => (
          <div key={index}>
            <label style={formStyles.label}>
              <input
                type="text"
                value={project.name}
                onChange={(e) =>
                  handleProjectChange(index, "name", e.target.value)
                }
                placeholder={`Enter project ${index + 1} name`}
                style={inputStyle}
              />
            </label>

            <label style={formStyles.label}>
              <input
                type="text"
                value={project.year}
                onChange={(e) =>
                  handleProjectChange(index, "year", e.target.value)
                }
                placeholder={`Enter project ${index + 1} year`}
                style={inputStyle}
              />
            </label>

            <label style={formStyles.label}>
              <input
                type="text"
                value={project.techStack}
                onChange={(e) =>
                  handleProjectChange(index, "techStack", e.target.value)
                }
                placeholder="Enter the tech stack"
                style={inputStyle}
              />
            </label>

            <label style={formStyles.label}>
              <textarea
                value={project.description}
                onChange={(e) =>
                  handleProjectChange(index, "description", e.target.value)
                }
                placeholder="Enter project description"
                rows={10}
                style={inputStyle}
              />
            </label>
          </div>
        ))}
      </div>

      {projects.length < 5 && (
        <button onClick={addProject}>Add Another Project</button>
      )}

      {/* Skills */}

      <hr style={{ width: "100%" }} />
      <h2>Skills:</h2>

      <label style={formStyles.label}>
        <input
          type="text"
          value={programmingLanguages}
          onChange={(e) => setProgrammingLanguages(e.target.value)}
          placeholder="Enter programming languages"
          style={inputStyle}
        />
      </label>

      <label style={formStyles.label}>
        <input
          type="text"
          value={services}
          onChange={(e) => setServices(e.target.value)}
          placeholder="Enter the Services you have used"
          style={inputStyle}
        />
      </label>

      {/* PDF Download */}

      <PDFDownloadLink
        document={
          <InvoiceDocument
            studentName={studentName}
            location={location}
            phoneNumber={phoneNumber}
            email={email}
            linkedin={linkedin}
            collegeName={collegeName}
            degreeName={degreeName}
            courseName={courseName}
            cgpa={cgpa}
            secondPUC={secondPUC}
            secondPUPercentage={secondPUPercentage}
            projects={projects}
            programmingLanguages={programmingLanguages}
            services={services}
            // developerTools={developerTools}
          />
        }
        fileName={`${studentName}_Resume.pdf`}
        style={formStyles.downloadButton}
      >
        {({ loading }) =>
          loading ? "Generating PDF..." : "Download Resume PDF"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default InvoiceGenerator;
