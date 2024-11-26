import { useState } from "react"
import "./App.css"
import { Button, Checkbox, Form, Input, Space } from "antd"
import { useForm } from "antd/es/form/Form"

function randomNum(num = 10) {
  return Math.floor(Math.random() * num)
}

function App() {
  const checkData = [
    {
      label: "独胆",
      value: "独胆",
    },
    {
      label: "双胆",
      value: "双胆",
    },
    {
      label: "三胆",
      value: "三胆",
    },
    {
      label: "和值",
      value: "和值",
    },
    {
      label: "跨度",
      value: "跨度",
    },
    {
      label: "大小组合",
      value: "大小组合",
    },
    {
      label: "奇偶组合",
      value: "奇偶组合",
    },
    {
      label: "杀1码",
      value: "杀1码",
    },
    {
      label: "杀2码",
      value: "杀2码",
    },
    {
      label: "四码",
      value: "四码",
    },
    {
      label: "五码",
      value: "五码",
    },
    {
      label: "六码",
      value: "六码",
    },
    {
      label: "百位推荐",
      value: "百位推荐",
    },
    {
      label: "十位推荐",
      value: "十位推荐",
    },
    {
      label: "个位推荐",
      value: "个位推荐",
    },
    {
      label: "直选号",
      value: "直选号",
    },
    {
      label: "组选号",
      value: "组选号",
    },
    {
      label: "含组三",
      value: "含组三",
    },
    {
      label: "单挑",
      value: "单挑",
    },
  ]
  const [selected, setSelected] = useState(checkData.map((item) => item.value))
  const [form] = useForm()
  const [result, setResult] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  let sm = ""
  const createHandle = () => {
    let result = ""
    const disabledDDD = []
    const { start, end, recommended, group, direct, shuiyin, vs } =
      form.getFieldsValue()
    setEnd(end)
    setStart(start)

    let s1m = ""
    let s2m = ""
    if (selected.includes("杀1码")) {
      s1m = randomNum()
      disabledDDD.push(s1m)
      sm += "杀1码：" + s1m + "\n"
    }
    if (selected.includes("杀2码")) {
      if (s1m === "") {
        s1m = randomNum()
        disabledDDD.push(s1m)
      }
      s2m = randomNum()
      while (s2m === s1m) {
        s2m = randomNum()
      }
      disabledDDD.push(s2m)
      sm += "杀2码：" + s1m + "," + s2m + "\n"
    }

    let d1d = ""
    let D1D = ""
    let d2d = ""
    let D2D = ""
    let d3d = ""
    let D3D = ""
    let d4d = ""
    let D4D = ""
    let d5d = ""
    let D5D = ""
    let d6d = ""
    let D6D = ""
    if (selected.includes("独胆")) {
      d1d = randomNum()
      while (disabledDDD.includes(d1d)) {
        d1d = randomNum()
      }
      D1D = "独胆：" + d1d + "\n"
    }
    if (selected.includes("双胆")) {
      if (d1d === "") {
        d1d = randomNum()
        while (disabledDDD.includes(d1d)) {
          d1d = randomNum()
        }
      }
      d2d = randomNum()
      while (d2d === d1d || disabledDDD.includes(d2d)) {
        d2d = randomNum()
      }

      D2D = "双胆：" + d2d + d1d + "\n"
    }
    if (selected.includes("三胆")) {
      if (d1d === "") {
        d1d = randomNum()
        while (disabledDDD.includes(d1d)) {
          d1d = randomNum()
        }
      }
      if (d2d === "") {
        d2d = randomNum()
        while (d2d === d1d || disabledDDD.includes(d2d)) {
          d2d = randomNum()
        }
      }
      d3d = randomNum()
      while (d3d === d1d || d3d === d2d || disabledDDD.includes(d3d)) {
        d3d = randomNum()
      }
      D3D = "三胆：" + d3d + d2d + d1d + "\n"
    }
    if (selected.includes("四码")) {
      if (d1d === "") {
        d1d = randomNum()
        while (disabledDDD.includes(d1d)) {
          d1d = randomNum()
        }
      }
      if (d2d === "") {
        d2d = randomNum()
        while (d2d === d1d || disabledDDD.includes(d2d)) {
          d2d = randomNum()
        }
      }
      if (d3d === "") {
        d3d = randomNum()
        while (d3d === d1d || d3d === d2d || disabledDDD.includes(d3d)) {
          d3d = randomNum()
        }
      }
      d4d = randomNum()
      while (
        d4d === d1d ||
        d4d === d2d ||
        d4d === d3d ||
        disabledDDD.includes(d4d)
      ) {
        d4d = randomNum()
      }
      D4D = "四码：" + d4d + d3d + d2d + d1d + "\n"
    }
    if (selected.includes("五码")) {
      if (d1d === "") {
        d1d = randomNum()
        while (disabledDDD.includes(d1d)) {
          d1d = randomNum()
        }
      }
      if (d2d === "") {
        d2d = randomNum()
        while (d2d === d1d || disabledDDD.includes(d2d)) {
          d2d = randomNum()
        }
      }
      if (d3d === "") {
        d3d = randomNum()
        while (d3d === d1d || d3d === d2d || disabledDDD.includes(d3d)) {
          d3d = randomNum()
        }
      }
      if (d4d === "") {
        d4d = randomNum()
        while (
          d4d === d1d ||
          d4d === d2d ||
          d4d === d3d ||
          disabledDDD.includes(d4d)
        ) {
          d4d = randomNum()
        }
      }
      d5d = randomNum()
      while (
        d5d === d1d ||
        d5d === d2d ||
        d5d === d3d ||
        d5d === d4d ||
        disabledDDD.includes(d5d)
      ) {
        d5d = randomNum()
      }
      D5D = "五码：" + d5d + d4d + d3d + d2d + d1d + "\n"
    }
    if (selected.includes("六码")) {
      if (d1d === "") {
        d1d = randomNum()
        while (disabledDDD.includes(d1d)) {
          d1d = randomNum()
        }
      }
      if (d2d === "") {
        d2d = randomNum()
        while (d2d === d1d || disabledDDD.includes(d2d)) {
          d2d = randomNum()
        }
      }
      if (d3d === "") {
        d3d = randomNum()
        while (d3d === d1d || d3d === d2d || disabledDDD.includes(d3d)) {
          d3d = randomNum()
        }
      }
      if (d4d === "") {
        d4d = randomNum()
        while (
          d4d === d1d ||
          d4d === d2d ||
          d4d === d3d ||
          disabledDDD.includes(d4d)
        ) {
          d4d = randomNum()
        }
      }
      if (d5d === "") {
        d5d = randomNum()
        while (
          d5d === d1d ||
          d5d === d2d ||
          d5d === d3d ||
          d5d === d4d ||
          disabledDDD.includes(d5d)
        ) {
          d5d = randomNum()
        }
      }
      d6d = randomNum()
      while (
        d6d === d1d ||
        d6d === d2d ||
        d6d === d3d ||
        d6d === d4d ||
        d6d === d5d ||
        disabledDDD.includes(d6d)
      ) {
        d6d = randomNum()
      }
      D6D =
        `六码${selected.includes("含组三") ? "(含组三)" : ""}：` +
        d6d +
        d5d +
        d4d +
        d3d +
        d2d +
        d1d +
        "\n"
    }

    let kd1 = ""
    let kd2 = ""
    let kd3 = ""
    let KD = ""
    if (selected.includes("跨度")) {
      kd1 = randomNum()
      while (disabledDDD.includes(kd1)) {
        kd1 = randomNum()
      }
      kd2 = randomNum()
      while (kd2 === kd1 || disabledDDD.includes(kd2)) {
        kd2 = randomNum()
      }
      kd3 = randomNum()
      while (kd3 === kd1 || kd3 === kd2 || disabledDDD.includes(kd3)) {
        kd3 = randomNum()
      }
      KD = "跨度：" + kd1 + "," + kd2 + "," + kd3 + "精选跨" + kd2 + "\n"
    }

    let DX = ""
    let JO = ""
    let dx1 = ""
    let dx2 = ""
    let jo1 = ""
    let jo2 = ""
    if (selected.includes("大小组合")) {
      for (let i = 0; i <= 2; i++) {
        dx1 += randomNum() > 4 ? "大" : "小"
        dx2 += randomNum() > 4 ? "大" : "小"
      }
      DX = "大小组合：" + dx1 + "," + dx2 + "  重点：" + dx1 + "\n"
    }

    if (selected.includes("奇偶组合")) {
      for (let i = 0; i <= 2; i++) {
        jo1 += randomNum() % 2 !== 0 ? "奇" : "偶"
        jo2 += randomNum() % 2 !== 0 ? "奇" : "偶"
      }
      JO = "奇偶组合：" + jo1 + "," + jo2 + "  重点：" + jo2 + "\n"
    }

    let HZ = ""
    if (selected.includes("和值")) {
      let nums = []
      while (nums.length < 3) {
        let n = randomNum() * 3
        if (!nums.includes(n)) {
          nums.push(n)
        }
      }
      HZ = "和值：" + nums.join(",") + "\n"
    }

    let bwtj = []
    let BWTJ = ""
    let swtj = []
    let SWTJ = ""
    let gwtj = []
    let GWTJ = ""
    if (selected.includes("百位推荐")) {
      for (let i = 0; i < recommended; i++) {
        let temp = randomNum()
        while (bwtj.includes(temp) || disabledDDD.includes(temp)) {
          temp = randomNum()
        }
        bwtj.push(temp)
      }
      BWTJ = "百位推荐：" + bwtj.join("") + "\n"
    }

    if (!BWTJ) {
      for (let i = 0; i < recommended; i++) {
        let temp = randomNum()
        while (bwtj.includes(temp) || disabledDDD.includes(temp)) {
          temp = randomNum()
        }
        bwtj.push(temp)
      }
    }

    if (selected.includes("十位推荐")) {
      for (let i = 0; i < recommended; i++) {
        let temp = randomNum()
        while (swtj.includes(temp) || disabledDDD.includes(temp)) {
          temp = randomNum()
        }
        swtj.push(temp)
      }
      SWTJ = "十位推荐：" + swtj.join("") + "\n"
    }

    if (!SWTJ) {
      for (let i = 0; i < recommended; i++) {
        let temp = randomNum()
        while (swtj.includes(temp) || disabledDDD.includes(temp)) {
          temp = randomNum()
        }
        swtj.push(temp)
      }
    }

    if (selected.includes("个位推荐")) {
      for (let i = 0; i < recommended; i++) {
        let temp = randomNum()
        while (gwtj.includes(temp) || disabledDDD.includes(temp)) {
          temp = randomNum()
        }
        gwtj.push(temp)
      }
      GWTJ = "个位推荐：" + gwtj.join("") + "\n"
    }

    if (!GWTJ) {
      for (let i = 0; i < recommended; i++) {
        let temp = randomNum()
        while (gwtj.includes(temp) || disabledDDD.includes(temp)) {
          temp = randomNum()
        }
        gwtj.push(temp)
      }
    }
    console.log(gwtj)

    let dt = []
    let DT = ""
    if (selected.includes("单挑")) {
      for (let i = 0; i < Number(vs); i++) {
        let str = ""
        let bw = bwtj[randomNum(bwtj.length)]
        let sw = swtj[randomNum(swtj.length)]
        let gw = gwtj[randomNum(gwtj.length)]
        str = bw + "" + sw + gw
        while (dt.includes(str)) {
          let bw = bwtj[randomNum(bwtj.length)]
          let sw = swtj[randomNum(swtj.length)]
          let gw = gwtj[randomNum(gwtj.length)]
          str = bw + "" + sw + gw
        }
        dt.push(str)
      }
      DT = "单挑号：" + dt.join(",") + "\n"
    }

    let zx = []
    let ZX = ""
    if (selected.includes("直选号")) {
      for (let i = 0; i < Number(direct); i++) {
        let str = ""
        let bw = bwtj[randomNum(bwtj.length)]
        let sw = swtj[randomNum(swtj.length)]
        let gw = gwtj[randomNum(gwtj.length)]
        str = bw + "" + sw + gw
        while (zx.includes(str)) {
          let bw = bwtj[randomNum(bwtj.length)]
          let sw = swtj[randomNum(swtj.length)]
          let gw = gwtj[randomNum(gwtj.length)]
          str = bw + "" + sw + gw
        }
        zx.push(str)
      }
      ZX = "直选号：" + zx.join(",") + "\n"
    }

    let zx1 = []
    let ZX1 = ""
    if (selected.includes("组选号")) {
      for (let i = 0; i < Number(group); i++) {
        let str = ""
        let bw = bwtj[randomNum(bwtj.length)]
        let sw = swtj[randomNum(swtj.length)]
        let gw = gwtj[randomNum(gwtj.length)]
        str = bw + "" + sw + gw
        while (zx1.includes(str)) {
          let bw = bwtj[randomNum(bwtj.length)]
          let sw = swtj[randomNum(swtj.length)]
          let gw = gwtj[randomNum(gwtj.length)]
          str = bw + "" + sw + gw
        }
        zx1.push(str)
      }
      ZX1 = "组选号：" + zx1.join(",") + "\n"
    }

    result =
      D1D +
      D2D +
      D3D +
      D4D +
      D5D +
      D6D +
      KD +
      DX +
      JO +
      HZ +
      BWTJ +
      SWTJ +
      GWTJ +
      DT +
      ZX +
      ZX1 +
      sm
    setResult(result)
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "10px 40px",
      }}
    >
      <div
        className="left"
        style={{
          position: "relative",
          border: "1px solid black",
          width: "40%",
          boxSizing: "border-box",
          padding: "40px 10px",
          whiteSpace: "pre-line",
          lineHeight: "30px",
          marginRight: "10px",
        }}
      >
        {result}
        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {start}
        </span>
        <span
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {end}
        </span>
      </div>
      <div
        className="right"
        style={{
          width: "48%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Checkbox.Group defaultValue={selected} onChange={setSelected}>
          {checkData.map((item) => (
            <Checkbox
              value={item.value}
              style={{ width: "30%", margin: "6px 0" }}
            >
              {item.label}
            </Checkbox>
          ))}
        </Checkbox.Group>

        <div
          style={{
            marginTop: "30px",
            width: "45%",
            boxSizing: "border-box",
            padding: "40px 10px",
            marginRight: "30px",
            border: "1px solid black",
            position: "relative",
            whiteSpace: "pre-line",
            fontSize: "12px",
            flex: "1",
          }}
        >
          {result}
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {start}
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {end}
          </span>
        </div>
        <Form
          layout="horizontal"
          form={form}
          style={{ marginTop: "30px" }}
          labelCol={{ span: 8 }}
          labelAlign="left"
          initialValues={{
            start: "【随机数字】",
            end: "<个人观点仅供参考>",
            shuiyin: "【水印内容】",
            direct: 10,
            group: 10,
            vs: 5,
            recommended: 5,
            span: "1,9,4",
          }}
          onFinish={createHandle}
        >
          <Form.Item name="start" label="抬头内容：">
            <Input type="text" />
          </Form.Item>
          <Form.Item name="end" label="自定义结尾：">
            <Input type="text" />
          </Form.Item>
          <Form.Item name="shuiyin" label="水印内容：">
            <Input type="text" />
          </Form.Item>
          <Form.Item name="direct" label="直选个数：">
            <Input type="number" />
          </Form.Item>
          <Form.Item name="group" label="组选个数：">
            <Input type="number" />
          </Form.Item>
          <Form.Item name="vs" label="单挑个数：">
            <Input type="number" />
          </Form.Item>
          <Form.Item name="recommended" label="推荐个数：">
            <Input type="number" min={3} max={8} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "40%" }}>
              生成
            </Button>
            <Button type="default" style={{ width: "40%", marginLeft: "10px" }}>
              自定义
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default App
