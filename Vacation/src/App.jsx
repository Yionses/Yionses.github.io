import { useState } from "react"
import "./app.css"

function App() {
  const [student, setStudent] = useState("")
  const [date, setDate] = useState("")
  const [twoDate, setTwoDate] = useState("")
  const [isShow, setIsShow] = useState(false)
  const [reason, setReason] = useState("")
  const [beginDate, setBeginDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [hour, setHour] = useState("")
  return (
    <>
      {isShow && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "30%",
            transform: "translate(-50%)",
            width: "90%",
            height: "300px",
            background: "#0189ff",
            zIndex: 2,
            padding: "2rem",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              position: "absolute",
              right: "1rem",
              top: "1rem",
              color: "white",
            }}
            onClick={() => setIsShow(false)}
          >
            X
          </span>
          <div>
            申请时间：
            <input onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            抄送时间：
            <input onChange={(e) => setTwoDate(e.target.value)} />
          </div>
          <div>
            学生姓名：
            <input onChange={(e) => setStudent(e.target.value)} />
          </div>
          <div>
            请假原因：
            <input onChange={(e) => setReason(e.target.value)} />
          </div>
          <div>
            开始日期：
            <input onChange={(e) => setBeginDate(e.target.value)} />
          </div>
          <div>
            结束日期：
            <input onChange={(e) => setEndDate(e.target.value)} />
          </div>
          <div>
            请假时长：
            <input onChange={(e) => setHour(e.target.value)} />
          </div>
        </div>
      )}
      <div>
        <div
          style={{
            position: "relative",
            height: "10rem",
            background: "#f3f4f6",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: 0,
              width: "100%",
              borderRadius: "0 0 95% 95%",
              height: "5rem",
              background: "#0189ff",
              zIndex: 0,
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
            <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
              {student}爸爸发起的学生请假
            </p>
            <p style={{ marginTop: "5px" }}>
              <img
                src="../imgs/father.jpg"
                style={{
                  width: "1rem",
                  borderRadius: "20%",
                  verticalAlign: "middle",
                }}
                onClick={() => {
                  setIsShow(true)
                }}
              />
              <span
                style={{
                  fontSize: ".8rem",
                  color: "#7a7a7a",
                  marginLeft: "8px",
                }}
              >
                {student}爸爸(家长)
              </span>
            </p>
            <p
              style={{ color: "#7a7a7a", marginTop: "5px", fontSize: ".8rem" }}
            >
              流程版本号：V47
            </p>
            <button
              style={{
                border: "1px solid #e7e7e7",
                padding: "4px 10px",
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
            position: "relative",
            background: "white",
            padding: "1rem",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
          }}
        >
          <span className="desc">发起人</span>
          <span className="me-block">
            <img src="../imgs/father.jpg" className="imgs" />
            <span className="name">{student}的爸爸</span>
          </span>
          <div className="line"></div>

          <span className="desc">选择学生</span>
          <span className="me-block  no-bg">
            <span className="name no-bg">{student}</span>
          </span>
          <div className="line"></div>

          <span className="desc">请假学生</span>
          <span className="me-block">
            <img src="../imgs/normal.png" className="imgs" />
            <span className="name">3000000000...</span>
          </span>
          <div className="line"></div>

          <span className="desc">学号</span>
          <span className="me-block  no-bg">
            <span className="name no-bg">QD230621</span>
          </span>
          <div className="line"></div>

          <span className="desc">班导</span>
          <span className="me-block">
            <img src="../imgs/normal.png" className="imgs" />
            <span className="name">刘亭汝 Liu Ti...</span>
          </span>
          <div className="line"></div>

          <span className="desc">申请类型</span>
          <span className="me-block  no-bg">
            <span className="name no-bg">学生请假</span>
          </span>
          <div className="line"></div>

          <span className="desc">请假类型</span>
          <span className="me-block  no-bg">
            <span className="name no-bg">课程8:00-16:30</span>
          </span>
          <div className="line"></div>

          <span className="desc">请假原因</span>
          <span className="me-block  no-bg">
            <span className="name no-bg">{reason}</span>
          </span>
          <div className="line"></div>

          <span className="desc">开始日期</span>
          <span className="me-block  no-bg">
            <span className="name no-bg">{beginDate}</span>
          </span>
          <div className="line"></div>

          <span className="desc">结束日期</span>
          <span className="me-block  no-bg">
            <span className="name no-bg">{endDate}</span>
          </span>
          <div className="line"></div>

          <span className="desc">请假时长</span>
          <span className="me-block  no-bg">
            <span className="name no-bg">{hour}</span>
          </span>
          <div className="line"></div>

          <span className="desc">时长（秒）</span>
          <span className="me-block  no-bg">
            <span className="name no-bg">--</span>
          </span>
          <div className="line"></div>

          <span className="desc">附件</span>
          <span className="me-block  no-bg">
            <span className="name no-bg">--</span>
          </span>
          <div className="line"></div>

          <span className="desc">是否有医院就诊证明</span>
          <span className="me-block  no-bg">
            <span className="name no-bg">否</span>
          </span>
          <div className="line"></div>

          <span className="desc">班级</span>
          <span className="me-block  no-bg">
            <span className="name no-bg">--</span>
          </span>
          <div className="line" style={{ marginBottom: 0 }}></div>
        </div>

        <div
          style={{
            background: "#f3f4f6",
            width: "100%",
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              background: "#fff",
              height: "100%",
              borderRadius: "8px",
              margin: "1rem",
              padding: ".5rem .8rem ",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ fontWeight: 500 }}>审批进度</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "100%",
                margin: "1rem 0",
              }}
            >
              <div
                style={{
                  width: "2px",
                  backgroundColor: "#c2e2bd",
                  height: "auto",
                  margin: "0 10px",
                }}
              ></div>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                {/* item */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",
                    marginBottom: "1rem",
                  }}
                >
                  <img
                    src="../imgs/father.jpg"
                    style={{
                      width: "2.1rem",
                      height: "2.1rem",
                      borderRadius: ".5rem",
                      margin: "0 16px 0 12px",
                    }}
                  />
                  <div style={{ position: "relative" }}>
                    <img
                      src="../imgs/yes.png"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        position: "absolute",
                        left: "-4.2rem",
                        top: "0",
                        transform: "translateX(-19px)",
                      }}
                    />
                    <div
                      style={{
                        fontSize: ".8rem",
                        margin: ".1rem 0",
                      }}
                    >
                      {student}爸爸
                    </div>
                    <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                      {date}
                    </div>
                    <div
                      style={{
                        fontSize: ".8rem",
                        color: "#6d6d6d",
                        margin: ".1rem 0",
                      }}
                    >
                      提交申请
                    </div>
                    <div
                      style={{
                        fontSize: ".8rem",
                        color: "#68b95e",
                        fontWeight: 600,
                      }}
                    >
                      提交申请
                    </div>
                  </div>
                </div>
                {/* item */}

                {/* item */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",
                    marginBottom: "1rem",
                  }}
                >
                  <img
                    src="../imgs/ltr.jpg"
                    style={{
                      width: "2.1rem",
                      height: "2.1rem",
                      borderRadius: ".5rem",
                      margin: "0 16px 0 12px",
                    }}
                  />
                  <div style={{ position: "relative" }}>
                    <img
                      src="../imgs/yes.png"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        position: "absolute",
                        left: "-4.2rem",
                        top: "0",
                        transform: "translateX(-19px)",
                      }}
                    />
                    <div
                      style={{
                        fontSize: ".8rem",
                        margin: ".1rem 0",
                      }}
                    >
                      刘亭汝 Liu Tingru
                    </div>
                    <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                      {twoDate}
                    </div>
                    <div
                      style={{
                        fontSize: ".8rem",
                        color: "#6d6d6d",
                        margin: ".1rem 0",
                      }}
                    >
                      审批人
                    </div>
                    <div
                      style={{
                        fontSize: ".8rem",
                        color: "#68b95e",
                        fontWeight: 600,
                      }}
                    >
                      同意
                    </div>
                  </div>
                </div>
                {/* item */}

                {/* item */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",
                    marginBottom: "1rem",
                  }}
                >
                  <img
                    src="../imgs/two.png"
                    style={{
                      width: "2.1rem",
                      height: "2.1rem",
                      borderRadius: ".5rem",
                      margin: "0 16px 0 12px",
                    }}
                  />
                  <div style={{ position: "relative" }}>
                    <img
                      src="../imgs/yes.png"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        position: "absolute",
                        left: "-4.2rem",
                        top: "0",
                        transform: "translateX(-19px)",
                      }}
                    />
                    <div
                      style={{
                        fontSize: ".8rem",
                        margin: ".1rem 0",
                      }}
                    >
                      2 位抄送人
                    </div>
                    <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                      抄送人
                    </div>

                    <div
                      style={{
                        fontSize: ".8rem",
                        color: "#68b95e",
                        fontWeight: 600,
                      }}
                    >
                      同意
                    </div>
                  </div>
                </div>
                {/* item */}

                {/* item 抄送 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    marginBottom: "1rem",
                    background: "#f8f8f8",
                    marginLeft: "12px",
                    borderRadius: "8px",
                  }}
                >
                  {/* subitem */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      position: "relative",
                      padding: ".7rem .9rem",
                    }}
                  >
                    <img
                      src="../imgs/smile.png"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        borderRadius: ".5rem",
                        margin: "0 16px 0 0",
                      }}
                    />
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          fontSize: ".8rem",
                          margin: ".1rem 0",
                        }}
                      >
                        刘露莹 Liu Luying
                      </div>
                      <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                        {twoDate}
                      </div>

                      <div
                        style={{
                          fontSize: ".8rem",
                          color: "#68b95e",
                          fontWeight: 600,
                        }}
                      >
                        抄送
                      </div>
                    </div>
                  </div>
                  {/* subitem */}

                  {/* subitem */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      position: "relative",
                      padding: ".7rem .9rem",
                    }}
                  >
                    <img
                      src="../imgs/zxy.jpg"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        borderRadius: ".5rem",
                        margin: "0 16px 0 0",
                      }}
                    />
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          fontSize: ".8rem",
                          margin: ".1rem 0",
                        }}
                      >
                        朱雪妍 Zhu xueyan
                      </div>
                      <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                        {twoDate}
                      </div>

                      <div
                        style={{
                          fontSize: ".8rem",
                          color: "#68b95e",
                          fontWeight: 600,
                        }}
                      >
                        抄送
                      </div>
                    </div>
                  </div>
                  {/* subitem */}
                </div>
                {/* item */}

                {/* item */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",
                    marginBottom: "1rem",
                  }}
                >
                  <img
                    src="../imgs/three.png"
                    style={{
                      width: "2.1rem",
                      height: "2.1rem",
                      borderRadius: ".5rem",
                      margin: "0 16px 0 12px",
                    }}
                  />
                  <div style={{ position: "relative" }}>
                    <img
                      src="../imgs/yes.png"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        position: "absolute",
                        left: "-4.2rem",
                        top: "0",
                        transform: "translateX(-19px)",
                      }}
                    />
                    <div
                      style={{
                        fontSize: ".8rem",
                        margin: ".1rem 0",
                      }}
                    >
                      3 位抄送人
                    </div>
                    <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                      抄送人
                    </div>

                    <div
                      style={{
                        fontSize: ".8rem",
                        color: "#68b95e",
                        fontWeight: 600,
                      }}
                    >
                      同意
                    </div>
                  </div>
                </div>
                {/* item */}

                {/* item 抄送 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    marginBottom: "1rem",
                    background: "#f8f8f8",
                    marginLeft: "12px",
                    borderRadius: "8px",
                  }}
                >
                  {/* subitem */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      position: "relative",
                      padding: ".7rem .9rem",
                    }}
                  >
                    <img
                      src="../imgs/wyc.jpg"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        borderRadius: ".5rem",
                        margin: "0 16px 0 0",
                      }}
                    />
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          fontSize: ".8rem",
                          margin: ".1rem 0",
                        }}
                      >
                        王艳春 Wang Yanchun
                      </div>
                      <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                        {twoDate}
                      </div>

                      <div
                        style={{
                          fontSize: ".8rem",
                          color: "#68b95e",
                          fontWeight: 600,
                        }}
                      >
                        抄送
                      </div>
                    </div>
                  </div>
                  {/* subitem */}

                  {/* subitem */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      position: "relative",
                      padding: ".7rem .9rem",
                    }}
                  >
                    <img
                      src="../imgs/rob.jpg"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        borderRadius: ".5rem",
                        margin: "0 16px 0 0",
                      }}
                    />
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          fontSize: ".8rem",
                          margin: ".1rem 0",
                        }}
                      >
                        Robbie Shields
                      </div>
                      <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                        {twoDate}
                      </div>

                      <div
                        style={{
                          fontSize: ".8rem",
                          color: "#68b95e",
                          fontWeight: 600,
                        }}
                      >
                        抄送
                      </div>
                    </div>
                  </div>
                  {/* subitem */}

                  {/* subitem */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      position: "relative",
                      padding: ".7rem .9rem",
                    }}
                  >
                    <img
                      src="../imgs/smile.png"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        borderRadius: ".5rem",
                        margin: "0 16px 0 0",
                      }}
                    />
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          fontSize: ".8rem",
                          margin: ".1rem 0",
                        }}
                      >
                        Ram Konda
                      </div>
                      <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                        {twoDate}
                      </div>

                      <div
                        style={{
                          fontSize: ".8rem",
                          color: "#68b95e",
                          fontWeight: 600,
                        }}
                      >
                        抄送
                      </div>
                    </div>
                  </div>
                  {/* subitem */}
                </div>
                {/* item */}

                {/* item */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",
                    marginBottom: "1rem",
                  }}
                >
                  <img
                    src="../imgs/ltr.jpg"
                    style={{
                      width: "2.1rem",
                      height: "2.1rem",
                      borderRadius: ".5rem",
                      margin: "0 16px 0 12px",
                    }}
                  />
                  <div style={{ position: "relative" }}>
                    <img
                      src="../imgs/yes.png"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        position: "absolute",
                        left: "-4.2rem",
                        top: "0",
                        transform: "translateX(-19px)",
                      }}
                    />
                    <div
                      style={{
                        fontSize: ".8rem",
                        margin: ".1rem 0",
                      }}
                    >
                      刘亭汝 Liu Tingru
                    </div>
                    <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                      {twoDate}
                    </div>

                    <div
                      style={{
                        fontSize: ".8rem",
                        color: "#68b95e",
                        fontWeight: 600,
                      }}
                    >
                      抄送
                    </div>
                  </div>
                </div>
                {/* item */}

                {/* item */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",
                    marginBottom: "1rem",
                  }}
                >
                  <img
                    src="../imgs/dive.png"
                    style={{
                      width: "2.1rem",
                      height: "2.1rem",
                      borderRadius: ".5rem",
                      margin: "0 16px 0 12px",
                    }}
                  />
                  <div style={{ position: "relative" }}>
                    <img
                      src="../imgs/yes.png"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        position: "absolute",
                        left: "-4.2rem",
                        top: "0",
                        transform: "translateX(-19px)",
                      }}
                    />
                    <div
                      style={{
                        fontSize: ".8rem",
                        margin: ".1rem 0",
                      }}
                    >
                      5 位抄送人
                    </div>
                    <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                      抄送人
                    </div>

                    <div
                      style={{
                        fontSize: ".8rem",
                        color: "#68b95e",
                        fontWeight: 600,
                      }}
                    >
                      同意
                    </div>
                  </div>
                </div>
                {/* item */}

                {/* item 抄送 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    marginBottom: "1rem",
                    background: "#f8f8f8",
                    marginLeft: "12px",
                    borderRadius: "8px",
                  }}
                >
                  {/* subitem */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      position: "relative",
                      padding: ".7rem .9rem",
                    }}
                  >
                    <img
                      src="../imgs/smile.png"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        borderRadius: ".5rem",
                        margin: "0 16px 0 0",
                      }}
                    />
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          fontSize: ".8rem",
                          margin: ".1rem 0",
                        }}
                      >
                        王芳 Wang Fang
                      </div>
                      <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                        {twoDate}
                      </div>

                      <div
                        style={{
                          fontSize: ".8rem",
                          color: "#68b95e",
                          fontWeight: 600,
                        }}
                      >
                        抄送
                      </div>
                    </div>
                  </div>
                  {/* subitem */}
                  {/* subitem */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      position: "relative",
                      padding: ".7rem .9rem",
                    }}
                  >
                    <img
                      src="../imgs/smile.png"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        borderRadius: ".5rem",
                        margin: "0 16px 0 0",
                      }}
                    />
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          fontSize: ".8rem",
                          margin: ".1rem 0",
                        }}
                      >
                        刘露莹 Liu Luying
                      </div>
                      <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                        {twoDate}
                      </div>

                      <div
                        style={{
                          fontSize: ".8rem",
                          color: "#68b95e",
                          fontWeight: 600,
                        }}
                      >
                        抄送
                      </div>
                    </div>
                  </div>
                  {/* subitem */}
                  {/* subitem */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      position: "relative",
                      padding: ".7rem .9rem",
                    }}
                  >
                    <img
                      src="../imgs/smile.png"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        borderRadius: ".5rem",
                        margin: "0 16px 0 0",
                      }}
                    />
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          fontSize: ".8rem",
                          margin: ".1rem 0",
                        }}
                      >
                        Ram Konda
                      </div>
                      <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                        {twoDate}
                      </div>

                      <div
                        style={{
                          fontSize: ".8rem",
                          color: "#68b95e",
                          fontWeight: 600,
                        }}
                      >
                        抄送
                      </div>
                    </div>
                  </div>
                  {/* subitem */}
                  <div
                    style={{
                      padding: ".7rem .9rem",
                    }}
                  >
                    <div
                      style={{
                        borderTop: "1px solid #e5e5e5",
                        textAlign: "center",
                        fontSize: ".8rem",
                        paddingTop: ".5rem",
                        color: "#9ea0ad",
                      }}
                    >
                      展开全部
                    </div>
                  </div>
                </div>
                {/* item */}

                {/* item */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",
                    marginBottom: "1rem",
                  }}
                >
                  <img
                    src="../imgs/father.jpg"
                    style={{
                      width: "2.1rem",
                      height: "2.1rem",
                      borderRadius: ".5rem",
                      margin: "0 16px 0 12px",
                    }}
                  />
                  <div style={{ position: "relative" }}>
                    <img
                      src="../imgs/yes.png"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        position: "absolute",
                        left: "-4.2rem",
                        top: "0",
                        transform: "translateX(-19px)",
                      }}
                    />
                    <div
                      style={{
                        fontSize: ".8rem",
                        margin: ".1rem 0",
                      }}
                    >
                      {student}爸爸
                    </div>
                    <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                      {twoDate}
                    </div>

                    <div
                      style={{
                        fontSize: ".8rem",
                        color: "#68b95e",
                        fontWeight: 600,
                      }}
                    >
                      抄送
                    </div>
                  </div>
                </div>
                {/* item */}

                {/* item */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",
                    marginBottom: "1rem",
                  }}
                >
                  <img
                    src="../imgs/cf.jpg"
                    style={{
                      width: "2.1rem",
                      height: "2.1rem",
                      borderRadius: ".5rem",
                      margin: "0 16px 0 12px",
                    }}
                  />
                  <div style={{ position: "relative" }}>
                    <img
                      src="../imgs/yes.png"
                      style={{
                        width: "2.1rem",
                        height: "2.1rem",
                        position: "absolute",
                        left: "-4.2rem",
                        top: "0",
                        transform: "translateX(-19px)",
                      }}
                    />
                    <div
                      style={{
                        fontSize: ".8rem",
                        margin: ".1rem 0",
                        position: "relative",
                      }}
                    >
                      {student}
                      <span
                        style={{
                          background: "#e9e9e9",
                          padding: ".1rem .2rem",
                          marginLeft: ".5rem",
                          borderRadius: ".2rem",
                          color: "#6f6f6f",
                        }}
                      >
                        已读
                      </span>
                    </div>
                    <div style={{ fontSize: ".8rem", color: "#d9d9d9" }}>
                      {twoDate}
                    </div>

                    <div
                      style={{
                        fontSize: ".8rem",
                        color: "#68b95e",
                        fontWeight: 600,
                      }}
                    >
                      抄送
                    </div>
                  </div>
                </div>
                {/* item */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          zIndex: 1,
          position: "sticky",
          bottom: 0,
          width: "100%",
          height: "5rem",
          background: "#fff",
          lineHeight: "5rem",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <img
          src="../imgs/comment.png"
          style={{ width: "1.5rem", height: "2rem", marginTop: "1.5rem" }}
        />
      </div>
    </>
  )
}

export default App
