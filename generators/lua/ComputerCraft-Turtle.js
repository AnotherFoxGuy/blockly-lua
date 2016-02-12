/**
 * Blockly Lua: ComputerCraft Turtle API
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
 * @fileoverview Generating Lua for ComputerCraft Turtle API
 * @author Edgar (AnotherFoxGuy)
 */

/* global Blockly*/


goog.provide('Blockly.Lua.Turtle');

goog.require('Blockly.Lua');

Blockly.Lua['turtle_movement'] = function(block) {
  var dropdown_dir = block.getFieldValue('dir');

  var code = "turtle.";
  code += dropdown_dir;
  code += "()"

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};


Blockly.Lua['turtle_dig'] = function(block) {
  var dropdown_dig = block.getFieldValue('dig');

  var code = "turtle.";
  code += dropdown_dig;
  code += "()"
    // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_place'] = function(block) {
  var dropdown_place = block.getFieldValue('place');

  var code = "turtle.";
  code += dropdown_place;
  code += "()"

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_detect'] = function(block) {
  var dropdown_detect = block.getFieldValue('detect');

  var code = "turtle.";
  code += dropdown_detect;
  code += "()"

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};