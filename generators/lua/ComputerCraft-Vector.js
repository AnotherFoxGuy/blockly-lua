/**
 * Blockly Lua: ComputerCraft Vector API
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Lua for ComputerCraft Vector API
 * @author Edgar (AnotherFoxGuy)
 */

/* global Blockly*/


goog.provide('Blockly.Lua.Vector');

goog.require('Blockly.Lua');

Blockly.Lua['vector_new'] = function(block) {
  var value_x = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC);
  var value_y = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC);
  var value_z = Blockly.Lua.valueToCode(block, 'z', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};