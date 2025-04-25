import { useState } from "react"
import "./App.css"
function App() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <div className="wrap">
        <img src="../public/tio.jpg" className="qtx" />
        <p className="nameQun">高质量同城搭子群(400人+)</p>
        <p className="deQun">
          无论你是喜欢户外运动、文化艺术、K歌蹦迪还是其他兴趣爱好，都能在这里找到兴趣相投的小伙伴
        </p>
        <div className="qcy">
          <p>群成员</p>
          <ul className="cy-list">
            <li>
              <img src="../public/one.png" />
              <br />
              百舸
            </li>
            <li>
              <img src="../public/two.png" />
              <br />
              小刘同志
            </li>
            <li>
              <img src="../public/three.png" />
              <br />
              香菜_Zoe
            </li>
            <li>
              <img src="../public/four.png" />
              <br />
              翻斗花...
            </li>
            <li>
              <img src="../public/five.png" />
              <br />
              罗得帅
            </li>
            <li>
              <img src="../public/six.png" />
              <br />
              疯丫头
            </li>
            <li>
              <img src="../public/seven.png" />
              <br />
              橙橙汁儿
            </li>
            <li>
              <img src="../public/eight.png" />
              <br />
              超级马..
            </li>
            <li>
              <img src="../public/nine.png" />
              <br />
              阿美的...
            </li>
            <li>
              <img src="../public/ten.png" />
              <br />
              面包
            </li>
            <li>
              <img src="../public/eleven.png" />
              <br />
              清风的...
            </li>
            <li>
              <img src="../public/twelve.png" />
              <br />
              一个达...
            </li>
            <li>
              <img src="../public/thirteen.png" />
              <br />
              钟无艳
            </li>
            <li>
              <img src="../public/fourteen.png" />
              <br />
              小猫猫
            </li>
            <li>
              <img src="../public/fifteen.gif" />
              <br />
            </li>
          </ul>
          <div className="clear"></div>
          <div className="bd"></div>
          <p>
            群简介<i></i>
          </p>
          <div className="aa">
            本群旨在为同城的朋友们提供一个可以相互认识、交流和一起玩耍的平台；让大家在轻松愉快的氛围中拓展社交圈子，结识新朋友
            <br />
          </div>
          <div className="bd"></div>
          <p>
            群友秀<i></i>
          </p>
          <img src="../public/tu1.jpg" alt="" srcset="" className="tu1"></img>
          <div className="bd"></div>
          <p>
            愉悦的社群氛围<i></i>
          </p>
          <div className="aa">社群活力.灵魂有趣，在此相遇</div>
          <img src="../public/tu2.jpg" alt="" srcset="" className="tu1"></img>
          <div className="bd"></div>
          <div className="aa">线下活动.我们会不定期的组织各类线下活动</div>
          <img src="../public/tu3.jpg" alt="" srcset="" className="tu1"></img>
          <img src="../public/tu4.jpg" alt="" srcset="" className="tu1"></img>
          <img src="../public/tu5.jpg" alt="" srcset="" className="tu1"></img>
          <p>
            常见问题<i></i>
          </p>
          <h2>1.付费后支持退款吗？</h2>
          <div className="aa">
            一旦付费，无论何种原因概不退款（包括违规被踢出群的），请谨慎选择，确认了再买。群费不多，买个信任。做付费群，避免垃圾人，过滤人群，提升群质量。付费入群更能让社群形成正向循环，是社群高质量的保障。
          </div>
          <div className="bd"></div>
          <div className="aa">阅读10万+</div>
          <div className="sca">
            <div className="fl">
              <ul className="fxsc">
                <li>
                  <svg
                    className="icon"
                    style={{
                      verticalAlign: "middle",
                      fill: "currentColor",
                      overflow: "hidden",
                    }}
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="776"
                  >
                    <path
                      d="M576.02048 114.31936 973.70112 512 576.02048 909.68064 576.02048 694.4768c-12.8-0.75776-27.2384-1.25952-43.12064-1.25952-115.6096 0-306.5856 26.69568-482.60096 173.80352 0 0 60.8256-423.30112 525.7216-510.1568L576.02048 114.31936M576 65.09568c-6.32832 0-12.72832 1.2288-18.82112 3.74784-18.39104 7.61856-30.39232 25.56928-30.39232 45.47584l0 202.67008c-232.192 55.18336-361.3696 192.6656-429.64992 301.33248C19.16928 742.42048 2.26304 855.25504 1.57696 860.01664c-2.89792 20.18304 6.94272 40.05888 24.75008 49.98144 7.48544 4.17792 15.74912 6.23616 23.9616 6.23616 11.30496 0 22.51776-3.88096 31.56992-11.45856 157.78816-131.86048 327.91552-161.34144 444.928-162.304l0 167.19872c0 19.9168 12.00128 37.85728 30.39232 45.47584 6.0928 2.51904 12.4928 3.7376 18.82112 3.7376 12.82048 0 25.40544-4.99712 34.82624-14.41792l397.68064-397.68064c9.22624-9.216 14.41792-21.73952 14.41792-34.79552 0-13.056-5.19168-25.57952-14.41792-34.80576L610.82624 79.5136C601.40544 70.0928 588.82048 65.09568 576 65.09568L576 65.09568z"
                      p-id="777"
                    ></path>
                  </svg>
                  <br />
                  <i>分享</i>
                </li>
                <li>
                  <svg
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    style={{
                      verticalAlign: "middle",
                      fill: "currentColor",
                      overflow: "hidden",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="743"
                  >
                    <path
                      d="M520.914 502.712c-4.557 0-9.119-1.05-13.307-3.015L98.401 303.467a30.797 30.797 0 0 1-17.5-27.79 30.797 30.797 0 0 1 17.5-27.797L507.612 51.656c8.5-4.004 18.36-4.066 26.798 0.061l403.856 196.224a30.75 30.75 0 0 1 17.305 27.735 30.822 30.822 0 0 1-17.305 27.73L534.354 499.564a30.024 30.024 0 0 1-13.44 3.148z m-337.9-227.036l337.844 161.956 333.399-161.956-333.4-161.96-337.843 161.96z m337.9 693.489a31.094 31.094 0 0 1-13.435-3.082l-403.84-196.214a30.812 30.812 0 0 1-14.234-41.232 30.792 30.792 0 0 1 41.17-14.238L520.92 904.084 911.268 714.4c15.35-7.332 33.776-0.988 41.236 14.238 7.383 15.345 1.04 33.772-14.238 41.232l-403.85 196.214c-4.25 2.099-8.874 3.082-13.502 3.082zM924.575 763.945a30.822 30.822 0 0 1-30.818-30.807V281.037a30.822 30.822 0 0 1 61.64 0v452.106a30.787 30.787 0 0 1-30.822 30.802z m-816.558 3.569A30.822 30.822 0 0 1 77.199 736.7V281.037a30.828 30.828 0 0 1 30.818-30.812 30.822 30.822 0 0 1 30.812 30.812v455.67a30.822 30.822 0 0 1-30.812 30.807z m439.137 163.445H484.75V474.04h62.429l-0.026 456.92z"
                      p-id="744"
                    ></path>
                  </svg>
                  <br />
                  <i>收藏</i>
                </li>
              </ul>
            </div>
            <div className="fr">
              <ul className="fxsc">
                <li>
                  <svg
                    className="icon"
                    style={{
                      verticalAlign: "middle",
                      fill: "currentColor",
                      overflow: "hidden",
                    }}
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="765"
                  >
                    <path
                      d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                      p-id="766"
                    ></path>
                  </svg>
                  <br />
                  <i>1.2万</i>
                </li>
                <li>
                  <svg
                    className="icon"
                    style={{
                      verticalAlign: "middle",
                      fill: "currentColor",
                      overflow: "hidden",
                    }}
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="776"
                  >
                    <path
                      d="M576.02048 114.31936 973.70112 512 576.02048 909.68064 576.02048 694.4768c-12.8-0.75776-27.2384-1.25952-43.12064-1.25952-115.6096 0-306.5856 26.69568-482.60096 173.80352 0 0 60.8256-423.30112 525.7216-510.1568L576.02048 114.31936M576 65.09568c-6.32832 0-12.72832 1.2288-18.82112 3.74784-18.39104 7.61856-30.39232 25.56928-30.39232 45.47584l0 202.67008c-232.192 55.18336-361.3696 192.6656-429.64992 301.33248C19.16928 742.42048 2.26304 855.25504 1.57696 860.01664c-2.89792 20.18304 6.94272 40.05888 24.75008 49.98144 7.48544 4.17792 15.74912 6.23616 23.9616 6.23616 11.30496 0 22.51776-3.88096 31.56992-11.45856 157.78816-131.86048 327.91552-161.34144 444.928-162.304l0 167.19872c0 19.9168 12.00128 37.85728 30.39232 45.47584 6.0928 2.51904 12.4928 3.7376 18.82112 3.7376 12.82048 0 25.40544-4.99712 34.82624-14.41792l397.68064-397.68064c9.22624-9.216 14.41792-21.73952 14.41792-34.79552 0-13.056-5.19168-25.57952-14.41792-34.80576L610.82624 79.5136C601.40544 70.0928 588.82048 65.09568 576 65.09568L576 65.09568z"
                      p-id="777"
                    ></path>
                  </svg>
                  <br />
                  <i>3389</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="qypj">
        <p className="tit">
          <span className="fl">群友评论</span>
          <span className="fr">写评论</span>
        </p>
        <div className="liua">
          <img src="../public/one.png" alt="" className="txa" />
          <div className="lytop">
            <div className="lytit">
              <div className="fl">
                超级马铃薯<i></i>
              </div>
              <div className="fr">
                <svg
                  className="icon"
                  style={{
                    verticalAlign: "middle",
                    fill: "currentColor",
                    overflow: "hidden",
                  }}
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="765"
                >
                  <path
                    d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                    p-id="766"
                  ></path>
                </svg>
                <i>3208</i>
              </div>
            </div>
            <p className="hfword">群里面真的太有趣了，进这个群很值啊</p>
          </div>
        </div>
        <div className="liua">
          <img src="../public/two.png" alt="" className="txa" />
          <div className="lytop">
            <div className="lytit">
              <div className="fl">
                杜若<i></i>
              </div>
              <div className="fr">
                <svg
                  className="icon"
                  style={{
                    verticalAlign: "middle",
                    fill: "currentColor",
                    overflow: "hidden",
                  }}
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="765"
                >
                  <path
                    d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                    p-id="766"
                  ></path>
                </svg>
                <i>1889</i>
              </div>
            </div>
            <p className="hfword">
              一个人来到这座陌生城市，是群友们让我感受到了家的温暖
            </p>
          </div>
        </div>
        <div className="liua">
          <img src="../public/three.png" alt="" className="txa" />
          <div className="lytop">
            <div className="lytit">
              <div className="fl">
                钟无艳<i></i>
              </div>
              <div className="fr">
                <svg
                  className="icon"
                  style={{
                    verticalAlign: "middle",
                    fill: "currentColor",
                    overflow: "hidden",
                  }}
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="765"
                >
                  <path
                    d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                    p-id="766"
                  ></path>
                </svg>
                <i>1203</i>
              </div>
            </div>
            <p className="hfword">
              枯燥乏味的生活开始丰富起来了，后悔没有早点加入这个搭子群
            </p>
          </div>
        </div>
        <div className="liua">
          <img src="../public/four.png" alt="" className="txa" />
          <div className="lytop">
            <div className="lytit">
              <div className="fl">
                一半小月亮e<i></i>
              </div>
              <div className="fr">
                <svg
                  className="icon"
                  style={{
                    verticalAlign: "middle",
                    fill: "currentColor",
                    overflow: "hidden",
                  }}
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="765"
                >
                  <path
                    d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                    p-id="766"
                  ></path>
                </svg>
                <i>996</i>
              </div>
            </div>
            <p className="hfword">
              哈哈哈，终于找到一群爬山、露营、喝啤酒的小伙伴啦
            </p>
          </div>
        </div>
        <div className="liua">
          <img src="../public/five.png" alt="" className="txa" />
          <div className="lytop">
            <div className="lytit">
              <div className="fl">
                52liNuyoah<i></i>
              </div>
              <div className="fr">
                <svg
                  className="icon"
                  style={{
                    verticalAlign: "middle",
                    fill: "currentColor",
                    overflow: "hidden",
                  }}
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="765"
                >
                  <path
                    d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                    p-id="766"
                  ></path>
                </svg>
                <i>0</i>
              </div>
            </div>
            <p className="hfword">
              这是我加过最好的同城搭子群啦，让我认识了好多朋友，以后逛街、吃饭、看电影都有人陪，开心！
            </p>
          </div>
        </div>
      </div>
      <div className="clear"></div>
      <span
        role="button"
        className="mask-click mask-click-b"
        onClick={handleClick}
      >
        <img src="../public/custom.png" />
      </span>
      <a
        className="bottom-link"
        style={{
          backgroundImage: "linear-gradient(to right, #0b5394, #0b5394)",
        }}
      >
        限时16.8元进群
      </a>
      <div className="mask-box" style={{ display: show ? "block" : "none" }}>
        <div className="mask-box-sm">
          <i onClick={() => setShow(false)}>
            <img src="../public/close.png" />
          </i>
          <div className="mask-box-tt text-center">
            客服二维码
            <br />
          </div>
          <div className="ewm-box">
            <img src="../public/qrcode.jpg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
