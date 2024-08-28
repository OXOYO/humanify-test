(function (environment, environmental) {
  if (typeof exports == "object" && typeof module != "undefined") {
    environmental(exports);
  } else if (typeof define == "function" && define.amd) {
    define(["exports"], environmental);
  } else {
    environmental(
      ((environment =
        typeof globalThis != "undefined"
          ? globalThis
          : environment || self).BMapGLDraw = {}),
    );
  }
})(this, function (programState) {
  "use strict";

  function t(eventObject, initializeMap) {
    if (initializeMap == null || initializeMap > eventObject.length) {
      initializeMap = eventObject.length;
    }
    for (
      var currentIndex = 0, tempEventList = Array(initializeMap);
      initializeMap > currentIndex;
      currentIndex++
    ) {
      tempEventList[currentIndex] = eventObject[currentIndex];
    }
    return tempEventList;
  }
  function n(_eventObject, t, newEntity) {
    t = parentObject(t);
    return gameObject(
      _eventObject,
      checkBehavior()
        ? Reflect.construct(
            t,
            newEntity || [],
            parentObject(_eventObject).constructor,
          )
        : t.apply(_eventObject, newEntity),
    );
  }
  function isValidObject(errorResponse, t) {
    if (!(errorResponse instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function akeConfigurR(event, t) {
    for (var n = 0; t.length > n; n++) {
      var item = t[n];
      item.enumerable = item.enumerable || false;
      item.configurable = true;
      if ("value" in item) {
        item.writable = true;
      }
      Object.defineProperty(event, convertToPrm(item.key), item);
    }
  }
  function configure(__eventObject, t, n) {
    if (t) {
      akeConfigurR(__eventObject.prototype, t);
    }
    if (n) {
      akeConfigurR(__eventObject, n);
    }
    Object.defineProperty(__eventObject, "prototype", {
      writable: false,
    });
    return __eventObject;
  }
  function s(eventData, t) {
    var n =
      (typeof Symbol != "undefined" && eventData[Symbol.iterator]) ||
      eventData["@@iterator"];
    if (!n) {
      if (
        Array.isArray(eventData) ||
        (n = getTypeString(eventData)) ||
        (t && eventData && typeof eventData.length == "number")
      ) {
        if (n) {
          eventData = n;
        }
        var _currentIndex = 0;
        function calculateReal() {}
        return {
          s: calculateReal,
          n() {
            if (eventData.length > _currentIndex) {
              return {
                done: false,
                value: eventData[_currentIndex++],
              };
            } else {
              return {
                done: true,
              };
            }
          },
          e(errorFactory) {
            throw errorFactory;
          },
          f: calculateReal,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    var userInput;
    var _isIterable = true;
    var calculateRss = false;
    return {
      s() {
        n = n.call(eventData);
      },
      n() {
        var nextItem = n.next();
        _isIterable = nextItem.done;
        return nextItem;
      },
      e(_userInput) {
        calculateRss = true;
        userInput = _userInput;
      },
      f() {
        try {
          if (!_isIterable && n.return != null) {
            n.return();
          }
        } finally {
          if (calculateRss) {
            throw userInput;
          }
        }
      },
    };
  }
  function getterFunc() {
    if (typeof Reflect != "undefined" && Reflect.get) {
      getterFunc = Reflect.get.bind();
    } else {
      getterFunc = function (___eventObject, t, n) {
        var findValue = (function (_event, t) {
          while (
            !{}.hasOwnProperty.call(_event, t) &&
            (_event = parentObject(_event)) !== null
          );
          return _event;
        })(___eventObject, t);
        if (findValue) {
          var accessor = Object.getOwnPropertyDescriptor(findValue, t);
          if (accessor.get) {
            return accessor.get.call(arguments.length < 3 ? ___eventObject : n);
          } else {
            return accessor.value;
          }
        }
      };
    }
    return getterFunc.apply(null, arguments);
  }
  function parentObject(evaluateUser) {
    if (Object.setPrototypeOf) {
      parentObject = Object.getPrototypeOf.bind();
    } else {
      parentObject = function (__userInput) {
        return __userInput.__proto__ || Object.getPrototypeOf(__userInput);
      };
    }
    return parentObject(evaluateUser);
  }
  function etupInherit(exception, t) {
    if (typeof t != "function" && t !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    exception.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: exception,
        writable: true,
        configurable: true,
      },
    });
    Object.defineProperty(exception, "prototype", {
      writable: false,
    });
    if (t) {
      etInherits(exception, t);
    }
  }
  function checkBehavior() {
    try {
      var isBooleanEdge = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch (executionEror) {}
    return (checkBehavior = function () {
      return !!isBooleanEdge;
    })();
  }
  function gameObject(_eventData, t) {
    if (t && (typeof t == "object" || typeof t == "function")) {
      return t;
    }
    if (t !== undefined) {
      throw new TypeError(
        "Derived constructors may only return object or undefined",
      );
    }
    return (function (eventPayload) {
      if (eventPayload === undefined) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return eventPayload;
    })(_eventData);
  }
  function etInherits(parentNode, t) {
    if (Object.setPrototypeOf) {
      etInherits = Object.setPrototypeOf.bind();
    } else {
      etInherits = function (evaluation, t) {
        evaluation.__proto__ = t;
        return evaluation;
      };
    }
    return etInherits(parentNode, t);
  }
  function __isIterable(error, t) {
    return (
      (function (_error) {
        if (Array.isArray(_error)) {
          return _error;
        }
      })(error) ||
      (function (__error, t) {
        var n =
          __error == null
            ? null
            : (typeof Symbol != "undefined" && __error[Symbol.iterator]) ||
              __error["@@iterator"];
        if (n != null) {
          var __currentIndex;
          var errorHandler;
          var getNextItem;
          var s;
          var pendingItems = [];
          var isEnabled = true;
          var hasTriggeredH = false;
          try {
            getNextItem = (n = n.call(__error)).next;
            if (t === 0) {
              if (Object(n) !== n) {
                return;
              }
              isEnabled = false;
            } else {
              for (
                ;
                !(isEnabled = (__currentIndex = getNextItem.call(n)).done) &&
                (pendingItems.push(__currentIndex.value),
                pendingItems.length !== t);
                isEnabled = true
              ) {}
            }
          } catch (errorDetails) {
            hasTriggeredH = true;
            errorHandler = errorDetails;
          } finally {
            try {
              if (
                !isEnabled &&
                n.return != null &&
                ((s = n.return()), Object(s) !== s)
              ) {
                return;
              }
            } finally {
              if (hasTriggeredH) {
                throw errorHandler;
              }
            }
          }
          return pendingItems;
        }
      })(error, t) ||
      getTypeString(error, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function propertyProxy(inheritance, t, n, time) {
    var esultOfInher = getterFunc(
      parentObject(time & 1 ? inheritance.prototype : inheritance),
      t,
      n,
    );
    if (time & 2) {
      return function (errorInfo) {
        return esultOfInher.apply(n, errorInfo);
      };
    } else {
      return esultOfInher;
    }
  }
  function convertToPrm(___error) {
    var t = (function (errorObject, t) {
      if (typeof errorObject != "object" || !errorObject) {
        return errorObject;
      }
      var n = errorObject[Symbol.toPrimitive];
      if (n !== undefined) {
        var esult = n.call(errorObject, t || "default");
        if (typeof esult != "object") {
          return esult;
        }
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(errorObject);
    })(___error, "string");
    if (typeof t == "symbol") {
      return t;
    } else {
      return t + "";
    }
  }
  function typeChecker(executionItem) {
    if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
      typeChecker = function (__event) {
        return typeof __event;
      };
    } else {
      typeChecker = function (currentItem) {
        if (
          currentItem &&
          typeof Symbol == "function" &&
          currentItem.constructor === Symbol &&
          currentItem !== Symbol.prototype
        ) {
          return "symbol";
        } else {
          return typeof currentItem;
        }
      };
    }
    return typeChecker(executionItem);
  }
  function getTypeString(_errorObject, n) {
    if (_errorObject) {
      if (typeof _errorObject == "string") {
        return t(_errorObject, n);
      }
      var errorType = {}.toString.call(_errorObject).slice(8, -1);
      if (errorType === "Object" && _errorObject.constructor) {
        errorType = _errorObject.constructor.name;
      }
      if (errorType === "Map" || errorType === "Set") {
        return Array.from(_errorObject);
      } else if (
        errorType === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(errorType)
      ) {
        return t(_errorObject, n);
      } else {
        return undefined;
      }
    }
  }
  (function (___event, t = {}) {
    var n = t.insertAt;
    if (___event && typeof document != "undefined") {
      var headReference =
        document.head || document.getElementsByTagName("head")[0];
      var dynamicStyle = document.createElement("style");
      dynamicStyle.type = "text/css";
      if (n === "top" && headReference.firstChild) {
        headReference.insertBefore(dynamicStyle, headReference.firstChild);
      } else {
        headReference.appendChild(dynamicStyle);
      }
      if (dynamicStyle.styleSheet) {
        dynamicStyle.styleSheet.cssText = ___event;
      } else {
        dynamicStyle.appendChild(document.createTextNode(___event));
      }
    }
  })(
    ".BMap_Draw_Panel{height:47px;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px 0 rgba(27,124,236,.5);float:left}.BMap_Drawing .BMapDraw_Box{border-right:1px solid #d2d2d2;float:left;width:64px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAABjCAMAAABDl+xRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RUY1MTQyNzhBNThFMjExQTlDQ0JCMTMzNEIzNTNBQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4M0ExRDlFOTU4OEMxMUUyOUNDMkFCOUMwMUQzOTI2RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4M0ExRDlFODU4OEMxMUUyOUNDMkFCOUMwMUQzOTI2RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MUY1MTQyNzhBNThFMjExQTlDQ0JCMTMzNEIzNTNBQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RUY1MTQyNzhBNThFMjExQTlDQ0JCMTMzNEIzNTNBQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkLjstsAAAMAUExURR9zsKfJ4eHr8dPk8EGMv+Lp7id8tx1vrOnu8hxtq1max0WOwCl8tpO61ou104a11mGeye3y9Sp/uDKCumKaxJO92lycyKvJ3vL3+xtqqXSmyzR8tGikzb3U5HypzHqu0sLa6x5xruXs8fL09sHW5SB1soOtzlWYxbXS5rXO4VyWwr3S4S6BuXWr0ZzD3iR5tI662VGVxazN49bh6uXv9rzW6NLg6tzn7iBzrOjx902Swu7w8napzSNvpI241srZ5rDN4TSEu6LF3UmRwsrd6s3e6oGy1BxrqabH3UyLtiN2sn2u0NDj74Wz07PL3iFuq6LB2FaWxNLj7ix8tt/p8aLG4KvG22iexmymzeLs8zqAtprC3St0rmWgylKOvDeGvDiFu2OgyyJ5tZG2032w07jR4rnU5yVyrS55sbrS5EyJurbQ4sje7VGRwNnl7D2EuKnL4rHQ5J7C29fn8fb5+maizPDz9TSCuNfX1+Pt9Dt+tCV1sUODtoOv0DqIvTiHvZrB25m+2MbZ5oKx0fj6+8ba6dPi7NHf6VSTwWmhyT+Kvyx/uNrk69fk7tjj6yNxpkeErzKEu97o7vPz8yh6tW6hyFGQv0+Uw6DD3EuMvD2KvvT09CZ6tSl3sf///1WVw/X19f7+/vb29vn5+fv7+/z8/P39/fr6+vf39/j4+CJ4syF0riF3siF0rR9vpiJ5tNLS0iJyqSNyqRtpqE2NuUyNuSuAuSF2sx9yrzyJviZ7tiN4tCV6tU6Ouil+uE6UxB5wrfz9/vr8/ff6/O30+R90seDs9ery+Mvf7vX5/O/2+iV7tpfA3N3r9M7h7r7Y6R9wqB5soiByqyF2sB9upXCoz9Pk7+Lu9Z/F34q42PT19sbc7Nvp8/r7/CJroCJyqCNyqK7O5PHy8iZ5tb/U4/T19bnP4e7z9+Tr8E6OuUiFsEiJu/b393KhxvT29zSAt06Nt5i818zb502MvKfD2VGUwtzl7Ch9t0SFuCJ1sT6IvMbc68nd7KzK4DB/t////2zsHaoAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAO8ElEQVR42uyaeViUxx3HF8EXdje4KyuIJwjoIiwKCBrQqLhRNKJ4BCUeAV5RUGmMEjQ1McTUqAVjorlMjNNIWgKRtklQFLUv7HLfuYhnbpvQJq0xabJNE21n911g3wOYmVeWp8/zfv/g4d053pn5vDPzm/n9FOA4T4U8/YGr33P0+usPH3+9U685qthRRRwVcPTw8Vf5OiquZ8X1cOGzfUq8QvvrulvAbRm31Y794fSUMwac0eGOHH9gu4ccKI5LpPAmkEjhTSCRwptAIoXuFhBScBgDIgrHZQoyBZmCTEGmIFOQKcgUZApYFPYk+ZQdyvGXKQwkhWpVmU2aAaQw1VOlLzPoVZ77Bp5C2KE5OBQuHSrrQQaNCZ3CaC99VmFDcLnXHFIKcy/p3crc9Jq5hBQmGrubHjsbl8JNba5x4eDbQWHv5sfT9bllZS8PxaBgKOtRBvS58LOXW3VhS13hh2WPPURE4amcrtem7SWgME3vxZF+GhYFP9uby/cRU/jrHO9pd89flBNrfXmK3k9VZlQNRafg1YvQKWiYpMIwxivJFMb4k1DYqnN4rW42NoWgXFju5UVjBh89OnjMopfhQ24QBoWbXl4GvdrLK3Y6KYXNbNMrkjXz53pY94Whl3NUgTgUti7j6EObgrEoJFt+WWaxWHRVzZZIAgqzefhnY1IIMjBM3O7pneM1ffchhjEEoVN4kTE88eznoxlmPSmF2QwTtvEpW4PvHfO4X4RBPehymk8gKgWGYe4T252jYAI6hXTL1jZIwRKlsUTjU9gLB5Ejw91YFB7ItVjUBx1H7KDaYsk9gEzBwOjh3zEMs5uQwvYXtfDLCQg64qfXWVipBwVqfR4fhEYB5henABPQKQRT+mgKKiGF+QqfgsrClwqLgp6i1AHcIQtQU5QemcJjlsfgWrTNYplPSCE9z+ObIXEUR+qAoRTlhkYBZhenABPQKXykP6s+C6U+ewnfRnqys926CF3nv0EYFGbDklP5YzYVVjUblcIMivLZfENHWX4ko7De8kTBcIovo0eKcykUZqeet0n/ED6FdLbRliOwxcO92IeFGBQgf0/hoHnCbwKVwkHdWZt+Q2QjBRyJ8yyYmn+WL2qon+4wGgWYW5wCTMA5O9etnQwVvofg1GZkGz3TtpWFsw9GdApB58+nThcO2nT4XQShWqr7foBfkJfn50QUYs/nv+rhdl4gdfEPPoi7M8wtTgEmYN0jRVsprL0V+ws2hbhXbI0OsFHwYHsQh05h0eTJC8VuMODvi5BPbZth45cSnp1TJy/fvvfWZIGSA+/QIFKAuUUp/Bom4FE4x0q3bBkmhbNso1mz7hv24RV0CkvPnQsSoxB07txSZAoTJVCYu/CO+QUTzwl04+5zExEpwNziFGACEoWPbq6N1SbtKYwu6dIPvlgUUtlG21pcPIZ9SEWnsKOkxEOMgkdJyQ50CtZ3zujWzAM4u/Pw5+YWzCzha8y2knsRKcDcg0QpwAQkCprTVq39KPp0t2ZiUdCyjU6dBls87T/sgxadwhennxO/U33u9BfoFE7zdKsDx1JdmNpRtJZfRcDIHainNphbnAJMQKJwfbxN6dHjuxU7fxkGhTn2Vi8fOWfGHfb/j6BTmDx+sjgFmIBMIXQ8X+txKAT+bullD7efOBWkFrtpUSnA7OIUYAIShZnLa6z6ybvGUffcRKcw9JZgCG55oFO4VVNzWIzC4ZqaW8gUAq7X8DQR6wajY8euogeWcyrQDr1nJioFmF2cAkxA250btQqrtig4uo5xdt7GH4GabRhn5/0KxTUxCtcUiv3o/oWDQ0Z26zrsAB6Fgu/uuVm08SfHERgSpNiISgFmF6cAExBtpD37z4gI5zbvt1yCipWXMSjsOjNO1FLddebMLkIvz69g+zEpFMw5NrXI03EA1t84E4BKAWYXpwATUC3Ve0+MEwqHwj9DOAD3B+LcqV4bN26U2Knt+rhxoYQUXoDtx6VQNHaLR9FKhwHoWLkF+WYbZhenABOQzwsjKwV6BMu/sH2YQ/NDtuP5F7ZUVq4TUlhXWbmF0OPp+QjswEtzMSkEvhByefvXXQPw/GurViJTgPlFKdwHE5Ap/Owu0BY8X9vllV3NHxaI6Wsb7u5+THibd8zdfTgZhQlsD45NwfR4BozaVTQtky28cmrxkspdyBRgCXEKMAGZgmkVH4JyP6bfeftL9pIvbcf2O9/v7r6KZ953wBZ9T+b9/zHDPWPI4hB39+cxKXwzK2NxUVAl7MOwfcXFhyvdVzmXQuEMJV9jCzG9/wGjbBAyA/C9/1MylcpVnC93yiqlMnMKGYUlSiVc4KaPUmZie/+XZEwtuqEM+a6oaO/zlUplCDIFOGDiFGACOoX1AgobsSNhrtnKDSeJhAlNVCoz1nV7PNdlKJWJoYSRMOuUysWwkvuVidgUCkau8iiaUlTwxDBlpmdHULGTKXyVGM9V4lf48UgjleznQxAJE7oGvjNzbChclzpCx2bChzWhpPFIi+PjQz4/Oisx/lH8SJjATSFHi768P37nkkCsqDDY4M1iFMbABIw71a95FIYRRIV5rInPGEwYFXZg0wiONh0gjgqb/uiI0lGbEkeMWEIQjzQoY8TOEf9egRubN6IXYVBYxyv6JEls3oTSseSxeSt2lnZp5wopsXnfrbFVsvJVkqiwxNL4L/EjJONLexTOXPBI5BQNIYqQ7Mg4LCVCctaETY+Wlj66acIsiRGSg/+xM/H7f5HF5k0onUAQpzo2sUcIY3G8PLsdi665jyxOdYUcLSxHzssUZAoyBZmCTEGmIFOQKcgUZAoyBSkUgExhwCkAxX9lDbxkCjIFWTIFmYIsDoU/SdIH7z7z8bsfSCn/8d+llLdW8IykCm5HF56R2gXFHyXpvXcW3PXOe1LK3/WtlPLWChZIquB2dGGB1C4oSiTp/TsXPH3n+1LKP/2tlPLSK4A1fCu1CwukdkFR8mcpKjlx6pMTJVLKf/I3KeWtFZyUVAGs4eSn0rrw6SmJXfhU8QYtRW+cOPXWiTeklH/rL1LKWys4KakCWMPJt6V14e1TErvwtkxBpiBTkCn8X1Cg5rWCKn+tTGEgKegSgE1JA0jBGF7vajK51ocbB57CZ1XzcCisNoMeZErCoNAGXFU0014N5pFSiFjtGgNiXCdFEFIY3dLd9JZkXArtV3xbXOJuBwXjaI2Lqy8A1fkYFEygR5nQKfiAGB3tlkJXmBoZIgrqtq7X+hsJKJS3ctveWo5F4UFboWojMYWm9PA8vd/FtqvWenxdXepNLa356BRAL0KncBHOgc+AaR69FfiQUEiucnhtVTs2BVUjLFc3ySeFplN8JtXBh0YVBoVkAMwJFwDIpkgpjGabnr1htV+EzvqDgWqrZ3AotFeIKBmLQjBQVVjHj7oEwggotPPwt2NSUMFltUHT1WlG0wCHVYVOIRuY9XTTBgDSSCnA4YpMU7PTUqt50NV8IZfyz2IwKIhO3nIsCi6gPc06fOWTQA4+hVj+3mSOwKKQVw1ArZvjL261cH3JQ6ZgBq22ZRVoCClQ2f7J1mk4zyWhwd6H2lzG/4qm3JkUkkFCjvXVEY0mHT6FesFaWI9FAZav5b1WVytWSU8U6kAdXIvSQW8TuVcKSVE6urmR24eWFAMAUc6k0JQAbCZKLWjGt5FUne1ucO38kMR3lx4owNWgQS3Y7qGZkoxKIRLaBGlwGTOVk1HIMenpMMGndFVXDS44kwKtrrbbJhQ+BRe7SWY1csPsi5MLBgXI/5Iw8yX4NaJSyPNl3zqJyEaKS28Mp41VQhsz38U3z6kU6DibqendRHBqy2Yb7W17CLcbG+gU4FSqE7FGKGgpqVAtVbX10FkV3kREIRtUNRlqhSZmC+3qTzuXAm3bnaMbXPXYFOzTKIVd0NmHRnQKzQBcFMsNf29GPrWl9bgZ9U2hDtqGal8hha2MuXlAKFjHL7YCk4L94Mh+z02iJ8beKGQBIEpeD0CWUyhUXKwKo3OEFDQRYLSzKDSFRbv6p1NdFKAS8rEoxLCl2BZr2YcYdApwKom+Lx8aq1gU6ly6FZ6HszuHVcV2LqUO8pknHNr+orDa9sboJgcK9iUelYL98iLG2vG8C+xDGzoFM6gSf10VMGNR4KhRh2OpXoyKozfwq4iLrHPaqc2+qic59iPBLxaDgl+noRrp92CnqeqHQ8EsTsGMQcFH8CVrcSg0ZV1pMlzlVhBFX412GgVv+750iWulhaFTMDQKhqDRgLUipYjlTsFZkQx1/CakYd1gxMVMot24O/SGfFO4824wDNG2l17gdqIO4+ycLqCQjnF2zhJapJ0WLPruTOeFO+wKddgU6ApzMq3lXFCH+4jMp/6zkaj6vi9ke7/NC+aVDW7CoNDcw2nLG8dSFV6pYFKAO7SR1nAmkwbEOfM2z80kkQLlzymaReHcqVpPbSIFqBjhPUh/UqCTanWczykluJZ2JgW7k4SjKiz/AhPtUNSfwfMvSL/B4EljvY1IMGJSoOr9m5jsrl58Rl8Idi4FvZBCLRYFmur+iqIpGo9CMgC+0m7zBEuczWPmhkcB7tDNdLndZAw2QtOv2bkU6CgBhSw8CjST0GnlMjQmhZ5utltpIgq58AASngMnZyQmBTrCPJpWWVfnDXAelZsEF6r97+Xh6yImBfglsTZqHI1NwU3cy+NGRiHM5uyhonow83rz/vs1qOl5oK0CTsVIk+jRs18pCG9R0nAp2A9OyTQ+BckeT+6uAGz+wiuih8E+YjBcWgw0XBz1G0C1JkXc892PFHR8K8lkwKZgm1DRNAmFLu8/XJd0BN5//mUG3JpizaK3631QoFrbmmhtFqj169HM64mCqKdYi3en6sq3+Gl8Cjpf0JBLRkFqJAxnJKGdE1VfJe7+7CseKaUB1ILs9l660I+RMIIbRT0BBXp1H86uXqPCkh38LLXYUWGOMrJ2TiRNQIE2A5O21y70Y1QYncJ1+LXRJBRSGsrJKdB0hXcr/IyzW717cXAgnRfiXFqqstppIgrNvXree6Iw6fZESELTwEHV5UQU6HZaCoW+JUfO03LMtkxBpiBTkCnIFGQKMgWZgkxBpiBTkCn0M4X/CTAAQMqViQc6GXMAAAAASUVORK5CYII=);cursor:pointer}.BMap_Drawing .BMapDraw_last{border-right:none}.BMap_Drawing .BMapDraw_hander{background-position:0 0}.BMap_Drawing .BMapDraw_hander_hover{background-position:0 -52px}.BMap_Drawing .BMapDraw_marker{background-position:-65px 0}.BMap_Drawing .BMapDraw_marker_hover{background-position:-65px -52px}.BMap_Drawing .BMapDraw_circle{background-position:-130px 0}.BMap_Drawing .BMapDraw_circle_hover{background-position:-130px -52px}.BMap_Drawing .BMapDraw_polyline{background-position:-195px 0}.BMap_Drawing .BMapDraw_polyline_hover{background-position:-195px -52px}.BMap_Drawing .BMapDraw_polygon{background-position:-260px 0}.BMap_Drawing .BMapDraw_polygon_hover{background-position:-260px -52px}.BMap_Drawing .BMapDraw_rectangle{background-position:-325px 0}.BMap_Drawing .BMapDraw_rectangle_hover{background-position:-325px -52px}.BMapDraw_tip{position:absolute;top:50px;display:none;overflow:hidden;width:162px;height:40px;border:1px solid #ccc;line-height:20px;border-radius:4px;background-color:#fff;text-align:center;font-size:12px}.BMapDraw_tip_text{font-size:12px;color:#999}.BMapDraw_tip.polyline{right:135px}.BMapDraw_tip.rectangle{right:65px}.BMapDraw_tip.polygon{right:5px}.BMapDraw_tip.circle{right:-45px}.BMapDraw_tip p{margin:0}.screenshot{position:absolute;background:#fff;border:1px solid #e9e9e9;border-radius:2px;color:#333;padding:0 4px;font-size:12px}.screenshot .unit{display:block;color:#999;width:12px;float:right}.screenshot .circlShot{width:50px;text-align:center;line-height:30px;height:30px}.screenshot #screenshotNum{display:inline-block;height:30px;text-align:center;cursor:text}.screenshot #circleInput{display:none;border:none;width:34px;height:30px;margin-top:-1px;outline:none;-moz-user-select:none;user-select:none;-moz-appearance:listitem;appearance:listitem;-webkit-user-select:none;-webkit-appearance:listitem;padding:0;font-family:inherit;font-size:inherit;line-height:inherit;color:inherit}.screenshot #circleInput:focus{outline:none;border:none}.screenshot .rectWH{width:120px;height:30px;line-height:30px;padding:2px 0}.screenshot .rectWH span{display:inline-block;width:10px;text-align:center}.screenshot .rectWH .multiple{color:#999}.screenshot .rectWH .wh{display:inline-block;width:45px}.screenshot .rectWH .wh #rectHeight,.screenshot .rectWH .wh #rectWidth{width:33px;cursor:text}.screenshot .rectWH .wh #rectHeightInput,.screenshot .rectWH .wh #rectWidthInput{display:none;border:none;width:34px;height:30px;margin-top:-1px;outline:none;-moz-user-select:none;user-select:none;-moz-appearance:listitem;appearance:listitem;-webkit-user-select:none;-webkit-appearance:listitem;padding:0;font-family:inherit;font-size:inherit;line-height:inherit;color:inherit}.screenshot .rectWH .wh #rectHeightInput:focus,.screenshot .rectWH .wh #rectWidthInput:focus{outline:none;border:none;padding:0}.screenshot:focus-within,.screenshot:hover{border:1px solid #5e87db}.operateWindow{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.operateWindow>.containerbox{width:270px;height:35px}.operateWindow>div>span{display:block;float:left;margin:2px 0;text-align:center;cursor:pointer}.operateWindow div #confirmOperate{margin-left:15px;background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAwxJREFUaAXtmE1oE0EUx2fWNCkpfkA9iXeN0tbqYVNUFISCJ1GoiPhxELWtx3oQRBA8iR48iEkPJYIeilK8qChFxJOJSlNsxYhFFKviIVQqqTUm+5wpmTIpm+xHNpspfXt5szOzb/6//+zO7iwheKAD6AA6gA6gA+gAOoAOoAPoADqADqADK88BupyQhzI7V+d/zd4AQg4x4T81CgNn9clHThiWDfDdpL7mN5l7CgBRAcjEzxMSiPR1jX8WdVZRs+qgQrsZLNfFZrqZUNjtRKPywJVgBSSlxpQo24lKA1vBEkoTvfrESzugoo+ywCXYJ/IzK0TzSCkZXq9vPi3X2SkruWhJsF1mEBy2VY8cO0zvF83aq9UpB1xPWG6EUsD1hlUK2A9YZYD9glUC2E9Yx8CPP+4PTc/8iIQg+PWk/irLE9Ry+A3Ltdp+D8ded3R+yU5PFYqFdM6Y+xZPtp/3AJZ/G3v+6qmmyzYwFI0YE7exlCxkgHEtlmy/Xi15pTZpZhc3AnLfWt6zch6zsm1gArB1aQIAY+BWsm0Q4LLtPBKsrzMrtNsWyr7lXoiLyiLAmXhy5M5z2Bsoqzc5aTQsl2QbuInQXgb9yYSDbdPgaCaVHeGLmlk7r1MBlutw9KU1NNa5IZ//NwpAtvCLlx6U0GctYXrgRMfbnNxW+lPh+wIlaxBl2zPMLzi1Pf1dC4T2MLAxkUCObKb35f7AaCK9bZ2oVwmWa3I0wwJi8M2OtcXC34fsXt4l6soiJePNwaZuCIfn2T8oJWZW6HMFzC9m0GEG/YBBd4tkcqSUfmDnM9X2s263ePI4TsuugflA9971BLOzmWF2Kx90MnA937NWOmoCXoCGnlXZ1PsEW8iOWw3G2xsJuzC+HZFWfdhtS+OptpsMur9a30bDcm2OVulKMOx5hb7o5Dmi0auV+7j/LVMpp5t6T4DFwP36xAWiaRfFuYgqzOyiFlHwMrJNxRFCjEvsFm+hRLvdGt10xc0PNy81YS50AB1AB9ABdAAdQAfQAXQAHUAH0AF0YCU78B/Xn4einv7Y7QAAAABJRU5ErkJggg==) no-repeat top;background-size:contain}.operateWindow div #cancelOperate,.operateWindow div #confirmOperate{float:left;width:50px;height:30px;box-shadow:0 2px 4px 0 rgba(0,0,0,.3);border-radius:2px}.operateWindow div #cancelOperate{margin-left:8px;background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAupJREFUaAXtmTtvFDEQx2eWQ4ICISRaegq6hI4CCSEkQgkRgi6QkhRwCOiOGlIAouIhUhGSAqVFQgr1HWW+AvcBIo7myDB25GjX571drx8NY+m0a589M7//+rVeAEmigCggCogCooAoIAqIAqKAKCAKiAKiwP+nAIYi051LZ2D65w0Q3ODfGI7hU/wy2gm1a9rTzYUHgPgYgE6y/U9w4dQzHOxOzf++18K3wUx9BXsAdzmY0/zfefhLX+nW4r2Zeh0KaHnhJTd7DUTn2P5Zvu/D3n6/g6mjJuHA6slWE3KA70Khuf06C/moalrl0PY3W2VOSQzgscN+ELSGJXrosMs9m345y1sWhgPzmGVf5PDXCVp34zpYgAkcL547fLUuCgbWExTiagxoDevsxppnAj1cws/DvdZ0jorBs7Sxqccsj13Ou2wSz7SruD36YOrb11awm6Ndu51v3hWcr42j+l2hc8GqQKMCK4O+0DlhkwD7QOeGTQbcDhq+8dx+TdV1pMMJKsKYtW1H79JlBw3du1y1fJ8MVjlJCqwceEInhc0C7AGdHFbFErzxUEaakl5/kcdsfeJ1mt5igjFru8wCrGfj+glKxcTbUOzr7m9HGDmffgyrV7z67aKN07gjsxv45pM+4YZ1NtoLhw90MuAG2AkU+IIDzQ6dBLgRVr31bI2eMPT93NDRx3Ar2NJsTMuLK3BA7xncFUv0Me1y4jMkKnV9YU3jnNDRgHlJWefjF/exjDqpwOI6bg9/GEj7mgs6CnAorIHPAR0MzN14jdfZVyboyhXhN2/mluY92Up9zjRC94qruDn8brdrmw+fpXmH5HTWAVbZ4dn749zZe0qOo1tnBM7CcGD1RcBOHWGNmQboWX+mYYtrOLD6/FFOgbDGVC10QVV/pkHLa/gYHlzuHX7+0F8ExnyUOgg9Si3HTrcvXgHVjZFO8Eq9gVs/N8r/y70oIAqIAqKAKCAKiAKigCggCogCooAo0EGBf6iFZapSQC/BAAAAAElFTkSuQmCC) no-repeat top;background-size:contain}.operateWindow div #warnOperate{float:left;width:200px;height:30px;margin-left:4px;line-height:30px;background:#fffbcc;border:1px solid #e1e1e1;border-radius:2px;font-family:PingFangSC-Regular;font-size:14px;color:#703a04;letter-spacing:0;cursor:default}.operateLeft p span{float:right}",
  );
  var _initializeMap = {
    STATUS_FREE: "free",
    STATUS_DRAWING: "drawing",
    STATUS_EDITER: "editer",
    STATUS_MOVE: "move",
  };
  var ____eventObject = {
    INIT: "operate-init",
    COMPLETE: "operate-ok",
    CANCEL: "operate-cancel",
    CHANGE: "operate-change",
    CLICK: "mouse-click",
    RIGHTCLICK: "right-click",
    MOVE: "mouse-move",
  };
  var wallet = {
    AREA_END: "measure-area-end",
    LENGTH_END: "measure-length-end",
  };
  var eventsArray = {
    DRAW_ON_MAP: "draw-on-map",
    EDIT_ON_MAP: "edit-on-map",
    SELECT_ON_MAP: "select-on-map",
    MOVE_ON_MAP: "move-on-map",
    DRAW_NO_MAP: "draw-no-map",
    SELECT_NO_MAP: "select-no-map",
    DRAW_ON_MAP_CANCEL: "draw-on-map-cancel",
    EDIT_ON_MAP_CANCEL: "edit-on-map-cancel",
    SELECT_ON_MAP_CANCEL: "select-on-map-cancel",
    MOVE_ON_MAP_CANCEL: "move-on-map-cancel",
  };
  var initializer = {
    DRAWING_POINT: "point",
    DRAWING_MARKER: "marker",
    DRAWING_POLYLINE: "polyline",
    DRAWING_POLYGON: "polygon",
    DRAWING_CIRCLE: "circle",
    DRAWING_RECTANGLE: "rectangle",
  };
  var initialMapIdx =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6Q\n    AAAd9JREFUOBGtVc8rRFEUPufOvELMguTHwkbKjxRlo9gqNpjyFyhTit3I8i1ldpQa5S9QmA1lS9koSn6UZmMxSCyGkPlx3O+9mTe8Zl4z\n    w7eZ7rnn++aee893HlMRzEXFeLh6m2LJTpHwEJG022mcIJZTYbXX2lu/txnilJvO7sDkYnJaC0REqNO993PNTHEiDsfWAru/4vmFaYo6e3\n    5dEZIwYh1tPhobNmig20/NjcpKe3rJ0vlNmg5PUnR3n7FiTBwZbGpYNk3OIuCccHIhuQoxv49lNljD4yMG6VMUhT49HRynaGvnU9IZ0Wkc\n    ia0HlhxBlCkiOxAz5+u4v8tXVMgdvLjNkLnxbosyB1E+4wEeL5PXuLPQTC1NjBpunud6/yhF0e0PVBNv6Qv0KLwmxHBnKLNSgAMuNKClrN\n    bQKniAUnfm9SfggAtAS9l9RtZrehG99tAJFnTP6n6wmzbfGl7EUnsFrrTbDVYqs4q4FtR20kDTVosClxMK3oQQHFAtHK7WUjA6hGAnOKBS\n    gAMuAC2FqYGmhDdhp0oBDrjQgJayRxBbAwHehJ3KBXLBsfM5DC3H/v81HHIdSYQRpMcX6ekRhjcPjr/KGV+6Unt8xXJlOSfMl/lvAzYviN\n    +/fAK+AW5jAVefzjWGAAAAAElFTkSuQmCC";
  var ensureMapFit = new BMapGL.Icon(
    "//mapopen.bj.bcebos.com/cms/images/mapctrls.gif",
    new BMapGL.Size(12, 12),
    {
      imageSize: new BMapGL.Size(82, 174),
      imageOffset: new BMapGL.Size(0, 14),
    },
  );
  var timestamp = new BMapGL.Icon(
    "//mapopen.bj.bcebos.com/cms/images/mapctrls.png",
    new BMapGL.Size(12, 12),
    {
      imageSize: new BMapGL.Size(37, 442),
      imageOffset: new BMapGL.Size(25, 312),
    },
  );
  var __eventData = new BMapGL.Icon(
    "//maponline0.bdimg.com/sty/map_icons2x/MapRes/shenghui_1.png",
    new BMapGL.Size(10, 10),
    {
      offset: new BMapGL.Size(5, 5),
    },
  );
  var ___eventData = new BMapGL.Icon(
    "//bj.bcebos.com/v1/mapopen-pub-jsapigl/bmap-draw/static/edit1.png",
    new BMapGL.Size(10, 10),
    {
      offset: new BMapGL.Size(5, 5),
    },
  );
  var __initializeMap = new BMapGL.Icon(
    "//bj.bcebos.com/v1/mapopen-pub-jsapigl/bmap-draw/static/edit2.png",
    new BMapGL.Size(10, 10),
    {
      offset: new BMapGL.Size(5, 5),
    },
  );
  var _programState = {
    borderRadius: "2px",
    background: "#FFFBCC",
    border: "1px solid #E1E1E1",
    color: "#703A04",
    fontSize: "12px",
    letterSpacing: "0",
    padding: "5px",
  };
  var eventsData = {
    operate: null,
    isOpen: false,
    isOnMap: true,
    isSeries: true,
    skipEditing: false,
    isSelectDraw: false,
    enableCalculate: false,
    enableSnap: true,
    snapDistance: 10,
    drawCursor: "crosshair",
    keyCode: 87,
    baseOpts: {
      icon: __eventData,
      node: ___eventData,
      nodeT: __initializeMap,
      fillColor: "#1990FF",
      fillOpacity: 0.2,
      strokeColor: "#877efb",
      strokeWeight: 3,
      strokeOpacity: 1,
      enableDragging: true,
    },
    labelOptions: _programState,
    matchOverlay: {
      type: "Circle",
      radius: 2,
      icon: __initializeMap,
      strokeColor: "#fff",
      strokeStyle: "solid",
      strokeWeight: 2,
    },
    centerIcon: new BMapGL.Icon(
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6Q\n    AAAs1JREFUWAnNmb9v01AQx989SzVI8dIBJNZ27Mb/QRpExMiOKAW1Mw3MRVCB2BlRECF/CBtjuwbBwGJL1JXs474vtuU4Tkho4tyTGr9f\n    fvfxvV93VzL/mfYPLndSumqT4buG6Y4MI3+MpyQayc/IEI/Y0DfLW8Ov725cuKYlf2iZ/p3j8FZylT4hQx1m3lvmXSL6zoYH3pZ9PzgNfi\n    367kKA3R634t/REXF6zMa0Fh28rp8IjJjsqb/det3vUVTXp1z3T8DOs/B+kvIHw3y7/OK180Q/PUuPB2+DL/PGsrMaZQrp3tPwJEn488rh\n    IFQ+GGNDBmTN4qht6D7nm3ESfpRBurNeXGk9Ud/3gkf9N/SnOu6UBvE1jcKBSBQBmXWanAJsH0YvGtNcWV0C6WSX6yQ/McVuQ2DNycFW6d\n    dQkdjz6EF54xQg46MkPMfibYimXozsbn872M2PoGKKcc5tHA7IoiDHkuE7DeKGSOP04rqHcL1Klq8VqMj6dgc3jtMgx+mBFjh8DlhwpSI/\n    BiTaR0FTwn0PHnJWiYnPNcHlLNb4uxYmU16h7Qk26+w5bWQZD9hsZmzqRBRDGJsks4JVMgIwN9M1ArIAykRrRHNMwoY1+EMtoLBhDcID05\n    pGMsWsF1DYLPxWrepzPjWcaq2AYLPw+OFUa4MEE9jG1ox4/NoAEYUAkwNEOAJGohZIsICpAITlinCEFkCw5PEbp0GAIVZixGHZOKRzmoQl\n    SwUgvCjESsSG3eDVJ26nMOQeHRgLQBScP0r0EvmNJJFd9onBIOtxMiH80D4MPzUeXZD4zPAseCjHy8QMTmgQqOiAQI5k+pPoayxlwaMqnO\n    OZJXasSRenOVlfKES0JdM6PGu9qoObC5iDqw1g5oBYtIiVGLK9VRzmbgwZC2NWN0Qus/yc2iTlxmoeIRIXhRBHX5bAXrV9XlmmcH1B9DrB\n    Tf0b4i99lUEMOuku/wAAAABJRU5ErkJggg==",
      new BMapGL.Size(20, 20),
    ),
    circleMoveIcon: new BMapGL.Icon(
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs\n    4c6QAABcdJREFUeAHtm0FoHFUYx7+ZbDfJJiZUqcEgBU3BqtGKRdGLHsSTSGxL8agUT230YtGTDQl6EKt4CD1JqPQkastSPImIvVSUQINR\n    K1jrQVNSRRGz3WST3fH/f5k3THY3mmzejLub74Mv8/bNzJv3fnwz773v+yKiogSUgBJQAkpACSgBJaAElIASUAJKQAkoASWgBJSAElACSk\n    AJKIH2J+A1OsQgCIZw7wh0P3Qwpr0oN7MsoHNzMZ1GOe953pVGOr0pgIB2Kx4yCj0AHW7kgU18zyz6dg46CZjXN9rPDQEEOFrVy9DjUGNh\n    haIEX8+WvEuXy/LbnxX5468AWpHF0kYf/f9c190psrPPl5v7Pdm105cH9nbIQ8PZoKdbLAta6Eno2wDJ8r+KvWndiwDvIE6egg7wooszy/\n    LJhZJ8e6UslQprWl98X+TeoQ556rGsPLpvhx3QPApHAfGsrah3XBcgwPHcCegY1Pv+pxU5nV+Sy1fL9dppm7q9d3TI8yOdcvedGY4pgI5D\n    JwCS5RqpCxDwunHl+9DDlUCCqbOL3vkvmvzdrBna1iqefjwrRw52Bb5nXu0P0dpzgFisbrUGYGh5H+DCw4ViELw5dcOb+aG9ra4aiv2976\n    4OefVIDt9Hj5wI8dlqS8TbXyN8bQ28V94pbFt4pELDIQMaEplAyWaNrAEYThhjfG1peb/Mt8kssWbIm/tBBmRBJrhzLGQUNRIBxAkuTzjb\n    evzmbdfXNiITK5AFmZAN9FTIylwRAcQvrvMGONtutwnDkPiPP2RCNmQEJSsjBiCIcofBRbJZqpgzjv88cn8GC1azNHDW8qEns7L7trgNOG\n    u6bkNcxoVyPGQm9ukv4kQvF8lJrfN6cx5mtG6nEG/p9+X10VxqEMmGjMgKOsqCBfgMf3CHkZQsw/p3ZNxCLOPL3n9TuhBjjOgPEB+mSK/K\n    MPe23J4lJdPfLcvfhcApxM++XJZyOV2IZERWZEZ2tEC6pOSrb0peknvbhRsir00WnEL8ea4ib50upgqRjMiKzCAjBEh/nlxKYbdx9deKc4\n    gXZ1ZShxhb4u0nQDpD5Xe4pNKQdoBI910ogxFA+vPSklaHGGMVBxhRTYVjK0Ok4zgUA9CYnvE32OqUjoSIfaZ5ml3i3D7Al6Jx4TfRLni5\n    xJk4lpPObOPt1bszxipgb6/xIrq50xa40eG87Ioem/+8JFt1YAzu8uXAE6vEuE6cOrcoS46XtzFW10iNESoTI4hGkkKB8CaO9cie3R3maR\n    99uiRnzkdbpYZ6QHhvvJTDWHwhvHfPFOXCtNm/NtTeejcxnhLKXASQAZa0pJXhkVGMlQHIuKjQ+5qGtDo8MmIkL5Rpml2ePx6+LxswOpWk\n    tAM8MmIYNOSU9+HjZ0R+FoPzGNpLSjJo2vU3r6/XS+WbF2dCRmRFZmRnbY4ReRMXjV/ssvzgPRmnEwb7xshZ0hNGNQPGjkMxzCzASVQuMK\n    jMuGgS0tezOnO5mG1t/xAtS3S2tc+xR7IJA+/MWCCzVX8gTJG5IExnMEFlHl0L41ou4bF/SS5V6o2fAfdQTobMonwQgW+LXtYfoQPvfbzo\n    PC6SgTd/xfGSLIssjJJxENtxJXfk5+KFQ2bRP4+n7AFAWmHkkZaw4ijqAkbkXS9rXMNj59OCRxZkQjZQ5ssYeOyD/QayTIhMpBlnOgMj8l\n    vdl5pGW/wPGZBFmOIxHjKKRhXtSWwNXmXWaWoHIGwktaMGIEECInaqmlzUUHIRAVJCSzyB4hhU09s2k95GgFYAUhMsLYw6x7qvcPV1gMgl\n    Tk2KL6NTDEYxntIqKb5d2Ehw92JTfPmdox8g3J5x6JxhuSZ2k+LLFq0AJFNAmMXAQPywrW+T4yzGkUySeT1AgDmEesaUGRZlZM8qrbWZhR\n    ZGJ7LVLf2bQzMPVPumBJSAElACSkAJKAEloASUgBJQAkpACSgBJaAElIASUAJKQAkoAVcE/gG4Wba8Vno8+QAAAABJRU5ErkJggg==",
      new BMapGL.Size(40, 20),
      {
        imageOffset: new BMapGL.Size(0, 10),
      },
    ),
    moveIcon: new BMapGL.Icon(initialMapIdx, new BMapGL.Size(10, 10)),
    limitPoint: -1,
  };
  var gravity = {
    tips: "测距",
    unit: "kilometers",
    startLabel: "单击确定起点",
    followLabel: "单击确定地点，双击结束测量",
    skipEditing: true,
    enableCalculate: true,
    turnIcon: null,
    closeIcon: null,
    isSeries: false,
    baseOpts: {
      strokeColor: "#f00",
      strokeWeight: 2,
      strokeOpacity: 0.8,
      fillOpacity: 0.2,
    },
    labelOptions: _programState,
  };
  var tartIndex = {
    unit: "kilometers",
    startLabel: "单击确定起点",
    followLabel: "单击确定地点，双击结束测量",
    turnIcon: null,
    closeIcon: null,
    isSeries: false,
    baseOpts: {
      strokeColor: "#f00",
      strokeWeight: 2,
      strokeOpacity: 1,
    },
    labelOptions: _programState,
  };
  var defaultValue = {
    icon: __initializeMap,
    nodeT: null,
    node: null,
    fillColor: "#fff",
    fillOpacity: 0.1,
    strokeColor: "#00f",
    strokeWeight: 2,
    strokeOpacity: 0.6,
    strokeStyle: "dashed",
  };
  var data = {
    strokeColor: "#fff",
    strokeStyle: "solid",
    strokeWeight: "2",
  };
  var ___initializeMap = [
    "marker",
    "polyline",
    "polygon",
    "circle",
    "rectangle",
  ];
  var _tartIndex = {
    grid: "$BAIDU$",
    guid() {
      window[_tartIndex.grid] ||= {};
      window[_tartIndex.grid]._counter = window[_tartIndex.grid]._counter || 1;
      window[_tartIndex.grid]._instances =
        window[_tartIndex.grid]._instances || {};
      return "TANGRAM__" + (window[_tartIndex.grid]._counter++).toString(36);
    },
    isString(textInput) {
      return Object.prototype.toString.call(textInput) === "[object String]";
    },
    isFunction(isFunction) {
      return Object.prototype.toString.call(isFunction) === "[object Function]";
    },
    isArray(isArray) {
      if (Array.isArray) {
        return Array.isArray(isArray);
      } else {
        return Object.prototype.toString.call(isArray) === "[object Array]";
      }
    },
    isObject(isObject) {
      return Object.prototype.toString.call(isObject) === "[object Object]";
    },
    copyOptionsToNew(updateTarget, t, n) {
      for (var propertyIndex in t) {
        if (updateTarget.hasOwnProperty(propertyIndex)) {
          if (
            !t[propertyIndex] ||
            t[propertyIndex] instanceof Array ||
            t[propertyIndex] instanceof BMapGL.Icon ||
            t[propertyIndex] instanceof BMapGL.Symbol ||
            t[propertyIndex].ignore
          ) {
            n[propertyIndex] = t[propertyIndex];
            continue;
          }
          if (
            t[propertyIndex] !== null &&
            typeChecker(t[propertyIndex]) === "object" &&
            Object.keys(t[propertyIndex]).length === 0
          ) {
            continue;
          }
          if (
            t[propertyIndex] !== null &&
            typeChecker(t[propertyIndex]) === "object" &&
            Object.keys(t[propertyIndex]).length > 0
          ) {
            n[propertyIndex] = {};
            this.copyOptionsToNew(
              updateTarget[propertyIndex],
              t[propertyIndex],
              n[propertyIndex],
            );
          } else {
            n[propertyIndex] = t[propertyIndex];
          }
        }
      }
    },
    copyNotExitOptions(optionsSource, t) {
      var n = this;
      function i(electedItem) {
        if (optionsSource.hasOwnProperty(electedItem)) {
          if (
            ["baseOpts", "labelOptions", "matchOverlay"].findIndex(
              function (____event) {
                return electedItem === ____event;
              },
            ) !== -1
          ) {
            n.copyNotExitOptions(optionsSource[electedItem], t[electedItem]);
          }
        } else {
          if (
            !t[electedItem] ||
            t[electedItem] instanceof Array ||
            t[electedItem] instanceof BMapGL.Icon ||
            t[electedItem] instanceof BMapGL.Symbol ||
            t[electedItem].ignore
          ) {
            optionsSource[electedItem] = t[electedItem];
            return 1;
          }
          if (
            t[electedItem] !== null &&
            typeChecker(t[electedItem]) === "object"
          ) {
            optionsSource[electedItem] = {};
            n.copyNotExitOptions(optionsSource[electedItem], t[electedItem]);
          } else {
            optionsSource[electedItem] = t[electedItem];
          }
        }
      }
      for (var objectKeys in t) {
        i(objectKeys);
      }
    },
    copyOptions(target, t, n = []) {
      for (var i in t) {
        if (target && target.hasOwnProperty(i)) {
          if (
            t[i] instanceof Array ||
            t[i] instanceof BMapGL.Icon ||
            t[i] instanceof BMapGL.Symbol ||
            this.shotObject(t[i], n)
          ) {
            target[i] = t[i];
            continue;
          }
          if (t[i] !== null && typeChecker(t[i]) === "object") {
            this.copyOptions(target[i], t[i], n);
          } else {
            target[i] = t[i];
          }
        }
      }
    },
    shotObject(_typeChecker, t) {
      var n = false;
      t.forEach(function (t) {
        if (_typeChecker instanceof t) {
          n = true;
          return true;
        }
      });
      return n;
    },
    deepCopy(ourceData, t = 2, n, i = 0, input) {
      if (n) {
        i++;
      } else {
        n = {};
        i = 1;
      }
      for (var propertyKey in ourceData) {
        if (
          ourceData[propertyKey] instanceof Array ||
          ourceData[propertyKey] instanceof BMapGL.Icon ||
          ourceData[propertyKey] instanceof BMapGL.Symbol ||
          this.shotObject(ourceData[propertyKey], input)
        ) {
          n[propertyKey] = ourceData[propertyKey];
        } else if (
          t >= i &&
          _tartIndex.isObject(ourceData[propertyKey]) &&
          Object.keys(ourceData[propertyKey]).length > 0
        ) {
          n[propertyKey] = {};
          this.deepCopy(ourceData[propertyKey], t, n[propertyKey], i, input);
        } else {
          n[propertyKey] = ourceData[propertyKey];
        }
      }
    },
    getTarget(clickEvent) {
      var t = window.event || clickEvent;
      return t.target || t.srcElement;
    },
    getEvent(_____eventObject) {
      return window.event || _____eventObject;
    },
    preventDefault(______eventObject) {
      var t = _tartIndex.getEvent(______eventObject);
      if (t.preventDefault) {
        t.preventDefault();
      } else {
        t.returnValue = false;
      }
    },
    stopBubble(topEvent) {
      var t = _tartIndex.getEvent(topEvent);
      if (t.stopPropagation) {
        t.stopPropagation();
      } else {
        t.cancelBubble = true;
      }
    },
    on(element, t, n, i) {
      t = t.replace(/^on/i, "");
      element = _tartIndex.getdom(element);
      var cancelHandler = n;
      var eventType = t;
      t = t.toLowerCase();
      if (element.addEventListener) {
        element.addEventListener(eventType, cancelHandler, false);
      } else if (element.attachEvent) {
        element.attachEvent("on" + eventType, cancelHandler);
      }
      return element;
    },
    un(targetElement, t, n, i) {
      targetElement = _tartIndex.getdom(targetElement);
      var _currentItem;
      for (var fifthItem, s, index = i.length, eetsCriteria = !n; index--; ) {
        if (
          (_currentItem = i[index])[1] === t &&
          _currentItem[0] === targetElement &&
          (!!eetsCriteria || _currentItem[2] === n)
        ) {
          fifthItem = _currentItem[4];
          s = _currentItem[3];
          if (targetElement.removeEventListener) {
            targetElement.removeEventListener(fifthItem, s, false);
          } else if (targetElement.detachEvent) {
            targetElement.detachEvent("on" + fifthItem, s);
          }
          i.splice(index, 1);
        }
      }
      return targetElement;
    },
    getdom(_targetElement) {
      if (_tartIndex.isString(_targetElement)) {
        return document.getElementById(_targetElement);
      } else {
        return _targetElement;
      }
    },
    addClass(_element, t) {
      _element = _tartIndex.getdom(_element);
      var n = t.split(/\s+/);
      var i = _element.className;
      var classNamePrep = " " + i + " ";
      for (var ___currentIndex = n.length, s = 0; ___currentIndex > s; s++) {
        if (classNamePrep.indexOf(" " + n[s] + " ") < 0) {
          i += (i ? " " : "") + n[s];
        }
      }
      _element.className = i;
      return _element;
    },
    mc2ll(location, t) {
      var n = t.mercatorToLnglat(location.lng, location.lat);
      return new BMapGL.Point(n[0], n[1]);
    },
    ll2mc(_location, t) {
      var n = t.lnglatToMercator(_location.lng, _location.lat);
      return new BMapGL.Point(n[0], n[1]);
    },
    getPointByDistance(coordinate, t, n) {
      var i;
      var radius;
      var point;
      var s = t / 6378800;
      var degreesToRads = (Math.PI / 180) * coordinate.lat;
      var longitudeInRr = (Math.PI / 180) * coordinate.lng;
      switch (n) {
        case "North":
        case "north":
        case "N":
        case "n":
          i = 0;
          radius = coordinate.lng;
          break;
        case "West":
        case "west":
        case "W":
        case "w":
          i = 90;
          point = coordinate.lat;
          break;
        case "South":
        case "south":
        case "S":
        case "s":
          i = 180;
          radius = coordinate.lng;
          break;
        case "East":
        case "east":
        case "E":
        case "e":
          i = 270;
          point = coordinate.lat;
          break;
        default:
          i = ~~n;
      }
      var _longitudeInRr = (Math.PI / 180) * i;
      var currentDate = Math.asin(
        Math.sin(degreesToRads) * Math.cos(s) +
          Math.cos(degreesToRads) * Math.sin(s) * Math.cos(_longitudeInRr),
      );
      var userId = new BMapGL.Point(
        radius ||
          (((longitudeInRr -
            Math.atan2(
              Math.sin(_longitudeInRr) * Math.sin(s) * Math.cos(degreesToRads),
              Math.cos(s) - Math.sin(degreesToRads) * Math.sin(currentDate),
            ) +
            Math.PI) %
            (Math.PI * 2)) -
            Math.PI) *
            (180 / Math.PI),
        point || currentDate * (180 / Math.PI),
      );
      userId.lng = parseFloat(userId.lng.toFixed(6));
      userId.lat = parseFloat(userId.lat.toFixed(6));
      return userId;
    },
    throttle(throttledFunc, t, n) {
      if (typeof throttledFunc != "function") {
        return Function();
      }
      var i = null;
      var currentAction = null;
      return function (_ourceData) {
        var s = _ourceData;
        var epochTime = +new Date();
        if (!currentAction) {
          currentAction = epochTime;
        }
        if (n && epochTime - currentAction > n) {
          throttledFunc(s);
          currentAction = epochTime;
        } else {
          clearTimeout(i);
          i = setTimeout(function () {
            throttledFunc(s);
            currentAction = null;
          }, t);
        }
      };
    },
  };
  function esultAlias(_______eventObject) {
    for (
      var t = arguments.length, argsArray = Array(t > 1 ? t - 1 : 0), s = 1;
      t > s;
      s++
    ) {
      argsArray[s - 1] = arguments[s];
    }
    var handleEvent = (function (________eventObject) {
      function t() {
        var contextArray;
        isValidObject(this, t);
        for (
          var argumentCount = arguments.length,
            s = Array(argumentCount),
            ____currentIndex = 0;
          argumentCount > ____currentIndex;
          ____currentIndex++
        ) {
          s[____currentIndex] = arguments[____currentIndex];
        }
        contextArray = n(this, t, [].concat(s));
        argsArray.forEach(function (t) {
          anitizeData(contextArray, new t());
        });
        return contextArray;
      }
      etupInherit(t, ________eventObject);
      return configure(t);
    })(_______eventObject);
    function anitizeData(eventInfo, t) {
      Object.getOwnPropertyNames(t)
        .concat(Object.getOwnPropertySymbols(t))
        .forEach(function (n) {
          if (
            !n.match(
              /^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/,
            )
          ) {
            Object.defineProperty(
              eventInfo,
              n,
              Object.getOwnPropertyDescriptor(t, n),
            );
          }
        });
    }
    argsArray.forEach(function (eventTarget) {
      anitizeData(handleEvent.prototype, eventTarget.prototype);
      anitizeData(handleEvent, eventTarget);
    });
    return handleEvent;
  }
  var currentTime = configure(function _________eventObject(t, n) {
    isValidObject(this, _________eventObject);
    this.type = t;
    this.returnValue = true;
    this.target = n || null;
    this.currentTarget = null;
  });
  var ____initializeMap = (function () {
    return configure(
      function __________eventObject() {
        isValidObject(this, __________eventObject);
        this._listeners = {};
      },
      [
        {
          key: "addEventListener",
          value(triggerData, t, n) {
            if (_tartIndex.isFunction(t)) {
              if (!this._listeners) {
                this._listeners = {};
              }
              var i;
              var eventListener = this._listeners;
              if (typeof n == "string" && n) {
                if (/[^\w\-]/.test(n)) {
                  throw "nonstandard key:" + n;
                }
                t.hashCode = n;
                i = n;
              }
              if (triggerData.indexOf("on") !== 0) {
                triggerData = "on" + triggerData;
              }
              if (typeChecker(eventListener[triggerData]) !== "object") {
                eventListener[triggerData] = {};
              }
              i = i || _tartIndex.guid();
              t.hashCode = i;
              eventListener[triggerData][i] = t;
            }
          },
        },
        {
          key: "removeEventListener",
          value(eventName, t) {
            if (_tartIndex.isFunction(t)) {
              t = t.hashCode;
            } else if (!_tartIndex.isString(t)) {
              return;
            }
            if (!this._listeners) {
              this._listeners = {};
            }
            if (eventName.indexOf("on") !== 0) {
              eventName = "on" + eventName;
            }
            var n = this._listeners;
            if (n[eventName] && n[eventName][t]) {
              delete n[eventName][t];
            }
          },
        },
        {
          key: "dispatchEvent",
          value(_____event, t = {}) {
            if (!this._listeners) {
              this._listeners = {};
            }
            if (_tartIndex.isString(_____event)) {
              _____event = new currentTime(_____event);
            }
            for (var n in t) {
              _____event[n] = t[n];
            }
            var i = this._listeners;
            var ____eventData = _____event.type;
            if (____eventData.indexOf("on") !== 0) {
              ____eventData = "on" + ____eventData;
            }
            if (_tartIndex.isFunction(this[____eventData])) {
              this[____eventData].apply(this, arguments);
            }
            if (typeChecker(i[____eventData]) === "object") {
              for (var currentKey in i[____eventData]) {
                i[____eventData][currentKey].apply(this, arguments);
              }
            }
            return _____event.returnValue;
          },
        },
        {
          key: "dispose",
          value() {
            for (var ___________eventObject in this._listeners) {
              for (var t in this._listeners[___________eventObject]) {
                delete this._listeners[___________eventObject][t];
              }
            }
          },
        },
        {
          key: "defineProperty",
          value(dataObject, t = 2, n, i) {
            if (n === undefined) {
              n = this;
              i = 1;
            } else {
              i++;
            }
            for (var _currentKey in dataObject) {
              if (n && n.hasOwnProperty(_currentKey)) {
                if (
                  dataObject[_currentKey] instanceof Array ||
                  dataObject[_currentKey] instanceof BMapGL.Icon ||
                  dataObject[_currentKey] instanceof BMapGL.Symbol
                ) {
                  n[_currentKey] = dataObject[_currentKey];
                } else if (
                  t > i &&
                  _tartIndex.isObject(dataObject[_currentKey]) &&
                  Object.keys(dataObject[_currentKey]).length > 0
                ) {
                  this.defineProperty(
                    dataObject[_currentKey],
                    t,
                    n[_currentKey],
                    i,
                  );
                } else {
                  n[_currentKey] = dataObject[_currentKey];
                }
              }
            }
          },
        },
        {
          key: "setSnapPointType",
          value(atchOverlay) {
            if (atchOverlay.matchOverlay?.type === "Marker") {
              this.matchOverlay = new BMapGL.Marker(
                new BMapGL.Point(116.395, 39.935),
                atchOverlay.matchOverlay,
              );
            } else if (atchOverlay.matchOverlay?.type === "Circle") {
              if (atchOverlay.matchOverlay.radius) {
                this.matchOverlayRadius = atchOverlay.matchOverlay.radius;
              }
              this.matchOverlay = new BMapGL.Circle(
                new BMapGL.Point(116.395, 39.935),
                this.matchOverlayRadius,
                atchOverlay.matchOverlay,
              );
            } else {
              this.matchOverlay = new BMapGL.Circle(
                new BMapGL.Point(116.395, 39.935),
                this.matchOverlayRadius,
                data,
              );
            }
          },
        },
        {
          key: "setSceneStatus",
          value(ceneStatus) {
            this.scene.currentStatus = ceneStatus;
          },
        },
      ],
    );
  })();
  var onEvent = (function (inimumAction) {
    function t(____error) {
      var _esult;
      isValidObject(this, t);
      (_esult = n(this, t)).delayLimit = 100;
      _esult.minLimit = 200;
      _esult.overlayData = [];
      _esult.click = undefined;
      _esult.mousemove = undefined;
      _esult.rightclick = undefined;
      _esult.map = ____error;
      _esult.open();
      return _esult;
    }
    etupInherit(t, inimumAction);
    return configure(t, [
      {
        key: "open",
        value() {
          this.openClick();
          this.openMouse();
          this.openRightClick();
        },
      },
      {
        key: "linkOverlayData",
        value(_____eventData) {
          this.overlayData = _____eventData;
        },
      },
      {
        key: "clickAction",
        value(______eventData) {
          this.dispatchEvent(
            new currentTime(____eventObject.CLICK, ______eventData),
          );
        },
      },
      {
        key: "rightclickAction",
        value(ouseClick) {
          this.dispatchEvent(
            new currentTime(____eventObject.RIGHTCLICK, ouseClick),
          );
        },
      },
      {
        key: "mouseAction",
        value(____________eventObject) {
          if (____________eventObject) {
            this.dispatchEvent(
              new currentTime(____eventObject.MOVE, ____________eventObject),
            );
          }
        },
      },
      {
        key: "openClick",
        value() {
          if (!this.click) {
            this.map.addEventListener(
              "click",
              (this.click = this.clickAction.bind(this)),
            );
          }
        },
      },
      {
        key: "openRightClick",
        value() {
          if (!this.rightclick) {
            this.map.addEventListener(
              "rightclick",
              (this.rightclick = this.rightclickAction.bind(this)),
            );
          }
        },
      },
      {
        key: "openMouse",
        value() {
          if (!this.mousemove) {
            this.mousemove = _tartIndex
              .throttle(
                this.mouseAction.bind(this),
                this.delayLimit,
                this.minLimit,
              )
              .bind(this);
            this.map.addEventListener("mousemove", this.mousemove);
          }
        },
      },
      {
        key: "close",
        value() {
          this.closeClick();
          this.closeMouse();
        },
      },
      {
        key: "closeClick",
        value() {
          if (this.click) {
            this.map.removeEventListener("click", this.click);
            this.click = null;
          }
        },
      },
      {
        key: "closeMouse",
        value() {
          if (this.mousemove) {
            this.map.removeEventListener("mousemove", this.mousemove);
            this.mousemove = null;
          }
        },
      },
      {
        key: "intersectOverlays",
        value(locationInfo) {
          var t = [];
          for (var n = 0; this.overlayData.length > n; n++) {
            var i = this.overlayData[n];
            if ("" + i != "Marker") {
              var distanceTo = (
                "" + i != "Polyline"
                  ? i._getInPnpoly(locationInfo.point)
                  : i._getProximity(locationInfo.point)
              ).dist;
              if (
                distanceTo >= 0 &&
                i._config.mouseOverTolerance > distanceTo
              ) {
                t.push(i);
              }
            } else if (i._getInPnBox(locationInfo.pixel)) {
              t.push(i);
            }
          }
          if (t.length > 0) {
            return t;
          } else {
            return null;
          }
        },
      },
    ]);
  })(____initializeMap);
  var _currentTime = 6371008.8;
  var getLatestNews = {
    centimeters: _currentTime * 100,
    centimetres: _currentTime * 100,
    degrees: _currentTime / 111325,
    feet: _currentTime * 3.28084,
    inches: _currentTime * 39.37,
    kilometers: _currentTime / 1000,
    kilometres: _currentTime / 1000,
    meters: _currentTime,
    metres: _currentTime,
    miles: _currentTime / 1609.344,
    millimeters: _currentTime * 1000,
    millimetres: _currentTime * 1000,
    nauticalmiles: _currentTime / 1852,
    radians: 1,
    yards: _currentTime * 1.0936,
  };
  var apData = {
    acres: 0.000247105,
    centimeters: 10000,
    centimetres: 10000,
    feet: 10.763910417,
    hectares: 0.0001,
    inches: 1550.003100006,
    kilometers: 0.000001,
    kilometres: 0.000001,
    meters: 1,
    metres: 1,
    miles: 3.86e-7,
    millimeters: 1000000,
    millimetres: 1000000,
    yards: 1.195990046,
  };
  function createFeature(eventBeingTrg, t, n = {}) {
    var i = {
      type: "Feature",
    };
    if (n.id === 0 || n.id) {
      i.id = n.id;
    }
    if (n.bbox) {
      i.bbox = n.bbox;
    }
    i.properties = t || {};
    i.geometry = eventBeingTrg;
    return i;
  }
  function validateInput(_____________eventObject, t, n = {}) {
    if (!_____________eventObject) {
      throw Error("coordinates is required");
    }
    if (!Array.isArray(_____________eventObject)) {
      throw Error("coordinates must be an Array");
    }
    if (_____________eventObject.length < 2) {
      throw Error("coordinates must be at least 2 numbers long");
    }
    if (
      !isNumber(_____________eventObject[0]) ||
      !isNumber(_____________eventObject[1])
    ) {
      throw Error("coordinates must contain numbers");
    }
    return createFeature(
      {
        type: "Point",
        coordinates: _____________eventObject,
      },
      t,
      n,
    );
  }
  function validateMinXY(_______eventData, t, n = {}) {
    for (
      var i = 0, eventDataList = _______eventData;
      eventDataList.length > i;
      i++
    ) {
      var polygon = eventDataList[i];
      if (polygon.length < 4) {
        throw Error(
          "Each LinearRing of a Polygon must have 4 or more Positions.",
        );
      }
      for (var s = 0; polygon[polygon.length - 1].length > s; s++) {
        if (polygon[polygon.length - 1][s] !== polygon[0][s]) {
          throw Error("First and last Position are not equivalent.");
        }
      }
    }
    return createFeature(
      {
        type: "Polygon",
        coordinates: _______eventData,
      },
      t,
      n,
    );
  }
  function createLine(keyPressEvent, t, n = {}) {
    if (keyPressEvent.length < 2) {
      throw Error("coordinates must be an array of two or more positions");
    }
    return createFeature(
      {
        type: "LineString",
        coordinates: keyPressEvent,
      },
      t,
      n,
    );
  }
  function createGeoJson(______event, t = {}) {
    var n = {
      type: "FeatureCollection",
    };
    if (t.id) {
      n.id = t.id;
    }
    if (t.bbox) {
      n.bbox = t.bbox;
    }
    n.features = ______event;
    return n;
  }
  function createMultiLs(typeValidator, t, n = {}) {
    return createFeature(
      {
        type: "MultiLineString",
        coordinates: typeValidator,
      },
      t,
      n,
    );
  }
  function createMultiPt(_____error, t, n = {}) {
    return createFeature(
      {
        type: "MultiPoint",
        coordinates: _____error,
      },
      t,
      n,
    );
  }
  function createGeoFea(noConditionFq, t, n = {}) {
    return createFeature(
      {
        type: "MultiPolygon",
        coordinates: noConditionFq,
      },
      t,
      n,
    );
  }
  function exchangeRate(_______event, t = "kilometers") {
    var n = getLatestNews[t];
    if (!n) {
      throw Error(t + " units is invalid");
    }
    return _______event * n;
  }
  function convertToKilO(onDocumentScn, t = "kilometers") {
    var n = getLatestNews[t];
    if (!n) {
      throw Error(t + " units is invalid");
    }
    return onDocumentScn / n;
  }
  function caleToKilo(________event, t) {
    return normalizeRads(convertToKilO(________event, t));
  }
  function normalizeRads(______error) {
    return ((______error % (Math.PI * 2)) * 180) / Math.PI;
  }
  function convertToRads(_________event) {
    return ((_________event % 360) * Math.PI) / 180;
  }
  function convertLength(_______error, t = "kilometers", n = "kilometers") {
    if (_______error < 0) {
      throw Error("length must be a positive number");
    }
    return exchangeRate(convertToKilO(_______error, t), n);
  }
  function isNumber(notFoundEvent) {
    return (
      !isNaN(notFoundEvent) &&
      notFoundEvent !== null &&
      !Array.isArray(notFoundEvent)
    );
  }
  function _isValidObject(circleData) {
    return !!circleData && circleData.constructor === Object;
  }
  var ealTimeInfo = Object.freeze({
    __proto__: null,
    earthRadius: _currentTime,
    factors: getLatestNews,
    unitsFactors: {
      centimeters: 100,
      centimetres: 100,
      degrees: 1 / 111325,
      feet: 3.28084,
      inches: 39.37,
      kilometers: 0.001,
      kilometres: 0.001,
      meters: 1,
      metres: 1,
      miles: 1 / 1609.344,
      millimeters: 1000,
      millimetres: 1000,
      nauticalmiles: 1 / 1852,
      radians: 1 / _currentTime,
      yards: 1.0936133,
    },
    areaFactors: apData,
    feature: createFeature,
    geometry(geometryType, t, n) {
      switch (geometryType) {
        case "Point":
          return validateInput(t).geometry;
        case "LineString":
          return createLine(t).geometry;
        case "Polygon":
          return validateMinXY(t).geometry;
        case "MultiPoint":
          return createMultiPt(t).geometry;
        case "MultiLineString":
          return createMultiLs(t).geometry;
        case "MultiPolygon":
          return createGeoFea(t).geometry;
        default:
          throw Error(geometryType + " is invalid");
      }
    },
    point: validateInput,
    points(coordinates, t, n = {}) {
      return createGeoJson(
        coordinates.map(function (__________event) {
          return validateInput(__________event, t);
        }),
        n,
      );
    },
    polygon: validateMinXY,
    polygons(polygonPoints, t, n = {}) {
      return createGeoJson(
        polygonPoints.map(function (___________event) {
          return validateMinXY(___________event, t);
        }),
        n,
      );
    },
    lineString: createLine,
    lineStrings(locationArray, t, n = {}) {
      return createGeoJson(
        locationArray.map(function (ouseEvent) {
          return createLine(ouseEvent, t);
        }),
        n,
      );
    },
    featureCollection: createGeoJson,
    multiLineString: createMultiLs,
    multiPoint: createMultiPt,
    multiPolygon: createGeoFea,
    geometryCollection(featureGeomet, t, n = {}) {
      return createFeature(
        {
          type: "GeometryCollection",
          geometries: featureGeomet,
        },
        t,
        n,
      );
    },
    round(decimalValue, t = 0) {
      if (t && t < 0) {
        throw Error("precision must be a positive number");
      }
      var n = Math.pow(10, t || 0);
      return Math.round(decimalValue * n) / n;
    },
    radiansToLength: exchangeRate,
    lengthToRadians: convertToKilO,
    lengthToDegrees: caleToKilo,
    bearingToAzimuth(azimuthAngle) {
      var t = azimuthAngle % 360;
      if (t < 0) {
        t += 360;
      }
      return t;
    },
    radiansToDegrees: normalizeRads,
    degreesToRadians: convertToRads,
    convertLength: convertLength,
    convertArea(areaValue, t = "meters", n = "kilometers") {
      if (areaValue < 0) {
        throw Error("area must be a positive number");
      }
      var i = apData[t];
      if (!i) {
        throw Error("invalid original units");
      }
      var updateData = apData[n];
      if (!updateData) {
        throw Error("invalid final units");
      }
      return (areaValue / i) * updateData;
    },
    isNumber: isNumber,
    isObject: _isValidObject,
    validateBBox(boundingBox) {
      if (!boundingBox) {
        throw Error("bbox is required");
      }
      if (!Array.isArray(boundingBox)) {
        throw Error("bbox must be an Array");
      }
      if (boundingBox.length !== 4 && boundingBox.length !== 6) {
        throw Error("bbox must be an Array of 4 or 6 numbers");
      }
      boundingBox.forEach(function (______________eventObject) {
        if (!isNumber(______________eventObject)) {
          throw Error("bbox must only contain numbers");
        }
      });
    },
    validateId(isValidation) {
      if (!isValidation) {
        throw Error("id is required");
      }
      if (["string", "number"].indexOf(typeof isValidation) === -1) {
        throw Error("id must be a number or a string");
      }
    },
  });
  function evaluate(_item, t, n) {
    if (_item !== null) {
      var i;
      var _radius;
      var currentEntity;
      var s;
      var altitude;
      var latitude;
      var height;
      var _data;
      var initialCount = 0;
      var _____currentIndex = 0;
      var itemType = _item.type;
      var updateTime = itemType === "FeatureCollection";
      var fetchData = itemType === "Feature";
      for (
        var featureCount = updateTime ? _item.features.length : 1,
          featureIndex = 0;
        featureCount > featureIndex;
        featureIndex++
      ) {
        if (
          (_data =
            !!(height = updateTime
              ? _item.features[featureIndex].geometry
              : fetchData
                ? _item.geometry
                : _item) && height.type === "GeometryCollection")
        ) {
          altitude = height.geometries.length;
        } else {
          altitude = 1;
        }
        for (
          var ______currentIndex = 0;
          altitude > ______currentIndex;
          ______currentIndex++
        ) {
          var incrementer = 0;
          var width = 0;
          if (
            (s = _data ? height.geometries[______currentIndex] : height) !==
            null
          ) {
            latitude = s.coordinates;
            var hapeType = s.type;
            if (!n || (hapeType !== "Polygon" && hapeType !== "MultiPolygon")) {
              initialCount = 0;
            } else {
              initialCount = 1;
            }
            switch (hapeType) {
              case null:
                break;
              case "Point":
                if (
                  t(
                    latitude,
                    _____currentIndex,
                    featureIndex,
                    incrementer,
                    width,
                  ) === false
                ) {
                  return false;
                }
                _____currentIndex++;
                incrementer++;
                break;
              case "LineString":
              case "MultiPoint":
                for (i = 0; latitude.length > i; i++) {
                  if (
                    t(
                      latitude[i],
                      _____currentIndex,
                      featureIndex,
                      incrementer,
                      width,
                    ) === false
                  ) {
                    return false;
                  }
                  _____currentIndex++;
                  if (hapeType === "MultiPoint") {
                    incrementer++;
                  }
                }
                if (hapeType === "LineString") {
                  incrementer++;
                }
                break;
              case "Polygon":
              case "MultiLineString":
                for (i = 0; latitude.length > i; i++) {
                  for (
                    _radius = 0;
                    latitude[i].length - initialCount > _radius;
                    _radius++
                  ) {
                    if (
                      t(
                        latitude[i][_radius],
                        _____currentIndex,
                        featureIndex,
                        incrementer,
                        width,
                      ) === false
                    ) {
                      return false;
                    }
                    _____currentIndex++;
                  }
                  if (hapeType === "MultiLineString") {
                    incrementer++;
                  }
                  if (hapeType === "Polygon") {
                    width++;
                  }
                }
                if (hapeType === "Polygon") {
                  incrementer++;
                }
                break;
              case "MultiPolygon":
                for (i = 0; latitude.length > i; i++) {
                  width = 0;
                  _radius = 0;
                  for (; latitude[i].length > _radius; _radius++) {
                    for (
                      currentEntity = 0;
                      latitude[i][_radius].length - initialCount >
                      currentEntity;
                      currentEntity++
                    ) {
                      if (
                        t(
                          latitude[i][_radius][currentEntity],
                          _____currentIndex,
                          featureIndex,
                          incrementer,
                          width,
                        ) === false
                      ) {
                        return false;
                      }
                      _____currentIndex++;
                    }
                    width++;
                  }
                  incrementer++;
                }
                break;
              case "GeometryCollection":
                for (i = 0; s.geometries.length > i; i++) {
                  if (evaluate(s.geometries[i], t, n) === false) {
                    return false;
                  }
                }
                break;
              default:
                throw Error("Unknown Geometry Type");
            }
          }
        }
      }
    }
  }
  function featureFilter(_clickEvent, t) {
    var n;
    switch (_clickEvent.type) {
      case "FeatureCollection":
        for (
          n = 0;
          _clickEvent.features.length > n &&
          t(_clickEvent.features[n].properties, n) !== false;
          n++
        ) {}
        break;
      case "Feature":
        t(_clickEvent.properties, 0);
    }
  }
  function processGeoset(creationError, t) {
    if (creationError.type === "Feature") {
      t(creationError, 0);
    } else if (creationError.type === "FeatureCollection") {
      for (
        var n = 0;
        creationError.features.length > n &&
        t(creationError.features[n], n) !== false;
        n++
      ) {}
    }
  }
  function processInfo(________eventData, t, n) {
    var i = n;
    processGeoset(________eventData, function (ealTimeEvent, baseCurrency) {
      if (baseCurrency === 0 && n === undefined) {
        i = ealTimeEvent;
      } else {
        i = t(i, ealTimeEvent, baseCurrency);
      }
    });
    return i;
  }
  function geoProcessor(_eventType, t) {
    var n;
    var i;
    var __radius;
    var userObject;
    var s;
    var tempValue;
    var _latitude;
    var __latitude;
    var ___latitude;
    var unknownUser;
    var geoProcessing = 0;
    var geoEvent = _eventType.type === "FeatureCollection";
    var dealData = _eventType.type === "Feature";
    var ealTimeData = geoEvent ? _eventType.features.length : 1;
    for (n = 0; ealTimeData > n; n++) {
      if (geoEvent) {
        __latitude = _eventType.features[n].properties;
      } else if (dealData) {
        __latitude = _eventType.properties;
      } else {
        __latitude = {};
      }
      if (geoEvent) {
        ___latitude = _eventType.features[n].bbox;
      } else if (dealData) {
        ___latitude = _eventType.bbox;
      } else {
        ___latitude = undefined;
      }
      if (geoEvent) {
        unknownUser = _eventType.features[n].id;
      } else if (dealData) {
        unknownUser = _eventType.id;
      } else {
        unknownUser = undefined;
      }
      if (
        (_latitude =
          !!(tempValue = geoEvent
            ? _eventType.features[n].geometry
            : dealData
              ? _eventType.geometry
              : _eventType) && tempValue.type === "GeometryCollection")
      ) {
        s = tempValue.geometries.length;
      } else {
        s = 1;
      }
      __radius = 0;
      for (; s > __radius; __radius++) {
        if (
          (userObject = _latitude
            ? tempValue.geometries[__radius]
            : tempValue) !== null
        ) {
          switch (userObject.type) {
            case "Point":
            case "LineString":
            case "MultiPoint":
            case "Polygon":
            case "MultiLineString":
            case "MultiPolygon":
              if (
                t(
                  userObject,
                  geoProcessing,
                  __latitude,
                  ___latitude,
                  unknownUser,
                ) === false
              ) {
                return false;
              }
              break;
            case "GeometryCollection":
              for (i = 0; userObject.geometries.length > i; i++) {
                if (
                  t(
                    userObject.geometries[i],
                    geoProcessing,
                    __latitude,
                    ___latitude,
                    unknownUser,
                  ) === false
                ) {
                  return false;
                }
              }
              break;
            default:
              throw Error("Unknown Geometry Type");
          }
        } else if (
          t(null, geoProcessing, __latitude, ___latitude, unknownUser) === false
        ) {
          return false;
        }
      }
      geoProcessing++;
    }
  }
  function processGeo(____________event, t, n) {
    var i = n;
    geoProcessor(
      ____________event,
      function (_geometryType, geometry, _geometry, s, __geometryType) {
        if (geometry === 0 && n === undefined) {
          i = _geometryType;
        } else {
          i = t(i, _geometryType, geometry, _geometry, s, __geometryType);
        }
      },
    );
    return i;
  }
  function handleGeospat(transformed, t) {
    geoProcessor(
      transformed,
      function (_________eventData, n, i, __geometry, featureType) {
        var s;
        var eventDataType =
          _________eventData === null ? null : _________eventData.type;
        switch (eventDataType) {
          case null:
          case "Point":
          case "LineString":
          case "Polygon":
            return (
              t(
                createFeature(_________eventData, i, {
                  bbox: __geometry,
                  id: featureType,
                }),
                n,
                0,
              ) !== false && undefined
            );
        }
        switch (eventDataType) {
          case "MultiPoint":
            s = "Point";
            break;
          case "MultiLineString":
            s = "LineString";
            break;
          case "MultiPolygon":
            s = "Polygon";
        }
        for (
          var _______currentIndex = 0;
          _________eventData.coordinates.length > _______currentIndex;
          _______currentIndex++
        ) {
          if (
            t(
              createFeature(
                {
                  type: s,
                  coordinates:
                    _________eventData.coordinates[_______currentIndex],
                },
                i,
              ),
              n,
              _______currentIndex,
            ) === false
          ) {
            return false;
          }
        }
      },
    );
  }
  function processGeosyn(_____________event, t) {
    handleGeospat(_____________event, function (apAction, n, i) {
      var initialRadius = 0;
      if (apAction.geometry) {
        var ___geometryType = apAction.geometry.type;
        if (___geometryType !== "Point" && ___geometryType !== "MultiPoint") {
          var s;
          var axVariableId = 0;
          var _currentAction = 0;
          var _height = 0;
          return (
            evaluate(
              apAction,
              function (__data, color, user, translation, roundNumberTo) {
                if (
                  s === undefined ||
                  n > axVariableId ||
                  translation > _currentAction ||
                  roundNumberTo > _height
                ) {
                  s = __data;
                  axVariableId = n;
                  _currentAction = translation;
                  _height = roundNumberTo;
                  initialRadius = 0;
                  return;
                }
                var userActionId = createLine([s, __data], apAction.properties);
                if (
                  t(userActionId, n, i, roundNumberTo, initialRadius) === false
                ) {
                  return false;
                }
                initialRadius++;
                s = __data;
              },
            ) !== false && undefined
          );
        }
      }
    });
  }
  function geosynProcess(inputValue, t, n) {
    var i = n;
    var hasProcessed = false;
    processGeosyn(inputValue, function (unit, units, s, lengthValue, length) {
      if (hasProcessed === false && n === undefined) {
        i = unit;
      } else {
        i = t(i, unit, units, s, lengthValue, length);
      }
      hasProcessed = true;
    });
    return i;
  }
  function locationData(trigerringEv, t) {
    if (!trigerringEv) {
      throw Error("geojson is required");
    }
    handleGeospat(trigerringEv, function (______________event, n, i) {
      if (______________event.geometry !== null) {
        var _coordinates = ______________event.geometry.coordinates;
        switch (______________event.geometry.type) {
          case "LineString":
            if (t(______________event, n, i, 0, 0) === false) {
              return false;
            }
            break;
          case "Polygon":
            for (
              var pointCount = 0;
              _coordinates.length > pointCount;
              pointCount++
            ) {
              if (
                t(
                  createLine(
                    _coordinates[pointCount],
                    ______________event.properties,
                  ),
                  n,
                  i,
                  pointCount,
                ) === false
              ) {
                return false;
              }
            }
        }
      }
    });
  }
  var _user = Object.freeze({
    __proto__: null,
    coordAll(evaluationToE) {
      var t = [];
      evaluate(evaluationToE, function (__element) {
        t.push(__element);
      });
      return t;
    },
    coordEach: evaluate,
    coordReduce(evaluatedPath, t, n, i) {
      var routeDistance = n;
      evaluate(
        evaluatedPath,
        function (
          _______________event,
          i,
          coordinateOrN,
          s,
          __________eventData,
        ) {
          if (i === 0 && n === undefined) {
            routeDistance = _______________event;
          } else {
            routeDistance = t(
              routeDistance,
              _______________event,
              i,
              coordinateOrN,
              s,
              __________eventData,
            );
          }
        },
        i,
      );
      return routeDistance;
    },
    featureEach: processGeoset,
    featureReduce: processInfo,
    findPoint(__location, t) {
      if (!_isValidObject((t = t || {}))) {
        throw Error("options is invalid");
      }
      var n;
      var i = t.featureIndex || 0;
      var _featureIndex = t.multiFeatureIndex || 0;
      var object = t.geometryIndex || 0;
      var s = t.coordIndex || 0;
      var lastUpdated = t.properties;
      switch (__location.type) {
        case "FeatureCollection":
          if (i < 0) {
            i = __location.features.length + i;
          }
          lastUpdated = lastUpdated || __location.features[i].properties;
          n = __location.features[i].geometry;
          break;
        case "Feature":
          lastUpdated = lastUpdated || __location.properties;
          n = __location.geometry;
          break;
        case "Point":
        case "MultiPoint":
          return null;
        case "LineString":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon":
          n = __location;
          break;
        default:
          throw Error("geojson is invalid");
      }
      if (n === null) {
        return null;
      }
      var numberOfItems = n.coordinates;
      switch (n.type) {
        case "Point":
          return validateInput(numberOfItems, lastUpdated, t);
        case "MultiPoint":
          if (_featureIndex < 0) {
            _featureIndex = numberOfItems.length + _featureIndex;
          }
          return validateInput(numberOfItems[_featureIndex], lastUpdated, t);
        case "LineString":
          if (s < 0) {
            s = numberOfItems.length + s;
          }
          return validateInput(numberOfItems[s], lastUpdated, t);
        case "Polygon":
          if (object < 0) {
            object = numberOfItems.length + object;
          }
          if (s < 0) {
            s = numberOfItems[object].length + s;
          }
          return validateInput(numberOfItems[object][s], lastUpdated, t);
        case "MultiLineString":
          if (_featureIndex < 0) {
            _featureIndex = numberOfItems.length + _featureIndex;
          }
          if (s < 0) {
            s = numberOfItems[_featureIndex].length + s;
          }
          return validateInput(numberOfItems[_featureIndex][s], lastUpdated, t);
        case "MultiPolygon":
          if (_featureIndex < 0) {
            _featureIndex = numberOfItems.length + _featureIndex;
          }
          if (object < 0) {
            object = numberOfItems[_featureIndex].length + object;
          }
          if (s < 0) {
            s = numberOfItems[_featureIndex][object].length - s;
          }
          return validateInput(
            numberOfItems[_featureIndex][object][s],
            lastUpdated,
            t,
          );
      }
      throw Error("geojson is invalid");
    },
    findSegment(________error, t) {
      if (!_isValidObject((t = t || {}))) {
        throw Error("options is invalid");
      }
      var n;
      var i = t.featureIndex || 0;
      var ultiFeatureR = t.multiFeatureIndex || 0;
      var __featureIndex = t.geometryIndex || 0;
      var s = t.segmentIndex || 0;
      var checkAndInit = t.properties;
      switch (________error.type) {
        case "FeatureCollection":
          if (i < 0) {
            i = ________error.features.length + i;
          }
          checkAndInit = checkAndInit || ________error.features[i].properties;
          n = ________error.features[i].geometry;
          break;
        case "Feature":
          checkAndInit = checkAndInit || ________error.properties;
          n = ________error.geometry;
          break;
        case "Point":
        case "MultiPoint":
          return null;
        case "LineString":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon":
          n = ________error;
          break;
        default:
          throw Error("geojson is invalid");
      }
      if (n === null) {
        return null;
      }
      var layerHandler = n.coordinates;
      switch (n.type) {
        case "Point":
        case "MultiPoint":
          return null;
        case "LineString":
          if (s < 0) {
            s = layerHandler.length + s - 1;
          }
          return createLine(
            [layerHandler[s], layerHandler[s + 1]],
            checkAndInit,
            t,
          );
        case "Polygon":
          if (__featureIndex < 0) {
            __featureIndex = layerHandler.length + __featureIndex;
          }
          if (s < 0) {
            s = layerHandler[__featureIndex].length + s - 1;
          }
          return createLine(
            [
              layerHandler[__featureIndex][s],
              layerHandler[__featureIndex][s + 1],
            ],
            checkAndInit,
            t,
          );
        case "MultiLineString":
          if (ultiFeatureR < 0) {
            ultiFeatureR = layerHandler.length + ultiFeatureR;
          }
          if (s < 0) {
            s = layerHandler[ultiFeatureR].length + s - 1;
          }
          return createLine(
            [layerHandler[ultiFeatureR][s], layerHandler[ultiFeatureR][s + 1]],
            checkAndInit,
            t,
          );
        case "MultiPolygon":
          if (ultiFeatureR < 0) {
            ultiFeatureR = layerHandler.length + ultiFeatureR;
          }
          if (__featureIndex < 0) {
            __featureIndex = layerHandler[ultiFeatureR].length + __featureIndex;
          }
          if (s < 0) {
            s = layerHandler[ultiFeatureR][__featureIndex].length - s - 1;
          }
          return createLine(
            [
              layerHandler[ultiFeatureR][__featureIndex][s],
              layerHandler[ultiFeatureR][__featureIndex][s + 1],
            ],
            checkAndInit,
            t,
          );
      }
      throw Error("geojson is invalid");
    },
    flattenEach: handleGeospat,
    flattenReduce(geographicSPO, t, n) {
      var i = n;
      handleGeospat(
        geographicSPO,
        function (________________event, __clickEvent, clickedObject) {
          if (__clickEvent === 0 && clickedObject === 0 && n === undefined) {
            i = ________________event;
          } else {
            i = t(i, ________________event, __clickEvent, clickedObject);
          }
        },
      );
      return i;
    },
    geomEach: geoProcessor,
    geomReduce: processGeo,
    lineEach: locationData,
    lineReduce(___location, t, n) {
      var i = n;
      locationData(___location, function (apFeature, ___radius, _onEvent, s) {
        if (___radius === 0 && n === undefined) {
          i = apFeature;
        } else {
          i = t(i, apFeature, ___radius, _onEvent, s);
        }
      });
      return i;
    },
    propEach: featureFilter,
    propReduce(__item, t, n) {
      var i = n;
      featureFilter(__item, function (featureData, ____radius) {
        if (____radius === 0 && n === undefined) {
          i = featureData;
        } else {
          i = t(i, featureData, ____radius);
        }
      });
      return i;
    },
    segmentEach: processGeosyn,
    segmentReduce: geosynProcess,
  });
  function getMinMax(_______________eventObject) {
    var t = [Infinity, Infinity, -Infinity, -Infinity];
    evaluate(_______________eventObject, function (__currentTime) {
      if (t[0] > __currentTime[0]) {
        t[0] = __currentTime[0];
      }
      if (t[1] > __currentTime[1]) {
        t[1] = __currentTime[1];
      }
      if (__currentTime[0] > t[2]) {
        t[2] = __currentTime[0];
      }
      if (__currentTime[1] > t[3]) {
        t[3] = __currentTime[1];
      }
    });
    return t;
  }
  getMinMax.default = getMinMax;
  var ___________eventData = Object.freeze({
    __proto__: null,
    default: getMinMax,
  });
  function parseLocation(geographicEvt) {
    if (!geographicEvt) {
      throw Error("coord is required");
    }
    if (!Array.isArray(geographicEvt)) {
      if (
        geographicEvt.type === "Feature" &&
        geographicEvt.geometry !== null &&
        geographicEvt.geometry.type === "Point"
      ) {
        return geographicEvt.geometry.coordinates;
      }
      if (geographicEvt.type === "Point") {
        return geographicEvt.coordinates;
      }
    }
    if (
      Array.isArray(geographicEvt) &&
      geographicEvt.length >= 2 &&
      !Array.isArray(geographicEvt[0]) &&
      !Array.isArray(geographicEvt[1])
    ) {
      return geographicEvt;
    }
    throw Error("coord must be GeoJSON Point or an Array of numbers");
  }
  function parseValue(________________eventObject) {
    if (Array.isArray(________________eventObject)) {
      return ________________eventObject;
    }
    if (________________eventObject.type === "Feature") {
      if (________________eventObject.geometry !== null) {
        return ________________eventObject.geometry.coordinates;
      }
    } else if (________________eventObject.coordinates) {
      return ________________eventObject.coordinates;
    }
    throw Error("coords must be GeoJSON Feature, Geometry Object or an Array");
  }
  function validateGeo(_________________event, t, n) {
    if (!_________________event) {
      throw Error("No feature passed");
    }
    if (!n) {
      throw Error(".featureOf() requires a name");
    }
    if (
      !_________________event ||
      _________________event.type !== "Feature" ||
      !_________________event.geometry
    ) {
      throw Error("Invalid input to " + n + ", Feature with geometry required");
    }
    if (
      !_________________event.geometry ||
      _________________event.geometry.type !== t
    ) {
      throw Error(
        "Invalid input to " +
          n +
          ": must be a " +
          t +
          ", given " +
          _________________event.geometry.type,
      );
    }
  }
  function getFeatureGeo(_locationData) {
    if (_locationData.type === "Feature") {
      return _locationData.geometry;
    } else {
      return _locationData;
    }
  }
  function getGeographic(geolocation, t) {
    if (geolocation.type === "FeatureCollection") {
      return "FeatureCollection";
    } else if (geolocation.type === "GeometryCollection") {
      return "GeometryCollection";
    } else if (
      geolocation.type === "Feature" &&
      geolocation.geometry !== null
    ) {
      return geolocation.geometry.type;
    } else {
      return geolocation.type;
    }
  }
  function getEsModule(__________________event) {
    if (__________________event.__esModule) {
      return __________________event;
    }
    var t = Object.defineProperty({}, "__esModule", {
      value: true,
    });
    Object.keys(__________________event).forEach(function (n) {
      var i = Object.getOwnPropertyDescriptor(__________________event, n);
      Object.defineProperty(
        t,
        n,
        i.get
          ? i
          : {
              enumerable: true,
              get() {
                return __________________event[n];
              },
            },
      );
    });
    return t;
  }
  function calculateOe(__coordinates, t, n = {}) {
    if (!__coordinates) {
      throw Error("point is required");
    }
    if (!t) {
      throw Error("polygon is required");
    }
    var i = parseLocation(__coordinates);
    var _____radius = getFeatureGeo(t);
    var _parseLocation = _____radius.type;
    var s = t.bbox;
    var applicant = _____radius.coordinates;
    if (
      s &&
      (function (eventHandler, t) {
        return (
          !(t[0] > eventHandler[0]) &&
          !(t[1] > eventHandler[1]) &&
          !(eventHandler[0] > t[2]) &&
          !(eventHandler[1] > t[3])
        );
      })(i, s) === false
    ) {
      return false;
    }
    if (_parseLocation === "Polygon") {
      applicant = [applicant];
    }
    for (
      var houldLoop = false, ________currentIndex = 0;
      applicant.length > ________currentIndex && !houldLoop;
      ________currentIndex++
    ) {
      if (eparate(i, applicant[________currentIndex][0], n.ignoreBoundary)) {
        for (
          var found = false, _index = 1;
          applicant[________currentIndex].length > _index && !found;

        ) {
          if (
            eparate(
              i,
              applicant[________currentIndex][_index],
              !n.ignoreBoundary,
            )
          ) {
            found = true;
          }
          _index++;
        }
        if (!found) {
          houldLoop = true;
        }
      }
    }
    return houldLoop;
  }
  function eparate(featureEvent, t, n) {
    var i = false;
    if (t[0][0] === t[t.length - 1][0] && t[0][1] === t[t.length - 1][1]) {
      t = t.slice(0, t.length - 1);
    }
    for (
      var twoPointer = 0, __tartIndex = t.length - 1;
      t.length > twoPointer;
      __tartIndex = twoPointer++
    ) {
      var s = t[twoPointer][0];
      var econdValue = t[twoPointer][1];
      var tartX = t[__tartIndex][0];
      var yCoordinate = t[__tartIndex][1];
      if (
        featureEvent[1] * (s - tartX) +
          econdValue * (tartX - featureEvent[0]) +
          yCoordinate * (featureEvent[0] - s) ==
          0 &&
        (s - featureEvent[0]) * (tartX - featureEvent[0]) <= 0 &&
        (econdValue - featureEvent[1]) * (yCoordinate - featureEvent[1]) <= 0
      ) {
        return !n;
      }
      if (
        econdValue > featureEvent[1] != yCoordinate > featureEvent[1] &&
        ((tartX - s) * (featureEvent[1] - econdValue)) /
          (yCoordinate - econdValue) +
          s >
          featureEvent[0]
      ) {
        i = !i;
      }
    }
    return i;
  }
  function calculateHav(____________eventData, t, n = {}) {
    var i = parseLocation(____________eventData);
    var targetAngleIn = parseLocation(t);
    var _targetAngleIn = convertToRads(targetAngleIn[1] - i[1]);
    var s = convertToRads(targetAngleIn[0] - i[0]);
    var _____________eventData = convertToRads(i[1]);
    var ______________eventData = convertToRads(targetAngleIn[1]);
    var horizontal =
      Math.pow(Math.sin(_targetAngleIn / 2), 2) +
      Math.pow(Math.sin(s / 2), 2) *
        Math.cos(_____________eventData) *
        Math.cos(______________eventData);
    return exchangeRate(
      Math.atan2(Math.sqrt(horizontal), Math.sqrt(1 - horizontal)) * 2,
      n.units,
    );
  }
  function validateGeoJf(_________________eventObject) {
    if (!_________________eventObject) {
      throw Error("geojson is required");
    }
    switch (_________________eventObject.type) {
      case "Feature":
        return _createFeature(_________________eventObject);
      case "FeatureCollection":
        return (function (__________________eventObject) {
          var t = {
            type: "FeatureCollection",
          };
          Object.keys(__________________eventObject).forEach(function (n) {
            switch (n) {
              case "type":
              case "features":
                return;
              default:
                t[n] = __________________eventObject[n];
            }
          });
          t.features = __________________eventObject.features.map(
            function (___________________event) {
              return _createFeature(___________________event);
            },
          );
          return t;
        })(_________________eventObject);
      case "Point":
      case "LineString":
      case "Polygon":
      case "MultiPoint":
      case "MultiLineString":
      case "MultiPolygon":
      case "GeometryCollection":
        return geoDataNormal(_________________eventObject);
      default:
        throw Error("unknown GeoJSON type");
    }
  }
  function _createFeature(____________________event) {
    var t = {
      type: "Feature",
    };
    Object.keys(____________________event).forEach(function (n) {
      switch (n) {
        case "type":
        case "properties":
        case "geometry":
          return;
        default:
          t[n] = ____________________event[n];
      }
    });
    t.properties = cleanObject(____________________event.properties);
    t.geometry = geoDataNormal(____________________event.geometry);
    return t;
  }
  function cleanObject(_____________________event) {
    var t = {};
    if (_____________________event) {
      Object.keys(_____________________event).forEach(function (n) {
        var i = _____________________event[n];
        if (typeof i == "object") {
          if (i === null) {
            t[n] = null;
          } else if (Array.isArray(i)) {
            t[n] = i.map(function (_eventInfo) {
              return _eventInfo;
            });
          } else {
            t[n] = cleanObject(i);
          }
        } else {
          t[n] = i;
        }
      });
      return t;
    } else {
      return t;
    }
  }
  function geoDataNormal(___________________eventObject) {
    var t = {
      type: ___________________eventObject.type,
    };
    if (___________________eventObject.bbox) {
      t.bbox = ___________________eventObject.bbox;
    }
    if (___________________eventObject.type === "GeometryCollection") {
      t.geometries = ___________________eventObject.geometries.map(
        function (_point) {
          return geoDataNormal(_point);
        },
      );
      return t;
    } else {
      t.coordinates = convertToIeFm(___________________eventObject.coordinates);
      return t;
    }
  }
  function convertToIeFm(_______________eventData) {
    var t = _______________eventData;
    if (typeof t[0] != "object") {
      return t.slice();
    } else {
      return t.map(function (_evaluation) {
        return convertToIeFm(_evaluation);
      });
    }
  }
  function calculateGeod(evalData, t, n, i = {}) {
    var _geolocation = parseLocation(evalData);
    var latitudeInRap = convertToRads(_geolocation[0]);
    var s = convertToRads(_geolocation[1]);
    var longitude = convertToRads(n);
    var itemIndex = convertToKilO(t, i.units);
    var ____latitude = Math.asin(
      Math.sin(s) * Math.cos(itemIndex) +
        Math.cos(s) * Math.sin(itemIndex) * Math.cos(longitude),
    );
    return validateInput(
      [
        normalizeRads(
          latitudeInRap +
            Math.atan2(
              Math.sin(longitude) * Math.sin(itemIndex) * Math.cos(s),
              Math.cos(itemIndex) - Math.sin(s) * Math.sin(____latitude),
            ),
        ),
        normalizeRads(____latitude),
      ],
      i.properties,
    );
  }
  function getBearing(apEvent, t, n = {}) {
    if (n.final === true) {
      return (function (gpsEvent, t) {
        var n = getBearing(t, gpsEvent);
        return (n = (n + 180) % 360);
      })(apEvent, t);
    }
    var i = parseLocation(apEvent);
    var bearingObject = parseLocation(t);
    var options = convertToRads(i[0]);
    var s = convertToRads(bearingObject[0]);
    var ettings = convertToRads(i[1]);
    var limit = convertToRads(bearingObject[1]);
    return normalizeRads(
      Math.atan2(
        Math.sin(s - options) * Math.cos(limit),
        Math.cos(ettings) * Math.sin(limit) -
          Math.sin(ettings) * Math.cos(limit) * Math.cos(s - options),
      ),
    );
  }
  function validateGeoJq(invalidation) {
    if (!invalidation) {
      throw Error("geojson is required");
    }
    var t = [];
    handleGeospat(invalidation, function (_________error) {
      (function (characterData, t) {
        var n = [];
        var i = characterData.geometry;
        if (i !== null) {
          switch (i.type) {
            case "Polygon":
              n = parseValue(i);
              break;
            case "LineString":
              n = [parseValue(i)];
          }
          n.forEach(function (n) {
            var i = (function (______________________event, t) {
              var n = [];
              ______________________event.reduce(function (featureGeo, i) {
                var _longitude;
                var __longitude;
                var s;
                var placeholder;
                var ___longitude;
                var tartTime;
                var drawnLine = createLine([featureGeo, i], t);
                drawnLine.bbox = [
                  (___longitude = (__longitude = i)[0]) >
                  (s = (_longitude = featureGeo)[0])
                    ? s
                    : ___longitude,
                  (tartTime = __longitude[1]) > (placeholder = _longitude[1])
                    ? placeholder
                    : tartTime,
                  s > ___longitude ? s : ___longitude,
                  placeholder > tartTime ? placeholder : tartTime,
                ];
                n.push(drawnLine);
                return i;
              });
              return n;
            })(n, characterData.properties);
            i.forEach(function (_______________________event) {
              _______________________event.id = t.length;
              t.push(_______________________event);
            });
          });
        }
      })(_________error, t);
    });
    return createGeoJson(t);
  }
  function executor(___userInput, t, n, i, ______radius) {
    adjustForTime(
      ___userInput,
      t,
      n || 0,
      i || ___userInput.length - 1,
      ______radius || compareNumer,
    );
  }
  function adjustForTime(
    ____________________eventObject,
    t,
    n,
    i,
    dataValidator,
  ) {
    while (i > n) {
      if (i - n > 600) {
        var currentOrder = i - n + 1;
        var s = t - n + 1;
        var naturalLogOfS = Math.log(currentOrder);
        var proportionate = Math.exp((naturalLogOfS * 2) / 3) * 0.5;
        var hermite =
          Math.sqrt(
            (naturalLogOfS * proportionate * (currentOrder - proportionate)) /
              currentOrder,
          ) *
          0.5 *
          (s - currentOrder / 2 < 0 ? -1 : 1);
        adjustForTime(
          ____________________eventObject,
          t,
          Math.max(
            n,
            Math.floor(t - (s * proportionate) / currentOrder + hermite),
          ),
          Math.min(
            i,
            Math.floor(
              t + ((currentOrder - s) * proportionate) / currentOrder + hermite,
            ),
          ),
          dataValidator,
        );
      }
      var _________currentIndex = ____________________eventObject[t];
      var __user = n;
      var proportion = i;
      wapElements(____________________eventObject, n, t);
      if (
        dataValidator(
          ____________________eventObject[i],
          _________currentIndex,
        ) > 0
      ) {
        wapElements(____________________eventObject, n, i);
      }
      while (proportion > __user) {
        wapElements(____________________eventObject, __user, proportion);
        __user++;
        proportion--;
        while (
          dataValidator(
            ____________________eventObject[__user],
            _________currentIndex,
          ) < 0
        ) {
          __user++;
        }
        while (
          dataValidator(
            ____________________eventObject[proportion],
            _________currentIndex,
          ) > 0
        ) {
          proportion--;
        }
      }
      if (
        dataValidator(
          ____________________eventObject[n],
          _________currentIndex,
        ) === 0
      ) {
        wapElements(____________________eventObject, n, proportion);
      } else {
        wapElements(____________________eventObject, ++proportion, i);
      }
      if (!(proportion > t)) {
        n = proportion + 1;
      }
      if (!(t > proportion)) {
        i = proportion - 1;
      }
    }
  }
  function wapElements(________________eventData, t, n) {
    var i = ________________eventData[t];
    ________________eventData[t] = ________________eventData[n];
    ________________eventData[n] = i;
  }
  function compareNumer(outOfBounds, t) {
    if (t > outOfBounds) {
      return -1;
    } else if (outOfBounds > t) {
      return 1;
    } else {
      return 0;
    }
  }
  function findIndexBy(elementIndex, t, n) {
    if (!n) {
      return t.indexOf(elementIndex);
    }
    for (let i = 0; t.length > i; i++) {
      if (n(elementIndex, t[i])) {
        return i;
      }
    }
    return -1;
  }
  function callWithInit(________________________event, t) {
    getBoundingMn(
      ________________________event,
      0,
      ________________________event.children.length,
      t,
      ________________________event,
    );
  }
  function getBoundingMn(geojsonError, t, n, i, _______radius) {
    _______radius ||= createLeaf(null);
    _______radius.minX = Infinity;
    _______radius.minY = Infinity;
    _______radius.maxX = -Infinity;
    _______radius.maxY = -Infinity;
    for (let childIndex = t; n > childIndex; childIndex++) {
      const t = geojsonError.children[childIndex];
      ergeRects(_______radius, geojsonError.leaf ? i(t) : t);
    }
    return _______radius;
  }
  function ergeRects(_errorDetails, t) {
    _errorDetails.minX = Math.min(_errorDetails.minX, t.minX);
    _errorDetails.minY = Math.min(_errorDetails.minY, t.minY);
    _errorDetails.maxX = Math.max(_errorDetails.maxX, t.maxX);
    _errorDetails.maxY = Math.max(_errorDetails.maxY, t.maxY);
    return _errorDetails;
  }
  function getMinXDiff(_________________________event, t) {
    return _________________________event.minX - t.minX;
  }
  function inYDiffXe(currentError, t) {
    return currentError.minY - t.minY;
  }
  function ectangleArea(_eventHandler) {
    return (
      (_eventHandler.maxX - _eventHandler.minX) *
      (_eventHandler.maxY - _eventHandler.minY)
    );
  }
  function totalSquares(__errorObject) {
    return (
      __errorObject.maxX -
      __errorObject.minX +
      (__errorObject.maxY - __errorObject.minY)
    );
  }
  function overlapArea(___clickEvent, t) {
    const n = Math.max(___clickEvent.minX, t.minX);
    const i = Math.max(___clickEvent.minY, t.minY);
    const axOverlapX = Math.min(___clickEvent.maxX, t.maxX);
    const ____clickEvent = Math.min(___clickEvent.maxY, t.maxY);
    return Math.max(0, axOverlapX - n) * Math.max(0, ____clickEvent - i);
  }
  function ectanglesDoB(geojsonNumber, t) {
    return (
      !(geojsonNumber.minX > t.minX) &&
      !(geojsonNumber.minY > t.minY) &&
      !(t.maxX > geojsonNumber.maxX) &&
      !(t.maxY > geojsonNumber.maxY)
    );
  }
  function ectanglesDoO(__________error, t) {
    return (
      !(t.minX > __________error.maxX) &&
      !(t.minY > __________error.maxY) &&
      !(__________error.minX > t.maxX) &&
      !(__________error.minY > t.maxY)
    );
  }
  function createLeaf(navigation) {
    return {
      children: navigation,
      height: 1,
      leaf: true,
      minX: Infinity,
      minY: Infinity,
      maxX: -Infinity,
      maxY: -Infinity,
    };
  }
  function divideIntoInt(
    _____________________eventObject,
    t,
    n,
    i,
    ________radius,
  ) {
    const circlesRadiiD = [t, n];
    while (circlesRadiiD.length) {
      if (i >= (n = circlesRadiiD.pop()) - (t = circlesRadiiD.pop())) {
        continue;
      }
      const s = t + Math.ceil((n - t) / i / 2) * i;
      executor(_____________________eventObject, s, t, n, ________radius);
      circlesRadiiD.push(t, s, s, n);
    }
  }
  var eventTrigger = Object.freeze({
    __proto__: null,
    default: class {
      constructor(nineValue = 9) {
        this._maxEntries = Math.max(4, nineValue);
        this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4));
        this.clear();
      }
      all() {
        return this._all(this.data, []);
      }
      search(earchTerm) {
        let t = this.data;
        const n = [];
        if (!ectanglesDoO(earchTerm, t)) {
          return n;
        }
        const i = this.toBBox;
        const ectangleList = [];
        while (t) {
          for (
            let __________currentIndex = 0;
            t.children.length > __________currentIndex;
            __________currentIndex++
          ) {
            const s = t.children[__________currentIndex];
            const currentNode = t.leaf ? i(s) : s;
            if (ectanglesDoO(earchTerm, currentNode)) {
              if (t.leaf) {
                n.push(s);
              } else if (ectanglesDoB(earchTerm, currentNode)) {
                this._all(s, n);
              } else {
                ectangleList.push(s);
              }
            }
          }
          t = ectangleList.pop();
        }
        return n;
      }
      collides(targetObject) {
        let t = this.data;
        if (!ectanglesDoO(targetObject, t)) {
          return false;
        }
        const n = [];
        while (t) {
          for (let i = 0; t.children.length > i; i++) {
            const _currentNode = t.children[i];
            const __currentNode = t.leaf
              ? this.toBBox(_currentNode)
              : _currentNode;
            if (ectanglesDoO(targetObject, __currentNode)) {
              if (t.leaf || ectanglesDoB(targetObject, __currentNode)) {
                return true;
              }
              n.push(_currentNode);
            }
          }
          t = n.pop();
        }
        return false;
      }
      load(elements) {
        if (!elements || !elements.length) {
          return this;
        }
        if (this._minEntries > elements.length) {
          for (let t = 0; elements.length > t; t++) {
            this.insert(elements[t]);
          }
          return this;
        }
        let t = this._build(elements.slice(), 0, elements.length - 1, 0);
        if (this.data.children.length) {
          if (this.data.height === t.height) {
            this._splitRoot(this.data, t);
          } else {
            if (t.height > this.data.height) {
              const currentValue = this.data;
              this.data = t;
              t = currentValue;
            }
            this._insert(t, this.data.height - t.height - 1, true);
          }
        } else {
          this.data = t;
        }
        return this;
      }
      insert(elementToBePl) {
        if (elementToBePl) {
          this._insert(elementToBePl, this.data.height - 1);
        }
        return this;
      }
      clear() {
        this.data = createLeaf([]);
        return this;
      }
      remove(eventNode, t) {
        if (!eventNode) {
          return this;
        }
        let n = this.data;
        const i = this.toBBox(eventNode);
        const pendingNodes = [];
        const nodesToReadd = [];
        let s;
        let nodeAttribute;
        let iteration;
        while (n || pendingNodes.length) {
          if (!n) {
            n = pendingNodes.pop();
            nodeAttribute = pendingNodes[pendingNodes.length - 1];
            s = nodesToReadd.pop();
            iteration = true;
          }
          if (n.leaf) {
            const i = findIndexBy(eventNode, n.children, t);
            if (i !== -1) {
              n.children.splice(i, 1);
              pendingNodes.push(n);
              this._condense(pendingNodes);
              return this;
            }
          }
          if (iteration || n.leaf || !ectanglesDoB(n, i)) {
            if (nodeAttribute) {
              s++;
              n = nodeAttribute.children[s];
              iteration = false;
            } else {
              n = null;
            }
          } else {
            pendingNodes.push(n);
            nodesToReadd.push(s);
            s = 0;
            nodeAttribute = n;
            n = n.children[0];
          }
        }
        return this;
      }
      toBBox(getElementBb) {
        return getElementBb;
      }
      compareMinX(inXBounds, t) {
        return inXBounds.minX - t.minX;
      }
      compareMinY(__________________________event, t) {
        return __________________________event.minY - t.minY;
      }
      toJSON() {
        return this.data;
      }
      fromJSON(_________________eventData) {
        this.data = _________________eventData;
        return this;
      }
      _all(___currentNode, t) {
        const n = [];
        while (___currentNode) {
          if (___currentNode.leaf) {
            t.push(...___currentNode.children);
          } else {
            n.push(...___currentNode.children);
          }
          ___currentNode = n.pop();
        }
        return t;
      }
      _build(values, t, n, i) {
        const necessaryNode = n - t + 1;
        let newNode;
        let s = this._maxEntries;
        if (s >= necessaryNode) {
          newNode = createLeaf(values.slice(t, n + 1));
          callWithInit(newNode, this.toBBox);
          return newNode;
        }
        if (!i) {
          s = Math.ceil(
            necessaryNode /
              Math.pow(
                s,
                (i = Math.ceil(Math.log(necessaryNode) / Math.log(s))) - 1,
              ),
          );
        }
        newNode = createLeaf([]);
        newNode.leaf = false;
        newNode.height = i;
        const ___tartIndex = Math.ceil(necessaryNode / s);
        const numNodes = ___tartIndex * Math.ceil(Math.sqrt(s));
        divideIntoInt(values, t, n, numNodes, this.compareMinX);
        for (let nodePointer = t; n >= nodePointer; nodePointer += numNodes) {
          const t = Math.min(nodePointer + numNodes - 1, n);
          divideIntoInt(values, nodePointer, t, ___tartIndex, this.compareMinY);
          for (let n = nodePointer; t >= n; n += ___tartIndex) {
            newNode.children.push(
              this._build(values, n, Math.min(n + ___tartIndex - 1, t), i - 1),
            );
          }
        }
        callWithInit(newNode, this.toBBox);
        return newNode;
      }
      _chooseSubtree(___________________________event, t, n, i) {
        i.push(t);
        while (!t.leaf && i.length - 1 !== n) {
          let n;
          let i = Infinity;
          let s = Infinity;
          for (
            let _childIndex = 0;
            t.children.length > _childIndex;
            _childIndex++
          ) {
            const electedChild = t.children[_childIndex];
            const electableArea = ectangleArea(electedChild);
            const axXPosition =
              (Math.max(
                (currentChild = electedChild).maxX,
                (_axXPosition = ___________________________event).maxX,
              ) -
                Math.min(currentChild.minX, _axXPosition.minX)) *
                (Math.max(currentChild.maxY, _axXPosition.maxY) -
                  Math.min(currentChild.minY, _axXPosition.minY)) -
              electableArea;
            if (s > axXPosition) {
              s = axXPosition;
              if (i > electableArea) {
                i = electableArea;
              } else {
                i = i;
              }
              n = electedChild;
            } else if (axXPosition === s && i > electableArea) {
              i = electableArea;
              n = electedChild;
            }
          }
          t = n || t.children[0];
        }
        var _axXPosition;
        var currentChild;
        return t;
      }
      _insert(insertedChild, t, n) {
        const i = n ? insertedChild : this.toBBox(insertedChild);
        const rootPath = [];
        const ____currentNode = this._chooseSubtree(i, this.data, t, rootPath);
        ____currentNode.children.push(insertedChild);
        ergeRects(____currentNode, i);
        while (t >= 0 && rootPath[t].children.length > this._maxEntries) {
          this._split(rootPath, t);
          t--;
        }
        this._adjustParentBBoxes(i, rootPath, t);
      }
      _split(_currentEntity, t) {
        const n = _currentEntity[t];
        const i = n.children.length;
        const inEntries = this._minEntries;
        this._chooseSplitAxis(n, inEntries, i);
        const plittingIdx = this._chooseSplitIndex(n, inEntries, i);
        const s = createLeaf(
          n.children.splice(plittingIdx, n.children.length - plittingIdx),
        );
        s.height = n.height;
        s.leaf = n.leaf;
        callWithInit(n, this.toBBox);
        callWithInit(s, this.toBBox);
        if (t) {
          _currentEntity[t - 1].children.push(s);
        } else {
          this._splitRoot(n, s);
        }
      }
      _splitRoot(treeData, t) {
        this.data = createLeaf([treeData, t]);
        this.data.height = treeData.height + 1;
        this.data.leaf = false;
        callWithInit(this.data, this.toBBox);
      }
      _chooseSplitIndex(__currentItem, t, n) {
        let i;
        let axBboxIndex = Infinity;
        let mallestOverl = Infinity;
        for (let s = t; n - t >= s; s++) {
          const t = getBoundingMn(__currentItem, 0, s, this.toBBox);
          const zoomedOutBB = getBoundingMn(__currentItem, s, n, this.toBBox);
          const overlapAmount = overlapArea(t, zoomedOutBB);
          const ___user = ectangleArea(t) + ectangleArea(zoomedOutBB);
          if (axBboxIndex > overlapAmount) {
            axBboxIndex = overlapAmount;
            i = s;
            if (mallestOverl > ___user) {
              mallestOverl = ___user;
            } else {
              mallestOverl = mallestOverl;
            }
          } else if (overlapAmount === axBboxIndex && mallestOverl > ___user) {
            mallestOverl = ___user;
            i = s;
          }
        }
        return i || n - t;
      }
      _chooseSplitAxis(dataPoint, t, n) {
        const i = dataPoint.leaf ? this.compareMinX : getMinXDiff;
        const comparisonFn = dataPoint.leaf ? this.compareMinY : inYDiffXe;
        const arginAndDist = this._allDistMargin(dataPoint, t, n, i);
        if (this._allDistMargin(dataPoint, t, n, comparisonFn) > arginAndDist) {
          dataPoint.children.sort(i);
        }
      }
      _allDistMargin(___element, t, n, i) {
        ___element.children.sort(i);
        const bBoxGetter = this.toBBox;
        const topMargin = getBoundingMn(___element, 0, t, bBoxGetter);
        const s = getBoundingMn(___element, n - t, n, bBoxGetter);
        let ____element = totalSquares(topMargin) + totalSquares(s);
        for (let i = t; n - t > i; i++) {
          const t = ___element.children[i];
          ergeRects(topMargin, ___element.leaf ? bBoxGetter(t) : t);
          ____element += totalSquares(topMargin);
        }
        for (let i = n - t - 1; i >= t; i--) {
          const t = ___element.children[i];
          ergeRects(s, ___element.leaf ? bBoxGetter(t) : t);
          ____element += totalSquares(s);
        }
        return ____element;
      }
      _adjustParentBBoxes(tyleSettings, t, n) {
        for (let i = n; i >= 0; i--) {
          ergeRects(t[i], tyleSettings);
        }
      }
      _condense(_treeData) {
        for (let t, n = _treeData.length - 1; n >= 0; n--) {
          if (_treeData[n].children.length === 0) {
            if (n > 0) {
              t = _treeData[n - 1].children;
              t.splice(t.indexOf(_treeData[n]), 1);
            } else {
              this.clear();
            }
          } else {
            callWithInit(_treeData[n], this.toBBox);
          }
        }
      }
    },
  });
  var processEvent = getEsModule(eventTrigger).default;
  var notification = getEsModule(ealTimeInfo);
  var transformMap = getEsModule(_user);
  var _ealTimeData = getEsModule(___________eventData).default;
  var currentState = transformMap.featureEach;
  var _ealTimeInfo = notification.featureCollection;
  function handleEventIn(_geoEvent) {
    var t = new processEvent(_geoEvent);
    t.insert = function (geolocationFg) {
      if (geolocationFg.type !== "Feature") {
        throw Error("invalid feature");
      }
      if (geolocationFg.bbox) {
        geolocationFg.bbox = geolocationFg.bbox;
      } else {
        geolocationFg.bbox = _ealTimeData(geolocationFg);
      }
      return processEvent.prototype.insert.call(this, geolocationFg);
    };
    t.load = function (____________________________event) {
      var t = [];
      if (Array.isArray(____________________________event)) {
        ____________________________event.forEach(function (interaction) {
          if (interaction.type !== "Feature") {
            throw Error("invalid features");
          }
          if (interaction.bbox) {
            interaction.bbox = interaction.bbox;
          } else {
            interaction.bbox = _ealTimeData(interaction);
          }
          t.push(interaction);
        });
      } else {
        currentState(
          ____________________________event,
          function (______________________eventObject) {
            if (______________________eventObject.type !== "Feature") {
              throw Error("invalid features");
            }
            if (______________________eventObject.bbox) {
              ______________________eventObject.bbox =
                ______________________eventObject.bbox;
            } else {
              ______________________eventObject.bbox = _ealTimeData(
                ______________________eventObject,
              );
            }
            t.push(______________________eventObject);
          },
        );
      }
      return processEvent.prototype.load.call(this, t);
    };
    t.remove = function (_______________________eventObject, t) {
      if (_______________________eventObject.type !== "Feature") {
        throw Error("invalid feature");
      }
      if (_______________________eventObject.bbox) {
        _______________________eventObject.bbox =
          _______________________eventObject.bbox;
      } else {
        _______________________eventObject.bbox = _ealTimeData(
          _______________________eventObject,
        );
      }
      return processEvent.prototype.remove.call(
        this,
        _______________________eventObject,
        t,
      );
    };
    t.clear = function () {
      return processEvent.prototype.clear.call(this);
    };
    t.search = function (__________________eventData) {
      var t = processEvent.prototype.search.call(
        this,
        this.toBBox(__________________eventData),
      );
      return _ealTimeInfo(t);
    };
    t.collides = function (_____________________________event) {
      return processEvent.prototype.collides.call(
        this,
        this.toBBox(_____________________________event),
      );
    };
    t.all = function () {
      var ealtimeEvent = processEvent.prototype.all.call(this);
      return _ealTimeInfo(ealtimeEvent);
    };
    t.toJSON = function () {
      return processEvent.prototype.toJSON.call(this);
    };
    t.fromJSON = function (________________________eventObject) {
      return processEvent.prototype.fromJSON.call(
        this,
        ________________________eventObject,
      );
    };
    t.toBBox = function (_________________________eventObject) {
      var t;
      if (_________________________eventObject.bbox) {
        t = _________________________eventObject.bbox;
      } else if (
        Array.isArray(_________________________eventObject) &&
        _________________________eventObject.length === 4
      ) {
        t = _________________________eventObject;
      } else if (
        Array.isArray(_________________________eventObject) &&
        _________________________eventObject.length === 6
      ) {
        t = [
          _________________________eventObject[0],
          _________________________eventObject[1],
          _________________________eventObject[3],
          _________________________eventObject[4],
        ];
      } else if (_________________________eventObject.type === "Feature") {
        t = _ealTimeData(_________________________eventObject);
      } else {
        if (_________________________eventObject.type !== "FeatureCollection") {
          throw Error("invalid geojson");
        }
        t = _ealTimeData(_________________________eventObject);
      }
      return {
        minX: t[0],
        minY: t[1],
        maxX: t[2],
        maxY: t[3],
      };
    };
    return t;
  }
  var lastTrade = handleEventIn;
  function _calculateGeod(triggerEvent, t) {
    var n = {};
    var i = [];
    if (triggerEvent.type === "LineString") {
      triggerEvent = createFeature(triggerEvent);
    }
    if (t.type === "LineString") {
      t = createFeature(t);
    }
    if (
      triggerEvent.type === "Feature" &&
      t.type === "Feature" &&
      triggerEvent.geometry !== null &&
      t.geometry !== null &&
      triggerEvent.geometry.type === "LineString" &&
      t.geometry.type === "LineString" &&
      triggerEvent.geometry.coordinates.length === 2 &&
      t.geometry.coordinates.length === 2
    ) {
      var triggerEventG = doIntersect(triggerEvent, t);
      if (triggerEventG) {
        i.push(triggerEventG);
      }
      return createGeoJson(i);
    }
    var observer = lastTrade();
    observer.load(validateGeoJq(t));
    processGeoset(validateGeoJq(triggerEvent), function (_ouseClick) {
      processGeoset(observer.search(_ouseClick), function (t) {
        var isClickValid = doIntersect(_ouseClick, t);
        if (isClickValid) {
          var clickCombiner = parseValue(isClickValid).join(",");
          if (!n[clickCombiner]) {
            n[clickCombiner] = true;
            i.push(isClickValid);
          }
        }
      });
    });
    return createGeoJson(i);
  }
  function doIntersect(__evaluation, t) {
    var n = parseValue(__evaluation);
    var i = parseValue(t);
    if (n.length !== 2) {
      throw Error("<intersects> line1 must only contain 2 coordinates");
    }
    if (i.length !== 2) {
      throw Error("<intersects> line2 must only contain 2 coordinates");
    }
    var timeValue = n[0][0];
    var ___evaluation = n[0][1];
    var s = n[1][0];
    var expression = n[1][1];
    var _____latitude = i[0][0];
    var __index = i[0][1];
    var numOfCoords = i[1][0];
    var _userId = i[1][1];
    var getRealtimeTr =
      (_userId - __index) * (s - timeValue) -
      (numOfCoords - _____latitude) * (expression - ___evaluation);
    var _timeValue =
      (numOfCoords - _____latitude) * (___evaluation - __index) -
      (_userId - __index) * (timeValue - _____latitude);
    var gdpPerCapita =
      (s - timeValue) * (___evaluation - __index) -
      (expression - ___evaluation) * (timeValue - _____latitude);
    if (getRealtimeTr === 0) {
      return null;
    }
    var _boundingBox = _timeValue / getRealtimeTr;
    var _gravity = gdpPerCapita / getRealtimeTr;
    if (_boundingBox < 0 || _boundingBox > 1 || _gravity < 0 || _gravity > 1) {
      return null;
    } else {
      return validateInput([
        timeValue + _boundingBox * (s - timeValue),
        ___evaluation + _boundingBox * (expression - ___evaluation),
      ]);
    }
  }
  function geoCalculator(_apEvent, t, n = {}) {
    var i = validateInput([Infinity, Infinity], {
      dist: Infinity,
    });
    var initialResult = 0;
    handleGeospat(_apEvent, function (bearing) {
      for (
        var bearingValues = parseValue(bearing), s = 0;
        bearingValues.length - 1 > s;
        s++
      ) {
        var isValidBorrow = validateInput(bearingValues[s]);
        isValidBorrow.properties.dist = calculateHav(t, isValidBorrow, n);
        var nextBearing = validateInput(bearingValues[s + 1]);
        nextBearing.properties.dist = calculateHav(t, nextBearing, n);
        var heightOrDepth = calculateHav(isValidBorrow, nextBearing, n);
        var circumference = Math.max(
          isValidBorrow.properties.dist,
          nextBearing.properties.dist,
        );
        var distance = getBearing(isValidBorrow, nextBearing);
        var _bearingValues = calculateGeod(t, circumference, distance + 90, n);
        var operand = calculateGeod(t, circumference, distance - 90, n);
        var _distance = _calculateGeod(
          createLine([
            _bearingValues.geometry.coordinates,
            operand.geometry.coordinates,
          ]),
          createLine([
            isValidBorrow.geometry.coordinates,
            nextBearing.geometry.coordinates,
          ]),
        );
        var haversine = null;
        if (_distance.features.length > 0) {
          (haversine = _distance.features[0]).properties.dist = calculateHav(
            t,
            haversine,
            n,
          );
          haversine.properties.location =
            initialResult + calculateHav(isValidBorrow, haversine, n);
        }
        if (i.properties.dist > isValidBorrow.properties.dist) {
          (i = isValidBorrow).properties.index = s;
          i.properties.location = initialResult;
        }
        if (i.properties.dist > nextBearing.properties.dist) {
          (i = nextBearing).properties.index = s + 1;
          i.properties.location = initialResult + heightOrDepth;
        }
        if (haversine && i.properties.dist > haversine.properties.dist) {
          (i = haversine).properties.index = s;
        }
        initialResult += heightOrDepth;
      }
    });
    return i;
  }
  function calculateBary(___________error, t, n = {}) {
    var i = parseLocation(___________error);
    var locationAtT = parseLocation(t);
    if (locationAtT[0] - i[0] > 180) {
      locationAtT[0] += -360;
    } else if (i[0] - locationAtT[0] > 180) {
      locationAtT[0] += 360;
    } else {
      locationAtT[0] += 0;
    }
    var observation = (function (______________________________event, t, n) {
      var i = (n = n === undefined ? _currentTime : Number(n));
      var _degreesToRads =
        (______________________________event[1] * Math.PI) / 180;
      var eventTiming = (t[1] * Math.PI) / 180;
      var s = eventTiming - _degreesToRads;
      var _target =
        (Math.abs(t[0] - ______________________________event[0]) * Math.PI) /
        180;
      if (_target > Math.PI) {
        _target -= Math.PI * 2;
      }
      var ___currentTime = Math.log(
        Math.tan(eventTiming / 2 + Math.PI / 4) /
          Math.tan(_degreesToRads / 2 + Math.PI / 4),
      );
      var __height =
        Math.abs(___currentTime) > 1e-11
          ? s / ___currentTime
          : Math.cos(_degreesToRads);
      return Math.sqrt(s * s + __height * __height * _target * _target) * i;
    })(i, locationAtT);
    return convertLength(observation, "meters", n.units);
  }
  function calculateVoye(currentEvent, t, n = {}) {
    n.method ||= "geodesic";
    n.units ||= "kilometers";
    if (!currentEvent) {
      throw Error("pt is required");
    }
    if (Array.isArray(currentEvent)) {
      currentEvent = validateInput(currentEvent);
    } else if (currentEvent.type === "Point") {
      currentEvent = createFeature(currentEvent);
    } else {
      validateGeo(currentEvent, "Point", "point");
    }
    if (!t) {
      throw Error("line is required");
    }
    if (Array.isArray(t)) {
      t = createLine(t);
    } else if (t.type === "LineString") {
      t = createFeature(t);
    } else {
      validateGeo(t, "LineString", "line");
    }
    var i = Infinity;
    var _________radius = currentEvent.geometry.coordinates;
    processGeosyn(t, function (hermiteDerivs) {
      var t = (function (orderBelonged, t, n, i) {
        var coordinateDif = [n[0] - t[0], n[1] - t[1]];
        var deltaX = [orderBelonged[0] - t[0], orderBelonged[1] - t[1]];
        var s = calculateDot(deltaX, coordinateDif);
        if (s <= 0) {
          return calculateArea(orderBelonged, t, {
            method: i.method,
            units: "degrees",
          });
        }
        var getRealTimeSb = calculateDot(coordinateDif, coordinateDif);
        if (s >= getRealTimeSb) {
          return calculateArea(orderBelonged, n, {
            method: i.method,
            units: "degrees",
          });
        }
        var agnitude = s / getRealTimeSb;
        var calculateFuel = [
          t[0] + agnitude * coordinateDif[0],
          t[1] + agnitude * coordinateDif[1],
        ];
        return calculateArea(orderBelonged, calculateFuel, {
          method: i.method,
          units: "degrees",
        });
      })(
        _________radius,
        hermiteDerivs.geometry.coordinates[0],
        hermiteDerivs.geometry.coordinates[1],
        n,
      );
      if (i > t) {
        i = t;
      }
    });
    return convertLength(i, "degrees", n.units);
  }
  function calculateDot(__________________________eventObject, t) {
    return (
      __________________________eventObject[0] * t[0] +
      __________________________eventObject[1] * t[1]
    );
  }
  function calculateArea(___________________eventData, t, n) {
    if (n.method === "planar") {
      return calculateBary(___________________eventData, t, n);
    } else {
      return calculateHav(___________________eventData, t, n);
    }
  }
  lastTrade.default = handleEventIn;
  var isLessThanOrI = 6378137;
  function geographicAnl(____________________eventData) {
    return processGeo(
      ____________________eventData,
      function (_____________________eventData, t) {
        return (
          _____________________eventData +
          (function (___________________________eventObject) {
            var t;
            var n = 0;
            switch (___________________________eventObject.type) {
              case "Polygon":
                return ytDifference(
                  ___________________________eventObject.coordinates,
                );
              case "MultiPolygon":
                for (
                  t = 0;
                  ___________________________eventObject.coordinates.length > t;
                  t++
                ) {
                  n += ytDifference(
                    ___________________________eventObject.coordinates[t],
                  );
                }
                return n;
              case "Point":
              case "MultiPoint":
              case "LineString":
              case "MultiLineString":
                return 0;
            }
            return 0;
          })(t)
        );
      },
      0,
    );
  }
  function ytDifference(______________________eventData) {
    var t = 0;
    if (
      ______________________eventData &&
      ______________________eventData.length > 0
    ) {
      t += Math.abs(isLastTwoChar(______________________eventData[0]));
      for (var n = 1; ______________________eventData.length > n; n++) {
        t -= Math.abs(isLastTwoChar(______________________eventData[n]));
      }
    }
    return t;
  }
  function isLastTwoChar(____________error) {
    var t;
    var n;
    var i;
    var ___________currentIndex;
    var currentChar;
    var s;
    var characterSubs = 0;
    var errorLength = ____________error.length;
    if (errorLength > 2) {
      for (s = 0; errorLength > s; s++) {
        if (s === errorLength - 2) {
          i = errorLength - 2;
          ___________currentIndex = errorLength - 1;
          currentChar = 0;
        } else if (s === errorLength - 1) {
          i = errorLength - 1;
          ___________currentIndex = 0;
          currentChar = 1;
        } else {
          i = s;
          ___________currentIndex = s + 1;
          currentChar = s + 2;
        }
        t = ____________error[i];
        n = ____________error[___________currentIndex];
        characterSubs +=
          (__degreesToRads(____________error[currentChar][0]) -
            __degreesToRads(t[0])) *
          Math.sin(__degreesToRads(n[1]));
      }
      characterSubs = (characterSubs * isLessThanOrI * isLessThanOrI) / 2;
    }
    return characterSubs;
  }
  function __degreesToRads(__ouseClick) {
    return (__ouseClick * Math.PI) / 180;
  }
  function __parseLocation(____________________________eventObject, t, n = {}) {
    var i = parseLocation(____________________________eventObject);
    for (
      var currentParsed = parseValue(t), ____________currentIndex = 0;
      currentParsed.length - 1 > ____________currentIndex;
      ____________currentIndex++
    ) {
      var s = false;
      if (n.ignoreEndVertices) {
        if (____________currentIndex === 0) {
          s = "start";
        }
        if (____________currentIndex === currentParsed.length - 2) {
          s = "end";
        }
        if (
          ____________currentIndex === 0 &&
          ____________currentIndex + 1 === currentParsed.length - 1
        ) {
          s = "both";
        }
      }
      if (
        calculateDc(
          currentParsed[____________currentIndex],
          currentParsed[____________currentIndex + 1],
          i,
          s,
          n.epsilon === undefined ? null : n.epsilon,
        )
      ) {
        return true;
      }
    }
    return false;
  }
  function calculateDc(__errorDetails, t, n, i, __________radius) {
    var initialValue = n[0];
    var s = n[1];
    var firstError = __errorDetails[0];
    var econdError = __errorDetails[1];
    var initialTime = t[0];
    var afeArmatureC = t[1];
    var ___________radius = initialTime - firstError;
    var calculateCirc = afeArmatureC - econdError;
    var ehicle =
      (n[0] - firstError) * calculateCirc -
      (n[1] - econdError) * ___________radius;
    if (__________radius !== null) {
      if (Math.abs(ehicle) > __________radius) {
        return false;
      }
    } else if (ehicle !== 0) {
      return false;
    }
    if (i) {
      if (i === "start") {
        if (Math.abs(calculateCirc) > Math.abs(___________radius)) {
          if (calculateCirc > 0) {
            return s > econdError && afeArmatureC >= s;
          } else {
            return s >= afeArmatureC && econdError > s;
          }
        } else if (___________radius > 0) {
          return initialValue > firstError && initialTime >= initialValue;
        } else {
          return initialValue >= initialTime && firstError > initialValue;
        }
      } else if (i === "end") {
        if (Math.abs(calculateCirc) > Math.abs(___________radius)) {
          if (calculateCirc > 0) {
            return s >= econdError && afeArmatureC > s;
          } else {
            return s > afeArmatureC && econdError >= s;
          }
        } else if (___________radius > 0) {
          return initialValue >= firstError && initialTime > initialValue;
        } else {
          return initialValue > initialTime && firstError >= initialValue;
        }
      } else {
        return (
          i === "both" &&
          (Math.abs(calculateCirc) > Math.abs(___________radius)
            ? calculateCirc > 0
              ? s > econdError && afeArmatureC > s
              : s > afeArmatureC && econdError > s
            : ___________radius > 0
              ? initialValue > firstError && initialTime > initialValue
              : initialValue > initialTime && firstError > initialValue)
        );
      }
    } else if (Math.abs(calculateCirc) > Math.abs(___________radius)) {
      if (calculateCirc > 0) {
        return s >= econdError && afeArmatureC >= s;
      } else {
        return s >= afeArmatureC && econdError >= s;
      }
    } else if (___________radius > 0) {
      return initialValue >= firstError && initialTime >= initialValue;
    } else {
      return initialValue >= initialTime && firstError >= initialValue;
    }
  }
  function calculateGeoM(bboxError, t = {}) {
    var n = t.precision;
    var i = t.coordinates;
    var updatePoiiblI = t.mutate;
    if (n == null || isNaN(n)) {
      n = 6;
    } else {
      n = n;
    }
    if (i == null || isNaN(i)) {
      i = 3;
    } else {
      i = i;
    }
    if (!bboxError) {
      throw Error("<geojson> is required");
    }
    if (typeof n != "number") {
      throw Error("<precision> must be a number");
    }
    if (typeof i != "number") {
      throw Error("<coordinates> must be a number");
    }
    if (updatePoiiblI === false || updatePoiiblI === undefined) {
      bboxError = JSON.parse(JSON.stringify(bboxError));
    }
    var observable = Math.pow(10, n);
    evaluate(bboxError, function (_______________________________event) {
      (function (________________________________event, t, n) {
        if (________________________________event.length > n) {
          ________________________________event.splice(
            n,
            ________________________________event.length,
          );
        }
        for (var i = 0; ________________________________event.length > i; i++) {
          ________________________________event[i] =
            Math.round(________________________________event[i] * t) / t;
        }
      })(_______________________________event, observable, i);
    });
    return bboxError;
  }
  function isWithinBbox(axStorage, t) {
    var n = [];
    var i = lastTrade();
    handleGeospat(t, function (t) {
      n.forEach(function (___errorObject, t) {
        ___errorObject.id = t;
      });
      if (n.length) {
        var earchResult = i.search(t);
        if (earchResult.features.length) {
          var excludedItem = getSingleOrSb(t, earchResult);
          n = n.filter(function (_____element) {
            return _____element.id !== excludedItem.id;
          });
          i.remove(excludedItem);
          processGeoset(
            containsPoint(excludedItem, t),
            function (_________________________________event) {
              n.push(_________________________________event);
              i.insert(_________________________________event);
            },
          );
        }
      } else {
        (n = containsPoint(axStorage, t).features).forEach(
          function (___currentItem) {
            ___currentItem.bbox ||= (function (
              __________________________________event,
            ) {
              var t = __________________________________event[0];
              var n = __________________________________event[1];
              var i = __________________________________event[2];
              var timeInterval = __________________________________event[3];
              var _____clickEvent = calculateHav(
                __________________________________event.slice(0, 2),
                [i, n],
              );
              if (
                calculateHav(
                  __________________________________event.slice(0, 2),
                  [t, timeInterval],
                ) > _____clickEvent
              ) {
                var s = (t + i) / 2;
                return [
                  s - (timeInterval - n) / 2,
                  n,
                  s + (timeInterval - n) / 2,
                  timeInterval,
                ];
              }
              var __eventType = (n + timeInterval) / 2;
              return [
                t,
                __eventType - (i - t) / 2,
                i,
                __eventType + (i - t) / 2,
              ];
            })(getMinMax(___currentItem));
          },
        );
        i.load(createGeoJson(n));
      }
    });
    return createGeoJson(n);
  }
  function containsPoint(_____________________________eventObject, t) {
    var n = [];
    var i = parseValue(_____________________________eventObject)[0];
    var xCoordinate = parseValue(_____________________________eventObject)[
      _____________________________eventObject.geometry.coordinates.length - 1
    ];
    if (
      arePointsSame(i, parseLocation(t)) ||
      arePointsSame(xCoordinate, parseLocation(t))
    ) {
      return createGeoJson([_____________________________eventObject]);
    }
    var parsedEvent = lastTrade();
    var s = validateGeoJq(_____________________________eventObject);
    parsedEvent.load(s);
    var eventArgs = parsedEvent.search(t);
    if (!eventArgs.features.length) {
      return createGeoJson([_____________________________eventObject]);
    }
    var intersection = getSingleOrSb(t, eventArgs);
    var ___height = processInfo(
      s,
      function (___________________________________event, i, Rectangle) {
        var changedValue = parseValue(i)[1];
        var s = parseLocation(t);
        if (Rectangle === intersection.id) {
          ___________________________________event.push(s);
          n.push(createLine(___________________________________event));
          if (arePointsSame(s, changedValue)) {
            return [s];
          } else {
            return [s, changedValue];
          }
        } else {
          ___________________________________event.push(changedValue);
          return ___________________________________event;
        }
      },
      [i],
    );
    if (___height.length > 1) {
      n.push(createLine(___height));
    }
    return createGeoJson(n);
  }
  function getSingleOrSb(_elements, t) {
    if (!t.features.length) {
      throw Error("lines must contain features");
    }
    if (t.features.length === 1) {
      return t.features[0];
    }
    var n;
    var i = Infinity;
    processGeoset(t, function (t) {
      var locationRange = geoCalculator(t, _elements).properties.dist;
      if (i > locationRange) {
        n = t;
        i = locationRange;
      }
    });
    return n;
  }
  function arePointsSame(_______________________eventData, t) {
    return (
      _______________________eventData[0] === t[0] &&
      _______________________eventData[1] === t[1]
    );
  }
  function handleGeoloc(newElement, t = {}) {
    var n = getFeatureGeo(newElement);
    if (!t.properties && newElement.type === "Feature") {
      t.properties = newElement.properties;
    }
    switch (n.type) {
      case "Polygon":
        return (function (______element, t = {}) {
          var n = getFeatureGeo(______element);
          var i = n.coordinates;
          var elementProps = t.properties
            ? t.properties
            : ______element.type === "Feature"
              ? ______element.properties
              : {};
          return createPath(i, elementProps);
        })(n, t);
      case "MultiPolygon":
        return (function (_______element, t = {}) {
          var n = getFeatureGeo(_______element);
          var i = n.coordinates;
          var featureProps = t.properties
            ? t.properties
            : _______element.type === "Feature"
              ? _______element.properties
              : {};
          var _featureProps = [];
          i.forEach(function (______________________________eventObject) {
            _featureProps.push(
              createPath(
                ______________________________eventObject,
                featureProps,
              ),
            );
          });
          return createGeoJson(_featureProps);
        })(n, t);
      default:
        throw Error("invalid poly");
    }
  }
  function createPath(____userInput, t) {
    if (____userInput.length > 1) {
      return createMultiLs(____userInput, t);
    } else {
      return createLine(____userInput[0], t);
    }
  }
  function processData(____________________________________event, t) {
    var n;
    var i;
    var ____________radius;
    if (t === undefined) {
      t = {};
    }
    var ___data = t.properties;
    var s = (n = t.autoComplete) === null || n === undefined || n;
    var ____data = (i = t.orderCoords) === null || i === undefined || i;
    if (
      (____________radius = t.mutate) === null ||
      ____________radius === undefined ||
      !____________radius
    ) {
      ____________________________________event = validateGeoJf(
        ____________________________________event,
      );
    }
    if (
      ____________________________________event.type === "FeatureCollection"
    ) {
      var geographicFea = [];
      ____________________________________event.features.forEach(
        function (userEvent) {
          geographicFea.push(
            parseValue(getFeatureGeT(userEvent, {}, s, ____data)),
          );
        },
      );
      return createGeoFea(geographicFea, ___data);
    }
    return getFeatureGeT(
      ____________________________________event,
      ___data,
      s,
      ____data,
    );
  }
  function getFeatureGeT(_____________________________________event, t, n, i) {
    t =
      t ||
      (_____________________________________event.type === "Feature"
        ? _____________________________________event.properties
        : {});
    var _featureData = getFeatureGeo(
      _____________________________________event,
    );
    var _eventTarget = _featureData.coordinates;
    var s = _featureData.type;
    if (!_eventTarget.length) {
      throw Error("line must contain coordinates");
    }
    switch (s) {
      case "LineString":
        if (n) {
          _eventTarget = truncateToSmn(_eventTarget);
        }
        return validateMinXY([_eventTarget], t);
      case "MultiLineString":
        var esults = [];
        var indexTracker = 0;
        _eventTarget.forEach(
          function (______________________________________event) {
            if (n) {
              ______________________________________event = truncateToSmn(
                ______________________________________event,
              );
            }
            if (i) {
              var t = (function (__eventTarget) {
                var t = __eventTarget[0];
                var n = __eventTarget[1];
                var i = __eventTarget[2];
                var lastElement = __eventTarget[3];
                return Math.abs(t - i) * Math.abs(n - lastElement);
              })(
                getMinMax(
                  createLine(______________________________________event),
                ),
              );
              if (t > indexTracker) {
                esults.unshift(______________________________________event);
                indexTracker = t;
              } else {
                esults.push(______________________________________event);
              }
            } else {
              esults.push(______________________________________event);
            }
          },
        );
        return validateMinXY(esults, t);
      default:
        throw Error("geometry type " + s + " is not supported");
    }
  }
  function truncateToSmn(_____________error) {
    var t = _____________error[0];
    var n = _____________error[_____________error.length - 1];
    if (t[0] !== n[0] || t[1] !== n[1]) {
      _____________error.push(t);
    }
    return _____________error;
  }
  function calculateRads(_fetchData, t) {
    var n = convertToRads(_fetchData[1]);
    var i = convertToRads(t[1]);
    var radianTimeDif = convertToRads(t[0] - _fetchData[0]);
    if (radianTimeDif > Math.PI) {
      radianTimeDif -= Math.PI * 2;
    }
    if (-Math.PI > radianTimeDif) {
      radianTimeDif += Math.PI * 2;
    }
    return (
      (normalizeRads(
        Math.atan2(
          radianTimeDif,
          Math.log(
            Math.tan(i / 2 + Math.PI / 4) / Math.tan(n / 2 + Math.PI / 4),
          ),
        ),
      ) +
        360) %
      360
    );
  }
  function _calculateReal(currentHeight, t, n, i = {}) {
    var isTimeReversa = t < 0;
    var eters = convertLength(Math.abs(t), i.units, "meters");
    if (isTimeReversa) {
      eters = -Math.abs(eters);
    }
    var s = parseLocation(currentHeight);
    var __ealTimeData = (function (_timestamp, t, n, i) {
      if (i === undefined) {
        i = _currentTime;
      } else {
        i = Number(i);
      }
      var timeIntervalS = t / i;
      var _latitudeInRap = (_timestamp[0] * Math.PI) / 180;
      var s = convertToRads(_timestamp[1]);
      var userData = convertToRads(n);
      var ______latitude = timeIntervalS * Math.cos(userData);
      var ____height = s + ______latitude;
      if (Math.abs(____height) > Math.PI / 2) {
        if (____height > 0) {
          ____height = Math.PI - ____height;
        } else {
          ____height = -Math.PI - ____height;
        }
      }
      var ____currentTime = Math.log(
        Math.tan(____height / 2 + Math.PI / 4) / Math.tan(s / 2 + Math.PI / 4),
      );
      var ____user =
        Math.abs(____currentTime) > 1e-11
          ? ______latitude / ____currentTime
          : Math.cos(s);
      return [
        ((((_latitudeInRap + (timeIntervalS * Math.sin(userData)) / ____user) *
          180) /
          Math.PI +
          540) %
          360) -
          180,
        (____height * 180) / Math.PI,
      ];
    })(s, eters, n);
    if (__ealTimeData[0] - s[0] > 180) {
      __ealTimeData[0] += -360;
    } else if (s[0] - __ealTimeData[0] > 180) {
      __ealTimeData[0] += 360;
    } else {
      __ealTimeData[0] += 0;
    }
    return validateInput(__ealTimeData, i.properties);
  }
  function calculateNewN(_______________________________________event) {
    var t = _______________________________________event[0];
    var n = _______________________________________event[1];
    return [n[0] - t[0], n[1] - t[1]];
  }
  function calculateDyad(______________error, t) {
    return ______________error[0] * t[1] - t[0] * ______________error[1];
  }
  function isDyadicMatch(axisXPosition, t) {
    return (
      !(function (_triggerEvent, t) {
        return (
          calculateDyad(calculateNewN(_triggerEvent), calculateNewN(t)) === 0
        );
      })(axisXPosition, t) &&
      (function (comparisonTrg, t) {
        var n;
        var i;
        var firstElement = comparisonTrg[0];
        var _comparisonTrg = calculateNewN(comparisonTrg);
        var s = t[0];
        var ecalculatedT = calculateNewN(t);
        var getTime = calculateDyad(_comparisonTrg, ecalculatedT);
        var hour = (function (_electableArea, t) {
          return [_electableArea[0] + t[0], _electableArea[1] + t[1]];
        })(
          firstElement,
          (function (_____________radius, t) {
            return [_____________radius * t[0], _____________radius * t[1]];
          })(
            calculateDyad(
              [(n = s)[0] - (i = firstElement)[0], n[1] - i[1]],
              ecalculatedT,
            ) / getTime,
            _comparisonTrg,
          ),
        );
        return hour;
      })(axisXPosition, t)
    );
  }
  function GeographicGeo(targetArea, t, n) {
    if (!_isValidObject((n = n || {}))) {
      throw Error("options is invalid");
    }
    var i = n.units;
    if (!targetArea) {
      throw Error("geojson is required");
    }
    if (t == null || isNaN(t)) {
      throw Error("distance is required");
    }
    var _lastUpdated = getGeographic(targetArea);
    var network = targetArea.properties;
    switch (_lastUpdated) {
      case "LineString":
        return transformToKs(targetArea, t, i);
      case "MultiLineString":
        var s = [];
        handleGeospat(
          targetArea,
          function (_______________________________eventObject) {
            s.push(
              transformToKs(_______________________________eventObject, t, i)
                .geometry.coordinates,
            );
          },
        );
        return createMultiLs(s, network);
      default:
        throw Error("geometry " + _lastUpdated + " is not supported");
    }
  }
  function transformToKs(___index, t, n) {
    var i = [];
    var kiloResult = caleToKilo(t, n);
    var conversionMap = parseValue(___index);
    var s = [];
    conversionMap.forEach(function (treeIndex, t) {
      if (t !== conversionMap.length - 1) {
        var n = [
          [
            (treeLocation = treeIndex)[0] +
              ((kiloScale = kiloResult) *
                ((nextCoords = conversionMap[t + 1])[1] - treeLocation[1])) /
                (apDistance = Math.sqrt(
                  (treeLocation[0] - nextCoords[0]) *
                    (treeLocation[0] - nextCoords[0]) +
                    (treeLocation[1] - nextCoords[1]) *
                      (treeLocation[1] - nextCoords[1]),
                )),
            treeLocation[1] +
              (kiloScale * (treeLocation[0] - nextCoords[0])) / apDistance,
          ],
          [
            nextCoords[0] +
              (kiloScale * (nextCoords[1] - treeLocation[1])) / apDistance,
            nextCoords[1] +
              (kiloScale * (treeLocation[0] - nextCoords[0])) / apDistance,
          ],
        ];
        i.push(n);
        if (t > 0) {
          var ____currentItem = i[t - 1];
          var isMatch = isDyadicMatch(n, ____currentItem);
          if (isMatch !== false) {
            ____currentItem[1] = isMatch;
            n[0] = isMatch;
          }
          s.push(____currentItem[0]);
          if (t === conversionMap.length - 2) {
            s.push(n[0]);
            s.push(n[1]);
          }
        }
        if (conversionMap.length === 2) {
          s.push(n[0]);
          s.push(n[1]);
        }
      }
      var treeLocation;
      var nextCoords;
      var kiloScale;
      var apDistance;
    });
    return createLine(s, ___index.properties);
  }
  function __calculateGeod(_eventPayload, t) {
    var n = true;
    handleGeospat(_eventPayload, function (__eventInfo) {
      handleGeospat(t, function (t) {
        if (n === false) {
          return false;
        }
        n = (function (itemClickData, t) {
          switch (itemClickData.type) {
            case "Point":
              switch (t.type) {
                case "Point":
                  return (
                    (n = itemClickData.coordinates)[0] !==
                      (i = t.coordinates)[0] || n[1] !== i[1]
                  );
                case "LineString":
                  return !checkShapeOvr(t, itemClickData);
                case "Polygon":
                  return !calculateOe(itemClickData, t);
              }
              break;
            case "LineString":
              switch (t.type) {
                case "Point":
                  return !checkShapeOvr(itemClickData, t);
                case "LineString":
                  return !(function (
                    ________________________________________event,
                    t,
                  ) {
                    if (
                      _calculateGeod(
                        ________________________________________event,
                        t,
                      ).features.length > 0
                    ) {
                      return true;
                    }
                    return false;
                  })(itemClickData, t);
                case "Polygon":
                  return !isLocationJt(t, itemClickData);
              }
              break;
            case "Polygon":
              switch (t.type) {
                case "Point":
                  return !calculateOe(t, itemClickData);
                case "LineString":
                  return !isLocationJt(itemClickData, t);
                case "Polygon":
                  return !(function (__childIndex, t) {
                    for (
                      var n = 0, i = __childIndex.coordinates[0];
                      i.length > n;
                      n++
                    ) {
                      if (calculateOe(i[n], t)) {
                        return true;
                      }
                    }
                    for (
                      var ____index = 0, tartingPoint = t.coordinates[0];
                      tartingPoint.length > ____index;
                      ____index++
                    ) {
                      if (calculateOe(tartingPoint[____index], __childIndex)) {
                        return true;
                      }
                    }
                    var s = _calculateGeod(
                      handleGeoloc(__childIndex),
                      handleGeoloc(t),
                    );
                    if (s.features.length > 0) {
                      return true;
                    }
                    return false;
                  })(t, itemClickData);
              }
          }
          var n;
          var i;
          return false;
        })(__eventInfo.geometry, t.geometry);
      });
    });
    return n;
  }
  function checkShapeOvr(________element, t) {
    for (var n = 0; ________element.coordinates.length - 1 > n; n++) {
      if (
        isCollinear(
          ________element.coordinates[n],
          ________element.coordinates[n + 1],
          t.coordinates,
        )
      ) {
        return true;
      }
    }
    return false;
  }
  function isLocationJt(calculateRect, t) {
    for (var n = 0, i = t.coordinates; i.length > n; n++) {
      if (calculateOe(i[n], calculateRect)) {
        return true;
      }
    }
    return _calculateGeod(t, handleGeoloc(calculateRect)).features.length > 0;
  }
  function isCollinear(_____currentTime, t, n) {
    var i = t[0] - _____currentTime[0];
    var yDiff = t[1] - _____currentTime[1];
    return (
      (n[0] - _____currentTime[0]) * yDiff - (n[1] - _____currentTime[1]) * i ==
        0 &&
      (Math.abs(yDiff) > Math.abs(i)
        ? yDiff > 0
          ? n[1] >= _____currentTime[1] && t[1] >= n[1]
          : n[1] >= t[1] && _____currentTime[1] >= n[1]
        : i > 0
          ? n[0] >= _____currentTime[0] && t[0] >= n[0]
          : n[0] >= t[0] && _____currentTime[0] >= n[0])
    );
  }
  function compareGeoloc(_________________________________________event, t) {
    var n = getFeatureGeo(_________________________________________event);
    var i = getFeatureGeo(t);
    var locationType = n.type;
    var __geoEvent = i.type;
    var s = n.coordinates;
    var __targetElement = i.coordinates;
    switch (locationType) {
      case "Point":
        if (__geoEvent === "Point") {
          return _arePointsSame(s, __targetElement);
        }
        throw Error("feature2 " + __geoEvent + " geometry not supported");
      case "MultiPoint":
        switch (__geoEvent) {
          case "Point":
            return (function (_geolocationFg, t) {
              var n;
              var i = false;
              for (n = 0; _geolocationFg.coordinates.length > n; n++) {
                if (
                  _arePointsSame(_geolocationFg.coordinates[n], t.coordinates)
                ) {
                  i = true;
                  break;
                }
              }
              return i;
            })(n, i);
          case "MultiPoint":
            return (function (_eventTrigger, t) {
              for (var n = 0, i = t.coordinates; i.length > n; n++) {
                var _____currentItem = i[n];
                var hasCoordinate = false;
                for (
                  var s = 0, coordinatesTo = _eventTrigger.coordinates;
                  coordinatesTo.length > s;
                  s++
                ) {
                  if (_arePointsSame(_____currentItem, coordinatesTo[s])) {
                    hasCoordinate = true;
                    break;
                  }
                }
                if (!hasCoordinate) {
                  return false;
                }
              }
              return true;
            })(n, i);
          default:
            throw Error("feature2 " + __geoEvent + " geometry not supported");
        }
      case "LineString":
        switch (__geoEvent) {
          case "Point":
            return __parseLocation(i, n, {
              ignoreEndVertices: true,
            });
          case "LineString":
            return (function (eventContext, t) {
              var n = false;
              for (
                var i = 0, ___coordinates = t.coordinates;
                ___coordinates.length > i;
                i++
              ) {
                var ____location = ___coordinates[i];
                if (
                  __parseLocation(
                    {
                      type: "Point",
                      coordinates: ____location,
                    },
                    eventContext,
                    {
                      ignoreEndVertices: true,
                    },
                  )
                ) {
                  n = true;
                }
                if (
                  !__parseLocation(
                    {
                      type: "Point",
                      coordinates: ____location,
                    },
                    eventContext,
                    {
                      ignoreEndVertices: false,
                    },
                  )
                ) {
                  return false;
                }
              }
              return n;
            })(n, i);
          case "MultiPoint":
            return (function (________________________eventData, t) {
              var n = false;
              for (
                var i = 0, elevantLocs = t.coordinates;
                elevantLocs.length > i;
                i++
              ) {
                var currentLoc = elevantLocs[i];
                if (
                  __parseLocation(
                    currentLoc,
                    ________________________eventData,
                    {
                      ignoreEndVertices: true,
                    },
                  )
                ) {
                  n = true;
                }
                if (
                  !__parseLocation(
                    currentLoc,
                    ________________________eventData,
                  )
                ) {
                  return false;
                }
              }
              if (n) {
                return true;
              }
              return false;
            })(n, i);
          default:
            throw Error("feature2 " + __geoEvent + " geometry not supported");
        }
      case "Polygon":
        switch (__geoEvent) {
          case "Point":
            return calculateOe(i, n, {
              ignoreBoundary: true,
            });
          case "LineString":
            return (function (endTime, t) {
              var n = false;
              var i = 0;
              var endTimeRange = getMinMax(endTime);
              var timeSeriesEnd = getMinMax(t);
              if (!isBoxInside(endTimeRange, timeSeriesEnd)) {
                return false;
              }
              for (; t.coordinates.length - 1 > i; i++) {
                if (
                  calculateOe(
                    {
                      type: "Point",
                      coordinates: calculateMidP(
                        t.coordinates[i],
                        t.coordinates[i + 1],
                      ),
                    },
                    endTime,
                    {
                      ignoreBoundary: true,
                    },
                  )
                ) {
                  n = true;
                  break;
                }
              }
              return n;
            })(n, i);
          case "Polygon":
            return (function (________________________________eventObject, t) {
              if (
                ________________________________eventObject.type ===
                  "Feature" &&
                ________________________________eventObject.geometry === null
              ) {
                return false;
              }
              if (t.type === "Feature" && t.geometry === null) {
                return false;
              }
              var n = getMinMax(________________________________eventObject);
              var i = getMinMax(t);
              if (!isBoxInside(n, i)) {
                return false;
              }
              var _________________________eventData =
                getFeatureGeo(t).coordinates;
              for (
                var _________element = 0,
                  s = _________________________eventData;
                s.length > _________element;
                _________element++
              ) {
                for (
                  var _____________currentIndex = 0,
                    ______currentItem = s[_________element];
                  ______currentItem.length > _____________currentIndex;
                  _____________currentIndex++
                ) {
                  if (
                    !calculateOe(
                      ______currentItem[_____________currentIndex],
                      ________________________________eventObject,
                    )
                  ) {
                    return false;
                  }
                }
              }
              return true;
            })(n, i);
          case "MultiPoint":
            return (function (
              __________________________________________event,
              t,
            ) {
              for (var n = 0, i = t.coordinates; i.length > n; n++) {
                if (
                  !calculateOe(
                    i[n],
                    __________________________________________event,
                    {
                      ignoreBoundary: true,
                    },
                  )
                ) {
                  return false;
                }
              }
              return true;
            })(n, i);
          default:
            throw Error("feature2 " + __geoEvent + " geometry not supported");
        }
      default:
        throw Error("feature1 " + locationType + " geometry not supported");
    }
  }
  function isBoxInside(_________________________________eventObject, t) {
    return (
      t[0] >= _________________________________eventObject[0] &&
      _________________________________eventObject[2] >= t[2] &&
      t[1] >= _________________________________eventObject[1] &&
      t[3] <= _________________________________eventObject[3]
    );
  }
  function _arePointsSame(___________________________________________event, t) {
    return (
      ___________________________________________event[0] === t[0] &&
      ___________________________________________event[1] === t[1]
    );
  }
  function calculateMidP(intersectionD, t) {
    return [(intersectionD[0] + t[0]) / 2, (intersectionD[1] + t[1]) / 2];
  }
  /**
   * splaytree v3.1.2
   * Fast Splay tree for Node and browser
   *
   * @author Alexander Milevski <info@w8r.name>
   * @license MIT
   * @preserve
   */
  function performSplay(______clickEvent, t) {
    var n;
    var i;
    var root;
    var playTreeRoot;
    var s = {
      label: 0,
      sent() {
        if (root[0] & 1) {
          throw root[1];
        }
        return root[1];
      },
      trys: [],
      ops: [],
    };
    playTreeRoot = {
      next: createWrapper(0),
      throw: createWrapper(1),
      return: createWrapper(2),
    };
    if (typeof Symbol == "function") {
      playTreeRoot[Symbol.iterator] = function () {
        return this;
      };
    }
    return playTreeRoot;
    function createWrapper(_options) {
      return function (lineCoords) {
        return (function (_userObject) {
          if (n) {
            throw new TypeError("Generator is already executing.");
          }
          while (s) {
            try {
              n = 1;
              if (
                i &&
                (root =
                  _userObject[0] & 2
                    ? i.return
                    : _userObject[0]
                      ? i.throw || ((root = i.return) && root.call(i), 0)
                      : i.next) &&
                !(root = root.call(i, _userObject[1])).done
              ) {
                return root;
              }
              i = 0;
              if (root) {
                _userObject = [_userObject[0] & 2, root.value];
              }
              switch (_userObject[0]) {
                case 0:
                case 1:
                  root = _userObject;
                  break;
                case 4:
                  s.label++;
                  return {
                    value: _userObject[1],
                    done: false,
                  };
                case 5:
                  s.label++;
                  i = _userObject[1];
                  _userObject = [0];
                  continue;
                case 7:
                  _userObject = s.ops.pop();
                  s.trys.pop();
                  continue;
                default:
                  if (
                    !((root = s.trys),
                    (root = root.length > 0 && root[root.length - 1]) ||
                      (_userObject[0] !== 6 && _userObject[0] !== 2))
                  ) {
                    s = 0;
                    continue;
                  }
                  if (
                    _userObject[0] === 3 &&
                    (!root ||
                      (_userObject[1] > root[0] && root[3] > _userObject[1]))
                  ) {
                    s.label = _userObject[1];
                    break;
                  }
                  if (_userObject[0] === 6 && root[1] > s.label) {
                    s.label = root[1];
                    root = _userObject;
                    break;
                  }
                  if (root && root[2] > s.label) {
                    s.label = root[2];
                    s.ops.push(_userObject);
                    break;
                  }
                  if (root[2]) {
                    s.ops.pop();
                  }
                  s.trys.pop();
                  continue;
              }
              _userObject = t.call(______clickEvent, s);
            } catch (_______________error) {
              _userObject = [6, _______________error];
              i = 0;
            } finally {
              n = root = 0;
            }
          }
          if (_userObject[0] & 5) {
            throw _userObject[1];
          }
          return {
            value: _userObject[0] ? _userObject[1] : undefined,
            done: true,
          };
        })([_options, lineCoords]);
      };
    }
  }
  function createNode(_coordinate, t) {
    this.next = null;
    this.key = _coordinate;
    this.data = t;
    this.left = null;
    this.right = null;
  }
  function compareResult(___ouseClick, t) {
    if (___ouseClick > t) {
      return 1;
    } else if (t > ___ouseClick) {
      return -1;
    } else {
      return 0;
    }
  }
  function earchInBst(earthLocation, t, n) {
    var i = new createNode(null, null);
    var _____currentNode = i;
    var tartNode = i;
    while (true) {
      var s = n(earthLocation, t.key);
      if (s < 0) {
        if (t.left === null) {
          break;
        }
        if (n(earthLocation, t.left.key) < 0) {
          t.left = (leftChild = t.left).right;
          leftChild.right = t;
          if ((t = leftChild).left === null) {
            break;
          }
        }
        tartNode.left = t;
        tartNode = t;
        t = t.left;
      } else {
        if (s <= 0) {
          break;
        }
        if (t.right === null) {
          break;
        }
        var leftChild;
        if (
          n(earthLocation, t.right.key) > 0 &&
          ((t.right = (leftChild = t.right).left),
          (leftChild.left = t),
          (t = leftChild).right === null)
        ) {
          break;
        }
        _____currentNode.right = t;
        _____currentNode = t;
        t = t.right;
      }
    }
    _____currentNode.right = t.left;
    tartNode.left = t.right;
    t.left = i.right;
    t.right = i.left;
    return t;
  }
  function insertNode(userLocation, t, n, i) {
    var userNode = new createNode(userLocation, t);
    if (n === null) {
      userNode.left = userNode.right = null;
      return userNode;
    }
    var houldUpdateL = i(
      userLocation,
      (n = earchInBst(userLocation, n, i)).key,
    );
    if (houldUpdateL < 0) {
      userNode.left = n.left;
      userNode.right = n;
      n.left = null;
    } else if (!(houldUpdateL < 0)) {
      userNode.right = n.right;
      userNode.left = n;
      n.right = null;
    }
    return userNode;
  }
  function findParent(astronomicalH, t, n) {
    var i = null;
    var _earchResult = null;
    if (t) {
      var _compareResult = n(
        (t = earchInBst(astronomicalH, t, n)).key,
        astronomicalH,
      );
      if (_compareResult === 0) {
        i = t.left;
        _earchResult = t.right;
      } else if (_compareResult < 0) {
        _earchResult = t.right;
        t.right = null;
        i = t;
      } else {
        i = t.left;
        t.left = null;
        _earchResult = t;
      }
    }
    return {
      left: i,
      right: _earchResult,
    };
  }
  function printTree(________________error, t, n, i, egmentLength) {
    if (________________error) {
      i(t + (n ? "└── " : "├── ") + egmentLength(________________error) + "\n");
      var indentationOn = t + (n ? "    " : "│   ");
      if (________________error.left) {
        printTree(
          ________________error.left,
          indentationOn,
          false,
          i,
          egmentLength,
        );
      }
      if (________________error.right) {
        printTree(
          ________________error.right,
          indentationOn,
          true,
          i,
          egmentLength,
        );
      }
    }
  }
  var eventMapper = (function () {
    function e(equalityCheck = compareResult) {
      this._root = null;
      this._size = 0;
      this._comparator = equalityCheck;
    }
    e.prototype.insert = function (e, t) {
      this._size++;
      return (this._root = insertNode(e, t, this._root, this._comparator));
    };
    e.prototype.add = function (e, t) {
      var n = new createNode(e, t);
      if (this._root === null) {
        n.left = n.right = null;
        this._size++;
        this._root = n;
      }
      var i = this._comparator;
      var __esult = earchInBst(e, this._root, i);
      var comparator = i(e, __esult.key);
      if (comparator === 0) {
        this._root = __esult;
      } else {
        if (comparator < 0) {
          n.left = __esult.left;
          n.right = __esult;
          __esult.left = null;
        } else if (comparator > 0) {
          n.right = __esult.right;
          n.left = __esult;
          __esult.right = null;
        }
        this._size++;
        this._root = n;
      }
      return this._root;
    };
    e.prototype.remove = function (e) {
      this._root = this._remove(e, this._root, this._comparator);
    };
    e.prototype._remove = function (e, t, n) {
      var i;
      if (t === null) {
        return null;
      } else if (n(e, (t = earchInBst(e, t, n)).key) === 0) {
        if (t.left === null) {
          i = t.right;
        } else {
          (i = earchInBst(e, t.left, n)).right = t.right;
        }
        this._size--;
        return i;
      } else {
        return t;
      }
    };
    e.prototype.pop = function () {
      var e = this._root;
      if (e) {
        while (e.left) {
          e = e.left;
        }
        this._root = earchInBst(e.key, this._root, this._comparator);
        this._root = this._remove(e.key, this._root, this._comparator);
        return {
          key: e.key,
          data: e.data,
        };
      }
      return null;
    };
    e.prototype.findStatic = function (e) {
      for (var t = this._root, n = this._comparator; t; ) {
        var i = n(e, t.key);
        if (i === 0) {
          return t;
        }
        if (i < 0) {
          t = t.left;
        } else {
          t = t.right;
        }
      }
      return null;
    };
    e.prototype.find = function (e) {
      if (
        this._root &&
        ((this._root = earchInBst(e, this._root, this._comparator)),
        this._comparator(e, this._root.key) !== 0)
      ) {
        return null;
      } else {
        return this._root;
      }
    };
    e.prototype.contains = function (e) {
      for (var t = this._root, n = this._comparator; t; ) {
        var i = n(e, t.key);
        if (i === 0) {
          return true;
        }
        if (i < 0) {
          t = t.left;
        } else {
          t = t.right;
        }
      }
      return false;
    };
    e.prototype.forEach = function (e, t) {
      for (
        var n = this._root, i = [], hasReachedEnd = false;
        !hasReachedEnd;

      ) {
        if (n !== null) {
          i.push(n);
          n = n.left;
        } else if (i.length !== 0) {
          n = i.pop();
          e.call(t, n);
          n = n.right;
        } else {
          hasReachedEnd = true;
        }
      }
      return this;
    };
    e.prototype.range = function (e, t, n, i) {
      for (
        var visitedNodes = [], _comparator = this._comparator, s = this._root;
        visitedNodes.length !== 0 || s;

      ) {
        if (s) {
          visitedNodes.push(s);
          s = s.left;
        } else {
          if (_comparator((s = visitedNodes.pop()).key, t) > 0) {
            break;
          }
          if (_comparator(s.key, e) >= 0 && n.call(i, s)) {
            return this;
          }
          s = s.right;
        }
      }
      return this;
    };
    e.prototype.keys = function () {
      var e = [];
      this.forEach(function (t) {
        return e.push(t.key);
      });
      return e;
    };
    e.prototype.values = function () {
      var e = [];
      this.forEach(function (t) {
        return e.push(t.data);
      });
      return e;
    };
    e.prototype.min = function () {
      if (this._root) {
        return this.minNode(this._root).key;
      } else {
        return null;
      }
    };
    e.prototype.max = function () {
      if (this._root) {
        return this.maxNode(this._root).key;
      } else {
        return null;
      }
    };
    e.prototype.minNode = function (e = this._root) {
      if (e) {
        while (e.left) {
          e = e.left;
        }
      }
      return e;
    };
    e.prototype.maxNode = function (e = this._root) {
      if (e) {
        while (e.right) {
          e = e.right;
        }
      }
      return e;
    };
    e.prototype.at = function (e) {
      var t = this._root;
      for (var n = false, i = 0, preorderStack = []; !n; ) {
        if (t) {
          preorderStack.push(t);
          t = t.left;
        } else if (preorderStack.length > 0) {
          t = preorderStack.pop();
          if (i === e) {
            return t;
          }
          i++;
          t = t.right;
        } else {
          n = true;
        }
      }
      return null;
    };
    e.prototype.next = function (e) {
      var t = this._root;
      var n = null;
      if (e.right) {
        for (n = e.right; n.left; ) {
          n = n.left;
        }
        return n;
      }
      var i = this._comparator;
      while (t) {
        var decisionScore = i(e.key, t.key);
        if (decisionScore === 0) {
          break;
        }
        if (decisionScore < 0) {
          n = t;
          t = t.left;
        } else {
          t = t.right;
        }
      }
      return n;
    };
    e.prototype.prev = function (e) {
      var t = this._root;
      var n = null;
      if (e.left !== null) {
        for (n = e.left; n.right; ) {
          n = n.right;
        }
        return n;
      }
      var i = this._comparator;
      while (t) {
        var decision = i(e.key, t.key);
        if (decision === 0) {
          break;
        }
        if (decision < 0) {
          t = t.left;
        } else {
          n = t;
          t = t.right;
        }
      }
      return n;
    };
    e.prototype.clear = function () {
      this._root = null;
      this._size = 0;
      return this;
    };
    e.prototype.toList = function () {
      return (function (e) {
        var t = e;
        var n = [];
        var i = false;
        var _newNode = new createNode(null, null);
        var rightChild = _newNode;
        while (!i) {
          if (t) {
            n.push(t);
            t = t.left;
          } else if (n.length > 0) {
            t = (t = rightChild = rightChild.next = n.pop()).right;
          } else {
            i = true;
          }
        }
        rightChild.next = null;
        return _newNode.next;
      })(this._root);
    };
    e.prototype.load = function (e, t = [], n = false) {
      var i = e.length;
      var __comparisonFn = this._comparator;
      if (n) {
        ortArray(e, t, 0, i - 1, __comparisonFn);
      }
      if (this._root === null) {
        this._root = buildBinarySe(e, t, 0, i);
        this._size = i;
      } else {
        var ______currentNode = (function (e, t, n) {
          var i = new createNode(null, null);
          var previousNode = i;
          var _______currentNode = e;
          var s = t;
          while (_______currentNode !== null && s !== null) {
            if (n(_______currentNode.key, s.key) < 0) {
              previousNode.next = _______currentNode;
              _______currentNode = _______currentNode.next;
            } else {
              previousNode.next = s;
              s = s.next;
            }
            previousNode = previousNode.next;
          }
          if (_______currentNode !== null) {
            previousNode.next = _______currentNode;
          } else if (s !== null) {
            previousNode.next = s;
          }
          return i.next;
        })(
          this.toList(),
          (function (e, t) {
            var n = new createNode(null, null);
            var i = n;
            for (
              var ______________currentIndex = 0;
              e.length > ______________currentIndex;
              ______________currentIndex++
            ) {
              i = i.next = new createNode(
                e[______________currentIndex],
                t[______________currentIndex],
              );
            }
            i.next = null;
            return n.next;
          })(e, t),
          __comparisonFn,
        );
        this._root = plitList(
          {
            head: ______currentNode,
          },
          0,
          (i = this._size + i),
        );
      }
      return this;
    };
    e.prototype.isEmpty = function () {
      return this._root === null;
    };
    Object.defineProperty(e.prototype, "size", {
      get() {
        return this._size;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(e.prototype, "root", {
      get() {
        return this._root;
      },
      enumerable: true,
      configurable: true,
    });
    e.prototype.toString = function (
      e = function (e) {
        return e.key + "";
      },
    ) {
      var t = [];
      printTree(
        this._root,
        "",
        true,
        function (e) {
          return t.push(e);
        },
        e,
      );
      return t.join("");
    };
    e.prototype.update = function (e, t, n) {
      var i = this._comparator;
      var _parentNode = findParent(e, this._root, i);
      var _leftChild = _parentNode.left;
      var s = _parentNode.right;
      if (i(e, t) < 0) {
        s = insertNode(t, n, s, i);
      } else {
        _leftChild = insertNode(t, n, _leftChild, i);
      }
      this._root = (function (e, t, n) {
        if (t === null) {
          return e;
        } else {
          if (e !== null) {
            (t = earchInBst(e.key, t, n)).left = e;
          }
          return t;
        }
      })(_leftChild, s, i);
    };
    e.prototype.split = function (e) {
      return findParent(e, this._root, this._comparator);
    };
    e.prototype[Symbol.iterator] = function () {
      var e;
      var t;
      var n;
      return performSplay(this, function (i) {
        switch (i.label) {
          case 0:
            e = this._root;
            t = [];
            n = false;
            i.label = 1;
          case 1:
            if (n) {
              return [3, 6];
            } else if (e === null) {
              return [3, 2];
            } else {
              t.push(e);
              e = e.left;
              return [3, 5];
            }
          case 2:
            if (t.length === 0) {
              return [3, 4];
            } else {
              return [4, (e = t.pop())];
            }
          case 3:
            i.sent();
            e = e.right;
            return [3, 5];
          case 4:
            n = true;
            i.label = 5;
          case 5:
            return [3, 1];
          case 6:
            return [2];
        }
      });
    };
    return e;
  })();
  function buildBinarySe(e, t, n, i) {
    var indexDiff = i - n;
    if (indexDiff > 0) {
      var _______________currentIndex = n + Math.floor(indexDiff / 2);
      var s = new createNode(
        e[_______________currentIndex],
        t[_______________currentIndex],
      );
      s.left = buildBinarySe(e, t, n, _______________currentIndex);
      s.right = buildBinarySe(e, t, _______________currentIndex + 1, i);
      return s;
    }
    return null;
  }
  function plitList(e, t, n) {
    var i = n - t;
    if (i > 0) {
      var idIndex = t + Math.floor(i / 2);
      var plitNode = plitList(e, t, idIndex);
      var s = e.head;
      s.left = plitNode;
      e.head = e.head.next;
      s.right = plitList(e, idIndex + 1, n);
      return s;
    }
    return null;
  }
  function ortArray(e, t, n, i, ______________radius) {
    if (i > n) {
      var iddleElement = e[(n + i) >> 1];
      var s = n - 1;
      var ________________currentIndex = i + 1;
      while (true) {
        do {
          s++;
        } while (______________radius(e[s], iddleElement) < 0);
        do {
          ________________currentIndex--;
        } while (
          ______________radius(e[________________currentIndex], iddleElement) >
          0
        );
        if (s >= ________________currentIndex) {
          break;
        }
        var lat = e[s];
        e[s] = e[________________currentIndex];
        e[________________currentIndex] = lat;
        lat = t[s];
        t[s] = t[________________currentIndex];
        t[________________currentIndex] = lat;
      }
      ortArray(e, t, n, ________________currentIndex, ______________radius);
      ortArray(e, t, ________________currentIndex + 1, i, ______________radius);
    }
  }
  const currentStock = 1.1102230246251565e-16;
  const _ize = 134217729;
  const naturalLog = (3 + currentStock * 8) * currentStock;
  function ortTogether(e, t, n, i, initialValues) {
    let _currentState;
    let s;
    let __currentState;
    let ___currentState;
    let initialX = t[0];
    let _initialValue = i[0];
    let __initialValue = 0;
    let pokemon = 0;
    if (_initialValue > initialX == _initialValue > -initialX) {
      _currentState = initialX;
      initialX = t[++__initialValue];
    } else {
      _currentState = _initialValue;
      _initialValue = i[++pokemon];
    }
    let _initialX = 0;
    if (e > __initialValue && n > pokemon) {
      if (_initialValue > initialX == _initialValue > -initialX) {
        s = initialX + _currentState;
        __currentState = _currentState - (s - initialX);
        initialX = t[++__initialValue];
      } else {
        s = _initialValue + _currentState;
        __currentState = _currentState - (s - _initialValue);
        _initialValue = i[++pokemon];
      }
      _currentState = s;
      if (__currentState !== 0) {
        initialValues[_initialX++] = __currentState;
      }
      while (e > __initialValue && n > pokemon) {
        if (_initialValue > initialX == _initialValue > -initialX) {
          s = _currentState + initialX;
          ___currentState = s - _currentState;
          __currentState =
            _currentState -
            (s - ___currentState) +
            (initialX - ___currentState);
          initialX = t[++__initialValue];
        } else {
          s = _currentState + _initialValue;
          ___currentState = s - _currentState;
          __currentState =
            _currentState -
            (s - ___currentState) +
            (_initialValue - ___currentState);
          _initialValue = i[++pokemon];
        }
        _currentState = s;
        if (__currentState !== 0) {
          initialValues[_initialX++] = __currentState;
        }
      }
    }
    while (e > __initialValue) {
      s = _currentState + initialX;
      ___currentState = s - _currentState;
      __currentState =
        _currentState - (s - ___currentState) + (initialX - ___currentState);
      initialX = t[++__initialValue];
      _currentState = s;
      if (__currentState !== 0) {
        initialValues[_initialX++] = __currentState;
      }
    }
    while (n > pokemon) {
      s = _currentState + _initialValue;
      ___currentState = s - _currentState;
      __currentState =
        _currentState -
        (s - ___currentState) +
        (_initialValue - ___currentState);
      _initialValue = i[++pokemon];
      _currentState = s;
      if (__currentState !== 0) {
        initialValues[_initialX++] = __currentState;
      }
    }
    if (_currentState !== 0 || _initialX === 0) {
      initialValues[_initialX++] = _currentState;
    }
    return _initialX;
  }
  function floatArray(e) {
    return new Float64Array(e);
  }
  const calculateTime = 2.2204460492503146e-16;
  const numInitialMap = 1.1093356479670487e-31;
  const ertexNormal = floatArray(4);
  const domainName = floatArray(8);
  const getRealtimeNl = floatArray(12);
  const getUserName = floatArray(16);
  const getData = floatArray(4);
  function calculateEcc(e, t, n, i, targetRect, _userLocation) {
    const s = (t - _userLocation) * (n - targetRect);
    const productOfDese = (e - targetRect) * (i - _userLocation);
    const productPriceD = s - productOfDese;
    const ealtimeData = Math.abs(s + productOfDese);
    if (ealtimeData * 3.3306690738754716e-16 > Math.abs(productPriceD)) {
      return -(function (e, t, n, i, newPoint, __arePointsSame, s) {
        let inimumAllow;
        let _____location;
        let hourOfDay;
        let unclearValue;
        let _placeholder;
        let payload;
        let unknownValue;
        let locationDate;
        let dataProcessor;
        let __gravity;
        let atrix;
        let ______location;
        let tempStorage;
        let webSocket;
        let ____________________________________________event;
        let key;
        let _______location;
        let objectGeospat;
        const coordinateX = e - newPoint;
        const geographicalL = n - newPoint;
        const ituation = t - __arePointsSame;
        const tartDate = i - __arePointsSame;
        webSocket = coordinateX * tartDate;
        payload = _ize * coordinateX;
        unknownValue = payload - (payload - coordinateX);
        locationDate = coordinateX - unknownValue;
        payload = _ize * tartDate;
        dataProcessor = payload - (payload - tartDate);
        __gravity = tartDate - dataProcessor;
        ____________________________________________event =
          locationDate * __gravity -
          (webSocket -
            unknownValue * dataProcessor -
            locationDate * dataProcessor -
            unknownValue * __gravity);
        key = ituation * geographicalL;
        payload = _ize * ituation;
        unknownValue = payload - (payload - ituation);
        locationDate = ituation - unknownValue;
        payload = _ize * geographicalL;
        dataProcessor = payload - (payload - geographicalL);
        __gravity = geographicalL - dataProcessor;
        _______location =
          locationDate * __gravity -
          (key -
            unknownValue * dataProcessor -
            locationDate * dataProcessor -
            unknownValue * __gravity);
        atrix =
          ____________________________________________event - _______location;
        _placeholder =
          ____________________________________________event - atrix;
        ertexNormal[0] =
          ____________________________________________event -
          (atrix + _placeholder) +
          (_placeholder - _______location);
        ______location = webSocket + atrix;
        _placeholder = ______location - webSocket;
        tempStorage =
          webSocket - (______location - _placeholder) + (atrix - _placeholder);
        atrix = tempStorage - key;
        _placeholder = tempStorage - atrix;
        ertexNormal[1] =
          tempStorage - (atrix + _placeholder) + (_placeholder - key);
        objectGeospat = ______location + atrix;
        _placeholder = objectGeospat - ______location;
        ertexNormal[2] =
          ______location -
          (objectGeospat - _placeholder) +
          (atrix - _placeholder);
        ertexNormal[3] = objectGeospat;
        let portfolio = (function (e, t) {
          let n = t[0];
          for (let i = 1; e > i; i++) {
            n += t[i];
          }
          return n;
        })(4, ertexNormal);
        let ________location = calculateTime * s;
        if (portfolio >= ________location || -portfolio >= ________location) {
          return portfolio;
        }
        _placeholder = e - coordinateX;
        inimumAllow =
          e - (coordinateX + _placeholder) + (_placeholder - newPoint);
        _placeholder = n - geographicalL;
        hourOfDay =
          n - (geographicalL + _placeholder) + (_placeholder - newPoint);
        _placeholder = t - ituation;
        _____location =
          t - (ituation + _placeholder) + (_placeholder - __arePointsSame);
        _placeholder = i - tartDate;
        unclearValue =
          i - (tartDate + _placeholder) + (_placeholder - __arePointsSame);
        if (
          inimumAllow === 0 &&
          _____location === 0 &&
          hourOfDay === 0 &&
          unclearValue === 0
        ) {
          return portfolio;
        }
        ________location = numInitialMap * s + naturalLog * Math.abs(portfolio);
        portfolio +=
          coordinateX * unclearValue +
          tartDate * inimumAllow -
          (ituation * hourOfDay + geographicalL * _____location);
        if (portfolio >= ________location || -portfolio >= ________location) {
          return portfolio;
        }
        webSocket = inimumAllow * tartDate;
        payload = _ize * inimumAllow;
        unknownValue = payload - (payload - inimumAllow);
        locationDate = inimumAllow - unknownValue;
        payload = _ize * tartDate;
        dataProcessor = payload - (payload - tartDate);
        __gravity = tartDate - dataProcessor;
        ____________________________________________event =
          locationDate * __gravity -
          (webSocket -
            unknownValue * dataProcessor -
            locationDate * dataProcessor -
            unknownValue * __gravity);
        key = _____location * geographicalL;
        payload = _ize * _____location;
        unknownValue = payload - (payload - _____location);
        locationDate = _____location - unknownValue;
        payload = _ize * geographicalL;
        dataProcessor = payload - (payload - geographicalL);
        __gravity = geographicalL - dataProcessor;
        _______location =
          locationDate * __gravity -
          (key -
            unknownValue * dataProcessor -
            locationDate * dataProcessor -
            unknownValue * __gravity);
        atrix =
          ____________________________________________event - _______location;
        _placeholder =
          ____________________________________________event - atrix;
        getData[0] =
          ____________________________________________event -
          (atrix + _placeholder) +
          (_placeholder - _______location);
        ______location = webSocket + atrix;
        _placeholder = ______location - webSocket;
        tempStorage =
          webSocket - (______location - _placeholder) + (atrix - _placeholder);
        atrix = tempStorage - key;
        _placeholder = tempStorage - atrix;
        getData[1] =
          tempStorage - (atrix + _placeholder) + (_placeholder - key);
        objectGeospat = ______location + atrix;
        _placeholder = objectGeospat - ______location;
        getData[2] =
          ______location -
          (objectGeospat - _placeholder) +
          (atrix - _placeholder);
        getData[3] = objectGeospat;
        const gravitational = ortTogether(
          4,
          ertexNormal,
          4,
          getData,
          domainName,
        );
        webSocket = coordinateX * unclearValue;
        payload = _ize * coordinateX;
        unknownValue = payload - (payload - coordinateX);
        locationDate = coordinateX - unknownValue;
        payload = _ize * unclearValue;
        dataProcessor = payload - (payload - unclearValue);
        __gravity = unclearValue - dataProcessor;
        ____________________________________________event =
          locationDate * __gravity -
          (webSocket -
            unknownValue * dataProcessor -
            locationDate * dataProcessor -
            unknownValue * __gravity);
        key = ituation * hourOfDay;
        payload = _ize * ituation;
        unknownValue = payload - (payload - ituation);
        locationDate = ituation - unknownValue;
        payload = _ize * hourOfDay;
        dataProcessor = payload - (payload - hourOfDay);
        __gravity = hourOfDay - dataProcessor;
        _______location =
          locationDate * __gravity -
          (key -
            unknownValue * dataProcessor -
            locationDate * dataProcessor -
            unknownValue * __gravity);
        atrix =
          ____________________________________________event - _______location;
        _placeholder =
          ____________________________________________event - atrix;
        getData[0] =
          ____________________________________________event -
          (atrix + _placeholder) +
          (_placeholder - _______location);
        ______location = webSocket + atrix;
        _placeholder = ______location - webSocket;
        tempStorage =
          webSocket - (______location - _placeholder) + (atrix - _placeholder);
        atrix = tempStorage - key;
        _placeholder = tempStorage - atrix;
        getData[1] =
          tempStorage - (atrix + _placeholder) + (_placeholder - key);
        objectGeospat = ______location + atrix;
        _placeholder = objectGeospat - ______location;
        getData[2] =
          ______location -
          (objectGeospat - _placeholder) +
          (atrix - _placeholder);
        getData[3] = objectGeospat;
        const conversation = ortTogether(
          gravitational,
          domainName,
          4,
          getData,
          getRealtimeNl,
        );
        webSocket = inimumAllow * unclearValue;
        payload = _ize * inimumAllow;
        unknownValue = payload - (payload - inimumAllow);
        locationDate = inimumAllow - unknownValue;
        payload = _ize * unclearValue;
        dataProcessor = payload - (payload - unclearValue);
        __gravity = unclearValue - dataProcessor;
        ____________________________________________event =
          locationDate * __gravity -
          (webSocket -
            unknownValue * dataProcessor -
            locationDate * dataProcessor -
            unknownValue * __gravity);
        key = _____location * hourOfDay;
        payload = _ize * _____location;
        unknownValue = payload - (payload - _____location);
        locationDate = _____location - unknownValue;
        payload = _ize * hourOfDay;
        dataProcessor = payload - (payload - hourOfDay);
        __gravity = hourOfDay - dataProcessor;
        _______location =
          locationDate * __gravity -
          (key -
            unknownValue * dataProcessor -
            locationDate * dataProcessor -
            unknownValue * __gravity);
        atrix =
          ____________________________________________event - _______location;
        _placeholder =
          ____________________________________________event - atrix;
        getData[0] =
          ____________________________________________event -
          (atrix + _placeholder) +
          (_placeholder - _______location);
        ______location = webSocket + atrix;
        _placeholder = ______location - webSocket;
        tempStorage =
          webSocket - (______location - _placeholder) + (atrix - _placeholder);
        atrix = tempStorage - key;
        _placeholder = tempStorage - atrix;
        getData[1] =
          tempStorage - (atrix + _placeholder) + (_placeholder - key);
        objectGeospat = ______location + atrix;
        _placeholder = objectGeospat - ______location;
        getData[2] =
          ______location -
          (objectGeospat - _placeholder) +
          (atrix - _placeholder);
        getData[3] = objectGeospat;
        const interval = ortTogether(
          conversation,
          getRealtimeNl,
          4,
          getData,
          getUserName,
        );
        return getUserName[interval - 1];
      })(e, t, n, i, targetRect, _userLocation, ealtimeData);
    } else {
      return productPriceD;
    }
  }
  const ______currentTime = (e, t) =>
    !(e.ll.x > t.x) && !(t.x > e.ur.x) && !(e.ll.y > t.y) && !(t.y > e.ur.y);
  const winners = (e, t) => {
    if (
      e.ll.x > t.ur.x ||
      t.ll.x > e.ur.x ||
      e.ll.y > t.ur.y ||
      t.ll.y > e.ur.y
    ) {
      return null;
    }
    return {
      ll: {
        x: t.ll.x > e.ll.x ? t.ll.x : e.ll.x,
        y: t.ll.y > e.ll.y ? t.ll.y : e.ll.y,
      },
      ur: {
        x: t.ur.x > e.ur.x ? e.ur.x : t.ur.x,
        y: t.ur.y > e.ur.y ? e.ur.y : t.ur.y,
      },
    };
  };
  let apContainer = Number.EPSILON;
  if (apContainer === undefined) {
    apContainer = Math.pow(2, -52);
  }
  const knock = apContainer * apContainer;
  const transformData = (e, t) => {
    if (
      e > -apContainer &&
      apContainer > e &&
      t > -apContainer &&
      apContainer > t
    ) {
      return 0;
    }
    const n = e - t;
    if (knock * e * t > n * n) {
      return 0;
    } else if (t > e) {
      return -1;
    } else {
      return 1;
    }
  };
  class logNat {
    constructor() {
      this.tree = new eventMapper();
      this.round(0);
    }
    round(e) {
      const t = this.tree.add(e);
      const n = this.tree.prev(t);
      if (n !== null && transformData(t.key, n.key) === 0) {
        this.tree.remove(e);
        return n.key;
      }
      const i = this.tree.next(t);
      if (i !== null && transformData(t.key, i.key) === 0) {
        this.tree.remove(e);
        return i.key;
      } else {
        return e;
      }
    }
  }
  const apInitialize = new (class {
    constructor() {
      this.reset();
    }
    reset() {
      this.xRounder = new logNat();
      this.yRounder = new logNat();
    }
    round(e, t) {
      return {
        x: this.xRounder.round(e),
        y: this.yRounder.round(t),
      };
    }
  })();
  const __eventTrigger = (e, t) => e.x * t.y - e.y * t.x;
  const nippetsArray = (e, t) => e.x * t.x + e.y * t.y;
  const ____tartIndex = (e, t, n) => {
    const i = calculateEcc(e.x, e.y, t.x, t.y, n.x, n.y);
    if (i > 0) {
      return -1;
    } else if (i < 0) {
      return 1;
    } else {
      return 0;
    }
  };
  const apIndex = (e) => Math.sqrt(nippetsArray(e, e));
  const currentBid = (e, t, n) => {
    const i = {
      x: t.x - e.x,
      y: t.y - e.y,
    };
    const direction = {
      x: n.x - e.x,
      y: n.y - e.y,
    };
    return __eventTrigger(direction, i) / apIndex(direction) / apIndex(i);
  };
  const generateNum = (e, t, n) => {
    const i = {
      x: t.x - e.x,
      y: t.y - e.y,
    };
    const ectorEnToN = {
      x: n.x - e.x,
      y: n.y - e.y,
    };
    return nippetsArray(ectorEnToN, i) / apIndex(ectorEnToN) / apIndex(i);
  };
  const configuration = (e, t, n) =>
    t.y === 0
      ? null
      : {
          x: e.x + (t.x / t.y) * (n - e.y),
          y: n,
        };
  const apStartingId = (e, t, n) =>
    t.x === 0
      ? null
      : {
          x: n,
          y: e.y + (t.y / t.x) * (n - e.x),
        };
  class NodeReference {
    static compare(e, t) {
      const n = NodeReference.comparePoints(e.point, t.point);
      if (n !== 0) {
        return n;
      } else {
        if (e.point !== t.point) {
          e.link(t);
        }
        if (e.isLeft !== t.isLeft) {
          if (e.isLeft) {
            return 1;
          } else {
            return -1;
          }
        } else {
          return isLeftPointTo.compare(e.segment, t.segment);
        }
      }
    }
    static comparePoints(e, t) {
      if (t.x > e.x) {
        return -1;
      } else if (e.x > t.x) {
        return 1;
      } else if (t.y > e.y) {
        return -1;
      } else if (e.y > t.y) {
        return 1;
      } else {
        return 0;
      }
    }
    constructor(e, t) {
      if (e.events === undefined) {
        e.events = [this];
      } else {
        e.events.push(this);
      }
      this.point = e;
      this.isLeft = t;
    }
    link(e) {
      if (e.point === this.point) {
        throw Error("Tried to link already linked events");
      }
      const t = e.point.events;
      for (let e = 0, n = t.length; n > e; e++) {
        const n = t[e];
        this.point.events.push(n);
        n.point = this.point;
      }
      this.checkForConsuming();
    }
    checkForConsuming() {
      const e = this.point.events.length;
      for (let t = 0; e > t; t++) {
        const n = this.point.events[t];
        if (n.segment.consumedBy === undefined) {
          for (let i = t + 1; e > i; i++) {
            const e = this.point.events[i];
            if (e.consumedBy === undefined) {
              if (n.otherSE.point.events === e.otherSE.point.events) {
                n.segment.consume(e.segment);
              }
            }
          }
        }
      }
    }
    getAvailableLinkedEvents() {
      const e = [];
      for (let t = 0, n = this.point.events.length; n > t; t++) {
        const n = this.point.events[t];
        if (n !== this && !n.segment.ringOut && n.segment.isInResult()) {
          e.push(n);
        }
      }
      return e;
    }
    getLeftmostComparator(e) {
      const t = new Map();
      const n = (n) => {
        const i = n.otherSE;
        t.set(n, {
          sine: currentBid(this.point, e.point, i.point),
          cosine: generateNum(this.point, e.point, i.point),
        });
      };
      return (e, i) => {
        if (!t.has(e)) {
          n(e);
        }
        if (!t.has(i)) {
          n(i);
        }
        const { sine: inAngle, cosine: cosineValueAt } = t.get(e);
        const { sine: s, cosine: cosineAngle } = t.get(i);
        if (inAngle < 0 || s < 0) {
          if (inAngle < 0 && s < 0) {
            if (cosineAngle > cosineValueAt) {
              return -1;
            } else if (cosineValueAt > cosineAngle) {
              return 1;
            } else {
              return 0;
            }
          } else if (inAngle > s) {
            return -1;
          } else if (s > inAngle) {
            return 1;
          } else {
            return 0;
          }
        } else if (cosineAngle > cosineValueAt) {
          return 1;
        } else if (cosineValueAt > cosineAngle) {
          return -1;
        } else {
          return 0;
        }
      };
    }
  }
  let inElementsTo = 0;
  class isLeftPointTo {
    static compare(e, t) {
      const n = e.leftSE.point.x;
      const i = t.leftSE.point.x;
      const rightXCoord = e.rightSE.point.x;
      const rightX = t.rightSE.point.x;
      if (n > rightX) {
        return 1;
      }
      if (i > rightXCoord) {
        return -1;
      }
      const s = e.leftSE.point.y;
      const leftRect = t.leftSE.point.y;
      const __boundingBox = e.rightSE.point.y;
      const hourlyData = t.rightSE.point.y;
      if (i > n) {
        if (s > leftRect && __boundingBox > leftRect) {
          return 1;
        }
        if (leftRect > s && leftRect > __boundingBox) {
          return -1;
        }
        const n = e.comparePoint(t.leftSE.point);
        if (n < 0) {
          return 1;
        }
        if (n > 0) {
          return -1;
        }
        const i = t.comparePoint(e.rightSE.point);
        if (i !== 0) {
          return i;
        } else {
          return -1;
        }
      }
      if (n > i) {
        if (leftRect > s && hourlyData > s) {
          return -1;
        }
        if (s > leftRect && s > hourlyData) {
          return 1;
        }
        const n = t.comparePoint(e.leftSE.point);
        if (n !== 0) {
          return n;
        }
        const i = e.comparePoint(t.rightSE.point);
        if (i < 0) {
          return 1;
        } else if (i > 0) {
          return -1;
        } else {
          return 1;
        }
      }
      if (leftRect > s) {
        return -1;
      }
      if (s > leftRect) {
        return 1;
      }
      if (rightX > rightXCoord) {
        const n = t.comparePoint(e.rightSE.point);
        if (n !== 0) {
          return n;
        }
      }
      if (rightXCoord > rightX) {
        const n = e.comparePoint(t.rightSE.point);
        if (n < 0) {
          return 1;
        }
        if (n > 0) {
          return -1;
        }
      }
      if (rightXCoord !== rightX) {
        const e = __boundingBox - s;
        const t = rightXCoord - n;
        const hourlyDiff = hourlyData - leftRect;
        const rightDeltaX = rightX - i;
        if (e > t && rightDeltaX > hourlyDiff) {
          return 1;
        }
        if (t > e && hourlyDiff > rightDeltaX) {
          return -1;
        }
      }
      if (rightXCoord > rightX) {
        return 1;
      } else if (rightX > rightXCoord || hourlyData > __boundingBox) {
        return -1;
      } else if (__boundingBox > hourlyData) {
        return 1;
      } else if (t.id > e.id) {
        return -1;
      } else if (e.id > t.id) {
        return 1;
      } else {
        return 0;
      }
    }
    constructor(e, t, n, i) {
      this.id = ++inElementsTo;
      this.leftSE = e;
      e.segment = this;
      e.otherSE = t;
      this.rightSE = t;
      t.segment = this;
      t.otherSE = e;
      this.rings = n;
      this.windings = i;
    }
    static fromRing(e, t, n) {
      let i;
      let higherPoint;
      let yOffsetMarker;
      const s = NodeReference.comparePoints(e, t);
      if (s < 0) {
        i = e;
        higherPoint = t;
        yOffsetMarker = 1;
      } else {
        if (s <= 0) {
          throw Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);
        }
        i = t;
        higherPoint = e;
        yOffsetMarker = -1;
      }
      const __target = new NodeReference(i, true);
      const eference = new NodeReference(higherPoint, false);
      return new isLeftPointTo(__target, eference, [n], [yOffsetMarker]);
    }
    replaceRightSE(e) {
      this.rightSE = e;
      this.rightSE.segment = this;
      this.rightSE.otherSE = this.leftSE;
      this.leftSE.otherSE = this.rightSE;
    }
    bbox() {
      const e = this.leftSE.point.y;
      const t = this.rightSE.point.y;
      return {
        ll: {
          x: this.leftSE.point.x,
          y: t > e ? e : t,
        },
        ur: {
          x: this.rightSE.point.x,
          y: e > t ? e : t,
        },
      };
    }
    vector() {
      return {
        x: this.rightSE.point.x - this.leftSE.point.x,
        y: this.rightSE.point.y - this.leftSE.point.y,
      };
    }
    isAnEndpoint(e) {
      return (
        (e.x === this.leftSE.point.x && e.y === this.leftSE.point.y) ||
        (e.x === this.rightSE.point.x && e.y === this.rightSE.point.y)
      );
    }
    comparePoint(e) {
      if (this.isAnEndpoint(e)) {
        return 0;
      }
      const t = this.leftSE.point;
      const n = this.rightSE.point;
      const i = this.vector();
      if (t.x === n.x) {
        if (e.x === t.x) {
          return 0;
        } else if (t.x > e.x) {
          return 1;
        } else {
          return -1;
        }
      }
      if (e.x === t.x + ((e.y - t.y) / i.y) * i.x) {
        return 0;
      }
      const esponse = t.y + ((e.x - t.x) / i.x) * i.y;
      if (e.y === esponse) {
        return 0;
      } else if (esponse > e.y) {
        return -1;
      } else {
        return 1;
      }
    }
    getIntersection(e) {
      const t = this.bbox();
      const n = e.bbox();
      const i = winners(t, n);
      if (i === null) {
        return null;
      }
      const leftXCoord = this.leftSE.point;
      const _rightX = this.rightSE.point;
      const s = e.leftSE.point;
      const leftXIntersec = e.rightSE.point;
      const leftX = ______currentTime(t, s) && this.comparePoint(s) === 0;
      const topRightX =
        ______currentTime(n, leftXCoord) && e.comparePoint(leftXCoord) === 0;
      const _currentDate =
        ______currentTime(t, leftXIntersec) &&
        this.comparePoint(leftXIntersec) === 0;
      const _____user =
        ______currentTime(n, _rightX) && e.comparePoint(_rightX) === 0;
      if (topRightX && leftX) {
        if (_____user && !_currentDate) {
          return _rightX;
        } else if (!_____user && _currentDate) {
          return leftXIntersec;
        } else {
          return null;
        }
      }
      if (topRightX) {
        if (
          _currentDate &&
          leftXCoord.x === leftXIntersec.x &&
          leftXCoord.y === leftXIntersec.y
        ) {
          return null;
        } else {
          return leftXCoord;
        }
      }
      if (leftX) {
        if (_____user && _rightX.x === s.x && _rightX.y === s.y) {
          return null;
        } else {
          return s;
        }
      }
      if (_____user && _currentDate) {
        return null;
      }
      if (_____user) {
        return _rightX;
      }
      if (_currentDate) {
        return leftXIntersec;
      }
      const currentPrice = ((e, t, n, i) => {
        if (t.x === 0) {
          return apStartingId(n, i, e.x);
        }
        if (i.x === 0) {
          return apStartingId(e, t, n.x);
        }
        if (t.y === 0) {
          return configuration(n, i, e.y);
        }
        if (i.y === 0) {
          return configuration(e, t, n.y);
        }
        const _______currentTime = __eventTrigger(t, i);
        if (_______currentTime == 0) {
          return null;
        }
        const criteria = {
          x: n.x - e.x,
          y: n.y - e.y,
        };
        const s = __eventTrigger(criteria, t) / _______currentTime;
        const bootstrap = __eventTrigger(criteria, i) / _______currentTime;
        return {
          x: (e.x + bootstrap * t.x + (n.x + s * i.x)) / 2,
          y: (e.y + bootstrap * t.y + (n.y + s * i.y)) / 2,
        };
      })(leftXCoord, this.vector(), s, e.vector());
      if (currentPrice === null) {
        return null;
      } else if (______currentTime(i, currentPrice)) {
        return apInitialize.round(currentPrice.x, currentPrice.y);
      } else {
        return null;
      }
    }
    split(e) {
      const t = [];
      const n = e.events !== undefined;
      const i = new NodeReference(e, true);
      const rightNode = new NodeReference(e, false);
      const currentRightS = this.rightSE;
      this.replaceRightSE(rightNode);
      t.push(rightNode);
      t.push(i);
      const s = new isLeftPointTo(
        i,
        currentRightS,
        this.rings.slice(),
        this.windings.slice(),
      );
      if (NodeReference.comparePoints(s.leftSE.point, s.rightSE.point) > 0) {
        s.swapEvents();
      }
      if (
        NodeReference.comparePoints(this.leftSE.point, this.rightSE.point) > 0
      ) {
        this.swapEvents();
      }
      if (n) {
        i.checkForConsuming();
        rightNode.checkForConsuming();
      }
      return t;
    }
    swapEvents() {
      const e = this.rightSE;
      this.rightSE = this.leftSE;
      this.leftSE = e;
      this.leftSE.isLeft = true;
      this.rightSE.isLeft = false;
      for (let e = 0, t = this.windings.length; t > e; e++) {
        this.windings[e] *= -1;
      }
    }
    consume(e) {
      let t = this;
      let n = e;
      while (t.consumedBy) {
        t = t.consumedBy;
      }
      while (n.consumedBy) {
        n = n.consumedBy;
      }
      const i = isLeftPointTo.compare(t, n);
      if (i !== 0) {
        if (i > 0) {
          const e = t;
          t = n;
          n = e;
        }
        if (t.prev === n) {
          const e = t;
          t = n;
          n = e;
        }
        for (let e = 0, i = n.rings.length; i > e; e++) {
          const i = n.rings[e];
          const numTurns = n.windings[e];
          const ringIndex = t.rings.indexOf(i);
          if (ringIndex === -1) {
            t.rings.push(i);
            t.windings.push(numTurns);
          } else {
            t.windings[ringIndex] += numTurns;
          }
        }
        n.rings = null;
        n.windings = null;
        n.consumedBy = t;
        n.leftSE.consumedBy = t.leftSE;
        n.rightSE.consumedBy = t.rightSE;
      }
    }
    prevInResult() {
      if (this._prevInResult === undefined) {
        if (this.prev) {
          if (this.prev.isInResult()) {
            this._prevInResult = this.prev;
          } else {
            this._prevInResult = this.prev.prevInResult();
          }
        } else {
          this._prevInResult = null;
        }
      }
      return this._prevInResult;
    }
    beforeState() {
      if (this._beforeState !== undefined) {
        return this._beforeState;
      }
      if (this.prev) {
        this._beforeState = (this.prev.consumedBy || this.prev).afterState();
      } else {
        this._beforeState = {
          rings: [],
          windings: [],
          multiPolys: [],
        };
      }
      return this._beforeState;
    }
    afterState() {
      if (this._afterState !== undefined) {
        return this._afterState;
      }
      const e = this.beforeState();
      this._afterState = {
        rings: e.rings.slice(0),
        windings: e.windings.slice(0),
        multiPolys: [],
      };
      const t = this._afterState.rings;
      const n = this._afterState.windings;
      const i = this._afterState.multiPolys;
      for (let e = 0, i = this.rings.length; i > e; e++) {
        const i = this.rings[e];
        const numWindings = this.windings[e];
        const indexOfRing = t.indexOf(i);
        if (indexOfRing === -1) {
          t.push(i);
          n.push(numWindings);
        } else {
          n[indexOfRing] += numWindings;
        }
      }
      const ringRadius = [];
      const ____currentState = [];
      for (let e = 0, i = t.length; i > e; e++) {
        if (n[e] === 0) {
          continue;
        }
        const i = t[e];
        const s = i.poly;
        if (____currentState.indexOf(s) === -1) {
          if (i.isExterior) {
            ringRadius.push(s);
          } else {
            if (____currentState.indexOf(s) === -1) {
              ____currentState.push(s);
            }
            const e = ringRadius.indexOf(i.poly);
            if (e !== -1) {
              ringRadius.splice(e, 1);
            }
          }
        }
      }
      for (let e = 0, t = ringRadius.length; t > e; e++) {
        const t = ringRadius[e].multiPoly;
        if (i.indexOf(t) === -1) {
          i.push(t);
        }
      }
      return this._afterState;
    }
    isInResult() {
      if (this.consumedBy) {
        return false;
      }
      if (this._isInResult !== undefined) {
        return this._isInResult;
      }
      const e = this.beforeState().multiPolys;
      const t = this.afterState().multiPolys;
      switch (_processEvent.type) {
        case "union":
          this._isInResult = (e.length === 0) !== (t.length === 0);
          break;
        case "intersection": {
          let n;
          let i;
          if (t.length > e.length) {
            n = e.length;
            i = t.length;
          } else {
            n = t.length;
            i = e.length;
          }
          this._isInResult = i === _processEvent.numMultiPolys && i > n;
          break;
        }
        case "xor":
          this._isInResult = Math.abs(e.length - t.length) % 2 == 1;
          break;
        case "difference": {
          const n = (e) => e.length === 1 && e[0].isSubject;
          this._isInResult = n(e) !== n(t);
          break;
        }
        default:
          throw Error(
            "Unrecognized operation type found " + _processEvent.type,
          );
      }
      return this._isInResult;
    }
  }
  class __coordinate {
    constructor(e, t, n) {
      if (!Array.isArray(e) || e.length === 0) {
        throw Error("Input geometry is not a valid Polygon or MultiPolygon");
      }
      this.poly = t;
      this.isExterior = n;
      this.segments = [];
      if (typeof e[0][0] != "number" || typeof e[0][1] != "number") {
        throw Error("Input geometry is not a valid Polygon or MultiPolygon");
      }
      const i = apInitialize.round(e[0][0], e[0][1]);
      this.bbox = {
        ll: {
          x: i.x,
          y: i.y,
        },
        ur: {
          x: i.x,
          y: i.y,
        },
      };
      let inputGeometry = i;
      for (let t = 1, n = e.length; n > t; t++) {
        if (typeof e[t][0] != "number" || typeof e[t][1] != "number") {
          throw Error("Input geometry is not a valid Polygon or MultiPolygon");
        }
        let n = apInitialize.round(e[t][0], e[t][1]);
        if (n.x !== inputGeometry.x || n.y !== inputGeometry.y) {
          this.segments.push(isLeftPointTo.fromRing(inputGeometry, n, this));
          if (this.bbox.ll.x > n.x) {
            this.bbox.ll.x = n.x;
          }
          if (this.bbox.ll.y > n.y) {
            this.bbox.ll.y = n.y;
          }
          if (n.x > this.bbox.ur.x) {
            this.bbox.ur.x = n.x;
          }
          if (n.y > this.bbox.ur.y) {
            this.bbox.ur.y = n.y;
          }
          inputGeometry = n;
        }
      }
      if (i.x !== inputGeometry.x || i.y !== inputGeometry.y) {
        this.segments.push(isLeftPointTo.fromRing(inputGeometry, i, this));
      }
    }
    getSweepEvents() {
      const e = [];
      for (let t = 0, n = this.segments.length; n > t; t++) {
        const n = this.segments[t];
        e.push(n.leftSE);
        e.push(n.rightSE);
      }
      return e;
    }
  }
  class geometryShape {
    constructor(e, t) {
      if (!Array.isArray(e)) {
        throw Error("Input geometry is not a valid Polygon or MultiPolygon");
      }
      this.exteriorRing = new __coordinate(e[0], this, true);
      this.bbox = {
        ll: {
          x: this.exteriorRing.bbox.ll.x,
          y: this.exteriorRing.bbox.ll.y,
        },
        ur: {
          x: this.exteriorRing.bbox.ur.x,
          y: this.exteriorRing.bbox.ur.y,
        },
      };
      this.interiorRings = [];
      for (let t = 1, n = e.length; n > t; t++) {
        const n = new __coordinate(e[t], this, false);
        if (this.bbox.ll.x > n.bbox.ll.x) {
          this.bbox.ll.x = n.bbox.ll.x;
        }
        if (this.bbox.ll.y > n.bbox.ll.y) {
          this.bbox.ll.y = n.bbox.ll.y;
        }
        if (n.bbox.ur.x > this.bbox.ur.x) {
          this.bbox.ur.x = n.bbox.ur.x;
        }
        if (n.bbox.ur.y > this.bbox.ur.y) {
          this.bbox.ur.y = n.bbox.ur.y;
        }
        this.interiorRings.push(n);
      }
      this.multiPoly = t;
    }
    getSweepEvents() {
      const e = this.exteriorRing.getSweepEvents();
      for (let t = 0, n = this.interiorRings.length; n > t; t++) {
        const n = this.interiorRings[t].getSweepEvents();
        for (let t = 0, i = n.length; i > t; t++) {
          e.push(n[t]);
        }
      }
      return e;
    }
  }
  class _geometryShape {
    constructor(e, t) {
      if (!Array.isArray(e)) {
        throw Error("Input geometry is not a valid Polygon or MultiPolygon");
      }
      try {
        if (typeof e[0][0][0] == "number") {
          e = [e];
        }
      } catch (e) {}
      this.polys = [];
      this.bbox = {
        ll: {
          x: Infinity,
          y: Infinity,
        },
        ur: {
          x: -Infinity,
          y: -Infinity,
        },
      };
      for (let t = 0, n = e.length; n > t; t++) {
        const n = new geometryShape(e[t], this);
        if (this.bbox.ll.x > n.bbox.ll.x) {
          this.bbox.ll.x = n.bbox.ll.x;
        }
        if (this.bbox.ll.y > n.bbox.ll.y) {
          this.bbox.ll.y = n.bbox.ll.y;
        }
        if (n.bbox.ur.x > this.bbox.ur.x) {
          this.bbox.ur.x = n.bbox.ur.x;
        }
        if (n.bbox.ur.y > this.bbox.ur.y) {
          this.bbox.ur.y = n.bbox.ur.y;
        }
        this.polys.push(n);
      }
      this.isSubject = t;
    }
    getSweepEvents() {
      const e = [];
      for (let t = 0, n = this.polys.length; n > t; t++) {
        const n = this.polys[t].getSweepEvents();
        for (let t = 0, i = n.length; i > t; t++) {
          e.push(n[t]);
        }
      }
      return e;
    }
  }
  class wnFactory {
    static factory(e) {
      const t = [];
      for (let n = 0, i = e.length; i > n; n++) {
        const i = e[n];
        if (!i.isInResult() || i.ringOut) {
          continue;
        }
        let _eference = null;
        let leftOperand = i.leftSE;
        let s = i.rightSE;
        const expressionTrc = [leftOperand];
        const _operand = leftOperand.point;
        const _hour = [];
        _eference = leftOperand;
        leftOperand = s;
        expressionTrc.push(leftOperand);
        while (leftOperand.point !== _operand) {
          while (true) {
            const e = leftOperand.getAvailableLinkedEvents();
            if (e.length === 0) {
              const e = expressionTrc[0].point;
              const t = expressionTrc[expressionTrc.length - 1].point;
              throw Error(
                `Unable to complete output ring starting at [${e.x}, ${e.y}]. Last matching segment found ends at [${t.x}, ${t.y}].`,
              );
            }
            if (e.length === 1) {
              s = e[0].otherSE;
              break;
            }
            let n = null;
            for (let e = 0, t = _hour.length; t > e; e++) {
              if (_hour[e].point === leftOperand.point) {
                n = e;
                break;
              }
            }
            if (n !== null) {
              const e = _hour.splice(n)[0];
              const i = expressionTrc.splice(e.index);
              i.unshift(i[0].otherSE);
              t.push(new wnFactory(i.reverse()));
              continue;
            }
            _hour.push({
              index: expressionTrc.length,
              point: leftOperand.point,
            });
            const i = leftOperand.getLeftmostComparator(_eference);
            s = e.sort(i)[0].otherSE;
            break;
          }
        }
        t.push(new wnFactory(expressionTrc));
      }
      return t;
    }
    constructor(e) {
      this.events = e;
      for (let t = 0, n = e.length; n > t; t++) {
        e[t].segment.ringOut = this;
      }
      this.poly = null;
    }
    getGeom() {
      let e = this.events[0].point;
      const t = [e];
      for (let n = 1, i = this.events.length - 1; i > n; n++) {
        const i = this.events[n].point;
        if (____tartIndex(i, e, this.events[n + 1].point) !== 0) {
          t.push(i);
          e = i;
        }
      }
      if (t.length === 1) {
        return null;
      }
      if (____tartIndex(t[0], e, t[1]) === 0) {
        t.shift();
      }
      t.push(t[0]);
      const n = this.isExteriorRing() ? 1 : -1;
      const i = this.isExteriorRing() ? 0 : t.length - 1;
      const _______________radius = this.isExteriorRing() ? t.length : -1;
      const __point = [];
      for (let e = i; e != _______________radius; e += n) {
        __point.push([t[e].x, t[e].y]);
      }
      return __point;
    }
    isExteriorRing() {
      if (this._isExteriorRing === undefined) {
        const e = this.enclosingRing();
        this._isExteriorRing = !e || !e.isExteriorRing();
      }
      return this._isExteriorRing;
    }
    enclosingRing() {
      if (this._enclosingRing === undefined) {
        this._enclosingRing = this._calcEnclosingRing();
      }
      return this._enclosingRing;
    }
    _calcEnclosingRing() {
      let e = this.events[0];
      for (let t = 1, n = this.events.length; n > t; t++) {
        const n = this.events[t];
        if (NodeReference.compare(e, n) > 0) {
          e = n;
        }
      }
      let t = e.segment.prevInResult();
      let n = t ? t.prevInResult() : null;
      while (true) {
        if (!t) {
          return null;
        }
        if (!n) {
          return t.ringOut;
        }
        if (n.ringOut !== t.ringOut) {
          if (n.ringOut.enclosingRing() !== t.ringOut) {
            return t.ringOut;
          } else {
            return t.ringOut.enclosingRing();
          }
        }
        t = n.prevInResult();
        if (t) {
          n = t.prevInResult();
        } else {
          n = null;
        }
      }
    }
  }
  class _polygon {
    constructor(e) {
      this.exteriorRing = e;
      e.poly = this;
      this.interiorRings = [];
    }
    addInterior(e) {
      this.interiorRings.push(e);
      e.poly = this;
    }
    getGeom() {
      const e = [this.exteriorRing.getGeom()];
      if (e[0] === null) {
        return null;
      }
      for (let t = 0, n = this.interiorRings.length; n > t; t++) {
        const n = this.interiorRings[t].getGeom();
        if (n !== null) {
          e.push(n);
        }
      }
      return e;
    }
  }
  class ringGeometry {
    constructor(e) {
      this.rings = e;
      this.polys = this._composePolys(e);
    }
    getGeom() {
      const e = [];
      for (let t = 0, n = this.polys.length; n > t; t++) {
        const n = this.polys[t].getGeom();
        if (n !== null) {
          e.push(n);
        }
      }
      return e;
    }
    _composePolys(e) {
      const t = [];
      for (let n = 0, i = e.length; i > n; n++) {
        const i = e[n];
        if (!i.poly) {
          if (i.isExteriorRing()) {
            t.push(new _polygon(i));
          } else {
            const e = i.enclosingRing();
            if (!e.poly) {
              t.push(new _polygon(e));
            }
            e.poly.addInterior(i);
          }
        }
      }
      return t;
    }
  }
  class RealTimeDataP {
    constructor(e, t = isLeftPointTo.compare) {
      this.queue = e;
      this.tree = new eventMapper(t);
      this.segments = [];
    }
    process(e) {
      const t = e.segment;
      const n = [];
      if (e.consumedBy) {
        if (e.isLeft) {
          this.queue.remove(e.otherSE);
        } else {
          this.tree.remove(t);
        }
        return n;
      }
      const i = e.isLeft ? this.tree.add(t) : this.tree.find(t);
      if (!i) {
        throw Error(
          `Unable to find segment #${t.id} [${t.leftSE.point.x}, ${t.leftSE.point.y}] -> [${t.rightSE.point.x}, ${t.rightSE.point.y}] in SweepLine tree.`,
        );
      }
      let _____________________________________________event;
      let __options;
      let s = i;
      let egment = i;
      while (_____________________________________________event === undefined) {
        s = this.tree.prev(s);
        if (s === null) {
          _____________________________________________event = null;
        } else if (s.key.consumedBy === undefined) {
          _____________________________________________event = s.key;
        }
      }
      while (__options === undefined) {
        egment = this.tree.next(egment);
        if (egment === null) {
          __options = null;
        } else if (egment.key.consumedBy === undefined) {
          __options = egment.key;
        }
      }
      if (e.isLeft) {
        let i = null;
        if (_____________________________________________event) {
          const e =
            _____________________________________________event.getIntersection(
              t,
            );
          if (
            e !== null &&
            (t.isAnEndpoint(e) || (i = e),
            !_____________________________________________event.isAnEndpoint(e))
          ) {
            const t = this._splitSafely(
              _____________________________________________event,
              e,
            );
            for (let e = 0, i = t.length; i > e; e++) {
              n.push(t[e]);
            }
          }
        }
        let s = null;
        if (__options) {
          const e = __options.getIntersection(t);
          if (
            e !== null &&
            (t.isAnEndpoint(e) || (s = e), !__options.isAnEndpoint(e))
          ) {
            const t = this._splitSafely(__options, e);
            for (let e = 0, i = t.length; i > e; e++) {
              n.push(t[e]);
            }
          }
        }
        if (i !== null || s !== null) {
          let e = null;
          if (i === null) {
            e = s;
          } else if (s === null) {
            e = i;
          } else {
            if (NodeReference.comparePoints(i, s) > 0) {
              e = s;
            } else {
              e = i;
            }
          }
          this.queue.remove(t.rightSE);
          n.push(t.rightSE);
          const _esponse = t.split(e);
          for (let e = 0, t = _esponse.length; t > e; e++) {
            n.push(_esponse[e]);
          }
        }
        if (n.length > 0) {
          this.tree.remove(t);
          n.push(e);
        } else {
          this.segments.push(t);
          t.prev = _____________________________________________event;
        }
      } else {
        if (_____________________________________________event && __options) {
          const e =
            _____________________________________________event.getIntersection(
              __options,
            );
          if (e !== null) {
            if (
              !_____________________________________________event.isAnEndpoint(
                e,
              )
            ) {
              const t = this._splitSafely(
                _____________________________________________event,
                e,
              );
              for (let e = 0, i = t.length; i > e; e++) {
                n.push(t[e]);
              }
            }
            if (!__options.isAnEndpoint(e)) {
              const t = this._splitSafely(__options, e);
              for (let e = 0, i = t.length; i > e; e++) {
                n.push(t[e]);
              }
            }
          }
        }
        this.tree.remove(t);
      }
      return n;
    }
    _splitSafely(e, t) {
      this.tree.remove(e);
      const n = e.rightSE;
      this.queue.remove(n);
      const i = e.split(t);
      i.push(n);
      if (e.consumedBy === undefined) {
        this.tree.add(e);
      }
      return i;
    }
  }
  const isNegative =
    (typeof process != "undefined" &&
      process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE) ||
    1000000;
  const __eventHandler =
    (typeof process != "undefined" &&
      process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS) ||
    1000000;
  const _processEvent = new (class {
    run(e, t, n) {
      _processEvent.type = e;
      apInitialize.reset();
      const i = [new _geometryShape(t, true)];
      for (let e = 0, t = n.length; t > e; e++) {
        i.push(new _geometryShape(n[e], false));
      }
      _processEvent.numMultiPolys = i.length;
      if (_processEvent.type === "difference") {
        const e = i[0];
        let t = 1;
        while (i.length > t) {
          if (winners(i[t].bbox, e.bbox) !== null) {
            t++;
          } else {
            i.splice(t, 1);
          }
        }
      }
      if (_processEvent.type === "intersection") {
        for (let e = 0, t = i.length; t > e; e++) {
          const t = i[e];
          for (let n = e + 1, arrayLength = i.length; arrayLength > n; n++) {
            if (winners(t.bbox, i[n].bbox) === null) {
              return [];
            }
          }
        }
      }
      const ___ealTimeData = new eventMapper(NodeReference.compare);
      for (let e = 0, t = i.length; t > e; e++) {
        const t = i[e].getSweepEvents();
        for (let e = 0, n = t.length; n > e; e++) {
          ___ealTimeData.insert(t[e]);
          if (___ealTimeData.size > isNegative) {
            throw Error(
              "Infinite loop when putting segment endpoints in a priority queue (queue size too big).",
            );
          }
        }
      }
      const organisation = new RealTimeDataP(___ealTimeData);
      let s = ___ealTimeData.size;
      let ___eventType = ___ealTimeData.pop();
      while (___eventType) {
        const e = ___eventType.key;
        if (___ealTimeData.size === s) {
          const t = e.segment;
          throw Error(
            `Unable to pop() ${e.isLeft ? "left" : "right"} SweepEvent [${e.point.x}, ${e.point.y}] from segment #${t.id} [${t.leftSE.point.x}, ${t.leftSE.point.y}] -> [${t.rightSE.point.x}, ${t.rightSE.point.y}] from queue.`,
          );
        }
        if (___ealTimeData.size > isNegative) {
          throw Error(
            "Infinite loop when passing sweep line over endpoints (queue size too big).",
          );
        }
        if (organisation.segments.length > __eventHandler) {
          throw Error(
            "Infinite loop when passing sweep line over endpoints (too many sweep line segments).",
          );
        }
        const t = organisation.process(e);
        for (let e = 0, n = t.length; n > e; e++) {
          const n = t[e];
          if (n.consumedBy === undefined) {
            ___ealTimeData.insert(n);
          }
        }
        s = ___ealTimeData.size;
        ___eventType = ___ealTimeData.pop();
      }
      apInitialize.reset();
      const _______latitude = wnFactory.factory(organisation.segments);
      return new ringGeometry(_______latitude).getGeom();
    }
  })();
  function aggregateArgs(e) {
    for (
      var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
      t > i;
      i++
    ) {
      n[i - 1] = arguments[i];
    }
    return _processEvent.run("union", e, n);
  }
  function __processEvent(e) {
    for (
      var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
      t > i;
      i++
    ) {
      n[i - 1] = arguments[i];
    }
    return _processEvent.run("difference", e, n);
  }
  function calculateGeos(e, t, n = {}) {
    var i = getFeatureGeo(e);
    var featureTGeoco = getFeatureGeo(t);
    var combinedGeoCo = aggregateArgs(i.coordinates, featureTGeoco.coordinates);
    if (combinedGeoCo.length === 0) {
      return null;
    } else if (combinedGeoCo.length === 1) {
      return validateMinXY(combinedGeoCo[0], n.properties);
    } else {
      return createGeoFea(combinedGeoCo, n.properties);
    }
  }
  var knappTime = {
    getLineCenter(e, t) {
      if (e instanceof BMapGL.Point && t instanceof BMapGL.Point) {
        e = validateInput([e.lng, e.lat]);
        t = validateInput([t.lng, t.lat]);
      }
      var n = (function (e, t) {
        return calculateGeod(e, calculateHav(e, t) / 2, getBearing(e, t));
      })(e, t);
      return {
        geoCenter: n,
        bdCenter: new BMapGL.Point(
          n.geometry.coordinates[0],
          n.geometry.coordinates[1],
        ),
      };
    },
    getDistance(e, t, n = "kilometers") {
      if (e instanceof BMapGL.Point && t instanceof BMapGL.Point) {
        e = validateInput([e.lng, e.lat]);
        t = validateInput([t.lng, t.lat]);
      }
      return calculateHav(e, t, {
        units: n,
      });
    },
    getLength(e) {
      var t;
      if (
        (t = {
          units:
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : "kilometers",
        }) === undefined
      ) {
        t = {};
      }
      return geosynProcess(
        e,
        function (e, n) {
          var i = n.geometry.coordinates;
          return e + calculateHav(i[0], i[1], t);
        },
        0,
      );
    },
    getPolygonCenter(e) {
      var t = (function (e, t = {}) {
        var n = 0;
        var i = 0;
        var processedData = 0;
        evaluate(
          e,
          function (e) {
            n += e[0];
            i += e[1];
            processedData++;
          },
          true,
        );
        return validateInput(
          [n / processedData, i / processedData],
          t.properties,
        );
      })(e);
      return {
        geoCenter: t,
        bdCenter: new BMapGL.Point(
          t.geometry.coordinates[0],
          t.geometry.coordinates[1],
        ),
      };
    },
    getPolygonArea(e) {
      if (e instanceof BMapGL.Polygon) {
        e = e.toGeoJSON();
      }
      return geographicAnl(e) / 1000000;
    },
    unionPolygon(e) {
      var t = e[0];
      for (var n = 0, i = e.length; i > n; n++) {
        t = calculateGeos(t, e[n]);
      }
      return t;
    },
    isDisjoint(e, t) {
      return !__calculateGeod(e, t);
    },
    intersect(e, t) {
      var n = [];
      if (t.__proto__ instanceof BMapGL.Overlay) {
        if (!t.toGeoJSON) {
          return n;
        }
        t = t.toGeoJSON();
      }
      e.forEach(function (e) {
        var i = e;
        if (e.__proto__ instanceof BMapGL.Overlay) {
          if (!e.toGeoJSON) {
            return true;
          }
          i = e.toGeoJSON();
        }
        if (knappTime.isDisjoint(i, t)) {
          n.push(e);
        }
      });
      return n;
    },
    isContains(e, t) {
      return compareGeoloc(e, t);
    },
    isPointOnLine(
      e,
      t,
      n = {
        ignoreEndVertices: false,
      },
    ) {
      if (e instanceof BMapGL.Point) {
        e = e.toGeoJSON();
      }
      if (t instanceof BMapGL.Polyline) {
        t = t.toGeoJSON();
      }
      return __parseLocation(e, t, n);
    },
    isPointInPolygon(
      e,
      t,
      n = {
        ignoreBoundary: true,
      },
    ) {
      if (e instanceof BMapGL.Point) {
        e = e.toGeoJSON();
      }
      if (t instanceof BMapGL.Polygon) {
        t = t.toGeoJSON();
      }
      return calculateOe(e, t, n);
    },
    getDistance2Lines(e, t) {
      return calculateVoye(validateInput([e.lng, e.lat]), createLine(t));
    },
    getNearestPointOnLine(e, t, n = "kilometers") {
      var i = validateInput([e.lng, e.lat]);
      var ____coordinates = [];
      if (t.geometry.type === "Polygon") {
        ____coordinates = t.geometry.coordinates[0];
      } else if (t.geometry.type === "LineString") {
        ____coordinates = t.geometry.coordinates;
      }
      if (____coordinates.length < 2) {
        return {
          toLineDistance: Infinity,
        };
      }
      var inputResult = geoCalculator(createLine(____coordinates), i, n);
      var s = new BMapGL.Point(
        inputResult.geometry.coordinates[0],
        inputResult.geometry.coordinates[1],
      );
      return {
        geoPoint: i,
        geoNearestPoint: inputResult,
        toLineDistance: calculateHav(i, inputResult),
        bdNearestPoint: s,
      };
    },
  };
  var zincAmount = (function (e) {
    function t(e) {
      var ___esult;
      isValidObject(this, t);
      (___esult = n(this, t)).point = undefined;
      ___esult.overlay = undefined;
      ___esult.map = e;
      return ___esult;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "confirmOperate",
        value() {
          var e = "" + this.overlay;
          if (e === "Polyline" || e === "Polygon") {
            this.overlay.disableEditing();
          } else if (e === "Marker") {
            this.overlay.disableDragging();
          }
          this.dispatchEvent(new currentTime("ok", this.overlay));
        },
      },
      {
        key: "cancelOperate",
        value() {
          this.dispatchEvent(new currentTime("cancel", this.overlay));
        },
      },
      {
        key: "setPosition",
        value(e, t) {
          this.point = e;
          var n = this.map.pointToOverlayPixel(this.point);
          if (t) {
            this.div.classList.remove("operateLeft");
            this.div.style.left = n.x + 15 + "px";
          } else {
            this.div.classList.add("operateLeft");
            this.div.style.left = n.x - 105 + "px";
          }
          this.div.style.top = n.y - 16 + "px";
        },
      },
      {
        key: "draw",
        value() {
          var e = this.map.pointToOverlayPixel(this.point);
          this.div.style.left = e.x + 15 + "px";
          this.div.style.top = e.y - 16 + "px";
        },
      },
      {
        key: "calculateOverlay",
        value() {
          var e = {
            data: 0,
          };
          switch ("" + this.overlay) {
            case "Polyline":
              e.data = knappTime.getLength(this.overlay.toGeoJSON()) * 1000;
              break;
            case "Polygon":
              e.data = knappTime.getPolygonArea(this.overlay) * 1000000;
              break;
            case "Circle":
              var t = this.overlay.getRadius();
              e.data = Math.PI * t * t;
          }
          if (!e.data || e.data < 0) {
            e.data = 0;
          } else {
            e.data = e.data.toFixed(2);
          }
          return e;
        },
      },
    ]);
  })(esultAlias(BMapGL.Overlay, ____initializeMap));
  var apCenter = (function (e) {
    function t(e, _____currentState) {
      var esultObject;
      var s =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      isValidObject(this, t);
      (esultObject = n(this, t, [e])).noLimit = false;
      esultObject.overlayTypeText = undefined;
      esultObject.limit = undefined;
      esultObject.element = _____currentState;
      if (s.noLimit) {
        esultObject.noLimit = !!s.noLimit;
      }
      return esultObject;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "setData",
        value(e) {
          for (var t in e) {
            if (e.hasOwnProperty(t)) {
              this[t] = e[t];
            }
          }
          this.type = "" + this.overlay;
          if (this.type === "Marker") {
            this.overlayTypeText = "可以拖动图标改变位置";
            if (this.type === "Polyline") {
              this.unit = "万米";
            } else {
              this.unit = "万平方米";
            }
          } else {
            if (this.type === "Polyline") {
              this.overlayTypeText =
                "长度不超过" + (this.limit || 10000000000) / 10000 + "万米！";
            } else {
              this.overlayTypeText =
                "面积不超过" +
                (this.limit || 10000000000) / 10000 +
                "万平方米！";
            }
          }
        },
      },
      {
        key: "initialize",
        value(e) {
          var t;
          if (this.element) {
            (t = this.div = this.element).className = "operateWindow";
          } else {
            (t = this.div = document.createElement("div")).className =
              "operateWindow";
            t.innerHTML = `<div class="containerbox">
                <span id="confirmOperate"></span>
                <span id="cancelOperate"></span>
                <span id="warnOperate">${this.overlayTypeText}</span>
                </div>`;
          }
          e.getPanes().markerPane.appendChild(this.div);
          this.bind();
          this.updateWindow();
          return t;
        },
      },
      {
        key: "bind",
        value() {
          var e = this;
          if (this.element) {
            throw {
              errMsg: "自定义operate必须重写bind方法",
            };
          }
          document
            .getElementById("confirmOperate")
            .addEventListener("click", function (t) {
              var n = e.calculateOverlay();
              e.overlay.geometryCalculate = n;
              e.confirmOperate();
            });
          document
            .getElementById("cancelOperate")
            .addEventListener("click", function (t) {
              e.cancelOperate();
            });
        },
      },
      {
        key: "updateWindow",
        value() {
          if (this.element) {
            throw {
              errMsg: "自定义operate必须重写updateWindow方法",
            };
          }
          var e = this.limit || 10000000;
          var t = this.calculateOverlay();
          if (document.getElementById("confirmOperate")) {
            if (t.data > ~~e && !this.noLimit) {
              document.getElementById("confirmOperate").style.display = "none";
              document.getElementById("warnOperate").style.display = "block";
            } else {
              document.getElementById("confirmOperate").style.display = "block";
              document.getElementById("warnOperate").style.display = "none";
            }
          }
        },
      },
    ]);
  })(zincAmount);
  var _elementIndex = (function (e) {
    function t(e, getRealTimeIn) {
      var apSettings;
      isValidObject(this, t);
      (apSettings = n(this, t))._enableEdgeMove = false;
      apSettings.cursor = "crosshair";
      apSettings.container = undefined;
      apSettings.map = e;
      if (getRealTimeIn) {
        apSettings.cursor = getRealTimeIn;
      }
      return apSettings;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "initialize",
        value(e) {
          var t = this;
          this.dispose();
          var n = e.getSize();
          var i = (this.container = document.createElement("div"));
          i.style.cssText = `position:absolute;background:transparent;
            cursor:${this.cursor};width:${n.width}px;height:${n.height}px`;
          e.addEventListener("resize", function (e) {
            t.adjustSize(e.size);
          });
          e.getPanes().floatPane.appendChild(i);
          this.bindEvent();
          return i;
        },
      },
      {
        key: "draw",
        value() {
          var e = this.map.pixelToPoint(new BMapGL.Pixel(0, 0));
          var t = this.map.pointToOverlayPixel(e);
          this.container.style.left = t.x + "px";
          this.container.style.top = t.y + "px";
        },
      },
      {
        key: "setCursor",
        value(e) {
          this.cursor = e;
          if (this.container) {
            this.container.style.cursor = e;
          }
        },
      },
      {
        key: "adjustSize",
        value(e) {
          this.container.style.width = e.width + "px";
          this.container.style.height = e.height + "px";
        },
      },
      {
        key: "bindEvent",
        value() {
          var e = this;
          var t = null;
          for (
            var n = null,
              i = function (e) {
                return {
                  x: e.clientX,
                  y: e.clientY,
                };
              },
              _ouseEvent = function (totalExceptT1) {
                var objectType = totalExceptT1.type;
                var s = e.getDrawLatlngPoint(totalExceptT1);
                function updateAndSend(t) {
                  totalExceptT1.point = s;
                  e.dispatchEvent(totalExceptT1);
                }
                if (objectType === "mousedown") {
                  t = i(totalExceptT1);
                }
                var _targetObject = i(totalExceptT1);
                if (objectType === "click") {
                  if (
                    Math.abs(_targetObject.x - t.x) < 5 &&
                    Math.abs(_targetObject.y - t.y) < 5
                  ) {
                    if (
                      n &&
                      Math.abs(_targetObject.x - n.x) < 5 &&
                      Math.abs(_targetObject.y - n.y) < 5
                    ) {
                      n = null;
                    } else {
                      updateAndSend();
                      n = i(totalExceptT1);
                    }
                  }
                } else {
                  updateAndSend();
                }
              },
              ________currentTime = [
                "click",
                "mousedown",
                "mousemove",
                "mouseup",
                "dblclick",
                "rightclick",
              ],
              s = ________currentTime.length;
            s--;

          ) {
            _tartIndex.on(
              this.container,
              ________currentTime[s],
              _ouseEvent,
              this._listeners,
            );
          }
          _tartIndex.on(
            this.container,
            "mousemove",
            function (t) {
              if (e._enableEdgeMove) {
                e.mousemoveAction(t);
              }
            },
            this._listeners,
          );
        },
      },
      {
        key: "mousemoveAction",
        value(e) {
          var t = this;
          var n = this.map.pointToPixel(this.getDrawLatlngPoint(e));
          var i = (function (e) {
            var t = e.clientX;
            var n = e.clientY;
            if (e.changedTouches) {
              t = e.changedTouches[0].clientX;
              n = e.changedTouches[0].clientY;
            }
            return new BMapGL.Pixel(t, n);
          })(e);
          n = new BMapGL.Pixel(i.x - (i.x - n.x), i.y - (i.y - n.y));
          this.draggingMovePixel = n;
          this.panByX = this.panByY = 0;
          if (
            (n.x >= 4 && n.x <= 20) ||
            (n.x >= this.map.width - 20 && this.map.width - 4 >= n.x) ||
            (n.y >= 4 && n.y <= 50) ||
            (n.y >= this.map.height - 10 && this.map.height - 4 >= n.y)
          ) {
            if (n.x > 20) {
              if (!(this.map.width - 20 > n.x)) {
                this.panByX = -8;
              }
            } else {
              this.panByX = 8;
            }
            if (n.y > 50) {
              if (!(this.map.height - 10 > n.y)) {
                this.panByY = -8;
              }
            } else {
              this.panByY = 8;
            }
            this.edgeMoveTimer ||= setInterval(function () {
              t.map.panBy(t.panByX, t.panByY, {
                noAnimation: true,
              });
            }, 30);
          } else if (this.edgeMoveTimer) {
            clearInterval(this.edgeMoveTimer);
            this.edgeMoveTimer = null;
          }
        },
      },
      {
        key: "getDrawLatlngPoint",
        value(e) {
          var t = _tartIndex.getTarget(e);
          var n = e.offsetX || e.layerX || 0;
          var i = e.offsetY || e.layerY || 0;
          for (
            t.nodeType !== 1 && (t = t.parentNode);
            t && t !== this.map.getContainer();

          ) {
            if (
              t.clientWidth !== 0 ||
              t.clientHeight !== 0 ||
              !t.offsetParent ||
              t.offsetParent.nodeName !== "TD"
            ) {
              n += t.offsetLeft || 0;
              i += t.offsetTop || 0;
            }
            t = t.offsetParent;
          }
          var timeRange = new BMapGL.Pixel(n, i);
          return this.map.pixelToPoint(timeRange);
        },
      },
      {
        key: "enableEdgeMove",
        value() {
          this._enableEdgeMove = true;
        },
      },
      {
        key: "disableEdgeMove",
        value() {
          clearInterval(this.edgeMoveTimer);
          this._enableEdgeMove = false;
        },
      },
    ]);
  })(esultAlias(BMapGL.Overlay, ____initializeMap));
  var errorInstance = (function (e) {
    function t(e) {
      var ______currentState;
      var processEntity =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      isValidObject(this, t);
      (______currentState = n(this, t)).isOpen = undefined;
      ______currentState.drawType = undefined;
      ______currentState.instances = [];
      ______currentState.selectInstance = [];
      ______currentState.mask = undefined;
      ______currentState.map = undefined;
      ______currentState.operate = undefined;
      ______currentState._currentStatus = _initializeMap.STATUS_FREE;
      ______currentState._runningAction = null;
      ______currentState._stopClick = false;
      ______currentState.noLimit = false;
      if (!(e instanceof BMapGL.Map)) {
        throw Error("Scene实例化必须输入map参数");
      }
      if (e._printLog) {
        e._printLog("bmapdraw");
      }
      ______currentState.options = {};
      _tartIndex.deepCopy(eventsData, 2, ______currentState.options, 0, [
        apCenter,
      ]);
      _tartIndex.copyOptions(______currentState.options, processEntity, [
        apCenter,
      ]);
      if (processEntity.noLimit) {
        ______currentState.noLimit = !!processEntity.noLimit;
        ______currentState.operate =
          ______currentState.options.operate ||
          new apCenter(e, null, {
            noLimit: true,
          });
      } else {
        ______currentState.operate =
          ______currentState.options.operate || new apCenter(e);
      }
      if (______currentState.options.operate) {
        ______currentState.options.operate.ignore = true;
      }
      ______currentState.map = e;
      ______currentState.mask = new _elementIndex(
        e,
        ______currentState.options.drawCursor,
      );
      ______currentState.addMapListener(e);
      document.onkeydown = function (e) {
        if (e.keyCode === ______currentState.options.keyCode) {
          ______currentState._stopClick = true;
        }
      };
      document.onkeyup = function (e) {
        if (e.keyCode === ______currentState.options.keyCode) {
          ______currentState._stopClick = false;
        }
      };
      return ______currentState;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "currentStatus",
        get() {
          return this._currentStatus;
        },
        set(e) {
          this._currentStatus = e;
          this.updateMapListenerControl(e);
        },
      },
      {
        key: "runningAction",
        get() {
          return this._runningAction;
        },
        set(e) {
          this._runningAction = e;
        },
      },
      {
        key: "addMapListener",
        value(e) {
          var t = this;
          this.mapSelect = new onEvent(e);
          this.mapSelect.addEventListener(____eventObject.CLICK, function (e) {
            if (t._currentStatus !== _initializeMap.STATUS_MOVE) {
              t.dispatchEvent(e);
            }
          });
          this.mapSelect.addEventListener(
            ____eventObject.RIGHTCLICK,
            function (e) {
              if (t._currentStatus !== _initializeMap.STATUS_MOVE) {
                t.dispatchEvent(e);
              }
            },
          );
          this.mapSelect.addEventListener(____eventObject.MOVE, function (e) {
            if (
              t._currentStatus !== _initializeMap.STATUS_DRAWING &&
              t._currentStatus !== _initializeMap.STATUS_EDITER &&
              t._currentStatus !== _initializeMap.STATUS_MOVE
            ) {
              t.dispatchEvent(e);
            }
          });
        },
      },
      {
        key: "updateMapListenerControl",
        value(e) {
          if (this.mapSelect) {
            switch (e) {
              case _initializeMap.STATUS_FREE:
                this.mapSelect.open();
                break;
              case _initializeMap.STATUS_EDITER:
                this.mapSelect.openClick();
                this.mapSelect.openMouse();
                break;
              case _initializeMap.STATUS_DRAWING:
              case _initializeMap.STATUS_MOVE:
                this.mapSelect.closeClick();
                this.mapSelect.openMouse();
                break;
              default:
                this.mapSelect.open();
            }
          }
        },
      },
      {
        key: "open",
        value() {
          this.isOpen = true;
          this.mask ||= new _elementIndex(this.map, this.options.drawCursor);
          this.map.addOverlay(this.mask);
          this.setCurrentDrawType(this.drawType);
          return true;
        },
      },
      {
        key: "close",
        value(e = true) {
          this.isOpen = false;
          this.closeRunningAction();
          if (e) {
            this.currentStatus = _initializeMap.STATUS_FREE;
          }
          if (this.mask) {
            this.map.removeOverlay(this.mask);
          }
        },
      },
      {
        key: "closeRunningAction",
        value() {
          if (
            this.runningAction &&
            this.runningAction.close instanceof Function
          ) {
            this.runningAction.close();
          }
        },
      },
      {
        key: "addOverlay",
        value(e) {
          if (
            !this.instances.find(function (t) {
              return t === e;
            })
          ) {
            this.instances.push(e);
          }
        },
      },
      {
        key: "removeOverlay",
        value(e) {
          var t = this.instances.findIndex(function (t) {
            return t === e;
          });
          if (t !== -1) {
            this.map.removeOverlay(this.instances[t]);
            this.instances.splice(t);
          }
          if (this.operate) {
            this.map.removeOverlay(this.operate);
          }
        },
      },
      {
        key: "clearData",
        value() {
          var e = this;
          this.instances.forEach(function (t) {
            e.map.removeOverlay(t);
          });
          this.instances.length = 0;
        },
      },
      {
        key: "addSelectDrawData",
        value(e) {
          if (
            !this.selectInstance.find(function (t) {
              return t === e;
            })
          ) {
            this.selectInstance.push(e);
          }
        },
      },
      {
        key: "hasOverlay",
        value(e) {
          var t = this.instances.findIndex(function (t) {
            return t === e;
          });
          return (
            t > -1 ||
            (t = this.selectInstance.findIndex(function (t) {
              return t === e;
            })) > -1
          );
        },
      },
      {
        key: "clearSelectDrawData",
        value() {
          var e = this;
          this.selectInstance.forEach(function (t) {
            e.map.removeOverlay(t);
          });
          this.selectInstance.length = 0;
        },
      },
      {
        key: "setCurrentDrawType",
        value(e) {
          this.drawType = e;
        },
      },
      {
        key: "attachSnapSource",
        value(e) {
          this._attachSnapSource = e;
        },
      },
      {
        key: "setDrawCursor",
        value(e) {
          if (this.mask) {
            this.mask.setCursor(e);
          }
        },
      },
      {
        key: "getStopStatus",
        value() {
          return this._stopClick;
        },
      },
    ]);
  })(____initializeMap);
  function timeoutAction(e, t) {
    var n;
    var i =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var timeoutDelay =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    n = (arguments.length > 3 ? arguments[3] : undefined).getZoom();
    var _timeoutDelay = Math.pow(2, 18 - n);
    i *= _timeoutDelay;
    var _timeoutAction;
    var ________latitude = s(t);
    try {
      var timeInHours;
      function c() {
        var t = _timeoutAction.value;
        if (
          timeoutDelay.find(function (e) {
            return t === e;
          })
        ) {
          return 0;
        }
        if (t instanceof BMapGL.Marker) {
          var n = t.getPosition();
          var distanceInMts = knappTime.getDistance(e, n, "kilometers") * 1000;
          if (i > distanceInMts) {
            return {
              v: n,
            };
          } else {
            return 0;
          }
        }
        if (t.toGeoJSON) {
          var pathPoints = t.getPath();
          var handoverData = [];
          var convertMapToG = t.toGeoJSON();
          if (t.hasMultipleParts) {
            var userList = [];
            for (
              var _________________currentIndex = 0;
              pathPoints.length > _________________currentIndex;
              _________________currentIndex++
            ) {
              for (
                var __________________currentIndex = 0;
                pathPoints[_________________currentIndex].length - 1 >
                __________________currentIndex;
                __________________currentIndex++
              ) {
                handoverData.push(
                  knappTime.getLineCenter(
                    pathPoints[_________________currentIndex][
                      __________________currentIndex
                    ],
                    pathPoints[_________________currentIndex][
                      __________________currentIndex + 1
                    ],
                  ).bdCenter,
                );
                userList.push(
                  pathPoints[_________________currentIndex][
                    __________________currentIndex
                  ],
                );
              }
              userList.push(
                pathPoints[_________________currentIndex][
                  pathPoints[_________________currentIndex].length - 1
                ],
              );
            }
            pathPoints = userList;
          } else {
            for (
              var ___________________currentIndex = 0;
              pathPoints.length - 1 > ___________________currentIndex;
              ___________________currentIndex++
            ) {
              handoverData.push(
                knappTime.getLineCenter(
                  pathPoints[___________________currentIndex],
                  pathPoints[___________________currentIndex + 1],
                ).bdCenter,
              );
            }
          }
          var _pathPoints;
          var geoJsonMap = s(pathPoints.concat(handoverData));
          try {
            for (geoJsonMap.s(); !(_pathPoints = geoJsonMap.n()).done; ) {
              var __pathPoints = _pathPoints.value;
              var distanceToAll =
                knappTime.getDistance(e, __pathPoints, "kilometers") * 1000;
              if (i > distanceToAll) {
                return {
                  v: __pathPoints,
                };
              }
            }
          } catch (e) {
            geoJsonMap.e(e);
          } finally {
            geoJsonMap.f();
          }
          if (convertMapToG.geometry.type === "MultiPolygon") {
            return 0;
          }
          var fetchRealtime = knappTime.getNearestPointOnLine(e, convertMapToG);
          if (i > fetchRealtime.toLineDistance * 1000) {
            return {
              v: fetchRealtime.bdNearestPoint,
            };
          }
        }
      }
      for (
        ________latitude.s();
        !(_timeoutAction = ________latitude.n()).done;

      ) {
        if ((timeInHours = c()) !== 0 && timeInHours) {
          return timeInHours.v;
        }
      }
    } catch (e) {
      ________latitude.e(e);
    } finally {
      ________latitude.f();
    }
    return null;
  }
  var networkInfo = (function (e) {
    function t(e) {
      var ____esult;
      var ___options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      isValidObject(this, t);
      (____esult = n(this, t)).type = undefined;
      ____esult.isOpen = undefined;
      ____esult.isOnMap = true;
      ____esult.isSeries = true;
      ____esult.skipEditing = false;
      ____esult.isSelectDraw = false;
      ____esult.enableCalculate = false;
      ____esult.enableSnap = true;
      ____esult.snapDistance = 10;
      ____esult.enableDragging = false;
      ____esult.mouseLnglat = undefined;
      ____esult.match = null;
      ____esult.matchOverlay = null;
      ____esult.matchOverlayRadius = 5;
      ____esult.limitPoint = -1;
      ____esult.deletable = false;
      if (!e) {
        return gameObject(____esult);
      }
      if (!(e instanceof errorInstance)) {
        throw Error("DrawBase实例化必须输入scene参数");
      }
      ____esult.scene = e;
      var s = {};
      _tartIndex.copyOptionsToNew(____esult.scene.options, ___options, s);
      _tartIndex.copyNotExitOptions(s, ____esult.scene.options);
      ____esult.defineProperty(s);
      ____esult.options = s;
      ____esult.setSnapPointType(____esult.options);
      ____esult.setBaseOptions(____esult.options.baseOpts);
      return ____esult;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "bindEvent",
        value() {},
      },
      {
        key: "setBaseOptions",
        value() {
          if (arguments.length > 0 && arguments[0] !== undefined) {
            this.baseOptions = arguments[0];
          } else {
            this.baseOptions = {};
          }
        },
      },
      {
        key: "setCurrentStatus",
        value(e) {
          this.scene.currentStatus = e;
        },
      },
      {
        key: "skipEdit",
        value(e) {
          if (e || this.skipEditing) {
            this.scene.operate.confirmOperate();
          } else {
            this.scene.mask.hide();
          }
        },
      },
      {
        key: "emitEventIsonmap",
        value(e) {
          var t = eventsArray.DRAW_ON_MAP;
          if (this.isSelectDraw) {
            t = eventsArray.SELECT_ON_MAP;
          }
          var n = new currentTime(____eventObject.COMPLETE, {
            overlay: e,
            from: t,
          });
          this.dispatchEvent(n);
          this.scene.dispatchEvent(n);
        },
      },
      {
        key: "emitEventIsnomap",
        value(e) {
          this.scene.currentStatus = _initializeMap.STATUS_FREE;
          var t = eventsArray.DRAW_NO_MAP;
          if (this.isSelectDraw) {
            t = eventsArray.SELECT_NO_MAP;
          }
          var n = new currentTime(____eventObject.COMPLETE, {
            overlay: e,
            from: t,
          });
          this.dispatchEvent(n);
          this.scene.dispatchEvent(n);
        },
      },
      {
        key: "registEvent",
        value(e) {
          var t = this;
          e.addEventListener(____eventObject.INIT, function (e) {
            t.skipEdit();
          });
          e.addEventListener(____eventObject.COMPLETE, function (e) {
            if (t.isSelectDraw) {
              t.scene.addSelectDrawData(e.target.overlay);
            } else if (t.isCotiHole) {
              t.scene.map.removeOverlay(e.target.overlay);
              if (t.holeCut) {
                t.holeCut(e.target.overlay);
              }
            } else {
              t.scene.addOverlay(e.target.overlay);
            }
            if (e.continue !== false && t.isSeries) {
              t.isOpen = true;
              t.scene.mask.show();
              t.bindEvent();
            }
            if (t.isCotiHole) {
              e.target.overlay = t.holeSource;
            }
            t.dispatchEvent(e);
            t.editOpe = null;
          });
          e.addEventListener(____eventObject.CANCEL, function (e) {
            if (t.isSeries) {
              t.isOpen = true;
              t.scene.mask.show();
              t.bindEvent();
            }
            if (t.isCotiHole) {
              e.target.overlay = t.holeSource;
            }
            t.dispatchEvent(e);
            t.editOpe = null;
          });
        },
      },
      {
        key: "setRunningAction",
        value(e, t) {
          if (e) {
            if (this.isSeries && this.scene.runningAction === this) {
              t();
              return;
            }
            this.scene.closeRunningAction();
            this.scene.mask.show();
            this.scene.runningAction = this;
            t();
            if (this.callback) {
              this.callback();
            }
          } else {
            this.scene.runningAction = null;
            this.isOpen = false;
            this.scene.mask.hide();
          }
        },
      },
      {
        key: "closeEdit",
        value() {
          if (this.editOpe) {
            this.editOpe.close();
          }
        },
      },
      {
        key: "closeAll",
        value() {
          if (this.scene.currentStatus === _initializeMap.STATUS_DRAWING) {
            this.removeDrawing();
          }
          this.close();
          this.closeEdit();
          this.scene.mask.disableEdgeMove();
        },
      },
      {
        key: "open",
        value(e) {
          if (this.scene) {
            this.callback = e;
            this.scene.drawType = this.type;
            this.scene.open();
            this.isOpen = true;
            this.bindEvent();
          }
        },
      },
      {
        key: "close",
        value(e) {
          if (e) {
            e();
          }
        },
      },
      {
        key: "removeDrawing",
        value() {},
      },
      {
        key: "addLabel",
        value(e, t = {}) {
          var n = new BMapGL.Label(e, {
            position: t.position,
            offset: t.offset || new BMapGL.Size(0, 0),
          });
          n.setStyle(t.labelOptions);
          return n;
        },
      },
      {
        key: "setRadius",
        value() {
          var e = this.scene.map.getZoomUnits();
          this.matchOverlay.setRadius(this.matchOverlayRadius * e);
        },
      },
      {
        key: "addMatchOverlay",
        value(e) {
          if (this.matchOverlay instanceof BMapGL.Circle) {
            this.setRadius();
            this.matchOverlay.setCenter(e);
            this.scene.map.addEventListener(
              "zoomend",
              (this._setRadius = this.setRadius.bind(this)),
            );
            this.scene.map.addOverlay(this.matchOverlay);
          } else {
            this.scene.map.addOverlay(this.matchOverlay);
            this.matchOverlay.setPosition(e);
          }
        },
      },
      {
        key: "removeMatchOverlay",
        value() {
          this.scene.map.removeOverlay(this.matchOverlay);
          if (this._setRadius) {
            this.scene.map.removeEventListener("zoomend", this._setRadius);
            this._setRadius = null;
          }
        },
      },
      {
        key: "getSnap",
        value(
          e,
          t = this.scene.instances,
          n = [],
          i = this.snapDistance,
          ceneMap = this.scene.map,
        ) {
          var instanceFound = null;
          this.removeMatchOverlay();
          if (!instanceFound && t.length) {
            instanceFound = timeoutAction(e, t, i, ceneMap);
          }
          if (
            !instanceFound &&
            this.scene._attachSnapSource !== undefined &&
            typeof this.scene._attachSnapSource != "null" &&
            this.scene._attachSnapSource.length
          ) {
            instanceFound = timeoutAction(
              e,
              this.scene._attachSnapSource,
              i,
              ceneMap,
            );
          }
          instanceFound ||= timeoutAction(e, n, i, ceneMap);
          if (instanceFound) {
            this.addMatchOverlay(instanceFound);
          }
          return instanceFound;
        },
      },
    ]);
  })(____initializeMap);
  var _____initializeMap = (function (e) {
    function t(e) {
      var arker;
      var ____options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      isValidObject(this, t);
      (arker = n(this, t, [e, ____options])).type = initializer.DRAWING_MARKER;
      arker.scene.setCurrentDrawType(arker.type);
      arker.mouseMoveModel = ____options.mouseMove || false;
      if (arker.isOpen) {
        arker.open();
      }
      return arker;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "clickAction",
        value(e) {
          var t = this;
          if (!this.scene.getStopStatus() && (!this.marker || !!this.isOnMap)) {
            this.scene.mask.removeEventListener("mousemove", this.mousemove);
            this.scene.mask.removeEventListener("click", this.click);
            this.marker = new BMapGL.Marker(e.point, this.baseOptions);
            this.scene.map.addOverlay(this.marker);
            if (this.isSeries) {
              if (!this.isOnMap) {
                this.bindEvent();
              }
            } else {
              this.scene.mask.hide();
            }
            if (this.isOnMap) {
              if (this.isSeries) {
                this.scene.mask.show();
                this.bindEvent();
              } else {
                this.setCurrentStatus(_initializeMap.STATUS_FREE);
              }
              this.scene.addOverlay(this.marker);
              this.emitEventIsonmap(this.marker);
              if (this.enableDragging) {
                this.marker.enableDragging();
                this.marker.addEventListener(
                  "dragstart",
                  this.centerDragstart.bind(this),
                );
                this.marker.addEventListener(
                  "dragging",
                  this.centerDragging.bind(this),
                );
                this.marker.addEventListener(
                  "dragend",
                  this.centerDragend.bind(this),
                );
              }
            } else {
              setTimeout(function () {
                t.scene.map.removeOverlay(t.marker);
                t.marker = null;
              }, 200);
              this.emitEventIsnomap(this.marker);
            }
          }
        },
      },
      {
        key: "moveAction",
        value(e) {
          var t = new currentTime(____eventObject.MOVE, e);
          this.dispatchEvent(t);
        },
      },
      {
        key: "centerDragstart",
        value(e) {
          if (this.enableSnap) {
            var t;
            var n = e.target;
            var i = BMapGL.Projection.convertMC2LL(n.point);
            if ((t = this.getSnap(i, this.scene.instances))) {
              e.point = BMapGL.Projection.convertLL2MC(t);
              n.setPoint(e.point);
            }
          }
        },
      },
      {
        key: "centerDragging",
        value(e) {
          if (this.enableSnap) {
            var t;
            var n = e.target;
            var i = BMapGL.Projection.convertMC2LL(n.point);
            if ((t = this.getSnap(i, this.scene.instances))) {
              e.point = BMapGL.Projection.convertLL2MC(t);
              n.setPoint(e.point);
            }
          }
        },
      },
      {
        key: "centerDragend",
        value(e) {
          this.emitEventIsonmap(this.marker);
        },
      },
      {
        key: "bindEvent",
        value() {
          var e = this;
          if (this.isOpen) {
            propertyProxy(
              t,
              "setRunningAction",
              this,
              3,
            )([
              true,
              function () {
                e.setCurrentStatus(_initializeMap.STATUS_DRAWING);
                if (e.mouseMoveModel) {
                  e.scene.mask.addEventListener(
                    "mousemove",
                    (e.mousemove = e.moveAction.bind(e)),
                  );
                }
                e.scene.mask.addEventListener(
                  "click",
                  (e.click = e.clickAction.bind(e)),
                );
              },
            ]);
          }
        },
      },
      {
        key: "close",
        value(e) {
          propertyProxy(t, "setRunningAction", this, 3)([false]);
          this.scene.mask.removeEventListener("click", this.click);
          if (this.mouseMoveModel) {
            this.scene.mask.addEventListener("mousemove", this.mousemove);
          }
          if (e) {
            e();
          }
        },
      },
    ]);
  })(networkInfo);
  var _________currentTime = (function (e) {
    function t(e, __elementIndex) {
      var _____esult;
      var s =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      isValidObject(this, t);
      (_____esult = n(this, t)).overlay = null;
      _____esult.centerIcon = null;
      _____esult.moveIcon = null;
      _____esult.circleMoveIcon = null;
      if (!(e instanceof errorInstance)) {
        throw Error("EditBase实例化必须输入scene参数");
      }
      _____esult.scene = e;
      var activeItem = {};
      _tartIndex.copyOptionsToNew(_____esult.scene.options, s, activeItem);
      _tartIndex.copyNotExitOptions(activeItem, _____esult.scene.options);
      _____esult.target = __elementIndex || _____esult;
      _____esult.setOptions(activeItem);
      return _____esult;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "setOptions",
        value(e = {}) {
          this.defineProperty(e);
          if (this.target.__proto__ instanceof networkInfo) {
            this.baseOptions = this.target.baseOptions;
          } else {
            this.baseOptions = e.baseOpts;
          }
        },
      },
      {
        key: "saveSouce",
        value(e) {
          if (this.type === initializer.DRAWING_CIRCLE) {
            this.source = {
              center: e.getCenterIn().latLng,
              radius: e.getRadius(),
            };
          } else {
            this.source = e.toGeoJSON();
          }
        },
      },
      {
        key: "restoreSouce",
        value(e) {
          if (this.source) {
            if (this.type === initializer.DRAWING_CIRCLE) {
              e.setCenter(this.source.center);
              e.setRadius(this.source.radius);
            } else {
              e.updateByGeoJSON(this.source);
            }
            this.restoreOpe(e);
          }
        },
      },
      {
        key: "restoreOpe",
        value() {},
      },
      {
        key: "open",
        value(e, t, n) {
          var i = this;
          if (this.scene) {
            this.originStyle = {
              icon: e._config.icon,
              fillColor: e._config.fillColor,
              fillOpacity: e._config.fillOpacity,
              strokeColor: e._config.strokeColor,
              strokeWeight: e._config.strokeWeight,
              strokeOpacity: e._config.strokeOpacity,
            };
            this.overlay = e;
            this.overlay.setOptions(this.baseOptions);
            if (
              (this.type === initializer.DRAWING_POLYLINE &&
                this.overlay.points.length < 2) ||
              (this.type === initializer.DRAWING_POLYGON &&
                this.overlay.points.length < 3)
            ) {
              this.close();
              this.scene.mask.hide();
              return;
            } else {
              this.setRunningAction(true, function () {
                i.setSceneStatus(_initializeMap.STATUS_EDITER);
                i.edit(e, t);
                if (n) {
                  n();
                }
              });
              return;
            }
          }
        },
      },
      {
        key: "emitOkEvent",
        value(e, t = true, n = false) {
          var i = eventsArray.DRAW_ON_MAP;
          if (this.target.__proto__ instanceof networkInfo) {
            if (this.target.isSelectDraw) {
              i = eventsArray.SELECT_ON_MAP;
            }
            if (this.target.isCotiHole) {
              i = eventsArray.DRAW_ON_MAP;
            }
          } else {
            i = eventsArray.EDIT_ON_MAP;
          }
          var runtimeInfo = new currentTime(____eventObject.COMPLETE, {
            overlay: e,
            from: i,
          });
          runtimeInfo.continue = t;
          this.dispatchEvent(runtimeInfo);
          if (n || this.type !== initializer.DRAWING_MARKER) {
            this.scene.dispatchEvent(runtimeInfo);
          }
        },
      },
      {
        key: "close",
        value(e = false, t) {
          if (this.overlay) {
            this.overlay.setOptions(this.originStyle);
            this.setRunningAction(false);
            this.setSceneStatus(_initializeMap.STATUS_FREE);
            if (this.operateWindow) {
              this.removeAttachOverlays();
              this.scene.map.removeOverlay(this.operateWindow);
            }
            if (!e) {
              this.emitOkEvent(this.overlay, e);
            }
            if (
              this.type === initializer.DRAWING_POLYLINE ||
              this.type === initializer.DRAWING_POLYGON
            ) {
              this.overlay.removeEventListener("lineupdate", this.lineUpdate);
            }
            this.closeOpe(this.overlay);
            if (t) {
              t();
            }
          }
        },
      },
      {
        key: "setRunningAction",
        value(e, t) {
          if (e) {
            this.scene.closeRunningAction();
            this.scene.runningAction = this;
            t();
          } else {
            this.scene.runningAction = null;
          }
        },
      },
      {
        key: "closeOpe",
        value(e) {},
      },
      {
        key: "addOperateWindow",
        value(e) {
          var t = this;
          var n = eventsArray.DRAW_ON_MAP;
          if (this.target.__proto__ instanceof networkInfo) {
            if (this.target.isSelectDraw) {
              n = eventsArray.SELECT_ON_MAP;
            }
          } else {
            this.saveSouce(e.overlay);
            n = eventsArray.EDIT_ON_MAP;
          }
          var i = (this.operateWindow =
            this.scene.operate || new apCenter(this.scene.map));
          i.setData(e);
          i.addEventListener("ok", function (e) {
            t.removeAttachOverlays();
            t.close(true);
            t.emitOkEvent(e.target);
            i._listeners = {};
          });
          i.addEventListener("cancel", function (________________radius) {
            t.removeAttachOverlays();
            t.close(true);
            if (t.target.__proto__ instanceof networkInfo) {
              t.scene.map.removeOverlay(e.overlay);
            } else {
              t.restoreSouce(e.overlay);
            }
            var apRadius = new currentTime(____eventObject.CANCEL, {
              overlay: ________________radius.target,
              from: (n += "-cancel"),
            });
            t.dispatchEvent(apRadius);
            t.scene.dispatchEvent(apRadius);
            i._listeners = {};
          });
          this.scene.map.addOverlay(i);
          return i;
        },
      },
      {
        key: "removeAttachOverlays",
        value() {
          var e = this.scene.map;
          for (var t = this.overlays, n = 0; t.length > n; n++) {
            if (Array.isArray(t[n])) {
              for (var i in t[n]) {
                e.removeOverlay(t[n][i]);
              }
            } else {
              e.removeOverlay(t[n]);
            }
          }
        },
      },
      {
        key: "getSnap",
        value(
          e,
          cameraInst,
          t = [],
          n = this.scene.snapDistance,
          i = this.scene.map,
        ) {
          var cameraEventFt = null;
          cameraEventFt ||= timeoutAction(
            e,
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : this.scene.instances,
            n,
            i,
          );
          if (
            !cameraEventFt &&
            this.scene._attachSnapSource !== undefined &&
            typeof this.scene._attachSnapSource != "null" &&
            this.scene._attachSnapSource.length
          ) {
            cameraEventFt = timeoutAction(
              e,
              this.scene._attachSnapSource,
              n,
              i,
            );
          }
          cameraEventFt ||= timeoutAction(e, t, n, i);
          return cameraEventFt;
        },
      },
    ]);
  })(____initializeMap);
  var ___target = (function (e) {
    function t(e, _________________radius, objectData) {
      var s;
      isValidObject(this, t);
      (s = n(this, t, [e, _________________radius, objectData])).type =
        initializer.DRAWING_POLYLINE;
      s.scene.setCurrentDrawType(s.type);
      return s;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "edit",
        value(e, t) {
          var n = this;
          this.overlay = e;
          var i = {
            limit: t || null,
            point: this.getNorthEast(
              e.hasMultipleParts ? e.getPath()[0] : e.getPath(),
            ),
            overlay: e,
          };
          this.overlays = [];
          var __fetchData = this.addOperateWindow(i);
          this.lineUpdate = function (t) {
            var i = n.getNorthEast(
              e.hasMultipleParts ? e.getPath()[0] : e.getPath(),
            );
            __fetchData.setPosition(i, true);
            __fetchData.updateWindow();
            var __________currentTime = new currentTime(
              ____eventObject.CHANGE,
              t.currentTarget,
            );
            n.target.dispatchEvent(__________currentTime);
          };
          this.onlinevertexdragging = function (e) {
            var t = e.overlay;
            var i = BMapGL.Projection.convertMC2LL(t.getPoint());
            var nappedPoint = i;
            if (n.enableSnap) {
              nappedPoint = n.getSnap(i, n.scene.instances, [n.overlay]);
            }
            if (nappedPoint) {
              e.from.point = BMapGL.Projection.convertLL2MC(nappedPoint);
              t.setPoint(e.from.point);
            }
          };
          e.enableEditing();
          e.addEventListener("lineupdate", this.lineUpdate);
          e.addEventListener("onlinevertexdragging", this.onlinevertexdragging);
          this.dispatchEvent(new currentTime(____eventObject.INIT));
        },
      },
      {
        key: "restoreOpe",
        value(e) {
          e.disableEditing();
        },
      },
      {
        key: "closeOpe",
        value(e) {
          e.disableEditing();
        },
      },
      {
        key: "getNorthEast",
        value(e) {
          var t = 0;
          var n = 0;
          for (var i = 0; e.length > i; i++) {
            if (e[i].lng > t) {
              t = e[i].lng;
              n = i;
            }
          }
          return e[n];
        },
      },
    ]);
  })(_________currentTime);
  var ___item = (function (e) {
    function t(e, ____item, __polygon) {
      var s;
      isValidObject(this, t);
      (s = n(this, t, [e, ____item, __polygon])).type =
        initializer.DRAWING_POLYGON;
      s.scene.setCurrentDrawType(s.type);
      return s;
    }
    etupInherit(t, e);
    return configure(t);
  })(___target);
  var aiModel = (function (e) {
    function t(e) {
      var polylineID;
      var polylineOpts =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      isValidObject(this, t);
      (polylineID = n(this, t, [e, polylineOpts])).type =
        initializer.DRAWING_POLYLINE;
      polylineID.points = [];
      polylineID.drawPoint = [];
      polylineID.overlay = null;
      polylineID.isBinded = false;
      polylineID.tipLabel = null;
      polylineID.measureRes = 0;
      polylineID.hideTip = false;
      if (polylineOpts.hideTip) {
        polylineID.hideTip = polylineOpts.hideTip;
      }
      polylineID.scene.setCurrentDrawType(polylineID.type);
      if (polylineID.isOpen) {
        polylineID.open();
      }
      return polylineID;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "getNorthEast",
        value(e) {
          var t = 0;
          var n = 0;
          for (var i = 0; e.length > i; i++) {
            if (e[i].lng > t) {
              t = e[i].lng;
              n = i;
            }
          }
          return e[n];
        },
      },
      {
        key: "startAction",
        value(e) {
          if (!this.scene.getStopStatus()) {
            this.points.push(this.match ? this.match : e.point);
            this.drawPoint = this.points.concat(
              this.points[this.points.length - 1],
            );
            if (this.points.length === 1) {
              if (this.scene.drawType === initializer.DRAWING_POLYLINE) {
                this.overlay = new BMapGL.Polyline(
                  this.drawPoint,
                  this.baseOptions,
                );
              } else if (this.scene.drawType === initializer.DRAWING_POLYGON) {
                this.overlay = new BMapGL.Polygon(
                  this.drawPoint,
                  this.baseOptions,
                );
              }
              this.scene.map.addOverlay(this.overlay);
            } else {
              this.overlay.setPath(this.drawPoint);
              if (
                this.limitPoint > 0 &&
                this.points.length >= this.limitPoint &&
                this.scene.drawType === initializer.DRAWING_POLYLINE
              ) {
                this.dblclickAction(e);
              }
            }
            if (!this.isBinded) {
              this.isBinded = true;
              this.deletable = true;
              this.scene.mask.enableEdgeMove();
              this.scene.mask.removeEventListener("mousemove", this.mousemove);
              this.scene.mask.addEventListener(
                "mousemove",
                (this.mousemove = this.moveAction.bind(this)),
              );
              this.scene.mask.addEventListener(
                "dblclick",
                (this.dblclick = this.dblclickAction.bind(this)),
              );
            }
          }
        },
      },
      {
        key: "moveAction",
        value(e) {
          if (this.scene.getStopStatus()) {
            this.scene.map.removeOverlay(this.tipLabel);
          } else {
            var t = e.point;
            if (this.enableSnap) {
              var n = [];
              if (this.overlay.points.length > 2) {
                var i = this.overlay
                  .getPath()
                  .slice(0, this.overlay.points.length - 1);
                n.push(new this.overlay.constructor(i));
              }
              this.match = this.getSnap(t, this.scene.instances, n);
              if (this.match) {
                this.overlay.setPositionAt(
                  this.drawPoint.length - 1,
                  this.match,
                );
                return;
              }
            }
            this.match = null;
            this.overlay.setPositionAt(this.drawPoint.length - 1, e.point);
            if (!this.hideTip) {
              this.scene.map.removeOverlay(this.tipLabel);
              this.tipLabel = new BMapGL.Label(
                "单击绘制下一个点，双击完成绘制",
                {
                  position: e.point,
                  offset: new BMapGL.Size(10, 10),
                },
              );
              this.tipLabel.setStyle(this.options.labelOptions);
              this.scene.map.addOverlay(this.tipLabel);
            }
          }
        },
      },
      {
        key: "mousemoveAction",
        value(e) {
          var t = this;
          if (this.scene.getStopStatus()) {
            this.scene.map.removeOverlay(this.tipLabel);
          } else {
            if (e.buttons !== 4) {
              _tartIndex.preventDefault(e);
              _tartIndex.stopBubble(e);
            }
            if (this.enableSnap) {
              this.match = this.getSnap(e.point, this.scene.instances);
            }
            if (!this.hideTip) {
              setTimeout(function () {
                t.scene.map.removeOverlay(t.tipLabel);
                t.tipLabel = new BMapGL.Label("单击确认起点", {
                  position: e.point,
                  offset: new BMapGL.Size(10, 10),
                });
                t.tipLabel.setStyle(t.options.labelOptions);
                t.scene.map.addOverlay(t.tipLabel);
              }, 60);
            }
          }
        },
      },
      {
        key: "dblclickAction",
        value(e) {
          _tartIndex.preventDefault(e);
          _tartIndex.stopBubble(e);
          this.isBinded = false;
          this.deletable = false;
          this.scene.map.removeOverlay(this.matchOverlay);
          this.scene.map.removeOverlay(this.tipLabel);
          this.scene.mask.disableEdgeMove();
          this.scene.mask.removeEventListener("click", this.click);
          this.scene.mask.removeEventListener("mousemove", this.mousemove);
          this.scene.mask.removeEventListener("dblclick", this.dblclick);
          this.overlay.setPath(this.points);
          if (this.isSeries) {
            if (!this.isOnMap) {
              this.bindEvent();
            }
          } else {
            this.scene.mask.hide();
          }
          if (this.isOnMap) {
            var t = null;
            if (this.limit) {
              if (this.scene.drawingType === "polygon") {
                t = this.limit.area;
              } else {
                t = this.limit.distance;
              }
            }
            if (this.type === initializer.DRAWING_POLYLINE) {
              this.editOpe = new ___target(this.scene, this);
            } else {
              this.editOpe = new ___item(this.scene, this);
            }
            var n = this.editOpe;
            this.registEvent(n);
            n.open(this.overlay, t);
          } else {
            this.scene.map.removeOverlay(this.overlay);
            if (
              this.type === initializer.DRAWING_POLYGON &&
              this.isCotiHole &&
              this.holeCut
            ) {
              this.holeCut(this.overlay);
            }
            this.emitEventIsnomap(this.overlay);
          }
        },
      },
      {
        key: "bindEvent",
        value() {
          var e = this;
          if (this.isOpen) {
            propertyProxy(
              t,
              "setRunningAction",
              this,
              3,
            )([
              true,
              function () {
                e.points.length = 0;
                e.drawPoint.length = 0;
                e.setCurrentStatus(_initializeMap.STATUS_DRAWING);
                e.deletable = false;
                if (e.click && e.mousemove) {
                  e.isBinded = false;
                  e.scene.mask.removeEventListener("click", e.click);
                  e.scene.mask.removeEventListener("mousemove", e.mousemove);
                }
                e.scene.mask.addEventListener(
                  "mousemove",
                  (e.mousemove = e.mousemoveAction.bind(e)),
                );
                e.scene.mask.addEventListener(
                  "click",
                  (e.click = e.startAction.bind(e)),
                );
              },
            ]);
          }
        },
      },
      {
        key: "removeDrawing",
        value() {
          if (this.deletable) {
            this.scene.map.removeOverlay(this.overlay);
          }
        },
      },
      {
        key: "close",
        value(e) {
          this.isBinded = false;
          this.deletable = false;
          this.scene.map.removeOverlay(this.tipLabel);
          this.scene.map.removeOverlay(this.matchOverlay);
          this.scene.mask.removeEventListener("click", this.click);
          this.scene.mask.removeEventListener("mousemove", this.mousemove);
          this.scene.mask.removeEventListener("dblclick", this.dblclick);
          propertyProxy(t, "setRunningAction", this, 3)([false]);
          if (e) {
            e();
          }
        },
      },
    ]);
  })(networkInfo);
  var getRealTimeLl = (function (e) {
    function t(e) {
      var ___polygon;
      var polygonDrawer =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      isValidObject(this, t);
      (___polygon = n(this, t, [e, polygonDrawer])).type =
        initializer.DRAWING_POLYGON;
      ___polygon.holeSource = null;
      ___polygon.isCotiHole = false;
      ___polygon.scene.setCurrentDrawType(___polygon.type);
      ___polygon.holeSource = polygonDrawer.holeSource || null;
      ___polygon.isCotiHole = polygonDrawer.isCotiHole || false;
      return ___polygon;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "setCotiHoleSource",
        value(e) {
          if (e && e instanceof BMapGL.Polygon) {
            this.holeSource = e;
          }
        },
      },
      {
        key: "holeCut",
        value(e) {
          if (this.holeSource && this.holeSource instanceof BMapGL.Polygon) {
            var t = this.holeSource.getPath();
            var n = e.getPath();
            if (this.holeSource.hasMultipleParts) {
              t.push(n);
            } else {
              t = [t, n];
            }
            this.holeSource.setPath(t);
          }
        },
      },
    ]);
  })(aiModel);
  var _ealtimeData = (function (e) {
    function t(
      e,
      __________________radius,
      _dataObject,
      s,
      ___________currentTime,
    ) {
      var currentObject;
      isValidObject(this, t);
      (currentObject = n(this, t)).scene = ___________currentTime;
      currentObject.type = e;
      currentObject.point = __________________radius;
      currentObject.number = _dataObject;
      currentObject.overlay = s;
      return currentObject;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "initialize",
        value(e) {
          this.map = e;
          var t;
          var n = (this.div = document.createElement("div"));
          n.className = "screenshot";
          if (this.type === "circle") {
            t = `
                <div class="circlShot">
                <span id="screenshotNum">${this.number}</span>
                <input id="circleInput" type="text" />
                <span class="unit">米</span>
                </div>
            `;
          } else if (this.type === "rectangle") {
            t = `
                <div class="rectWH">
                <div class="wh">
                    <span id="rectWidth">${this.number.width}</span>
                    <input id="rectWidthInput" type="text" />
                </div>
                <span class="multiple">x</span>
                <div class="wh">
                    <span id="rectHeight">${this.number.height}</span>
                    <input id="rectHeightInput" type="text" />
                </div>
                <span class="unit">米</span>
                </div>
            `;
          }
          n.innerHTML = t;
          n.addEventListener("mousemove", function (e) {
            _tartIndex.preventDefault(e);
            _tartIndex.stopBubble(e);
          });
          n.addEventListener("dblclick", function (e) {
            _tartIndex.preventDefault(e);
            _tartIndex.stopBubble(e);
          });
          this.map.getPanes().markerPane.appendChild(n);
          this.bind();
          return n;
        },
      },
      {
        key: "bind",
        value() {
          this.setNumber(this.number);
          if (this.type === "circle") {
            this.bindCircleEvent();
          } else {
            this.bindRectEvent();
          }
        },
      },
      {
        key: "bindCircleEvent",
        value() {
          var e = this;
          var t = document.getElementById("screenshotNum");
          var n = document.getElementById("circleInput");
          t.addEventListener("click", function (e) {
            var i = t.innerText;
            t.style.display = "none";
            n.value = i;
            n.style.display = "inline-block";
            n.focus();
          });
          n.addEventListener("click", function (e) {
            n.focus();
          });
          n.addEventListener("keydown", function (i) {
            if (i.keyCode === 13) {
              var currentRadius = n.value;
              n.style.display = "none";
              t.innerText = currentRadius;
              e.dispatchRadiusChange({
                radius: currentRadius,
                overlay: e.overlay,
              });
            }
          });
          n.addEventListener("blur", function (i) {
            var nodeValue = n.value;
            n.style.display = "none";
            t.style.display = "inline-block";
            t.innerText = nodeValue;
            e.dispatchRadiusChange({
              radius: nodeValue,
              overlay: e.overlay,
            });
          });
        },
      },
      {
        key: "bindRectEvent",
        value() {
          var e = this;
          var t = document.getElementById("rectWidth");
          var n = document.getElementById("rectWidthInput");
          var i = document.getElementById("rectHeight");
          var heightElement = document.getElementById("rectHeightInput");
          n.value = t.innerText;
          heightElement.value = i.innerText;
          t.addEventListener("click", function (e) {
            var i = t.innerText;
            t.style.display = "none";
            n.value = i;
            n.style.display = "inline-block";
            n.focus();
          });
          i.addEventListener("click", function (e) {
            var t = i.innerText;
            i.style.display = "none";
            heightElement.value = t;
            heightElement.style.display = "inline-block";
            heightElement.focus();
          });
          n.addEventListener("click", function (e) {
            n.focus();
          });
          heightElement.addEventListener("click", function (e) {
            heightElement.focus();
          });
          n.addEventListener("keydown", function (option) {
            if (option.keyCode === 13) {
              var s = n.value;
              var heightValue = heightElement.value;
              heightElement.style.display = "none";
              heightElement.style.display = "none";
              t.style.display = "inline-block";
              heightElement.style.display = "inline-block";
              t.innerText = s;
              i.innerText = heightValue;
              e.dispatchRectWHChange({
                width: s,
                height: heightValue,
                overlay: e.overlay,
              });
            }
          });
          heightElement.addEventListener("keydown", function (entity) {
            if (entity.keyCode === 13) {
              var s = n.value;
              var elementHeight = heightElement.value;
              n.style.display = "none";
              heightElement.style.display = "none";
              t.style.display = "inline-block";
              i.style.display = "inline-block";
              t.innerText = s;
              i.innerText = elementHeight;
              e.dispatchRectWHChange({
                width: s,
                height: elementHeight,
                overlay: e.overlay,
              });
            }
          });
        },
      },
      {
        key: "setInfo",
        value(e, t) {
          this.setNumber(t);
          this.setPosition(e);
        },
      },
      {
        key: "setNumber",
        value(e) {
          if (this.type === "circle") {
            document.getElementById("screenshotNum").textContent = e;
          } else {
            document.getElementById("rectWidth").textContent = e.width;
            document.getElementById("rectHeight").textContent = e.height;
          }
        },
      },
      {
        key: "setPosition",
        value(e) {
          this.point = e;
          var t = this.type;
          var n = this.map.pointToOverlayPixel(this.point);
          if (t === "circle") {
            this.div.style.left = n.x - 30 + "px";
            this.div.style.top = n.y - 40 + "px";
          } else if (t === "rectangle") {
            this.div.style.left = n.x + "px";
            this.div.style.top = n.y - 45 + "px";
          }
        },
      },
      {
        key: "draw",
        value() {
          var e = this.map.pointToOverlayPixel(this.point);
          if (this.type === "circle") {
            this.div.style.left = e.x - 30 + "px";
            this.div.style.top = e.y - 40 + "px";
          } else if (this.type === "rectangle") {
            this.div.style.left = e.x + "px";
            this.div.style.top = e.y - 45 + "px";
          }
        },
      },
      {
        key: "dispatchRadiusChange",
        value(e) {
          var t = new currentTime("radiuschange", e);
          this.dispatchEvent(t);
        },
      },
      {
        key: "dispatchRectWHChange",
        value(e) {
          var t = new currentTime("rectwhchange", e);
          this.dispatchEvent(t);
        },
      },
    ]);
  })(esultAlias(BMapGL.Overlay, ____initializeMap));
  var continuousInt = (function (e) {
    function t(e, ___________________radius, currentData) {
      var s;
      isValidObject(this, t);
      (s = n(this, t, [e, ___________________radius, currentData])).type =
        initializer.DRAWING_RECTANGLE;
      s.scene.setCurrentDrawType(s.type);
      return s;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "setIcon",
        value(e) {
          this.moveIcon = e;
        },
      },
      {
        key: "edit",
        value(e, t) {
          var n = this;
          this.overlay = e;
          var i = this.getBox(e.getPath());
          var lineStart = i.startPoint;
          var ___boundingBox = i.endPoint;
          var s = [];
          for (
            var ectangleAllC = this.getRectAllPoints(lineStart, ___boundingBox),
              _intersection = [],
              _distanceTo = this.scene.map
                .getDistance(lineStart, ectangleAllC[2])
                .toFixed(0),
              c = this.scene.map
                .getDistance(lineStart, ectangleAllC[6])
                .toFixed(0),
              ______user = new _ealtimeData(
                "rectangle",
                ectangleAllC[0],
                {
                  width: _distanceTo,
                  height: c,
                },
                e,
                this.scene,
              ),
              boundingBoxC = 0;
            ectangleAllC.length > boundingBoxC;
            boundingBoxC++
          ) {
            var draggableMapP = new BMapGL.Marker(ectangleAllC[boundingBoxC]);
            draggableMapP.setIcon(
              this.target && this.target.moveIcon
                ? this.target.moveIcon
                : this.moveIcon,
            );
            draggableMapP.enableDragging();
            s.push(draggableMapP);
            this.scene.map.addOverlay(draggableMapP);
            _intersection[boundingBoxC] = _tartIndex.mc2ll(
              draggableMapP.point,
              this.scene.map,
            );
            draggableMapP.addEventListener("mousedown", function (e) {
              ___boundingBox = _tartIndex.mc2ll(e.target.point, n.scene.map);
            });
            draggableMapP.addEventListener("dragging", function (t) {
              var i = t.latLng;
              for (
                var intersectionR = 0;
                _intersection.length > intersectionR;
                intersectionR++
              ) {
                if (___boundingBox.lng == _intersection[intersectionR].lng) {
                  ectangleAllC[intersectionR].lng = i.lng;
                }
                if (___boundingBox.lat == _intersection[intersectionR].lat) {
                  ectangleAllC[intersectionR].lat = i.lat;
                }
              }
              ectangleAllC = n.getRectAllPoints(
                ectangleAllC[0],
                ectangleAllC[4],
              );
              for (
                var ____________________currentIndex = 0;
                s.length > ____________________currentIndex;
                ____________________currentIndex++
              ) {
                s[____________________currentIndex].setPosition(
                  ectangleAllC[____________________currentIndex],
                );
              }
              _distanceTo = n.scene.map
                .getDistance(ectangleAllC[0], ectangleAllC[2])
                .toFixed(0);
              c = n.scene.map
                .getDistance(ectangleAllC[0], ectangleAllC[6])
                .toFixed(0);
              ______user.setInfo(ectangleAllC[0], {
                width: _distanceTo,
                height: c,
              });
              apiResponse.setPosition(ectangleAllC[3], true);
              e.setPath(ectangleAllC);
            });
            draggableMapP.addEventListener("dragend", function (t) {
              for (var i = 0; s.length > i; i++) {
                _intersection[i] = _tartIndex.mc2ll(s[i].point, n.scene.map);
              }
              apiResponse.updateWindow();
              var __ealTimeInfo = new currentTime(____eventObject.CHANGE, e);
              n.target.dispatchEvent(__ealTimeInfo);
            });
          }
          ______user.addEventListener("rectwhchange", function (t) {
            var i = t.target.width;
            var targetHeight = t.target.height;
            var eastIntersect = _tartIndex.getPointByDistance(
              ectangleAllC[0],
              i,
              "east",
            );
            var targetPointOn = _tartIndex.getPointByDistance(
              ectangleAllC[0],
              targetHeight,
              "south",
            );
            ectangleAllC[4].lng = eastIntersect.lng;
            ectangleAllC[4].lat = targetPointOn.lat;
            ectangleAllC = n.getRectAllPoints(ectangleAllC[0], ectangleAllC[4]);
            for (var c = 0; s.length > c; c++) {
              s[c].setPosition(ectangleAllC[c]);
            }
            ______user.setInfo(ectangleAllC[0], {
              width: i,
              height: targetHeight,
            });
            apiResponse.setPosition(ectangleAllC[3], true);
            e.setPath(ectangleAllC);
            for (var _____index = 0; s.length > _____index; _____index++) {
              _intersection[_____index] = _tartIndex.mc2ll(
                s[_____index].point,
                n.scene.map,
              );
            }
            apiResponse.updateWindow();
            var _currentData = new currentTime(____eventObject.CHANGE, e);
            n.target.dispatchEvent(_currentData);
          });
          this.overlays = [s, ______user];
          var apiResponse = this.addOperateWindow({
            limit: t,
            point: ectangleAllC[3],
            overlay: e,
          });
          this.scene.map.addOverlay(______user);
          this.dispatchEvent(new currentTime(____eventObject.INIT));
          this.onlinevertexdragging = function (e) {
            var t;
            var i = e.overlay;
            var apCoords = BMapGL.Projection.convertMC2LL(i.getPoint());
            if ((t = n.getSnap(apCoords, n.scene.instances))) {
              e.from.point = BMapGL.Projection.convertLL2MC(t);
              i.setPoint(e.from.point);
            }
          };
          e.addEventListener("onlinevertexdragging", this.onlinevertexdragging);
        },
      },
      {
        key: "getBox",
        value(e) {
          var t = Infinity;
          var n = -Infinity;
          var i = -Infinity;
          var inimumElev = Infinity;
          e.forEach(function (e) {
            if (t > e.lng) {
              t = e.lng;
            }
            if (e.lat > n) {
              n = e.lat;
            }
            if (e.lng > i) {
              i = e.lng;
            }
            if (inimumElev > e.lat) {
              inimumElev = e.lat;
            }
          });
          return {
            startPoint: new BMapGL.Point(t, n),
            endPoint: new BMapGL.Point(i, inimumElev),
          };
        },
      },
      {
        key: "getRectAllPoints",
        value(e, t) {
          var n = new BMapGL.Point(e.lng, e.lat);
          var i = new BMapGL.Point(t.lng, e.lat);
          var currentPoint = new BMapGL.Point(t.lng, t.lat);
          var newLocation = new BMapGL.Point(e.lng, t.lat);
          return [
            n,
            new BMapGL.Point((e.lng + t.lng) / 2, e.lat),
            i,
            new BMapGL.Point(t.lng, (e.lat + t.lat) / 2),
            currentPoint,
            new BMapGL.Point((e.lng + t.lng) / 2, t.lat),
            newLocation,
            new BMapGL.Point(e.lng, (e.lat + t.lat) / 2),
          ];
        },
      },
      {
        key: "getRectanglePoint",
        value(e, t) {
          return [
            new BMapGL.Point(e.lng, e.lat),
            new BMapGL.Point(t.lng, e.lat),
            new BMapGL.Point(t.lng, t.lat),
            new BMapGL.Point(e.lng, t.lat),
          ];
        },
      },
    ]);
  })(_________currentTime);
  var uiElement = (function (e) {
    function t(e) {
      var esultOfN;
      var _____options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      isValidObject(this, t);
      (esultOfN = n(this, t, [e, _____options])).type =
        initializer.DRAWING_RECTANGLE;
      esultOfN.polygon = null;
      esultOfN.startPoint = null;
      esultOfN.hideTip = false;
      esultOfN.holeSource = null;
      esultOfN.isCotiHole = false;
      esultOfN.scene.setCurrentDrawType(esultOfN.type);
      esultOfN.moveIcon = new BMapGL.Icon(
        initialMapIdx,
        new BMapGL.Size(10, 10),
      );
      esultOfN.moveIcon.setImageSize(new BMapGL.Size(10, 10));
      if (_____options.hideTip) {
        esultOfN.hideTip = _____options.hideTip;
      }
      if (esultOfN.isOpen) {
        esultOfN.open();
      }
      esultOfN.holeSource = _____options.holeSource || null;
      esultOfN.isCotiHole = _____options.isCotiHole || false;
      return esultOfN;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "getRectAllPoints",
        value(e, t) {
          var n = new BMapGL.Point(e.lng, e.lat);
          var i = new BMapGL.Point(t.lng, e.lat);
          var destination = new BMapGL.Point(t.lng, t.lat);
          var idpoint = new BMapGL.Point(e.lng, t.lat);
          return [
            n,
            new BMapGL.Point((e.lng + t.lng) / 2, e.lat),
            i,
            new BMapGL.Point(t.lng, (e.lat + t.lat) / 2),
            destination,
            new BMapGL.Point((e.lng + t.lng) / 2, t.lat),
            idpoint,
            new BMapGL.Point(e.lng, (e.lat + t.lat) / 2),
          ];
        },
      },
      {
        key: "getRectanglePoint",
        value(e, t) {
          return [
            new BMapGL.Point(e.lng, e.lat),
            new BMapGL.Point(t.lng, e.lat),
            new BMapGL.Point(t.lng, t.lat),
            new BMapGL.Point(e.lng, t.lat),
          ];
        },
      },
      {
        key: "startAction",
        value(e) {
          if (!this.scene.getStopStatus() && e.buttons !== 4) {
            _tartIndex.stopBubble(e);
            _tartIndex.preventDefault(e);
            var t = (this.startPoint = e.point);
            if (this.enableSnap && this.match) {
              t = this.startPoint = this.match;
            }
            this.deletable = true;
            var n = (this.endPoint = t);
            this.polygon = new BMapGL.Polygon(
              this.getRectanglePoint(t, n),
              this.baseOptions,
            );
            this.scene.map.addOverlay(this.polygon);
            this.scene.mask.enableEdgeMove();
            this.scene.mask.removeEventListener("mousedown", this.mousedown);
            this.scene.mask.removeEventListener("mousemove", this.mousemove);
            this.scene.mask.addEventListener(
              "mousemove",
              (this.mousemove = this.moveAction.bind(this)),
            );
            this.scene.mask.addEventListener(
              "mouseup",
              (this.mouseup = this.endAction.bind(this)),
            );
          }
        },
      },
      {
        key: "moveAction",
        value(e) {
          this.scene.map.removeOverlay(this.tipLabel);
          if (!this.scene.getStopStatus()) {
            if (
              this.enableSnap &&
              ((this.match = this.getSnap(e.point, this.scene.instances)),
              this.match)
            ) {
              this.polygon.setPath(
                this.getRectanglePoint(this.startPoint, this.match),
              );
            } else {
              this.match = null;
              this.polygon.setPath(
                this.getRectanglePoint(this.startPoint, e.point),
              );
              var t = this.getRectAllPoints(this.startPoint, e.point);
              var n = this.scene.map
                .getDistance(this.startPoint, t[2])
                .toFixed(0);
              var i = this.scene.map
                .getDistance(this.startPoint, t[6])
                .toFixed(0);
              if (!this.hideTip) {
                this.tipLabel = new BMapGL.Label(
                  "尺寸：" + n + "米 x " + i + "米<br>松开结束绘制",
                  {
                    position: e.point,
                    offset: new BMapGL.Size(10, 10),
                  },
                );
                this.tipLabel.setStyle(this.options.labelOptions);
                this.scene.map.addOverlay(this.tipLabel);
              }
            }
          }
        },
      },
      {
        key: "endAction",
        value(e) {
          if (!this.scene.getStopStatus()) {
            this.deletable = false;
            this.scene.map.removeOverlay(this.tipLabel);
            this.scene.mask.removeEventListener("mousemove", this.mousemove);
            this.scene.mask.removeEventListener("mouseup", this.mouseup);
            this.scene.mask.disableEdgeMove();
            if (this.enableSnap) {
              this.match = this.getSnap(e.point, this.scene.instances);
              if (this.match) {
                this.polygon.setPath(
                  this.getRectanglePoint(this.startPoint, this.match),
                );
              }
            } else {
              this.polygon.setPath(
                this.getRectanglePoint(this.startPoint, e.point),
              );
            }
            if (this.isSeries) {
              if (!this.isOnMap) {
                this.bindEvent();
              }
            } else {
              this.scene.mask.hide();
            }
            if (this.isOnMap) {
              var t = null;
              if (this.options.limit) {
                t = this.options.limit.area;
              }
              var n = (this.editOpe = new continuousInt(this.scene, this));
              this.registEvent(n);
              n.open(this.polygon, t);
            } else {
              this.scene.map.removeOverlay(this.polygon);
              if (this.isCotiHole && this.holeCut) {
                this.holeCut(this.polygon);
              }
              this.emitEventIsnomap(this.polygon);
            }
          }
        },
      },
      {
        key: "setCotiHoleSource",
        value(e) {
          if (e && e instanceof BMapGL.Polygon) {
            this.holeSource = e;
          }
        },
      },
      {
        key: "holeCut",
        value(e) {
          if (this.holeSource && this.holeSource instanceof BMapGL.Polygon) {
            var t = this.holeSource.getPath();
            var n = e.getPath();
            if (this.holeSource.hasMultipleParts) {
              t.push(n);
            } else {
              t = [t, n];
            }
            this.holeSource.setPath(t);
          }
        },
      },
      {
        key: "mousemoveAction",
        value(e) {
          if (this.scene.getStopStatus()) {
            this.scene.map.removeOverlay(this.tipLabel);
          } else {
            if (e.buttons !== 4) {
              _tartIndex.preventDefault(e);
              _tartIndex.stopBubble(e);
            }
            if (this.enableSnap) {
              this.match = this.getSnap(e.point, this.scene.instances);
            }
            this.scene.map.removeOverlay(this.tipLabel);
            if (!this.hideTip) {
              this.tipLabel = new BMapGL.Label("按住确认起点，拖拽进行绘制", {
                position: e.point,
                offset: new BMapGL.Size(10, 10),
              });
              this.tipLabel.setStyle(this.options.labelOptions);
              this.scene.map.addOverlay(this.tipLabel);
            }
          }
        },
      },
      {
        key: "bindEvent",
        value() {
          var e = this;
          if (this.isOpen) {
            propertyProxy(
              t,
              "setRunningAction",
              this,
              3,
            )([
              true,
              function () {
                e.setCurrentStatus(_initializeMap.STATUS_DRAWING);
                e.deletable = false;
                if (e.mousedown && e.mousemove) {
                  e.scene.mask.removeEventListener("mousedown", e.mousedown);
                  e.scene.mask.removeEventListener("mousemove", e.mousemove);
                }
                e.scene.mask.addEventListener(
                  "mousemove",
                  (e.mousemove = e.mousemoveAction.bind(e)),
                );
                e.scene.mask.addEventListener(
                  "mousedown",
                  (e.mousedown = e.startAction.bind(e)),
                );
              },
            ]);
          }
        },
      },
      {
        key: "removeDrawing",
        value() {
          if (this.deletable) {
            this.scene.map.removeOverlay(this.polygon);
          }
        },
      },
      {
        key: "close",
        value(e) {
          this.deletable = false;
          this.scene.map.removeOverlay(this.tipLabel);
          this.scene.map.removeOverlay(this.matchOverlay);
          this.scene.mask.removeEventListener("mouseup", this.mouseup);
          this.scene.mask.removeEventListener("mousedown", this.mousedown);
          this.scene.mask.removeEventListener("mousemove", this.mousemove);
          propertyProxy(t, "setRunningAction", this, 3)([false]);
          if (e) {
            e();
          }
        },
      },
    ]);
  })(networkInfo);
  var _circumference = (function (e) {
    function t(e, ____________________radius, animationTick) {
      var s;
      isValidObject(this, t);
      (s = n(this, t, [e, ____________________radius, animationTick])).type =
        initializer.DRAWING_CIRCLE;
      s.scene.setCurrentDrawType(s.type);
      return s;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "setCenterIcon",
        value(e) {
          this.centerIcon = e;
        },
      },
      {
        key: "setMoveIcon",
        value(e) {
          this.moveIcon = e;
        },
      },
      {
        key: "edit",
        value(e, t) {
          var n = this;
          this.overlay = e;
          this.centerPoint = e.getCenterIn().latLng;
          var i = new BMapGL.Point(
            e.getBounds().getNorthEast().lng,
            this.centerPoint.lat,
          );
          var longitudeNorE = (this.centerMarker = new BMapGL.Marker(
            this.centerPoint,
          ));
          longitudeNorE.setIcon(this.centerIcon);
          longitudeNorE.enableDragging();
          longitudeNorE.addEventListener(
            "dragstart",
            this.centerDragstart.bind(this),
          );
          longitudeNorE.addEventListener(
            "dragging",
            this.centerDragging.bind(this),
          );
          longitudeNorE.addEventListener(
            "dragend",
            this.centerDragend.bind(this),
          );
          this.scene.map.addOverlay(longitudeNorE);
          var northeastLong = (this.moveMarker = new BMapGL.Marker(i));
          northeastLong.setIcon(this.circleMoveIcon);
          northeastLong.enableDragging();
          var s = (this.polyline = new BMapGL.Polyline(
            [this.centerPoint, i],
            this.baseOptions || {},
          ));
          var neLongitude = new BMapGL.Point(
            (e.getBounds().getNorthEast().lng + this.centerPoint.lng) / 2,
            this.centerPoint.lat,
          );
          var bmapglNElong = (this.radiusWindow = new _ealtimeData(
            "circle",
            neLongitude,
            Math.ceil(e.getRadius()),
            e,
            this.scene,
          ));
          this.overlays = [longitudeNorE, northeastLong, s, bmapglNElong];
          var __hour = (this.operateWindow = this.addOperateWindow({
            limit: t,
            point: i,
            overlay: e,
          }));
          this.scene.map.addOverlay(northeastLong);
          this.scene.map.addOverlay(s);
          this.scene.map.addOverlay(bmapglNElong);
          var c = 1;
          bmapglNElong.addEventListener("radiuschange", function (t) {
            if (t.target.radius && !isNaN(t.target.radius)) {
              e.setRadius((c = t.target.radius));
              var i = _tartIndex.getPointByDistance(n.centerPoint, c, "east");
              var newGeoPoint = new BMapGL.Point(i.lng, n.centerPoint.lat);
              var isRightOf =
                i.lng > n.centerPoint.lng
                  ? (e.getBounds().getNorthEast().lng + n.centerPoint.lng) / 2
                  : (e.getBounds().getSouthWest().lng + n.centerPoint.lng) / 2;
              var updated = new BMapGL.Point(isRightOf, n.centerPoint.lat);
              northeastLong.setPosition(newGeoPoint);
              bmapglNElong.setInfo(updated, c);
              __hour.setPosition(newGeoPoint, true);
              __hour.updateWindow();
              s.setPath([n.centerPoint, newGeoPoint]);
              var price = new currentTime(____eventObject.CHANGE, e);
              n.target.dispatchEvent(price);
            }
          });
          northeastLong.addEventListener("dragging", function (t) {
            var i = new BMapGL.Point(t.latLng.lng, n.centerPoint.lat);
            var centeredLong =
              t.latLng.lng > n.centerPoint.lng
                ? (e.getBounds().getNorthEast().lng + n.centerPoint.lng) / 2
                : (e.getBounds().getSouthWest().lng + n.centerPoint.lng) / 2;
            var __esponse = t.latLng.lng > n.centerPoint.lng;
            var ____________currentTime = new BMapGL.Point(
              centeredLong,
              n.centerPoint.lat,
            );
            t.target.setPosition(i);
            bmapglNElong.setInfo(
              ____________currentTime,
              n.scene.map.getDistance(n.centerPoint, t.latLng).toFixed(0),
            );
            __hour.setPosition(i, __esponse);
            s.setPath([n.centerPoint, i]);
            c = n.scene.map.getDistance(n.centerPoint, t.latLng).toFixed(0);
            e.setRadius(n.scene.map.getDistance(n.centerPoint, t.latLng));
          });
          northeastLong.addEventListener("dragend", function (t) {
            __hour.updateWindow();
            var i = new currentTime(____eventObject.CHANGE, e);
            n.target.dispatchEvent(i);
          });
          this.dispatchEvent(new currentTime(____eventObject.INIT));
        },
      },
      {
        key: "centerDragstart",
        value(e) {
          this.moveMarker.hide();
          this.polyline.hide();
          this.radiusWindow.hide();
          this.operateWindow.hide();
        },
      },
      {
        key: "centerDragging",
        value(e) {
          this.centerPoint = e.latLng;
          this.overlay.setCenter(e.latLng);
        },
      },
      {
        key: "centerDragend",
        value(e) {
          this.centerPoint = e.latLng;
          var t = new BMapGL.Point(
            this.overlay.getBounds().getNorthEast().lng,
            this.centerPoint.lat,
          );
          this.moveMarker.setPosition(t);
          this.moveMarker.show();
          var n = new BMapGL.Point(
            this.overlay.getBounds().getNorthEast().lng,
            this.centerPoint.lat,
          );
          this.polyline.setPath([this.centerPoint, n]);
          this.polyline.show();
          var i =
            (this.overlay.getBounds().getNorthEast().lng +
              this.centerPoint.lng) /
            2;
          var apLocation = new BMapGL.Point(i, this.centerPoint.lat);
          this.radiusWindow.setPosition(apLocation);
          this.operateWindow.setPosition(n, true);
          this.radiusWindow.show();
          this.operateWindow.show();
          var isUserInGroup = new currentTime(
            ____eventObject.CHANGE,
            this.circle,
          );
          this.target.dispatchEvent(isUserInGroup);
        },
      },
    ]);
  })(_________currentTime);
  var _handleEvent = (function (e) {
    function t(e) {
      var circleDrawing;
      var optionsConfig =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      isValidObject(this, t);
      (circleDrawing = n(this, t, [e, optionsConfig])).type =
        initializer.DRAWING_CIRCLE;
      circleDrawing.circle = null;
      circleDrawing.overlays = [];
      circleDrawing.centerPoint = null;
      circleDrawing.radius = 1;
      circleDrawing.moveMarker = null;
      circleDrawing.polyline = null;
      circleDrawing.radiusWindow = null;
      circleDrawing.operateWindow = null;
      circleDrawing.hideTip = false;
      circleDrawing.scene.setCurrentDrawType(circleDrawing.type);
      if (optionsConfig.hideTip) {
        circleDrawing.hideTip = optionsConfig.hideTip;
      }
      if (circleDrawing.isOpen) {
        circleDrawing.open();
      }
      return circleDrawing;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "startAction",
        value(e) {
          if (!this.scene.getStopStatus()) {
            this.centerPoint = e.point;
            this.deletable = true;
            this.circle = new BMapGL.Circle(
              this.centerPoint,
              this.radius,
              this.baseOptions,
            );
            this.scene.map.addOverlay(this.circle);
            this.scene.mask.enableEdgeMove();
            this.scene.mask.removeEventListener("mousemove", this.mousemove);
            this.scene.mask.addEventListener(
              "mousemove",
              (this.mousemove = this.moveAction.bind(this)),
            );
            this.scene.mask.addEventListener(
              "mouseup",
              (this.mouseup = this.endAction.bind(this)),
            );
          }
        },
      },
      {
        key: "moveAction",
        value(e) {
          this.scene.map.removeOverlay(this.tipLabel);
          if (!this.scene.getStopStatus()) {
            this.radius = this.scene.map
              .getDistance(this.centerPoint, e.point)
              .toFixed(0);
            this.circle.setRadius(this.radius);
            if (!this.hideTip) {
              this.tipLabel = new BMapGL.Label(
                "半径：" + this.radius + "米<br>松开完成绘制",
                {
                  position: e.point,
                  offset: new BMapGL.Size(10, 10),
                },
              );
              this.tipLabel.setStyle(this.options.labelOptions);
              this.scene.map.addOverlay(this.tipLabel);
            }
          }
        },
      },
      {
        key: "endAction",
        value(e) {
          if (!this.scene.getStopStatus()) {
            this.deletable = false;
            this.scene.map.removeOverlay(this.tipLabel);
            this.scene.mask.disableEdgeMove();
            this.scene.mask.removeEventListener("mousemove", this.mousemove);
            this.scene.mask.removeEventListener("mouseup", this.mouseup);
            if (this.isSeries) {
              if (!this.isOnMap) {
                this.bindEvent();
              }
            } else {
              this.scene.mask.hide();
            }
            if (this.isOnMap) {
              var t = null;
              if (this.limit) {
                t = this.limit.area;
              }
              var n = (this.editOpe = new _circumference(this.scene, this));
              this.registEvent(n);
              n.open(this.circle, t);
            } else {
              this.scene.map.removeOverlay(this.centerMarker);
              this.scene.map.removeOverlay(this.circle);
              this.emitEventIsnomap(this.circle);
            }
          }
        },
      },
      {
        key: "mousedownAction",
        value(e) {
          if (!this.scene.getStopStatus()) {
            if (e.buttons !== 4) {
              _tartIndex.preventDefault(e);
              _tartIndex.stopBubble(e);
              this.scene.mask.removeEventListener("mousedown", this.mousedown);
              if (this.centerPoint == null) {
                this.startAction(e);
              }
            }
          }
        },
      },
      {
        key: "mousemoveAction",
        value(e) {
          this.scene.map.removeOverlay(this.tipLabel);
          if (!this.scene.getStopStatus()) {
            if (e.buttons !== 4) {
              _tartIndex.preventDefault(e);
              _tartIndex.stopBubble(e);
            }
            if (!this.hideTip) {
              this.tipLabel = new BMapGL.Label("按下确认中心点，拖拽确认半径", {
                position: e.point,
                offset: new BMapGL.Size(10, 10),
              });
              this.tipLabel.setStyle(this.options.labelOptions);
              this.scene.map.addOverlay(this.tipLabel);
            }
          }
        },
      },
      {
        key: "bindEvent",
        value() {
          var e = this;
          if (this.isOpen) {
            propertyProxy(
              t,
              "setRunningAction",
              this,
              3,
            )([
              true,
              function () {
                e.centerPoint = null;
                e.radius = 1;
                e.setCurrentStatus(_initializeMap.STATUS_DRAWING);
                e.deletable = false;
                if (e.mousedown && e.mousemove) {
                  e.scene.mask.removeEventListener("mousedown", e.mousedown);
                  e.scene.mask.removeEventListener("mousemove", e.mousemove);
                }
                e.scene.mask.addEventListener(
                  "mousemove",
                  (e.mousemove = e.mousemoveAction.bind(e)),
                );
                e.scene.mask.addEventListener(
                  "mousedown",
                  (e.mousedown = e.mousedownAction.bind(e)),
                );
              },
            ]);
          }
        },
      },
      {
        key: "removeDrawing",
        value() {
          if (this.deletable) {
            this.scene.map.removeOverlay(this.circle);
          }
        },
      },
      {
        key: "close",
        value(e) {
          this.deletable = false;
          propertyProxy(t, "setRunningAction", this, 3)([false]);
          this.scene.map.removeOverlay(this.tipLabel);
          this.scene.mask.removeEventListener("mouseup", this.mouseup);
          this.scene.mask.removeEventListener("mousedown", this.mousedown);
          this.scene.mask.removeEventListener("mousemove", this.mousemove);
          if (e) {
            e();
          }
        },
      },
    ]);
  })(networkInfo);
  var deviceInfo = (function (e) {
    function t(e, _____________________radius, apObject) {
      var s;
      isValidObject(this, t);
      (s = n(this, t, [e, _____________________radius, apObject])).type =
        initializer.DRAWING_MARKER;
      s.scene.setCurrentDrawType(s.type);
      return s;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "setIcon",
        value(e) {
          this.moveIcon = e;
        },
      },
      {
        key: "edit",
        value(e) {
          e.enableDragging();
          e.addEventListener("dragstart", this.centerDragstart.bind(this));
          e.addEventListener("dragging", this.centerDragging.bind(this));
          e.addEventListener("dragend", this.centerDragend.bind(this));
        },
      },
      {
        key: "centerDragstart",
        value(e) {},
      },
      {
        key: "centerDragging",
        value(e) {
          var t;
          var n = e.target;
          var i = BMapGL.Projection.convertMC2LL(n.point);
          if ((t = this.getSnap(i, this.scene.instances))) {
            e.point = BMapGL.Projection.convertLL2MC(t);
            n.setPoint(e.point);
          }
        },
      },
      {
        key: "centerDragend",
        value(e) {
          this.emitOkEvent(this.overlay, true, true);
          var t = new currentTime(____eventObject.CHANGE, this.overlay);
          this.target.dispatchEvent(t);
        },
      },
      {
        key: "closeOpe",
        value(e) {
          e.disableDragging();
          e.removeEventListener("dragstart", this.centerDragstart);
          e.removeEventListener("dragging", this.centerDragging);
          e.removeEventListener("dragend", this.centerDragend);
        },
      },
    ]);
  })(_________currentTime);
  var fetchInfo = (function () {
    function e(t) {
      var drawingState;
      var ______options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      isValidObject(this, e);
      (drawingState = n(this, e)).scene = t;
      drawingState.opts = ______options;
      drawingState.drawingItems =
        ______options.drawingItems || ___initializeMap;
      drawingState.defaultAnchor = ______options.anchor || BMAP_ANCHOR_TOP_LEFT;
      drawingState.defaultOffset =
        ______options.offset || new BMapGL.Size(20, 20);
      drawingState.initialize(drawingState.scene.map);
      return drawingState;
    }
    etupInherit(e, BMapGL.Control);
    return configure(e, [
      {
        key: "initialize",
        value(e) {
          this._map = e;
          var t = (this.container = document.createElement("div"));
          t.className = "BMap_Drawing";
          var n = (this.panel = document.createElement("div"));
          n.className = "BMap_Draw_Panel";
          t.appendChild(n);
          var i = this.generalHtml(e);
          n.appendChild(i);
          var _____________currentTime = (this.tip =
            document.createElement("div"));
          _____________currentTime.className = "BMapDraw_tip";
          _____________currentTime.innerHTML =
            '<p class="BMapDraw_tip_title"></p><p class="BMapDraw_tip_text"></p>';
          if (this.opts.enableTips) {
            n.appendChild(_____________currentTime);
          }
          e.getContainer().appendChild(t);
          this.bindEvt();
          return t;
        },
      },
      {
        key: "generalHtml",
        value(e) {
          var t = this;
          var n = {
            hander: "拖动地图",
            marker: "标记点",
            polyline: "折线",
            polygon: "多边形",
            circle: "圆形",
            rectangle: "矩形",
          };
          var i = function (e, i) {
            var linkElement = document.createElement("a");
            linkElement.className = e;
            linkElement.href = "javascript:void(0)";
            linkElement.setAttribute("drawingType", i);
            linkElement.setAttribute("onfocus", "this.blur()");
            linkElement.addEventListener("mouseenter", function (e) {
              var i = e.target.getAttribute("drawingType");
              var tooltipText = n[i];
              if (i === "hander") {
                t.tip.children[0].innerText = tooltipText;
                t.tip.children[1].innerText = "使用鼠标拖动地图";
              } else {
                t.tip.className += " " + i;
                t.tip.children[0].innerText = tooltipText;
                t.tip.children[1].innerText =
                  "使用" + tooltipText + "选出目标区域";
              }
              t.tip.style.display = "block";
            });
            linkElement.addEventListener("mouseleave", function (e) {
              for (
                var n = e.target.getAttribute("drawingType"),
                  i = " " + t.tip.className.replace(/[\t\r\n]/g, "") + " ";
                i.indexOf(" " + n + " ") >= 0;

              ) {
                i = i.replace(" " + n + " ", " ");
              }
              t.tip.className = i.replace(/^\s+|\s+$/g, "");
              t.tip.style.display = "none";
            });
            return linkElement;
          };
          var getLocation = document.createDocumentFragment();
          for (
            var _______currentItem = 0, s = this.drawingItems.length;
            s > _______currentItem;
            _______currentItem++
          ) {
            getLocation.appendChild(
              i(
                "BMapDraw_Box BMapDraw_" +
                  this.drawingItems[_______currentItem],
                this.drawingItems[_______currentItem],
              ),
            );
          }
          return getLocation;
        },
      },
      {
        key: "setStyleByDrawingItems",
        value(e = "marker") {
          var t = this.panel.getElementsByTagName("a");
          for (var n = 0, i = t.length; i > n; n++) {
            var ________currentItem = t[n];
            if (________currentItem.getAttribute("drawingType") === e) {
              ________currentItem.className =
                "BMapDraw_Box BMapDraw_" + e + "_hover";
            } else {
              ________currentItem.className =
                ________currentItem.className.replace(/_hover/, "");
            }
          }
        },
      },
      {
        key: "bindEventByDrawingType",
        value(e) {
          var t = this.scene;
          if (t.isOpen && t.drawType === e) {
            t.close();
            t.map.enableDoubleClickZoom();
          } else {
            switch (e) {
              case "marker":
                new _____initializeMap(t).open();
                break;
              case "polyline":
                new aiModel(t).open();
                break;
              case "polygon":
                new getRealTimeLl(t).open();
                break;
              case "circle":
                new _handleEvent(t).open();
                break;
              case "rectangle":
                new uiElement(t).open();
            }
          }
        },
      },
      {
        key: "bindEvt",
        value(e) {
          var t = this;
          _tartIndex.on(this.panel, "click", function (e) {
            var n = _tartIndex.getTarget(e).getAttribute("drawingType");
            t.setStyleByDrawingItems(n);
            t.bindEventByDrawingType(n);
          });
        },
      },
    ]);
  })();
  var ______initializeMap = (function (e) {
    function t(e) {
      var _esultObject;
      var _______options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      isValidObject(this, t);
      (_esultObject = n(this, t)).type = null;
      _esultObject.instance = null;
      _esultObject.graphicOpts = defaultValue;
      _esultObject.labelOptions = _programState;
      _esultObject.isOnMap = false;
      _esultObject.isSeries = false;
      _esultObject.skipEditing = false;
      _esultObject.mouseMove = true;
      _esultObject.enableSnap = false;
      _esultObject.limitPoint = -1;
      _esultObject.scene = e;
      _esultObject.defineProperty(_______options);
      return _esultObject;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "close",
        value(e) {
          if (this.instance) {
            this.instance.close();
            this.instance = null;
          }
          if (e) {
            e();
          }
        },
      },
      {
        key: "open",
        value(e) {
          this.close();
          this.scene.close();
          this.defineProperty(e);
          if (this.type) {
            this.doAction();
          }
        },
      },
      {
        key: "doAction",
        value() {
          var e = this;
          this.data = [];
          var t = {
            isSelectDraw: true,
            isOpen: true,
            enableSnap: this.enableSnap,
            isOnMap: this.isOnMap,
            isSeries: this.isSeries,
            skipEditing: this.skipEditing,
            labelOptions: this.labelOptions,
            baseOpts: this.graphicOpts,
            mouseMove: this.mouseMove,
            limitPoint: this.limitPoint,
          };
          switch (this.type) {
            case initializer.DRAWING_POLYLINE:
              this.instance = new aiModel(this.scene, t);
              break;
            case initializer.DRAWING_POLYGON:
              this.instance = new getRealTimeLl(this.scene, t);
              break;
            case initializer.DRAWING_RECTANGLE:
              this.instance = new uiElement(this.scene, t);
              break;
            case initializer.DRAWING_CIRCLE:
              this.instance = new _handleEvent(this.scene, t);
              break;
            case initializer.DRAWING_MARKER:
              this.instance = new _____initializeMap(this.scene, t);
              break;
            case initializer.DRAWING_POINT:
              this.instance = new onEvent(this.scene.map);
              break;
            default:
              this.close();
          }
          if (this.instance) {
            this.instance.addEventListener(
              ____eventObject.CHANGE,
              function (t) {
                e.dispatchEvent(t);
              },
            );
            this.instance.addEventListener(____eventObject.MOVE, function (t) {
              e.dispatchEvent(t);
            });
            this.instance.addEventListener(____eventObject.CLICK, function (t) {
              e.dispatchEvent(t);
              var n = new currentTime(____eventObject.COMPLETE, {
                from: eventsArray.SELECT_NO_MAP,
                mouseTarget: t.target,
                overlay: new BMapGL.Marker(
                  new BMapGL.Point(t.target.latlng.lng, t.target.latlng.lat),
                ),
              });
              e.scene.dispatchEvent(n);
            });
            this.instance.addEventListener(
              ____eventObject.COMPLETE,
              function (t) {
                e.dispatchEvent(t);
              },
            );
            this.instance.addEventListener(
              ____eventObject.CANCEL,
              function (t) {
                e.dispatchEvent(t);
              },
            );
          }
        },
      },
      {
        key: "addData",
        value(e) {
          if (this.scene) {
            this.scene.addSelectDrawData(e);
          }
        },
      },
      {
        key: "clearData",
        value() {
          if (this.scene) {
            this.scene.clearSelectDrawData();
          }
        },
      },
    ]);
  })(____initializeMap);
  var iniInterval = (function () {
    return configure(
      function e(t, n) {
        isValidObject(this, e);
        this.label = undefined;
        this.scene = t;
      },
      [
        {
          key: "getLength",
          value(
            e,
            t = {
              showlabel: true,
              unit: "kilometers",
            },
          ) {
            if (e instanceof BMapGL.Polyline) {
              e = e.toGeoJSON();
            }
            var n = knappTime.getLength(e);
            if (t.showlabel) {
              var i = e.geometry.coordinates;
              var lastPoint = new BMapGL.Point(
                i[i.length - 1][0],
                i[i.length - 1][1],
              );
              var totalDistance = "";
              switch (t.unit) {
                case "kilometers":
                  totalDistance = "总长度：" + n.toFixed(2) + "km";
                  break;
                case "meters":
                  totalDistance = "总长度：" + n.toFixed(2) + "m";
              }
              this.scene.map.removeOverlay(this.label);
              this.label = new BMapGL.Label(totalDistance, {
                position: lastPoint,
                offset: t.offset || new BMapGL.Size(0, 0),
              });
              this.label.setStyle(t.labelOptions);
              this.scene.map.addOverlay(this.label);
            }
            return n;
          },
        },
        {
          key: "getPolygonArea",
          value(
            e,
            t = {
              showlabel: true,
              unit: "kilometers",
            },
          ) {
            if (e instanceof BMapGL.Polygon) {
              e = e.toGeoJSON();
            }
            var n = knappTime.getPolygonArea(e);
            if (t.showlabel) {
              var i = knappTime.getPolygonCenter(e);
              var esultString = "";
              switch (t.unit) {
                case "kilometers":
                  esultString = n.toFixed(2) + " km²";
                  break;
                case "meters":
                  esultString = n.toFixed(2) + " m²";
              }
              this.scene.map.removeOverlay(this.label);
              this.label = new BMapGL.Label(esultString, {
                position: i.bdCenter,
                offset: t.offset || new BMapGL.Size(-20, -10),
              });
              this.label.setStyle(t.labelOptions);
              this.scene.map.addOverlay(this.label);
            }
            return n;
          },
        },
      ],
    );
  })();
  var _____tartIndex = (function (e) {
    function t(e) {
      var ______esult;
      var ________options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      isValidObject(this, t);
      (______esult = n(this, t, [e, ________options])).tipLabel = null;
      ______esult.lengthLabel = [];
      ______esult.totalLabel = null;
      ______esult.turnOverlays = [];
      ______esult.totalLength = 0;
      ______esult.measureRes = 0;
      ______esult.subDistance = [];
      ______esult.scene.setCurrentDrawType(______esult.type);
      ______esult.setOtherOptions(________options);
      if (______esult.isOpen) {
        ______esult.open();
      }
      return ______esult;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "setOtherOptions",
        value(e) {
          this.options = e;
          this.skipEditing = true;
          this.isOpen = true;
          this.options = Object.assign(tartIndex, e);
          this.isSeries = this.options.isSeries;
          this.setBaseOptions(this.options.baseOpts);
        },
      },
      {
        key: "setTurnPoint",
        value(e) {
          var t = this.options;
          var n = new BMapGL.Marker(e, {
            icon: t.turnIcon ? t.turnIcon : timestamp,
            clickable: false,
            baseZIndex: 3500000,
            zIndexFixed: true,
          });
          this.scene.map.addOverlay(n);
          this.turnOverlays.push(n);
        },
      },
      {
        key: "startAction",
        value(e) {
          var t = this.match ? this.match : e.point;
          this.points.push(t);
          this.drawPoint = this.points.concat(
            this.points[this.points.length - 1],
          );
          if (this.points.length === 1) {
            this.turnOverlays = [];
            this.lengthLabel = [];
            this.overlay = new BMapGL.Polyline(
              this.drawPoint,
              this.baseOptions,
            );
            this.scene.map.addOverlay(this.overlay);
          } else {
            this.overlay.setPath(this.drawPoint);
            this.scene.map.removeOverlay(this.measureLabel);
            this.scene.map.addOverlay(this.downLabel);
            this.subDistance.push(this.downLabel.content);
            this.lengthLabel.push(this.downLabel);
          }
          this.setTurnPoint(t);
          if (!this.isBinded) {
            this.isBinded = true;
            this.scene.mask.enableEdgeMove();
            this.scene.mask.removeEventListener("mousemove", this.mousemove);
            this.scene.mask.addEventListener(
              "mousemove",
              (this.mousemove = this.moveAction.bind(this)),
            );
            this.scene.mask.addEventListener(
              "dblclick",
              (this.dblclick = this.dblclickAction.bind(this)),
            );
          }
        },
      },
      {
        key: "moveAction",
        value(e) {
          var t = e.point;
          if (this.enableSnap) {
            var n = [];
            if (this.overlay.points.length > 2) {
              var i = this.overlay
                .getPath()
                .slice(0, this.overlay.points.length - 1);
              n.push(new this.overlay.constructor(i));
            }
            this.match = this.getSnap(t, this.scene.instances, n);
            if (this.match) {
              this.overlay.setPositionAt(this.drawPoint.length - 1, this.match);
              return;
            }
          }
          this.match = null;
          var ___esponse = this.drawPoint[this.drawPoint.length - 2];
          var _observation = e.point;
          if (this.options.unit === "metric") {
            this.measureRes =
              knappTime.getDistance(___esponse, _observation) * 1000;
            this.distance = this.measureRes.toFixed(2) + "m";
          } else {
            this.measureRes = knappTime.getDistance(___esponse, _observation);
            this.distance = this.measureRes.toFixed(2) + "km";
          }
          var s = knappTime.getLineCenter(___esponse, _observation);
          this.scene.map.removeOverlay(this.measureLabel);
          this.measureLabel = this.addLabel(this.distance, {
            position: s.bdCenter,
          });
          this.downLabel = this.addLabel(this.distance, {
            position: s.bdCenter,
          });
          this.scene.map.addOverlay(this.measureLabel);
          this.overlay.setPositionAt(this.drawPoint.length - 1, e.point);
          this.scene.map.removeOverlay(this.tipLabel);
          this.tipLabel = new BMapGL.Label(this.options.followLabel, {
            position: e.point,
            offset: new BMapGL.Size(10, 10),
          });
          this.tipLabel.setStyle(this.options.labelOptions);
          this.scene.map.addOverlay(this.tipLabel);
        },
      },
      {
        key: "dblclickAction",
        value(e) {
          var t = this;
          _tartIndex.preventDefault(e);
          _tartIndex.stopBubble(e);
          this.isBinded = false;
          this.scene.map.removeOverlay(this.matchOverlay);
          this.scene.map.removeOverlay(this.tipLabel);
          this.scene.mask.disableEdgeMove();
          this.scene.mask.removeEventListener("mousedown", this.mousedown);
          this.scene.mask.removeEventListener("mousemove", this.mousemove);
          this.scene.mask.removeEventListener("dblclick", this.dblclick);
          var n = this.overlay.toGeoJSON();
          var i = n.geometry.coordinates;
          var getRealTimeWe = new BMapGL.Point(
            i[i.length - 1][0],
            i[i.length - 1][1],
          );
          var _currentStock = [0, 0];
          var s = [0, 0];
          var unusedVar = this.scene.map.pointToPixel(
            this.points[this.points.length - 2],
          );
          var ____ealTimeData = this.scene.map.pointToPixel(
            this.points[this.points.length - 3],
          );
          if (unusedVar.x - ____ealTimeData.x < 0) {
            _currentStock = [-14, 0];
          } else {
            _currentStock = [14, 0];
          }
          if (unusedVar.y - ____ealTimeData.y < 0) {
            s = [-5, -38];
          } else {
            s = [-5, 11];
          }
          var ___hour = knappTime.getLength(n, "kilometers");
          if (this.options.unit === "metric") {
            this.totalLength = ___hour * 1000;
          } else {
            this.totalLength = ___hour;
          }
          var c = "";
          switch (this.options.unit) {
            case "kilometers":
              c = "总长：" + ___hour.toFixed(2) + "km";
              break;
            case "metric":
              c = "总长：" + ___hour.toFixed(2) * 1000 + "m";
          }
          this.totalLabel = new BMapGL.Label(c, {
            position: getRealTimeWe,
            offset: new BMapGL.Size(s[0], s[1]),
          });
          this.totalLabel.setStyle(this.options.labelOptions);
          this.scene.map.addOverlay(this.totalLabel);
          this.lengthLabel.push(this.totalLabel);
          if (this.options.closeIcon) {
            this.closeIcon = this.options.closeIcon;
          } else {
            this.closeIcon = ensureMapFit;
          }
          this.closeBtn = new BMapGL.Marker(getRealTimeWe, {
            icon: this.closeIcon,
            baseZIndex: 3600000,
            offset: new BMapGL.Size(_currentStock[0], _currentStock[1]),
            enableMassClear: true,
          });
          this.closeBtn.setTitle("清除本次测距");
          this.scene.map.addOverlay(this.closeBtn);
          var updateStatus = {
            overlay: this.overlay,
            closeBtn: this.closeBtn,
            totalLabel: this.totalLabel,
            lengthLabel: this.lengthLabel,
            points: this.points.slice(0),
            turnOverlays: this.turnOverlays.slice(0),
          };
          this.closeBtn.addEventListener("click", function (e) {
            t.scene.map.removeOverlay(updateStatus.closeBtn);
            t.scene.map.removeOverlay(updateStatus.overlay);
            for (var n = 0, i = updateStatus.turnOverlays.length; i > n; n++) {
              t.scene.map.removeOverlay(updateStatus.turnOverlays[n]);
              updateStatus.turnOverlays[n] = null;
            }
            for (
              var iterator = 0, emovalCount = updateStatus.lengthLabel.length;
              emovalCount > iterator;
              iterator++
            ) {
              t.scene.map.removeOverlay(updateStatus.lengthLabel[iterator]);
              updateStatus.lengthLabel[iterator] = null;
            }
          });
          this.dispatchMeasureEvent();
          this.overlay.setPath(this.points);
          if (this.isSeries) {
            this.bindEvent();
          } else {
            this.scene.mask.hide();
          }
        },
      },
      {
        key: "dispatchMeasureEvent",
        value() {
          var e = new currentTime(wallet.LENGTH_END, {
            points: this.points ? this.points.slice(0) : [],
            distance: this.totalLength,
            subDistance: this.subDistance,
            unit: this.options.unit,
            overlay: this.overlay,
          });
          this.dispatchEvent(e);
          this.scene.dispatchEvent(e);
        },
      },
    ]);
  })(aiModel);
  var biometricData = (function (e) {
    function t(e) {
      var ealtimeDrawn;
      var config =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      isValidObject(this, t);
      (ealtimeDrawn = n(this, t, [e, config])).measureArea = 0;
      ealtimeDrawn.turnOverlays = [];
      ealtimeDrawn.scene.setCurrentDrawType(ealtimeDrawn.type);
      ealtimeDrawn.setOtherOptions(config);
      if (ealtimeDrawn.isOpen) {
        ealtimeDrawn.open();
      }
      return ealtimeDrawn;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "setOtherOptions",
        value(e) {
          this.options = e;
          this.skipEditing = true;
          this.isOpen = true;
          this.options = Object.assign(gravity, e);
          this.isSeries = this.options.isSeries;
          this.setBaseOptions(this.options.baseOpts);
        },
      },
      {
        key: "setTurnPoint",
        value(e) {
          var t = this.options;
          var n = new BMapGL.Marker(e, {
            icon: t.turnIcon ? t.turnIcon : timestamp,
            clickable: false,
            baseZIndex: 3500000,
            zIndexFixed: true,
          });
          this.scene.map.addOverlay(n);
          this.turnOverlays.push(n);
        },
      },
      {
        key: "startAction",
        value(e) {
          var t = this.match ? this.match : e.point;
          this.points.push(t);
          this.drawPoint = this.points.concat(
            this.points[this.points.length - 1],
          );
          if (this.points.length === 1) {
            this.turnOverlays = [];
            this.overlay = new BMapGL.Polygon(this.drawPoint, this.baseOptions);
            this.scene.map.addOverlay(this.overlay);
          } else {
            this.overlay.setPath(this.drawPoint);
            if (this.points.length > 2) {
              if (this.options.unit === "metric") {
                this.measureArea =
                  knappTime.getPolygonArea(this.overlay) * 1000000;
                this.area = this.measureArea.toFixed(2) + "m²";
              } else {
                this.measureArea = knappTime.getPolygonArea(this.overlay);
                this.area = this.measureArea.toFixed(2) + "km²";
              }
              var n = knappTime.getPolygonCenter(this.overlay.toGeoJSON());
              this.scene.map.removeOverlay(this.areaLabel);
              this.areaLabel = this.addLabel(this.area, {
                position: n.bdCenter,
                offset: new BMapGL.Size(5, -2),
              });
              this.scene.map.addOverlay(this.areaLabel);
            }
          }
          this.setTurnPoint(t);
          if (!this.isBinded) {
            this.isBinded = true;
            this.scene.mask.enableEdgeMove();
            this.scene.mask.removeEventListener("mousemove", this.mousemove);
            this.scene.mask.addEventListener(
              "mousemove",
              (this.mousemove = this.moveAction.bind(this)),
            );
            this.scene.mask.addEventListener(
              "dblclick",
              (this.dblclick = this.dblclickAction.bind(this)),
            );
          }
        },
      },
      {
        key: "dblclickAction",
        value(e) {
          var t = this;
          _tartIndex.preventDefault(e);
          _tartIndex.stopBubble(e);
          this.isBinded = false;
          this.scene.map.removeOverlay(this.matchOverlay);
          this.scene.map.removeOverlay(this.tipLabel);
          this.scene.mask.disableEdgeMove();
          this.scene.mask.removeEventListener("mousedown", this.mousedown);
          this.scene.mask.removeEventListener("mousemove", this.mousemove);
          this.scene.mask.removeEventListener("dblclick", this.dblclick);
          this.overlay.setPath(this.points);
          var n = this.overlay.toGeoJSON().geometry.coordinates[0];
          var i = new BMapGL.Point(n[n.length - 1][0], n[n.length - 1][1]);
          if (this.options.closeIcon) {
            this.closeIcon = this.options.closeIcon;
          } else {
            this.closeIcon = ensureMapFit;
          }
          this.closeBtn = new BMapGL.Marker(i, {
            icon: this.closeIcon,
            baseZIndex: 3600000,
            enableMassClear: true,
            offset: new BMapGL.Size(10, 10),
          });
          var ______________________radius = knappTime.getPolygonCenter(
            this.overlay.toGeoJSON(),
          );
          this.totalAreaLabel = this.addLabel(this.area, {
            position: ______________________radius.bdCenter,
            offset: new BMapGL.Size(5, -2),
          });
          var _________options = {
            overlay: this.overlay,
            closeBtn: this.closeBtn,
            points: this.points.slice(0),
            turnOverlays: this.turnOverlays.slice(0),
            totalAreaLabel: this.totalAreaLabel,
          };
          this.scene.map.addOverlay(_________options.closeBtn);
          this.scene.map.removeOverlay(this.areaLabel);
          this.scene.map.addOverlay(_________options.totalAreaLabel);
          _________options.closeBtn.addEventListener("click", function (e) {
            t.scene.map.removeOverlay(_________options.closeBtn);
            t.scene.map.removeOverlay(_________options.overlay);
            t.scene.map.removeOverlay(_________options.totalAreaLabel);
            for (
              var n = 0, i = _________options.turnOverlays.length;
              i > n;
              n++
            ) {
              t.scene.map.removeOverlay(_________options.turnOverlays[n]);
              _________options.turnOverlays[n] = null;
            }
          });
          this.dispatchMeasureEvent();
          if (this.isSeries) {
            this.bindEvent();
          } else {
            this.scene.mask.hide();
          }
        },
      },
      {
        key: "dispatchMeasureEvent",
        value() {
          var e = new currentTime(wallet.AREA_END, {
            points: this.points ? this.points.slice(0) : [],
            unit: this.options.unit,
            area: this.measureArea,
            overlay: this.overlay,
          });
          this.dispatchEvent(e);
          this.scene.dispatchEvent(e);
        },
      },
    ]);
  })(getRealTimeLl);
  var calculateOrbW = (function (e) {
    function t() {
      var e;
      isValidObject(this, t);
      for (
        var _argumentCount = arguments.length,
          argumentsList = Array(_argumentCount),
          s = 0;
        _argumentCount > s;
        s++
      ) {
        argumentsList[s] = arguments[s];
      }
      (e = n(this, t, [].concat(argumentsList))).tolerance = 0.000001;
      e.toleranceType = "kilometers";
      return e;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "polygonCutByLine",
        value(e, t, n) {
          var i;
          var thirdElement;
          var defaultConfig;
          var s;
          var _defaultConfig;
          var configValue;
          var keyValue;
          var c;
          var hasFourthArg =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : {};
          var period = [];
          var _userData = [];
          var lastModified = {
            geojsonRes: null,
            bdRes: null,
          };
          var _____userInput = e.geometry;
          var ___gravity = t.geometry;
          thirdElement = [];
          ___gravity.coordinates.forEach(function (e) {
            if (thirdElement.length) {
              var t = thirdElement[thirdElement.length - 1];
              if (t[0] !== e[0] && t[1] !== e[1]) {
                thirdElement.push(e);
              }
            } else {
              thirdElement.push(e);
            }
          });
          ___gravity.coordinates = thirdElement;
          if (___gravity.coordinates.length < 2) {
            return lastModified;
          }
          if (
            (_____userInput.type !== "Polygon" &&
              _____userInput.type !== "MultiPolygon") ||
            ___gravity.type !== "LineString"
          ) {
            return lastModified;
          }
          if (n === undefined) {
            n = "";
          }
          if (
            _calculateGeod(_____userInput, ___gravity).features.length === 0
          ) {
            return lastModified;
          }
          if (__calculateGeod(___gravity, _____userInput)) {
            return lastModified;
          }
          _userData[0] = GeographicGeo(___gravity, this.tolerance, {
            units: this.toleranceType,
          });
          _userData[1] = GeographicGeo(___gravity, -this.tolerance, {
            units: this.toleranceType,
          });
          for (
            var _____________________currentIndex = 0;
            _____________________currentIndex <= 1;
            _____________________currentIndex++
          ) {
            var userDataIndex = _____________________currentIndex;
            period = [];
            for (
              var coordinateCnt = 0;
              ___gravity.coordinates.length > coordinateCnt;
              coordinateCnt++
            ) {
              period.push(___gravity.coordinates[coordinateCnt]);
            }
            for (
              var ______________________currentIndex =
                _userData[userDataIndex].geometry.coordinates.length - 1;
              ______________________currentIndex >= 0;
              ______________________currentIndex--
            ) {
              period.push(
                _userData[userDataIndex].geometry.coordinates[
                  ______________________currentIndex
                ],
              );
            }
            period.push(___gravity.coordinates[0]);
            var _______________________currentIndex = processData(
              createLine(period),
            );
            s = _______________________currentIndex;
            _defaultConfig = undefined;
            configValue = undefined;
            keyValue = undefined;
            c = undefined;
            _defaultConfig = getFeatureGeo((defaultConfig = _____userInput));
            configValue = getFeatureGeo(s);
            keyValue = defaultConfig.properties || {};
            if (
              (c = __processEvent(
                _defaultConfig.coordinates,
                configValue.coordinates,
              )).length === 0
            ) {
              i = null;
            } else if (c.length === 1) {
              i = validateMinXY(c[0], keyValue);
            } else {
              i = createGeoFea(c, keyValue);
            }
          }
          var batchSize = new BMapGL.GeoJSONParse().readFeaturesFromObject(
            i,
            hasFourthArg,
          );
          var __userLocation = [];
          var initialIndex = [];
          batchSize.forEach(function (t, n) {
            t.properties = Object.assign({}, e.properties || {});
            t.properties.id += `-${n}`;
            __userLocation.push(t);
            initialIndex.push(t.toGeoJSON());
          });
          return {
            geojsonRes: initialIndex,
            bdRes: __userLocation,
          };
        },
      },
      {
        key: "lineCutByPoly",
        value(e, t, n) {
          if (
            e.geometry === undefined ||
            e.geometry.type.toLowerCase().indexOf("linestring") === -1
          ) {
            throw "传入的必须为linestring";
          }
          var i = (function (e, t) {
            if (!e) {
              throw Error("line is required");
            }
            if (!t) {
              throw Error("splitter is required");
            }
            var n = getGeographic(e);
            var i = getGeographic(t);
            if (n !== "LineString") {
              throw Error("line must be LineString");
            }
            if (i === "FeatureCollection") {
              throw Error("splitter cannot be a FeatureCollection");
            }
            if (i === "GeometryCollection") {
              throw Error("splitter cannot be a GeometryCollection");
            }
            var eferenceGeol = calculateGeoM(t, {
              precision: 7,
            });
            switch (i) {
              case "Point":
                return containsPoint(e, eferenceGeol);
              case "MultiPoint":
                return isWithinBbox(e, eferenceGeol);
              case "LineString":
              case "MultiLineString":
              case "Polygon":
              case "MultiPolygon":
                return isWithinBbox(e, _calculateGeod(e, eferenceGeol));
            }
          })(e, t).features;
          var route = [];
          var _object = new BMapGL.GeoJSONParse();
          if (i.length > 1) {
            for (var s = 0, ______index = i.length; ______index > s; s++) {
              var featureAtPos = _object.readFeatureFromObject(i[s], n);
              route.push(featureAtPos);
            }
          }
          return {
            geojsonRes: i,
            bdRes: route,
          };
        },
      },
    ]);
  })(____initializeMap);
  var eventIterator = (function (e) {
    function t() {
      var e;
      isValidObject(this, t);
      for (
        var __argumentCount = arguments.length,
          arguments = Array(__argumentCount),
          s = 0;
        __argumentCount > s;
        s++
      ) {
        arguments[s] = arguments[s];
      }
      (e = n(this, t, [].concat(arguments))).tolerance = 0.001;
      e.toleranceType = "kilometers";
      return e;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "polygonUnion",
        value(e, t) {
          if (e.length < 2) {
            throw "至少2个数据";
          }
          var n = null;
          var i = false;
          e.forEach(function (e, t) {
            var previousValue;
            var eventPoint;
            var s;
            if (t < 1) {
              n = e;
            } else {
              previousValue = n;
              s = 6;
              (eventPoint = e).geometry.coordinates[0].forEach(function (e, t) {
                var n = __isIterable(e, 2);
                var i = n[0];
                var _decimalValue = n[1];
                i = parseFloat(i.toFixed(s));
                _decimalValue = parseFloat(_decimalValue.toFixed(s));
                for (
                  var coordinateIdx = 0;
                  previousValue.geometry.coordinates[0].length > coordinateIdx;
                  coordinateIdx++
                ) {
                  var isIterableAnd = __isIterable(
                    previousValue.geometry.coordinates[0][coordinateIdx],
                    2,
                  );
                  var c = isIterableAnd[0];
                  var numericalLoop = isIterableAnd[1];
                  c = parseFloat(c.toFixed(s));
                  numericalLoop = parseFloat(numericalLoop.toFixed(s));
                  if (i === c && _decimalValue === numericalLoop) {
                    eventPoint.geometry.coordinates[0][t] =
                      previousValue.geometry.coordinates[0][coordinateIdx];
                    break;
                  }
                }
              });
              if (__calculateGeod(n, e)) {
                i = true;
              } else {
                n = calculateGeos(n, e);
              }
            }
          });
          var date = i ? null : n;
          var _apiResponse = new BMapGL.GeoJSONParse();
          return {
            geojsonRes: date,
            bdRes: date ? _apiResponse.readFeatureFromObject(date, t) : null,
          };
        },
      },
    ]);
  })(____initializeMap);
  var keepInformed = (function (e) {
    function t() {
      isValidObject(this, t);
      return n(this, t, arguments);
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "geojsonMove",
        value(e, t, n) {
          if (t instanceof BMapGL.Point || t instanceof BMapGL.LatLng) {
            t = validateInput([t.lng, t.lat]);
          }
          if (n instanceof BMapGL.Point || n instanceof BMapGL.LatLng) {
            n = validateInput([n.lng, n.lat]);
          }
          var i;
          var _______________________radius;
          var otherLocation;
          var s;
          var numberToExpo = (function (e, t, n, i) {
            if (!_isValidObject((i = i || {}))) {
              throw Error("options is invalid");
            }
            var easurementFg = i.units;
            var easurementZP = i.zTranslation;
            var s = i.mutate;
            if (!e) {
              throw Error("geojson is required");
            }
            if (t == null || isNaN(t)) {
              throw Error("distance is required");
            }
            if (
              easurementZP &&
              typeof easurementZP != "number" &&
              isNaN(easurementZP)
            ) {
              throw Error("zTranslation is not a number");
            }
            if (easurementZP !== undefined) {
              easurementZP = easurementZP;
            } else {
              easurementZP = 0;
            }
            if (t === 0 && easurementZP === 0) {
              return e;
            }
            if (n == null || isNaN(n)) {
              throw Error("direction is required");
            }
            if (t < 0) {
              t = -t;
              n += 180;
            }
            if (s === false || s === undefined) {
              e = validateGeoJf(e);
            }
            evaluate(e, function (e) {
              var i = parseValue(
                _calculateReal(e, t, n, {
                  units: easurementFg,
                }),
              );
              e[0] = i[0];
              e[1] = i[1];
              if (easurementZP && e.length === 3) {
                e[2] += easurementZP;
              }
            });
            return e;
          })(
            e,
            calculateBary(t, n),
            ((i = t),
            (_______________________radius = n),
            otherLocation === undefined && (otherLocation = {}),
            (s = otherLocation.final
              ? calculateRads(
                  parseLocation(_______________________radius),
                  parseLocation(i),
                )
              : calculateRads(
                  parseLocation(i),
                  parseLocation(_______________________radius),
                )) > 180
              ? -(360 - s)
              : s),
          );
          return numberToExpo;
        },
      },
    ]);
  })(____initializeMap);
  var isValidMap = (function (e) {
    function t(e) {
      var _______esult;
      var defaults =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      isValidObject(this, t);
      (_______esult = n(this, t)).currentModel = t.MODEL.MOVE;
      _______esult.labelOptions = _programState;
      _______esult.baseOpts = defaultValue;
      _______esult.enableSnap = true;
      _______esult.snapDistance = 10;
      _______esult.match = null;
      _______esult.matchOverlay = null;
      _______esult.matchOverlayRadius = 1;
      if (!(e instanceof errorInstance)) {
        throw Error("MoveBase实例化必须输入scene参数");
      }
      _______esult.scene = e;
      _______esult.scene.move = _______esult;
      var s = {};
      _tartIndex.copyOptionsToNew(_______esult.scene.options, defaults, s);
      _tartIndex.copyNotExitOptions(s, _______esult.scene.options);
      _______esult.options = s;
      _______esult.target = defaults.target || _______esult;
      _______esult.setOptions(s);
      _______esult.setSnapPointType(defaults);
      _______esult.moveCalculate = new keepInformed();
      _______esult.parse = new BMapGL.GeoJSONParse();
      return _______esult;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "setOptions",
        value() {
          this.defineProperty(
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {},
          );
        },
      },
      {
        key: "setCurrentModel",
        value(e) {
          this.currentModel = e;
        },
      },
      {
        key: "open",
        value(e, n) {
          var i = this;
          if (this.scene) {
            if (this.currentModel === t.MODEL.MOVE) {
              this.overlay = e;
            } else {
              this.overlay = this.parse.readFeatureFromObject(e.toGeoJSON());
            }
            this.scene.open();
            this.setRunningAction(true, function () {
              i.setSceneStatus(_initializeMap.STATUS_MOVE);
              i.moveOpe(e);
              if (n) {
                n();
              }
            });
          }
        },
      },
      {
        key: "close",
        value(e) {
          if (this.overlay) {
            this.setRunningAction(false);
            this.setSceneStatus(_initializeMap.STATUS_FREE);
            this.closeOpe(this.overlay);
            this.emitOkEvent(this.overlay);
            if (e) {
              e();
            }
          }
        },
      },
      {
        key: "moveOpe",
        value(e) {},
      },
      {
        key: "closeOpe",
        value(e) {},
      },
      {
        key: "emitOkEvent",
        value(e, t = false) {
          var n = new currentTime(____eventObject.COMPLETE, {
            overlay: e,
            from: eventsArray.MOVE_ON_MAP,
            model: this.currentModel,
          });
          this.dispatchEvent(n);
          if (t) {
            this.scene.dispatchEvent(n);
          }
        },
      },
      {
        key: "setRunningAction",
        value(e, t) {
          if (e) {
            this.scene.closeRunningAction();
            this.scene.runningAction = this;
            this.scene.mask.show();
            t();
          } else {
            this.scene.runningAction = null;
            this.scene.mask.hide();
          }
        },
      },
      {
        key: "setRadius",
        value() {
          var e = this.scene.map.getZoomUnits();
          this.matchOverlay.setRadius(this.matchOverlayRadius * e);
        },
      },
      {
        key: "addMatchOverlay",
        value(e) {
          if (this.matchOverlay instanceof BMapGL.Circle) {
            this.setRadius();
            this.matchOverlay.setCenter(e);
            this.scene.map.addEventListener(
              "zoomend",
              (this._setRadius = this.setRadius.bind(this)),
            );
            this.scene.map.addOverlay(this.matchOverlay);
          } else {
            this.scene.map.addOverlay(this.matchOverlay);
            this.matchOverlay.setPosition(e);
          }
        },
      },
      {
        key: "removeMatchOverlay",
        value() {
          this.scene.map.removeOverlay(this.matchOverlay);
          if (this._setRadius) {
            this.scene.map.removeEventListener("zoomend", this._setRadius);
          }
        },
      },
      {
        key: "getSnap",
        value(
          e,
          t = this.scene.instances,
          n = [],
          i = this.snapDistance,
          currentScene = this.scene.map,
        ) {
          var __timeoutAction = null;
          this.removeMatchOverlay();
          __timeoutAction ||= timeoutAction(e, t, i, currentScene);
          if (!__timeoutAction && this.scene._attachSnapSource) {
            __timeoutAction = timeoutAction(
              e,
              this.scene._attachSnapSource,
              i,
              currentScene,
            );
          }
          __timeoutAction ||= timeoutAction(e, n, i, currentScene);
          if (__timeoutAction) {
            this.addMatchOverlay(__timeoutAction);
          }
          return __timeoutAction;
        },
      },
    ]);
  })(____initializeMap);
  isValidMap.MODEL = {
    COPY: Symbol(),
    MOVE: Symbol(),
  };
  var listItems = (function (e) {
    function t(e, __eference) {
      var polylineData;
      isValidObject(this, t);
      (polylineData = n(this, t, [e, __eference])).type =
        initializer.DRAWING_POLYLINE;
      polylineData.scene.setCurrentDrawType(polylineData.type);
      return polylineData;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "startAction",
        value(e) {
          _tartIndex.stopBubble(e);
          _tartIndex.preventDefault(e);
          if (this.match) {
            this.start = this.match;
          } else {
            this.start = e.point;
          }
          if (this.currentModel === isValidMap.MODEL.COPY) {
            this.overlay.setOptions(this.baseOpts);
            this.scene.map.addOverlay(this.overlay);
          }
          this.scene.mask.enableEdgeMove();
          this.scene.mask.removeEventListener("mousedown", this.mousedown);
          this.scene.mask.removeEventListener("mousemove", this.mousemove);
          this.scene.mask.addEventListener(
            "mousemove",
            (this.mousemove = this.moveAction.bind(this)),
          );
          this.scene.mask.addEventListener(
            "mouseup",
            (this.mouseup = this.endAction.bind(this)),
          );
        },
      },
      {
        key: "moveAction",
        value(e) {
          _tartIndex.preventDefault(e);
          _tartIndex.stopBubble(e);
          this.scene.map.removeOverlay(this.tipLabel);
          this.tipLabel = new BMapGL.Label("移动改变位置<br>松开结束操作", {
            position: e.point,
            offset: new BMapGL.Size(10, 10),
          });
          this.tipLabel.setStyle(this.labelOptions);
          this.scene.map.addOverlay(this.tipLabel);
          var t = e.point;
          if (this.enableSnap) {
            if (this.currentModel === isValidMap.MODEL.COPY) {
              this.match = this.getSnap(e.point, this.scene.instances);
            } else {
              this.match = this.getSnap(
                e.point,
                this.scene.instances,
                [],
                this.snapDistance,
                this.scene.map,
                [this.overlay],
              );
            }
            if (this.match) {
              t = this.match;
            }
            this.match = null;
          }
          var n = this.moveCalculate.geojsonMove(this.source, this.start, t);
          this.overlay.updateByGeoJSON(n);
        },
      },
      {
        key: "endAction",
        value(e) {
          _tartIndex.preventDefault(e);
          _tartIndex.stopBubble(e);
          this.scene.map.removeOverlay(this.tipLabel);
          this.scene.map.removeOverlay(this.matchOverlay);
          this.scene.mask.removeEventListener("mousemove", this.mousemove);
          this.scene.mask.removeEventListener("mouseup", this.mouseup);
          this.scene.mask.disableEdgeMove();
          this.finish();
        },
      },
      {
        key: "mousemoveAction",
        value(e) {
          _tartIndex.preventDefault(e);
          _tartIndex.stopBubble(e);
          if (this.enableSnap) {
            this.match = this.getSnap(e.point, this.scene.instances);
          }
          this.scene.map.removeOverlay(this.tipLabel);
          this.tipLabel = new BMapGL.Label("按住确认起点，拖拽进行移动", {
            position: e.point,
            offset: new BMapGL.Size(10, 10),
          });
          this.tipLabel.setStyle(this.labelOptions);
          this.scene.map.addOverlay(this.tipLabel);
        },
      },
      {
        key: "finish",
        value() {
          if (this.currentModel === isValidMap.MODEL.COPY) {
            this.scene.map.removeOverlay(this.overlay);
          }
          this.emitOkEvent(this.overlay, true);
          var e = new currentTime(____eventObject.CHANGE, this.overlay);
          this.target.dispatchEvent(e);
          this.close();
        },
      },
      {
        key: "moveOpe",
        value() {
          this.source = this.overlay.toGeoJSON();
          this.scene.mask.show();
          this.scene.mask.addEventListener(
            "mousemove",
            (this.mousemove = this.mousemoveAction.bind(this)),
          );
          this.scene.mask.addEventListener(
            "mousedown",
            (this.mousedown = this.startAction.bind(this)),
          );
        },
      },
      {
        key: "closeOpe",
        value() {
          this.scene.map.removeOverlay(this.tipLabel);
          this.scene.map.removeOverlay(this.matchOverlay);
          this.scene.mask.removeEventListener("mouseup", this.mouseup);
          this.scene.mask.removeEventListener("mousedown", this.mousedown);
          this.scene.mask.removeEventListener("mousemove", this.mousemove);
        },
      },
    ]);
  })(isValidMap);
  var _xCoordinate = (function (e) {
    function t(e, ________________________currentIndex) {
      var drawingObject;
      isValidObject(this, t);
      (drawingObject = n(this, t, [
        e,
        ________________________currentIndex,
      ])).type = initializer.DRAWING_POLYGON;
      drawingObject.scene.setCurrentDrawType(drawingObject.type);
      return drawingObject;
    }
    etupInherit(t, e);
    return configure(t);
  })(listItems);
  var totalAmount = (function (e) {
    function t(e, __intersection) {
      var overlayConfig;
      isValidObject(this, t);
      (overlayConfig = n(this, t)).otherOverlays = [];
      overlayConfig.snapDistance = 15;
      overlayConfig.isOpen = false;
      overlayConfig.cursor = "default";
      overlayConfig.scene = e;
      overlayConfig.isOpen = ~~__intersection;
      overlayConfig._initEvent();
      return overlayConfig;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "open",
        get() {
          return this.isOpen;
        },
        set(e) {
          this.isOpen = e;
        },
      },
      {
        key: "distance",
        get() {
          return this.snapDistance;
        },
        set(e) {
          this.snapDistance = e;
        },
      },
      {
        key: "setPickCursor",
        value(e) {
          this.cursor = e;
        },
      },
      {
        key: "_initEvent",
        value() {
          var e = this;
          if (this.scene) {
            this.scene.addEventListener(____eventObject.CLICK, function (t) {
              if (
                e.isOpen &&
                e.scene.currentStatus === _initializeMap.STATUS_FREE
              ) {
                var n = e.getSnap(t.target.latlng);
                if (n) {
                  var i = __isIterable(n, 3);
                  var _clickedObject = new _time(i[0], i[1]);
                  e.dispatchEvent(
                    new currentTime(____eventObject.CLICK, _clickedObject),
                  );
                }
              }
            });
            this.scene.addEventListener(____eventObject.MOVE, function (t) {
              if (
                e.isOpen &&
                e.scene.currentStatus === _initializeMap.STATUS_FREE
              ) {
                var n = e.getSnap(t.target.latlng);
                if (n) {
                  e.scene.map.platform.style.cursor = e.cursor;
                  var i = __isIterable(n, 3);
                  var iInstance = new _time(i[0], i[1]);
                  e.dispatchEvent(
                    new currentTime(____eventObject.MOVE, iInstance),
                  );
                } else {
                  e.scene.map.platform.style.cursor =
                    e.scene.map.config.defaultCursor;
                  e.dispatchEvent(new currentTime(____eventObject.MOVE, null));
                }
              }
            });
          }
        },
      },
      {
        key: "attachOverlays",
        value(e) {
          if (e instanceof Array) {
            this.otherOverlays = e;
          }
        },
      },
      {
        key: "getSnap",
        value(e) {
          var t = null;
          t ||= this.getSnapByLL(e, this.scene.instances);
          if (!t && this.otherOverlays && this.otherOverlays.length > 0) {
            t = this.getSnapByLL(e, this.otherOverlays);
          }
          return t;
        },
      },
      {
        key: "getSnapByLL",
        value(e, t) {
          var n;
          n = this.scene.map.getZoom();
          var i = Math.pow(2, 18 - n);
          var nappedScale = this.snapDistance * i;
          if (!t || !(t instanceof Array)) {
            return null;
          }
          for (var property in t) {
            var s = t[property];
            if (s instanceof BMapGL.Marker) {
              var eventLocation = s.getPosition();
              if (
                nappedScale >
                knappTime.getDistance(e, eventLocation, "kilometers") * 1000
              ) {
                return [s, 0, eventLocation];
              }
            } else {
              var placesAlong = s.getPath();
              for (var placeKey in placesAlong) {
                var c = placesAlong[placeKey];
                var etersBetween =
                  knappTime.getDistance(e, c, "kilometers") * 1000;
                if (etersBetween && nappedScale > etersBetween) {
                  return [s, placeKey, c];
                }
              }
            }
          }
          return null;
        },
      },
    ]);
  })(____initializeMap);
  var _time = (function (e) {
    function t(e, ercatorScale) {
      var apOverlay;
      isValidObject(this, t);
      (apOverlay = n(this, t))._index = -1;
      apOverlay.overlay = e;
      if (e instanceof BMapGL.Marker) {
        apOverlay.path = [e.getPosition()];
      } else {
        apOverlay.path = e.getPath();
      }
      if (!(ercatorScale > apOverlay.path.length - 1)) {
        apOverlay.index = ercatorScale;
      }
      return apOverlay;
    }
    etupInherit(t, e);
    return configure(t, [
      {
        key: "index",
        get() {
          return this._index;
        },
        set(e) {
          this._index = parseInt(e) || 0;
          var t = new currentTime(____eventObject.CHANGE, this.index);
          this.dispatchEvent(t);
        },
      },
      {
        key: "getCurrentNode",
        value() {
          return this.path[this.index];
        },
      },
      {
        key: "updateNode",
        value(e, t) {
          if (this.overlay instanceof BMapGL.Marker) {
            var n = BMapGL.Projection.convertLL2MC(e);
            this.overlay.setPoint(n);
          } else {
            if (t !== undefined && t >= 0 && this.path.length > t) {
              this.path[t] = e;
            } else {
              this.path[this.index] = e;
            }
            this.overlay.setPath(this.path);
          }
        },
      },
      {
        key: "hasNext",
        value() {
          return this.index + 1 >= 0 && this.path.length > this.index + 1;
        },
      },
      {
        key: "next",
        value() {
          if (this.hasNext()) {
            this._index++;
            return this.path[this.index];
          } else {
            return null;
          }
        },
      },
      {
        key: "hasPrev",
        value() {
          return this.index - 1 >= 0 && this.path.length > this.index - 1;
        },
      },
      {
        key: "prev",
        value() {
          if (this.hasPrev()) {
            this._index--;
            return this.path[this.index];
          } else {
            return null;
          }
        },
      },
    ]);
  })(____initializeMap);
  programState.ActionStatus = eventsArray;
  programState.AreaMeasure = biometricData;
  programState.CircleDraw = _handleEvent;
  programState.CircleEdit = _circumference;
  programState.CorrectPoint = totalAmount;
  programState.CutCalculate = calculateOrbW;
  programState.DistanceMeasure = _____tartIndex;
  programState.DrawControl = fetchInfo;
  programState.DrawScene = errorInstance;
  programState.DrawStatus = _initializeMap;
  programState.DrawingType = initializer;
  programState.GeoCalculator = knappTime;
  programState.MapSelect = onEvent;
  programState.MarkerDraw = _____initializeMap;
  programState.MarkerEdit = deviceInfo;
  programState.Measure = iniInterval;
  programState.MeasureEvent = wallet;
  programState.MoveCalculate = keepInformed;
  programState.Operate = apCenter;
  programState.OperateEventType = ____eventObject;
  programState.PolygonDraw = getRealTimeLl;
  programState.PolygonEdit = ___item;
  programState.PolygonMove = _xCoordinate;
  programState.PolylineDraw = aiModel;
  programState.PolylineEdit = ___target;
  programState.PolylineMove = listItems;
  programState.RectDraw = uiElement;
  programState.RectEdit = continuousInt;
  programState.Select = ______initializeMap;
  programState.UnionCalculate = eventIterator;
  Object.defineProperty(programState, "__esModule", {
    value: true,
  });
});
