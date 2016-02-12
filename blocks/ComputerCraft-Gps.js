/**
 * Blockly Lua: ComputerCraft Gps API
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
 * @fileoverview Blocks for ComputerCraft Gps API
 * @author Edgar (AnotherFoxGuy)
 */

/* global Blockly*/

goog.provide('Blockly.Blocks.Gps');

goog.require('Blockly.Blocks');


Blockly.Blocks['gps_locate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gps locate");
    this.appendDummyInput()
        .appendField("Debug")
        .appendField(new Blockly.FieldDropdown([["no", "false"], ["yes", "true"]]), "debug");
    this.appendValueInput("timeout")
        .setCheck("Number")
        .appendField("Timeout");
    this.setOutput(true, "vector");
    this.setColour(120);
    this.setTooltip('Tries to retrieve the computer or turtles own location. On success, returns the location of the turtle’s modem. On failure (if no responses are received for timeout seconds, by default 2), returns nil. If debug is true, debug messages are printed.');
    this.setHelpUrl('http://www.computercraft.info/wiki/Gps_(API)');
  }
};