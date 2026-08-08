// Tech icons live in /public/tech. Entries without a dedicated icon reuse an
// existing generic asset so the UI does not break. Project image asset TBD.

const tech = {
  python: {
    name: "Python",
    svg: "/tech/fastapi.svg",
    description:
      "Python is used for data processing, machine-learning workflow code, and backend logic in this project.",
  },
  sklearn: {
    name: "Scikit-learn",
    svg: "/tech/api.svg",
    description:
      "Scikit-learn provides machine-learning tools used for model training and prediction in the project pipeline.",
  },
  pandas: {
    name: "Pandas",
    svg: "/tech/api.svg",
    description:
      "Pandas is used for loading, cleaning, and preparing tabular sensor/CSV data for analysis.",
  },
  numpy: {
    name: "NumPy",
    svg: "/tech/api.svg",
    description:
      "NumPy supports numerical computation used alongside the project's data and ML workflow.",
  },
  fastapi: {
    name: "Flask/FastAPI",
    svg: "/tech/fastapi.svg",
    description:
      "Flask/FastAPI is used to serve the project's backend API or web-facing application layer.",
  },
  html: {
    name: "HTML",
    svg: "/tech/api.svg",
    description:
      "HTML structures the project's web interface.",
  },
  css: {
    name: "CSS",
    svg: "/tech/api.svg",
    description:
      "CSS styles the project's web interface.",
  },
  javascript: {
    name: "JavaScript",
    svg: "/tech/nodejs.svg",
    description:
      "JavaScript adds client-side behavior to the project's web interface.",
  },
  mongodb: {
    name: "CSV",
    svg: "/tech/api.svg",
    description:
      "CSV is used for storing and exchanging recorded sensor/session data in the project pipeline.",
  },
  api: {
    name: "Serial/WiFi",
    svg: "/tech/websocket.svg",
    description:
      "Serial and WiFi communication connect the ESP8266 NodeMCU sensor node with the software pipeline.",
  },
  docker: {
    name: "ESP8266 NodeMCU",
    svg: "/tech/api.svg",
    description:
      "ESP8266 NodeMCU is the microcontroller platform used for sensor data collection in this project.",
  },
  rag: {
    name: "GSR Sensor",
    svg: "/tech/api.svg",
    description:
      "A GSR sensor captures galvanic skin response signals as part of the monitoring hardware setup.",
  },
  mcp: {
    name: "Pulse Sensor",
    svg: "/tech/api.svg",
    description:
      "A pulse sensor captures heart-related signals as part of the monitoring hardware setup.",
  },
  cicd: {
    name: "Random Forest",
    svg: "/tech/api.svg",
    description:
      "Random Forest is the machine-learning model approach used in the project's prediction pipeline.",
  },
  git: {
    name: "Arduino IDE",
    svg: "/tech/git.svg",
    description:
      "Arduino IDE is used for developing and uploading firmware to the ESP8266 NodeMCU.",
  },
};

const projects = [
  {
    id: "01",
    title: "Anxiety Monitor",
    subtitle:
      "Hardware + software project that monitors physiological signals using sensors, Python, and a web-facing stack.",
    role: "Developer",
    associated: "Personal / Academic Project",
    duration: "TBD",
    techStack: [
      tech.docker,
      tech.rag,
      tech.mcp,
      tech.python,
      tech.sklearn,
      tech.pandas,
      tech.numpy,
      tech.cicd,
      tech.fastapi,
      tech.html,
      tech.css,
      tech.javascript,
      tech.git,
      tech.mongodb,
      tech.api,
    ],
    features: [
      "ESP8266 NodeMCU with GSR and pulse sensors",
      "Python data pipeline with Pandas and NumPy",
      "Random Forest model via Scikit-learn",
      "Flask/FastAPI backend with HTML/CSS/JavaScript UI",
    ],
    // TODO: replace with a dedicated Anxiety Monitor image asset when available
    image: "/project/avatar.svg",
    description: `
      <p>
        Anxiety Monitor is a project that combines an ESP8266 NodeMCU sensor setup (GSR sensor and pulse sensor) with a Python-based software pipeline to work with physiological signal data.
      </p>
      <p>
        The software side uses Python with Pandas, NumPy, and Scikit-learn (Random Forest), along with Flask/FastAPI and an HTML, CSS, and JavaScript interface. Data handling includes CSV storage and Serial/WiFi communication between the hardware and the application stack. Firmware work is done with the Arduino IDE.
      </p>
    `,
    challenges: "TBD — details to be added",
    impact: "TBD — details to be added",
    liveDemo: null,
    repo: null,
    direction: "left",
  },
];

export default projects;
