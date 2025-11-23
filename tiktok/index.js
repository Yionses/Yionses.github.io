const cus = document.querySelector(".cus")
const mask = document.querySelector(".mask")
const order = document.querySelector(".order")
const minnum = document.querySelector(".minnum")
const total = document.querySelector(".number .total span")
const input = document.querySelector(".showNumber")
const isYes = document.querySelector(".isYes")
const user = document.querySelector(".user")
const inputName = document.querySelector(".input-name")
const search = document.querySelector(".search")
// order
const orderCount = document.querySelector(".order .count")
const orderCountTwo = document.querySelector(".order .countTwo .nn")
const orderTwoTotal = document.querySelector(".twoTotal")

// wait
const wait = document.querySelector(".wait")

// wrapper
const wrapper = document.querySelector(".wrapper")

// cus.addEventListener("click", () => {
//   number.classList.add("show")
//   number.classList.remove("hide")
//   mask.classList.remove("hide")
//   input.value = ""
//   total.innerHTML = 0
// })

inputName.addEventListener("input", () => {
  setTimeout(() => {
    search.classList.remove("hide")
    search.innerHTML = inputName.value
  }, 500)
})

search.addEventListener("click", () => {
  search.classList.add("hide")
})

// 点击关闭按钮
const close = document.querySelectorAll(".close")
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", () => {
    mask.classList.add("hide")
    order.classList.add("hide")
    paySuccess.classList.add("hide")
    wrapper.classList.add("hide")
  })
}

// const oneButton = document.querySelector(".number .enter button")
// oneButton.addEventListener("click", () => {
//   number.classList.add("hide")
//   order.classList.remove("hide")

//   orderCount.innerHTML = input.value + " Coins"
//   orderCountTwo.innerHTML = total.innerHTML
//   orderTwoTotal.innerHTML = total.innerHTML

//   order.classList.add("show")
//   order.classList.remove("hide")

//   user.innerHTML = document.querySelector(".input-name").value
// })

const twoButton = document.querySelector(".order button")
const timeDown = document.querySelector(".seconeds")
twoButton.addEventListener("click", () => {
  order.classList.add("hide")
  wait.classList.remove("hide")
  let inter = setInterval(() => {
    timeDown.innerHTML = timeDown.innerHTML * 1 - 1
  }, 1000)

  const threePrice = document.querySelector(".threePrice")

  threePrice.innerHTML = orderCount.innerHTML
  // 随机等待1-2两秒
  const randomDelay = Math.floor(Math.random() * 1000) + 1000

  setTimeout(() => {
    clearInterval(inter)
    wrapper.classList.remove("hide")
    wait.classList.add("hide")
    setTimeout(() => {
      paySuccess.classList.add("show")
      paySuccess.classList.remove("hide")
    }, randomDelay)
  }, randomDelay)
})

const goback = document.querySelector(".goback")
const paySuccess = document.querySelector(".paySuccess")
goback.addEventListener("click", () => {
  paySuccess.classList.add("hide")
  mask.classList.add("hide")
  timeDown.innerHTML = "59"
  wrapper.classList.add("hide")
})

function add(number) {
  if (number > 0) {
    if (!input.value) {
      sum = number
    } else {
      sum = sum * 10 + number
    }
  } else {
    switch (number) {
      case -1:
        sum = parseInt(sum / 10)
        break
      case -2:
        sum *= 1000
        break
      case -3:
        sum *= 10
        break
    }
  }

  input.value = sum

  if (sum * 1 > 30) {
    minnum.classList.add("minnum-opcity")
    isYes.style.background = "red"
  } else {
    minnum.classList.remove("minnum-opcity")
    isYes.style.background = "#ccc"
  }

  total.innerHTML = parseInt(sum / 87) + 1
}

const trigger = document.getElementById("trigger")
const coinNumber = document.getElementById("myInput")
const customText = document.querySelector(".custom-text")
const resultBox = document.getElementById("resultBox")
const totalCoin = document.querySelector("#total")

trigger.addEventListener("click", () => {
  console.log("123123")

  coinNumber.removeAttribute("hidden") // 显示 input
  coinNumber.focus() // 聚焦
  // 将光标放到末尾（如已有值）
  const val = coinNumber.value
  coinNumber.setSelectionRange(val.length, val.length)
  customText.style.display = "none" // 隐藏文字
})

// 监听输入
coinNumber.addEventListener("input", () => {
  const num = coinNumber.value.replace(/[^\d.]/g, "") // 允许数字和小数点
  coinNumber.value = num

  if (num) {
    const result = (parseFloat(num) / 94.3).toFixed(2) // 保留两位小数
    resultBox.textContent = `€ ${result}`
    totalCoin.textContent = `€ ${result}`
  } else {
    resultBox.textContent = "€ --"
    totalCoin.textContent = "€ --"
  }
})

isYes.addEventListener("click", () => {
  order.classList.remove("hide")

  orderCount.innerHTML = coinNumber.value + " Coins"
  orderCountTwo.innerHTML = resultBox.innerHTML.replace("€ ", "")
  orderTwoTotal.innerHTML = resultBox.innerHTML.replace("€ ", "")
  user.innerHTML = document.querySelector(".input-name").value

  order.classList.add("show")
  order.classList.remove("hide")

  user.innerHTML = document.querySelector(".input-name").value
})
