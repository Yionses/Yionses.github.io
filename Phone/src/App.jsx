import { lazy, useState } from "react"
import "./App.css"
import { Button, Input, message, Select, Space } from "antd"
import datas from "../datas"

function App() {
  const [model, setModel] = useState("")
  const [cpu, setCpu] = useState("")
  const [point, setPoint] = useState("")
  const [frameRate, setFrameRate] = useState("")
  const [heating, setHeating] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [pass, setPass] = useState("")
  return (
    <>
      {isOpen ? (
        <div
          style={{
            width: "700px",
            backgroundColor: "red",
            padding: "20px",
          }}
        >
          <div
            className="top"
            style={{
              boxSizing: "border-box",
              paddingLeft: "20px",
            }}
          >
            <button
              style={{ background: "green", width: "80px", color: "white" }}
            >
              查询
            </button>
            <Input
              style={{ width: "200px", marginLeft: "20px" }}
              value={heating}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: "20px",
              marginTop: "20px",
            }}
          >
            <Select
              style={{ width: "200px" }}
              showSearch
              options={datas.map((item) => ({
                label: item.model,
                value: item.model,
              }))}
              onChange={(value) => {
                const res = datas.find((item) => item.model === value)
                setCpu("CPU：" + res.cpu)
                setPoint("画质：" + res.point)
                setFrameRate("帧率：" + res.frameRate)
                setHeating("发烫程度：" + res.heating)
              }}
            ></Select>
            <Input style={{ width: "200px", marginLeft: "20px" }} value={cpu} />
            <Input
              style={{ width: "200px", marginLeft: "20px" }}
              value={point}
            />
            <Input
              style={{ width: "200px", marginLeft: "20px" }}
              value={frameRate}
            />
          </div>
        </div>
      ) : (
        <Space>
          <Input
            value={pass}
            type="password"
            onChange={(e) => setPass(e.target.value)}
          ></Input>
          <Button
            onClick={() => {
              if (pass === "GuaGua") {
                setIsOpen(true)
                setPass("")
              } else {
                message.error("密码错误")
              }
            }}
          >
            查询
          </Button>
        </Space>
      )}
    </>
  )
}

export default App
