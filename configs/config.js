//wToken,mos,and executors make sure these addresses must be contract;
let config = new Map(
    [
        ["Eth",{
            wToken:"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            v2:{
                mos:"0xfeB2b97e4Efce787c08086dC16Ab69E063911380",
                fee:{
                receiver:"0x4A53841B9b16182f996a65aAb407e7622CBCf966",
                feeRate:"7000",//denominator is 1000000
                fixedFee:"100000000000000000"
                    },
                executors:[
                    "0x3335733c454805df6a77f825f266e136FB4a3333",//rubic
                    "0x0000000022D53366457F9d5E68Ec105046FC4383",//curve
                    "0x1111111254eeb25477b68fb85ed929f73a960582",//1inch
                    "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",//sushi 
                    "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",//univ2
                    "0xE592427A0AEce92De3Edee1F18E0157C05861564",//univ3
                    "0xB4B0ea46Fe0E9e8EAB4aFb765b527739F2718671",//verse
                    "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", // openocean
                    "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",// lifi
                    "0x4315f344a905dC21a08189A117eFd6E1fcA37D57",//xy
                    "0xce16F69375520ab01377ce7B88f5BA8C48F8D666",//squid
                ]
            }
        }],

 
        ["Bsc",{
            wToken:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            v2:{
                mos:"0xfeB2b97e4Efce787c08086dC16Ab69E063911380",
                fee:{
                receiver:"0x4A53841B9b16182f996a65aAb407e7622CBCf966",
                feeRate:"7000",//denominator is 1000000
                fixedFee:"600000000000000000"
                    },
                executors:[
                    "0x3335733c454805df6a77f825f266e136fb4a3333",//rubic
                    "0x1111111254eeb25477b68fb85ed929f73a960582",//1inch
                    "0x10ED43C718714eb63d5aA57B78B54704E256024E",//pancake
                    "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",//sushi
                    "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", // openocean
                    "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",// lifi
                    "0x7D26F09d4e2d032Efa0729fC31a4c2Db8a2394b1",//xy
                    "0xce16F69375520ab01377ce7B88f5BA8C48F8D666",//squid
                ]
            },
        }],
        
        ["Matic",{
            wToken:"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
            v2:{
                mos:"0xfeB2b97e4Efce787c08086dC16Ab69E063911380",
                fee:{
                receiver:"0x4A53841B9b16182f996a65aAb407e7622CBCf966",
                feeRate:"7000",//denominator is 1000000
                fixedFee:"200000000000000000000"
                    },
                executors:[
                    "0x3335733c454805df6a77f825f266e136fb4a3333",//rubic
                    "0x89D6B81A1Ef25894620D05ba843d83B0A296239e",//algebra
                    "0x1111111254eeb25477b68fb85ed929f73a960582",//1inch
                    "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",//quick 
                    "0xf5b509bB0909a69B1c207E495f687a596C168E12",//quickv3 
                    "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",//sushi 
                    "0xE592427A0AEce92De3Edee1F18E0157C05861564", //univ3
                    "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", // openocean
                    "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",// lifi
                    "0x0c988b66EdEf267D04f100A879db86cdb7B9A34F",//xy
                    "0xce16F69375520ab01377ce7B88f5BA8C48F8D666",//squid
                ]
            },

        }],

        ["Klaytn",{
            wToken:"0x19aac5f612f524b754ca7e7c41cbfa2e981a4432",
            v2:{
                mos:"0xfeB2b97e4Efce787c08086dC16Ab69E063911380",
                fee:{
                receiver:"0x4A53841B9b16182f996a65aAb407e7622CBCf966",
                feeRate:"1000",//denominator is 1000000
                fixedFee:"10000000000000000000"
                    },
                executors:[
                    "0xEf71750C100f7918d6Ded239Ff1CF09E81dEA92D",//claimswap
                    "0x52075Fd1fF67f03beABCb5AcdA9679b02d98cA37",//xy
                    "0xe0fbB27D0E7F3a397A67a9d4864D4f4DD7cF8cB9", // klayswap
                ]
            },
        }],


        ["Map",{
            wToken:"0x13cb04d4a5dfb6398fc5ab005a6c84337256ee23",
            v2:{
                mos:"0xfeB2b97e4Efce787c08086dC16Ab69E063911380",
                fee:{
                receiver:"0x4A53841B9b16182f996a65aAb407e7622CBCf966",
                feeRate:"7000",//denominator is 1000000
                fixedFee:"10000000000000000000000"
                    },
                executors:[
                "0x0bce9e0ebd4fd4d6562495af45c4aaa0c1f7f3d7",//hiveswap
                ]
            },

        }],



        //<------------------------------------- testnet----------------------------------------->

        ["BscTest",{
            wToken:"0xae13d989dac2f0debff460ac112a837c89baa7cd",
            v2:{
                mos:"0x3C12F82ea96c855944efe9f3aC4ce18449Aa634B",
                fee:{
                receiver:"0xCBdb1Da4f99276b0c427776BDE93838Bc19386Cc",
                feeRate:"7000",//denominator is 1000000
                fixedFee:"100000000"
                    },
                executors:[
                    "0xD99D1c33F9fC3444f8101754aBC46c52416550D1",	
                    "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
                    "0x6710b000cc6728e068C095B66535E1A8b552e816"
                ]
            }
        }],

        ["Makalu",{
            wToken:"0x2eD27dF9B4c903aB53666CcA59AFB431F7D15e91",
            v2:{
                mos:"0x3D8da6f43e35E05162d874BdaF93f61995A34D81",
                fee:{
                receiver:"0xCBdb1Da4f99276b0c427776BDE93838Bc19386Cc",
                feeRate:"7000",//denominator is 1000000
                fixedFee:"100000000"
                    },
                executors:[
                    "0xf479BD49E55cf47474056Ef168B0E0709DDF1830"
                ]
            }
        }],

        ["MaticTest",{
            wToken:"0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
            v2:{
                mos:"0x71f38FE43031397C102F10fb857a6D432af10642",
                fee:{
                receiver:"0xCBdb1Da4f99276b0c427776BDE93838Bc19386Cc",
                feeRate:"7000",//denominator is 1000000
                fixedFee:"1000000000000000000"
                    },
                executors:[
                    "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
                    "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
                    "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
                    "0x15e6c86a9ac9a32f91125794fda82eeb807ed818"
                ]
            }
        }],

        ["TronTest",{
            wToken:"0xFB3B3134F13CCD2C81F4012E53024E8135D58FEE",
            v2:{
                mos:"0xFB3B3134F13CCD2C81F4012E53024E8135D58FEE",
                fee:{
                receiver:"0xCBdb1Da4f99276b0c427776BDE93838Bc19386Cc",
                feeRate:"7000",//denominator is 1000000
                fixedFee:"1000000000000000000"
                    },
                executors:[
                    "0xFB3B3134F13CCD2C81F4012E53024E8135D58FEE"
                ]
            },
        }],
        
    ]
)

exports.getConfig =function(network) {
    return config.get(network);
}  