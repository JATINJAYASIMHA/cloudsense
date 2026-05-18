# CloudSense – Real-Time Cloud Resource Monitoring & Cost Optimization Platform

## Live Deployment

🌐 Live URL:  
https://cloudsense-d5ed1.web.app

---

# Project Overview

CloudSense is a real-time cloud resource monitoring and cost optimization platform built using React and Firebase. The platform provides live monitoring of cloud infrastructure metrics such as CPU usage, storage consumption, network usage, server activity, and monthly cloud expenditure.

The application includes:
- Real-time cloud analytics
- Cost optimization recommendations
- Admin-controlled metric updates
- Secure authentication system
- Cloud-hosted dashboard
- Firestore real-time synchronization

---

# Features

- Real-time cloud monitoring dashboard
- Google Authentication login system
- Admin-only metric editing panel
- Dynamic optimization recommendations
- Live Firestore synchronization
- Monthly cost trend visualization
- System health status indicators
- Professional enterprise-style UI
- Cloud deployment using Firebase Hosting

---

# Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend Development |
| Firebase Authentication | Secure Google Login |
| Firebase Firestore | Real-Time Cloud Database |
| Firebase Hosting | Cloud Deployment |
| Recharts | Data Visualization |
| CSS Inline Styling | UI/UX Design |

---

# Cloud Computing Concepts Implemented

- Real-time cloud monitoring
- Serverless architecture
- Cloud database synchronization
- Authentication and authorization
- Admin access control
- Cloud hosting and deployment
- Cloud cost optimization
- Live analytics dashboard

---

# AWS Services vs Implemented Firebase Services

| Original AWS Suggestion | Implemented Using Firebase |
|---|---|
| AWS Cost Explorer API | Firestore Real-Time Metrics |
| AWS CloudWatch | Firestore Live Monitoring |
| AWS IAM Authentication | Firebase Authentication |
| AWS EC2 Dashboard Backend | Firebase Firestore + React |
| AWS Hosting Services | Firebase Hosting |

---

# Why Firebase Was Used Instead of AWS

Firebase was used as an alternative cloud platform to simplify:
- real-time synchronization
- authentication
- serverless backend management
- cloud hosting
- live database updates

Firestore’s real-time listeners (`onSnapshot`) were used instead of AWS CloudWatch streaming APIs to achieve instant metric updates without managing backend servers.

Firebase Authentication was used to implement secure admin access and role-based dashboard control.

---

# System Architecture

```text
Admin User
     ↓
Firebase Authentication
     ↓
Firestore Real-Time Database
     ↓
React Monitoring Dashboard
     ↓
Firebase Hosting
```

---

# Dashboard Modules

## Monitoring Dashboard
Displays:
- CPU Usage
- Storage Usage
- Network Usage
- Active Servers
- Monthly Cloud Cost

## Cost Optimization Engine
Generates dynamic recommendations based on:
- CPU usage
- monthly spending
- resource utilization

## Admin Control Panel
Authorized admins can:
- update cloud metrics
- simulate infrastructure changes
- trigger real-time dashboard updates

## Authentication System
- Google Sign-In
- Session handling
- Role-based admin access

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/cloudsense.git
```

## Navigate to Project

```bash
cd cloudsense
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm start
```

---

# Firebase Setup

1. Create Firebase project
2. Enable Firestore Database
3. Enable Google Authentication
4. Add Firebase configuration in `firebase.js`
5. Create Firestore collection:

```text
metrics
```

Document ID:

```text
clouddata
```

---

# Deployment

The application is deployed using Firebase Hosting.

Deploy command:

```bash
firebase deploy
```

---

# Project Title

## Cloud Resource Monitoring and Cost Optimization Dashboard using Firebase

---

# Author

Jathin V N
