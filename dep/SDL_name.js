var FFI = require('ffi-napi')
var ArrayType = require('ref-array-napi')
var Struct = require('ref-struct-napi')
var Union = require('ref-union-napi');
var ref = require('ref-napi')



var voit = exports.voit = ref.types.void

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
}, exports)