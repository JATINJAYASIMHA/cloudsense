import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { db, auth } from "./firebase";

import {
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const chartData = [
  { month: "Jan", cost: 12000 },
  { month: "Feb", cost: 15000 },
  { month: "Mar", cost: 17000 },
  { month: "Apr", cost: 14000 },
  { month: "May", cost: 22000 },
  { month: "Jun", cost: 25000 },
];

function App() {

  const [metrics, setMetrics] = useState({
    cpu: 0,
    storage: 0,
    monthlyCost: 0,
    activeServers: 0,
    networkUsage: 0,
  });

  const [user, setUser] = useState(null);

  // ADMIN EMAIL

  const adminEmail = "jathinsimha08@gmail.com";

  // EDIT STATES

  const [editData, setEditData] = useState({
    cpu: "",
    storage: "",
    monthlyCost: "",
    activeServers: "",
    networkUsage: "",
  });

  // INPUT STYLE

  const inputStyle = {
    background: "#334155",
    border: "none",
    padding: "14px",
    borderRadius: "10px",
    color: "white",
    outline: "none",
    fontSize: "15px",
  };

  // AUTH LISTENER

  useEffect(() => {

    const unsubscribe =
      auth.onAuthStateChanged((currentUser) => {
        setUser(currentUser);
      });

    return unsubscribe;

  }, []);

  // FIRESTORE LISTENER

  useEffect(() => {

    const unsubscribe = onSnapshot(
      doc(db, "metrics", "clouddata"),
      (docSnap) => {

        if (docSnap.exists()) {
          setMetrics(docSnap.data());
        }
      }
    );

    return unsubscribe;

  }, []);

  // LOGIN

  const login = async () => {

    const provider =
      new GoogleAuthProvider();

    try {

      await signInWithPopup(
        auth,
        provider
      );

    } catch (error) {

      console.log(error);

    }
  };

  // LOGOUT

  const logout = async () => {

    await signOut(auth);

  };

  // UPDATE METRICS

  const updateMetrics = async () => {

    try {

      await updateDoc(
        doc(db, "metrics", "clouddata"),
        {
          cpu: Number(editData.cpu),
          storage: Number(editData.storage),
          monthlyCost: Number(editData.monthlyCost),
          activeServers: Number(editData.activeServers),
          networkUsage: Number(editData.networkUsage),
        }
      );

      alert("Metrics Updated Successfully");

    } catch (error) {

      console.log(error);

    }
  };

  // STATUS LOGIC

  const getCpuStatus = () => {

    if (metrics.cpu > 80) {
      return "Critical";
    }

    if (metrics.cpu > 60) {
      return "High";
    }

    return "Normal";
  };

  const getCostRecommendation = () => {

    if (metrics.monthlyCost > 20000) {
      return "Reduce underutilized compute resources to optimize monthly spending.";
    }

    return "Cloud spending is within optimized limits.";
  };

  // LOGIN SCREEN

  if (!user) {

    return (

      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(to right,#020617,#0f172a,#111827)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial",
        }}
      >

        <div
          style={{
            background: "#1e293b",
            padding: "50px",
            borderRadius: "25px",
            textAlign: "center",
            width: "400px",
            boxShadow:
              "0 0 35px rgba(0,0,0,0.4)",
          }}
        >

          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "25px",
              margin: "0 auto 25px auto",
              background:
                "linear-gradient(135deg,#3b82f6,#8b5cf6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "40px",
              boxShadow:
                "0 0 30px rgba(59,130,246,0.5)",
            }}
          >
            ☁️
          </div>

          <h1
            style={{
              color: "white",
              fontSize: "42px",
              marginBottom: "10px",
            }}
          >
            CloudSense
          </h1>

          <p
            style={{
              color: "#94a3b8",
              marginBottom: "35px",
            }}
          >
            Secure Cloud Monitoring Platform
          </p>

          <button
            onClick={login}
            style={{
              background:
                "linear-gradient(135deg,#3b82f6,#8b5cf6)",
              color: "white",
              border: "none",
              padding: "16px 28px",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              width: "100%",
              boxShadow:
                "0 0 20px rgba(59,130,246,0.4)",
            }}
          >
            Sign in with Google
          </button>

        </div>

      </div>

    );
  }

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right,#020617,#0f172a,#111827)",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >

      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "45px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >

          {/* LOGO */}

          <div
            style={{
              width: "75px",
              height: "75px",
              borderRadius: "22px",
              background:
                "linear-gradient(135deg,#3b82f6,#8b5cf6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "36px",
              boxShadow:
                "0 0 30px rgba(59,130,246,0.5)",
            }}
          >
            ☁️
          </div>

          {/* TITLE */}

          <div>

            <h1
              style={{
                margin: 0,
                fontSize: "52px",
                fontWeight: "900",
                letterSpacing: "1px",
                background:
                  "linear-gradient(to right,#60a5fa,#a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CloudSense
            </h1>

            <div
              style={{
                color: "#94a3b8",
                fontSize: "15px",
                marginTop: "4px",
              }}
            >
              Real-Time Cloud Monitoring &
              Cost Optimization Platform
            </div>

          </div>

        </div>

        {/* USER */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >

          <img
            src={user.photoURL}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              border: "2px solid #60a5fa",
            }}
          />

          <div>

            <div
              style={{
                fontSize: "14px",
                color: "#94a3b8",
              }}
            >
              Logged in as
            </div>

            <div
              style={{
                fontWeight: "bold",
              }}
            >
              {user.displayName}
            </div>

          </div>

          <button
            onClick={logout}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "12px 18px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>

        </div>

      </div>

      {/* SYSTEM STATUS */}

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "18px",
          marginBottom: "30px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >

        <div
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background:
              getCpuStatus() === "Critical"
                ? "#ef4444"
                : getCpuStatus() === "High"
                ? "#f59e0b"
                : "#22c55e",
            boxShadow:
              getCpuStatus() === "Critical"
                ? "0 0 15px #ef4444"
                : getCpuStatus() === "High"
                ? "0 0 15px #f59e0b"
                : "0 0 15px #22c55e",
          }}
        />

        <div>

          <div
            style={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            System Status
          </div>

          <div
            style={{
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {getCpuStatus()}
          </div>

        </div>

      </div>

      {/* METRIC CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "35px",
        }}
      >

        {[
          {
            title: "Total Monthly Cost",
            value: `₹${metrics.monthlyCost}`,
          },
          {
            title: "CPU Usage",
            value: `${metrics.cpu}%`,
          },
          {
            title: "Storage Usage",
            value: `${metrics.storage} GB`,
          },
          {
            title: "Active Servers",
            value: metrics.activeServers,
          },
          {
            title: "Network Usage",
            value: `${metrics.networkUsage} GB`,
          },
        ].map((card, index) => (

          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "28px",
              borderRadius: "20px",
              boxShadow:
                "0 0 20px rgba(0,0,0,0.25)",
            }}
          >

            <div
              style={{
                color: "#94a3b8",
                marginBottom: "10px",
              }}
            >
              {card.title}
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "38px",
              }}
            >
              {card.value}
            </h1>

          </div>

        ))}

      </div>

      {/* ADMIN PANEL */}

      {user.email === adminEmail && (

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "35px",
            boxShadow:
              "0 0 20px rgba(0,0,0,0.25)",
          }}
        >

          <h2
            style={{
              marginTop: 0,
            }}
          >
            🔧 Admin Control Panel
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: "15px",
              marginTop: "20px",
            }}
          >

            <input
              placeholder="CPU"
              onChange={(e) =>
                setEditData({
                  ...editData,
                  cpu: e.target.value,
                })
              }
              style={inputStyle}
            />

            <input
              placeholder="Storage"
              onChange={(e) =>
                setEditData({
                  ...editData,
                  storage: e.target.value,
                })
              }
              style={inputStyle}
            />

            <input
              placeholder="Monthly Cost"
              onChange={(e) =>
                setEditData({
                  ...editData,
                  monthlyCost: e.target.value,
                })
              }
              style={inputStyle}
            />

            <input
              placeholder="Servers"
              onChange={(e) =>
                setEditData({
                  ...editData,
                  activeServers: e.target.value,
                })
              }
              style={inputStyle}
            />

            <input
              placeholder="Network Usage"
              onChange={(e) =>
                setEditData({
                  ...editData,
                  networkUsage: e.target.value,
                })
              }
              style={inputStyle}
            />

          </div>

          <button
            onClick={updateMetrics}
            style={{
              marginTop: "20px",
              background:
                "linear-gradient(135deg,#3b82f6,#8b5cf6)",
              color: "white",
              border: "none",
              padding: "14px 24px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow:
                "0 0 20px rgba(59,130,246,0.3)",
            }}
          >
            Update Metrics
          </button>

        </div>

      )}

      {/* ALERT */}

      <div
        style={{
          background:
            metrics.cpu > 80
              ? "#7f1d1d"
              : "#78350f",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "35px",
          boxShadow:
            "0 0 20px rgba(0,0,0,0.3)",
        }}
      >

        <h2
          style={{
            marginTop: 0,
          }}
        >
          ⚠ Optimization Recommendation
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.7",
            color: "#e2e8f0",
          }}
        >
          {getCostRecommendation()}
        </p>

      </div>

      {/* CHART */}

      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "22px",
          height: "450px",
          boxShadow:
            "0 0 25px rgba(0,0,0,0.3)",
        }}
      >

        <h2
          style={{
            marginTop: 0,
            marginBottom: "20px",
          }}
        >
          Monthly Cloud Cost Trend
        </h2>

        <ResponsiveContainer
          width="100%"
          height="88%"
        >

          <LineChart data={chartData}>

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="cost"
              stroke="#60a5fa"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}

export default App;