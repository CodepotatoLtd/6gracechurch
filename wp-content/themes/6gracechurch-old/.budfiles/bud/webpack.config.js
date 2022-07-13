module.exports = {
  "entry": {
    "app": {
      "import": [
        "@roots/bud-server/client/index.js?name=bud&path=/__bud/hmr",
        "@roots/bud-server/client/proxy-click-interceptor.js",
        "@scripts/main",
        "@styles/app"
      ]
    },
    "editor": {
      "import": [
        "@roots/bud-server/client/index.js?name=bud&path=/__bud/hmr",
        "@roots/bud-server/client/proxy-click-interceptor.js",
        "@scripts/editor",
        "@styles/editor"
      ]
    }
  },
  "plugins": [
    {
      "dangerouslyAllowCleanPatternsOutsideProject": false,
      "dry": false,
      "verbose": false,
      "cleanStaleWebpackAssets": true,
      "protectWebpackAssets": true,
      "cleanAfterEveryBuildPatterns": [],
      "cleanOnceBeforeBuildPatterns": [
        "**/*",
        "!dll"
      ],
      "currentAssets": [],
      "initialClean": false,
      "outputPath": ""
    },
    {
      "patterns": [
        {
          "from": "images/**/*",
          "context": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources",
          "noErrorOnMissing": true
        }
      ],
      "options": {}
    },
    {
      "options": {}
    },
    {
      "options": {
        "basePath": "",
        "fileName": "manifest.json",
        "filter": null,
        "map": null,
        "publicPath": "",
        "removeKeyHash": {},
        "sort": null,
        "transformExtensions": {},
        "useEntryKeys": false,
        "useLegacyEmit": false,
        "writeToFileEmit": true
      }
    },
    {
      "name": "WordPressExternalsWebpackPlugin",
      "stage": null,
      "externals": {
        "type": "window"
      }
    },
    {
      "options": {
        "emitHtml": false
      },
      "plugin": {
        "name": "EntrypointsManifestPlugin",
        "stage": null
      },
      "name": "entrypoints.json"
    },
    {
      "plugin": {
        "name": "MergedManifestPlugin"
      },
      "file": "entrypoints.json",
      "entrypointsName": "entrypoints.json",
      "wordpressName": "wordpress.json"
    },
    {
      "plugin": {
        "name": "WordPressDependenciesWebpackPlugin",
        "stage": null
      },
      "manifest": {},
      "usedDependencies": {},
      "fileName": "wordpress.json"
    }
  ],
  "resolve": {
    "alias": {
      "@fonts": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources/fonts",
      "@images": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources/images",
      "@scripts": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources/scripts",
      "@styles": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources/styles"
    },
    "extensions": [
      ".wasm",
      ".mjs",
      ".js",
      ".jsx",
      ".css",
      ".json",
      ".json5",
      ".toml",
      ".xml",
      ".csv",
      ".yml",
      ".yaml",
      ".scss"
    ],
    "modules": [
      "resources",
      "node_modules",
      "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules"
    ]
  },
  "bail": true,
  "cache": {
    "type": "filesystem",
    "version": "fiv8hr7l3sdpamqsqudziyailqg_",
    "cacheDirectory": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/.budfiles/cache/webpack",
    "managedPaths": [
      "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules"
    ],
    "buildDependencies": {
      "bud": [
        "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/package.json",
        "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/bud.config.js"
      ]
    }
  },
  "context": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch",
  "devtool": false,
  "infrastructureLogging": {
    "console": false
  },
  "mode": "development",
  "module": {
    "rules": [
      {
        "test": {},
        "parser": {
          "requireEnsure": false
        }
      },
      {
        "oneOf": [
          {
            "test": {},
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/babel-loader/lib/index.js",
                "options": {
                  "cacheDirectory": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/.budfiles/cache/babel",
                  "env": {
                    "development": {
                      "compact": false
                    }
                  },
                  "root": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources",
                  "presets": [
                    [
                      "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/@babel/preset-env/lib/index.js"
                    ],
                    [
                      "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/@babel/preset-react/lib/index.js"
                    ]
                  ],
                  "plugins": [
                    [
                      "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/@babel/plugin-transform-runtime/lib/index.js",
                      {
                        "helpers": false
                      }
                    ],
                    [
                      "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js"
                    ],
                    [
                      "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js"
                    ],
                    [
                      "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/@babel/plugin-proposal-class-properties/lib/index.js"
                    ]
                  ]
                }
              }
            ],
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ]
          },
          {
            "test": {},
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/style-loader/dist/cjs.js"
              },
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": false
                }
              },
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "postcssOptions": {
                    "plugins": [
                      [
                        "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/postcss-import/index.js"
                      ],
                      [
                        null
                      ],
                      [
                        null
                      ],
                      [
                        "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  },
                  "sourceMap": true
                }
              }
            ],
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ]
          },
          {
            "test": {},
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/style-loader/dist/cjs.js"
              },
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "localIdentName": "[name]__[local]___[hash:base64:5]",
                  "modules": true,
                  "sourceMap": false
                }
              }
            ],
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ],
            "type": "asset",
            "generator": {
              "filename": "fonts/[name][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/html-loader/dist/cjs.js"
              }
            ],
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ]
          },
          {
            "test": {},
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/csv-loader/index.js"
              }
            ],
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ]
          },
          {
            "test": {},
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/xml-loader/index.js"
              }
            ],
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/style-loader/dist/cjs.js"
              },
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": false
                }
              },
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "postcssOptions": {
                    "plugins": [
                      [
                        "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/postcss-import/index.js"
                      ],
                      [
                        null
                      ],
                      [
                        null
                      ],
                      [
                        "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  },
                  "sourceMap": true
                }
              },
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/resolve-url-loader/index.js",
                "options": {
                  "root": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources",
                  "sourceMap": false
                }
              },
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/sass-loader/dist/cjs.js",
                "options": {
                  "implementation": {
                    "sassNull": {},
                    "sassTrue": {
                      "value": true
                    },
                    "sassFalse": {
                      "value": false
                    },
                    "Logger": {
                      "silent": {}
                    },
                    "info": "dart-sass\t1.49.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.16.1\t(Dart Compiler)\t[Dart]",
                    "types": {},
                    "NULL": {},
                    "TRUE": {
                      "value": true
                    },
                    "FALSE": {
                      "value": false
                    },
                    "default": {
                      "sassNull": {},
                      "sassTrue": {
                        "value": true
                      },
                      "sassFalse": {
                        "value": false
                      },
                      "Logger": {
                        "silent": {}
                      },
                      "info": "dart-sass\t1.49.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.16.1\t(Dart Compiler)\t[Dart]",
                      "types": {},
                      "NULL": {},
                      "TRUE": {
                        "value": true
                      },
                      "FALSE": {
                        "value": false
                      }
                    }
                  },
                  "sourceMap": true
                }
              }
            ],
            "exclude": {}
          }
        ]
      }
    ],
    "unsafeCache": false
  },
  "name": "bud",
  "node": false,
  "output": {
    "assetModuleFilename": "[name][ext]",
    "chunkFilename": "[name].js",
    "filename": "[name].js",
    "path": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/public",
    "pathinfo": false,
    "publicPath": "auto"
  },
  "optimization": {
    "emitOnErrors": false,
    "minimize": false,
    "minimizer": [
      "..."
    ],
    "runtimeChunk": false,
    "splitChunks": {
      "cacheGroups": {
        "bud": {
          "chunks": "all",
          "test": {},
          "reuseExistingChunk": true,
          "priority": -10
        },
        "vendor": {
          "chunks": "all",
          "test": {},
          "reuseExistingChunk": true,
          "priority": -20
        }
      }
    }
  },
  "parallelism": 15,
  "performance": {
    "hints": false
  },
  "recordsPath": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/.budfiles/bud/modules.json",
  "stats": {
    "preset": "normal"
  },
  "target": "browserslist:/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/package.json"
}