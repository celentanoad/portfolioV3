const theme = {
    "name": "portfolio",
    "rounding": 4,
    "spacing": 24,
    "defaultMode": "light",
    "global": {
        "breakpoints": {
            "small": {
              "value": 600,
            },
            "medium": {
              "value": 900,
            },
            "large": {
              "value": 3000,
            },
          },
      "colors": {
        "brand": {
          "dark": "#025A6F",
          "light": "#036F88"
        },
        "background": {
          "dark": "#111111",
          "light": "#11111111"
        },
        "background-back": {
          "dark": "#111111",
          "light": "#EEEEEE"
        },
        "background-front": {
          "dark": "#222222",
          "light": "#FFFFFF"
        },
        "background-contrast": {
          "dark": "#FFFFFF11",
          "light": "#11111111"
        },
        "text": {
          "dark": "#EEEEEE",
          "light": "#333333"
        },
        "text-strong": {
          "dark": "#FFFFFF",
          "light": "#000000"
        },
        "text-weak": {
          "dark": "#CCCCCC",
          "light": "#444444"
        },
        "text-xweak": {
          "dark": "#999999",
          "light": "#666666"
        },
        "border": {
          "dark": "#444444",
          "light": "#CCCCCC"
        },
        "control": "brand",
        "active-background": "background-contrast",
        "active-text": "text-strong",
        "selected-background": "brand",
        "selected-text": "text-strong",
        "status-critical": "#FF4040",
        "status-warning": "#FFAA15",
        "status-ok": "#00C781",
        "status-unknown": "#CCCCCC",
        "status-disabled": "#CCCCCC",
        "graph-0": "brand",
        "graph-1": "status-warning",
        "accent": {
          "dark": "#871000",
          "light": "#FFB202"
        },
        "accent2": {
            "dark": "#FFB202",
            "light": "#871000"
        },
        "accent!": "#FFB202"
      },
      "font": {
        "family": "\"Roboto Slab\"",
        "face": "/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYmRlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISma2RlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmY2RlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmbGRlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYGRlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYWRlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmb2RlV9Su1cai.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYmRlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISma2RlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmY2RlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmbGRlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYGRlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYWRlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmb2RlV9Su1cai.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
      },
      "active": {
        "background": "active-background",
        "color": "active-text"
      },
      "hover": {
        "background": "active-background",
        "color": "active-text"
      },
      "selected": {
        "background": "selected-background",
        "color": "selected-text"
      }
    },
    "chart": {},
    "diagram": {
      "line": {}
    },
    "meter": {},
    "layer": {
      "background": {
        "dark": "#111111",
        "light": "#FFFFFF"
      }
    },
    "heading": {
      "font": {
        "family": "\"Roboto Slab\""
      }
    },
    "carousel": {
      "animation": {
        "duration": "1000",
      },
      "icons": {
        "color": 'black',
      },
      "disabled": {
        "icons": {
          "color": 'grey'
        },
      },
    },
    "accordion": {
      "icons": {
        "color": {
          "dark": "#FFFFFF",
          "light": "#000000"
        }
      }
    }
  }

export default theme;