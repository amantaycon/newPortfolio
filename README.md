# 🟢 Aman Kumar — Interactive Spring Boot & Hacker Portfolio

```text
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| |  | | | || (_| |  ) ) ) )
  '  |____| .__|_|  |_|_| |__,, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot Developer :: (v3.2.0)
```

Welcome to the command center. This is a premium, interactive, retro-futuristic dark developer console dashboard and portfolio built to showcase **Aman Kumar's** full-stack developer profile, credentials, and projects.

---

## 🛠️ Tech Stack & Key Technologies

* **Frontend Framework**: [React.js](https://react.dev/) + [Vite](https://vitejs.dev/) (fast, HMR-enabled builder)
* **Styling & Theme Engine**: [Tailwind CSS](https://tailwindcss.com/) with customized colors (`matrix-green`, `cyber-cyan`, `cyber-purple`) supporting live aesthetic toggling.
* **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth layout changes + [Lottie React](https://github.com/Gamote/lottie-react) for custom vector animations.
* **Typography**: Monospaced *Fira Code* (for terminal widgets and IDE mockups) and sans-serif *Space Grotesk* (for titles and UI tags).

---

## 🚀 Key Interactive Sections

### 1. Simulated Bash Terminal CLI
A customized interactive developer console terminal mimicking a Spring Boot initialization startup log, complete with active environment checks and dynamic system diagnostics.
* Type `help` to list all available instructions.
* Run `projects` to check active deployment microservices.
* Run `curl <project_name>` (e.g. `curl kiddi` or `curl timecoins`) to trigger redirect headers to repositories.
* Easter eggs such as `sudo rm -rf /` blocked by Spring Security simulator triggers.

### 2. IntelliJ IDEA Profile Controller Mockup
An editor dashboard layout visualizing a mock Java controller (`AmanProfileController.java`), Spring config files (`skills-config.yml`), and database schemas (`schema.sql`). Features syntax highlighting and tab switches.

### 3. Microservices Deployment Hub
A registry deck classifying active project containers (built with Node.js, Express, Spring Boot, Python, C++). Each project features:
* Blinking microservices `/actuator/health` `UP` pulse status indicator.
* Port mappings (e.g., `localhost:8081`) generated dynamically.
* Filter controls to filter by namespaces (`ns/web`, `ns/backend`, `ns/all`).

### 4. Secure Encrypted Credentials Vault
A security badge module visualizing academic qualifications and professional certifications. On-hover effects visually decode mock SHA-256 cryptographic check hashes.

### 5. API Request Contact Client
A Postman/cURL mockup form allowing users to submit feedback and email messages. Displays a JSON payload editor, customizable input parameters, and dynamic request headers on dispatch.

---

## ⚙️ Getting Started & Local Setup

Clone the repository and run the local development server:

```bash
# 1. Clone the repository
git clone https://github.com/amantaycon/newPortfolio.git
cd newPortfolio

# 2. Install dependencies
npm install

# 3. Launch live development environment
npm run dev

# 4. Generate optimized production bundle
npm run build
```

---

## 🔒 License & Environment Details

* **Runtime OS**: Ubuntu 22.04 LTS (WSL Developer Box)
* **JDK Version**: OpenJDK 17.0.7
* **Node Environment**: v18.16.0
* **API PORT**: 8080 (Spring Application Endpoint)
* **Active Profiles**: `java`, `spring-boot`, `fullstack`
