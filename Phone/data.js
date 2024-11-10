const data = [
  { model: "华为Mate 7", cpu: "麒麟925" },
  { model: "华为Mate 8", cpu: "麒麟950" },
  { model: "华为Mate 9", cpu: "麒麟960" },
  { model: "华为Mate 9 Pro", cpu: "麒麟960" },
  { model: "华为Mate 9 保时捷设计", cpu: "麒麟960" },
  { model: "华为Mate 10", cpu: "麒麟970" },
  { model: "华为Mate 10 Pro", cpu: "麒麟970" },
  { model: "华为Mate 10 保时捷设计", cpu: "麒麟970" },
  { model: "华为Mate 20", cpu: "麒麟980" },
  { model: "华为Mate 20 Pro", cpu: "麒麟980" },
  { model: "华为Mate 20 X", cpu: "麒麟980" },
  { model: "华为Mate 20 RS 保时捷设计", cpu: "麒麟980" },
  { model: "华为Mate 30", cpu: "麒麟990" },
  { model: "华为Mate 30 Pro", cpu: "麒麟990" },
  { model: "华为Mate 30 RS 保时捷设计", cpu: "麒麟990" },
  { model: "华为Mate 40", cpu: "麒麟9000" },
  { model: "华为Mate 40 Pro", cpu: "麒麟9000" },
  { model: "华为Mate 40 Pro+", cpu: "麒麟9000" },
  { model: "华为Mate 40 RS 保时捷设计", cpu: "麒麟9000" },
  { model: "华为Mate 50", cpu: "骁龙8+ Gen1 4G" },
  { model: "华为Mate 50 Pro", cpu: "骁龙8+ Gen1 4G" },
  { model: "华为Mate 50 RS 保时捷设计", cpu: "骁龙8+ Gen1 4G" },
  { model: "华为Mate 60", cpu: "麒麟9000s" },
  { model: "华为Mate 60 Pro", cpu: "麒麟9000s" },
  { model: "华为Mate 60 RS 保时捷设计", cpu: "麒麟9000s" },
  { model: "iPhone", cpu: "ARM11" },
  { model: "iPhone 3G", cpu: "ARM11" },
  { model: "iPhone 3Gs", cpu: "Samsung S5PC100" },
  { model: "iPhone 4", cpu: "A4" },
  { model: "iPhone 4s", cpu: "A5" },
  { model: "iPhone 5", cpu: "A6" },
  { model: "iPhone 5c", cpu: "A6" },
  { model: "iPhone 5s", cpu: "A7" },
  { model: "iPhone 6", cpu: "A8" },
  { model: "iPhone 6 Plus", cpu: "A8" },
  { model: "iPhone 6s", cpu: "A9" },
  { model: "iPhone 6s Plus", cpu: "A9" },
  { model: "iPhone SE 1st gen", cpu: "A9" },
  { model: "iPhone 7", cpu: "A10 Fusion" },
  { model: "iPhone 7 Plus", cpu: "A10 Fusion" },
  { model: "iPhone 8", cpu: "A11 Bionic" },
  { model: "iPhone 8 Plus", cpu: "A11 Bionic" },
  { model: "iPhone X", cpu: "A11 Bionic" },
  { model: "iPhone XR", cpu: "A12 Bionic" },
  { model: "iPhone XS", cpu: "A12 Bionic" },
  { model: "iPhone XS Max", cpu: "A12 Bionic" },
  { model: "iPhone 11", cpu: "A13 Bionic" },
  { model: "iPhone 11 Pro", cpu: "A13 Bionic" },
  { model: "iPhone 11 Pro Max", cpu: "A13 Bionic" },
  { model: "iPhone SE 2nd gen", cpu: "A13" },
  { model: "iPhone 12 Mini", cpu: "A14" },
  { model: "iPhone 12", cpu: "A14" },
  { model: "iPhone 12 Pro", cpu: "A14" },
  { model: "iPhone 12 Pro Max", cpu: "A14" },
  { model: "iPhone 13 Mini", cpu: "A15" },
  { model: "iPhone 13", cpu: "A15" },
  { model: "iPhone 13 Pro", cpu: "A15" },
  { model: "iPhone 13 Pro Max", cpu: "A15" },
  { model: "iPhone SE 3rd gen", cpu: "A15" },
  { model: "iPhone 14", cpu: "A15" },
  { model: "iPhone 14 Plus", cpu: "A15" },
  { model: "iPhone 14 Pro", cpu: "A16" },
  { model: "iPhone 14 Pro Max", cpu: "A16" },
  { model: "iPhone 15", cpu: "A16" },
  { model: "iPhone 15 Plus", cpu: "A16" },
  { model: "iPhone 15 Pro", cpu: "A17 Pro" },
  { model: "iPhone 15 Pro Max", cpu: "A17 Pro" },
  { model: "荣耀X50", cpu: "高通 骁龙6 Gen1" },
  { model: "荣耀Magic6", cpu: "高通 骁龙8 Gen3" },
  { model: "荣耀Magic V3", cpu: "高通骁龙8 Gen3" },
  { model: "荣耀200", cpu: "高通 骁龙7 Gen3" },
  { model: "荣耀90 GT", cpu: "高通 骁龙8 Gen2" },
  { model: "荣耀Magic6 Pro", cpu: "高通 骁龙8 Gen3" },
  { model: "荣耀200 Pro", cpu: "高通 骁龙8S Gen3" },
  { model: "荣耀100 Pro", cpu: "高通 骁龙8 Gen2" },
  { model: "荣耀X60i", cpu: "联发科 天玑6080" },
  { model: "荣耀X50 GT", cpu: "高通 骁龙8+ Gen1" },
  { model: "荣耀100", cpu: "高通 骁龙7 Gen3" },
  { model: "荣耀畅玩60 Plus", cpu: "高通 骁龙 4 Gen2" },
  { model: "荣耀Magic5", cpu: "高通 骁龙8 Gen2" },
  { model: "荣耀Magic V2", cpu: "高通 骁龙8 Gen2" },
  { model: "荣耀Magic5 Pro", cpu: "高通 骁龙8 Gen2" },
  { model: "荣耀X10", cpu: "海思 麒麟 820 5G" },
  { model: "荣耀Magic4", cpu: "高通 骁龙8 Gen1" },
  { model: "荣耀畅玩50", cpu: "联发科 天玑 6100+" },
  { model: "荣耀90 GT", cpu: "高通 骁龙8 Gen2" },
  { model: "荣耀30", cpu: "海思 麒麟 985" },
  { model: "荣耀200 Pro", cpu: "高通 骁龙8S Gen3" },
  { model: "荣耀30 Pro", cpu: "海思 麒麟 990 5G" },
  { model: "荣耀X50", cpu: "高通 骁龙6 Gen1" },
  { model: "荣耀70", cpu: "高通 骁龙778G Plus" },
  { model: "荣耀Magic V Flip", cpu: "高通 骁龙8+ Gen1" },
  { model: "荣耀60", cpu: "高通 骁龙778G" },
  { model: "荣耀X40", cpu: "高通 骁龙695" },
  { model: "荣耀Play8T", cpu: "未明确列出" },
  { model: "荣耀X30", cpu: "高通 骁龙695" },
  { model: "荣耀80", cpu: "高通 骁龙782G" },
  { model: "荣耀90 Pro", cpu: "高通 骁龙8+ Gen1" },
  { model: "小米14", cpu: "高通 骁龙8 Gen3" },
  { model: "小米14 Ultra", cpu: "高通 骁龙8 Gen3" },
  { model: "小米15", cpu: "高通 骁龙8 Gen3" },
  { model: "小米13", cpu: "高通 骁龙8 Gen2" },
  { model: "小米MIX FOLD 4", cpu: "高通骁龙8 Gen3" },
  { model: "小米14 Pro", cpu: "高通 骁龙8 Gen3" },
  { model: "小米Civi 4 Pro", cpu: "高通 骁龙8S Gen3" },
  { model: "小米MIX Flip", cpu: "高通 骁龙8 Gen3" },
  { model: "小米11", cpu: "高通 骁龙888" },
  { model: "小米13 Ultra", cpu: "高通 骁龙8 Gen2" },
  { model: "小米14(16GB/512GB)", cpu: "高通 骁龙8 Gen3" },
  { model: "小米12", cpu: "高通 骁龙8 Gen1" },
  { model: "小米10S", cpu: "高通 骁龙870" },
  { model: "小米13 Pro", cpu: "高通 骁龙8 Gen2" },
  { model: "小米12S", cpu: "高通 骁龙8+ Gen1" },
  { model: "小米10", cpu: "高通 骁龙865" },
  { model: "小米14 Pro(16GB/1TB)", cpu: "高通 骁龙8 Gen3" },
  { model: "小米12S Ultra", cpu: "高通 骁龙8+ Gen1" },
  { model: "小米11 Ultra", cpu: "高通 骁龙888" },
  { model: "小米MIX 4", cpu: "高通 骁龙888 Plus" },
  { model: "小米14 Ultra(16GB/512GB)", cpu: "高通 骁龙8 Gen3" },
  { model: "小米13(12GB/256GB)", cpu: "高通 骁龙8 Gen2" },
  { model: "小米12S Pro", cpu: "高通 骁龙8+ Gen1" },
  { model: "小米12 Pro", cpu: "高通 骁龙8 Gen1" },
  { model: "小米11青春版", cpu: "高通 骁龙780G" },
  { model: "小米Civi 3", cpu: "联发科 天玑8200-Ultra" },
  { model: "小米11 Pro", cpu: "高通 骁龙888" },
  { model: "小米MIX FOLD 3", cpu: "高通 骁龙8 Gen2（领先版）" },
  { model: "小米13 Ultra(16GB/1TB)", cpu: "高通 骁龙8 Gen2" },
  { model: "小米10(8GB/128GB/全网通/5G版/至尊纪念版)", cpu: "高通 骁龙865" },
  { model: "小米14(16GB+1TB/限量定制版)", cpu: "高通 骁龙8 Gen3" },
  { model: "小米12X", cpu: "高通 骁龙870" },
  { model: "小米14 Pro(16GB/512GB)", cpu: "高通 骁龙8 Gen3" },
  { model: "小米13(12GB/512GB)", cpu: "高通 骁龙8 Gen2" },
  { model: "小米10 Pro", cpu: "高通 骁龙865" },
  { model: "小米MIX FOLD 2", cpu: "高通 骁龙8+ Gen1" },
  { model: "小米13(8GB/256GB)", cpu: "高通 骁龙8 Gen2" },
  { model: "小米Civi 4 Pro(12GB/512GB)", cpu: "高通 骁龙8S Gen3" },
  { model: "小米MIX FOLD", cpu: "高通 骁龙888" },
  { model: "小米10青春版", cpu: "高通 骁龙765G" },
  { model: "小米12X(8GB/128GB/5G版)", cpu: "高通 骁龙870" },
  { model: "小米Civi 3(12GB/512GB)", cpu: "联发科 天玑8200-Ultra" },
  { model: "Redmi K60", cpu: "高通 骁龙8+ Gen1（降频版）" },
  { model: "Redmi K40", cpu: "高通 骁龙870" },
  { model: "Redmi Note 11T Pro", cpu: "联发科 天玑8100" },
  { model: "Redmi Note 12", cpu: "高通 骁龙4 Gen1" },
  { model: "Redmi Note 12 Pro", cpu: "联发科 天玑1080" },
  { model: "Redmi K50", cpu: "联发科 天玑8100" },
  { model: "Redmi K60至尊版", cpu: "联发科 天玑9200+" },
  { model: "Redmi Note 9 Pro", cpu: "高通 骁龙750G" },
  { model: "Redmi Note 12", cpu: "高通 骁龙4 Gen1" },
  { model: "Redmi Note 9", cpu: "联发科 天玑800U" },
  { model: "Redmi K50 至尊版", cpu: "高通 骁龙8+ Gen1" },
  { model: "Redmi K30", cpu: "高通 骁龙765G" },
  { model: "Redmi K40S", cpu: "高通 骁龙870" },
  { model: "Redmi 9A", cpu: "联发科 Helio G25" },
  { model: "Redmi K30 Pro", cpu: "高通 骁龙865" },
  { model: "Redmi K50 Pro", cpu: "联发科 天玑9000" },
  { model: "Redmi 12C", cpu: "联发科 Helio G85" },
  { model: "OPPO Find N3 Flip", cpu: "高通 骁龙8 Gen3" },
  { model: "OPPO Find X7", cpu: "天玑9300" },
  { model: "OPPO Find X7 Ultra", cpu: "高通 骁龙8 Gen3" },
  { model: "OPPO K12", cpu: "高通 骁龙7 Gen3" },
  { model: "OPPO Reno12", cpu: "天玑8250 星速版" },
  { model: "OPPO Reno11", cpu: "联发科 天玑8200" },
  { model: "OPPO Reno6", cpu: "联发科 天玑900" },
  { model: "OPPO Find X3", cpu: "高通 骁龙870" },
  { model: "OPPO Reno5", cpu: "高通 骁龙765G" },
  { model: "OPPO Reno8", cpu: "联发科 天玑1300" },
  { model: "OPPO A93", cpu: "高通 骁龙480" },
  { model: "OPPO Find X6", cpu: "联发科 天玑9200" },
  { model: "OPPO Reno 11 Pro", cpu: "高通 骁龙8+ Gen1" },
  { model: "OPPO A72", cpu: "联发科 天玑720" },
  { model: "OPPO A3 Pro", cpu: "联发科 天玑7050" },
  { model: "OPPO K10", cpu: "联发科 天玑8000-Max" },
  { model: "OPPO Reno 12(16GB/512GB)", cpu: "联发科 天玑8250 星速版" },
  { model: "OPPO Find X8", cpu: "联发科 天玑9400" },
  { model: "vivo X100 Ultra", cpu: "高通 骁龙8 Gen3" },
  { model: "vivo X100", cpu: "联发科 天玑9300" },
  { model: "vivo X100s", cpu: "联发科 天玑9300+" },
  { model: "vivo S19", cpu: "高通 骁龙7 Gen3" },
  { model: "vivo Y300 Pro", cpu: "高通 骁龙6 Gen1" },
  { model: "vivo X Fold3", cpu: "高通 骁龙8 Gen2" },
  { model: "vivo X100 Ultra(16GB/1TB)", cpu: "高通 骁龙8 Gen3" },
  { model: "vivo X200 Pro", cpu: "联发科 天玑9400" },
  { model: "vivo X100 Pro", cpu: "联发科 天玑9300" },
  { model: "vivo Y200 GT", cpu: "高通 骁龙7 Gen3" },
  { model: "vivo Y200", cpu: "高通 骁龙6 Gen1" },
  { model: "vivo X100s Pro", cpu: "联发科 天玑9300+" },
  { model: "vivo X60", cpu: "三星 Exynos 1080" },
  { model: "vivo S7", cpu: "高通 骁龙765G" },
  { model: "vivo Y200t", cpu: "高通 骁龙6 Gen1" },
  { model: "vivo X90", cpu: "联发科 天玑9200" },
  { model: "vivo Y37 5G版", cpu: "联发科 天玑6300" },
  { model: "vivo S18 Pro", cpu: "联发科 天玑9200+" },
  { model: "vivo S17", cpu: "高通 骁龙778G+" },
  { model: "vivo S10", cpu: "联发科 天玑1100" },
  { model: "vivo X50", cpu: "高通 骁龙765G" },
  { model: "vivo S9", cpu: "联发科 天玑1100" },
  { model: "vivo S12", cpu: "联发科 天玑1100" },
  { model: "vivo Y52s", cpu: "联发科 天玑720" },
  { model: "vivo X70 Pro", cpu: "三星 Exynos 1080" },
  { model: "vivo X Note", cpu: "高通 骁龙8 Gen1" },
  { model: "vivo X Fold3 Pro", cpu: "高通骁龙8 Gen3" },
  { model: "vivo Y100i", cpu: "联发科 天玑6020" },
  { model: "vivo iQOO 12", cpu: "第三代骁龙8移动平台" },
  { model: "一加 12", cpu: "骁龙 8 Gen 3" },
  { model: "一加 Ace 3 Pro", cpu: "骁龙 8 Gen 3" },
  { model: "一加 Ace 3V", cpu: "骁龙 7+ Gen3" },
  { model: "一加 Ace 3", cpu: "骁龙8Gen2" },
  { model: "一加 Ace2", cpu: "骁龙8+Gen1" },
  { model: "一加 Ace2v", cpu: "天玑9000" },
  { model: "一加 Ace2Pro", cpu: "骁龙8Gen2" },
  { model: "一加 11", cpu: "骁龙8Gen2" },
  { model: "一加 10Pro", cpu: "骁龙8Gen1" },
  { model: "一加 9R", cpu: "骁龙870" },
  { model: "一加 9RT", cpu: "骁龙888" },
  { model: "一加 9", cpu: "骁龙888" },
  { model: "一加 9Pro", cpu: "骁龙888" },
  { model: "一加 8", cpu: "骁龙865" },
  { model: "一加 8 Pro", cpu: "骁龙865" },
  { model: "一加 8T", cpu: "骁龙865" },
  { model: "一加 7T", cpu: "骁龙855 Plus" },
  { model: "一加 7T Pro", cpu: "骁龙855 Plus" },
  { model: "一加 7 Pro", cpu: "骁龙855" },
  { model: "一加 7", cpu: "骁龙855" },
  { model: "一加 6T", cpu: "骁龙845" },
  { model: "一加 6", cpu: "骁龙845" },
  { model: "三星Galaxy S24 Ultra", cpu: "高通 骁龙8 Gen3 for Galaxy" },
  { model: "三星Galaxy S24", cpu: "三星 Exynos 2400" },
  { model: "三星Galaxy S24+", cpu: "三星 Exynos 2400" },
  { model: "三星Galaxy S23 Ultra", cpu: "高通 骁龙8 Gen2 for Galaxy" },
  { model: "三星Galaxy S23", cpu: "高通 骁龙8 Gen2 for Galaxy" },
  { model: "三星Galaxy S22 Ultra", cpu: "高通 骁龙8 Gen1 for Galaxy" },
  { model: "三星Galaxy S22", cpu: "高通 骁龙8 Gen1 for Galaxy" },
  { model: "三星Galaxy S21 Ultra", cpu: "高通 骁龙888" },
  { model: "三星Galaxy S21", cpu: "高通 骁龙888" },
  { model: "三星Galaxy S20", cpu: "高通 骁龙865" },
  { model: "三星Galaxy A54 5G", cpu: "三星 Exynos 1380" },
  { model: "三星Galaxy A55 5G", cpu: "三星 Exynos 1480" },
  { model: "三星Galaxy Z Fold4", cpu: "高通 骁龙8+ Gen1" },
  { model: "三星Galaxy Z Flip4", cpu: "高通 骁龙8+ Gen1" },
  { model: "三星Galaxy A73", cpu: "高通 骁龙6 Gen1" },
  { model: "三星Galaxy A33", cpu: "三星 Exynos 1280" },
  { model: "联想拯救者Y70", cpu: "高通 骁龙8+ Gen1" },
  { model: "联想拯救者 Y90", cpu: "高通 骁龙8 Gen1" },
  { model: "联想拯救者电竞手机Pro", cpu: "高通 骁龙865 Plus" },
  { model: "联想乐檬K12 Pro", cpu: "高通 骁龙662" },
  { model: "联想乐檬K12", cpu: "高通 骁龙460" },
  { model: "联想moto X50 Ultra", cpu: "骁龙 8s Gen 3" },
  { model: "联想Z6 Pro", cpu: "高通 骁龙855" },
  { model: "联想S5 Pro", cpu: "骁龙660/636" },
  { model: "真我GT6", cpu: "骁龙8Gen3" },
  { model: "真我13", cpu: "联发科天玑6300" },
  { model: "真我12 Pro", cpu: "高通骁龙6 Gen1/7s Gen2" },
  { model: "真我12 Pro+", cpu: "高通骁龙7s Gen2" },
  { model: "真我GT5 Pro", cpu: "第三代骁龙8" },
  { model: "真我V13", cpu: "未明确列出" },
  { model: "真我GT", cpu: "高通骁龙888" },
  { model: "真我X7 Pro", cpu: "联发科 天玑1000+" },
  { model: "真我11 Pro+", cpu: "未明确列出" },
  { model: "iQOO Z9 Turbo", cpu: "高通 骁龙8S Gen3" },
  { model: "iQOO 12 Pro", cpu: "高通 骁龙8 Gen3" },
  { model: "iQOO Neo9", cpu: "高通 骁龙8 Gen2" },
  { model: "iQOO Neo9S Pro+", cpu: "高通 骁龙8 Gen3" },
  { model: "iQOO Z9", cpu: "高通 骁龙7 Gen3" },
  { model: "iQOO Z9x", cpu: "高通 骁龙6 Gen1" },
  { model: "iQOO 12", cpu: "高通 骁龙8 Gen3" },
  { model: "iQOO 9", cpu: "高通 骁龙8 Gen1" },
  { model: "iQOO Neo9S Pro", cpu: "联发科 天玑9300+" },
  { model: "iQOO Z8", cpu: "联发科 天玑8200" },
  { model: "魅族21", cpu: "高通 骁龙8 Gen3" },
  { model: "魅族21 Note", cpu: "高通 骁龙8 Gen2" },
  { model: "魅族21 Pro", cpu: "高通 骁龙8 Gen3" },
  { model: "魅族20", cpu: "高通 骁龙8 Gen2" },
  { model: "魅族Lucky 08", cpu: "高通 骁龙7S Gen2" },
  { model: "魅族20 Pro", cpu: "高通 骁龙8 Gen2" },
  { model: "魅族17 Pro", cpu: "高通 骁龙865" },
  { model: "魅族18s", cpu: "高通 骁龙888 Plus" },
  { model: "魅族18", cpu: "高通 骁龙888" },
  { model: "魅族18X", cpu: "高通 骁龙870" },
]