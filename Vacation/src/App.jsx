import { useState } from "react"
import imgs from "../imgs/logo.png"
import "./app.css"

function App() {
  const [father, setFather] = useState("Michelle CHEN Fei 陈菲爸爸")
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "11rem",
          background: "#f3f4f6",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            borderRadius: "0 0 95% 95%",
            height: "50%",
            background: "#0189ff",
          }}
        ></div>
        <div
          style={{
            boxSizing: "border-box",
            backgroundColor: "#fff",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "calc(100% - 2rem)",
            height: "calc(100% - 2rem)",
            borderRadius: ".5rem",
            padding: "1rem",
          }}
        >
          <p style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
            {father}发起的学生请假
          </p>
          <p style={{ marginTop: "5px" }}>
            <img
              src="../imgs/father.jpg"
              style={{
                width: "1rem",
                borderRadius: "20%",
                verticalAlign: "middle",
              }}
            />
            <span
              style={{
                fontSize: ".8rem",
                color: "#7a7a7a",
                marginLeft: "8px",
              }}
            >
              {father}(家长)
            </span>
          </p>
          <p style={{ color: "#7a7a7a", marginTop: "5px", fontSize: ".8rem" }}>
            流程版本号：V47
          </p>
          <button
            style={{
              border: "1px solid #e7e7e7",
              padding: "8px",
              marginTop: "6px",
              backgroundColor: "transparent",
              borderRadius: "4px",
              fontSize: ".8rem",
            }}
          >
            AI快速阅读
          </button>
          <img
            src="../imgs/logo.png"
            style={{
              width: "4rem",
              height: "4rem",
              position: "absolute",
              top: "1.6rem",
              right: ".8rem",
            }}
          />
        </div>
      </div>
      <div
        style={{
          background: "white",
          padding: "1rem",
          height: "10rem",
          borderRadius: "8px 8px 0 0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span className="desc">发起人</span>
        <span className="me-block">
          <img src="../imgs/father.jpg" className="imgs" />
          <span className="name">{father}</span>
        </span>
        <div className="line"></div>

        <span className="desc">选择学生</span>
        <span className="me-block  no-bg">
          <span className="name">Michelle CHEN Fei 陈菲</span>
        </span>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default App
