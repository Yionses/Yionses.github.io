import { useRef, useState } from "react"
import "./App.css"
import {
  Button,
  Checkbox,
  ColorPicker,
  Form,
  Input,
  message,
  Modal,
  Watermark
} from "antd"
import { useForm } from "antd/es/form/Form"
import TextArea from "antd/es/input/TextArea"
import html2canvas from "html2canvas"

function randomNum(num = 10) {
  return Math.floor(Math.random() * num)
}

function sortNumb(arr) {
  return arr.sort((a, b) => a - b).join("")
}

function newLine(newArr) {
  let tempArr = newArr.sort((a, b) => a - b)

  if (tempArr.length < 9) {
    return tempArr.join(" ,")
  } else {
    let str = ""
    tempArr.forEach((item, index) => {
      ;(index + 1) % 11 === 0
        ? (str += item + (index === tempArr.length - 1 ? "" : "  ,") + "\n")
        : (str += item + (index === tempArr.length - 1 ? "" : "  ,"))
    })
    return str
  }
}

function App() {
  const [shuiyin, setShuiyin] = useState("[水印内容]")
  const [customVisible, setCustomVisible] = useState(false)
  const checkData = [
    {
      label: "独胆",
      value: "独胆"
    },
    {
      label: "双胆",
      value: "双胆"
    },
    {
      label: "三胆",
      value: "三胆"
    },
    {
      label: "和值",
      value: "和值"
    },
    {
      label: "跨度",
      value: "跨度"
    },
    {
      label: "大小组合",
      value: "大小组合"
    },
    {
      label: "奇偶组合",
      value: "奇偶组合"
    },
    {
      label: "杀1码",
      value: "杀1码"
    },
    {
      label: "杀2码",
      value: "杀2码"
    },
    {
      label: "四码",
      value: "四码"
    },
    {
      label: "五码",
      value: "五码"
    },
    {
      label: "六码",
      value: "六码"
    },
    {
      label: "百位推荐",
      value: "百位推荐"
    },
    {
      label: "十位推荐",
      value: "十位推荐"
    },
    {
      label: "个位推荐",
      value: "个位推荐"
    },
    {
      label: "直选号",
      value: "直选号"
    },
    {
      label: "组选号",
      value: "组选号"
    },
    {
      label: "含组三",
      value: "含组三"
    },
    {
      label: "单挑",
      value: "单挑"
    }
  ]
  const [fontColor, setFontColor] = useState("#000000")
  const [bgColor, setBgColor] = useState("#FFFFFF")
  const [customText, setCustomText] = useState("")
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

      D2D = "双胆：" + (d2d < d1d ? d2d + "" + d1d : d1d + "" + d2d) + "\n"
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
      D3D = "三胆：" + sortNumb([d3d, d2d, d1d]) + "\n"
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
      D4D = "四码：" + sortNumb([d4d, d3d, d2d, d1d]) + "\n"
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
      D5D = "五码：" + sortNumb([d5d, d4d, d3d, d2d, d1d]) + "\n"
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
        sortNumb([d6d, d5d, d4d, d3d, d2d, d1d]) +
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
      BWTJ = "百位推荐：" + sortNumb(bwtj) + "\n"
    } else {
      bwtj = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
        (item) => !disabledDDD.includes(item)
      )
    }

    // if (!BWTJ) {
    //   for (let i = 0; i < recommended; i++) {
    //     let temp = randomNum()
    //     while (bwtj.includes(temp) || disabledDDD.includes(temp)) {
    //       temp = randomNum()
    //     }
    //     bwtj.push(temp)
    //   }
    // }

    if (selected.includes("十位推荐")) {
      for (let i = 0; i < recommended; i++) {
        let temp = randomNum()
        while (swtj.includes(temp) || disabledDDD.includes(temp)) {
          temp = randomNum()
        }
        swtj.push(temp)
      }
      SWTJ = "十位推荐：" + sortNumb(swtj) + "\n"
    } else {
      swtj = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
        (item) => !disabledDDD.includes(item)
      )
    }

    // if (!SWTJ) {
    //   for (let i = 0; i < recommended; i++) {
    //     let temp = randomNum()
    //     while (swtj.includes(temp) || disabledDDD.includes(temp)) {
    //       temp = randomNum()
    //     }
    //     swtj.push(temp)
    //   }
    // }

    if (selected.includes("个位推荐")) {
      for (let i = 0; i < recommended; i++) {
        let temp = randomNum()
        while (gwtj.includes(temp) || disabledDDD.includes(temp)) {
          temp = randomNum()
        }
        gwtj.push(temp)
      }
      GWTJ = "个位推荐：" + sortNumb(gwtj) + "\n"
    } else {
      gwtj = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
        (item) => !disabledDDD.includes(item)
      )
    }

    // if (!GWTJ) {
    //   for (let i = 0; i < recommended; i++) {
    //     let temp = randomNum()
    //     while (gwtj.includes(temp) || disabledDDD.includes(temp)) {
    //       temp = randomNum()
    //     }
    //     gwtj.push(temp)
    //   }
    // }

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
      ZX = "直选号：" + newLine(zx) + "\n"
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
      ZX1 = "组选号：" + newLine(zx1) + "\n"
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
        padding: "10px 40px"
      }}
    >
      <div
        id="content-tc"
        className="left"
        style={{
          position: "relative",
          border: "1px solid black",
          width: "50%",
          boxSizing: "border-box",
          padding: "40px 10px",
          whiteSpace: "pre-line",
          lineHeight: "30px",
          marginRight: "10px",
          background: bgColor,
          color: fontColor,
          fontSize: "16px"
        }}
      >
        <Watermark content={shuiyin}>{result}</Watermark>
        <div
          style={{
            position: "absolute",
            width: "100%",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "22px",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          {start}
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "22px",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          {end}
        </div>
      </div>
      <div
        className="right"
        style={{
          width: "48%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
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
            span: "1,9,4"
          }}
        >
          <Form.Item name="start" label="抬头内容：">
            <Input
              type="text"
              onChange={(e) => setStart(e.target.value)}
              maxLength={35}
            />
          </Form.Item>
          <Form.Item name="end" label="自定义结尾：">
            <Input
              type="text"
              onChange={(e) => setEnd(e.target.value)}
              maxLength={35}
            />
          </Form.Item>
          <Form.Item name="shuiyin" label="水印内容：">
            <Input type="text" onChange={(e) => setShuiyin(e.target.value)} />
          </Form.Item>
          <Form.Item name="direct" label="直选个数：">
            <Input type="number" max={800} />
          </Form.Item>
          <Form.Item name="group" label="组选个数：">
            <Input type="number" max={800} />
          </Form.Item>
          <Form.Item name="vs" label="单挑个数：">
            <Input type="number" max={800} />
          </Form.Item>
          <Form.Item name="recommended" label="推荐个数：">
            <Input type="number" min={3} max={8} />
          </Form.Item>
        </Form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: "30px",
            marginLeft: "40px",
            flex: 1
          }}
        >
          <Button type="primary" htmlType="submit" onClick={createHandle}>
            生成
          </Button>
          <Button
            type="default"
            onClick={() => {
              if (!result) {
                message.error("请先生成")
                return
              }
              setCustomText(result)
              setCustomVisible(true)
            }}
          >
            自定义
          </Button>
          <Button
            type="default"
            onClick={async () => {
              const element = document.getElementById("content-tc") // 获取要导出的 div

              html2canvas(element).then((canvas) => {
                // 将 canvas 转换为图片数据 URL
                const imgData = canvas.toDataURL("image/png")

                // 创建一个下载链接
                const link = document.createElement("a")
                link.href = imgData
                link.download = `${start}.png` // 图片文件名
                link.click() // 触发下载
              })
            }}
          >
            导出图片
          </Button>
          <Button
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(result) // 将文字复制到剪贴板
              } catch (err) {
                console.log(e)
              }
            }}
          >
            复制文本
          </Button>
          <div>
            <label>
              字体颜色：
              <ColorPicker
                value={fontColor}
                onChange={(e) => {
                  const rgba = e.toRgbString()
                  setFontColor(rgba)
                }}
              />
            </label>
            <label style={{ marginLeft: "10px" }}>
              背景颜色：
              <ColorPicker
                value={bgColor}
                onChange={(e) => setBgColor(e.toRgbString())}
              />
            </label>
          </div>
        </div>
        <Modal
          title="自定义"
          open={customVisible}
          okText="确定"
          cancelText="取消"
          onCancel={() => setCustomVisible(false)}
          onOk={() => {
            setResult(customText)
            setCustomVisible(false)
          }}
        >
          <TextArea
            rows={selected.length + 2}
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
          />
        </Modal>
      </div>
    </div>
  )
}

export default App
