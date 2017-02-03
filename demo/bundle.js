(function () {
'use strict';

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$2.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty$3.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;
var allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$5;

  return value === proto;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty$4.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Built-in value references. */
var Buffer$1 = moduleExports$1 ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto$2 = Function.prototype;
var objectProto$7 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString$2.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$5.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
}

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag$1 = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag$1 = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports$2 && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$6.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$7.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$10 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$10.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || srcIndex && isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function (srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack());
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(object[key], srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800;
var HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

// @flow
let id = 0;

var uniqueId = (() => `domain-gfx-id-${ ++id }`);

// @flow
const supportsSymbol = window && window.Symbol;

var ns = supportsSymbol ? Symbol('lib namespace') : `_${ uniqueId() }`;

// @flow
var getStyleSheet = (({ className, acceptedMargin }
/*: {className: string, acceptedMargin: number} */
) => {
  const stylesheet = document.createElement('style');
  stylesheet.textContent = `
.${ className } {
  padding-bottom: ${ acceptedMargin }px;
  font-family: Sans-Serif;
}
.${ className }.hidden {
  pointer-events: none;
  display: block;
  opacity: 0;
  transform: translate(-999px, -999px);
  transform: translate(200vw, 200vh);
}
.${ className }___container {
  border-style: solid;
  border-color: #dedede;
  border-width: 1px 2px 2px 1px;
  border-radius: 0.2em;
  background-color: #fff;
  margin-bottom: ${ acceptedMargin }px;
}
.${ className } thead {
  background-color: #dedede;
}
.${ className } td:first-of-type {
  font-weight: bold;
}
.${ className } th {
  text-align: left;
}
.${ className } .coordinates {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.${ className } .domain {
  margin: 0 0.5em;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 0.5em;
  background-color: black;
}
.${ className } .alignment {
  display: inline-block;
  margin-left: 0;
  height: 1em;
  border-radius: 0.2em;
  background-color: grey;
}`;
  return stylesheet;
});

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};











var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

// @flow
var dataToMarkup = ((data /*: Object */) => {
  // flatten data, metadata overwrites duplicated
  const _data = _extends({}, data, data.metadata || {});
  // shortcuts and preprocess
  const mainTitle = _data.identifier || _data.type || _data.accession || '';
  const subTitle = _data.accession || '';
  const description = _data.description;
  const source = _data.database || _data.source;
  const position = _data.start;
  let coordinates;
  if (_data.end) {
    const length = _data.end - _data.start;
    const aliStart = _data.aliStart || _data.start;
    const aliEnd = _data.aliEnd || _data.end;
    let offset = 0;
    if (aliStart - _data.start > 0) {
      offset = (aliStart - _data.start) / length * 100;
    }
    coordinates = `
      ${ _data.start }<span style="width: 100px;" class="domain">
        <span class="alignment" style="
          width: ${ (aliEnd - aliStart) * 100 / length }px;
          margin-left: ${ offset }px;
          background-color: ${ _data.color };
        "></span>
      </span>${ _data.end }
    `;
  }
  // render to string
  return `
    <table>
      <thead>
        <tr>
          <th colspan="2">
            ${ mainTitle }
            ${ subTitle && subTitle !== mainTitle ? ` (${ subTitle })` : '' }
          </th>
        </tr>
      </thead>
      <tbody>
        ${ description ? `
        <tr>
          <td>Description:</td>
          <td>${ description }</td>
        </tr>
        ` : '' }
        ${ coordinates ? `
        <tr>
          <td>Coordinates:</td>
          <td class="coordinates">${ coordinates }</td>
        </tr>
        ` : '' }
        ${ !coordinates ? `
        <tr>
          <td>Position:</td>
          <td>${ position }</td>
        </tr>
        ` : '' }
        ${ source ? `
        <tr>
          <td>Source:</td>
          <td>${ source }</td>
        </tr>
        ` : '' }
      </tbody>
    </table>
  `;
});

const acceptedMargin = 5;
const className = 'domain_gfx__tooltip';

const getEntityBBox = target => {
  if (!target) throw new Error('No entity found in the whole tree');
  if (!target.dataset.entity) {
    return getEntityBBox(target.parentElement);
  }
  return target.getBoundingClientRect();
};

const findBestTooltipPosition = (entityBBox /*: Object */
, tooltipBBox /*: Object */
) => {
  let x = entityBBox.left + entityBBox.width / 2 - tooltipBBox.width / 2;
  if (x < 0) {
    x = 0; // prevent left overflow
  } else {
    x = Math.min(x, window.innerWidth - tooltipBBox.width); // right overflow
  }
  const y = entityBBox.top - tooltipBBox.height;
  // Rounding, otherwise will be blurred if not pixel aligned
  return { x: Math.round(x), y: Math.round(y) };
};

const buildTooltipContent = (html /*: string */) => {
  const el = document.createElement('div');
  el.classList.add(`${ className }___container`);
  el.innerHTML = html;
  return el;
};

class TooltipManager {
  /* ::
    _current: HTMLElement;
    _container: HTMLElement;
    _promoted: boolean;
    _currentData: ?Object;
  */
  constructor() {
    this._promoteTarget = canvas => ({ target } /*: {target: Element}*/) => {
      if (target !== canvas || this._promoted) return;
      this._container.style.willChange = 'transform';
    };

    this._demoteTarget = canvas => ({ target, relatedTarget } /*: {target: Element, relatedTarget: Element}*/
    ) => {
      if (target !== canvas || !this._promoted) return;
      if (relatedTarget && relatedTarget === this._container) return;
      this._container.style.willChange = '';
    };

    this._replaceTooltipContent = data => {
      this._current = buildTooltipContent(dataToMarkup(data));
      this._container.replaceChild(this._current, this._container.firstElementChild);
    };

    this._hide = () => {
      this._container.classList.add('hidden');
      this._visible = false;
    };

    this._display = ({ x, y }) => {
      this._container.style.transform = `translate(${ x }px, ${ y + acceptedMargin }px)`;
      this._container.classList.remove('hidden');
    };

    this._handleMouseOver = (e /*: MouseEvent */) => {
      const data = e.target[ns];
      if (this._currentData === data || !(this._currentData || data)) return;
      this._currentData = data;
      this._replaceTooltipContent(data);
      this._display(findBestTooltipPosition(getEntityBBox(e.target), this._container.getBoundingClientRect()));
    };

    this._handleMouseOut = (e /*: MouseEvent */) => {
      const data = e.target[ns];
      if (!data) return;
      if (e.relatedTarget === this._container) return;
      const relatedData = e.relatedTarget[ns];
      if (relatedData === this._currentData) return; // enter part of same entity
      this._currentData = relatedData || null;
      if (relatedData) {
        // switch tooltip content
        this._replaceTooltipContent(relatedData);
        this._display(findBestTooltipPosition(getEntityBBox(e.relatedTarget), this._container.getBoundingClientRect()));
      } else {
        // hide tooltip
        this._hide();
      }
    };

    // If no DOM, no need to do anything
    if (!window) return;
    // container
    const cont = document.createElement('div');
    cont.classList.add(className);
    cont.classList.add('hidden');
    cont.style.position = 'fixed';
    cont.style.left = '0';
    cont.style.top = '0';
    // cont.style.border = '1px solid rgba(0, 0, 255, 0.2)';
    // current node in container
    const curr = buildTooltipContent('<p>placeholder</p>');
    cont.appendChild(curr);
    // attach to instance
    this._current = curr;
    this._container = cont;
    // append to DOM
    if (!document.body) throw new Error('No body in document');
    document.body.appendChild(cont);
    this._promoted = false;
    // CSS
    if (!document.head) throw new Error('No head in document');
    document.head.appendChild(getStyleSheet({ className, acceptedMargin }));
    // add event listener to the tooltip itself
    cont.addEventListener('mouseleave', e => {
      const relatedData = e.relatedTarget[ns];
      if (relatedData === this._currentData) return; // enter part of same entity
      this._currentData = relatedData || null;
      if (relatedData) {
        // switch tooltip content
        this._replaceTooltipContent(relatedData);
        this._display(findBestTooltipPosition(getEntityBBox(e.relatedTarget), this._container.getBoundingClientRect()));
      } else {
        // hide tooltip
        this._hide();
      }
    });
  }

  // promote to own graphic accelerated layer


  // demote from own graphic accelerated layer


  attachToCanvas(canvas /*: Element */) {
    const promote = this._promoteTarget(canvas);
    const demote = this._demoteTarget(canvas);
    canvas.addEventListener('mouseenter', promote);
    canvas.addEventListener('mouseleave', demote);
    canvas.addEventListener('mouseover', this._handleMouseOver);
    canvas.addEventListener('mousemove', this._handleMouseOver); // not a typo
    canvas.addEventListener('mouseout', this._handleMouseOut);
    return () => {
      canvas.removeEventListener('mouseenter', promote);
      canvas.removeEventListener('mouseleave', demote);
      canvas.removeEventListener('mouseover', this._handleMouseOver);
      canvas.removeEventListener('mousemove', this._handleMouseOver);
      canvas.removeEventListener('mouseout', this._handleMouseOut);
    };
  }
}

let tooltipManager;

var getTooltipManager = (() => {
  if (!tooltipManager) {
    tooltipManager = new TooltipManager();
  }
  return tooltipManager;
});

// @flow
const svgNamespace = 'http://www.w3.org/2000/svg';

/*::
  type Attributes = {[key: string]: ?(number | string)};
  type Child = Node | string | null;
*/

const _svg = (name /*: string */) => (attributes /*: ?Attributes */
, ...children /*: Array<Child> */
) => /*: Element */{
  // Create element
  const element = document.createElementNS(svgNamespace, name);
  // Set attributes
  for (const [attribute, value] of Object.entries(attributes || {})) {
    if (value || value === 0) {
      element.setAttribute(attribute, String(value));
    }
  }
  // Add children
  for (const child of children) {
    if (!child) continue;
    element.appendChild(child instanceof Node ? child : document.createTextNode(child));
  }
  return element;
};

const svg = _svg('svg');

const circle = _svg('circle');

const defs = _svg('defs');

const linearGradient = _svg(`linearGradient`);

const group = _svg('g');

const mask = _svg('mask');

const path = _svg('path');

const rectangle = _svg('rect');

const stop = _svg('stop');

const text = _svg('text');

const filter = _svg('filter');

const feGaussianBlur = _svg('feGaussianBlur');

const feSpecularLighting = _svg('feSpecularLighting');

const fePointLight = _svg('fePointLight');

const feComposite = _svg('feComposite');

// @flow export
var PathData = class {
  /*::
   _data: string;
   */
  constructor(startPosition /*: string */ = 'm0,0') {
    this._data = startPosition;
  }

  add(data /*: string */ = '') {
    this._data += data;
    return this;
  }

  finish(close /*: boolean */) {
    if (close) {
      this._data += 'z';
    }
    return this._data;
  }

  close() {
    return this.finish(true);
  }
};

const line = (x = 0, y = 0) => {
  if (x === 0) return `v${ y }`;
  if (y === 0) return `h${ x }`;
  return `l${ x },${ y }`;
};

const offset = 8;

const horizontalLine = length => line(length, 0);
const verticalLine = length => line(0, length);

const buildSquareHead = (color, isOnTop) => {
  return rectangle({
    x: -1.5, y: isOnTop ? -offset - 1.5 : offset - 1.5,
    width: 3, height: 3,
    fill: color
  });
};
const buildDiamondHead = (color, isOnTop) => {
  let d = new PathData(`m0,${ isOnTop ? -offset - 2 : offset - 2 }`).add(line(2, 2)).add(line(-2, 2)).add(line(-2, -2)).close();
  return path({ d, fill: color });
};
const buildCircleHead = (color, isOnTop) => {
  return circle({ cx: 0, cy: isOnTop ? -offset : offset, r: 1.5, fill: color });
};
const buildArrowHead = (color, isOnTop) => {
  let d;
  if (isOnTop) {
    d = new PathData(`m-2,${ -(offset - 2) }`).add(line(2, -2)).add(line(2, 2)).finish();
  } else {
    d = new PathData(`m-2,${ offset - 2 }`).add(line(2, 2)).add(line(2, -2)).finish();
  }
  return path({ stroke: color, fill: 'none', d });
};
const buildPointerHead = (color, isOnTop) => {
  const sequenceSize = 5;
  let d;
  if (isOnTop) {
    d = new PathData(`m-2,${ -(sequenceSize / 2 + 2) }`).add(line(2, 2)).add(line(2, -2)).finish();
  } else {
    d = new PathData(`m-2,${ sequenceSize / 2 + 2 }`).add(line(2, -2)).add(line(2, 2)).finish();
  }
  return path({ stroke: color, fill: 'none', d });
};
const buildLineHead = (color, isOnTop) => {
  return path({
    stroke: color,
    d: new PathData(`m0,${ (isOnTop ? -1 : 1) * offset - 1.5 }`).add(verticalLine(3)).finish()
  });
};

const buildHead = ({ style, color, isOnTop }) => {
  switch (style) {
    case 'diamond':
      return buildDiamondHead(color, isOnTop);
    case 'circle':
      return buildCircleHead(color, isOnTop);
    case 'arrow':
      return buildArrowHead(color, isOnTop);
    case 'pointer':
      return buildPointerHead(color, isOnTop);
    case 'line':
      return buildLineHead(color, isOnTop);
    case 'square':
    default:
      return buildSquareHead(color, isOnTop);
  }
};

var markup = (({
  start, end, v_align, vAlign, level = 0,
  lineColor, headColor, color,
  headStyle
}, residueWidth) => {
  // eslint-disable-next-line camelcase
  const isOnTop = /top/i.test(v_align || vAlign);
  let d = new PathData().add(verticalLine((1.5 * level + offset) * (isOnTop ? -1 : 1)));
  if (end) {
    d = d.add(horizontalLine((end - start) * residueWidth)).add(verticalLine((1.5 * level + offset) * (isOnTop ? 1 : -1)));
  }
  d = d.finish();
  return group(null, path({
    d, fill: 'none',
    // if lineColor is defined, use that
    // if it has a end, it is nested, so the color is the line's color
    // otherwise just default to black
    stroke: lineColor || end && color || 'black'
  }), !end && buildHead({
    // if headColor is defined, use that
    // if it has no end, it is not nested, so the color is the head's color
    // otherwise just default to black
    color: headColor || !end && color || 'black',
    style: headStyle,
    isOnTop
  }));
});

// @flow
var sequence = (({ position: { x, y }, length: width, height, color }
/*: {
  position: {x: number, y: number},
  length: number,
  height: number,
  color: ?string,
} */
) => rectangle({
  x, y, width, height,
  fill: color || '#d8d8d8',
  rx: height / 2, ry: height / 2
}));

// @flow
const smoothStops = (colors /*: Array<string>*/) => {
  let _colors = colors;
  // If only one color provided in the array
  if (_colors.length === 1) {
    _colors[1] = _colors[0];
  }
  const { length } = _colors; // length
  const step = 100 / (length - 1); // step
  return _colors.map((color, i) => stop({
    offset: `${ i * step }%`,
    'stop-color': color
  }));
};
const bandStops = (colors /*: Array<string>*/) => {
  const output = [];
  const { length } = colors; // length
  const step = 100 / length; // step
  for (let i = 0; i < length; i++) {
    output.push(stop({ offset: `${ i * step }%`, 'stop-color': colors[i] }));
    output.push(stop({ offset: `${ i * step + step }%`, 'stop-color': colors[i] }));
  }
  return output;
};

var gradientMaker = ((colors /*: Array<string>*/, smoothGradient /*: ?boolean */) => {
  const gradientId = uniqueId();
  return {
    gradientId,
    gradientElement: linearGradient({ id: gradientId, x1: 0, x2: 0, y1: 0, y2: 1 }, ...(smoothGradient ? smoothStops : bandStops)(colors))
  };
});

// @flow
const height = 10;
const radius = height / 2;

const line$1 = (x = 0, y = 0) => {
  if (x === 0) return `v${ y }`;
  if (y === 0) return `h${ x }`;
  return `l${ x },${ y }`;
};

const horizontalLine$1 = length => line$1(length, 0);
const verticalLine$1 = length => line$1(0, length);

const arc = (rx, ry, xAxisRotate, largeArcFlag, sweepFlag, x, y) => `A${ rx },${ ry },${ xAxisRotate },${ largeArcFlag },${ sweepFlag },${ x },${ y }`;

const domainEnd = (endStyle /*: string */, topBottomLength /*: number */) => {
  switch (endStyle.toLowerCase()) {
    case 'jagged':
      return horizontalLine$1(radius) + line$1(-radius / 2, radius / 2) + line$1(radius / 2, radius / 2) + line$1(-radius / 2, radius / 2) + line$1(radius / 2, radius / 2) + horizontalLine$1(-radius);
    case 'arrow':
      return line$1(radius, radius) + line$1(-radius, radius);
    case 'curved':
      return arc(radius, radius, 0, 0, 1, topBottomLength + radius, height);
    case 'straight':
    default:
      return horizontalLine$1(radius) + verticalLine$1(height) + horizontalLine$1(-radius);
  }
};
const domainStart = (startStyle /*: string */) => {
  switch (startStyle.toLowerCase()) {
    case 'jagged':
      return horizontalLine$1(-radius) + line$1(radius / 2, -radius / 2) + line$1(-radius / 2, -radius / 2) + line$1(radius / 2, -radius / 2) + line$1(-radius / 2, -radius / 2) + horizontalLine$1(radius);
    case 'arrow':
      return line$1(-radius, -radius) + line$1(radius, -radius);
    case 'curved':
      return arc(radius, radius, 0, 0, 1, radius, 0);
    case 'straight':
    default:
      return horizontalLine$1(-radius) + verticalLine$1(-height) + horizontalLine$1(radius);
  }
};

const domainTopLine = (length /*: number */) => horizontalLine$1(length);
const domainBottomLine = (length /*: number */) => horizontalLine$1(-length);

const domain = ({
  start, end, startStyle, endStyle, fill,
  residueWidth, mask: mask$$1, filter: filter$$1
} /*: {
   start: number,
   end: number,
   startStyle: ?string,
   endStyle: ?string,
   fill: string,
   residueWidth: number,
   mask: string,
   filter: ?string,
  } */) => {
  const length = (end - start) * residueWidth;
  const topBottomLength = length - 2 * radius;
  const d = new PathData(`m${ radius },0`).add(domainTopLine(topBottomLength)).add(domainEnd(endStyle || '', topBottomLength)).add(domainBottomLine(topBottomLength)).add(domainStart(startStyle || '')).close();
  return path({ d, fill, mask: mask$$1, filter: filter$$1 });
};

const envelope = ({ start, aliStart, aliEnd, end, residueWidth }) => {
  const maskId = uniqueId();
  return {
    maskId,
    maskElement: mask({
      id: maskId, x: 0, y: 0,
      width: (end - start) * residueWidth, height,
      fill: '#fff'
    },
    // beginning (partially covered)
    rectangle({
      x: 0,
      y: 0,
      width: (aliStart - start) * residueWidth,
      height,
      opacity: 0.6
    }),
    // middle (completely uncovered)
    rectangle({
      x: (aliStart - start) * residueWidth,
      y: 0,
      width: (aliEnd - aliStart) * residueWidth,
      height,
      opacity: 1
    }),
    // end (partially covered)
    rectangle({
      x: (aliEnd - start) * residueWidth,
      y: 0,
      width: (end - aliEnd) * residueWidth,
      height,
      opacity: 0.6
    }))
  };
};

var domain$1 = (({ start, aliStart, aliEnd, end, startStyle, endStyle, color, text: text$$1, gradient }
/*: {
  start: number,
  aliStart: ?number,
  aliEnd: ?number,
  end: number,
  startStyle: ?string,
  endStyle: ?string,
  color: string | Array<string>,
  text: ?string,
  gradient: ?boolean,
} */
, residueWidth /*: number */
, spotlight /*: ?string */
, addToRefs /*: function */
) => {
  const { maskId, maskElement } = envelope({
    start, aliStart: aliStart || start,
    aliEnd: aliEnd || end, end,
    residueWidth
  });
  addToRefs(maskElement);
  let fill = color;
  let gradientObj = {};
  if (Array.isArray(fill)) {
    gradientObj = gradientMaker(fill, gradient);
    addToRefs(gradientObj.gradientElement);
    fill = `url(#${ gradientObj.gradientId })`;
  }
  const textElement = text({
    x: (end - start) * residueWidth / 2, y: height * 0.75 + 0.5,
    'text-anchor': 'middle',
    'font-size': 7.5,
    'font-family': 'Sans-Serif',
    fill: '#000',
    opacity: 0
  }, text$$1 || '');
  if (textElement.dataset instanceof Object) {
    textElement.dataset.maxwidth = (end - start) * residueWidth;
  }
  return group(null, domain({
    start, end, startStyle, endStyle, residueWidth,
    fill: fill, mask: `url(#${ maskId })`,
    filter: spotlight && `url(#${ spotlight })`
  }), text$$1 ? textElement : null);
});

// @flow
const motifOpacity = 0.5;

var motif = (({ position: { x, y }, length: width, height, color, gradient }
/*: {
 position: {x: number, y: number},
 length: number,
 height: number,
 color: ?Array<string> | string,
 gradient: ?boolean,
 } */
, addToDefs /*: function */
) => {
  const basicAttributes = { x, y, width, height, opacity: motifOpacity };
  if (!Array.isArray(color)) {
    return rectangle(_extends({}, basicAttributes, { fill: color || 'gray' }));
  }
  const { gradientId, gradientElement } = gradientMaker(color, gradient);
  addToDefs(gradientElement);
  return rectangle(_extends({}, basicAttributes, { fill: `url(#${ gradientId })` }));
});

const connectData = (entity, data) => {
  if (!(window && (data.tooltip || data.metadata))) return;
  for (const element of entity.querySelectorAll(':not(g)')) {
    element[ns] = data;
  }
};

class SvgRenderer {
  constructor({ width, height, spotlight = true }) {
    this._addToDefs = element => this._defs.appendChild(element);

    this.drawMarkup = (m, residueWidth, previousNestedMarkups) => {
      if (m.end && !Number.isFinite(m.level)) {
        const availableLevels = new Set([0, 1, -1]);
        for (const previous of previousNestedMarkups) {
          if (m.start < previous.end) {
            availableLevels.delete(previous.level);
          }
        }
        const [level] = availableLevels;
        m.level = level || 0;
      }
      const g = group({ transform: `translate(${ m.start * residueWidth }, 10)` }, markup(m, residueWidth));
      g.dataset.entity = 'markup';
      connectData(g, m);
      this._canvas.appendChild(g);
    };

    this.drawSequence = length => {
      const g = group({ transform: 'translate(0 10)' }, sequence({
        position: { x: 0, y: -2.5 },
        length,
        height: 5,
        color: '#d8d8d8'
      }));
      g.dataset.entity = 'sequence';
      this._canvas.appendChild(g);
    };

    this.drawRegion = (region, residueWidth) => {
      const g = group({ transform: `translate(${ region.start * residueWidth }, 5)` }, domain$1(region, residueWidth, this._spotlight, this._addToDefs));
      g.dataset.entity = 'region';
      connectData(g, region);
      this._canvas.appendChild(g);
      const textToFit = g.querySelector('[data-maxwidth]');
      if (!textToFit) return;
      if (textToFit.getBBox().width <= +textToFit.dataset.maxwidth) {
        textToFit.setAttribute('opacity', 1);
      } else {
        textToFit.parentElement.removeChild(textToFit);
      }
    };

    this.drawMotif = (m, residueWidth) => {
      const g = group({ transform: `translate(${ m.start * residueWidth }, 6)` }, motif({
        position: { x: 0, y: 0 },
        length: (m.end - m.start) * residueWidth,
        height: 8,
        color: m.color,
        gradient: m.gradient
      }, this._addToDefs));
      g.dataset.entity = 'motif';
      connectData(g, m);
      this._canvas.appendChild(g);
    };

    this._spotlight = spotlight && uniqueId();
    this._defs = defs(null, this._spotlight && filter({
      id: this._spotlight, filterUnits: 'objectBoundingBox',
      x: -0.1, y: -0.1, width: 5, height: 5
    }, feGaussianBlur({ in: 'SourceAlpha', stdDeviation: 1, result: 'alpha_blur' }), feSpecularLighting({
      in: 'alpha_blur', surfaceScale: 5, specularConstant: 1.5,
      specularExponent: 12, 'lighting-color': '#ddd', result: 'light'
    }, fePointLight({ x: -100, y: -200, z: 100 })), feComposite({ in: 'SourceGraphic', in2: 'light', operator: 'out' })));
    this._canvas = svg({ width, height, viewBox: `0 0 ${ width } ${ height }` }, this._defs);
    this._canvas.style.width = `${ width * 2 }px`;
    this._canvas.style.height = `${ height * 2 }px`;
  }

  get canvas() {
    return this._canvas;
  }

}

var getDefaults = (() => ({
  image: {
    headSize: {
      circle: 3,
      square: 5,
      diamond: 4,
      arrow: 3,
      pointer: 3,
      line: 3
    },
    sequenceEndPadding: 2,
    offset: {
      x: 0,
      y: 0
    },
    increment: {
      lollipopToLollipop: 7,
      bridgeToBridge: 2,
      bridgeToLollipop: 5
    },
    largeJaggedSteps: 6,
    fontSize: '10px',
    height: {
      markup: 20,
      region: 20,
      motif: 14
    },
    opacity: {
      motif: 0.6,
      env: 0.6
    },
    labelPadding: 3,
    width: {
      residue: 0.5
    },
    scale: {
      x: 1,
      y: 1
    },
    highlight: {
      weight: 1,
      color: '#000'
    }
  },
  options: {
    baseUrl: '',
    imageMap: true,
    labels: true,
    tips: true,
    tipStyle: 'pfam',
    newCanvas: true
  }
}));

// @flow
const keyNumbers = new Set(['start', 'end', 'aliStart', 'aliEnd', 'modelStart', 'modelEnd', 'length', 'level']);
const colour = /(^.*colo)u(r.*$)/i;
const falseString = /^f(alse)?$/i;

const sanitizer = (data /*: Object */) => {
  const output = {};
  for (const [rawKey, rawValue] of Object.entries(data)) {
    let [key, value] = [rawKey, rawValue];
    // process numbers
    if (keyNumbers.has(key)) {
      value = +value;
      if (isNaN(value)) {
        throw new Error(`expected key ${ rawKey } to be a number, not ${ String(rawValue) })`);
      }
    }
    // process British spelling
    if (colour.test(key)) {
      key = key.replace(colour, '$1$2');
    }
    // process booleans
    if (key === 'display') {
      if (typeof value === 'string') {
        value = !falseString.test(value);
      } else {
        value = !!value;
      }
    }
    if (value) {
      // recursive sanitization, if need be
      if (Array.isArray(value)) {
        value = value.map(item => {
          if (!item || typeof item !== 'object') return item;
          return sanitizer(item);
        });
      } else if (typeof value === 'object') {
        value = sanitizer(value);
      }
    }
    output[key] = value;
  }
  return output;
};

const isHidden = ({ hidden, display = true }) => hidden || !display;

class DomainGFX {
  constructor({ data = {}, parent, params = {} } = {}) {
    this._draw = () => {
      // draw markups
      const markups = (this._data.markups || []).sort((a, b) => a.start - b.start);
      const nestedMarkups = [];
      let needsTooltips = false;
      for (const markup of markups) {
        if (isHidden(markup)) continue;
        this._renderer.drawMarkup(markup, this._params.image.width.residue, nestedMarkups);
        needsTooltips |= !!(markup.tooltip || markup.metadata);
        if (markup.end) nestedMarkups.push(markup);
      }
      // draw sequence
      this._renderer.drawSequence(this._data.length * this._params.image.width.residue);
      // draw regions
      for (const region of this._data.regions || []) {
        if (isHidden(region)) continue;
        this._renderer.drawRegion(region, this._params.image.width.residue);
        needsTooltips |= !!(region.tooltip || region.metadata);
      }
      // draw motifs
      for (const motif of this._data.motifs || []) {
        if (isHidden(motif)) continue;
        this._renderer.drawMotif(motif, this._params.image.width.residue);
        needsTooltips |= !!(motif.tooltip || motif.metadata);
      }
      // connect tooltip logic
      if (needsTooltips) {
        this._detach = getTooltipManager().attachToCanvas(this._renderer.canvas);
      }
    };

    this._createCanvas = () => {
      this._renderer = new SvgRenderer({
        width: this._computeWidth(this._data, this._params),
        height: this._computeHeight()
      });
      return this._renderer.canvas;
    };

    this.delete = () => {
      // unsubscribe to mouse events
      if (this._detach) {
        this._detach();
        this._detach = null;
      }
      // clean-up logic
      this._parent.removeChild(this._canvas);
      // remove references to DOM
      this._canvas = this._parent = null;
    };

    this._data = sanitizer(data);
    this._parent = parent;
    this._params = merge({}, getDefaults(), params);
    this._canvas = this._createCanvas();
    this._parent.appendChild(this._canvas);
    this._draw();
  }

  _computeWidth({ length = 0 }, { image: { width, sequenceEndPadding } }) {
    return length * width.residue + sequenceEndPadding;
  }

  _computeHeight() {
    return 20;
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = sanitizer(value);
    const prevCanvas = this._canvas;
    this._canvas = this._createCanvas();
    this._parent.replaceChild(this._canvas, prevCanvas);
    this._draw();
  }

}

// Dispatches event on document when library has loaded
// This way user can wait for async load, and when event fires, call the lib
document.dispatchEvent(new CustomEvent('domainGfxReady', { detail: DomainGFX }));

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function () {
  return root.Date.now();
};

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;
var nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax$1(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* globals CodeMirror: false */
(() => {
  var _ref = asyncToGenerator(function* (jsonFileContent) {
    // DOM elements
    const textArea = document.querySelector('.data textarea');
    const visu = document.querySelector('.visu');
    const invalid = document.querySelector('.invalid');

    // Domain graphics
    let dg;

    // Render function
    const updateView = function (cm) {
      const text = cm.getValue();
      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        invalid.classList.remove('hidden');
        console.error(err);
        return;
      }
      if (dg) {
        dg.data = data;
      } else {
        dg = new DomainGFX({ parent: visu, data });
      }
      invalid.classList.add('hidden');
    };

    // CodeMirror logic
    textArea.value = yield jsonFileContent;
    const cm = CodeMirror.fromTextArea(textArea, { lineNumbers: true });
    cm.on('change', debounce(updateView, 1000));

    // Kicks off first render
    updateView(cm);
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})()(fetch('data.json').then(r => r.text()));

}());
//# sourceMappingURL=bundle.js.map
