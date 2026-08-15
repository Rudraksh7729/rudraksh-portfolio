// Tech icons live in /public/tech. Entries without a dedicated icon reuse an
// existing generic asset so the UI does not break.

const tech = {
  esp8266: {
    name: "ESP8266 NodeMCU",
    svg: "/tech/api.svg",
    description:
      "ESP8266 NodeMCU is the microcontroller platform used for sensor data collection in this project.",
  },
  gsr: {
    name: "GSR Sensor",
    svg: "/tech/api.svg",
    description:
      "A GSR sensor captures galvanic skin response signals as part of the monitoring hardware setup.",
  },
  pulse: {
    name: "Pulse Sensor",
    svg: "/tech/api.svg",
    description:
      "A pulse sensor captures heart-related signals as part of the monitoring hardware setup.",
  },
  python: {
    name: "Python",
    svg: "/tech/fastapi.svg",
    description:
      "Python is used for data processing, machine-learning workflow code, and backend logic in this project.",
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
  sklearn: {
    name: "Scikit-learn",
    svg: "/tech/api.svg",
    description:
      "Scikit-learn provides machine-learning tools used for model training and prediction in the project pipeline.",
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
  arduino: {
    name: "Arduino IDE",
    svg: "/tech/git.svg",
    description:
      "Arduino IDE is used for developing and uploading firmware to the ESP8266 NodeMCU.",
  },
  csv: {
    name: "CSV",
    svg: "/tech/api.svg",
    description:
      "CSV is used for storing and exchanging recorded sensor/session data in the project pipeline.",
  },
  serialWifi: {
    name: "Serial Communication and WiFi",
    svg: "/tech/websocket.svg",
    description:
      "Serial communication and WiFi connect the ESP8266 NodeMCU sensor node with the software pipeline.",
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
    duration: "12 Weeks",
    techStack: [
      tech.esp8266,
      tech.gsr,
      tech.pulse,
      tech.python,
      tech.pandas,
      tech.numpy,
      tech.sklearn,
      tech.fastapi,
      tech.html,
      tech.css,
      tech.javascript,
      tech.arduino,
      tech.csv,
      tech.serialWifi,
    ],
    features: [
      "ESP8266 NodeMCU with GSR and pulse sensors",
      "Python data pipeline with Pandas and NumPy",
      "Scikit-learn for model training and prediction",
      "Flask/FastAPI backend with HTML/CSS/JavaScript UI",
    ],
    image: "/project/anxiety-monitor.png",
    description: `
      <p>
        Anxiety Monitor is an integrated hardware and software system that uses an ESP8266 NodeMCU with GSR and pulse sensors to collect physiological signals in real time.
      </p>
      <p>
        Sensor data is processed in Python with Pandas and NumPy, then used with Scikit-learn (Random Forest) for anxiety-level prediction. A Flask/FastAPI backend and HTML, CSS, and JavaScript interface support live monitoring, while CSV storage, Serial/WiFi communication, and Arduino IDE firmware connect the hardware and application layers.
      </p>
    `,
    challenges:
      "Integrating noisy physiological sensor readings, maintaining reliable Serial/WiFi communication, and converting real-time sensor data into consistent features for anxiety-level prediction.",
    impact:
      "Enabled real-time physiological monitoring, anxiety-level prediction, live dashboard visualization, and warning alerts through an integrated hardware, backend, ML, and frontend system.",
    liveDemo: null,
    repo: null,
    direction: "left",
  },
];

export default projects;
