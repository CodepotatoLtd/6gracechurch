module.exports = {
  "entry": {
    "app": {
      "import": [
        "@roots/bud-server/client/index.js?name=bud&bud.overlay=true&bud.indicator=true&path=/__bud/hmr",
        "@roots/bud-server/client/proxy-click-interceptor.js",
        "@scripts/main",
        "@styles/app"
      ]
    },
    "editor": {
      "import": [
        "@roots/bud-server/client/index.js?name=bud&bud.overlay=true&bud.indicator=true&path=/__bud/hmr",
        "@roots/bud-server/client/proxy-click-interceptor.js",
        "@scripts/editor",
        "@styles/editor"
      ]
    }
  },
  "bail": false,
  "cache": {
    "name": "bud.development",
    "type": "filesystem",
    "version": "r1r_rkoqkn3dxgdo20i9jhfaa34_",
    "cacheDirectory": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/.budfiles/cache/webpack",
    "managedPaths": [
      "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules"
    ],
    "buildDependencies": {
      "bud": [
        "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/package.json",
        "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/.editorconfig",
        "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/bud.config.js",
        "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/composer.json",
        "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/jsconfig.json",
        "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/package-lock.json",
        "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/tailwind.config.js",
        "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/theme.json"
      ]
    }
  },
  "context": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch",
  "devtool": "cheap-module-source-map",
  "infrastructureLogging": {
    "console": {
      "Console": {}
    },
    "level": "none"
  },
  "mode": "development",
  "module": {
    "noParse": {},
    "rules": [
      {
        "test": {},
        "exclude": [
          {}
        ],
        "parser": {
          "requireEnsure": false
        }
      },
      {
        "oneOf": [
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/babel-loader/lib/index.js",
                "options": {
                  "cacheDirectory": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/.budfiles/cache/babel",
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
                  ],
                  "env": {
                    "development": {
                      "compact": false
                    }
                  },
                  "root": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch"
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/style-loader/dist/cjs.js"
              },
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": true
                }
              },
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "postcssOptions": {
                    "syntax": "postcss-scss",
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
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ],
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
                  "sourceMap": true
                }
              }
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
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch"
            ],
            "exclude": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch"
            ],
            "exclude": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/js-yaml-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch"
            ],
            "exclude": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/html-loader/dist/cjs.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch"
            ],
            "exclude": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/csv-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch"
            ],
            "exclude": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/xml-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch"
            ],
            "exclude": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/style-loader/dist/cjs.js"
              },
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": true
                }
              },
              {
                "loader": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "postcssOptions": {
                    "syntax": "postcss-scss",
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
                  "sourceMap": true
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
                    "info": "dart-sass\t1.52.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.17.1\t(Dart Compiler)\t[Dart]",
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
                      "info": "dart-sass\t1.52.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.17.1\t(Dart Compiler)\t[Dart]",
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
            ]
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
    "publicPath": "/"
  },
  "optimization": {
    "emitOnErrors": false,
    "minimize": false,
    "minimizer": [
      "..."
    ],
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
  "parallelism": 150,
  "performance": {
    "hints": false
  },
  "recordsPath": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/.budfiles/bud/modules.json",
  "stats": {
    "preset": "errors-warnings"
  },
  "target": "browserslist:/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/package.json",
  "plugins": [
    {
      "options": {}
    },
    {
      "patterns": [
        {
          "from": "images",
          "to": "[name][ext]",
          "context": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources",
          "noErrorOnMissing": true
        }
      ],
      "options": {}
    },
    {
      "options": {
        "assetHookStage": null,
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
      "options": {
        "emitHtml": false,
        "publicPath": ""
      },
      "plugin": {
        "name": "EntrypointsManifestPlugin",
        "stage": null
      },
      "name": "entrypoints.json"
    },
    {
      "name": "WordPressExternalsWebpackPlugin",
      "stage": null,
      "externals": {
        "type": "window"
      }
    },
    {
      "plugin": {
        "name": "WordPressDependenciesWebpackPlugin",
        "stage": null
      },
      "manifest": {},
      "usedDependencies": {},
      "fileName": "wordpress.json"
    },
    {
      "plugin": {
        "name": "MergedManifestPlugin"
      },
      "file": "entrypoints.json",
      "entrypointsName": "entrypoints.json",
      "wordpressName": "wordpress.json"
    }
  ],
  "resolve": {
    "alias": {
      "@src": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources",
      "@dist": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/public",
      "@fonts": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources/fonts",
      "@images": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources/images",
      "@scripts": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources/scripts",
      "@styles": "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources/styles"
    },
    "extensions": [
      ".mjs",
      ".cjs",
      ".js",
      ".jsx",
      ".css",
      ".json",
      ".wasm",
      ".yml",
      ".toml",
      ".scss",
      ".sass"
    ],
    "modules": [
      "/Users/treforcoster/development2018/6gracechurch/wp-content/themes/6gracechurch/resources",
      "node_modules"
    ]
  }
}