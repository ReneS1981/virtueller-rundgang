var APP_DATA = {
  "scenes": [
    {
      "id": "0-eingang",
      "name": "Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.6561526470236672,
        "pitch": 0.25297825948049635,
        "fov": 1.3990458089307722
      },
      "linkHotspots": [
        {
          "yaw": -1.5644880391325096,
          "pitch": 0.019318111684428985,
          "rotation": 0,
          "target": "1-wohn_essraum"
        },
        {
          "yaw": -2.9691998290999777,
          "pitch": -0.01657099889066771,
          "rotation": 0,
          "target": "2-zimmer-1"
        },
        {
          "yaw": 2.143992363259228,
          "pitch": -0.28745199334040983,
          "rotation": 0,
          "target": "3-gang-og"
        },
        {
          "yaw": -3.090235244496082,
          "pitch": 0.11586576137367999,
          "rotation": 3.9269908169872414,
          "target": "8-keller"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.0566016450045943,
          "pitch": 0.008849135873035152,
          "title": "WC EG",
          "text": "<img src='https://upload.wikimedia.org/wikipedia/commons/1/1e/Example.jpg' style='max-width:240px;'>"
        },
        {
          "yaw": 0.1926691111702432,
          "pitch": -0.1089481486175714,
          "title": "Bad EG noch Rohzustand",
          "text": "<img source src=’img/Bad EG.jpg‘></img>"
        }
      ]
    },
    {
      "id": "1-wohn_essraum",
      "name": "Wohn_Essraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0467829231521426,
          "pitch": 0.11410792664101521,
          "rotation": 6.283185307179586,
          "target": "0-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-zimmer-1",
      "name": "Zimmer 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0602166100963473,
          "pitch": -0.010493036451968862,
          "rotation": 0,
          "target": "0-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-gang-og",
      "name": "Gang OG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5749770231243332,
          "pitch": -0.018611084102685638,
          "rotation": 0,
          "target": "4-zimmer-2"
        },
        {
          "yaw": -1.2066649483368366,
          "pitch": -0.0053049611927225016,
          "rotation": 0,
          "target": "5-bad"
        },
        {
          "yaw": 2.2154323119061896,
          "pitch": -0.04849638710815718,
          "rotation": 0,
          "target": "6-zimmer-3"
        },
        {
          "yaw": -2.0304363028330172,
          "pitch": -0.048527144791602694,
          "rotation": 0,
          "target": "7-schlafzimmer"
        },
        {
          "yaw": 0.9635598153841283,
          "pitch": 0.3934273715263856,
          "rotation": 10.210176124166829,
          "target": "0-eingang"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7409088974729343,
          "pitch": 0.003146187815049828,
          "title": "WC OG&nbsp;",
          "text": "<img source src=’img/WC OG.jpg‘></img>"
        }
      ]
    },
    {
      "id": "4-zimmer-2",
      "name": "Zimmer 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5559810019337625,
          "pitch": -0.04324890624812738,
          "rotation": 0,
          "target": "3-gang-og"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bad",
      "name": "Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.110431313569638,
          "pitch": 0.0048170128314186655,
          "rotation": 0,
          "target": "3-gang-og"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5291726885564616,
          "pitch": -0.01955069645500096,
          "title": "Dusche",
          "text": "<img source src=’img/Dusche.jpg‘></img>"
        },
        {
          "yaw": 2.5320433512284763,
          "pitch": 0.25588165309407884,
          "title": "Wäscheschacht",
          "text": "Text"
        }
      ]
    },
    {
      "id": "6-zimmer-3",
      "name": "Zimmer 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6641863236976153,
          "pitch": -0.06470573975587257,
          "rotation": 0,
          "target": "3-gang-og"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.655791162700245,
          "pitch": 0.024803965613646284,
          "title": "Balkon",
          "text": "<img source src=’img/Balkon.jpg‘></img>"
        }
      ]
    },
    {
      "id": "7-schlafzimmer",
      "name": "Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7359900820289482,
          "pitch": -0.03340939955288036,
          "rotation": 0,
          "target": "3-gang-og"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.083967590408168,
          "pitch": -0.013775556689168411,
          "title": "Balkon",
          "text": "<img source src=’img/Balkon.jpg‘></img>"
        },
        {
          "yaw": -1.2022117283681073,
          "pitch": -0.03643198834725325,
          "title": "Schrankraum",
          "text": "<img source src=’img/Schrankraum.jpg‘></img>"
        }
      ]
    },
    {
      "id": "8-keller",
      "name": "Keller",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.851192284936939,
          "pitch": -0.0615137799308485,
          "rotation": 0.7853981633974483,
          "target": "0-eingang"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7558410950908225,
          "pitch": -0.014216032001758805,
          "title": "Lagerraum",
          "text": "<img source src=’img/Lagerraum Keller.jpg‘></img>"
        },
        {
          "yaw": -2.4695733134247178,
          "pitch": -0.013534525357627558,
          "title": "Technikraum",
          "text": "extra Foto in der Anzeige"
        },
        {
          "yaw": 2.851923183612458,
          "pitch": 0.0753468510685309,
          "title": "Stiegenhaus/Waschraum",
          "text": "<img source src=’img/Waschraum KG.jpg‘></img>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
}
