var config = {
  "widgets": [
    {
      "elementId": "gva",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "gva",
            "name": "gva",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 228,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "gva",
              "format": {
                "parse": {
                  "Year": "date"
                }
              },
              "transform": [
                {
                  "type": "filter",
                  "expr": "datum['Region name'] == 'London'"
                }
              ]
            }
          ],
          "scales": [
            {
              "name": "x",
              "type": "utc",
              "range": "width",
              "domain": {
                "data": "gva",
                "field": "Year"
              }
            },
            {
              "name": "value",
              "type": "linear",
              "range": "height",
              "zero": false,
              "domain": {
                "data": "gva",
                "field": "Value"
              }
            }
          ],
          "axes": [
            {
              "orient": "bottom",
              "scale": "x",
              "labelFont": "Lato",
              "format": "%Y",
              "domain": false,
              "ticks": false,
              "labelPadding": 10
            },
            {
              "orient": "right",
              "scale": "value",
              "labelFont": "Lato",
              "format": "s",
              "grid": true,
              "domain": false,
              "ticks": false,
              "title": "GBP",
              "titleFontWeight": "light"
            }
          ],
          "marks": [
            {
              "type": "line",
              "from": {
                "data": "gva"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "Year"
                  },
                  "y": {
                    "scale": "value",
                    "field": "Value"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#A95F6D"
                  }
                }
              }
            }
          ]
        }
      }
    },
    {
      "elementId": "unemployment",
      "view": {
        "metadata": {},
        "resources": [
          {
            "datasetId": "unemployment",
            "name": "unemployment-rate",
            "transform": []
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "width": 245,
          "height": 160,
          "padding": 0,
          "data": [
            {
              "name": "unemployment-rate",
              "format": {
                "parse": {
                  "date": "date"
                }
              }
            }
          ],
          "scales": [
            {
              "name": "x",
              "type": "utc",
              "range": "width",
              "domain": {
                "data": "unemployment-rate",
                "field": "date"
              }
            },
            {
              "name": "y",
              "type": "linear",
              "range": "height",
              "nice": true,
              "zero": false,
              "domain": {
                "data": "unemployment-rate",
                "field": "unemployment_rate"
              }
            }
          ],
          "axes": [
            {
              "orient": "bottom",
              "scale": "x",
              "labelFont": "Lato",
              "format": "%Y",
              "domain": false,
              "ticks": false,
              "labelAngle": 30,
              "labelPadding": 10
            },
            {
              "orient": "right",
              "scale": "y",
              "labelFont": "Lato",
              "domain": false,
              "ticks": false,
              "grid": true,
              "labelFontSize": 4
            }
          ],
          "marks": [
            {
              "type": "line",
              "from": {
                "data": "unemployment-rate"
              },
              "encode": {
                "enter": {
                  "x": {
                    "scale": "x",
                    "field": "date"
                  },
                  "y": {
                    "scale": "y",
                    "field": "unemployment_rate"
                  },
                  "strokeWidth": {
                    "value": 2
                  },
                  "stroke": {
                    "value": "#A95F6D"
                  }
                }
              }
            }
          ]
        }
      }
    }
  ],
  "datasets": [
    "https://github.com/datasets/london-gva",
    "https://datahub.io/london/unemployment"
  ]
}